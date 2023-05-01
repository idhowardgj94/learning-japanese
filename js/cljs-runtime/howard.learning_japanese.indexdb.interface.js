goog.provide('howard.learning_japanese.indexdb.interface$');
/**
 * get check-list-data-from indexdb
 */
howard.learning_japanese.indexdb.interface$.get_check_list_data_from_indexdb = (function howard$learning_japanese$indexdb$interface$get_check_list_data_from_indexdb(){
return (new Promise((function (res){
var trans = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(cljs.core.deref(howard.learning_japanese.indexdb.interface$.check_list_db))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["check-lists"], null),"readwrite");
var store = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(trans,"check-lists");
var data = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
return indexed.db.on.cljs$core$IFn$_invoke$arity$3(indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$1(store),"success",(function (e){
var cursor = indexed.db.result(indexed.db.create_request(e.target));
if((cursor == null)){
var p_data = cljs.core.persistent_BANG_(data);
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(p_data) : res.call(null,p_data));
} else {
var val = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(indexed.db.value(indexed.db.create_cursor_with_value(cursor)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(data,val);

return indexed.db.continue$.cljs$core$IFn$_invoke$arity$1(indexed.db.create_cursor_with_value(cursor));
}
}));
})));
});
/**
 * get check-list-data-from indexdb
 */
howard.learning_japanese.indexdb.interface$.get_check_list_data_from_indexdb = (function howard$learning_japanese$indexdb$interface$get_check_list_data_from_indexdb(){
return (new Promise((function (res){
var trans = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(cljs.core.deref(howard.learning_japanese.indexdb.interface$.check_list_db))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["check-lists"], null),"readwrite");
var store = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(trans,"check-lists");
var data = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
return indexed.db.on.cljs$core$IFn$_invoke$arity$3(indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$1(store),"success",(function (e){
var cursor = indexed.db.result(indexed.db.create_request(e.target));
if((cursor == null)){
var p_data = cljs.core.persistent_BANG_(data);
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(p_data) : res.call(null,p_data));
} else {
var val = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(indexed.db.value(indexed.db.create_cursor_with_value(cursor)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(data,val);

return indexed.db.continue$.cljs$core$IFn$_invoke$arity$1(indexed.db.create_cursor_with_value(cursor));
}
}));
})));
});

//# sourceMappingURL=howard.learning_japanese.indexdb.interface.js.map
