(ns howard.learning-japanese.db)

(def db
  {:word/card-answer false
   :word/current-index 0
   :word/card-mode "hide-chinese"
   :word/card-data []
   :word/current-word-record {:word "" :count 0}
   :layout/toggle-drawler false
   :app/status :init
   :match nil})
