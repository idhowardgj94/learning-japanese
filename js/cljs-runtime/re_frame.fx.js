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
var _STAR_current_trace_STAR__orig_val__37546 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37547 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37547);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___37645 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___37645)){
var new_db_37646 = temp__5753__auto___37645;
var fexpr__37550_37648 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37550_37648.cljs$core$IFn$_invoke$arity$1 ? fexpr__37550_37648.cljs$core$IFn$_invoke$arity$1(new_db_37646) : fexpr__37550_37648.call(null,new_db_37646));
} else {
}

var seq__37551 = cljs.core.seq(effects_without_db);
var chunk__37552 = null;
var count__37553 = (0);
var i__37554 = (0);
while(true){
if((i__37554 < count__37553)){
var vec__37564 = chunk__37552.cljs$core$IIndexed$_nth$arity$2(null,i__37554);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37564,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37564,(1),null);
var temp__5751__auto___37649 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37649)){
var effect_fn_37650 = temp__5751__auto___37649;
(effect_fn_37650.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37650.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37650.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37651 = seq__37551;
var G__37652 = chunk__37552;
var G__37653 = count__37553;
var G__37654 = (i__37554 + (1));
seq__37551 = G__37651;
chunk__37552 = G__37652;
count__37553 = G__37653;
i__37554 = G__37654;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37551);
if(temp__5753__auto__){
var seq__37551__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37551__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37551__$1);
var G__37655 = cljs.core.chunk_rest(seq__37551__$1);
var G__37656 = c__5568__auto__;
var G__37657 = cljs.core.count(c__5568__auto__);
var G__37658 = (0);
seq__37551 = G__37655;
chunk__37552 = G__37656;
count__37553 = G__37657;
i__37554 = G__37658;
continue;
} else {
var vec__37568 = cljs.core.first(seq__37551__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37568,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37568,(1),null);
var temp__5751__auto___37659 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37659)){
var effect_fn_37660 = temp__5751__auto___37659;
(effect_fn_37660.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37660.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37660.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37661 = cljs.core.next(seq__37551__$1);
var G__37662 = null;
var G__37663 = (0);
var G__37664 = (0);
seq__37551 = G__37661;
chunk__37552 = G__37662;
count__37553 = G__37663;
i__37554 = G__37664;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37131__auto___37665 = re_frame.interop.now();
var duration__37132__auto___37666 = (end__37131__auto___37665 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37132__auto___37666,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37131__auto___37665);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37546);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___37667 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___37667)){
var new_db_37668 = temp__5753__auto___37667;
var fexpr__37571_37669 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37571_37669.cljs$core$IFn$_invoke$arity$1 ? fexpr__37571_37669.cljs$core$IFn$_invoke$arity$1(new_db_37668) : fexpr__37571_37669.call(null,new_db_37668));
} else {
}

