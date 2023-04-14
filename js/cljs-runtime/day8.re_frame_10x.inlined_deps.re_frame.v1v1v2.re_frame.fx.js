goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__34117 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34118 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34118);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___34243 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___34243)){
var new_db_34244 = temp__5753__auto___34243;
var fexpr__34134_34245 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__34134_34245.cljs$core$IFn$_invoke$arity$1 ? fexpr__34134_34245.cljs$core$IFn$_invoke$arity$1(new_db_34244) : fexpr__34134_34245.call(null,new_db_34244));
} else {
}

var seq__34135 = cljs.core.seq(effects_without_db);
var chunk__34136 = null;
var count__34137 = (0);
var i__34138 = (0);
while(true){
if((i__34138 < count__34137)){
var vec__34152 = chunk__34136.cljs$core$IIndexed$_nth$arity$2(null,i__34138);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34152,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34152,(1),null);
var temp__5751__auto___34246 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34246)){
var effect_fn_34248 = temp__5751__auto___34246;
(effect_fn_34248.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34248.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34248.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34249 = seq__34135;
var G__34250 = chunk__34136;
var G__34251 = count__34137;
var G__34252 = (i__34138 + (1));
seq__34135 = G__34249;
chunk__34136 = G__34250;
count__34137 = G__34251;
i__34138 = G__34252;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34135);
if(temp__5753__auto__){
var seq__34135__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34135__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34135__$1);
var G__34253 = cljs.core.chunk_rest(seq__34135__$1);
var G__34254 = c__5568__auto__;
var G__34255 = cljs.core.count(c__5568__auto__);
var G__34256 = (0);
seq__34135 = G__34253;
chunk__34136 = G__34254;
count__34137 = G__34255;
i__34138 = G__34256;
continue;
} else {
var vec__34155 = cljs.core.first(seq__34135__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34155,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34155,(1),null);
var temp__5751__auto___34257 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34257)){
var effect_fn_34258 = temp__5751__auto___34257;
(effect_fn_34258.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34258.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34258.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34263 = cljs.core.next(seq__34135__$1);
var G__34264 = null;
var G__34265 = (0);
var G__34266 = (0);
seq__34135 = G__34263;
chunk__34136 = G__34264;
count__34137 = G__34265;
i__34138 = G__34266;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__33794__auto___34267 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__33795__auto___34268 = (end__33794__auto___34267 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33795__auto___34268,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__33794__auto___34267);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34117);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___34269 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___34269)){
var new_db_34270 = temp__5753__auto___34269;
var fexpr__34159_34271 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__34159_34271.cljs$core$IFn$_invoke$arity$1 ? fexpr__34159_34271.cljs$core$IFn$_invoke$arity$1(new_db_34270) : fexpr__34159_34271.call(null,new_db_34270));
} else {
}

