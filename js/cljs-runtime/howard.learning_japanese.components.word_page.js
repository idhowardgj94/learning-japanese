goog.provide('howard.learning_japanese.components.word_page');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("howard.learning-japanese.components.word-page","card-answer-field","howard.learning-japanese.components.word-page/card-answer-field",-1870196337),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-card-data-and-index","howard.learning-japanese.components.word-page/get-card-data-and-index",-1597042076),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("word","card-data","word/card-data",1204782867),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),cljs.core.list(new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword("word","current-index","word/current-index",826671659),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null)));

var result__37730__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("word","card-data","word/card-data",1204782867),(function (){var result__37730__auto__ = new cljs.core.Keyword("word","card-data","word/card-data",1204782867).cljs$core$IFn$_invoke$arity$1((function (){var result__37730__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__37730__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__37730__auto__;
})(),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),(function (){var result__37730__auto__ = new cljs.core.Keyword("word","card-mode","word/card-mode",702049412).cljs$core$IFn$_invoke$arity$1((function (){var result__37730__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__37730__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__37730__auto__;
})(),new cljs.core.Keyword("word","current-index","word/current-index",826671659),(function (){var result__37730__auto__ = new cljs.core.Keyword("word","current-index","word/current-index",826671659).cljs$core$IFn$_invoke$arity$1((function (){var result__37730__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__37730__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__37730__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("word","card-data","word/card-data",1204782867),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),cljs.core.list(new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword("word","current-index","word/current-index",826671659),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__37730__auto__;
}catch (e56541){var e = e56541;
throw e;
}}):(function (db,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Keyword("word","card-data","word/card-data",1204782867).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Keyword("word","current-index","word/current-index",826671659).cljs$core$IFn$_invoke$arity$1(db)], null);
}))], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-current-card-data","howard.learning-japanese.components.word-page/get-current-card-data",1525385960),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-card-data-and-index","howard.learning-japanese.components.word-page/get-card-data-and-index",-1597042076)], null))));

var result__37730__auto__ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1((function (){var result__37730__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-card-data-and-index","howard.learning-japanese.components.word-page/get-card-data-and-index",-1597042076)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-card-data-and-index","howard.learning-japanese.components.word-page/get-card-data-and-index",-1597042076)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__37730__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-card-data-and-index","howard.learning-japanese.components.word-page/get-card-data-and-index",-1597042076)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__37730__auto__;
}catch (e56542){var e = e56542;
throw e;
}}):(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-card-data-and-index","howard.learning-japanese.components.word-page/get-card-data-and-index",-1597042076)], null));
})),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__56543,_){
var map__56544 = p__56543;
var map__56544__$1 = cljs.core.__destructure_map(map__56544);
var current_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56544__$1,new cljs.core.Keyword("word","current-index","word/current-index",826671659));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56544__$1,new cljs.core.Keyword("word","card-data","word/card-data",1204782867));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56544__$1,new cljs.core.Keyword("word","card-mode","word/card-mode",702049412));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"mode","mode",-2000032078,null),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("word","current-data","word/current-data",-2106948715),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword("word","count","word/count",2144653167),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))));

var result__37730__auto__ = (function (){var $ = (function (){var result__37730__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var result__37730__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__37730__auto__;
})(),(function (){var result__37730__auto__ = current_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__37730__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__37730__auto__;
})();
var result__37730__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__37730__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__37730__auto__;
})(),new cljs.core.Keyword("word","current-data","word/current-data",-2106948715),(function (){var result__37730__auto__ = $;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__37730__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("word","count","word/count",2144653167),(function (){var result__37730__auto__ = cljs.core.count((function (){var result__37730__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__37730__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__37730__auto__;
})(),new cljs.core.Keyword("word","current-index","word/current-index",826671659),(function (){var result__37730__auto__ = current_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__37730__auto__;
})(),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),(function (){var result__37730__auto__ = mode;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(17),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"mode","mode",-2000032078,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__37730__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("word","current-data","word/current-data",-2106948715),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword("word","count","word/count",2144653167),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__37730__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("word","current-data","word/current-data",-2106948715),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword("word","count","word/count",2144653167),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__37730__auto__;
}catch (e56545){var e = e56545;
throw e;
}}):(function (p__56546,_){
var map__56547 = p__56546;
var map__56547__$1 = cljs.core.__destructure_map(map__56547);
var current_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56547__$1,new cljs.core.Keyword("word","current-index","word/current-index",826671659));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56547__$1,new cljs.core.Keyword("word","card-data","word/card-data",1204782867));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56547__$1,new cljs.core.Keyword("word","card-mode","word/card-mode",702049412));
var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,current_index);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("word","current-data","word/current-data",-2106948715),$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("word","count","word/count",2144653167),cljs.core.count(data),new cljs.core.Keyword("word","current-index","word/current-index",826671659),current_index,new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),mode], 0));
}))], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-current-word-record","howard.learning-japanese.components.word-page/get-current-word-record",-535213948),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Keyword("word","current-word-record","word/current-word-record",-1696463856),new cljs.core.Symbol(null,"db","db",-1661185010,null))));

