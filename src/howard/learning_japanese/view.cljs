(ns howard.learning-japanese.view
  (:require
   [reagent-mui.components :refer [container card card-content card-actions typography button grid box]]
   [reagent-mui.icons.circle-notifications :refer [circle-notifications]]
   [re-frame.core :as re-frame]
   [howard.learning-japanese.events :as events])
  (:require-macros
   [cljss.core :refer [inject-global]]))

(re-frame/reg-sub
 ::card-answer-field
 (fn [db _]
   (:word/card-answer db)))

(defn word-card
  "define a word card component,
  which can show eithor chinese or japanese"
  []
  (let [answer-field @(re-frame/subscribe [::card-answer-field])]
    [card
     [card-content
      [typography {:variant "h3"} "合う"]
      (when answer-field
        [typography {:variant "h3"} "合適、符合"])]
     [typography {:varient "p"
                  :pl 2}
      "この靴、私に会うと思いますか。"]
     [card-actions
      [circle-notifications {:font-size "large"}]
      [typography "看中文"]]]))

(defn app
  "the root of the app"
  []
  [container {:fixed true
              :max-width "xs"
              :sx {:display "flex"
                   :flex-direction "column"
                   :height "100%"}}
   [:div {:style {:flex 1
                  :display "flex"
                  :flex-direction "column"}}
    [box {:sx {:margin "auto 0"}}
     [word-card]
     [grid {:container true
            :spacing 2
            :mt 2}
      [grid {:item true
             :xs 6}
       [button {:variant "contained"
                :full-width true
                :color "secondary"} "previous"]]
      [grid {:item true
             :xs 6}
       [button {:variant "contained"
                :full-width true} "next"]]]]]
   [:div {:style {:background-color "pink"
                  :flex "0 1 50px"
                  :margin-bottom "0"}}
    "Fotter"]])
