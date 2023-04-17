goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__40063__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40064__i = 0, G__40064__a = new Array(arguments.length -  0);
while (G__40064__i < G__40064__a.length) {G__40064__a[G__40064__i] = arguments[G__40064__i + 0]; ++G__40064__i;}
  args = new cljs.core.IndexedSeq(G__40064__a,0,null);
} 
return G__40063__delegate.call(this,args);};
G__40063.cljs$lang$maxFixedArity = 0;
G__40063.cljs$lang$applyTo = (function (arglist__40065){
var args = cljs.core.seq(arglist__40065);
return G__40063__delegate(args);
});
G__40063.cljs$core$IFn$_invoke$arity$variadic = G__40063__delegate;
return G__40063;
})()
);

(o.error = (function() { 
var G__40066__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40067__i = 0, G__40067__a = new Array(arguments.length -  0);
while (G__40067__i < G__40067__a.length) {G__40067__a[G__40067__i] = arguments[G__40067__i + 0]; ++G__40067__i;}
  args = new cljs.core.IndexedSeq(G__40067__a,0,null);
} 
return G__40066__delegate.call(this,args);};
G__40066.cljs$lang$maxFixedArity = 0;
G__40066.cljs$lang$applyTo = (function (arglist__40068){
var args = cljs.core.seq(arglist__40068);
return G__40066__delegate(args);
});
G__40066.cljs$core$IFn$_invoke$arity$variadic = G__40066__delegate;
return G__40066;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
