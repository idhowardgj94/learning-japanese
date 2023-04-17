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
var _STAR_current_trace_STAR__orig_val__38460 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38461 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38461);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___38609 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___38609)){
var new_db_38610 = temp__5753__auto___38609;
var fexpr__38466_38611 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38466_38611.cljs$core$IFn$_invoke$arity$1 ? fexpr__38466_38611.cljs$core$IFn$_invoke$arity$1(new_db_38610) : fexpr__38466_38611.call(null,new_db_38610));
} else {
}

var seq__38468 = cljs.core.seq(effects_without_db);
var chunk__38469 = null;
var count__38470 = (0);
var i__38471 = (0);
while(true){
if((i__38471 < count__38470)){
var vec__38499 = chunk__38469.cljs$core$IIndexed$_nth$arity$2(null,i__38471);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(1),null);
var temp__5751__auto___38612 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38612)){
var effect_fn_38613 = temp__5751__auto___38612;
(effect_fn_38613.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38613.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38613.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38614 = seq__38468;
var G__38615 = chunk__38469;
var G__38616 = count__38470;
var G__38617 = (i__38471 + (1));
seq__38468 = G__38614;
chunk__38469 = G__38615;
count__38470 = G__38616;
i__38471 = G__38617;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38468);
if(temp__5753__auto__){
var seq__38468__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38468__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38468__$1);
var G__38618 = cljs.core.chunk_rest(seq__38468__$1);
var G__38619 = c__5568__auto__;
var G__38620 = cljs.core.count(c__5568__auto__);
var G__38621 = (0);
seq__38468 = G__38618;
chunk__38469 = G__38619;
count__38470 = G__38620;
i__38471 = G__38621;
continue;
} else {
var vec__38503 = cljs.core.first(seq__38468__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38503,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38503,(1),null);
var temp__5751__auto___38626 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38626)){
var effect_fn_38627 = temp__5751__auto___38626;
(effect_fn_38627.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38627.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38627.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38628 = cljs.core.next(seq__38468__$1);
var G__38629 = null;
var G__38630 = (0);
var G__38631 = (0);
seq__38468 = G__38628;
chunk__38469 = G__38629;
count__38470 = G__38630;
i__38471 = G__38631;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__37448__auto___38632 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__37449__auto___38633 = (end__37448__auto___38632 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37449__auto___38633,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__37448__auto___38632);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38460);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___38638 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___38638)){
var new_db_38639 = temp__5753__auto___38638;
var fexpr__38512_38640 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38512_38640.cljs$core$IFn$_invoke$arity$1 ? fexpr__38512_38640.cljs$core$IFn$_invoke$arity$1(new_db_38639) : fexpr__38512_38640.call(null,new_db_38639));
} else {
}

