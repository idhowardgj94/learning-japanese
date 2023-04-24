goog.provide('howard.learning_japanese.indexdb');
howard.learning_japanese.indexdb.indexdb = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
howard.learning_japanese.indexdb.ds_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
howard.learning_japanese.indexdb.to_js_obj = (function howard$learning_japanese$indexdb$to_js_obj(m){
return cljs.core.clj__GT_js(m);
});
/**
 * handle upgrade db version
 *   current version is 1
 */
howard.learning_japanese.indexdb.handle_upgrade = (function howard$learning_japanese$indexdb$handle_upgrade(event){
console.log("inside handle-upgrade");

return indexed.db.create_index.cljs$core$IFn$_invoke$arity$4(indexed.db.create_object_store.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(indexed.db.get_request(indexed.db.create_version_change_event(event)))),"words",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-path","key-path",878473308),"id",new cljs.core.Keyword(null,"auto-increment","auto-increment",2054074588),true], null)),"chinese","chinese",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique","unique",329397282),false], null));
});
/**
 * handle indexdb success open
 */
howard.learning_japanese.indexdb.handle_success = (function howard$learning_japanese$indexdb$handle_success(event,idb){
console.log("inside handle-success",event);

return cljs.core.reset_BANG_(howard.learning_japanese.indexdb.indexdb,idb);
});
howard.learning_japanese.indexdb.sync_words_data = (function howard$learning_japanese$indexdb$sync_words_data(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","set-app-status","howard.learning-japanese.events/set-app-status",792249199),new cljs.core.Keyword(null,"get-words-data","get-words-data",397272038)], null));

return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/words.edn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
console.log(cljs.core.deref(howard.learning_japanese.indexdb.indexdb));

var data_47969 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response);
var tx_47970 = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(cljs.core.deref(howard.learning_japanese.indexdb.indexdb))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["words"], null),"readwrite");
var store_47971 = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(tx_47970,"words");
var seq__47908_47972 = cljs.core.seq(data_47969);
var chunk__47909_47973 = null;
var count__47910_47974 = (0);
var i__47911_47975 = (0);
while(true){
if((i__47911_47975 < count__47910_47974)){
var it_47976 = chunk__47909_47973.cljs$core$IIndexed$_nth$arity$2(null,i__47911_47975);
console.log("insert: ",howard.learning_japanese.indexdb.to_js_obj(it_47976));

indexed.db.put.cljs$core$IFn$_invoke$arity$2(store_47971,howard.learning_japanese.indexdb.to_js_obj(it_47976));


var G__47977 = seq__47908_47972;
var G__47978 = chunk__47909_47973;
var G__47979 = count__47910_47974;
var G__47980 = (i__47911_47975 + (1));
seq__47908_47972 = G__47977;
chunk__47909_47973 = G__47978;
count__47910_47974 = G__47979;
i__47911_47975 = G__47980;
continue;
} else {
var temp__5753__auto___47981 = cljs.core.seq(seq__47908_47972);
if(temp__5753__auto___47981){
var seq__47908_47982__$1 = temp__5753__auto___47981;
if(cljs.core.chunked_seq_QMARK_(seq__47908_47982__$1)){
var c__5568__auto___47983 = cljs.core.chunk_first(seq__47908_47982__$1);
var G__47984 = cljs.core.chunk_rest(seq__47908_47982__$1);
var G__47985 = c__5568__auto___47983;
var G__47986 = cljs.core.count(c__5568__auto___47983);
var G__47987 = (0);
seq__47908_47972 = G__47984;
chunk__47909_47973 = G__47985;
count__47910_47974 = G__47986;
i__47911_47975 = G__47987;
continue;
} else {
var it_47988 = cljs.core.first(seq__47908_47982__$1);
console.log("insert: ",howard.learning_japanese.indexdb.to_js_obj(it_47988));

indexed.db.put.cljs$core$IFn$_invoke$arity$2(store_47971,howard.learning_japanese.indexdb.to_js_obj(it_47988));


var G__47989 = cljs.core.next(seq__47908_47982__$1);
var G__47990 = null;
var G__47991 = (0);
var G__47992 = (0);
seq__47908_47972 = G__47989;
chunk__47909_47973 = G__47990;
count__47910_47974 = G__47991;
i__47911_47975 = G__47992;
continue;
}
} else {
}
}
break;
}

return (howard.learning_japanese.indexdb.setup_memory_db.cljs$core$IFn$_invoke$arity$0 ? howard.learning_japanese.indexdb.setup_memory_db.cljs$core$IFn$_invoke$arity$0() : howard.learning_japanese.indexdb.setup_memory_db.call(null));
})], null)], 0));
});
/**
 * wait for db done
 */
howard.learning_japanese.indexdb.wait_db_done = (function howard$learning_japanese$indexdb$wait_db_done(){
var timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (new Promise((function (res){
return cljs.core.reset_BANG_(timeout,setInterval((function (){
if((cljs.core.deref(howard.learning_japanese.indexdb.indexdb) == null)){
return null;
} else {
clearTimeout(cljs.core.deref(timeout));

return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(null) : res.call(null,null));
}
}),(1000)));
})));
});
/**
 * init and open indexdb
 */
