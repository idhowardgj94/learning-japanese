goog.provide('howard.learning_japanese.indexdb');
howard.learning_japanese.indexdb.db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
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

return cljs.core.reset_BANG_(howard.learning_japanese.indexdb.db,idb);
});
howard.learning_japanese.indexdb.sync_words_data = (function howard$learning_japanese$indexdb$sync_words_data(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","set-app-status","howard.learning-japanese.events/set-app-status",792249199),new cljs.core.Keyword(null,"get-words-data","get-words-data",397272038)], null));

return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("words.edn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
console.log(cljs.core.deref(howard.learning_japanese.indexdb.db));

var data_54276 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response);
var tx_54277 = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(cljs.core.deref(howard.learning_japanese.indexdb.db))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["words"], null),"readwrite");
var store_54278 = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(tx_54277,"words");
var seq__54203_54279 = cljs.core.seq(data_54276);
var chunk__54204_54280 = null;
var count__54205_54281 = (0);
var i__54206_54282 = (0);
while(true){
if((i__54206_54282 < count__54205_54281)){
var it_54283 = chunk__54204_54280.cljs$core$IIndexed$_nth$arity$2(null,i__54206_54282);
console.log("insert: ",howard.learning_japanese.indexdb.to_js_obj(it_54283));

indexed.db.put.cljs$core$IFn$_invoke$arity$2(store_54278,howard.learning_japanese.indexdb.to_js_obj(it_54283));


var G__54284 = seq__54203_54279;
var G__54285 = chunk__54204_54280;
var G__54286 = count__54205_54281;
var G__54287 = (i__54206_54282 + (1));
seq__54203_54279 = G__54284;
chunk__54204_54280 = G__54285;
count__54205_54281 = G__54286;
i__54206_54282 = G__54287;
continue;
} else {
var temp__5753__auto___54288 = cljs.core.seq(seq__54203_54279);
if(temp__5753__auto___54288){
var seq__54203_54289__$1 = temp__5753__auto___54288;
if(cljs.core.chunked_seq_QMARK_(seq__54203_54289__$1)){
var c__5568__auto___54290 = cljs.core.chunk_first(seq__54203_54289__$1);
var G__54291 = cljs.core.chunk_rest(seq__54203_54289__$1);
var G__54292 = c__5568__auto___54290;
var G__54293 = cljs.core.count(c__5568__auto___54290);
var G__54294 = (0);
seq__54203_54279 = G__54291;
chunk__54204_54280 = G__54292;
count__54205_54281 = G__54293;
i__54206_54282 = G__54294;
continue;
} else {
var it_54297 = cljs.core.first(seq__54203_54289__$1);
console.log("insert: ",howard.learning_japanese.indexdb.to_js_obj(it_54297));

indexed.db.put.cljs$core$IFn$_invoke$arity$2(store_54278,howard.learning_japanese.indexdb.to_js_obj(it_54297));


var G__54298 = cljs.core.next(seq__54203_54289__$1);
var G__54299 = null;
var G__54300 = (0);
var G__54301 = (0);
seq__54203_54279 = G__54298;
chunk__54204_54280 = G__54299;
count__54205_54281 = G__54300;
i__54206_54282 = G__54301;
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
if((cljs.core.deref(howard.learning_japanese.indexdb.db) == null)){
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
var c__36062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36063__auto__ = (function (){var switch__35946__auto__ = (function (state_54251){
var state_val_54252 = (state_54251[(1)]);
if((state_val_54252 === (1))){
var inst_54211 = [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_54212 = cljs.core.PersistentVector.EMPTY;
var inst_54213 = cljs.core.transient$(inst_54212);
var inst_54215 = [inst_54213,new cljs.core.Keyword(null,"none","none",1333468478)];
var inst_54216 = cljs.core.PersistentHashMap.fromArrays(inst_54211,inst_54215);
var inst_54217 = cljs.core.reset_BANG_(howard.learning_japanese.indexdb.data,inst_54216);
var inst_54219 = howard.learning_japanese.indexdb.wait_db_done();
var inst_54220 = cljs.core.async.interop.p__GT_c(inst_54219);
var state_54251__$1 = (function (){var statearr_54253 = state_54251;
(statearr_54253[(7)] = inst_54217);

return statearr_54253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54251__$1,(2),inst_54220);
} else {
if((state_val_54252 === (2))){
var inst_54223 = (state_54251[(8)]);
var inst_54222 = (state_54251[(9)]);
var inst_54222__$1 = (state_54251[(2)]);
var inst_54223__$1 = (inst_54222__$1 instanceof cljs.core.ExceptionInfo);
var state_54251__$1 = (function (){var statearr_54256 = state_54251;
(statearr_54256[(8)] = inst_54223__$1);

(statearr_54256[(9)] = inst_54222__$1);

return statearr_54256;
})();
if(cljs.core.truth_(inst_54223__$1)){
var statearr_54257_54302 = state_54251__$1;
(statearr_54257_54302[(1)] = (3));

} else {
var statearr_54258_54303 = state_54251__$1;
(statearr_54258_54303[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54252 === (3))){
var inst_54222 = (state_54251[(9)]);
var inst_54225 = cljs.core.ex_data(inst_54222);
var inst_54226 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_54225);
var inst_54227 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54226,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_54251__$1 = state_54251;
var statearr_54259_54304 = state_54251__$1;
(statearr_54259_54304[(2)] = inst_54227);

(statearr_54259_54304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54252 === (4))){
var inst_54223 = (state_54251[(8)]);
var state_54251__$1 = state_54251;
var statearr_54260_54305 = state_54251__$1;
(statearr_54260_54305[(2)] = inst_54223);

(statearr_54260_54305[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54252 === (5))){
var inst_54230 = (state_54251[(2)]);
var state_54251__$1 = state_54251;
if(cljs.core.truth_(inst_54230)){
var statearr_54261_54306 = state_54251__$1;
(statearr_54261_54306[(1)] = (6));

} else {
var statearr_54262_54307 = state_54251__$1;
(statearr_54262_54307[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54252 === (6))){
var inst_54222 = (state_54251[(9)]);
var inst_54232 = (function(){throw inst_54222})();
var state_54251__$1 = state_54251;
var statearr_54264_54308 = state_54251__$1;
(statearr_54264_54308[(2)] = inst_54232);

(statearr_54264_54308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54252 === (7))){
var inst_54222 = (state_54251[(9)]);
var state_54251__$1 = state_54251;
var statearr_54265_54309 = state_54251__$1;
(statearr_54265_54309[(2)] = inst_54222);

(statearr_54265_54309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54252 === (8))){
var inst_54235 = (state_54251[(2)]);
var inst_54236 = cljs.core.deref(howard.learning_japanese.indexdb.db);
var inst_54237 = indexed.db.result(inst_54236);
var inst_54238 = indexed.db.create_database(inst_54237);
var inst_54239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54240 = ["words"];
var inst_54241 = (new cljs.core.PersistentVector(null,1,(5),inst_54239,inst_54240,null));
var inst_54242 = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(inst_54238,inst_54241,"readwrite");
var inst_54243 = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(inst_54242,"words");
var inst_54244 = console.log("get data out of indexdb..");
var inst_54245 = indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$1(inst_54243);
var inst_54246 = (function (){var _ = inst_54235;
var trans = inst_54242;
var store = inst_54243;
return (function (e){
var cursor = indexed.db.result(indexed.db.create_request(e.target));
if((cursor == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(howard.learning_japanese.indexdb.data,(function (p__54266){
var map__54267 = p__54266;
var map__54267__$1 = cljs.core.__destructure_map(map__54267);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54267__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.persistent_BANG_(data)], null);
}));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(howard.learning_japanese.indexdb.data,(function (p__54268){
var map__54269 = p__54268;
var map__54269__$1 = cljs.core.__destructure_map(map__54269);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54269__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var val = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(indexed.db.value(indexed.db.create_cursor_with_value(cursor)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(data,val)], null);
}));

return indexed.db.continue$.cljs$core$IFn$_invoke$arity$1(indexed.db.create_cursor_with_value(cursor));
}
});
})();
var inst_54247 = indexed.db.on.cljs$core$IFn$_invoke$arity$3(inst_54245,"success",inst_54246);
var state_54251__$1 = (function (){var statearr_54270 = state_54251;
(statearr_54270[(10)] = inst_54244);

return statearr_54270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54251__$1,inst_54247);
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
var statearr_54271 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54271[(0)] = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__);

(statearr_54271[(1)] = (1));

return statearr_54271;
});
var howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1 = (function (state_54251){
while(true){
var ret_value__35948__auto__ = (function (){try{while(true){
var result__35949__auto__ = switch__35946__auto__(state_54251);
if(cljs.core.keyword_identical_QMARK_(result__35949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35949__auto__;
}
break;
}
}catch (e54272){var ex__35950__auto__ = e54272;
var statearr_54273_54310 = state_54251;
(statearr_54273_54310[(2)] = ex__35950__auto__);


if(cljs.core.seq((state_54251[(4)]))){
var statearr_54274_54311 = state_54251;
(statearr_54274_54311[(1)] = cljs.core.first((state_54251[(4)])));

} else {
throw ex__35950__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54312 = state_54251;
state_54251 = G__54312;
continue;
} else {
return ret_value__35948__auto__;
}
break;
}
});
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__ = function(state_54251){
switch(arguments.length){
case 0:
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____0.call(this);
case 1:
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1.call(this,state_54251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$0 = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____0;
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$1 = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1;
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__;
})()
})();
var state__36064__auto__ = (function (){var statearr_54275 = f__36063__auto__();
(statearr_54275[(6)] = c__36062__auto__);

return statearr_54275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36064__auto__);
}));

return c__36062__auto__;
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
