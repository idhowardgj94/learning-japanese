(ns howard.learning-japanese.api
  (:require
   [day8.re-frame.tracing :refer [fn-traced]]
   [re-frame.core :as re-frame]))

(re-frame/reg-fx
 ::load-from-edn
 (fn [_]))

(re-frame/reg-event-fx
 ::load-data
 (fn-traced
  [_ _]
  {:fx [[::load-from-edn]]}))

#_((require '[clojure.tools.deps.alpha.repl :refer [add-libs]])
   (require '[clojure.repl :refer [doc]])
   (doc add-libs)
   (print "hello, world"))
