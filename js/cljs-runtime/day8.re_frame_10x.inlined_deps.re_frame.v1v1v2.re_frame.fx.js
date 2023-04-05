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
var _STAR_current_trace_STAR__orig_val__33699 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__33700 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__33700);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___33974 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___33974)){
var new_db_33975 = temp__5753__auto___33974;
var fexpr__33731_33976 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__33731_33976.cljs$core$IFn$_invoke$arity$1 ? fexpr__33731_33976.cljs$core$IFn$_invoke$arity$1(new_db_33975) : fexpr__33731_33976.call(null,new_db_33975));
} else {
}

var seq__33734 = cljs.core.seq(effects_without_db);
var chunk__33735 = null;
var count__33736 = (0);
var i__33737 = (0);
while(true){
if((i__33737 < count__33736)){
var vec__33790 = chunk__33735.cljs$core$IIndexed$_nth$arity$2(null,i__33737);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33790,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33790,(1),null);
var temp__5751__auto___33978 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33978)){
var effect_fn_33979 = temp__5751__auto___33978;
(effect_fn_33979.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33979.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33979.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33980 = seq__33734;
var G__33981 = chunk__33735;
var G__33982 = count__33736;
var G__33983 = (i__33737 + (1));
seq__33734 = G__33980;
chunk__33735 = G__33981;
count__33736 = G__33982;
i__33737 = G__33983;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33734);
if(temp__5753__auto__){
var seq__33734__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33734__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33734__$1);
var G__33984 = cljs.core.chunk_rest(seq__33734__$1);
var G__33985 = c__5568__auto__;
var G__33986 = cljs.core.count(c__5568__auto__);
var G__33987 = (0);
seq__33734 = G__33984;
chunk__33735 = G__33985;
count__33736 = G__33986;
i__33737 = G__33987;
continue;
} else {
var vec__33803 = cljs.core.first(seq__33734__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33803,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33803,(1),null);
var temp__5751__auto___33989 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___33989)){
var effect_fn_33990 = temp__5751__auto___33989;
(effect_fn_33990.cljs$core$IFn$_invoke$arity$1 ? effect_fn_33990.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_33990.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__33991 = cljs.core.next(seq__33734__$1);
var G__33992 = null;
var G__33993 = (0);
var G__33994 = (0);
seq__33734 = G__33991;
chunk__33735 = G__33992;
count__33736 = G__33993;
i__33737 = G__33994;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__32694__auto___33995 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__32695__auto___33996 = (end__32694__auto___33995 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32695__auto___33996,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__32694__auto___33995);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__33699);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___34001 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___34001)){
var new_db_34002 = temp__5753__auto___34001;
var fexpr__33815_34003 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__33815_34003.cljs$core$IFn$_invoke$arity$1 ? fexpr__33815_34003.cljs$core$IFn$_invoke$arity$1(new_db_34002) : fexpr__33815_34003.call(null,new_db_34002));
} else {
}

