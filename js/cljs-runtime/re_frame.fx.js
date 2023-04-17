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
var _STAR_current_trace_STAR__orig_val__42480 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42481 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42481);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___42739 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___42739)){
var new_db_42740 = temp__5753__auto___42739;
var fexpr__42505_42741 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__42505_42741.cljs$core$IFn$_invoke$arity$1 ? fexpr__42505_42741.cljs$core$IFn$_invoke$arity$1(new_db_42740) : fexpr__42505_42741.call(null,new_db_42740));
} else {
}

var seq__42512 = cljs.core.seq(effects_without_db);
var chunk__42513 = null;
var count__42514 = (0);
var i__42515 = (0);
while(true){
if((i__42515 < count__42514)){
var vec__42535 = chunk__42513.cljs$core$IIndexed$_nth$arity$2(null,i__42515);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42535,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42535,(1),null);
var temp__5751__auto___42743 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___42743)){
var effect_fn_42744 = temp__5751__auto___42743;
(effect_fn_42744.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42744.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42744.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42745 = seq__42512;
var G__42746 = chunk__42513;
var G__42747 = count__42514;
var G__42748 = (i__42515 + (1));
seq__42512 = G__42745;
chunk__42513 = G__42746;
count__42514 = G__42747;
i__42515 = G__42748;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42512);
if(temp__5753__auto__){
var seq__42512__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42512__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42512__$1);
var G__42750 = cljs.core.chunk_rest(seq__42512__$1);
var G__42751 = c__5568__auto__;
var G__42752 = cljs.core.count(c__5568__auto__);
var G__42753 = (0);
seq__42512 = G__42750;
chunk__42513 = G__42751;
count__42514 = G__42752;
i__42515 = G__42753;
continue;
} else {
var vec__42552 = cljs.core.first(seq__42512__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42552,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42552,(1),null);
var temp__5751__auto___42754 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___42754)){
var effect_fn_42755 = temp__5751__auto___42754;
(effect_fn_42755.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42755.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42755.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42756 = cljs.core.next(seq__42512__$1);
var G__42757 = null;
var G__42758 = (0);
var G__42759 = (0);
seq__42512 = G__42756;
chunk__42513 = G__42757;
count__42514 = G__42758;
i__42515 = G__42759;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__41641__auto___42760 = re_frame.interop.now();
var duration__41642__auto___42761 = (end__41641__auto___42760 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__41642__auto___42761,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__41641__auto___42760);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42480);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___42764 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___42764)){
var new_db_42765 = temp__5753__auto___42764;
var fexpr__42561_42766 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__42561_42766.cljs$core$IFn$_invoke$arity$1 ? fexpr__42561_42766.cljs$core$IFn$_invoke$arity$1(new_db_42765) : fexpr__42561_42766.call(null,new_db_42765));
} else {
}

