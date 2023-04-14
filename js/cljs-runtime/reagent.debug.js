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
var G__35977__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35977 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35978__i = 0, G__35978__a = new Array(arguments.length -  0);
while (G__35978__i < G__35978__a.length) {G__35978__a[G__35978__i] = arguments[G__35978__i + 0]; ++G__35978__i;}
  args = new cljs.core.IndexedSeq(G__35978__a,0,null);
} 
return G__35977__delegate.call(this,args);};
G__35977.cljs$lang$maxFixedArity = 0;
G__35977.cljs$lang$applyTo = (function (arglist__35979){
var args = cljs.core.seq(arglist__35979);
return G__35977__delegate(args);
});
G__35977.cljs$core$IFn$_invoke$arity$variadic = G__35977__delegate;
return G__35977;
})()
);

(o.error = (function() { 
var G__35980__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35981__i = 0, G__35981__a = new Array(arguments.length -  0);
while (G__35981__i < G__35981__a.length) {G__35981__a[G__35981__i] = arguments[G__35981__i + 0]; ++G__35981__i;}
  args = new cljs.core.IndexedSeq(G__35981__a,0,null);
} 
return G__35980__delegate.call(this,args);};
G__35980.cljs$lang$maxFixedArity = 0;
G__35980.cljs$lang$applyTo = (function (arglist__35982){
var args = cljs.core.seq(arglist__35982);
return G__35980__delegate(args);
});
G__35980.cljs$core$IFn$_invoke$arity$variadic = G__35980__delegate;
return G__35980;
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
