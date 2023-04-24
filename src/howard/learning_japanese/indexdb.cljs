(ns howard.learning-japanese.indexdb
  (:require [indexed.db :as db]
            [howard.learning-japanese.events :as event]
            [re-frame.core :as re-frame]
            [cljs.core.async :refer [go]]
            [cljs.core.async.interop :refer [<p!]]
            [ajax.core :refer [GET]]
            [datascript.core :as d]
            [cljs.reader :refer [read-string]]
            [howard.learning-japanese.events :as events]))

(def indexdb (atom nil))
(def ds-db (atom nil))
(declare get-words-data)
(declare setup-memory-db)

(defn to-js-obj
  [m]
  (clj->js m))

(defn handle-upgrade
  "handle upgrade db version
  current version is 1"
  [event]
  (js/console.log "inside handle-upgrade")
  (-> (db/create-version-change-event event)
      (db/get-request)
      (db/result)
      (db/create-database)
      (db/create-object-store "words" {:key-path "id" :auto-increment true})
      (db/create-index "chinese" "chinese" {:unique false})))

(defn handle-success
  "handle indexdb success open"
  [event idb]
  (js/console.log "inside handle-success" event)
  (reset! indexdb idb))

(defn sync-words-data
  []
  (re-frame/dispatch [::events/set-app-status :get-words-data])
  (GET "words.edn"
    {:handler (fn [response]
                (js/console.log @indexdb)
                (let [data (read-string response)
                      tx (-> @indexdb
                             (db/result)
                             (db/create-database)
                             (db/transaction ["words"] "readwrite"))
                      store (db/object-store tx "words")]
                  (doseq [it data]
                    (js/console.log "insert: " (to-js-obj it))
                    (db/put store (to-js-obj it))))
                (setup-memory-db))}))

(defn wait-db-done
  "wait for db done"
  []
  (let [timeout (atom nil)]
    (js/Promise. (fn [res]
                   (reset! timeout (js/setInterval
                                    (fn []
                                      (when-not (nil? @indexdb)
                                        (js/clearTimeout @timeout)
                                        (res nil))) 1000))))))

(defn init-indexdb
  "init and open indexdb"
  []
  (js/console.log "init index db 'learning-jpaanese' v1...")
  (js/console.log "QQQ?????")
  (as-> (db/open "learning-japanese" 1) $
    (db/on $ "error" (fn [event] (js/console.log "inside error" event)))
    (db/on $ "blocked" (fn [event] (js/console.log "inside blocked" event)))
    (db/on $ "upgradeneeded" handle-upgrade)
    (db/on $ "success" (fn [event] (handle-success event $)))))

(def data (atom {:data  (transient [])
                 :status :none}))

(defn get-words-data
  "get words form indexdb."
  []
  (go
    (js/console.log "inside word data")
    (reset! data {:data (transient [])
                  :status :none})

    (let [_ (<p! (wait-db-done))
          trans (-> @indexdb
                    (db/result)
                    (db/create-database)
                    (db/transaction ["words"] "readwrite"))
          store (db/object-store trans "words")]
      (js/console.log "get data out of indexdb..")
      (-> (db/open-cursor store)
          (db/on "success"
                 (fn [e]
                   (let [cursor (-> (.-target e)
                                    (db/create-request)
                                    (db/result))]
                     (if (nil? cursor)
                       (let [p-data (persistent! (:data @data))]
                         (if (<= (count p-data) 0)
                           (do
                             (js/console.log "inside if")
                             (sync-words-data))
                           (do
                             (js/console.log "inside else" (clj->js @data))
                             (swap! data assoc
                                    :status :success
                                    :data p-data))))
                       (do (swap! data (fn [{:keys [data]}]
                                         (let [val (-> (db/create-cursor-with-value cursor)
                                                       (db/value)
                                                       (js->clj :keywordize-keys true))]
                                           {:status :loading
                                            :data   (conj! data val)})))

                           (-> (db/create-cursor-with-value cursor)
                               (db/continue)))))))))))

(defn setup-datascript
  "setup datascript db
  need to wait until data atom done"
  []
  (let [conn (d/create-conn)]
    (d/transact! conn (:data @data))
    conn))

(defn setup-memory-db
  "setup memory db from indexdb, and store it into ds-db
  wont sync indexdb data
  "
  []
  (re-frame/dispatch [::events/set-app-status ::init])
  (init-indexdb)
  (get-words-data)
  (let [timeout (atom nil)]
    (reset! timeout (js/setInterval
                     (fn []
                       (when (= (:status @data) :success)
                         (js/console.log "indexdb setup finish")
                         (reset! ds-db (setup-datascript))
                         (re-frame/dispatch [::events/set-app-status :finish])
                         (js/clearTimeout @timeout))) 1000))))

(defn get-ds-db
  "get datascript db"
  []
  @@ds-db)
