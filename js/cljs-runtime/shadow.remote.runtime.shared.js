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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__48969,res){
var map__48970 = p__48969;
var map__48970__$1 = cljs.core.__destructure_map(map__48970);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48970__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48970__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__48971 = res;
var G__48971__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48971,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__48971);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48971__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__48971__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__48973 = arguments.length;
switch (G__48973) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__48974,msg,handlers,timeout_after_ms){
var map__48975 = p__48974;
var map__48975__$1 = cljs.core.__destructure_map(map__48975);
var runtime = map__48975__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48975__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49188 = arguments.length;
var i__5770__auto___49189 = (0);
while(true){
if((i__5770__auto___49189 < len__5769__auto___49188)){
args__5775__auto__.push((arguments[i__5770__auto___49189]));

var G__49191 = (i__5770__auto___49189 + (1));
i__5770__auto___49189 = G__49191;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__48983,ev,args){
var map__48985 = p__48983;
var map__48985__$1 = cljs.core.__destructure_map(map__48985);
var runtime = map__48985__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48985__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__48990 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48993 = null;
var count__48994 = (0);
var i__48995 = (0);
while(true){
if((i__48995 < count__48994)){
var ext = chunk__48993.cljs$core$IIndexed$_nth$arity$2(null,i__48995);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__49200 = seq__48990;
var G__49201 = chunk__48993;
var G__49202 = count__48994;
var G__49203 = (i__48995 + (1));
seq__48990 = G__49200;
chunk__48993 = G__49201;
count__48994 = G__49202;
i__48995 = G__49203;
continue;
} else {
var G__49205 = seq__48990;
var G__49206 = chunk__48993;
var G__49207 = count__48994;
var G__49208 = (i__48995 + (1));
seq__48990 = G__49205;
chunk__48993 = G__49206;
count__48994 = G__49207;
i__48995 = G__49208;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48990);
if(temp__5753__auto__){
var seq__48990__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48990__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48990__$1);
var G__49213 = cljs.core.chunk_rest(seq__48990__$1);
var G__49214 = c__5568__auto__;
var G__49215 = cljs.core.count(c__5568__auto__);
var G__49216 = (0);
seq__48990 = G__49213;
chunk__48993 = G__49214;
count__48994 = G__49215;
i__48995 = G__49216;
continue;
} else {
var ext = cljs.core.first(seq__48990__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__49218 = cljs.core.next(seq__48990__$1);
var G__49219 = null;
var G__49220 = (0);
var G__49221 = (0);
seq__48990 = G__49218;
chunk__48993 = G__49219;
count__48994 = G__49220;
i__48995 = G__49221;
continue;
} else {
var G__49222 = cljs.core.next(seq__48990__$1);
var G__49223 = null;
var G__49224 = (0);
var G__49225 = (0);
seq__48990 = G__49222;
chunk__48993 = G__49223;
count__48994 = G__49224;
i__48995 = G__49225;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq48977){
var G__48978 = cljs.core.first(seq48977);
var seq48977__$1 = cljs.core.next(seq48977);
var G__48979 = cljs.core.first(seq48977__$1);
var seq48977__$2 = cljs.core.next(seq48977__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48978,G__48979,seq48977__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__49033,p__49034){
var map__49035 = p__49033;
var map__49035__$1 = cljs.core.__destructure_map(map__49035);
var runtime = map__49035__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__49036 = p__49034;
var map__49036__$1 = cljs.core.__destructure_map(map__49036);
var msg = map__49036__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49036__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__49041 = cljs.core.deref(state_ref);
var map__49041__$1 = cljs.core.__destructure_map(map__49041);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49041__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49041__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__49052){
var map__49053 = p__49052;
var map__49053__$1 = cljs.core.__destructure_map(map__49053);
var runtime = map__49053__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49053__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__49061,msg){
var map__49062 = p__49061;
var map__49062__$1 = cljs.core.__destructure_map(map__49062);
var runtime = map__49062__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49062__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__49074,key,p__49075){
var map__49076 = p__49074;
var map__49076__$1 = cljs.core.__destructure_map(map__49076);
var state = map__49076__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49076__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__49077 = p__49075;
var map__49077__$1 = cljs.core.__destructure_map(map__49077);
var spec = map__49077__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49077__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__49084,key,spec){
var map__49085 = p__49084;
var map__49085__$1 = cljs.core.__destructure_map(map__49085);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49085__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__49087_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__49087_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__49088_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__49088_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__49089_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__49089_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__49090_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__49090_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__49091_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__49091_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__49099,key){
var map__49100 = p__49099;
var map__49100__$1 = cljs.core.__destructure_map(map__49100);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49100__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__49102,msg){
var map__49103 = p__49102;
var map__49103__$1 = cljs.core.__destructure_map(map__49103);
var runtime = map__49103__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49103__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__49104,p__49105){
var map__49108 = p__49104;
var map__49108__$1 = cljs.core.__destructure_map(map__49108);
var runtime = map__49108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__49109 = p__49105;
var map__49109__$1 = cljs.core.__destructure_map(map__49109);
var msg = map__49109__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49109__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49109__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__49127 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__49129 = null;
var count__49130 = (0);
var i__49131 = (0);
while(true){
if((i__49131 < count__49130)){
var map__49147 = chunk__49129.cljs$core$IIndexed$_nth$arity$2(null,i__49131);
var map__49147__$1 = cljs.core.__destructure_map(map__49147);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49147__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__49387 = seq__49127;
var G__49388 = chunk__49129;
var G__49389 = count__49130;
var G__49390 = (i__49131 + (1));
seq__49127 = G__49387;
chunk__49129 = G__49388;
count__49130 = G__49389;
i__49131 = G__49390;
continue;
} else {
var G__49391 = seq__49127;
var G__49392 = chunk__49129;
var G__49393 = count__49130;
var G__49394 = (i__49131 + (1));
seq__49127 = G__49391;
chunk__49129 = G__49392;
count__49130 = G__49393;
i__49131 = G__49394;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49127);
if(temp__5753__auto__){
var seq__49127__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49127__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49127__$1);
var G__49396 = cljs.core.chunk_rest(seq__49127__$1);
var G__49397 = c__5568__auto__;
var G__49398 = cljs.core.count(c__5568__auto__);
var G__49399 = (0);
seq__49127 = G__49396;
chunk__49129 = G__49397;
count__49130 = G__49398;
i__49131 = G__49399;
continue;
} else {
var map__49150 = cljs.core.first(seq__49127__$1);
var map__49150__$1 = cljs.core.__destructure_map(map__49150);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49150__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__49404 = cljs.core.next(seq__49127__$1);
var G__49405 = null;
var G__49406 = (0);
var G__49407 = (0);
seq__49127 = G__49404;
chunk__49129 = G__49405;
count__49130 = G__49406;
i__49131 = G__49407;
continue;
} else {
var G__49408 = cljs.core.next(seq__49127__$1);
var G__49409 = null;
var G__49410 = (0);
var G__49411 = (0);
seq__49127 = G__49408;
chunk__49129 = G__49409;
count__49130 = G__49410;
i__49131 = G__49411;
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
