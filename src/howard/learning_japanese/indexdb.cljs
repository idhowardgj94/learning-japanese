(ns howard.learning-japanese.indexdb
  (:require
   [ajax.core :refer [GET]]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer [<p!]]
   [cljs.reader :refer [read-string]]
   [cljs.spec.alpha :as s]
   [datascript.core :as d]
   [indexed.db :as db]
   [re-frame.core :as re-frame]
   [spec-tools.data-spec :as ds]))

; reg event to re-frame
(defonce learning-japanese-db (atom nil))
(defonce check-list-db (atom nil))
(defonce ds-learning-japanese-db (atom nil))
(defonce ds-check-list-db (atom nil))
(declare get-words-data-from-indexdb)
(declare setup-memory-db)

(defn to-js-obj
  [m]
  (clj->js m))

(defn handle-learning-japanese-upgrade
  "handle upgrade db version
  current version is 1"
  [event]
  (-> (db/create-version-change-event event)
      (db/get-request)
      (db/result)
      (db/create-database)
      (db/create-object-store "words" {:key-path "word"})
      (db/create-index "chinese" "chinese" {:unique false})))

(defn sync-words-data
  []
  (re-frame/dispatch [:app/set-app-status :get-words-data])
  (js/Promise.
   (fn [res]
     (GET "words.edn"
       {:handler (fn [response]
                   (let [data (read-string response)
                         tx (-> @learning-japanese-db
                                (db/result)
                                (db/create-database)
                                (db/transaction ["words"] "readwrite"))
                         store (db/object-store tx "words")]
                     (doseq [it data]
                       (db/put store (to-js-obj it))))
                   (res (setup-memory-db)))}))))

(defn- open-learning-japanese []
  (js/Promise.
   (fn [res]
     (as-> (db/open "learning-japanese" 1) $
       (db/on $ "error" (fn [event] (js/console.log "inside error" event)))
       (db/on $ "blocked" (fn [event] (js/console.log "inside blocked" event)))
       (db/on $ "upgradeneeded" handle-learning-japanese-upgrade)
       (db/on $ "success" (fn [_]
                            (reset! learning-japanese-db $)
                            (res)))))))

(defn get-words-data-from-indexdb
  "get words form indexdb."
  []
  (js/Promise.
   (fn [res]
     (let [trans (-> @learning-japanese-db
                     (db/result)
                     (db/create-database)
                     (db/transaction ["words"] "readwrite"))
           store (db/object-store trans "words")
           data (transient [])]
       (-> (db/open-cursor store)
           (db/on "success"
                  (fn [e]
                    (let [cursor (-> (.-target e)
                                     (db/create-request)
                                     (db/result))]
                      (if (nil? cursor)
                        (let [p-data (persistent! data)]
                          (if (<= (count p-data) 0)
                            ;; not data, sync from db
                            (res (sync-words-data))

                            ;; return
                            (do
                              (res p-data))))
                        (let [val (-> (db/create-cursor-with-value cursor)
                                      (db/value)
                                      (js->clj :keywordize-keys true))]
                          (conj! data val)
                          (-> (db/create-cursor-with-value cursor)
                              (db/continue))))))))))))

;; ===============================================================
;; ========== functions abaout check-list indexdb below ==========
;; ===============================================================

(defn- handle-check-list-upgrade
  "handle check list upgrade"
  [event]
  (js/console.log "inside handle-check-list-upgraded")
  (-> (db/create-version-change-event event)
      (db/get-request)
      (db/result)
      (db/create-database)
      (db/create-object-store "check-lists" {:key-path "word" :auto-increment true})))

(defn- open-check-list []
  (js/Promise.
   (fn [res]
     (as-> (db/open "check-list" 1) $
       (db/on $ "error" (fn [event] (js/console.log "inside error" event)))
       (db/on $ "blocked" (fn [event] (js/console.log "inside blocked" event)))
       (db/on $ "upgradeneeded" handle-check-list-upgrade)
       (db/on $ "success" (fn [_]
                            (reset! check-list-db $)
                            (res)))))))

