(ns howard.learning-japanese.datascript.query
  (:require
   [datascript.core :as d]
   [howard.learning-japanese.indexdb :refer [get-ds-db]]))

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

(comment "an useful pattern to get datoms then pull from entityId")
#_(->> (d/datoms (get-ds-db) :aevt :word)
       (take 1)
       (map :e)
       (#(d/pull (get-ds-db) '[*] (first %))))

