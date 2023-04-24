(ns howard.learning-japanese.view
  (:require
   [day8.re-frame.tracing :refer [fn-traced]]
   [howard.learning-japanese.events :as events]
   [re-frame.core :as re-frame]
   [reagent-mui.components
    :refer [app-bar
            box
            button
            container
            css-baseline
            divider
            drawer
            icon-button
            list
            list-item
            list-item-button
            list-item-text
            menu
            toolbar
            typography]]
   [reagent-mui.icons.menu :refer [menu]]
   [reitit.frontend.easy :as rfe]))

(re-frame/reg-sub
 ::match
 (fn-traced
  [db _]
  (:match db)))

(re-frame/reg-sub
 ::open-drawler
 (fn-traced
  [db _]
  (:layout/toggle-drawler db)))

(re-frame/reg-sub
 ::get-status
 (fn-traced
  [db _]
  (:app/status db)))

(defn drawer-component
  []
  [box {:on-click (fn []
                    (re-frame/dispatch [::events/layout.toggle-drawler]))
        :sx {:text-align "center"}}
   [typography {:variant "h6"
                :sx {:my 2}}
    "Learning Japanese"]
   [divider]
   [list
    [list-item {:disablePadding true}
     [list-item-button {:sx {:text-align "center"}
                        :href (rfe/href :word-list-page)}
      [list-item-text {:primary "Words"}]]]
    [list-item {:disablePadding true}
     [list-item-button {:sx {:text-align "center"}
                        :href (rfe/href :word)}
      [list-item-text {:primary "Content"}]]]]])

(defn app
  "the root of the app"
  []
  (let [status @(re-frame/subscribe [::get-status])
        match @(re-frame/subscribe [::match])
        open-drawler @(re-frame/subscribe [::open-drawler])
        view (:view (:data match))]
    (if (not= status :finish)
      (str "loading....")
      [:<>
       [css-baseline]
       [app-bar {:component "nav"}
        [toolbar
         [icon-button {:sx {:mr 2
                            :display {:sm "none"}}
                       :color "inherit"
                       :on-click #(re-frame/dispatch [::events/layout.toggle-drawler])}
          [menu]]
         [typography {:component "div"
                      :sx {:flex-grow 1}
                      :variant "h5"} "Japanese Learning"]
         [box {:sx {:display {:xs "none"
                              :md "flex"}}}
          [button {:sx {:color "white"}
                   :href (rfe/href :word-list-page)} "Words"]
          [button {:sx  {:color "white"}
                   :href (rfe/href :word)} "Grammer"]]]]
       [box {:component "nav"}
        [drawer {:varient "temporary"
                 :open open-drawler
                 :on-close (fn []
                             (re-frame/dispatch [::events/layout.toggle-drawler]))
                 :ModalProps {:keepMounted true}
                 :sx {:display {:xs "block" :sm "none"}
                      "& .MuiDrawer-paper" {:box-sizing "border-box"
                                            :width "240px"}}}
         [drawer-component]]]
       [container {:fixed true
                   :max-width "md"
                   :sx {:display "flex"
                        :flex-direction "column"
                        :height "100%"}}
        (when (and match
                   view)
          [view match])
        [:div {:style {:flex "0 1 50px"
                       :margin-bottom "0"}}
         ""]]])))
