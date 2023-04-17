goog.provide('howard.learning_japanese.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("howard.learning-japanese.events","navigate","howard.learning-japanese.events/navigate",913092563),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__57233){
var vec__57234 = p__57233;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57234,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57234,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Symbol(null,"m","m",-1021758608,null))));

var result__57091__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})(),new cljs.core.Keyword(null,"match","match",1220059550),(function (){var result__57091__auto__ = m;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"match","match",1220059550),new cljs.core.Symbol(null,"m","m",-1021758608,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57091__auto__;
}catch (e57237){var e = e57237;
throw e;
}}):(function (db,p__57238){
var vec__57239 = p__57238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57239,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57239,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"match","match",1220059550),m);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("howard.learning-japanese.events","set-word-data","howard.learning-japanese.events/set-word-data",255535537),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__57242){
var vec__57243 = p__57242;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57243,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57243,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,".log",".log",565247729,null),new cljs.core.Symbol("js","console","js/console",-1426368245,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.Symbol(null,"data","data",1407862150,null))),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"data","data",1407862150,null))));

var result__57091__auto___57265 = (function (){var result__57091__auto___57265 = console;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto___57265,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("js","console","js/console",-1426368245,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto___57265;
})().log((function (){var result__57091__auto___57265 = cljs.core.clj__GT_js((function (){var result__57091__auto___57265 = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto___57265,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57091__auto___57265;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto___57265,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto___57265;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto___57265,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".log",".log",565247729,null),new cljs.core.Symbol("js","console","js/console",-1426368245,null),cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.Symbol(null,"data","data",1407862150,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__57091__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})(),new cljs.core.Keyword("word","card-data","word/card-data",1204782867),(function (){var result__57091__auto__ = data;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"data","data",1407862150,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57091__auto__;
}catch (e57246){var e = e57246;
throw e;
}}):(function (db,p__57247){
var vec__57248 = p__57247;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57248,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57248,(1),null);
console.log(cljs.core.clj__GT_js(data));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("word","card-data","word/card-data",1204782867),data);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("howard.learning-japanese.events","initialise-db","howard.learning-japanese.events/initialise-db",-195350516),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol(null,"db","db",-1661185010,null)));

var result__57091__auto__ = howard.learning_japanese.db.db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57091__auto__;
}catch (e57251){var e = e57251;
throw e;
}}):(function (_,___$1){
return howard.learning_japanese.db.db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("howard.learning-japanese.events","change-card-mode","howard.learning-japanese.events/change-card-mode",1022293612),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__57252){
var vec__57253 = p__57252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57253,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57253,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))));

var result__57091__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})(),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),(function (){var result__57091__auto__ = mode;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"mode","mode",-2000032078,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57091__auto__;
}catch (e57256){var e = e57256;
throw e;
}}):(function (db,p__57257){
var vec__57258 = p__57257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57258,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57258,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("word","card-mode","word/card-mode",702049412),mode);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("howard.learning-japanese.events","toggle-word-answer","howard.learning-japanese.events/toggle-word-answer",-38001097),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),new cljs.core.Symbol(null,"not","not",1044554643,null))));

var result__57091__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})(),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),(function (){var result__57091__auto__ = cljs.core.not;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57091__auto__;
}catch (e57261){var e = e57261;
throw e;
}}):(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),cljs.core.not);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("howard.learning-japanese.events","word-next","howard.learning-japanese.events/word-next",1429122252),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null))),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null)))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"inc","inc",324505433,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false)),new cljs.core.Symbol(null,"db","db",-1661185010,null))));

