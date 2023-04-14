goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37153){
var map__37154 = p__37153;
var map__37154__$1 = cljs.core.__destructure_map(map__37154);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__37157_37187 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__37158_37188 = null;
var count__37159_37189 = (0);
var i__37160_37190 = (0);
while(true){
if((i__37160_37190 < count__37159_37189)){
var vec__37172_37191 = chunk__37158_37188.cljs$core$IIndexed$_nth$arity$2(null,i__37160_37190);
var k_37192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37172_37191,(0),null);
var cb_37193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37172_37191,(1),null);
try{var G__37177_37195 = cljs.core.deref(re_frame.trace.traces);
(cb_37193.cljs$core$IFn$_invoke$arity$1 ? cb_37193.cljs$core$IFn$_invoke$arity$1(G__37177_37195) : cb_37193.call(null,G__37177_37195));
}catch (e37176){var e_37197 = e37176;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37192,"while storing",cljs.core.deref(re_frame.trace.traces),e_37197], 0));
}

var G__37198 = seq__37157_37187;
var G__37199 = chunk__37158_37188;
var G__37200 = count__37159_37189;
var G__37201 = (i__37160_37190 + (1));
seq__37157_37187 = G__37198;
chunk__37158_37188 = G__37199;
count__37159_37189 = G__37200;
i__37160_37190 = G__37201;
continue;
} else {
var temp__5753__auto___37202 = cljs.core.seq(seq__37157_37187);
if(temp__5753__auto___37202){
var seq__37157_37203__$1 = temp__5753__auto___37202;
if(cljs.core.chunked_seq_QMARK_(seq__37157_37203__$1)){
var c__5568__auto___37204 = cljs.core.chunk_first(seq__37157_37203__$1);
var G__37205 = cljs.core.chunk_rest(seq__37157_37203__$1);
var G__37206 = c__5568__auto___37204;
var G__37207 = cljs.core.count(c__5568__auto___37204);
var G__37208 = (0);
seq__37157_37187 = G__37205;
chunk__37158_37188 = G__37206;
count__37159_37189 = G__37207;
i__37160_37190 = G__37208;
continue;
} else {
var vec__37178_37209 = cljs.core.first(seq__37157_37203__$1);
var k_37210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37178_37209,(0),null);
var cb_37211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37178_37209,(1),null);
try{var G__37182_37212 = cljs.core.deref(re_frame.trace.traces);
(cb_37211.cljs$core$IFn$_invoke$arity$1 ? cb_37211.cljs$core$IFn$_invoke$arity$1(G__37182_37212) : cb_37211.call(null,G__37182_37212));
}catch (e37181){var e_37213 = e37181;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37210,"while storing",cljs.core.deref(re_frame.trace.traces),e_37213], 0));
}

var G__37214 = cljs.core.next(seq__37157_37203__$1);
var G__37215 = null;
var G__37216 = (0);
var G__37217 = (0);
seq__37157_37187 = G__37214;
chunk__37158_37188 = G__37215;
count__37159_37189 = G__37216;
i__37160_37190 = G__37217;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
