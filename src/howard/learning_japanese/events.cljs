(ns howard.learning-japanese.events
  (:require
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [re-frame.core :as re-frame]))

(re-frame/reg-event-db
 ::initialise-db
 (fn-traced
  [_ _]
  {:word/card-answer false
   :word/card-mode "hide-chinese"}))

(re-frame/reg-event-db
 ::toggle-word-answer
 (fn-traced
  [db _]
  (update db :word/card-answer not)))

#_((re-frame/dispatch [::toggle-word-answer]))
