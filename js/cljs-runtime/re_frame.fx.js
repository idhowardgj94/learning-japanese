goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__37884 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37885 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37885);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___38148 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___38148)){
var new_db_38149 = temp__5753__auto___38148;
var fexpr__37898_38150 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37898_38150.cljs$core$IFn$_invoke$arity$1 ? fexpr__37898_38150.cljs$core$IFn$_invoke$arity$1(new_db_38149) : fexpr__37898_38150.call(null,new_db_38149));
} else {
}

var seq__37899 = cljs.core.seq(effects_without_db);
var chunk__37900 = null;
var count__37901 = (0);
var i__37902 = (0);
while(true){
if((i__37902 < count__37901)){
var vec__37939 = chunk__37900.cljs$core$IIndexed$_nth$arity$2(null,i__37902);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(1),null);
var temp__5751__auto___38151 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38151)){
var effect_fn_38152 = temp__5751__auto___38151;
(effect_fn_38152.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38152.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38152.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38153 = seq__37899;
var G__38154 = chunk__37900;
var G__38155 = count__37901;
var G__38156 = (i__37902 + (1));
seq__37899 = G__38153;
chunk__37900 = G__38154;
count__37901 = G__38155;
i__37902 = G__38156;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37899);
if(temp__5753__auto__){
var seq__37899__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37899__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37899__$1);
var G__38157 = cljs.core.chunk_rest(seq__37899__$1);
var G__38158 = c__5568__auto__;
var G__38159 = cljs.core.count(c__5568__auto__);
var G__38160 = (0);
seq__37899 = G__38157;
chunk__37900 = G__38158;
count__37901 = G__38159;
i__37902 = G__38160;
continue;
} else {
var vec__37952 = cljs.core.first(seq__37899__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37952,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37952,(1),null);
var temp__5751__auto___38161 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38161)){
var effect_fn_38162 = temp__5751__auto___38161;
(effect_fn_38162.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38162.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38162.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38163 = cljs.core.next(seq__37899__$1);
var G__38164 = null;
var G__38165 = (0);
var G__38166 = (0);
seq__37899 = G__38163;
chunk__37900 = G__38164;
count__37901 = G__38165;
i__37902 = G__38166;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37106__auto___38171 = re_frame.interop.now();
var duration__37107__auto___38172 = (end__37106__auto___38171 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37107__auto___38172,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37106__auto___38171);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37884);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___38175 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___38175)){
var new_db_38176 = temp__5753__auto___38175;
var fexpr__37970_38177 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37970_38177.cljs$core$IFn$_invoke$arity$1 ? fexpr__37970_38177.cljs$core$IFn$_invoke$arity$1(new_db_38176) : fexpr__37970_38177.call(null,new_db_38176));
} else {
}

