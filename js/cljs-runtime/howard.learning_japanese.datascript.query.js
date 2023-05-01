goog.provide('howard.learning_japanese.datascript.query');
/**
 * input a number, get the size
 */
howard.learning_japanese.datascript.query.get_page_size_by_number = (function howard$learning_japanese$datascript$query$get_page_size_by_number(num){
if(cljs.core.int_QMARK_(num)){
} else {
throw (new Error("Assert failed: (int? num)"));
}

var _PERCENT_ = (function (){var r = (function (){var G__55295 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"chinese","chinese",-59488313),new cljs.core.Symbol(null,"?c","?c",870679775,null)], null)], null);
var G__55296 = howard.learning_japanese.indexdb.get_ds_db();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__55295,G__55296) : datascript.core.q.call(null,G__55295,G__55296));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55297_SHARP_){
var G__55298 = howard.learning_japanese.indexdb.get_ds_db();
var G__55299 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"chinese","chinese",-59488313),new cljs.core.Keyword(null,"sentence","sentence",2033657256)], null);
var G__55300 = p1__55297_SHARP_;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__55298,G__55299,G__55300) : datascript.core.pull.call(null,G__55298,G__55299,G__55300));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((num * offset),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(howard.learning_japanese.indexdb.get_ds_db(),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"word","word",-420123725))))));
});
/**
 * get by word
 */
howard.learning_japanese.datascript.query.get_check_list_record_by_word = (function howard$learning_japanese$datascript$query$get_check_list_record_by_word(word){
if(typeof word === 'string'){
} else {
throw (new Error("Assert failed: (string? word)"));
}

var e = cljs.core.first(cljs.core.first((function (){var G__55301 = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"find","find",496279456),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("howard.learning-japanese.datascript.query","?e","howard.learning-japanese.datascript.query/?e",930715253,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"where","where",-2044795965),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("howard.learning-japanese.datascript.query","?e","howard.learning-japanese.datascript.query/?e",930715253,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"word","word",-420123725),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,word,null,(1),null))], 0))))),null,(1),null))], 0)))));
var G__55302 = howard.learning_japanese.indexdb.get_ds_check_list_db();
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__55301,G__55302) : datascript.core.q.call(null,G__55301,G__55302));
})()));
if((!((e == null)))){
var G__55303 = howard.learning_japanese.indexdb.get_ds_check_list_db();
var G__55304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"count","count",2139924085)], null);
var G__55305 = e;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__55303,G__55304,G__55305) : datascript.core.pull.call(null,G__55303,G__55304,G__55305));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word","word",-420123725),word,new cljs.core.Keyword(null,"count","count",2139924085),(0)], null);
}
});
re_frame.core.reg_fx(new cljs.core.Keyword("indexdb","get-check-list","indexdb/get-check-list",214035904),(function (word){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("indexdb","set-word-record","indexdb/set-word-record",-293092819),howard.learning_japanese.datascript.query.get_check_list_record_by_word(word)], null));
}));
/**
 * check if this weeks finish
 *  finish definition: all word remember over 3 times.
 */
howard.learning_japanese.datascript.query.is_this_page_done_QMARK_ = (function howard$learning_japanese$datascript$query$is_this_page_done_QMARK_(num,offset){
return (function (v){
return (cljs.core.count(v) <= (0));
})(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55308_SHARP_){
return (new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(p1__55308_SHARP_) < (3));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55307_SHARP_){
return howard.learning_japanese.datascript.query.get_check_list_record_by_word(p1__55307_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55306_SHARP_){
return new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(p1__55306_SHARP_);
}),howard.learning_japanese.datascript.query.get_page_by_num_and_offset(num,offset))))));
});

//# sourceMappingURL=howard.learning_japanese.datascript.query.js.map