var seq__37572 = cljs.core.seq(effects_without_db);
var chunk__37573 = null;
var count__37574 = (0);
var i__37575 = (0);
while(true){
if((i__37575 < count__37574)){
var vec__37586 = chunk__37573.cljs$core$IIndexed$_nth$arity$2(null,i__37575);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37586,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37586,(1),null);
var temp__5751__auto___37674 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37674)){
var effect_fn_37675 = temp__5751__auto___37674;
(effect_fn_37675.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37675.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37675.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37676 = seq__37572;
var G__37677 = chunk__37573;
var G__37678 = count__37574;
var G__37679 = (i__37575 + (1));
seq__37572 = G__37676;
chunk__37573 = G__37677;
count__37574 = G__37678;
i__37575 = G__37679;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37572);
if(temp__5753__auto__){
var seq__37572__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37572__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37572__$1);
var G__37680 = cljs.core.chunk_rest(seq__37572__$1);
var G__37681 = c__5568__auto__;
var G__37682 = cljs.core.count(c__5568__auto__);
var G__37683 = (0);
seq__37572 = G__37680;
chunk__37573 = G__37681;
count__37574 = G__37682;
i__37575 = G__37683;
continue;
} else {
var vec__37589 = cljs.core.first(seq__37572__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37589,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37589,(1),null);
var temp__5751__auto___37684 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37684)){
var effect_fn_37685 = temp__5751__auto___37684;
(effect_fn_37685.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37685.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37685.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37686 = cljs.core.next(seq__37572__$1);
var G__37687 = null;
var G__37688 = (0);
var G__37689 = (0);
seq__37572 = G__37686;
chunk__37573 = G__37687;
count__37574 = G__37688;
i__37575 = G__37689;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37593){
var map__37594 = p__37593;
var map__37594__$1 = cljs.core.__destructure_map(map__37594);
var effect = map__37594__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37595 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37596 = null;
var count__37597 = (0);
var i__37598 = (0);
while(true){
if((i__37598 < count__37597)){
var effect = chunk__37596.cljs$core$IIndexed$_nth$arity$2(null,i__37598);
re_frame.fx.dispatch_later(effect);


var G__37690 = seq__37595;
var G__37691 = chunk__37596;
var G__37692 = count__37597;
var G__37693 = (i__37598 + (1));
seq__37595 = G__37690;
chunk__37596 = G__37691;
count__37597 = G__37692;
i__37598 = G__37693;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37595);
if(temp__5753__auto__){
var seq__37595__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37595__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37595__$1);
var G__37695 = cljs.core.chunk_rest(seq__37595__$1);
var G__37696 = c__5568__auto__;
var G__37697 = cljs.core.count(c__5568__auto__);
var G__37698 = (0);
seq__37595 = G__37695;
chunk__37596 = G__37696;
count__37597 = G__37697;
i__37598 = G__37698;
continue;
} else {
var effect = cljs.core.first(seq__37595__$1);
re_frame.fx.dispatch_later(effect);


var G__37701 = cljs.core.next(seq__37595__$1);
var G__37702 = null;
var G__37703 = (0);
var G__37704 = (0);
seq__37595 = G__37701;
chunk__37596 = G__37702;
count__37597 = G__37703;
i__37598 = G__37704;
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
var seq__37613 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37614 = null;
var count__37616 = (0);
var i__37617 = (0);
while(true){
if((i__37617 < count__37616)){
var vec__37629 = chunk__37614.cljs$core$IIndexed$_nth$arity$2(null,i__37617);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37629,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37629,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___37705 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37705)){
var effect_fn_37706 = temp__5751__auto___37705;
(effect_fn_37706.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37706.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37706.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37707 = seq__37613;
var G__37708 = chunk__37614;
var G__37709 = count__37616;
var G__37710 = (i__37617 + (1));
seq__37613 = G__37707;
chunk__37614 = G__37708;
count__37616 = G__37709;
i__37617 = G__37710;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37613);
if(temp__5753__auto__){
var seq__37613__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37613__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37613__$1);
var G__37711 = cljs.core.chunk_rest(seq__37613__$1);
var G__37712 = c__5568__auto__;
var G__37713 = cljs.core.count(c__5568__auto__);
var G__37714 = (0);
seq__37613 = G__37711;
chunk__37614 = G__37712;
count__37616 = G__37713;
i__37617 = G__37714;
continue;
} else {
var vec__37633 = cljs.core.first(seq__37613__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37633,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37633,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___37719 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___37719)){
var effect_fn_37721 = temp__5751__auto___37719;
(effect_fn_37721.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37721.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37721.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37723 = cljs.core.next(seq__37613__$1);
var G__37724 = null;
var G__37725 = (0);
var G__37726 = (0);
seq__37613 = G__37723;
chunk__37614 = G__37724;
count__37616 = G__37725;
i__37617 = G__37726;
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
var seq__37636 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37637 = null;
var count__37638 = (0);
var i__37639 = (0);
while(true){
if((i__37639 < count__37638)){
var event = chunk__37637.cljs$core$IIndexed$_nth$arity$2(null,i__37639);
re_frame.router.dispatch(event);


var G__37727 = seq__37636;
var G__37728 = chunk__37637;
var G__37729 = count__37638;
var G__37730 = (i__37639 + (1));
seq__37636 = G__37727;
chunk__37637 = G__37728;
count__37638 = G__37729;
i__37639 = G__37730;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37636);
if(temp__5753__auto__){
var seq__37636__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37636__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37636__$1);
var G__37731 = cljs.core.chunk_rest(seq__37636__$1);
var G__37732 = c__5568__auto__;
var G__37733 = cljs.core.count(c__5568__auto__);
var G__37734 = (0);
seq__37636 = G__37731;
chunk__37637 = G__37732;
count__37638 = G__37733;
i__37639 = G__37734;
continue;
} else {
var event = cljs.core.first(seq__37636__$1);
re_frame.router.dispatch(event);


var G__37735 = cljs.core.next(seq__37636__$1);
var G__37736 = null;
var G__37737 = (0);
var G__37738 = (0);
seq__37636 = G__37735;
chunk__37637 = G__37736;
count__37638 = G__37737;
i__37639 = G__37738;
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
var seq__37640 = cljs.core.seq(value);
var chunk__37641 = null;
var count__37642 = (0);
var i__37643 = (0);
while(true){
if((i__37643 < count__37642)){
var event = chunk__37641.cljs$core$IIndexed$_nth$arity$2(null,i__37643);
clear_event(event);


var G__37739 = seq__37640;
var G__37740 = chunk__37641;
var G__37741 = count__37642;
var G__37742 = (i__37643 + (1));
seq__37640 = G__37739;
chunk__37641 = G__37740;
count__37642 = G__37741;
i__37643 = G__37742;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37640);
if(temp__5753__auto__){
var seq__37640__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37640__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37640__$1);
var G__37745 = cljs.core.chunk_rest(seq__37640__$1);
var G__37746 = c__5568__auto__;
var G__37747 = cljs.core.count(c__5568__auto__);
var G__37748 = (0);
seq__37640 = G__37745;
chunk__37641 = G__37746;
count__37642 = G__37747;
i__37643 = G__37748;
continue;
} else {
var event = cljs.core.first(seq__37640__$1);
clear_event(event);


var G__37749 = cljs.core.next(seq__37640__$1);
var G__37750 = null;
var G__37751 = (0);
var G__37752 = (0);
seq__37640 = G__37749;
chunk__37641 = G__37750;
count__37642 = G__37751;
i__37643 = G__37752;
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
