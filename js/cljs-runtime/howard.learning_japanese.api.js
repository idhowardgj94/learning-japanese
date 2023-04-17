goog.provide('howard.learning_japanese.api');
re_frame.core.reg_fx(new cljs.core.Keyword("howard.learning-japanese.api","load-from-edn","howard.learning-japanese.api/load-from-edn",617516788),(function (_){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("words.edn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
var data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","set-word-data","howard.learning-japanese.events/set-word-data",255535537),data], null));
})], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("howard.learning-japanese.api","load-data","howard.learning-japanese.api/load-data",-1496194911),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.api","load-from-edn","howard.learning-japanese.api/load-from-edn",617516788)], null)], null)], null)));

var result__57091__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var result__57091__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__57091__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.api","load-from-edn","howard.learning-japanese.api/load-from-edn",617516788)], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.api","load-from-edn","howard.learning-japanese.api/load-from-edn",617516788)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__57091__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.api","load-from-edn","howard.learning-japanese.api/load-from-edn",617516788)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__57091__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__57091__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.api","load-from-edn","howard.learning-japanese.api/load-from-edn",617516788)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__57091__auto__;
}catch (e57266){var e = e57266;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.api","load-from-edn","howard.learning-japanese.api/load-from-edn",617516788)], null)], null)], null);
})));

//# sourceMappingURL=howard.learning_japanese.api.js.map
