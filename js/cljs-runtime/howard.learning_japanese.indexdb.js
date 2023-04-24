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

return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("words.edn",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
console.log(cljs.core.deref(howard.learning_japanese.indexdb.indexdb));

var data_48433 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response);
var tx_48434 = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(cljs.core.deref(howard.learning_japanese.indexdb.indexdb))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["words"], null),"readwrite");
var store_48435 = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(tx_48434,"words");
var seq__48372_48436 = cljs.core.seq(data_48433);
var chunk__48373_48437 = null;
var count__48374_48438 = (0);
var i__48375_48439 = (0);
while(true){
if((i__48375_48439 < count__48374_48438)){
var it_48440 = chunk__48373_48437.cljs$core$IIndexed$_nth$arity$2(null,i__48375_48439);
console.log("insert: ",howard.learning_japanese.indexdb.to_js_obj(it_48440));

indexed.db.put.cljs$core$IFn$_invoke$arity$2(store_48435,howard.learning_japanese.indexdb.to_js_obj(it_48440));


var G__48441 = seq__48372_48436;
var G__48442 = chunk__48373_48437;
var G__48443 = count__48374_48438;
var G__48444 = (i__48375_48439 + (1));
seq__48372_48436 = G__48441;
chunk__48373_48437 = G__48442;
count__48374_48438 = G__48443;
i__48375_48439 = G__48444;
continue;
} else {
var temp__5753__auto___48445 = cljs.core.seq(seq__48372_48436);
if(temp__5753__auto___48445){
var seq__48372_48446__$1 = temp__5753__auto___48445;
if(cljs.core.chunked_seq_QMARK_(seq__48372_48446__$1)){
var c__5568__auto___48447 = cljs.core.chunk_first(seq__48372_48446__$1);
var G__48448 = cljs.core.chunk_rest(seq__48372_48446__$1);
var G__48449 = c__5568__auto___48447;
var G__48450 = cljs.core.count(c__5568__auto___48447);
var G__48451 = (0);
seq__48372_48436 = G__48448;
chunk__48373_48437 = G__48449;
count__48374_48438 = G__48450;
i__48375_48439 = G__48451;
continue;
} else {
var it_48452 = cljs.core.first(seq__48372_48446__$1);
console.log("insert: ",howard.learning_japanese.indexdb.to_js_obj(it_48452));

indexed.db.put.cljs$core$IFn$_invoke$arity$2(store_48435,howard.learning_japanese.indexdb.to_js_obj(it_48452));


var G__48453 = cljs.core.next(seq__48372_48446__$1);
var G__48454 = null;
var G__48455 = (0);
var G__48456 = (0);
seq__48372_48436 = G__48453;
chunk__48373_48437 = G__48454;
count__48374_48438 = G__48455;
i__48375_48439 = G__48456;
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
var f__36017__auto__ = (function (){var switch__35946__auto__ = (function (state_48413){
var state_val_48414 = (state_48413[(1)]);
if((state_val_48414 === (1))){
var inst_48376 = console.log("inside word data");
var inst_48377 = [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_48378 = cljs.core.PersistentVector.EMPTY;
var inst_48379 = cljs.core.transient$(inst_48378);
var inst_48380 = [inst_48379,new cljs.core.Keyword(null,"none","none",1333468478)];
var inst_48381 = cljs.core.PersistentHashMap.fromArrays(inst_48377,inst_48380);
var inst_48382 = cljs.core.reset_BANG_(howard.learning_japanese.indexdb.data,inst_48381);
var inst_48383 = howard.learning_japanese.indexdb.wait_db_done();
var inst_48384 = cljs.core.async.interop.p__GT_c(inst_48383);
var state_48413__$1 = (function (){var statearr_48415 = state_48413;
(statearr_48415[(7)] = inst_48382);

(statearr_48415[(8)] = inst_48376);

return statearr_48415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48413__$1,(2),inst_48384);
} else {
if((state_val_48414 === (2))){
var inst_48387 = (state_48413[(9)]);
var inst_48386 = (state_48413[(10)]);
var inst_48386__$1 = (state_48413[(2)]);
var inst_48387__$1 = (inst_48386__$1 instanceof cljs.core.ExceptionInfo);
var state_48413__$1 = (function (){var statearr_48416 = state_48413;
(statearr_48416[(9)] = inst_48387__$1);

(statearr_48416[(10)] = inst_48386__$1);

return statearr_48416;
})();
if(cljs.core.truth_(inst_48387__$1)){
var statearr_48417_48457 = state_48413__$1;
(statearr_48417_48457[(1)] = (3));

} else {
var statearr_48418_48458 = state_48413__$1;
(statearr_48418_48458[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48414 === (3))){
var inst_48386 = (state_48413[(10)]);
var inst_48389 = cljs.core.ex_data(inst_48386);
var inst_48390 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_48389);
var inst_48391 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48390,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_48413__$1 = state_48413;
var statearr_48419_48459 = state_48413__$1;
(statearr_48419_48459[(2)] = inst_48391);

(statearr_48419_48459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48414 === (4))){
var inst_48387 = (state_48413[(9)]);
var state_48413__$1 = state_48413;
var statearr_48420_48460 = state_48413__$1;
(statearr_48420_48460[(2)] = inst_48387);

(statearr_48420_48460[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48414 === (5))){
var inst_48394 = (state_48413[(2)]);
var state_48413__$1 = state_48413;
if(cljs.core.truth_(inst_48394)){
var statearr_48421_48461 = state_48413__$1;
(statearr_48421_48461[(1)] = (6));

} else {
var statearr_48422_48462 = state_48413__$1;
(statearr_48422_48462[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48414 === (6))){
var inst_48386 = (state_48413[(10)]);
var inst_48396 = (function(){throw inst_48386})();
var state_48413__$1 = state_48413;
var statearr_48423_48463 = state_48413__$1;
(statearr_48423_48463[(2)] = inst_48396);

(statearr_48423_48463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48414 === (7))){
var inst_48386 = (state_48413[(10)]);
var state_48413__$1 = state_48413;
var statearr_48424_48464 = state_48413__$1;
(statearr_48424_48464[(2)] = inst_48386);

(statearr_48424_48464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48414 === (8))){
var inst_48399 = (state_48413[(2)]);
var inst_48400 = cljs.core.deref(howard.learning_japanese.indexdb.indexdb);
var inst_48401 = indexed.db.result(inst_48400);
var inst_48402 = indexed.db.create_database(inst_48401);
var inst_48403 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48404 = ["words"];
var inst_48405 = (new cljs.core.PersistentVector(null,1,(5),inst_48403,inst_48404,null));
var inst_48406 = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(inst_48402,inst_48405,"readwrite");
var inst_48407 = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(inst_48406,"words");
var inst_48408 = console.log("get data out of indexdb..");
var inst_48409 = indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$1(inst_48407);
var inst_48410 = (function (){var _ = inst_48399;
var trans = inst_48406;
var store = inst_48407;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(howard.learning_japanese.indexdb.data,(function (p__48425){
var map__48426 = p__48425;
var map__48426__$1 = cljs.core.__destructure_map(map__48426);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48426__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var val = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(indexed.db.value(indexed.db.create_cursor_with_value(cursor)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(data,val)], null);
}));

return indexed.db.continue$.cljs$core$IFn$_invoke$arity$1(indexed.db.create_cursor_with_value(cursor));
}
});
})();
var inst_48411 = indexed.db.on.cljs$core$IFn$_invoke$arity$3(inst_48409,"success",inst_48410);
var state_48413__$1 = (function (){var statearr_48427 = state_48413;
(statearr_48427[(11)] = inst_48408);

return statearr_48427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48413__$1,inst_48411);
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
var statearr_48428 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48428[(0)] = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__);

(statearr_48428[(1)] = (1));

return statearr_48428;
});
var howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1 = (function (state_48413){
while(true){
var ret_value__35948__auto__ = (function (){try{while(true){
var result__35949__auto__ = switch__35946__auto__(state_48413);
if(cljs.core.keyword_identical_QMARK_(result__35949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35949__auto__;
}
break;
}
}catch (e48429){var ex__35950__auto__ = e48429;
var statearr_48430_48467 = state_48413;
(statearr_48430_48467[(2)] = ex__35950__auto__);


if(cljs.core.seq((state_48413[(4)]))){
var statearr_48431_48468 = state_48413;
(statearr_48431_48468[(1)] = cljs.core.first((state_48413[(4)])));

} else {
throw ex__35950__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48469 = state_48413;
state_48413 = G__48469;
continue;
} else {
return ret_value__35948__auto__;
}
break;
}
});
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__ = function(state_48413){
switch(arguments.length){
case 0:
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____0.call(this);
case 1:
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1.call(this,state_48413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$0 = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____0;
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$1 = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1;
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__;
})()
})();
var state__36018__auto__ = (function (){var statearr_48432 = f__36017__auto__();
(statearr_48432[(6)] = c__36016__auto__);

return statearr_48432;
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
