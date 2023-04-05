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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37130){
var map__37131 = p__37130;
var map__37131__$1 = cljs.core.__destructure_map(map__37131);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37131__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37131__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37131__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37131__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__37138_37173 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__37139_37174 = null;
var count__37140_37175 = (0);
var i__37141_37176 = (0);
while(true){
if((i__37141_37176 < count__37140_37175)){
var vec__37154_37178 = chunk__37139_37174.cljs$core$IIndexed$_nth$arity$2(null,i__37141_37176);
var k_37179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37154_37178,(0),null);
var cb_37180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37154_37178,(1),null);
try{var G__37158_37181 = cljs.core.deref(re_frame.trace.traces);
(cb_37180.cljs$core$IFn$_invoke$arity$1 ? cb_37180.cljs$core$IFn$_invoke$arity$1(G__37158_37181) : cb_37180.call(null,G__37158_37181));
}catch (e37157){var e_37182 = e37157;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37179,"while storing",cljs.core.deref(re_frame.trace.traces),e_37182], 0));
}

var G__37183 = seq__37138_37173;
var G__37184 = chunk__37139_37174;
var G__37185 = count__37140_37175;
var G__37186 = (i__37141_37176 + (1));
seq__37138_37173 = G__37183;
chunk__37139_37174 = G__37184;
count__37140_37175 = G__37185;
i__37141_37176 = G__37186;
continue;
} else {
var temp__5753__auto___37187 = cljs.core.seq(seq__37138_37173);
if(temp__5753__auto___37187){
var seq__37138_37189__$1 = temp__5753__auto___37187;
if(cljs.core.chunked_seq_QMARK_(seq__37138_37189__$1)){
var c__5568__auto___37190 = cljs.core.chunk_first(seq__37138_37189__$1);
var G__37191 = cljs.core.chunk_rest(seq__37138_37189__$1);
var G__37192 = c__5568__auto___37190;
var G__37193 = cljs.core.count(c__5568__auto___37190);
var G__37194 = (0);
seq__37138_37173 = G__37191;
chunk__37139_37174 = G__37192;
count__37140_37175 = G__37193;
i__37141_37176 = G__37194;
continue;
} else {
var vec__37161_37195 = cljs.core.first(seq__37138_37189__$1);
var k_37196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37161_37195,(0),null);
var cb_37197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37161_37195,(1),null);
try{var G__37166_37204 = cljs.core.deref(re_frame.trace.traces);
(cb_37197.cljs$core$IFn$_invoke$arity$1 ? cb_37197.cljs$core$IFn$_invoke$arity$1(G__37166_37204) : cb_37197.call(null,G__37166_37204));
}catch (e37164){var e_37205 = e37164;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37196,"while storing",cljs.core.deref(re_frame.trace.traces),e_37205], 0));
}

var G__37206 = cljs.core.next(seq__37138_37189__$1);
var G__37207 = null;
var G__37208 = (0);
var G__37209 = (0);
seq__37138_37173 = G__37206;
chunk__37139_37174 = G__37207;
count__37140_37175 = G__37208;
i__37141_37176 = G__37209;
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
