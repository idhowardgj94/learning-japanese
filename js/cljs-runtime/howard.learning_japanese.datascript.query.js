goog.provide('howard.learning_japanese.datascript.query');
/**
 * input a number, get the size
 */
howard.learning_japanese.datascript.query.get_page_size_by_number = (function howard$learning_japanese$datascript$query$get_page_size_by_number(num){
if(cljs.core.int_QMARK_(num)){
} else {
throw (new Error("Assert failed: (int? num)"));
}

var _PERCENT_ = (function (){var r = (function (){var G__48243 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"chinese","chinese",-59488313),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null)], null);
var G__48244 = howard.learning_japanese.indexdb.get_ds_db();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__48243,G__48244) : datascript.core.q.call(null,G__48243,G__48244));
})();
return Math.ceil((cljs.core.count(r) / num));
})();
if(cljs.core.int_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (int? %)"));
}

return _PERCENT_;
});
/**
 * get the page words by num and offset
 */
howard.learning_japanese.datascript.query.get_page_by_num_and_offset = (function howard$learning_japanese$datascript$query$get_page_by_num_and_offset(num,offset){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48248_SHARP_){
var G__48249 = howard.learning_japanese.indexdb.get_ds_db();
var G__48250 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"chinese","chinese",-59488313),new cljs.core.Keyword(null,"sentence","sentence",2033657256)], null);
var G__48251 = p1__48248_SHARP_;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__48249,G__48250,G__48251) : datascript.core.pull.call(null,G__48249,G__48250,G__48251));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((num * offset),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(howard.learning_japanese.indexdb.get_ds_db(),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"word","word",-420123725))))));
});

//# sourceMappingURL=howard.learning_japanese.datascript.query.js.map