var result__37730__auto__ = new cljs.core.Keyword("word","current-word-record","word/current-word-record",-1696463856).cljs$core$IFn$_invoke$arity$1((function (){var result__37730__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__37730__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__37730__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("word","current-word-record","word/current-word-record",-1696463856),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__37730__auto__;
}catch (e56548){var e = e56548;
throw e;
}}):(function (db,_){
return new cljs.core.Keyword("word","current-word-record","word/current-word-record",-1696463856).cljs$core$IFn$_invoke$arity$1(db);
}))], 0));
/**
 * define a word card component,
 *   which can show eithor chinese or japanese
 */
howard.learning_japanese.components.word_page.chinese_word_card = (function howard$learning_japanese$components$word_page$chinese_word_card(p__56549){
var map__56550 = p__56549;
var map__56550__$1 = cljs.core.__destructure_map(map__56550);
var word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56550__$1,new cljs.core.Keyword(null,"word","word",-420123725));
var sentence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56550__$1,new cljs.core.Keyword(null,"sentence","sentence",2033657256));
var chinese = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56550__$1,new cljs.core.Keyword(null,"chinese","chinese",-59488313));
var answer_field = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.components.word-page","card-answer-field","howard.learning-japanese.components.word-page/card-answer-field",-1870196337)], null)));
var map__56551 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-current-word-record","howard.learning-japanese.components.word-page/get-current-word-record",-535213948)], null)));
var map__56551__$1 = cljs.core.__destructure_map(map__56551);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56551__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card_content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4"], null),chinese], null),(cljs.core.truth_(answer_field)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),"h3",new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),word], null),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"p",new cljs.core.Keyword(null,"pl","pl",-1690940563),(2)], null),sentence], null)], null):null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card_actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","toggle-word-answer","howard.learning-japanese.events/toggle-word-answer",-38001097)], null));
}),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mx","mx",-199887020),(1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"px","px",281329899),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.circle_notifications.circle_notifications,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"medium"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","change-card-mode","howard.learning-japanese.events/change-card-mode",1022293612),"hide-chinese"], null));
}),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mx","mx",-199887020),(1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"px","px",281329899),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.mode.mode,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"medium"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","add-check-list-record-by-word","howard.learning-japanese.events/add-check-list-record-by-word",209561071),word], null));
}),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mx","mx",-199887020),(1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"px","px",281329899),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.check.check,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"medium"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","remove-check-list-record-by-word","howard.learning-japanese.events/remove-check-list-record-by-word",-961513062),word], null));
}),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mx","mx",-199887020),(1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"px","px",281329899),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.cancel.cancel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"medium"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto"], null)], null),(((count > (0)))?(function (){var iter__5523__auto__ = (function howard$learning_japanese$components$word_page$chinese_word_card_$_iter__56552(s__56553){
return (new cljs.core.LazySeq(null,(function (){
var s__56553__$1 = s__56553;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56553__$1);
if(temp__5753__auto__){
var s__56553__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56553__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56553__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56555 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56554 = (0);
while(true){
if((i__56554 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__56554);
cljs.core.chunk_append(b__56555,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.check.check,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large",new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null));

var G__56564 = (i__56554 + (1));
i__56554 = G__56564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56555),howard$learning_japanese$components$word_page$chinese_word_card_$_iter__56552(cljs.core.chunk_rest(s__56553__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56555),null);
}
} else {
var i = cljs.core.first(s__56553__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.check.check,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large",new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),howard$learning_japanese$components$word_page$chinese_word_card_$_iter__56552(cljs.core.rest(s__56553__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(count));
})():null)], null)], null)], null);
});
/**
 * define a word card component,
 *   which can show eithor chinese or japanese
 */
