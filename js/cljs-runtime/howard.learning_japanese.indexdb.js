goog.provide('howard.learning_japanese.indexdb');
if((typeof howard !== 'undefined') && (typeof howard.learning_japanese !== 'undefined') && (typeof howard.learning_japanese.indexdb !== 'undefined') && (typeof howard.learning_japanese.indexdb.learning_japanese_db !== 'undefined')){
} else {
howard.learning_japanese.indexdb.learning_japanese_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof howard !== 'undefined') && (typeof howard.learning_japanese !== 'undefined') && (typeof howard.learning_japanese.indexdb !== 'undefined') && (typeof howard.learning_japanese.indexdb.check_list_db !== 'undefined')){
} else {
howard.learning_japanese.indexdb.check_list_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof howard !== 'undefined') && (typeof howard.learning_japanese !== 'undefined') && (typeof howard.learning_japanese.indexdb !== 'undefined') && (typeof howard.learning_japanese.indexdb.ds_learning_japanese_db !== 'undefined')){
} else {
howard.learning_japanese.indexdb.ds_learning_japanese_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof howard !== 'undefined') && (typeof howard.learning_japanese !== 'undefined') && (typeof howard.learning_japanese.indexdb !== 'undefined') && (typeof howard.learning_japanese.indexdb.ds_check_list_db !== 'undefined')){
} else {
howard.learning_japanese.indexdb.ds_check_list_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
howard.learning_japanese.indexdb.to_js_obj = (function howard$learning_japanese$indexdb$to_js_obj(m){
return cljs.core.clj__GT_js(m);
});
/**
 * handle upgrade db version
 *   current version is 1
 */
howard.learning_japanese.indexdb.handle_learning_japanese_upgrade = (function howard$learning_japanese$indexdb$handle_learning_japanese_upgrade(event){
return indexed.db.create_index.cljs$core$IFn$_invoke$arity$4(indexed.db.create_object_store.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(indexed.db.get_request(indexed.db.create_version_change_event(event)))),"words",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-path","key-path",878473308),"word"], null)),"chinese","chinese",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique","unique",329397282),false], null));
});
howard.learning_japanese.indexdb.sync_words_data = (function howard$learning_japanese$indexdb$sync_words_data(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","set-app-status","app/set-app-status",1059973664),new cljs.core.Keyword(null,"get-words-data","get-words-data",397272038)], null));

return (new Promise((function (res){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("words.edn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
var data_54914 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response);
var tx_54915 = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(cljs.core.deref(howard.learning_japanese.indexdb.learning_japanese_db))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["words"], null),"readwrite");
var store_54916 = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(tx_54915,"words");
var seq__54741_54917 = cljs.core.seq(data_54914);
var chunk__54742_54918 = null;
var count__54743_54919 = (0);
var i__54744_54920 = (0);
while(true){
if((i__54744_54920 < count__54743_54919)){
var it_54921 = chunk__54742_54918.cljs$core$IIndexed$_nth$arity$2(null,i__54744_54920);
indexed.db.put.cljs$core$IFn$_invoke$arity$2(store_54916,howard.learning_japanese.indexdb.to_js_obj(it_54921));


var G__54922 = seq__54741_54917;
var G__54923 = chunk__54742_54918;
var G__54924 = count__54743_54919;
var G__54925 = (i__54744_54920 + (1));
seq__54741_54917 = G__54922;
chunk__54742_54918 = G__54923;
count__54743_54919 = G__54924;
i__54744_54920 = G__54925;
continue;
} else {
var temp__5753__auto___54926 = cljs.core.seq(seq__54741_54917);
if(temp__5753__auto___54926){
var seq__54741_54927__$1 = temp__5753__auto___54926;
if(cljs.core.chunked_seq_QMARK_(seq__54741_54927__$1)){
var c__5568__auto___54928 = cljs.core.chunk_first(seq__54741_54927__$1);
var G__54929 = cljs.core.chunk_rest(seq__54741_54927__$1);
var G__54930 = c__5568__auto___54928;
var G__54931 = cljs.core.count(c__5568__auto___54928);
var G__54932 = (0);
seq__54741_54917 = G__54929;
chunk__54742_54918 = G__54930;
count__54743_54919 = G__54931;
i__54744_54920 = G__54932;
continue;
} else {
var it_54933 = cljs.core.first(seq__54741_54927__$1);
indexed.db.put.cljs$core$IFn$_invoke$arity$2(store_54916,howard.learning_japanese.indexdb.to_js_obj(it_54933));


var G__54934 = cljs.core.next(seq__54741_54927__$1);
var G__54935 = null;
var G__54936 = (0);
var G__54937 = (0);
seq__54741_54917 = G__54934;
chunk__54742_54918 = G__54935;
count__54743_54919 = G__54936;
i__54744_54920 = G__54937;
continue;
}
} else {
}
}
break;
}

var G__54745 = (howard.learning_japanese.indexdb.setup_memory_db.cljs$core$IFn$_invoke$arity$0 ? howard.learning_japanese.indexdb.setup_memory_db.cljs$core$IFn$_invoke$arity$0() : howard.learning_japanese.indexdb.setup_memory_db.call(null));
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(G__54745) : res.call(null,G__54745));
})], null)], 0));
})));
});
howard.learning_japanese.indexdb.open_learning_japanese = (function howard$learning_japanese$indexdb$open_learning_japanese(){
return (new Promise((function (res){
var $ = indexed.db.open.cljs$core$IFn$_invoke$arity$2("learning-japanese",(1));
var $__$1 = indexed.db.on.cljs$core$IFn$_invoke$arity$3($,"error",(function (event){
return console.log("inside error",event);
}));
var $__$2 = indexed.db.on.cljs$core$IFn$_invoke$arity$3($__$1,"blocked",(function (event){
return console.log("inside blocked",event);
}));
var $__$3 = indexed.db.on.cljs$core$IFn$_invoke$arity$3($__$2,"upgradeneeded",howard.learning_japanese.indexdb.handle_learning_japanese_upgrade);
return indexed.db.on.cljs$core$IFn$_invoke$arity$3($__$3,"success",(function (_){
cljs.core.reset_BANG_(howard.learning_japanese.indexdb.learning_japanese_db,$__$3);

return (res.cljs$core$IFn$_invoke$arity$0 ? res.cljs$core$IFn$_invoke$arity$0() : res.call(null));
}));
})));
});
/**
 * get words form indexdb.
 */
