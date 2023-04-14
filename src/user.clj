(ns user
  (:require
   [clojure.java.io :as io]
   [clojure.tools.deps.alpha.repl :refer [add-libs]]
   [clojure.data.csv :as csv]
   [howard.learning-japanese.main :refer [func1]]
   [clojure.repl :refer [doc]]
   [clojure.string :as str]))

(defn to-map
  "transform japan_word_sorce csv to data"
  [titles data]
  (let [k (map keyword titles)]
    (zipmap k data)))

(def map-data (atom nil))
(with-open [reader (io/reader "./resources/japan_word_sorce.csv")]
  (let [title (-> (first (csv/read-csv reader))
                  (drop-last))
        data (-> (csv/read-csv reader)
                 (drop-last))]
    (->> data
         (map #(to-map title %))
         (into [])
         (reset! map-data))))

;; so we have a map data which contain pinging and word.
;; and replace with ruby html tag

(def sample {:japanese "＊上＊がる"
             :Pingjiaming "＊あ＊"})
(map list '(1,2,3) '(4 5 6))

(def re-han #"＊((?!＊).)+＊")

(defn get-second-item-in-list
  "([1 2] [3 4] -> [2 4]"
  [lt]
  (let [f (first lt)
        s (second lt)
        fs (second f)
        ss (second s)]
    (list fs ss)))

(defn get-first-item-in-list
  "([1 2] [3 4] -> [1 3]"
  [lt]
  (let [f (first lt)
        s (second lt)
        fs (first f)
        ss (first s)]
    (list fs ss)))

(defn get-ruby-html
  "get the ruby html from csv
  use re-han"
  [jap pingyin]
  (let [p (list jap pingyin)
        it (get-second-item-in-list p)]
    (str "<ruby>" (first it) "<rp>(</rp>" "<rt>" (second it) "</rt>" "<rp>)</rp>" "</ruby>")))

; jap (first (re-seq re-han (:japanese m)))
;        pingyin (first (re-seq re-han (:Pingjiaming m)))

(let [r (atom 0)]
  (doseq [a [1 2 3]]
    (swap! r + a))
  @r)

(defn get-full-part-from-regex
  [reg-vector]
  (first reg-vector))

(println "")

;; replace placeholder with html.
;; seems finish!
(let [res-list (transient [])]
  (doseq [d @map-data]
    (let [res (atom (:japanese d))]
      (when (> (count (:Pingjiaming d)) 0)
        (doseq [jap (re-seq re-han (:japanese d))
                pingyin (re-seq re-han (:Pingjiaming d))]
          ;; get the html from jap and pingyin
          (let [html  (get-ruby-html jap pingyin)]
            (swap! res str/replace (get-full-part-from-regex jap) html)))
        (conj! @res))
      (conj! res-list @res)))
  (persistent! res-list))

(doc str/replace)
