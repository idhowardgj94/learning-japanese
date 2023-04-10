(ns howard.learning-japanese.events
  (:require
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [howard.learning-japanese.db :refer [db]]
   [re-frame.core :as re-frame]))

(re-frame/reg-event-db
 ::navigate
 (fn-traced
  [db [_ m]]
  (assoc db :match m)))

(re-frame/reg-event-db
 ::set-word-data
 (fn-traced
  [db [_ data]]
  (.log js/console (clj->js data))
  (assoc db :word/card-data data)))

(re-frame/reg-event-db
 ::initialise-db
 (fn-traced
  [_ _]
  db))

(re-frame/reg-event-db
 ::change-card-mode
 (fn-traced [db [_ mode]]
            (assoc db :word/card-mode mode)))

(re-frame/reg-event-db
 ::toggle-word-answer
 (fn-traced
  [db _]
  (update db :word/card-answer not)))

(re-frame/reg-event-db
 ::word-next
 (fn-traced
  [db _]
  (if (< (+ 1 (:word/current-index db)) (count (:word/card-data db)))
    (-> (update db :word/current-index inc)
        (assoc :word/card-answer false))
    db)))

(re-frame/reg-event-db
 ::word-prev
 (fn-traced
  [db _]
  (if (> (:word/current-index db) 0)
    (-> (update db :word/current-index dec)
        (assoc :word/card-answer false))
    db)))

#_((re-frame/dispatch [::toggle-word-answer]))