howard.learning_japanese.indexdb.get_words_data_from_indexdb = (function howard$learning_japanese$indexdb$get_words_data_from_indexdb(){
return (new Promise((function (res){
var trans = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(cljs.core.deref(howard.learning_japanese.indexdb.learning_japanese_db))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["words"], null),"readwrite");
var store = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(trans,"words");
var data = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
return indexed.db.on.cljs$core$IFn$_invoke$arity$3(indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$1(store),"success",(function (e){
var cursor = indexed.db.result(indexed.db.create_request(e.target));
if((cursor == null)){
var p_data = cljs.core.persistent_BANG_(data);
if((cljs.core.count(p_data) <= (0))){
var G__54746 = howard.learning_japanese.indexdb.sync_words_data();
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(G__54746) : res.call(null,G__54746));
} else {
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(p_data) : res.call(null,p_data));
}
} else {
var val = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(indexed.db.value(indexed.db.create_cursor_with_value(cursor)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(data,val);

return indexed.db.continue$.cljs$core$IFn$_invoke$arity$1(indexed.db.create_cursor_with_value(cursor));
}
}));
})));
});
/**
 * handle check list upgrade
 */
howard.learning_japanese.indexdb.handle_check_list_upgrade = (function howard$learning_japanese$indexdb$handle_check_list_upgrade(event){
console.log("inside handle-check-list-upgraded");

return indexed.db.create_object_store.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(indexed.db.get_request(indexed.db.create_version_change_event(event)))),"check-lists",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-path","key-path",878473308),"word",new cljs.core.Keyword(null,"auto-increment","auto-increment",2054074588),true], null));
});
howard.learning_japanese.indexdb.open_check_list = (function howard$learning_japanese$indexdb$open_check_list(){
return (new Promise((function (res){
var $ = indexed.db.open.cljs$core$IFn$_invoke$arity$2("check-list",(1));
var $__$1 = indexed.db.on.cljs$core$IFn$_invoke$arity$3($,"error",(function (event){
return console.log("inside error",event);
}));
var $__$2 = indexed.db.on.cljs$core$IFn$_invoke$arity$3($__$1,"blocked",(function (event){
return console.log("inside blocked",event);
}));
var $__$3 = indexed.db.on.cljs$core$IFn$_invoke$arity$3($__$2,"upgradeneeded",howard.learning_japanese.indexdb.handle_check_list_upgrade);
return indexed.db.on.cljs$core$IFn$_invoke$arity$3($__$3,"success",(function (_){
cljs.core.reset_BANG_(howard.learning_japanese.indexdb.check_list_db,$__$3);

return (res.cljs$core$IFn$_invoke$arity$0 ? res.cljs$core$IFn$_invoke$arity$0() : res.call(null));
}));
})));
});
howard.learning_japanese.indexdb.check_list = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word","word",-420123725),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.number_QMARK_], null);
howard.learning_japanese.indexdb.check_list_spec = spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("howard.learning-japanese.indexdb","check-list-spec","howard.learning-japanese.indexdb/check-list-spec",-568353226),new cljs.core.Keyword(null,"spec","spec",347520401),howard.learning_japanese.indexdb.check_list], null));
/**
 * add to datascrit, need to make sure that datascript initialize first
 *   Return the data that original count + (:count data)
 *   
 */
