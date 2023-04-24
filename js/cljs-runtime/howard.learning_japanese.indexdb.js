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

var data_48211 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response);
var tx_48212 = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(indexed.db.create_database(indexed.db.result(cljs.core.deref(howard.learning_japanese.indexdb.indexdb))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["words"], null),"readwrite");
var store_48213 = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(tx_48212,"words");
var seq__48150_48214 = cljs.core.seq(data_48211);
var chunk__48151_48215 = null;
var count__48152_48216 = (0);
var i__48153_48217 = (0);
while(true){
if((i__48153_48217 < count__48152_48216)){
var it_48218 = chunk__48151_48215.cljs$core$IIndexed$_nth$arity$2(null,i__48153_48217);
console.log("insert: ",howard.learning_japanese.indexdb.to_js_obj(it_48218));

indexed.db.put.cljs$core$IFn$_invoke$arity$2(store_48213,howard.learning_japanese.indexdb.to_js_obj(it_48218));


var G__48219 = seq__48150_48214;
var G__48220 = chunk__48151_48215;
var G__48221 = count__48152_48216;
var G__48222 = (i__48153_48217 + (1));
seq__48150_48214 = G__48219;
chunk__48151_48215 = G__48220;
count__48152_48216 = G__48221;
i__48153_48217 = G__48222;
continue;
} else {
var temp__5753__auto___48223 = cljs.core.seq(seq__48150_48214);
if(temp__5753__auto___48223){
var seq__48150_48224__$1 = temp__5753__auto___48223;
if(cljs.core.chunked_seq_QMARK_(seq__48150_48224__$1)){
var c__5568__auto___48225 = cljs.core.chunk_first(seq__48150_48224__$1);
var G__48226 = cljs.core.chunk_rest(seq__48150_48224__$1);
var G__48227 = c__5568__auto___48225;
var G__48228 = cljs.core.count(c__5568__auto___48225);
var G__48229 = (0);
seq__48150_48214 = G__48226;
chunk__48151_48215 = G__48227;
count__48152_48216 = G__48228;
i__48153_48217 = G__48229;
continue;
} else {
var it_48230 = cljs.core.first(seq__48150_48224__$1);
console.log("insert: ",howard.learning_japanese.indexdb.to_js_obj(it_48230));

indexed.db.put.cljs$core$IFn$_invoke$arity$2(store_48213,howard.learning_japanese.indexdb.to_js_obj(it_48230));


var G__48231 = cljs.core.next(seq__48150_48224__$1);
var G__48232 = null;
var G__48233 = (0);
var G__48234 = (0);
seq__48150_48214 = G__48231;
chunk__48151_48215 = G__48232;
count__48152_48216 = G__48233;
i__48153_48217 = G__48234;
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
var f__36017__auto__ = (function (){var switch__35946__auto__ = (function (state_48191){
var state_val_48192 = (state_48191[(1)]);
if((state_val_48192 === (1))){
var inst_48154 = console.log("inside word data");
var inst_48155 = [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_48156 = cljs.core.PersistentVector.EMPTY;
var inst_48157 = cljs.core.transient$(inst_48156);
var inst_48158 = [inst_48157,new cljs.core.Keyword(null,"none","none",1333468478)];
var inst_48159 = cljs.core.PersistentHashMap.fromArrays(inst_48155,inst_48158);
var inst_48160 = cljs.core.reset_BANG_(howard.learning_japanese.indexdb.data,inst_48159);
var inst_48161 = howard.learning_japanese.indexdb.wait_db_done();
var inst_48162 = cljs.core.async.interop.p__GT_c(inst_48161);
var state_48191__$1 = (function (){var statearr_48193 = state_48191;
(statearr_48193[(7)] = inst_48160);

(statearr_48193[(8)] = inst_48154);

return statearr_48193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48191__$1,(2),inst_48162);
} else {
if((state_val_48192 === (2))){
var inst_48164 = (state_48191[(9)]);
var inst_48165 = (state_48191[(10)]);
var inst_48164__$1 = (state_48191[(2)]);
var inst_48165__$1 = (inst_48164__$1 instanceof cljs.core.ExceptionInfo);
var state_48191__$1 = (function (){var statearr_48194 = state_48191;
(statearr_48194[(9)] = inst_48164__$1);

(statearr_48194[(10)] = inst_48165__$1);

return statearr_48194;
})();
if(cljs.core.truth_(inst_48165__$1)){
var statearr_48195_48235 = state_48191__$1;
(statearr_48195_48235[(1)] = (3));

} else {
var statearr_48196_48236 = state_48191__$1;
(statearr_48196_48236[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48192 === (3))){
var inst_48164 = (state_48191[(9)]);
var inst_48167 = cljs.core.ex_data(inst_48164);
var inst_48168 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_48167);
var inst_48169 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48168,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_48191__$1 = state_48191;
var statearr_48197_48237 = state_48191__$1;
(statearr_48197_48237[(2)] = inst_48169);

(statearr_48197_48237[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48192 === (4))){
var inst_48165 = (state_48191[(10)]);
var state_48191__$1 = state_48191;
var statearr_48198_48238 = state_48191__$1;
(statearr_48198_48238[(2)] = inst_48165);

(statearr_48198_48238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48192 === (5))){
var inst_48172 = (state_48191[(2)]);
var state_48191__$1 = state_48191;
if(cljs.core.truth_(inst_48172)){
var statearr_48199_48239 = state_48191__$1;
(statearr_48199_48239[(1)] = (6));

} else {
var statearr_48200_48240 = state_48191__$1;
(statearr_48200_48240[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48192 === (6))){
var inst_48164 = (state_48191[(9)]);
var inst_48174 = (function(){throw inst_48164})();
var state_48191__$1 = state_48191;
var statearr_48201_48241 = state_48191__$1;
(statearr_48201_48241[(2)] = inst_48174);

(statearr_48201_48241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48192 === (7))){
var inst_48164 = (state_48191[(9)]);
var state_48191__$1 = state_48191;
var statearr_48202_48242 = state_48191__$1;
(statearr_48202_48242[(2)] = inst_48164);

(statearr_48202_48242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48192 === (8))){
var inst_48177 = (state_48191[(2)]);
var inst_48178 = cljs.core.deref(howard.learning_japanese.indexdb.indexdb);
var inst_48179 = indexed.db.result(inst_48178);
var inst_48180 = indexed.db.create_database(inst_48179);
var inst_48181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48182 = ["words"];
var inst_48183 = (new cljs.core.PersistentVector(null,1,(5),inst_48181,inst_48182,null));
var inst_48184 = indexed.db.transaction.cljs$core$IFn$_invoke$arity$3(inst_48180,inst_48183,"readwrite");
var inst_48185 = indexed.db.object_store.cljs$core$IFn$_invoke$arity$2(inst_48184,"words");
var inst_48186 = console.log("get data out of indexdb..");
var inst_48187 = indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$1(inst_48185);
var inst_48188 = (function (){var _ = inst_48177;
var trans = inst_48184;
var store = inst_48185;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(howard.learning_japanese.indexdb.data,(function (p__48203){
var map__48204 = p__48203;
var map__48204__$1 = cljs.core.__destructure_map(map__48204);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48204__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var val = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(indexed.db.value(indexed.db.create_cursor_with_value(cursor)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(data,val)], null);
}));

return indexed.db.continue$.cljs$core$IFn$_invoke$arity$1(indexed.db.create_cursor_with_value(cursor));
}
});
})();
var inst_48189 = indexed.db.on.cljs$core$IFn$_invoke$arity$3(inst_48187,"success",inst_48188);
var state_48191__$1 = (function (){var statearr_48205 = state_48191;
(statearr_48205[(11)] = inst_48186);

return statearr_48205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48191__$1,inst_48189);
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
var statearr_48206 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48206[(0)] = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__);

(statearr_48206[(1)] = (1));

return statearr_48206;
});
var howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1 = (function (state_48191){
while(true){
var ret_value__35948__auto__ = (function (){try{while(true){
var result__35949__auto__ = switch__35946__auto__(state_48191);
if(cljs.core.keyword_identical_QMARK_(result__35949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35949__auto__;
}
break;
}
}catch (e48207){var ex__35950__auto__ = e48207;
var statearr_48208_48245 = state_48191;
(statearr_48208_48245[(2)] = ex__35950__auto__);


if(cljs.core.seq((state_48191[(4)]))){
var statearr_48209_48246 = state_48191;
(statearr_48209_48246[(1)] = cljs.core.first((state_48191[(4)])));

} else {
throw ex__35950__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35948__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48247 = state_48191;
state_48191 = G__48247;
continue;
} else {
return ret_value__35948__auto__;
}
break;
}
});
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__ = function(state_48191){
switch(arguments.length){
case 0:
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____0.call(this);
case 1:
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1.call(this,state_48191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$0 = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____0;
howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__.cljs$core$IFn$_invoke$arity$1 = howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto____1;
return howard$learning_japanese$indexdb$get_words_data_$_state_machine__35947__auto__;
})()
})();
var state__36018__auto__ = (function (){var statearr_48210 = f__36017__auto__();
(statearr_48210[(6)] = c__36016__auto__);

return statearr_48210;
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
