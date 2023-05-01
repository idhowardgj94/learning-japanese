(ns howard.learning-japanese.api
  (:require
   [ajax.core :refer [GET]]
   [day8.re-frame.tracing :refer [fn-traced]]
   [cljs.reader :refer [read-string]]
   [re-frame.core :as re-frame]
   [howard.learning-japanese.indexdb :refer [sync-words-data]]
   [howard.learning-japanese.events :as events]))

(defn setup-api
  []

  (re-frame/reg-fx
   ::load-from-edn
   (fn [_]
     (GET "words.edn"
       {:handler (fn [response]
                   (let [data (read-string response)]
                     (re-frame/dispatch [::events/set-word-data data])))})))

  (re-frame/reg-event-fx
   ::reload-indexdb
   (fn-traced
    [_ _]
    (sync-words-data)
    nil))
  (re-frame/reg-event-fx
   ::load-data
   (fn-traced
    [_ _]
    {:fx [[::load-from-edn]]})))

#_(re-frame/dispatch [::load-data])