var seq__33817 = cljs.core.seq(effects_without_db);
var chunk__33818 = null;
var count__33819 = (0);
var i__33820 = (0);
while(true){
if((i__33820 < count__33819)){
var vec__33837 = chunk__33818.cljs$core$IIndexed$_nth$arity$2(null,i__33820);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33837,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33837,(1),null);
var temp__5751__auto___34004 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34004)){
var effect_fn_34006 = temp__5751__auto___34004;
(effect_fn_34006.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34006.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34006.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34007 = seq__33817;
var G__34008 = chunk__33818;
var G__34009 = count__33819;
var G__34010 = (i__33820 + (1));
seq__33817 = G__34007;
chunk__33818 = G__34008;
count__33819 = G__34009;
i__33820 = G__34010;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33817);
if(temp__5753__auto__){
var seq__33817__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33817__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33817__$1);
var G__34011 = cljs.core.chunk_rest(seq__33817__$1);
var G__34012 = c__5568__auto__;
var G__34013 = cljs.core.count(c__5568__auto__);
var G__34014 = (0);
seq__33817 = G__34011;
chunk__33818 = G__34012;
count__33819 = G__34013;
i__33820 = G__34014;
continue;
} else {
var vec__33849 = cljs.core.first(seq__33817__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33849,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33849,(1),null);
var temp__5751__auto___34015 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34015)){
var effect_fn_34016 = temp__5751__auto___34015;
(effect_fn_34016.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34016.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34016.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34019 = cljs.core.next(seq__33817__$1);
var G__34020 = null;
var G__34021 = (0);
var G__34022 = (0);
seq__33817 = G__34019;
chunk__33818 = G__34020;
count__33819 = G__34021;
i__33820 = G__34022;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__33857){
var map__33858 = p__33857;
var map__33858__$1 = cljs.core.__destructure_map(map__33858);
var effect = map__33858__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33858__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33858__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__33877 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33878 = null;
var count__33879 = (0);
var i__33880 = (0);
while(true){
if((i__33880 < count__33879)){
var effect = chunk__33878.cljs$core$IIndexed$_nth$arity$2(null,i__33880);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__34026 = seq__33877;
var G__34027 = chunk__33878;
var G__34028 = count__33879;
var G__34029 = (i__33880 + (1));
seq__33877 = G__34026;
chunk__33878 = G__34027;
count__33879 = G__34028;
i__33880 = G__34029;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33877);
if(temp__5753__auto__){
var seq__33877__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33877__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33877__$1);
var G__34031 = cljs.core.chunk_rest(seq__33877__$1);
var G__34032 = c__5568__auto__;
var G__34033 = cljs.core.count(c__5568__auto__);
var G__34034 = (0);
seq__33877 = G__34031;
chunk__33878 = G__34032;
count__33879 = G__34033;
i__33880 = G__34034;
continue;
} else {
var effect = cljs.core.first(seq__33877__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__34036 = cljs.core.next(seq__33877__$1);
var G__34037 = null;
var G__34038 = (0);
var G__34039 = (0);
seq__33877 = G__34036;
chunk__33878 = G__34037;
count__33879 = G__34038;
i__33880 = G__34039;
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
var seq__33893 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__33894 = null;
var count__33895 = (0);
var i__33896 = (0);
while(true){
if((i__33896 < count__33895)){
var vec__33915 = chunk__33894.cljs$core$IIndexed$_nth$arity$2(null,i__33896);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33915,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33915,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___34044 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34044)){
var effect_fn_34046 = temp__5751__auto___34044;
(effect_fn_34046.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34046.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34046.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34047 = seq__33893;
var G__34048 = chunk__33894;
var G__34049 = count__33895;
var G__34050 = (i__33896 + (1));
seq__33893 = G__34047;
chunk__33894 = G__34048;
count__33895 = G__34049;
i__33896 = G__34050;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33893);
if(temp__5753__auto__){
var seq__33893__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33893__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33893__$1);
var G__34051 = cljs.core.chunk_rest(seq__33893__$1);
var G__34052 = c__5568__auto__;
var G__34053 = cljs.core.count(c__5568__auto__);
var G__34054 = (0);
seq__33893 = G__34051;
chunk__33894 = G__34052;
count__33895 = G__34053;
i__33896 = G__34054;
continue;
} else {
var vec__33923 = cljs.core.first(seq__33893__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33923,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33923,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___34055 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34055)){
var effect_fn_34056 = temp__5751__auto___34055;
(effect_fn_34056.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34056.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34056.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34057 = cljs.core.next(seq__33893__$1);
var G__34058 = null;
var G__34059 = (0);
var G__34060 = (0);
seq__33893 = G__34057;
chunk__33894 = G__34058;
count__33895 = G__34059;
i__33896 = G__34060;
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
var seq__33932 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__33933 = null;
var count__33934 = (0);
var i__33935 = (0);
while(true){
if((i__33935 < count__33934)){
var event = chunk__33933.cljs$core$IIndexed$_nth$arity$2(null,i__33935);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__34063 = seq__33932;
var G__34064 = chunk__33933;
var G__34065 = count__33934;
var G__34066 = (i__33935 + (1));
seq__33932 = G__34063;
chunk__33933 = G__34064;
count__33934 = G__34065;
i__33935 = G__34066;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33932);
if(temp__5753__auto__){
var seq__33932__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33932__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33932__$1);
var G__34067 = cljs.core.chunk_rest(seq__33932__$1);
var G__34068 = c__5568__auto__;
var G__34069 = cljs.core.count(c__5568__auto__);
var G__34070 = (0);
seq__33932 = G__34067;
chunk__33933 = G__34068;
count__33934 = G__34069;
i__33935 = G__34070;
continue;
} else {
var event = cljs.core.first(seq__33932__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__34071 = cljs.core.next(seq__33932__$1);
var G__34072 = null;
var G__34073 = (0);
var G__34074 = (0);
seq__33932 = G__34071;
chunk__33933 = G__34072;
count__33934 = G__34073;
i__33935 = G__34074;
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
var seq__33939 = cljs.core.seq(value);
var chunk__33940 = null;
var count__33941 = (0);
var i__33942 = (0);
while(true){
if((i__33942 < count__33941)){
var event = chunk__33940.cljs$core$IIndexed$_nth$arity$2(null,i__33942);
clear_event(event);


var G__34075 = seq__33939;
var G__34076 = chunk__33940;
var G__34077 = count__33941;
var G__34078 = (i__33942 + (1));
seq__33939 = G__34075;
chunk__33940 = G__34076;
count__33941 = G__34077;
i__33942 = G__34078;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33939);
if(temp__5753__auto__){
var seq__33939__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33939__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33939__$1);
var G__34079 = cljs.core.chunk_rest(seq__33939__$1);
var G__34080 = c__5568__auto__;
var G__34081 = cljs.core.count(c__5568__auto__);
var G__34082 = (0);
seq__33939 = G__34079;
chunk__33940 = G__34080;
count__33941 = G__34081;
i__33942 = G__34082;
continue;
} else {
var event = cljs.core.first(seq__33939__$1);
clear_event(event);


var G__34083 = cljs.core.next(seq__33939__$1);
var G__34084 = null;
var G__34085 = (0);
var G__34086 = (0);
seq__33939 = G__34083;
chunk__33940 = G__34084;
count__33941 = G__34085;
i__33942 = G__34086;
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
