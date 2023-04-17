(ns user
  (:require
   [clojure.java.io :as io]
   [clojure.tools.deps.alpha.repl :refer [add-libs]]
   [clojure.data.csv :as csv]
   [howard.learning-japanese.main :refer [func1]]
   [clojure.repl :refer [doc]]
   [clojure.string :as str]))

;; those two atom is for debug purpose.
;; store originl csv mapping data
(def map-data (atom nil))
;; store final data
(def data (atom nil))

(def re-han "regex for finding placeholder." #"＊(((?!＊).)+)＊")

(defn to-map
  "transform japan_word_sorce csv to key - value pairs"
  [titles data]
  (let [k (map keyword titles)]
    (zipmap k data)))

 ;;
(defn read-word-data
  "read japanese word from resource."
  [filename]
  (with-open [reader (io/reader filename)]
    (let [title (-> (first (csv/read-csv reader))
                    (drop-last))
          data (-> (csv/read-csv reader)
                   (drop-last))
          result  (->> data
                       (map #(to-map title %))
                       (into []))]
      (reset! map-data result)
      result)))

;; so we have a map data which contain pinging and word.
;; and replace with ruby html tag
(defn get-second-item-in-list
  "([1 2] [3 4] -> [2 4]"
  [lt]
  (let [f (first lt)
        s (second lt)
        fs (second f)
        ss (second s)]
    (list fs ss)))

(defn get-ruby-html
  "get the ruby html from csv
  use re-han"
  [jap pingyin]
  (let [p (list jap pingyin)
        it (get-second-item-in-list p)]
    (str "<ruby>" (first it) "<rp>(</rp>" "<rt>" (second it) "</rt>" "<rp>)</rp>" "</ruby>")))

(defn get-html-string
  "get the final vector map need in website"
  [word-data]
  (->> (let [res-list (transient [])]
         (doseq [d word-data]
           (let [res (atom (:word d))]
             (when (> (count (:pingjiaming d)) 0)
               (doseq [jap (re-seq re-han (:word d))
                       pingyin (re-seq re-han (:pingjiaming d))]
               ;; get the html from jap and pingyin
                 (let [html  (get-ruby-html jap pingyin)]
                   (swap! res str/replace (first jap) html)))
               (conj! @res))
             (conj! res-list @res)))
         (persistent! res-list))))
(defn transform-to-edn
  "transform to edn that website use."
  [map-data data]
  (->> (map list map-data data)
       (map (fn [it] (assoc (first it) :word (second it))))
       (into [])))

(defn read-and-export
  "input: input file name
  output: output file name"
  [input output]
  (let [word-data (read-word-data input)
        result (get-html-string word-data)
        edn-data (transform-to-edn word-data result)]
    (reset! data result)
    (spit output edn-data)))

(do
  (println "read and export data.")
  (println "from ./resources/japan_word_sorce.csv")
  (println "to resources/public/words.edn")
  (read-and-export   "./resources/japan_word_sorce.csv" "resources/public/words.edn")
  (println "done"))

