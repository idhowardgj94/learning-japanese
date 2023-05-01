(ns howard.learning-japanese.components.word-page
  (:require
   ["react" :refer [useEffect]]
   [day8.re-frame.tracing :refer [fn-traced]]
   [howard.learning-japanese.events :as events]
   [howard.learning-japanese.datascript.query :refer [get-page-by-num-and-offset]]
   [re-frame.core :as re-frame]
   [reagent-mui.components
    :refer [box button card card-actions card-content grid typography
            mobile-stepper]]
   [reagent-mui.icons.check :refer [check]]
   [reagent-mui.icons.cancel :refer [cancel]]
   [reagent-mui.icons.circle-notifications :refer [circle-notifications]]
   [reagent-mui.icons.mode :refer [mode]]))

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
                     :word/count (count data)
                     :word/current-index current-index
                     :word/card-mode mode))))

(re-frame/reg-sub
 ::get-current-word-record
 (fn-traced [db _]
            (:word/current-word-record db)))
(defn chinese-word-card
  "define a word card component,
  which can show eithor chinese or japanese"
  [{:keys [word sentence chinese]}]
  (let [answer-field @(re-frame/subscribe [::card-answer-field])
        {:keys [count]} @(re-frame/subscribe [::get-current-word-record])]
    [card
     [card-content
      [typography {:variant "h4"} chinese]
      (when answer-field
        [:<>
         [box {:component "h3"
               :pt 1
               :dangerouslySetInnerHTML {:__html word}
               :sx {:font-weight "bold"}}]
         [box {:component "p"
               :pl 2}
          sentence]])]

     [card-actions
      [button {:on-click (fn []
                           (re-frame/dispatch [::events/toggle-word-answer]))}
       [circle-notifications {:font-size "large"}]]
      [button {:on-click (fn []
                           (re-frame/dispatch [::events/change-card-mode "hide-chinese"]))}
       [mode {:font-size "large"}]]
      [button {:on-click (fn []
                           (re-frame/dispatch [::events/add-check-list-record-by-word word]))}
       [check {:font-size "large"}]]
      [button {:on-click (fn []
                           (re-frame/dispatch [::events/remove-check-list-record-by-word word]))}
       [cancel {:font-size "large"}]]
      [box {:sx {:display "flex" :margin-right 0 :margin-left "auto"}}
       (when (> count 0)
         (for [i (range count)]
           [check {:key (str word "-" i) :sx {:color "green"} :font-size "large" :color "green"}]))]]]))

(defn japanese-word-card
  "define a word card component,
  which can show eithor chinese or japanese"
  [{:keys [word sentence chinese]}]
  (when (not (nil? word))
    (let [answer-field @(re-frame/subscribe [::card-answer-field])
          {:keys [count]} @(re-frame/subscribe [::get-current-word-record])]
      [card
       [card-content
        [typography {:variant "h3"
                     :dangerouslySetInnerHTML {:__html word}}]

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
         [mode {:font-size "large"}]]
        [button {:on-click (fn []
                             (re-frame/dispatch [::events/add-check-list-record-by-word word]))}
         [check {:font-size "large"}]]
        [button {:on-click (fn []
                             (re-frame/dispatch [::events/remove-check-list-record-by-word word]))}
         [cancel {:font-size "large"}]]
        [box {:sx {:display "flex" :margin-right 0 :margin-left "auto"}}
         (when (> count 0)
           (for [i (range count)]
             [check {:key (str word "-" i) :sx {:color "green"} :font-size "large" :color "green"}]))]]])))

(defn word-page
  "the word page"
  [match]
  (useEffect (fn []
               (let [offset (-> match
                                :parameters
                                :query
                                :offset)
                     data (->> (get-page-by-num-and-offset 10 offset)
                               (into []))]
                 (re-frame/dispatch [::events/set-word-data data])
                 (re-frame/dispatch [::events/word-reset]))) (array []))

  (let [{data :word/current-data
         steps :word/count
         index :word/current-index
         mode :word/card-mode} @(re-frame/subscribe [::get-current-card-data])]
    (when (not (nil? data))
      (re-frame/dispatch [::events/get-check-list (:word data)]))
    [:div {:style {:flex 1
                   :display "flex"
                   :flex-direction "column"}}
     [box {:sx {:margin "auto 0"}}
      [mobile-stepper {:variant "progress"
                       :position "static"
                       :sx {:flex 1}
                       :LinearProgressProps {:sx {:flex 1}}
                       :steps steps
                       :activeStep index}]
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
                 :full-width true} "next"]]]]]))