var seq__38513 = cljs.core.seq(effects_without_db);
var chunk__38514 = null;
var count__38515 = (0);
var i__38516 = (0);
while(true){
if((i__38516 < count__38515)){
var vec__38525 = chunk__38514.cljs$core$IIndexed$_nth$arity$2(null,i__38516);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38525,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38525,(1),null);
var temp__5751__auto___38645 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38645)){
var effect_fn_38646 = temp__5751__auto___38645;
(effect_fn_38646.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38646.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38646.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38647 = seq__38513;
var G__38648 = chunk__38514;
var G__38649 = count__38515;
var G__38650 = (i__38516 + (1));
seq__38513 = G__38647;
chunk__38514 = G__38648;
count__38515 = G__38649;
i__38516 = G__38650;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38513);
if(temp__5753__auto__){
var seq__38513__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38513__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38513__$1);
var G__38651 = cljs.core.chunk_rest(seq__38513__$1);
var G__38652 = c__5568__auto__;
var G__38653 = cljs.core.count(c__5568__auto__);
var G__38654 = (0);
seq__38513 = G__38651;
chunk__38514 = G__38652;
count__38515 = G__38653;
i__38516 = G__38654;
continue;
} else {
var vec__38528 = cljs.core.first(seq__38513__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38528,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38528,(1),null);
var temp__5751__auto___38655 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38655)){
var effect_fn_38656 = temp__5751__auto___38655;
(effect_fn_38656.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38656.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38656.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38657 = cljs.core.next(seq__38513__$1);
var G__38658 = null;
var G__38659 = (0);
var G__38660 = (0);
seq__38513 = G__38657;
chunk__38514 = G__38658;
count__38515 = G__38659;
i__38516 = G__38660;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__38532){
var map__38533 = p__38532;
var map__38533__$1 = cljs.core.__destructure_map(map__38533);
var effect = map__38533__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38533__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38533__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__38539 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38540 = null;
var count__38541 = (0);
var i__38542 = (0);
while(true){
if((i__38542 < count__38541)){
var effect = chunk__38540.cljs$core$IIndexed$_nth$arity$2(null,i__38542);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__38661 = seq__38539;
var G__38662 = chunk__38540;
var G__38663 = count__38541;
var G__38664 = (i__38542 + (1));
seq__38539 = G__38661;
chunk__38540 = G__38662;
count__38541 = G__38663;
i__38542 = G__38664;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38539);
if(temp__5753__auto__){
var seq__38539__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38539__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38539__$1);
var G__38665 = cljs.core.chunk_rest(seq__38539__$1);
var G__38666 = c__5568__auto__;
var G__38667 = cljs.core.count(c__5568__auto__);
var G__38668 = (0);
seq__38539 = G__38665;
chunk__38540 = G__38666;
count__38541 = G__38667;
i__38542 = G__38668;
continue;
} else {
var effect = cljs.core.first(seq__38539__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__38669 = cljs.core.next(seq__38539__$1);
var G__38670 = null;
var G__38671 = (0);
var G__38672 = (0);
seq__38539 = G__38669;
chunk__38540 = G__38670;
count__38541 = G__38671;
i__38542 = G__38672;
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
var seq__38543 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38544 = null;
var count__38545 = (0);
var i__38546 = (0);
while(true){
if((i__38546 < count__38545)){
var vec__38559 = chunk__38544.cljs$core$IIndexed$_nth$arity$2(null,i__38546);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38559,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38559,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___38673 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38673)){
var effect_fn_38674 = temp__5751__auto___38673;
(effect_fn_38674.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38674.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38674.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38675 = seq__38543;
var G__38676 = chunk__38544;
var G__38677 = count__38545;
var G__38678 = (i__38546 + (1));
seq__38543 = G__38675;
chunk__38544 = G__38676;
count__38545 = G__38677;
i__38546 = G__38678;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38543);
if(temp__5753__auto__){
var seq__38543__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38543__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38543__$1);
var G__38679 = cljs.core.chunk_rest(seq__38543__$1);
var G__38680 = c__5568__auto__;
var G__38681 = cljs.core.count(c__5568__auto__);
var G__38682 = (0);
seq__38543 = G__38679;
chunk__38544 = G__38680;
count__38545 = G__38681;
i__38546 = G__38682;
continue;
} else {
var vec__38563 = cljs.core.first(seq__38543__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38563,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38563,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___38683 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___38683)){
var effect_fn_38684 = temp__5751__auto___38683;
(effect_fn_38684.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38684.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38684.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38687 = cljs.core.next(seq__38543__$1);
var G__38688 = null;
var G__38689 = (0);
var G__38690 = (0);
seq__38543 = G__38687;
chunk__38544 = G__38688;
count__38545 = G__38689;
i__38546 = G__38690;
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
var seq__38578 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38579 = null;
var count__38580 = (0);
var i__38581 = (0);
while(true){
if((i__38581 < count__38580)){
var event = chunk__38579.cljs$core$IIndexed$_nth$arity$2(null,i__38581);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__38692 = seq__38578;
var G__38693 = chunk__38579;
var G__38694 = count__38580;
var G__38695 = (i__38581 + (1));
seq__38578 = G__38692;
chunk__38579 = G__38693;
count__38580 = G__38694;
i__38581 = G__38695;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38578);
if(temp__5753__auto__){
var seq__38578__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38578__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38578__$1);
var G__38696 = cljs.core.chunk_rest(seq__38578__$1);
var G__38697 = c__5568__auto__;
var G__38698 = cljs.core.count(c__5568__auto__);
var G__38699 = (0);
seq__38578 = G__38696;
chunk__38579 = G__38697;
count__38580 = G__38698;
i__38581 = G__38699;
continue;
} else {
var event = cljs.core.first(seq__38578__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__38700 = cljs.core.next(seq__38578__$1);
var G__38701 = null;
var G__38702 = (0);
var G__38703 = (0);
seq__38578 = G__38700;
chunk__38579 = G__38701;
count__38580 = G__38702;
i__38581 = G__38703;
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
var seq__38586 = cljs.core.seq(value);
var chunk__38587 = null;
var count__38588 = (0);
var i__38589 = (0);
while(true){
if((i__38589 < count__38588)){
var event = chunk__38587.cljs$core$IIndexed$_nth$arity$2(null,i__38589);
clear_event(event);


var G__38707 = seq__38586;
var G__38708 = chunk__38587;
var G__38709 = count__38588;
var G__38710 = (i__38589 + (1));
seq__38586 = G__38707;
chunk__38587 = G__38708;
count__38588 = G__38709;
i__38589 = G__38710;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__38586);
if(temp__5753__auto__){
var seq__38586__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38586__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38586__$1);
var G__38711 = cljs.core.chunk_rest(seq__38586__$1);
var G__38712 = c__5568__auto__;
var G__38713 = cljs.core.count(c__5568__auto__);
var G__38714 = (0);
seq__38586 = G__38711;
chunk__38587 = G__38712;
count__38588 = G__38713;
i__38589 = G__38714;
continue;
} else {
var event = cljs.core.first(seq__38586__$1);
clear_event(event);


var G__38715 = cljs.core.next(seq__38586__$1);
var G__38716 = null;
var G__38717 = (0);
var G__38718 = (0);
seq__38586 = G__38715;
chunk__38587 = G__38716;
count__38588 = G__38717;
i__38589 = G__38718;
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