var result__57091__auto__ = (((function (){var result__57091__auto__ = ((function (){var result__57091__auto__ = ((1) + (function (){var result__57091__auto__ = new cljs.core.Keyword("word","current-index","word/current-index",826671659).cljs$core$IFn$_invoke$arity$1((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57091__auto__;
})() < (function (){var result__57091__auto__ = cljs.core.count((function (){var result__57091__auto__ = new cljs.core.Keyword("word","card-data","word/card-data",1204782867).cljs$core$IFn$_invoke$arity$1((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null))),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})())?(function (){var result__57091__auto__ = (function (){var result__57098__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__57091__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__57091__auto__;
})(),new cljs.core.Keyword("word","current-index","word/current-index",826671659),(function (){var result__57091__auto__ = cljs.core.inc;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"inc","inc",324505433,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57091__auto__;
})(),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__57098__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57098__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"inc","inc",324505433,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})():(function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),5,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(19),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null))),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Keyword("word","card-data","word/card-data",1204782867),new cljs.core.Symbol(null,"db","db",-1661185010,null)))),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"inc","inc",324505433,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false)),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57091__auto__;
}catch (e57262){var e = e57262;
throw e;
}}):(function (db,_){
if((((1) + new cljs.core.Keyword("word","current-index","word/current-index",826671659).cljs$core$IFn$_invoke$arity$1(db)) < cljs.core.count(new cljs.core.Keyword("word","card-data","word/card-data",1204782867).cljs$core$IFn$_invoke$arity$1(db)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("word","current-index","word/current-index",826671659),cljs.core.inc),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false);
} else {
return db;
}
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("howard.learning-japanese.events","word-prev","howard.learning-japanese.events/word-prev",-1983101262),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null)),(0)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false)),new cljs.core.Symbol(null,"db","db",-1661185010,null))));

var result__57091__auto__ = (((function (){var result__57091__auto__ = ((function (){var result__57091__auto__ = new cljs.core.Keyword("word","current-index","word/current-index",826671659).cljs$core$IFn$_invoke$arity$1((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57091__auto__;
})() > (0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null)),(0)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})())?(function (){var result__57091__auto__ = (function (){var result__57098__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__57091__auto__ = cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__57091__auto__;
})(),new cljs.core.Keyword("word","current-index","word/current-index",826671659),(function (){var result__57091__auto__ = cljs.core.dec;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57091__auto__;
})(),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__57098__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57098__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})():(function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"db","db",-1661185010,null)),(0)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("word","current-index","word/current-index",826671659),new cljs.core.Symbol(null,"dec","dec",-766002333,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false)),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57091__auto__;
}catch (e57263){var e = e57263;
throw e;
}}):(function (db,_){
if((new cljs.core.Keyword("word","current-index","word/current-index",826671659).cljs$core$IFn$_invoke$arity$1(db) > (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("word","current-index","word/current-index",826671659),cljs.core.dec),new cljs.core.Keyword("word","card-answer","word/card-answer",-1466530016),false);
} else {
return db;
}
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("howard.learning-japanese.events","layout.toggle-drawler","howard.learning-japanese.events/layout.toggle-drawler",-596386672),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,_){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("layout","toggle-drawler","layout/toggle-drawler",1793786582),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword("layout","toggle-drawler","layout/toggle-drawler",1793786582),new cljs.core.Symbol(null,"db","db",-1661185010,null))))));

var result__57091__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})(),new cljs.core.Keyword("layout","toggle-drawler","layout/toggle-drawler",1793786582),(function (){var result__57091__auto__ = cljs.core.not((function (){var result__57091__auto__ = new cljs.core.Keyword("layout","toggle-drawler","layout/toggle-drawler",1793786582).cljs$core$IFn$_invoke$arity$1((function (){var result__57091__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword("layout","toggle-drawler","layout/toggle-drawler",1793786582),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword("layout","toggle-drawler","layout/toggle-drawler",1793786582),new cljs.core.Symbol(null,"db","db",-1661185010,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword("layout","toggle-drawler","layout/toggle-drawler",1793786582),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword("layout","toggle-drawler","layout/toggle-drawler",1793786582),new cljs.core.Symbol(null,"db","db",-1661185010,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57091__auto__;
}catch (e57264){var e = e57264;
throw e;
}}):(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("layout","toggle-drawler","layout/toggle-drawler",1793786582),cljs.core.not(new cljs.core.Keyword("layout","toggle-drawler","layout/toggle-drawler",1793786582).cljs$core$IFn$_invoke$arity$1(db)));
})));

//# sourceMappingURL=howard.learning_japanese.events.js.map