;; TODO: spec, need to be put to other place.
(def check-list
  {:word string?
   :count number?})
(def check-list-spec
  (ds/spec
   {:name ::check-list-spec
    :spec check-list}))

(defn add-check-list-count-to-datascript
  "add to datascrit, need to make sure that datascript initialize first
  Return the data that original count + (:count data)
  "
  [data]
  {:pre [(s/valid? check-list-spec data)
         (not (nil? @ds-check-list-db))]}
  (let [count (:count data)
        word (:word data)
        e (-> (d/q `[:find ?e ?c
                     :where [?e :word ~word]
                     [?e :count ?c]]
                   @@ds-check-list-db)
              ;; 1st first get  from set, and second first get from inner vector.
              (first))]
    (if (nil? e)
      (do
        (d/transact! @ds-check-list-db
                     [data])
        data)
      (do
        (d/transact! @ds-check-list-db
                     [[:db/add
                       (first e)
                       :count
                       (+ (second e) count)]])
        (assoc data :count (+ count (second e)))))))

(defn update-check-list-index-db
  "update indexdb by record"
  [record]
  {:pre [(s/valid? check-list-spec record)
         (not (nil? @check-list-db))]}
  (let [tx (-> @check-list-db
               (db/result)
               (db/create-database)
               (db/transaction ["check-lists"] "readwrite"))
        store (db/object-store tx "check-lists")]
    (db/put store (to-js-obj record))))

(defn update-check-list-record
  "insert check list record to db
   will first add to datascript
   then add to indexedDB
  "
  [data]
  {:pre [(s/valid? check-list-spec data)]}
  (-> (add-check-list-count-to-datascript data)
      (update-check-list-index-db)))

(re-frame/reg-fx
 :update-check-list-record
 (fn [record]
   (update-check-list-record record)))

;; TODO: can abstract load logic
(defn get-check-list-data-from-indexdb
  "get check-list-data-from indexdb"
  []
  (js/Promise.
   (fn [res]
     (let [trans (-> @check-list-db
                     (db/result)
                     (db/create-database)
                     (db/transaction ["check-lists"] "readwrite"))
           store (db/object-store trans "check-lists")
           data (transient [])]
       (-> (db/open-cursor store)
           (db/on "success"
                  (fn [e]
                    (let [cursor (-> (.-target e)
                                     (db/create-request)
                                     (db/result))]
                      (if (nil? cursor)
                        (let [p-data (persistent! data)]
                          (res p-data))
                        (let [val (-> (db/create-cursor-with-value cursor)
                                      (db/value)
                                      (js->clj :keywordize-keys true))]
                          (conj! data val)
                          (-> (db/create-cursor-with-value cursor)
                              (db/continue))))))))))))

;(insert-check-list-record {:word 2})

;; ===============================================================
;; ========== functions abaout initial and script below ===========
;; ===============================================================

(defn init-indexdb
  "init and open indexdb"
  []
  (js/Promise.
   (fn [res]
     (go
       (<p! (open-learning-japanese))
       (<p! (open-check-list))
       (res)))))

;; TODO: check sechma
(defn setup-datascript
  "setup datascript db
  need to wait until data atom done"
  [data]
  (let [conn (d/create-conn)]
    (d/transact! conn data)
    conn))

(defn get-ds-db
  "get datascript db"
  []
  @@ds-learning-japanese-db)

(defn get-ds-check-list-db
  []
  @@ds-check-list-db)

;{:db (assoc db :word-record  (get-check-list-record-by-word word))}

(defn setup-memory-db
  "setup memory db from indexdb, and store it into ds-db
  wont sync indexdb data
  "
  []
  (go
    (re-frame/dispatch [:app/set-app-status ::init])
    (<p! (init-indexdb))
    (let [word-data  (<p! (get-words-data-from-indexdb))
          check-list-data (<p! (get-check-list-data-from-indexdb))]
      (reset! ds-learning-japanese-db (setup-datascript word-data))
      (reset! ds-check-list-db (setup-datascript check-list-data)))
    (re-frame/dispatch [:app/set-app-status :finish])))
