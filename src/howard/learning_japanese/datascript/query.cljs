(ns howard.learning-japanese.datascript.query
  (:require
   [datascript.core :as d]
   [howard.learning-japanese.indexdb :refer [get-ds-db get-ds-check-list-db]]
   [re-frame.core :as re-frame]))

(defn get-page-size-by-number
  "input a number, get the size"
  [num]
  {:pre [(int? num)]
   :post [(int? %)]}
  (let [r (d/q '[:find ?c
                 :where [?e :chinese ?c]]
               (get-ds-db))]
    (->> (/ (count r) num)
         (.ceil js/Math))))

(defn get-page-by-num-and-offset
  "get the page words by num and offset"
  [num offset]
  (->> (d/datoms (get-ds-db) :aevt :word)
       (drop (* num offset))
       (take num)
       (map :e)
       (map #(d/pull (get-ds-db) '[:word :chinese :sentence] %))))

;(get-page-by-num-and-offset 10 0)
;(is-this-page-done 10 0)

(defn get-check-list-record-by-word
  "get by word"
  [word]
  {:pre [(string? word)]}
  (let [e (-> (d/q `[:find ?e
                     :where
                     [?e :word ~word]]
                   (get-ds-check-list-db))
              (first)
              (first))]
    (if (not (nil? e))
      (d/pull (get-ds-check-list-db) '[:word :count] e)
      {:word word :count 0})))

(re-frame/reg-fx
 :indexdb/get-check-list
 (fn [word]
   (re-frame/dispatch [:indexdb/set-word-record (get-check-list-record-by-word word)])))

(defn is-this-page-done?
  "check if this weeks finish
 finish definition: all word remember over 3 times."
  [num offset]
  (->> (get-page-by-num-and-offset num offset)
       (map #(:word %))
       (map #(get-check-list-record-by-word %))
       (filter #(< (:count %) 3))
       (into [])
       ((fn [v] (<= (count v) 0)))))