howard.learning_japanese.indexdb.add_check_list_count_to_datascript = (function howard$learning_japanese$indexdb$add_check_list_count_to_datascript(data){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(howard.learning_japanese.indexdb.check_list_spec,data)){
} else {
throw (new Error("Assert failed: (s/valid? check-list-spec data)"));
}

if((!((cljs.core.deref(howard.learning_japanese.indexdb.ds_check_list_db) == null)))){
} else {
throw (new Error("Assert failed: (not (nil? (clojure.core/deref ds-check-list-db)))"));
}

var count = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(data);
var word = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(data);
var e = cljs.core.first((function (){var G__54747 = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"find","find",496279456),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("howard.learning-japanese.indexdb","?e","howard.learning-japanese.indexdb/?e",1479325508,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("howard.learning-japanese.indexdb","?c","howard.learning-japanese.indexdb/?c",-754453354,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"where","where",-2044795965),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("howard.learning-japanese.indexdb","?e","howard.learning-japanese.indexdb/?e",1479325508,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"word","word",-420123725),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,word,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("howard.learning-japanese.indexdb","?e","howard.learning-japanese.indexdb/?e",1479325508,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"count","count",2139924085),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("howard.learning-japanese.indexdb","?c","howard.learning-japanese.indexdb/?c",-754453354,null),null,(1),null))], 0))))),null,(1),null))], 0)))));
var G__54748 = cljs.core.deref(cljs.core.deref(howard.learning_japanese.indexdb.ds_check_list_db));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__54747,G__54748) : datascript.core.q.call(null,G__54747,G__54748));
})());
if((e == null)){
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(howard.learning_japanese.indexdb.ds_check_list_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null));

return data;
} else {
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(howard.learning_japanese.indexdb.ds_check_list_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),cljs.core.first(e),new cljs.core.Keyword(null,"count","count",2139924085),(cljs.core.second(e) + count)], null)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"count","count",2139924085),(count + cljs.core.second(e)));
}
});
/**
 * update indexdb by record
 */
howard.learning_japanese.indexdb.update_check_list_index_db = (function howard$learning_japanese$indexdb$update_check_list_index_db(record){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(howard.learning_japanese.indexdb.check_list_spec,record)){
} else {
throw (new Error("Assert failed: (s/valid? check-list-spec record)"));
}

if((!((cljs.core.deref(howard.learning_japanese.indexdb.check_list_db) == null)))){
} else {
throw (new Error("Assert failed: (not (nil? (clojure.core/deref check-list-db)))"));
}

var tx = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(cljs.core.deref(howard.learning_japanese.indexdb.check_list_db))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["check-lists"], null),"readwrite");
var store = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(tx,"check-lists");
return indexed.db.put.cljs$core$IFn$_invoke$arity$2(store,howard.learning_japanese.indexdb.to_js_obj(record));
});
/**
 * insert check list record to db
 * will first add to datascript
 * then add to indexedDB
 *   
 */
