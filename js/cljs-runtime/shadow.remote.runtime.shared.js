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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__44453,res){
var map__44454 = p__44453;
var map__44454__$1 = cljs.core.__destructure_map(map__44454);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44454__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44454__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__44455 = res;
var G__44455__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44455,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__44455);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44455__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__44455__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__44461 = arguments.length;
switch (G__44461) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__44465,msg,handlers,timeout_after_ms){
var map__44467 = p__44465;
var map__44467__$1 = cljs.core.__destructure_map(map__44467);
var runtime = map__44467__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44467__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44735 = arguments.length;
var i__5770__auto___44736 = (0);
while(true){
if((i__5770__auto___44736 < len__5769__auto___44735)){
args__5775__auto__.push((arguments[i__5770__auto___44736]));

var G__44738 = (i__5770__auto___44736 + (1));
i__5770__auto___44736 = G__44738;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__44484,ev,args){
var map__44485 = p__44484;
var map__44485__$1 = cljs.core.__destructure_map(map__44485);
var runtime = map__44485__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44485__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__44486 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__44489 = null;
var count__44490 = (0);
var i__44491 = (0);
while(true){
if((i__44491 < count__44490)){
var ext = chunk__44489.cljs$core$IIndexed$_nth$arity$2(null,i__44491);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__44742 = seq__44486;
var G__44743 = chunk__44489;
var G__44744 = count__44490;
var G__44745 = (i__44491 + (1));
seq__44486 = G__44742;
chunk__44489 = G__44743;
count__44490 = G__44744;
i__44491 = G__44745;
continue;
} else {
var G__44746 = seq__44486;
var G__44747 = chunk__44489;
var G__44748 = count__44490;
var G__44749 = (i__44491 + (1));
seq__44486 = G__44746;
chunk__44489 = G__44747;
count__44490 = G__44748;
i__44491 = G__44749;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44486);
if(temp__5753__auto__){
var seq__44486__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44486__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44486__$1);
var G__44751 = cljs.core.chunk_rest(seq__44486__$1);
var G__44752 = c__5568__auto__;
var G__44753 = cljs.core.count(c__5568__auto__);
var G__44754 = (0);
seq__44486 = G__44751;
chunk__44489 = G__44752;
count__44490 = G__44753;
i__44491 = G__44754;
continue;
} else {
var ext = cljs.core.first(seq__44486__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__44756 = cljs.core.next(seq__44486__$1);
var G__44757 = null;
var G__44758 = (0);
var G__44759 = (0);
seq__44486 = G__44756;
chunk__44489 = G__44757;
count__44490 = G__44758;
i__44491 = G__44759;
continue;
} else {
var G__44761 = cljs.core.next(seq__44486__$1);
var G__44762 = null;
var G__44763 = (0);
var G__44764 = (0);
seq__44486 = G__44761;
chunk__44489 = G__44762;
count__44490 = G__44763;
i__44491 = G__44764;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq44480){
var G__44481 = cljs.core.first(seq44480);
var seq44480__$1 = cljs.core.next(seq44480);
var G__44482 = cljs.core.first(seq44480__$1);
var seq44480__$2 = cljs.core.next(seq44480__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44481,G__44482,seq44480__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__44556,p__44557){
var map__44564 = p__44556;
var map__44564__$1 = cljs.core.__destructure_map(map__44564);
var runtime = map__44564__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44564__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__44565 = p__44557;
var map__44565__$1 = cljs.core.__destructure_map(map__44565);
var msg = map__44565__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44565__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__44566 = cljs.core.deref(state_ref);
var map__44566__$1 = cljs.core.__destructure_map(map__44566);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44566__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44566__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__44585){
var map__44587 = p__44585;
var map__44587__$1 = cljs.core.__destructure_map(map__44587);
var runtime = map__44587__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44587__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__44598,msg){
var map__44600 = p__44598;
var map__44600__$1 = cljs.core.__destructure_map(map__44600);
var runtime = map__44600__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44600__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__44624,key,p__44625){
var map__44626 = p__44624;
var map__44626__$1 = cljs.core.__destructure_map(map__44626);
var state = map__44626__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44626__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__44627 = p__44625;
var map__44627__$1 = cljs.core.__destructure_map(map__44627);
var spec = map__44627__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44627__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__44632,key,spec){
var map__44633 = p__44632;
var map__44633__$1 = cljs.core.__destructure_map(map__44633);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44633__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__44635_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__44635_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__44636_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__44636_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__44637_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__44637_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__44638_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__44638_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__44639_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__44639_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__44645,key){
var map__44646 = p__44645;
var map__44646__$1 = cljs.core.__destructure_map(map__44646);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44646__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__44651,msg){
var map__44653 = p__44651;
var map__44653__$1 = cljs.core.__destructure_map(map__44653);
var runtime = map__44653__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44653__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__44667,p__44668){
var map__44669 = p__44667;
var map__44669__$1 = cljs.core.__destructure_map(map__44669);
var runtime = map__44669__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44669__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__44670 = p__44668;
var map__44670__$1 = cljs.core.__destructure_map(map__44670);
var msg = map__44670__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44670__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44670__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__44693 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__44695 = null;
var count__44696 = (0);
var i__44697 = (0);
while(true){
if((i__44697 < count__44696)){
var map__44715 = chunk__44695.cljs$core$IIndexed$_nth$arity$2(null,i__44697);
var map__44715__$1 = cljs.core.__destructure_map(map__44715);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44715__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__44869 = seq__44693;
var G__44870 = chunk__44695;
var G__44871 = count__44696;
var G__44872 = (i__44697 + (1));
seq__44693 = G__44869;
chunk__44695 = G__44870;
count__44696 = G__44871;
i__44697 = G__44872;
continue;
} else {
var G__44874 = seq__44693;
var G__44875 = chunk__44695;
var G__44876 = count__44696;
var G__44877 = (i__44697 + (1));
seq__44693 = G__44874;
chunk__44695 = G__44875;
count__44696 = G__44876;
i__44697 = G__44877;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44693);
if(temp__5753__auto__){
var seq__44693__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44693__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44693__$1);
var G__44879 = cljs.core.chunk_rest(seq__44693__$1);
var G__44880 = c__5568__auto__;
var G__44881 = cljs.core.count(c__5568__auto__);
var G__44882 = (0);
seq__44693 = G__44879;
chunk__44695 = G__44880;
count__44696 = G__44881;
i__44697 = G__44882;
continue;
} else {
var map__44717 = cljs.core.first(seq__44693__$1);
var map__44717__$1 = cljs.core.__destructure_map(map__44717);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44717__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__44883 = cljs.core.next(seq__44693__$1);
var G__44884 = null;
var G__44885 = (0);
var G__44886 = (0);
seq__44693 = G__44883;
chunk__44695 = G__44884;
count__44696 = G__44885;
i__44697 = G__44886;
continue;
} else {
var G__44887 = cljs.core.next(seq__44693__$1);
var G__44888 = null;
var G__44889 = (0);
var G__44890 = (0);
seq__44693 = G__44887;
chunk__44695 = G__44888;
count__44696 = G__44889;
i__44697 = G__44890;
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