var seq__34160 = cljs.core.seq(effects_without_db);
var chunk__34161 = null;
var count__34162 = (0);
var i__34163 = (0);
while(true){
if((i__34163 < count__34162)){
var vec__34179 = chunk__34161.cljs$core$IIndexed$_nth$arity$2(null,i__34163);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34179,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34179,(1),null);
var temp__5751__auto___34272 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34272)){
var effect_fn_34273 = temp__5751__auto___34272;
(effect_fn_34273.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34273.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34273.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34274 = seq__34160;
var G__34275 = chunk__34161;
var G__34276 = count__34162;
var G__34277 = (i__34163 + (1));
seq__34160 = G__34274;
chunk__34161 = G__34275;
count__34162 = G__34276;
i__34163 = G__34277;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34160);
if(temp__5753__auto__){
var seq__34160__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34160__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34160__$1);
var G__34278 = cljs.core.chunk_rest(seq__34160__$1);
var G__34279 = c__5568__auto__;
var G__34280 = cljs.core.count(c__5568__auto__);
var G__34281 = (0);
seq__34160 = G__34278;
chunk__34161 = G__34279;
count__34162 = G__34280;
i__34163 = G__34281;
continue;
} else {
var vec__34189 = cljs.core.first(seq__34160__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34189,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34189,(1),null);
var temp__5751__auto___34282 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34282)){
var effect_fn_34283 = temp__5751__auto___34282;
(effect_fn_34283.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34283.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34283.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34284 = cljs.core.next(seq__34160__$1);
var G__34285 = null;
var G__34286 = (0);
var G__34287 = (0);
seq__34160 = G__34284;
chunk__34161 = G__34285;
count__34162 = G__34286;
i__34163 = G__34287;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__34192){
var map__34193 = p__34192;
var map__34193__$1 = cljs.core.__destructure_map(map__34193);
var effect = map__34193__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34193__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34193__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__34195 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34196 = null;
var count__34197 = (0);
var i__34198 = (0);
while(true){
if((i__34198 < count__34197)){
var effect = chunk__34196.cljs$core$IIndexed$_nth$arity$2(null,i__34198);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__34292 = seq__34195;
var G__34293 = chunk__34196;
var G__34294 = count__34197;
var G__34295 = (i__34198 + (1));
seq__34195 = G__34292;
chunk__34196 = G__34293;
count__34197 = G__34294;
i__34198 = G__34295;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34195);
if(temp__5753__auto__){
var seq__34195__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34195__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34195__$1);
var G__34296 = cljs.core.chunk_rest(seq__34195__$1);
var G__34297 = c__5568__auto__;
var G__34298 = cljs.core.count(c__5568__auto__);
var G__34299 = (0);
seq__34195 = G__34296;
chunk__34196 = G__34297;
count__34197 = G__34298;
i__34198 = G__34299;
continue;
} else {
var effect = cljs.core.first(seq__34195__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__34300 = cljs.core.next(seq__34195__$1);
var G__34301 = null;
var G__34302 = (0);
var G__34303 = (0);
seq__34195 = G__34300;
chunk__34196 = G__34301;
count__34197 = G__34302;
i__34198 = G__34303;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__34205 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__34206 = null;
var count__34207 = (0);
var i__34208 = (0);
while(true){
if((i__34208 < count__34207)){
var vec__34219 = chunk__34206.cljs$core$IIndexed$_nth$arity$2(null,i__34208);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34219,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___34308 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34308)){
var effect_fn_34309 = temp__5751__auto___34308;
(effect_fn_34309.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34309.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34309.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34310 = seq__34205;
var G__34311 = chunk__34206;
var G__34312 = count__34207;
var G__34313 = (i__34208 + (1));
seq__34205 = G__34310;
chunk__34206 = G__34311;
count__34207 = G__34312;
i__34208 = G__34313;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34205);
if(temp__5753__auto__){
var seq__34205__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34205__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34205__$1);
var G__34314 = cljs.core.chunk_rest(seq__34205__$1);
var G__34315 = c__5568__auto__;
var G__34316 = cljs.core.count(c__5568__auto__);
var G__34317 = (0);
seq__34205 = G__34314;
chunk__34206 = G__34315;
count__34207 = G__34316;
i__34208 = G__34317;
continue;
} else {
var vec__34222 = cljs.core.first(seq__34205__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34222,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34222,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___34318 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34318)){
var effect_fn_34320 = temp__5751__auto___34318;
(effect_fn_34320.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34320.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34320.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34321 = cljs.core.next(seq__34205__$1);
var G__34322 = null;
var G__34323 = (0);
var G__34324 = (0);
seq__34205 = G__34321;
chunk__34206 = G__34322;
count__34207 = G__34323;
i__34208 = G__34324;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__34225 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34226 = null;
var count__34227 = (0);
var i__34228 = (0);
while(true){
if((i__34228 < count__34227)){
var event = chunk__34226.cljs$core$IIndexed$_nth$arity$2(null,i__34228);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__34330 = seq__34225;
var G__34331 = chunk__34226;
var G__34332 = count__34227;
var G__34333 = (i__34228 + (1));
seq__34225 = G__34330;
chunk__34226 = G__34331;
count__34227 = G__34332;
i__34228 = G__34333;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34225);
if(temp__5753__auto__){
var seq__34225__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34225__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34225__$1);
var G__34334 = cljs.core.chunk_rest(seq__34225__$1);
var G__34335 = c__5568__auto__;
var G__34336 = cljs.core.count(c__5568__auto__);
var G__34337 = (0);
seq__34225 = G__34334;
chunk__34226 = G__34335;
count__34227 = G__34336;
i__34228 = G__34337;
continue;
} else {
var event = cljs.core.first(seq__34225__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__34338 = cljs.core.next(seq__34225__$1);
var G__34339 = null;
var G__34340 = (0);
var G__34341 = (0);
seq__34225 = G__34338;
chunk__34226 = G__34339;
count__34227 = G__34340;
i__34228 = G__34341;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__34233 = cljs.core.seq(value);
var chunk__34234 = null;
var count__34235 = (0);
var i__34236 = (0);
while(true){
if((i__34236 < count__34235)){
var event = chunk__34234.cljs$core$IIndexed$_nth$arity$2(null,i__34236);
clear_event(event);


var G__34342 = seq__34233;
var G__34343 = chunk__34234;
var G__34344 = count__34235;
var G__34345 = (i__34236 + (1));
seq__34233 = G__34342;
chunk__34234 = G__34343;
count__34235 = G__34344;
i__34236 = G__34345;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34233);
if(temp__5753__auto__){
var seq__34233__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34233__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34233__$1);
var G__34347 = cljs.core.chunk_rest(seq__34233__$1);
var G__34348 = c__5568__auto__;
var G__34349 = cljs.core.count(c__5568__auto__);
var G__34350 = (0);
seq__34233 = G__34347;
chunk__34234 = G__34348;
count__34235 = G__34349;
i__34236 = G__34350;
continue;
} else {
var event = cljs.core.first(seq__34233__$1);
clear_event(event);


var G__34352 = cljs.core.next(seq__34233__$1);
var G__34353 = null;
var G__34354 = (0);
var G__34355 = (0);
seq__34233 = G__34352;
chunk__34234 = G__34353;
count__34235 = G__34354;
i__34236 = G__34355;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
