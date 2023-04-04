(ns howard.learning-japanese.core
  (:require
   [re-frame.core :as re-frame]
   [reagent.core :as reagent]
   [reagent.dom :as rdom]
   [cljss.core :as css]
   [howard.learning-japanese.events :as events]
   [howard.learning-japanese.view :refer [app]])
  (:require-macros
   [cljss.core :refer [inject-global]]))

;; default reagent compiler to functional components.
(def functional-compiler (reagent.core/create-compiler {:function-components true}))
(reagent/set-default-compiler! functional-compiler)

(defn ^:dev/after-load mount-root
  "mount re-frame root to web."
  []
  (css/remove-styles!)
  (inject-global
   {:html {:height "100%"}
    :body {:height "100%"}
    :#root {:height "100%"}})

  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [::events/initialise-db])
  (rdom/render [app]
               (.getElementById js/document "root")))

(defn init
  "initialise cljs re-frame project"
  []
  (js/console.log "hello, world")
  (mount-root))