howard.learning_japanese.indexdb.update_check_list_record = (function howard$learning_japanese$indexdb$update_check_list_record(data){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(howard.learning_japanese.indexdb.check_list_spec,data)){
} else {
throw (new Error("Assert failed: (s/valid? check-list-spec data)"));
}

return howard.learning_japanese.indexdb.update_check_list_index_db(howard.learning_japanese.indexdb.add_check_list_count_to_datascript(data));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"update-check-list-record","update-check-list-record",1764529232),(function (record){
return howard.learning_japanese.indexdb.update_check_list_record(record);
}));
/**
 * get check-list-data-from indexdb
 */
howard.learning_japanese.indexdb.get_check_list_data_from_indexdb = (function howard$learning_japanese$indexdb$get_check_list_data_from_indexdb(){
return (new Promise((function (res){
var trans = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(cljs.core.deref(howard.learning_japanese.indexdb.check_list_db))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["check-lists"], null),"readwrite");
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
 * init and open indexdb
 */
howard.learning_japanese.indexdb.init_indexdb = (function howard$learning_japanese$indexdb$init_indexdb(){
return (new Promise((function (res){
var c__36062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36063__auto__ = (function (){var switch__35946__auto__ = (function (state_54785){
var state_val_54786 = (state_54785[(1)]);
if((state_val_54786 === (7))){
var inst_54752 = (state_54785[(7)]);
var state_54785__$1 = state_54785;
var statearr_54787_54941 = state_54785__$1;
(statearr_54787_54941[(2)] = inst_54752);

(statearr_54787_54941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (1))){
var inst_54749 = howard.learning_japanese.indexdb.open_learning_japanese();
var inst_54750 = cljs.core.async.interop.p__GT_c(inst_54749);
var state_54785__$1 = state_54785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54785__$1,(2),inst_54750);
} else {
if((state_val_54786 === (4))){
var inst_54753 = (state_54785[(8)]);
var state_54785__$1 = state_54785;
var statearr_54788_54945 = state_54785__$1;
(statearr_54788_54945[(2)] = inst_54753);

(statearr_54788_54945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (15))){
var inst_54782 = (state_54785[(2)]);
var inst_54783 = (res.cljs$core$IFn$_invoke$arity$0 ? res.cljs$core$IFn$_invoke$arity$0() : res.call(null));
var state_54785__$1 = (function (){var statearr_54789 = state_54785;
(statearr_54789[(9)] = inst_54782);

return statearr_54789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54785__$1,inst_54783);
} else {
if((state_val_54786 === (13))){
var inst_54769 = (state_54785[(10)]);
var inst_54779 = (function(){throw inst_54769})();
var state_54785__$1 = state_54785;
var statearr_54790_54946 = state_54785__$1;
(statearr_54790_54946[(2)] = inst_54779);

(statearr_54790_54946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (6))){
var inst_54752 = (state_54785[(7)]);
var inst_54762 = (function(){throw inst_54752})();
var state_54785__$1 = state_54785;
var statearr_54791_54947 = state_54785__$1;
(statearr_54791_54947[(2)] = inst_54762);

(statearr_54791_54947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (3))){
var inst_54752 = (state_54785[(7)]);
var inst_54755 = cljs.core.ex_data(inst_54752);
var inst_54756 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54755);
var inst_54757 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54756,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_54785__$1 = state_54785;
var statearr_54792_54948 = state_54785__$1;
(statearr_54792_54948[(2)] = inst_54757);

(statearr_54792_54948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (12))){
var inst_54777 = (state_54785[(2)]);
var state_54785__$1 = state_54785;
if(cljs.core.truth_(inst_54777)){
var statearr_54793_54950 = state_54785__$1;
(statearr_54793_54950[(1)] = (13));

} else {
var statearr_54794_54951 = state_54785__$1;
(statearr_54794_54951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (2))){
var inst_54752 = (state_54785[(7)]);
var inst_54753 = (state_54785[(8)]);
var inst_54752__$1 = (state_54785[(2)]);
var inst_54753__$1 = (inst_54752__$1 instanceof cljs.core.ExceptionInfo);
var state_54785__$1 = (function (){var statearr_54795 = state_54785;
(statearr_54795[(7)] = inst_54752__$1);

(statearr_54795[(8)] = inst_54753__$1);

return statearr_54795;
})();
if(cljs.core.truth_(inst_54753__$1)){
var statearr_54796_54952 = state_54785__$1;
(statearr_54796_54952[(1)] = (3));

} else {
var statearr_54797_54953 = state_54785__$1;
(statearr_54797_54953[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (11))){
var inst_54770 = (state_54785[(11)]);
var state_54785__$1 = state_54785;
var statearr_54798_54954 = state_54785__$1;
(statearr_54798_54954[(2)] = inst_54770);

(statearr_54798_54954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (9))){
var inst_54769 = (state_54785[(10)]);
var inst_54770 = (state_54785[(11)]);
var inst_54769__$1 = (state_54785[(2)]);
var inst_54770__$1 = (inst_54769__$1 instanceof cljs.core.ExceptionInfo);
var state_54785__$1 = (function (){var statearr_54799 = state_54785;
(statearr_54799[(10)] = inst_54769__$1);

(statearr_54799[(11)] = inst_54770__$1);

return statearr_54799;
})();
if(cljs.core.truth_(inst_54770__$1)){
var statearr_54800_54956 = state_54785__$1;
(statearr_54800_54956[(1)] = (10));

} else {
var statearr_54801_54957 = state_54785__$1;
(statearr_54801_54957[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (5))){
var inst_54760 = (state_54785[(2)]);
var state_54785__$1 = state_54785;
if(cljs.core.truth_(inst_54760)){
var statearr_54802_54958 = state_54785__$1;
(statearr_54802_54958[(1)] = (6));

} else {
var statearr_54803_54959 = state_54785__$1;
(statearr_54803_54959[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (14))){
var inst_54769 = (state_54785[(10)]);
var state_54785__$1 = state_54785;
var statearr_54804_54960 = state_54785__$1;
(statearr_54804_54960[(2)] = inst_54769);

(statearr_54804_54960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (10))){
var inst_54769 = (state_54785[(10)]);
var inst_54772 = cljs.core.ex_data(inst_54769);
var inst_54773 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54772);
var inst_54774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54773,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_54785__$1 = state_54785;
var statearr_54805_54961 = state_54785__$1;
(statearr_54805_54961[(2)] = inst_54774);

(statearr_54805_54961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54786 === (8))){
var inst_54765 = (state_54785[(2)]);
var inst_54766 = howard.learning_japanese.indexdb.open_check_list();
var inst_54767 = cljs.core.async.interop.p__GT_c(inst_54766);
var state_54785__$1 = (function (){var statearr_54806 = state_54785;
(statearr_54806[(12)] = inst_54765);

return statearr_54806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54785__$1,(9),inst_54767);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto__ = null;
var howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto____0 = (function (){
var statearr_54807 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54807[(0)] = howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto__);

(statearr_54807[(1)] = (1));

return statearr_54807;
});
var howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto____1 = (function (state_54785){
while(true){
var ret_value__35948__auto__ = (function (){try{while(true){
var result__35949__auto__ = switch__35946__auto__(state_54785);
if(cljs.core.keyword_identical_QMARK_(result__35949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35949__auto__;
}
break;
}
}catch (e54808){var ex__35950__auto__ = e54808;
var statearr_54809_54964 = state_54785;
(statearr_54809_54964[(2)] = ex__35950__auto__);


if(cljs.core.seq((state_54785[(4)]))){
var statearr_54810_54965 = state_54785;
(statearr_54810_54965[(1)] = cljs.core.first((state_54785[(4)])));

} else {
throw ex__35950__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54967 = state_54785;
state_54785 = G__54967;
continue;
} else {
return ret_value__35948__auto__;
}
break;
}
});
howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto__ = function(state_54785){
switch(arguments.length){
case 0:
return howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto____0.call(this);
case 1:
return howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto____1.call(this,state_54785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$0 = howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto____0;
howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$1 = howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto____1;
return howard$learning_japanese$indexdb$init_indexdb_$_state_machine__35947__auto__;
})()
})();
var state__36064__auto__ = (function (){var statearr_54811 = f__36063__auto__();
(statearr_54811[(6)] = c__36062__auto__);

return statearr_54811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36064__auto__);
}));

return c__36062__auto__;
})));
});
/**
 * setup datascript db
 *   need to wait until data atom done
 */
howard.learning_japanese.indexdb.setup_datascript = (function howard$learning_japanese$indexdb$setup_datascript(data){
var conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,data);

return conn;
});
/**
 * get datascript db
 */
howard.learning_japanese.indexdb.get_ds_db = (function howard$learning_japanese$indexdb$get_ds_db(){
return cljs.core.deref(cljs.core.deref(howard.learning_japanese.indexdb.ds_learning_japanese_db));
});
howard.learning_japanese.indexdb.get_ds_check_list_db = (function howard$learning_japanese$indexdb$get_ds_check_list_db(){
return cljs.core.deref(cljs.core.deref(howard.learning_japanese.indexdb.ds_check_list_db));
});
/**
 * setup memory db from indexdb, and store it into ds-db
 *   wont sync indexdb data
 *   
 */
howard.learning_japanese.indexdb.setup_memory_db = (function howard$learning_japanese$indexdb$setup_memory_db(){
var c__36062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36063__auto__ = (function (){var switch__35946__auto__ = (function (state_54876){
var state_val_54877 = (state_54876[(1)]);
if((state_val_54877 === (7))){
var inst_54819 = (state_54876[(7)]);
var state_54876__$1 = state_54876;
var statearr_54878_54971 = state_54876__$1;
(statearr_54878_54971[(2)] = inst_54819);

(statearr_54878_54971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (20))){
var inst_54853 = (state_54876[(8)]);
var inst_54863 = (function(){throw inst_54853})();
var state_54876__$1 = state_54876;
var statearr_54879_54972 = state_54876__$1;
(statearr_54879_54972[(2)] = inst_54863);

(statearr_54879_54972[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (1))){
var inst_54812 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54813 = [new cljs.core.Keyword("app","set-app-status","app/set-app-status",1059973664),new cljs.core.Keyword("howard.learning-japanese.indexdb","init","howard.learning-japanese.indexdb/init",-1345094547)];
var inst_54814 = (new cljs.core.PersistentVector(null,2,(5),inst_54812,inst_54813,null));
var inst_54815 = re_frame.core.dispatch(inst_54814);
var inst_54816 = howard.learning_japanese.indexdb.init_indexdb();
var inst_54817 = cljs.core.async.interop.p__GT_c(inst_54816);
var state_54876__$1 = (function (){var statearr_54880 = state_54876;
(statearr_54880[(9)] = inst_54815);

return statearr_54880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54876__$1,(2),inst_54817);
} else {
if((state_val_54877 === (4))){
var inst_54820 = (state_54876[(10)]);
var state_54876__$1 = state_54876;
var statearr_54881_54973 = state_54876__$1;
(statearr_54881_54973[(2)] = inst_54820);

(statearr_54881_54973[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (15))){
var inst_54849 = (state_54876[(2)]);
var inst_54850 = howard.learning_japanese.indexdb.get_check_list_data_from_indexdb();
var inst_54851 = cljs.core.async.interop.p__GT_c(inst_54850);
var state_54876__$1 = (function (){var statearr_54882 = state_54876;
(statearr_54882[(11)] = inst_54849);

return statearr_54882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54876__$1,(16),inst_54851);
} else {
if((state_val_54877 === (21))){
var inst_54853 = (state_54876[(8)]);
var state_54876__$1 = state_54876;
var statearr_54883_54974 = state_54876__$1;
(statearr_54883_54974[(2)] = inst_54853);

(statearr_54883_54974[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (13))){
var inst_54836 = (state_54876[(12)]);
var inst_54846 = (function(){throw inst_54836})();
var state_54876__$1 = state_54876;
var statearr_54884_54975 = state_54876__$1;
(statearr_54884_54975[(2)] = inst_54846);

(statearr_54884_54975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (22))){
var inst_54849 = (state_54876[(11)]);
var inst_54866 = (state_54876[(2)]);
var inst_54867 = howard.learning_japanese.indexdb.setup_datascript(inst_54849);
var inst_54868 = cljs.core.reset_BANG_(howard.learning_japanese.indexdb.ds_learning_japanese_db,inst_54867);
var inst_54869 = howard.learning_japanese.indexdb.setup_datascript(inst_54866);
var inst_54870 = cljs.core.reset_BANG_(howard.learning_japanese.indexdb.ds_check_list_db,inst_54869);
var inst_54871 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54872 = [new cljs.core.Keyword("app","set-app-status","app/set-app-status",1059973664),new cljs.core.Keyword(null,"finish","finish",-586688046)];
var inst_54873 = (new cljs.core.PersistentVector(null,2,(5),inst_54871,inst_54872,null));
var inst_54874 = re_frame.core.dispatch(inst_54873);
var state_54876__$1 = (function (){var statearr_54885 = state_54876;
(statearr_54885[(13)] = inst_54868);

(statearr_54885[(14)] = inst_54870);

return statearr_54885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54876__$1,inst_54874);
} else {
if((state_val_54877 === (6))){
var inst_54819 = (state_54876[(7)]);
var inst_54829 = (function(){throw inst_54819})();
var state_54876__$1 = state_54876;
var statearr_54886_54977 = state_54876__$1;
(statearr_54886_54977[(2)] = inst_54829);

(statearr_54886_54977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (17))){
var inst_54853 = (state_54876[(8)]);
var inst_54856 = cljs.core.ex_data(inst_54853);
var inst_54857 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54856);
var inst_54858 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54857,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_54876__$1 = state_54876;
var statearr_54887_54978 = state_54876__$1;
(statearr_54887_54978[(2)] = inst_54858);

(statearr_54887_54978[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (3))){
var inst_54819 = (state_54876[(7)]);
var inst_54822 = cljs.core.ex_data(inst_54819);
var inst_54823 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54822);
var inst_54824 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54823,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_54876__$1 = state_54876;
var statearr_54888_54979 = state_54876__$1;
(statearr_54888_54979[(2)] = inst_54824);

(statearr_54888_54979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (12))){
var inst_54844 = (state_54876[(2)]);
var state_54876__$1 = state_54876;
if(cljs.core.truth_(inst_54844)){
var statearr_54889_54980 = state_54876__$1;
(statearr_54889_54980[(1)] = (13));

} else {
var statearr_54890_54981 = state_54876__$1;
(statearr_54890_54981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (2))){
var inst_54820 = (state_54876[(10)]);
var inst_54819 = (state_54876[(7)]);
var inst_54819__$1 = (state_54876[(2)]);
var inst_54820__$1 = (inst_54819__$1 instanceof cljs.core.ExceptionInfo);
var state_54876__$1 = (function (){var statearr_54891 = state_54876;
(statearr_54891[(10)] = inst_54820__$1);

(statearr_54891[(7)] = inst_54819__$1);

return statearr_54891;
})();
if(cljs.core.truth_(inst_54820__$1)){
var statearr_54892_54982 = state_54876__$1;
(statearr_54892_54982[(1)] = (3));

} else {
var statearr_54893_54983 = state_54876__$1;
(statearr_54893_54983[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (19))){
var inst_54861 = (state_54876[(2)]);
var state_54876__$1 = state_54876;
if(cljs.core.truth_(inst_54861)){
var statearr_54894_54984 = state_54876__$1;
(statearr_54894_54984[(1)] = (20));

} else {
var statearr_54895_54985 = state_54876__$1;
(statearr_54895_54985[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (11))){
var inst_54837 = (state_54876[(15)]);
var state_54876__$1 = state_54876;
var statearr_54896_54986 = state_54876__$1;
(statearr_54896_54986[(2)] = inst_54837);

(statearr_54896_54986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (9))){
var inst_54837 = (state_54876[(15)]);
var inst_54836 = (state_54876[(12)]);
var inst_54836__$1 = (state_54876[(2)]);
var inst_54837__$1 = (inst_54836__$1 instanceof cljs.core.ExceptionInfo);
var state_54876__$1 = (function (){var statearr_54897 = state_54876;
(statearr_54897[(15)] = inst_54837__$1);

(statearr_54897[(12)] = inst_54836__$1);

return statearr_54897;
})();
if(cljs.core.truth_(inst_54837__$1)){
var statearr_54898_54987 = state_54876__$1;
(statearr_54898_54987[(1)] = (10));

} else {
var statearr_54899_54988 = state_54876__$1;
(statearr_54899_54988[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (5))){
var inst_54827 = (state_54876[(2)]);
var state_54876__$1 = state_54876;
if(cljs.core.truth_(inst_54827)){
var statearr_54900_54993 = state_54876__$1;
(statearr_54900_54993[(1)] = (6));

} else {
var statearr_54901_54994 = state_54876__$1;
(statearr_54901_54994[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (14))){
var inst_54836 = (state_54876[(12)]);
var state_54876__$1 = state_54876;
var statearr_54902_54995 = state_54876__$1;
(statearr_54902_54995[(2)] = inst_54836);

(statearr_54902_54995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (16))){
var inst_54853 = (state_54876[(8)]);
var inst_54854 = (state_54876[(16)]);
var inst_54853__$1 = (state_54876[(2)]);
var inst_54854__$1 = (inst_54853__$1 instanceof cljs.core.ExceptionInfo);
var state_54876__$1 = (function (){var statearr_54903 = state_54876;
(statearr_54903[(8)] = inst_54853__$1);

(statearr_54903[(16)] = inst_54854__$1);

return statearr_54903;
})();
if(cljs.core.truth_(inst_54854__$1)){
var statearr_54904_54996 = state_54876__$1;
(statearr_54904_54996[(1)] = (17));

} else {
var statearr_54905_54997 = state_54876__$1;
(statearr_54905_54997[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (10))){
var inst_54836 = (state_54876[(12)]);
var inst_54839 = cljs.core.ex_data(inst_54836);
var inst_54840 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54839);
var inst_54841 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54840,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_54876__$1 = state_54876;
var statearr_54906_54999 = state_54876__$1;
(statearr_54906_54999[(2)] = inst_54841);

(statearr_54906_54999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (18))){
var inst_54854 = (state_54876[(16)]);
var state_54876__$1 = state_54876;
var statearr_54907_55000 = state_54876__$1;
(statearr_54907_55000[(2)] = inst_54854);

(statearr_54907_55000[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54877 === (8))){
var inst_54832 = (state_54876[(2)]);
var inst_54833 = howard.learning_japanese.indexdb.get_words_data_from_indexdb();
var inst_54834 = cljs.core.async.interop.p__GT_c(inst_54833);
var state_54876__$1 = (function (){var statearr_54908 = state_54876;
(statearr_54908[(17)] = inst_54832);

return statearr_54908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54876__$1,(9),inst_54834);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto__ = null;
var howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto____0 = (function (){
var statearr_54909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54909[(0)] = howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto__);

(statearr_54909[(1)] = (1));

return statearr_54909;
});
var howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto____1 = (function (state_54876){
while(true){
var ret_value__35948__auto__ = (function (){try{while(true){
var result__35949__auto__ = switch__35946__auto__(state_54876);
if(cljs.core.keyword_identical_QMARK_(result__35949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35949__auto__;
}
break;
}
}catch (e54910){var ex__35950__auto__ = e54910;
var statearr_54911_55001 = state_54876;
(statearr_54911_55001[(2)] = ex__35950__auto__);


if(cljs.core.seq((state_54876[(4)]))){
var statearr_54912_55002 = state_54876;
(statearr_54912_55002[(1)] = cljs.core.first((state_54876[(4)])));

} else {
throw ex__35950__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55003 = state_54876;
state_54876 = G__55003;
continue;
} else {
return ret_value__35948__auto__;
}
break;
}
});
howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto__ = function(state_54876){
switch(arguments.length){
case 0:
return howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto____0.call(this);
case 1:
return howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto____1.call(this,state_54876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$0 = howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto____0;
howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$1 = howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto____1;
return howard$learning_japanese$indexdb$setup_memory_db_$_state_machine__35947__auto__;
})()
})();
var state__36064__auto__ = (function (){var statearr_54913 = f__36063__auto__();
(statearr_54913[(6)] = c__36062__auto__);

return statearr_54913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36064__auto__);
}));

return c__36062__auto__;
});

//# sourceMappingURL=howard.learning_japanese.indexdb.js.map
