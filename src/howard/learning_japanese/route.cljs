(ns howard.learning-japanese.route
  (:require [howard.learning-japanese.view :refer [word-page
                                                   word-list-page]]))

(def routes
  [["/"
    {:name :word
     :view word-page}]
   ["/words-list"
    {:name :word-list-page
     :view word-list-page}]])