var seq__42562 = cljs.core.seq(effects_without_db);
var chunk__42563 = null;
var count__42564 = (0);
var i__42565 = (0);
while(true){
if((i__42565 < count__42564)){
var vec__42593 = chunk__42563.cljs$core$IIndexed$_nth$arity$2(null,i__42565);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42593,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42593,(1),null);
var temp__5751__auto___42773 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___42773)){
var effect_fn_42774 = temp__5751__auto___42773;
(effect_fn_42774.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42774.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42774.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42775 = seq__42562;
var G__42776 = chunk__42563;
var G__42777 = count__42564;
var G__42778 = (i__42565 + (1));
seq__42562 = G__42775;
chunk__42563 = G__42776;
count__42564 = G__42777;
i__42565 = G__42778;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42562);
if(temp__5753__auto__){
var seq__42562__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42562__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42562__$1);
var G__42779 = cljs.core.chunk_rest(seq__42562__$1);
var G__42780 = c__5568__auto__;
var G__42781 = cljs.core.count(c__5568__auto__);
var G__42782 = (0);
seq__42562 = G__42779;
chunk__42563 = G__42780;
count__42564 = G__42781;
i__42565 = G__42782;
continue;
} else {
var vec__42612 = cljs.core.first(seq__42562__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42612,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42612,(1),null);
var temp__5751__auto___42783 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___42783)){
var effect_fn_42784 = temp__5751__auto___42783;
(effect_fn_42784.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42784.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42784.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42785 = cljs.core.next(seq__42562__$1);
var G__42786 = null;
var G__42787 = (0);
var G__42788 = (0);
seq__42562 = G__42785;
chunk__42563 = G__42786;
count__42564 = G__42787;
i__42565 = G__42788;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__42622){
var map__42623 = p__42622;
var map__42623__$1 = cljs.core.__destructure_map(map__42623);
var effect = map__42623__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42623__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42623__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__42631 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42632 = null;
var count__42633 = (0);
var i__42634 = (0);
while(true){
if((i__42634 < count__42633)){
var effect = chunk__42632.cljs$core$IIndexed$_nth$arity$2(null,i__42634);
re_frame.fx.dispatch_later(effect);


var G__42791 = seq__42631;
var G__42792 = chunk__42632;
var G__42793 = count__42633;
var G__42794 = (i__42634 + (1));
seq__42631 = G__42791;
chunk__42632 = G__42792;
count__42633 = G__42793;
i__42634 = G__42794;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42631);
if(temp__5753__auto__){
var seq__42631__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42631__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42631__$1);
var G__42795 = cljs.core.chunk_rest(seq__42631__$1);
var G__42796 = c__5568__auto__;
var G__42797 = cljs.core.count(c__5568__auto__);
var G__42798 = (0);
seq__42631 = G__42795;
chunk__42632 = G__42796;
count__42633 = G__42797;
i__42634 = G__42798;
continue;
} else {
var effect = cljs.core.first(seq__42631__$1);
re_frame.fx.dispatch_later(effect);


var G__42800 = cljs.core.next(seq__42631__$1);
var G__42801 = null;
var G__42802 = (0);
var G__42803 = (0);
seq__42631 = G__42800;
chunk__42632 = G__42801;
count__42633 = G__42802;
i__42634 = G__42803;
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
var seq__42645 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__42646 = null;
var count__42647 = (0);
var i__42648 = (0);
while(true){
if((i__42648 < count__42647)){
var vec__42664 = chunk__42646.cljs$core$IIndexed$_nth$arity$2(null,i__42648);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42664,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42664,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___42811 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___42811)){
var effect_fn_42812 = temp__5751__auto___42811;
(effect_fn_42812.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42812.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42812.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__42813 = seq__42645;
var G__42814 = chunk__42646;
var G__42815 = count__42647;
var G__42816 = (i__42648 + (1));
seq__42645 = G__42813;
chunk__42646 = G__42814;
count__42647 = G__42815;
i__42648 = G__42816;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42645);
if(temp__5753__auto__){
var seq__42645__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42645__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42645__$1);
var G__42817 = cljs.core.chunk_rest(seq__42645__$1);
var G__42818 = c__5568__auto__;
var G__42819 = cljs.core.count(c__5568__auto__);
var G__42820 = (0);
seq__42645 = G__42817;
chunk__42646 = G__42818;
count__42647 = G__42819;
i__42648 = G__42820;
continue;
} else {
var vec__42674 = cljs.core.first(seq__42645__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42674,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42674,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___42821 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___42821)){
var effect_fn_42822 = temp__5751__auto___42821;
(effect_fn_42822.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42822.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42822.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__42823 = cljs.core.next(seq__42645__$1);
var G__42824 = null;
var G__42825 = (0);
var G__42826 = (0);
seq__42645 = G__42823;
chunk__42646 = G__42824;
count__42647 = G__42825;
i__42648 = G__42826;
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
var seq__42692 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42693 = null;
var count__42694 = (0);
var i__42695 = (0);
while(true){
if((i__42695 < count__42694)){
var event = chunk__42693.cljs$core$IIndexed$_nth$arity$2(null,i__42695);
re_frame.router.dispatch(event);


var G__42828 = seq__42692;
var G__42829 = chunk__42693;
var G__42830 = count__42694;
var G__42831 = (i__42695 + (1));
seq__42692 = G__42828;
chunk__42693 = G__42829;
count__42694 = G__42830;
i__42695 = G__42831;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42692);
if(temp__5753__auto__){
var seq__42692__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42692__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42692__$1);
var G__42832 = cljs.core.chunk_rest(seq__42692__$1);
var G__42833 = c__5568__auto__;
var G__42834 = cljs.core.count(c__5568__auto__);
var G__42835 = (0);
seq__42692 = G__42832;
chunk__42693 = G__42833;
count__42694 = G__42834;
i__42695 = G__42835;
continue;
} else {
var event = cljs.core.first(seq__42692__$1);
re_frame.router.dispatch(event);


var G__42836 = cljs.core.next(seq__42692__$1);
var G__42837 = null;
var G__42838 = (0);
var G__42839 = (0);
seq__42692 = G__42836;
chunk__42693 = G__42837;
count__42694 = G__42838;
i__42695 = G__42839;
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
var seq__42719 = cljs.core.seq(value);
var chunk__42720 = null;
var count__42721 = (0);
var i__42722 = (0);
while(true){
if((i__42722 < count__42721)){
var event = chunk__42720.cljs$core$IIndexed$_nth$arity$2(null,i__42722);
clear_event(event);


var G__42840 = seq__42719;
var G__42841 = chunk__42720;
var G__42842 = count__42721;
var G__42843 = (i__42722 + (1));
seq__42719 = G__42840;
chunk__42720 = G__42841;
count__42721 = G__42842;
i__42722 = G__42843;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42719);
if(temp__5753__auto__){
var seq__42719__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42719__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__42719__$1);
var G__42844 = cljs.core.chunk_rest(seq__42719__$1);
var G__42845 = c__5568__auto__;
var G__42846 = cljs.core.count(c__5568__auto__);
var G__42847 = (0);
seq__42719 = G__42844;
chunk__42720 = G__42845;
count__42721 = G__42846;
i__42722 = G__42847;
continue;
} else {
var event = cljs.core.first(seq__42719__$1);
clear_event(event);


var G__42848 = cljs.core.next(seq__42719__$1);
var G__42849 = null;
var G__42850 = (0);
var G__42851 = (0);
seq__42719 = G__42848;
chunk__42720 = G__42849;
count__42721 = G__42850;
i__42722 = G__42851;
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
