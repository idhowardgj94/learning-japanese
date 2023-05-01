(ns howard.learning-japanese.events
  (:require
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [howard.learning-japanese.db :refer [db]]
   [re-frame.core :as re-frame]))

(re-frame/reg-event-db
 :app/set-app-status
 (fn-traced
  [db [_ status]]
  (assoc db :app/status status)))

(re-frame/reg-event-db
 ::navigate
 (fn-traced
  [db [_ m]]
  (assoc db :match m)))

(re-frame/reg-event-db
 ::set-word-data
 (fn-traced
  [db [_ data]]
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
        (assoc :word/card-answer false)))))

(re-frame/reg-event-db
 ::word-prev
 (fn-traced
  [db _]
  (if (> (:word/current-index db) 0)
    (-> (update db :word/current-index dec)
        (assoc :word/card-answer false)))))
(re-frame/reg-event-db
 ::word-reset
 (fn-traced
  [db _]
  (-> (assoc db :word/current-index 0 :word/card-answer false))))
(re-frame/reg-event-db
 ::layout.toggle-drawler
 (fn-traced
  [db _]
  (assoc db :layout/toggle-drawler (not (:layout/toggle-drawler db)))))

(re-frame/reg-event-fx
 ::get-check-list
 (fn-traced
  [_ [_ word]]
  {:fx [[:indexdb/get-check-list word]]}))

(re-frame/reg-event-db
 :indexdb/set-word-record
 (fn-traced
  [db [_ word-record]]
  (assoc db :word/current-word-record word-record)))

(re-frame/reg-event-fx
 ::add-check-list-record-by-word
 (fn-traced
  [{:keys [db]} [_ word]]
  {:fx [[:update-check-list-record {:word word :count 1}]
        [:indexdb/get-check-list word]]}))

(re-frame/reg-event-fx
 ::remove-check-list-record-by-word
 (fn-traced
  [{:keys [db]} [_ word]]
  {:fx [[:update-check-list-record {:word word :count -1}]
        [:indexdb/get-check-list word]]}))
#_((re-frame/dispatch [::toggle-word-answer]))