var seq__37973 = cljs.core.seq(effects_without_db);
var chunk__37974 = null;
var count__37975 = (0);
var i__37976 = (0);
while(true){
if((i__37976 < count__37975)){
var vec__38007 = chunk__37974.cljs$core$IIndexed$_nth$arity$2(null,i__37976);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38007,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38007,(1),null);
var temp__5751__auto___38178 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38178)){
var effect_fn_38179 = temp__5751__auto___38178;
(effect_fn_38179.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38179.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38179.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38180 = seq__37973;
var G__38181 = chunk__37974;
var G__38182 = count__37975;
var G__38183 = (i__37976 + (1));
seq__37973 = G__38180;
chunk__37974 = G__38181;
count__37975 = G__38182;
i__37976 = G__38183;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37973);
if(temp__5753__auto__){
var seq__37973__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37973__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37973__$1);
var G__38184 = cljs.core.chunk_rest(seq__37973__$1);
var G__38185 = c__5568__auto__;
var G__38186 = cljs.core.count(c__5568__auto__);
var G__38187 = (0);
seq__37973 = G__38184;
chunk__37974 = G__38185;
count__37975 = G__38186;
i__37976 = G__38187;
continue;
} else {
var vec__38028 = cljs.core.first(seq__37973__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38028,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38028,(1),null);
var temp__5751__auto___38189 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38189)){
var effect_fn_38191 = temp__5751__auto___38189;
(effect_fn_38191.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38191.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38191.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38192 = cljs.core.next(seq__37973__$1);
var G__38193 = null;
var G__38194 = (0);
var G__38195 = (0);
seq__37973 = G__38192;
chunk__37974 = G__38193;
count__37975 = G__38194;
i__37976 = G__38195;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38039){
var map__38043 = p__38039;
var map__38043__$1 = cljs.core.__destructure_map(map__38043);
var effect = map__38043__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__38046 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38047 = null;
var count__38048 = (0);
var i__38049 = (0);
while(true){
if((i__38049 < count__38048)){
var effect = chunk__38047.cljs$core$IIndexed$_nth$arity$2(null,i__38049);
re_frame.fx.dispatch_later(effect);


var G__38197 = seq__38046;
var G__38198 = chunk__38047;
var G__38199 = count__38048;
var G__38200 = (i__38049 + (1));
seq__38046 = G__38197;
chunk__38047 = G__38198;
count__38048 = G__38199;
i__38049 = G__38200;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38046);
if(temp__5753__auto__){
var seq__38046__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38046__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38046__$1);
var G__38201 = cljs.core.chunk_rest(seq__38046__$1);
var G__38202 = c__5568__auto__;
var G__38203 = cljs.core.count(c__5568__auto__);
var G__38204 = (0);
seq__38046 = G__38201;
chunk__38047 = G__38202;
count__38048 = G__38203;
i__38049 = G__38204;
continue;
} else {
var effect = cljs.core.first(seq__38046__$1);
re_frame.fx.dispatch_later(effect);


var G__38206 = cljs.core.next(seq__38046__$1);
var G__38207 = null;
var G__38208 = (0);
var G__38209 = (0);
seq__38046 = G__38206;
chunk__38047 = G__38207;
count__38048 = G__38208;
i__38049 = G__38209;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__38069 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38070 = null;
var count__38071 = (0);
var i__38072 = (0);
while(true){
if((i__38072 < count__38071)){
var vec__38093 = chunk__38070.cljs$core$IIndexed$_nth$arity$2(null,i__38072);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38093,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38093,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___38214 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38214)){
var effect_fn_38217 = temp__5751__auto___38214;
(effect_fn_38217.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38217.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38217.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38218 = seq__38069;
var G__38219 = chunk__38070;
var G__38220 = count__38071;
var G__38221 = (i__38072 + (1));
seq__38069 = G__38218;
chunk__38070 = G__38219;
count__38071 = G__38220;
i__38072 = G__38221;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38069);
if(temp__5753__auto__){
var seq__38069__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38069__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38069__$1);
var G__38222 = cljs.core.chunk_rest(seq__38069__$1);
var G__38223 = c__5568__auto__;
var G__38224 = cljs.core.count(c__5568__auto__);
var G__38225 = (0);
seq__38069 = G__38222;
chunk__38070 = G__38223;
count__38071 = G__38224;
i__38072 = G__38225;
continue;
} else {
var vec__38103 = cljs.core.first(seq__38069__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38103,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38103,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___38226 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38226)){
var effect_fn_38227 = temp__5751__auto___38226;
(effect_fn_38227.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38227.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38227.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38228 = cljs.core.next(seq__38069__$1);
var G__38229 = null;
var G__38230 = (0);
var G__38231 = (0);
seq__38069 = G__38228;
chunk__38070 = G__38229;
count__38071 = G__38230;
i__38072 = G__38231;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__38110 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38111 = null;
var count__38112 = (0);
var i__38113 = (0);
while(true){
if((i__38113 < count__38112)){
var event = chunk__38111.cljs$core$IIndexed$_nth$arity$2(null,i__38113);
re_frame.router.dispatch(event);


var G__38236 = seq__38110;
var G__38237 = chunk__38111;
var G__38238 = count__38112;
var G__38239 = (i__38113 + (1));
seq__38110 = G__38236;
chunk__38111 = G__38237;
count__38112 = G__38238;
i__38113 = G__38239;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38110);
if(temp__5753__auto__){
var seq__38110__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38110__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38110__$1);
var G__38241 = cljs.core.chunk_rest(seq__38110__$1);
var G__38242 = c__5568__auto__;
var G__38243 = cljs.core.count(c__5568__auto__);
var G__38244 = (0);
seq__38110 = G__38241;
chunk__38111 = G__38242;
count__38112 = G__38243;
i__38113 = G__38244;
continue;
} else {
var event = cljs.core.first(seq__38110__$1);
re_frame.router.dispatch(event);


var G__38245 = cljs.core.next(seq__38110__$1);
var G__38246 = null;
var G__38247 = (0);
var G__38248 = (0);
seq__38110 = G__38245;
chunk__38111 = G__38246;
count__38112 = G__38247;
i__38113 = G__38248;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38132 = cljs.core.seq(value);
var chunk__38133 = null;
var count__38134 = (0);
var i__38135 = (0);
while(true){
if((i__38135 < count__38134)){
var event = chunk__38133.cljs$core$IIndexed$_nth$arity$2(null,i__38135);
clear_event(event);


var G__38249 = seq__38132;
var G__38250 = chunk__38133;
var G__38251 = count__38134;
var G__38252 = (i__38135 + (1));
seq__38132 = G__38249;
chunk__38133 = G__38250;
count__38134 = G__38251;
i__38135 = G__38252;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38132);
if(temp__5753__auto__){
var seq__38132__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38132__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38132__$1);
var G__38253 = cljs.core.chunk_rest(seq__38132__$1);
var G__38254 = c__5568__auto__;
var G__38255 = cljs.core.count(c__5568__auto__);
var G__38256 = (0);
seq__38132 = G__38253;
chunk__38133 = G__38254;
count__38134 = G__38255;
i__38135 = G__38256;
continue;
} else {
var event = cljs.core.first(seq__38132__$1);
clear_event(event);


var G__38257 = cljs.core.next(seq__38132__$1);
var G__38258 = null;
var G__38259 = (0);
var G__38260 = (0);
seq__38132 = G__38257;
chunk__38133 = G__38258;
count__38134 = G__38259;
i__38135 = G__38260;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
