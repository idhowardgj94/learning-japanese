goog.provide('howard.learning_japanese.view');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("howard.learning-japanese.view","card-answer-field","howard.learning-japanese.view/card-answer-field",1543852950),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("howard.learning-japanese.view","get-card-data-and-index","howard.learning-japanese.view/get-card-data-and-index",239946845),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("word","card-data","word/card-data",1204782867),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),cljs.core.list(new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword("word","current-index","word/current-index",826671659),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null)));

var result__52081__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("word","card-data","word/card-data",1204782867),(function (){var result__52081__auto__ = new cljs.core.Keyword("word","card-data","word/card-data",1204782867).cljs$core$IFn$_invoke$arity$1((function (){var result__52081__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__52081__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__52081__auto__;
})(),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),(function (){var result__52081__auto__ = new cljs.core.Keyword("word","card-mode","word/card-mode",702049412).cljs$core$IFn$_invoke$arity$1((function (){var result__52081__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__52081__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__52081__auto__;
})(),new cljs.core.Keyword("word","current-index","word/current-index",826671659),(function (){var result__52081__auto__ = new cljs.core.Keyword("word","current-index","word/current-index",826671659).cljs$core$IFn$_invoke$arity$1((function (){var result__52081__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__52081__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__52081__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("word","card-data","word/card-data",1204782867),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),cljs.core.list(new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword("word","current-index","word/current-index",826671659),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__52081__auto__;
}catch (e60275){var e = e60275;
throw e;
}}):(function (db,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Keyword("word","card-data","word/card-data",1204782867).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Keyword("word","current-index","word/current-index",826671659).cljs$core$IFn$_invoke$arity$1(db)], null);
}))], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("howard.learning-japanese.view","get-current-card-data","howard.learning-japanese.view/get-current-card-data",745661677),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.view","get-card-data-and-index","howard.learning-japanese.view/get-card-data-and-index",239946845)], null))));

var result__52081__auto__ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1((function (){var result__52081__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.view","get-card-data-and-index","howard.learning-japanese.view/get-card-data-and-index",239946845)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.view","get-card-data-and-index","howard.learning-japanese.view/get-card-data-and-index",239946845)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__52081__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("re-frame","subscribe","re-frame/subscribe",-154134698,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.view","get-card-data-and-index","howard.learning-japanese.view/get-card-data-and-index",239946845)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__52081__auto__;
}catch (e60276){var e = e60276;
throw e;
}}):(function (_){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.view","get-card-data-and-index","howard.learning-japanese.view/get-card-data-and-index",239946845)], null));
})),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__60277,_){
var map__60278 = p__60277;
var map__60278__$1 = cljs.core.__destructure_map(map__60278);
var current_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60278__$1,new cljs.core.Keyword("word","current-index","word/current-index",826671659));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60278__$1,new cljs.core.Keyword("word","card-data","word/card-data",1204782867));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60278__$1,new cljs.core.Keyword("word","card-mode","word/card-mode",702049412));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"mode","mode",-2000032078,null),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("word","current-data","word/current-data",-2106948715),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))));

var result__52081__auto__ = (function (){var $ = (function (){var result__52081__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var result__52081__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__52081__auto__;
})(),(function (){var result__52081__auto__ = current_index;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__52081__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__52081__auto__;
})();
var result__52081__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__52081__auto__ = cljs.core.PersistentArrayMap.EMPTY;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__52081__auto__;
})(),new cljs.core.Keyword("word","current-data","word/current-data",-2106948715),(function (){var result__52081__auto__ = $;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__52081__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),(function (){var result__52081__auto__ = mode;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"mode","mode",-2000032078,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__52081__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("word","current-data","word/current-data",-2106948715),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__52081__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__52081__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"as->","as->",1430690540,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"current-index","current-index",-1832500360,null)),new cljs.core.Symbol(null,"$","$",-1580747756,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("word","current-data","word/current-data",-2106948715),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__52081__auto__;
}catch (e60279){var e = e60279;
throw e;
}}):(function (p__60280,_){
var map__60281 = p__60280;
var map__60281__$1 = cljs.core.__destructure_map(map__60281);
var current_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("word","current-index","word/current-index",826671659));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("word","card-data","word/card-data",1204782867));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60281__$1,new cljs.core.Keyword("word","card-mode","word/card-mode",702049412));
var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,current_index);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("word","current-data","word/current-data",-2106948715),$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),mode], 0));
}))], 0));
/**
 * define a word card component,
 *   which can show eithor chinese or japanese
 */
