(ns howard.learning-japanese.api
  (:require
   [ajax.core :refer [GET]]
   [day8.re-frame.tracing :refer [fn-traced]]
   [cljs.reader :refer [read-string]]
   [re-frame.core :as re-frame]))

(GET "/words.edn"
  {:handler (fn [response]
              (let [data (read-string response)]
                (print data))
              (^js .log js/console response "QQ"))})

(re-frame/reg-fx
 ::load-from-edn
 (fn [_]))

(re-frame/reg-event-fx
 ::load-data
 (fn-traced
  [_ _]
  {:fx [[::load-from-edn]]}))
