(ns howard.learning-japanese.core
  (:require
   [re-frame.core :as re-frame]
   [reagent.core :as reagent]
   [reagent.dom :as rdom]))

;; default reagent compiler to functional components.
(def functional-compiler (reagent.core/create-compiler {:function-components true}))
(reagent/set-default-compiler! functional-compiler)

(defn app
  "the root of the app"
  []
  [:div "hello, world"])

(defn mount-root
  "mount re-frame root to web."
  []
  (rdom/render [app]
               (.getElementById js/document "root")))

(defn init
  "initialise cljs re-frame project"
  []
  (js/console.log "hello, world")
  (mount-root))