howard.learning_japanese.view.chinese_word_card = (function howard$learning_japanese$view$chinese_word_card(p__60282){
var map__60283 = p__60282;
var map__60283__$1 = cljs.core.__destructure_map(map__60283);
var word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60283__$1,new cljs.core.Keyword(null,"word","word",-420123725));
var sentence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60283__$1,new cljs.core.Keyword(null,"sentence","sentence",2033657256));
var chinese = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60283__$1,new cljs.core.Keyword(null,"chinese","chinese",-59488313));
var answer_field = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.view","card-answer-field","howard.learning-japanese.view/card-answer-field",1543852950)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card_content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h4"], null),chinese], null),(cljs.core.truth_(answer_field)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),"h3",new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),word], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"p",new cljs.core.Keyword(null,"pl","pl",-1690940563),(2)], null),sentence], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card_actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","toggle-word-answer","howard.learning-japanese.events/toggle-word-answer",-38001097)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.circle_notifications.circle_notifications,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","change-card-mode","howard.learning-japanese.events/change-card-mode",1022293612),"hide-chinese"], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.mode.mode,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large"], null)], null)], null)], null)], null);
});
/**
 * define a word card component,
 *   which can show eithor chinese or japanese
 */
howard.learning_japanese.view.japanese_word_card = (function howard$learning_japanese$view$japanese_word_card(p__60284){
var map__60285 = p__60284;
var map__60285__$1 = cljs.core.__destructure_map(map__60285);
var word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60285__$1,new cljs.core.Keyword(null,"word","word",-420123725));
var sentence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60285__$1,new cljs.core.Keyword(null,"sentence","sentence",2033657256));
var chinese = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60285__$1,new cljs.core.Keyword(null,"chinese","chinese",-59488313));
var answer_field = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.view","card-answer-field","howard.learning-japanese.view/card-answer-field",1543852950)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card_content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"h3"], null),word], null),(cljs.core.truth_(answer_field)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),chinese], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"p",new cljs.core.Keyword(null,"pl","pl",-1690940563),(2)], null),sentence], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.card_actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","toggle-word-answer","howard.learning-japanese.events/toggle-word-answer",-38001097)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.circle_notifications.circle_notifications,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","change-card-mode","howard.learning-japanese.events/change-card-mode",1022293612),"hide-japanese"], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.mode.mode,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"large"], null)], null)], null)], null)], null);
});
/**
 * the root of the app
 */
howard.learning_japanese.view.app = (function howard$learning_japanese$view$app(){
var map__60286 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.view","get-current-card-data","howard.learning-japanese.view/get-current-card-data",745661677)], null)));
var map__60286__$1 = cljs.core.__destructure_map(map__60286);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60286__$1,new cljs.core.Keyword("word","current-data","word/current-data",-2106948715));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60286__$1,new cljs.core.Keyword("word","card-mode","word/card-mode",702049412));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.container,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fixed","fixed",-562004358),true,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"xs",new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto 0"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"hide-chinese"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [howard.learning_japanese.view.japanese_word_card,data], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [howard.learning_japanese.view.chinese_word_card,data], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.grid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"spacing","spacing",204422175),(2),new cljs.core.Keyword(null,"mt","mt",1155907933),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"full-width","full-width",1911330562),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","word-prev","howard.learning-japanese.events/word-prev",-1983101262)], null));
}),new cljs.core.Keyword(null,"color","color",1011675173),"secondary"], null),"previous"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","word-next","howard.learning-japanese.events/word-next",1429122252)], null));
}),new cljs.core.Keyword(null,"full-width","full-width",1911330562),true], null),"next"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 50px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0"], null)], null),""], null)], null);
});

//# sourceMappingURL=howard.learning_japanese.view.js.map