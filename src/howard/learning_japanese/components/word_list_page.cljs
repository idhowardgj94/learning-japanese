(ns howard.learning-japanese.components.word-list-page
  (:require
   [reagent.core :as re-agent]
   [reitit.frontend.easy :as rfe]
   [reagent-mui.icons.check :refer [check]]
   [reagent-mui.components :refer [box toolbar divider icon-button
                                   list list-item list-item-button list-item-text]]
   [howard.learning-japanese.datascript.query :refer [get-page-size-by-number
                                                      is-this-page-done?]]))

(defn word-list-page-mobile
  "mobile view of word-list-page"
  []
  ;; TODO: default number is 10, add a change number feature
  (let [size (get-page-size-by-number 10)]
    [list
     (for [n (range 1 (+ size 1))]
       [:<> {:key n}
        [list-item {:button true
                    :on-click #(rfe/push-state :words-page nil {:offset (- n 1)})
                    :secondaryAction (re-agent/as-element (if (is-this-page-done? 10 (- n 1))
                                                            [icon-button {:edge "end"
                                                                          :aria-label "finish"}
                                                             [check {:sx {:color "green"}}]]
                                                            [:<>]))}
         [list-item-text {:primary (str "Week " n)}]]
        [divider]])]))

(defn word-list-page
  [_]
  [:<>
   [box {:sx {:display {:xs "block"}}}
    [toolbar]
    [word-list-page-mobile]]])
