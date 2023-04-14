goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45441,res){
var map__45442 = p__45441;
var map__45442__$1 = cljs.core.__destructure_map(map__45442);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45442__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45442__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45444 = res;
var G__45444__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45444,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45444);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45444__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45444__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45446 = arguments.length;
switch (G__45446) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45447,msg,handlers,timeout_after_ms){
var map__45448 = p__45447;
var map__45448__$1 = cljs.core.__destructure_map(map__45448);
var runtime = map__45448__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45448__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45702 = arguments.length;
var i__5770__auto___45704 = (0);
while(true){
if((i__5770__auto___45704 < len__5769__auto___45702)){
args__5775__auto__.push((arguments[i__5770__auto___45704]));

var G__45705 = (i__5770__auto___45704 + (1));
i__5770__auto___45704 = G__45705;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45456,ev,args){
var map__45457 = p__45456;
var map__45457__$1 = cljs.core.__destructure_map(map__45457);
var runtime = map__45457__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45457__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__45458 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45461 = null;
var count__45462 = (0);
var i__45463 = (0);
while(true){
if((i__45463 < count__45462)){
var ext = chunk__45461.cljs$core$IIndexed$_nth$arity$2(null,i__45463);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45714 = seq__45458;
var G__45715 = chunk__45461;
var G__45716 = count__45462;
var G__45717 = (i__45463 + (1));
seq__45458 = G__45714;
chunk__45461 = G__45715;
count__45462 = G__45716;
i__45463 = G__45717;
continue;
} else {
var G__45718 = seq__45458;
var G__45719 = chunk__45461;
var G__45720 = count__45462;
var G__45721 = (i__45463 + (1));
seq__45458 = G__45718;
chunk__45461 = G__45719;
count__45462 = G__45720;
i__45463 = G__45721;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45458);
if(temp__5753__auto__){
var seq__45458__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45458__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45458__$1);
var G__45722 = cljs.core.chunk_rest(seq__45458__$1);
var G__45723 = c__5568__auto__;
var G__45724 = cljs.core.count(c__5568__auto__);
var G__45725 = (0);
seq__45458 = G__45722;
chunk__45461 = G__45723;
count__45462 = G__45724;
i__45463 = G__45725;
continue;
} else {
var ext = cljs.core.first(seq__45458__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45727 = cljs.core.next(seq__45458__$1);
var G__45728 = null;
var G__45729 = (0);
var G__45730 = (0);
seq__45458 = G__45727;
chunk__45461 = G__45728;
count__45462 = G__45729;
i__45463 = G__45730;
continue;
} else {
var G__45731 = cljs.core.next(seq__45458__$1);
var G__45732 = null;
var G__45733 = (0);
var G__45734 = (0);
seq__45458 = G__45731;
chunk__45461 = G__45732;
count__45462 = G__45733;
i__45463 = G__45734;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45451){
var G__45452 = cljs.core.first(seq45451);
var seq45451__$1 = cljs.core.next(seq45451);
var G__45453 = cljs.core.first(seq45451__$1);
var seq45451__$2 = cljs.core.next(seq45451__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45452,G__45453,seq45451__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__45495,p__45496){
var map__45497 = p__45495;
var map__45497__$1 = cljs.core.__destructure_map(map__45497);
var runtime = map__45497__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45497__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45498 = p__45496;
var map__45498__$1 = cljs.core.__destructure_map(map__45498);
var msg = map__45498__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45498__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__45500 = cljs.core.deref(state_ref);
var map__45500__$1 = cljs.core.__destructure_map(map__45500);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45500__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45500__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__45509){
var map__45511 = p__45509;
var map__45511__$1 = cljs.core.__destructure_map(map__45511);
var runtime = map__45511__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45511__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__45536,msg){
var map__45538 = p__45536;
var map__45538__$1 = cljs.core.__destructure_map(map__45538);
var runtime = map__45538__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45538__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__45597,key,p__45598){
var map__45600 = p__45597;
var map__45600__$1 = cljs.core.__destructure_map(map__45600);
var state = map__45600__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45600__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__45601 = p__45598;
var map__45601__$1 = cljs.core.__destructure_map(map__45601);
var spec = map__45601__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45601__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__45610,key,spec){
var map__45611 = p__45610;
var map__45611__$1 = cljs.core.__destructure_map(map__45611);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45611__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__45612_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__45612_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__45613_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__45613_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__45614_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__45614_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__45615_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__45615_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__45616_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__45616_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__45631,key){
var map__45632 = p__45631;
var map__45632__$1 = cljs.core.__destructure_map(map__45632);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45632__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__45650,msg){
var map__45651 = p__45650;
var map__45651__$1 = cljs.core.__destructure_map(map__45651);
var runtime = map__45651__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45651__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__45660,p__45661){
var map__45662 = p__45660;
var map__45662__$1 = cljs.core.__destructure_map(map__45662);
var runtime = map__45662__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45662__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45663 = p__45661;
var map__45663__$1 = cljs.core.__destructure_map(map__45663);
var msg = map__45663__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45663__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45663__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__45670 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45672 = null;
var count__45673 = (0);
var i__45674 = (0);
while(true){
if((i__45674 < count__45673)){
var map__45683 = chunk__45672.cljs$core$IIndexed$_nth$arity$2(null,i__45674);
var map__45683__$1 = cljs.core.__destructure_map(map__45683);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45683__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45780 = seq__45670;
var G__45781 = chunk__45672;
var G__45782 = count__45673;
var G__45783 = (i__45674 + (1));
seq__45670 = G__45780;
chunk__45672 = G__45781;
count__45673 = G__45782;
i__45674 = G__45783;
continue;
} else {
var G__45784 = seq__45670;
var G__45785 = chunk__45672;
var G__45786 = count__45673;
var G__45787 = (i__45674 + (1));
seq__45670 = G__45784;
chunk__45672 = G__45785;
count__45673 = G__45786;
i__45674 = G__45787;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45670);
if(temp__5753__auto__){
var seq__45670__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45670__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45670__$1);
var G__45788 = cljs.core.chunk_rest(seq__45670__$1);
var G__45789 = c__5568__auto__;
var G__45790 = cljs.core.count(c__5568__auto__);
var G__45791 = (0);
seq__45670 = G__45788;
chunk__45672 = G__45789;
count__45673 = G__45790;
i__45674 = G__45791;
continue;
} else {
var map__45684 = cljs.core.first(seq__45670__$1);
var map__45684__$1 = cljs.core.__destructure_map(map__45684);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45684__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45796 = cljs.core.next(seq__45670__$1);
var G__45797 = null;
var G__45798 = (0);
var G__45799 = (0);
seq__45670 = G__45796;
chunk__45672 = G__45797;
count__45673 = G__45798;
i__45674 = G__45799;
continue;
} else {
var G__45803 = cljs.core.next(seq__45670__$1);
var G__45804 = null;
var G__45806 = (0);
var G__45807 = (0);
seq__45670 = G__45803;
chunk__45672 = G__45804;
count__45673 = G__45806;
i__45674 = G__45807;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
