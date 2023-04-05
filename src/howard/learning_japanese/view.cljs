(ns howard.learning-japanese.view
  (:require
   [day8.re-frame.tracing :refer [fn-traced]]
   [re-frame.core :as re-frame]
   [reagent-mui.components :refer [box button card card-actions card-content
                                   container grid typography]]
   [reagent-mui.icons.circle-notifications :refer [circle-notifications]]
   [reagent-mui.icons.mode :refer [mode]]
   [howard.learning-japanese.events :as events]))

(re-frame/reg-sub
 ::card-answer-field
 (fn [db _]
   (:word/card-answer db)))

(re-frame/reg-sub
 ::get-card-data-and-index
 (fn-traced [db _]
            {:word/card-data (:word/card-data db)
             :word/card-mode (:word/card-mode db)
             :word/current-index (:word/current-index db)}))

(re-frame/reg-sub
 ::get-current-card-data
 (fn-traced [_]
            (re-frame/subscribe [::get-card-data-and-index]))
 (fn-traced [{current-index :word/current-index
              data :word/card-data
              mode :word/card-mode} _]
            (as-> (get data current-index) $
              (assoc {}
                     :word/current-data $
                     :word/card-mode mode))))
(defn chinese-word-card
  "define a word card component,
  which can show eithor chinese or japanese"
  [{:keys [word sentence chinese]}]
  (let [answer-field @(re-frame/subscribe [::card-answer-field])]
    [card
     [card-content
      [typography {:variant "h4"} chinese]
      (when answer-field
        [:<>
         [box {:component "h3"
               :pt 1
               :sx {:font-weight "bold"}}
          word]
         [box {:component "p"
               :pl 2}
          sentence]])]

     [card-actions
      [button {:on-click (fn []
                           (re-frame/dispatch [::events/toggle-word-answer]))}
       [circle-notifications {:font-size "large"}]]
      [button {:on-click (fn []
                           (re-frame/dispatch [::events/change-card-mode "hide-chinese"]))}
       [mode {:font-size "large"}]]]]))

(defn japanese-word-card
  "define a word card component,
  which can show eithor chinese or japanese"
  [{:keys [word sentence chinese]}]
  (let [answer-field @(re-frame/subscribe [::card-answer-field])]
    [card
     [card-content
      [typography {:variant "h3"} word]
      (when answer-field
        [box {:component "div"
              :pt 1
              :sx {:font-weight "bold"}}
         chinese])]
     [box {:component "p"
           :pl 2}
      sentence]
     [card-actions
      [button {:on-click (fn []
                           (re-frame/dispatch [::events/toggle-word-answer]))}
       [circle-notifications {:font-size "large"}]]
      [button {:on-click (fn []
                           (re-frame/dispatch [::events/change-card-mode "hide-japanese"]))}
       [mode {:font-size "large"}]]]]))

(defn app
  "the root of the app"
  []
  (let [{data :word/current-data
         mode :word/card-mode} @(re-frame/subscribe [::get-current-card-data])]
    [container {:fixed true
                :max-width "xs"
                :sx {:display "flex"
                     :flex-direction "column"
                     :height "100%"}}
     [:div {:style {:flex 1
                    :display "flex"
                    :flex-direction "column"}}
      [box {:sx {:margin "auto 0"}}
       (if (= mode "hide-chinese")
         [japanese-word-card data]
         [chinese-word-card data])
       [grid {:container true
              :spacing 2
              :mt 2}
        [grid {:item true
               :xs 6}
         [button {:variant "contained"
                  :full-width true
                  :on-click #(re-frame/dispatch [::events/word-prev])
                  :color "secondary"} "previous"]]
        [grid {:item true
               :xs 6}
         [button {:variant "contained"
                  :on-click #(re-frame/dispatch [::events/word-next])
                  :full-width true} "next"]]]]]
     [:div {:style {:flex "0 1 50px"
                    :margin-bottom "0"}}
      ""]]))