howard.learning_japanese.indexdb.init_indexdb = (function howard$learning_japanese$indexdb$init_indexdb(){
console.log("init index db 'learning-jpaanese' v1...");

console.log("QQQ?????");

var $ = indexed.db.open.cljs$core$IFn$_invoke$arity$2("learning-japanese",(1));
var $__$1 = indexed.db.on.cljs$core$IFn$_invoke$arity$3($,"error",(function (event){
return console.log("inside error",event);
}));
var $__$2 = indexed.db.on.cljs$core$IFn$_invoke$arity$3($__$1,"blocked",(function (event){
return console.log("inside blocked",event);
}));
var $__$3 = indexed.db.on.cljs$core$IFn$_invoke$arity$3($__$2,"upgradeneeded",howard.learning_japanese.indexdb.handle_upgrade);
return indexed.db.on.cljs$core$IFn$_invoke$arity$3($__$3,"success",(function (event){
return howard.learning_japanese.indexdb.handle_success(event,$__$3);
}));
});
howard.learning_japanese.indexdb.data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"none","none",1333468478)], null));
/**
 * get words form indexdb.
 */
howard.learning_japanese.indexdb.get_words_data = (function howard$learning_japanese$indexdb$get_words_data(){
var c__36016__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36017__auto__ = (function (){var switch__35946__auto__ = (function (state_47949){
var state_val_47950 = (state_47949[(1)]);
if((state_val_47950 === (1))){
var inst_47912 = console.log("inside word data");
var inst_47913 = [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_47914 = cljs.core.PersistentVector.EMPTY;
var inst_47915 = cljs.core.transient$(inst_47914);
var inst_47916 = [inst_47915,new cljs.core.Keyword(null,"none","none",1333468478)];
var inst_47917 = cljs.core.PersistentHashMap.fromArrays(inst_47913,inst_47916);
var inst_47918 = cljs.core.reset_BANG_(howard.learning_japanese.indexdb.data,inst_47917);
var inst_47919 = howard.learning_japanese.indexdb.wait_db_done();
var inst_47920 = cljs.core.async.interop.p__GT_c(inst_47919);
var state_47949__$1 = (function (){var statearr_47951 = state_47949;
(statearr_47951[(7)] = inst_47912);

(statearr_47951[(8)] = inst_47918);

return statearr_47951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47949__$1,(2),inst_47920);
} else {
if((state_val_47950 === (2))){
var inst_47923 = (state_47949[(9)]);
var inst_47922 = (state_47949[(10)]);
var inst_47922__$1 = (state_47949[(2)]);
var inst_47923__$1 = (inst_47922__$1 instanceof cljs.core.ExceptionInfo);
var state_47949__$1 = (function (){var statearr_47952 = state_47949;
(statearr_47952[(9)] = inst_47923__$1);

(statearr_47952[(10)] = inst_47922__$1);

return statearr_47952;
})();
if(cljs.core.truth_(inst_47923__$1)){
var statearr_47953_47996 = state_47949__$1;
(statearr_47953_47996[(1)] = (3));

} else {
var statearr_47954_47997 = state_47949__$1;
(statearr_47954_47997[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47950 === (3))){
var inst_47922 = (state_47949[(10)]);
var inst_47925 = cljs.core.ex_data(inst_47922);
var inst_47926 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_47925);
var inst_47927 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47926,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_47949__$1 = state_47949;
var statearr_47955_47998 = state_47949__$1;
(statearr_47955_47998[(2)] = inst_47927);

(statearr_47955_47998[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47950 === (4))){
var inst_47923 = (state_47949[(9)]);
var state_47949__$1 = state_47949;
var statearr_47956_47999 = state_47949__$1;
(statearr_47956_47999[(2)] = inst_47923);

(statearr_47956_47999[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47950 === (5))){
var inst_47930 = (state_47949[(2)]);
var state_47949__$1 = state_47949;
if(cljs.core.truth_(inst_47930)){
var statearr_47957_48003 = state_47949__$1;
(statearr_47957_48003[(1)] = (6));

} else {
var statearr_47958_48004 = state_47949__$1;
(statearr_47958_48004[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47950 === (6))){
var inst_47922 = (state_47949[(10)]);
var inst_47932 = (function(){throw inst_47922})();
var state_47949__$1 = state_47949;
var statearr_47959_48005 = state_47949__$1;
(statearr_47959_48005[(2)] = inst_47932);

(statearr_47959_48005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47950 === (7))){
var inst_47922 = (state_47949[(10)]);
var state_47949__$1 = state_47949;
var statearr_47960_48006 = state_47949__$1;
(statearr_47960_48006[(2)] = inst_47922);

(statearr_47960_48006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47950 === (8))){
var inst_47935 = (state_47949[(2)]);
var inst_47936 = cljs.core.deref(howard.learning_japanese.indexdb.indexdb);
var inst_47937 = indexed.db.result(inst_47936);
var inst_47938 = indexed.db.create_database(inst_47937);
var inst_47939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47940 = ["words"];
var inst_47941 = (new cljs.core.PersistentVector(null,1,(5),inst_47939,inst_47940,null));
var inst_47942 = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(inst_47938,inst_47941,"readwrite");
var inst_47943 = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(inst_47942,"words");
var inst_47944 = console.log("get data out of indexdb..");
var inst_47945 = indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$1(inst_47943);
var inst_47946 = (function (){var _ = inst_47935;
var trans = inst_47942;
var store = inst_47943;
return (function (e){
var cursor = indexed.db.result(indexed.db.create_request(e.target));
if((cursor == null)){
var p_data = cljs.core.persistent_BANG_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(howard.learning_japanese.indexdb.data)));
if((cljs.core.count(p_data) <= (0))){
console.log("inside if");

return howard.learning_japanese.indexdb.sync_words_data();
} else {
console.log("inside else",cljs.core.clj__GT_js(cljs.core.deref(howard.learning_japanese.indexdb.data)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(howard.learning_japanese.indexdb.data,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),p_data], 0));
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(howard.learning_japanese.indexdb.data,(function (p__47961){
var map__47962 = p__47961;
var map__47962__$1 = cljs.core.__destructure_map(map__47962);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47962__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var val = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(indexed.db.value(indexed.db.create_cursor_with_value(cursor)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(data,val)], null);
}));

return indexed.db.continue$.cljs$core$IFn$_invoke$arity$1(indexed.db.create_cursor_with_value(cursor));
}
});
})();
var inst_47947 = indexed.db.on.cljs$core$IFn$_invoke$arity$3(inst_47945,"success",inst_47946);
var state_47949__$1 = (function (){var statearr_47963 = state_47949;
(statearr_47963[(11)] = inst_47944);

return statearr_47963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47949__$1,inst_47947);
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
});
return (function() {
var howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__ = null;
var howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____0 = (function (){
var statearr_47964 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47964[(0)] = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__);

(statearr_47964[(1)] = (1));

return statearr_47964;
});
var howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1 = (function (state_47949){
while(true){
var ret_value__35948__auto__ = (function (){try{while(true){
var result__35949__auto__ = switch__35946__auto__(state_47949);
if(cljs.core.keyword_identical_QMARK_(result__35949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35949__auto__;
}
break;
}
}catch (e47965){var ex__35950__auto__ = e47965;
var statearr_47966_48008 = state_47949;
(statearr_47966_48008[(2)] = ex__35950__auto__);


if(cljs.core.seq((state_47949[(4)]))){
var statearr_47967_48009 = state_47949;
(statearr_47967_48009[(1)] = cljs.core.first((state_47949[(4)])));

} else {
throw ex__35950__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48010 = state_47949;
state_47949 = G__48010;
continue;
} else {
return ret_value__35948__auto__;
}
break;
}
});
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__ = function(state_47949){
switch(arguments.length){
case 0:
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____0.call(this);
case 1:
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1.call(this,state_47949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$0 = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____0;
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$1 = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1;
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__;
})()
})();
var state__36018__auto__ = (function (){var statearr_47968 = f__36017__auto__();
(statearr_47968[(6)] = c__36016__auto__);

return statearr_47968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36018__auto__);
}));

return c__36016__auto__;
});
/**
 * setup datascript db
 *   need to wait until data atom done
 */
howard.learning_japanese.indexdb.setup_datascript = (function howard$learning_japanese$indexdb$setup_datascript(){
var conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(howard.learning_japanese.indexdb.data)));

return conn;
});
/**
 * setup memory db from indexdb, and store it into ds-db
 *   wont sync indexdb data
 *   
 */
howard.learning_japanese.indexdb.setup_memory_db = (function howard$learning_japanese$indexdb$setup_memory_db(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","set-app-status","howard.learning-japanese.events/set-app-status",792249199),new cljs.core.Keyword("howard.learning-japanese.indexdb","init","howard.learning-japanese.indexdb/init",-1345094547)], null));

howard.learning_japanese.indexdb.init_indexdb();

howard.learning_japanese.indexdb.get_words_data();

var timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.reset_BANG_(timeout,setInterval((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(howard.learning_japanese.indexdb.data)),new cljs.core.Keyword(null,"success","success",1890645906))){
console.log("indexdb setup finish");

cljs.core.reset_BANG_(howard.learning_japanese.indexdb.ds_db,howard.learning_japanese.indexdb.setup_datascript());

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","set-app-status","howard.learning-japanese.events/set-app-status",792249199),new cljs.core.Keyword(null,"finish","finish",-586688046)], null));

return clearTimeout(cljs.core.deref(timeout));
} else {
return null;
}
}),(1000)));
});
/**
 * get datascript db
 */
howard.learning_japanese.indexdb.get_ds_db = (function howard$learning_japanese$indexdb$get_ds_db(){
return cljs.core.deref(cljs.core.deref(howard.learning_japanese.indexdb.ds_db));
});

//# sourceMappingURL=howard.learning_japanese.indexdb.js.map