howard.learning_japanese.components.word_page.japanese_word_card = (function howard$learning_japanese$components$word_page$japanese_word_card(p__56556){
var map__56557 = p__56556;
var map__56557__$1 = cljs.core.__destructure_map(map__56557);
var word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56557__$1,new cljs.core.Keyword(null,"word","word",-420123725));
var sentence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56557__$1,new cljs.core.Keyword(null,"sentence","sentence",2033657256));
var chinese = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56557__$1,new cljs.core.Keyword(null,"chinese","chinese",-59488313));
if((!((word == null)))){
var answer_field = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.components.word-page","card-answer-field","howard.learning-japanese.components.word-page/card-answer-field",-1870196337)], null)));
var map__56558 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-current-word-record","howard.learning-japanese.components.word-page/get-current-word-record",-535213948)], null)));
var map__56558__$1 = cljs.core.__destructure_map(map__56558);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56558__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h3",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),word], null)], null)], null),(cljs.core.truth_(answer_field)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),chinese], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"p",new cljs.core.Keyword(null,"pl","pl",-1690940563),(2)], null),sentence], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card_actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","toggle-word-answer","howard.learning-japanese.events/toggle-word-answer",-38001097)], null));
}),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mx","mx",-199887020),(1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"px","px",281329899),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.circle_notifications.circle_notifications,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"medium"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","change-card-mode","howard.learning-japanese.events/change-card-mode",1022293612),"hide-japanese"], null));
}),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mx","mx",-199887020),(1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"px","px",281329899),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.mode.mode,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"medium"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","add-check-list-record-by-word","howard.learning-japanese.events/add-check-list-record-by-word",209561071),word], null));
}),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mx","mx",-199887020),(1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"px","px",281329899),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.check.check,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"medium"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","remove-check-list-record-by-word","howard.learning-japanese.events/remove-check-list-record-by-word",-961513062),word], null));
}),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mx","mx",-199887020),(1),new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"px","px",281329899),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.cancel.cancel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"medium"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(0),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto"], null)], null),(((count > (0)))?(function (){var iter__5523__auto__ = (function howard$learning_japanese$components$word_page$japanese_word_card_$_iter__56559(s__56560){
return (new cljs.core.LazySeq(null,(function (){
var s__56560__$1 = s__56560;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__56560__$1);
if(temp__5753__auto__){
var s__56560__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56560__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56560__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56562 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56561 = (0);
while(true){
if((i__56561 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__56561);
cljs.core.chunk_append(b__56562,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.check.check,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"medium",new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null));

var G__56565 = (i__56561 + (1));
i__56561 = G__56565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56562),howard$learning_japanese$components$word_page$japanese_word_card_$_iter__56559(cljs.core.chunk_rest(s__56560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56562),null);
}
} else {
var i = cljs.core.first(s__56560__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.check.check,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"medium",new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),howard$learning_japanese$components$word_page$japanese_word_card_$_iter__56559(cljs.core.rest(s__56560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(count));
})():null)], null)], null)], null);
} else {
return null;
}
});
/**
 * the word page
 */
howard.learning_japanese.components.word_page.word_page = (function howard$learning_japanese$components$word_page$word_page(match){
module$node_modules$react$index.useEffect((function (){
var offset = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match)));
var data = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,howard.learning_japanese.datascript.query.get_page_by_num_and_offset((10),offset));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","set-word-data","howard.learning-japanese.events/set-word-data",255535537),data], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","word-reset","howard.learning-japanese.events/word-reset",-1354506015)], null));
}),[cljs.core.PersistentVector.EMPTY]);

var map__56563 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.components.word-page","get-current-card-data","howard.learning-japanese.components.word-page/get-current-card-data",1525385960)], null)));
var map__56563__$1 = cljs.core.__destructure_map(map__56563);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56563__$1,new cljs.core.Keyword("word","current-data","word/current-data",-2106948715));
var steps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56563__$1,new cljs.core.Keyword("word","count","word/count",2144653167));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56563__$1,new cljs.core.Keyword("word","current-index","word/current-index",826671659));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56563__$1,new cljs.core.Keyword("word","card-mode","word/card-mode",702049412));
if((!((data == null)))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","get-check-list","howard.learning-japanese.events/get-check-list",591209918),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(data)], null));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.mobile_stepper,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variant","variant",-424354234),"progress",new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.Keyword(null,"LinearProgressProps","LinearProgressProps",-110241164),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.Keyword(null,"steps","steps",-128433302),steps,new cljs.core.Keyword(null,"activeStep","activeStep",-150061065),index], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"hide-chinese"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [howard.learning_japanese.components.word_page.japanese_word_card,data], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [howard.learning_japanese.components.word_page.chinese_word_card,data], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"spacing","spacing",204422175),(2),new cljs.core.Keyword(null,"mt","mt",1155907933),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"full-width","full-width",1911330562),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","word-prev","howard.learning-japanese.events/word-prev",-1983101262)], null));
}),new cljs.core.Keyword(null,"color","color",1011675173),"secondary"], null),"previous"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","word-next","howard.learning-japanese.events/word-next",1429122252)], null));
}),new cljs.core.Keyword(null,"full-width","full-width",1911330562),true], null),"next"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=howard.learning_japanese.components.word_page.js.map
