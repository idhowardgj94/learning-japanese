(ns howard.learning-japanese.user
  (:require
   [clojure.tools.deps.alpha.repl :refer [add-libs]]
   [clojure.repl :refer [doc]]))

(doc add-libs)
(doc map)

(add-libs '{cljs-ajax/cljs-ajax {:mvn/version "0.7.5"}})
(print "hello, world")
