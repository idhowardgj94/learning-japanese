(ns howard.learning-japanese.route
  (:require [howard.learning-japanese.components.word-page :refer [word-page]]
            [howard.learning-japanese.components.word-list-page :refer [word-list-page]]
            [spec-tools.data-spec :as ds]))

(def routes
  [["/"
    {:name :word
     :view word-page}]
   ["/words-page"
    {:name :words-page
     :parameters {:query {:offset number?}}
     :view word-page}]
   ["/words-list"
    {:name :word-list-page
     :view word-list-page}]])
