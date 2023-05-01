(ns howard.learning-japanese.core
  (:require
   [cljss.core :as css]
   [cljs.core.async :refer [go]]
   [cljs.core.async.interop :refer [<p!]]
   [howard.learning-japanese.api :as api]
   [howard.learning-japanese.events :as events]
   [howard.learning-japanese.route :refer [routes]]
   [howard.learning-japanese.view :refer [app]]
   [howard.learning-japanese.indexdb :refer [setup-memory-db]]
   [re-frame.core :as re-frame]
   [reagent.core :as reagent]
   [reagent.dom :as rdom]
   [reitit.coercion.spec :as rss]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe])
  (:require-macros
   [cljss.core :refer [inject-global]]))

;; default reagent compiler to functional components.
(def functional-compiler (reagent.core/create-compiler {:function-components true}))
(reagent/set-default-compiler! functional-compiler)

(defn init-route
  "init route use rfe."
  []
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m]
     (js/console.log "inside route handler")
     (re-frame/dispatch [::events/navigate m]))
   {:use-fragment true}))

(defn ^:dev/after-load mount-root
  "mount re-frame root to web."
  []
  (css/remove-styles!)
  (inject-global
   {:html {:height "100%"}
    :body {:height "100%"}
    :#root {:height "100%"}})

  (re-frame/clear-subscription-cache!)
  (init-route)
  (api/setup-api)
  (rdom/render [app]
               (.getElementById js/document "root")))

(defn init
  "initialise cljs re-frame project"
  []
  (re-frame/dispatch-sync [::events/initialise-db])
  (setup-memory-db)
  (mount-root))
