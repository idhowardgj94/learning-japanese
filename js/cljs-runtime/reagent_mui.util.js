goog.provide('reagent_mui.util');
goog.scope(function(){
  reagent_mui.util.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$mui$material$node$SvgIcon$index=shadow.js.require("module$node_modules$$mui$material$node$SvgIcon$index", {});
reagent_mui.util.color_key_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["A700",null,"A200",null,new cljs.core.Keyword(null,"A200","A200",-116883354),null,new cljs.core.Keyword(null,"A400","A400",1881009576),null,new cljs.core.Keyword(null,"A700","A700",-181053111),null,"A400",null,new cljs.core.Keyword(null,"A100","A100",-1657389641),null,"A100",null], null), null);
reagent_mui.util.numeric_string_QMARK_ = (function reagent_mui$util$numeric_string_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(/[0-9]+/,s) == null)))));
});
reagent_mui.util.pascal_case_QMARK_ = (function reagent_mui$util$pascal_case_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, ["A",null,"B",null,"C",null,"D",null,"E",null,"F",null,"G",null,"H",null,"I",null,"J",null,"K",null,"L",null,"M",null,"N",null,"O",null,"P",null,"Q",null,"R",null,"S",null,"T",null,"U",null,"V",null,"W",null,"X",null,"Y",null,"Z",null], null), null),cljs.core.first(s))));
});
reagent_mui.util.keyword_safe_QMARK_ = (function reagent_mui$util$keyword_safe_QMARK_(s){
return (!((cljs.core.re_matches(/[-*+!?<>='&$%#|\w]+/,s) == null)));
});
reagent_mui.util.key__GT_str = (function reagent_mui$util$key__GT_str(k){
var n = cljs.core.name(k);
if(cljs.core.truth_((reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_mui.util.color_key_QMARK_.call(null,k)))){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"data-")){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"aria-")){
return n;
} else {
if(reagent_mui.util.pascal_case_QMARK_(n)){
return n;
} else {
return camel_snake_kebab.core.__GT_camelCaseString(k);

}
}
}
}
});
reagent_mui.util.convert_map_keys = (function reagent_mui$util$convert_map_keys(m,f){
return clojure.walk.postwalk((function (x){
if(cljs.core.map_entry_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31965 = cljs.core.key(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31965) : f.call(null,G__31965));
})(),cljs.core.val(x)], null);
} else {
return x;
}
}),m);
});
reagent_mui.util.clj__GT_js_SINGLEQUOTE_ = (function reagent_mui$util$clj__GT_js_SINGLEQUOTE_(obj){
return cljs.core.clj__GT_js(reagent_mui.util.convert_map_keys(obj,(function (k){
if((k instanceof cljs.core.Keyword)){
return reagent_mui.util.key__GT_str(k);
} else {
return k;
}
})));
});
reagent_mui.util.js_key__GT_clj = (function reagent_mui$util$js_key__GT_clj(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.truth_((reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_mui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_mui.util.color_key_QMARK_.call(null,k)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
if(reagent_mui.util.numeric_string_QMARK_(k)){
return parseInt(k);
} else {
if(reagent_mui.util.keyword_safe_QMARK_(k)){
if(reagent_mui.util.pascal_case_QMARK_(k)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
return camel_snake_kebab.core.__GT_kebab_case_keyword(k);
}
} else {
return k;

}
}
}
}
});
reagent_mui.util.js__GT_clj_SINGLEQUOTE_ = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE_(obj){
var convert = (function reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(x){
if(cljs.core.seq_QMARK_(x)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert,x));
} else {
if(cljs.core.map_entry_QMARK_(x)){
return (new cljs.core.MapEntry(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(cljs.core.key(x)),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(cljs.core.val(x)),null));
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$1(reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert),x);
} else {
if(cljs.core.array_QMARK_(x)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__31975_SHARP_,p2__31976_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__31975_SHARP_,reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(p2__31976_SHARP_));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),x));
} else {
if(cljs.core.truth_(module$node_modules$react$index.isValidElement(x))){
return x;
} else {
if((cljs.core.type(x) === Object)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ref",k)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"ref","ref",1289896967),reagent_mui.util.goog$module$goog$object.get(x,k));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,reagent_mui.util.js_key__GT_clj(k),reagent_mui$util$js__GT_clj_SINGLEQUOTE__$_convert(reagent_mui.util.goog$module$goog$object.get(x,k)));
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys(x)));
} else {
return x;

}
}
}
}
}
}
});
return convert(obj);
});
reagent_mui.util.wrap_clj_function = (function reagent_mui$util$wrap_clj_function(f){
return (function() { 
var G__32015__delegate = function (args){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui.util.js__GT_clj_SINGLEQUOTE_,args)));
};
var G__32015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32016__i = 0, G__32016__a = new Array(arguments.length -  0);
while (G__32016__i < G__32016__a.length) {G__32016__a[G__32016__i] = arguments[G__32016__i + 0]; ++G__32016__i;}
  args = new cljs.core.IndexedSeq(G__32016__a,0,null);
} 
return G__32015__delegate.call(this,args);};
G__32015.cljs$lang$maxFixedArity = 0;
G__32015.cljs$lang$applyTo = (function (arglist__32017){
var args = cljs.core.seq(arglist__32017);
return G__32015__delegate(args);
});
G__32015.cljs$core$IFn$_invoke$arity$variadic = G__32015__delegate;
return G__32015;
})()
;
});
reagent_mui.util.wrap_js_function = (function reagent_mui$util$wrap_js_function(f){
return (function() { 
var G__32018__delegate = function (args){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_mui.util.clj__GT_js_SINGLEQUOTE_,args)));
};
var G__32018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32019__i = 0, G__32019__a = new Array(arguments.length -  0);
while (G__32019__i < G__32019__a.length) {G__32019__a[G__32019__i] = arguments[G__32019__i + 0]; ++G__32019__i;}
  args = new cljs.core.IndexedSeq(G__32019__a,0,null);
} 
return G__32018__delegate.call(this,args);};
G__32018.cljs$lang$maxFixedArity = 0;
G__32018.cljs$lang$applyTo = (function (arglist__32020){
var args = cljs.core.seq(arglist__32020);
return G__32018__delegate(args);
});
G__32018.cljs$core$IFn$_invoke$arity$variadic = G__32018__delegate;
return G__32018;
})()
;
});
reagent_mui.util.wrap_all_clj_functions = (function reagent_mui$util$wrap_all_clj_functions(m){
return clojure.walk.postwalk((function (x){
if(cljs.core.fn_QMARK_(x)){
return reagent_mui.util.wrap_clj_function(x);
} else {
return x;
}
}),m);
});
reagent_mui.util.wrap_all_js_functions = (function reagent_mui$util$wrap_all_js_functions(m){
return clojure.walk.postwalk((function (x){
if(cljs.core.fn_QMARK_(x)){
return reagent_mui.util.wrap_js_function(x);
} else {
return x;
}
}),m);
});
reagent_mui.util.reactify_component = (function reagent_mui$util$reactify_component(component){
var reactified = module$node_modules$react$index.forwardRef((function (props,ref){
var clj_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent_mui.util.js__GT_clj_SINGLEQUOTE_(props),new cljs.core.Keyword(null,"ref","ref",1289896967),ref);
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,clj_props], null));
}));
(reactified.displayName = reagent.impl.util.fun_name(component));

return reactified;
});
reagent_mui.util.wrap_styles = (function reagent_mui$util$wrap_styles(styles){
if(cljs.core.fn_QMARK_(styles)){
return (function (theme){
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(reagent_mui.util.wrap_all_clj_functions((function (){var G__31995 = reagent_mui.util.js__GT_clj_SINGLEQUOTE_(theme);
return (styles.cljs$core$IFn$_invoke$arity$1 ? styles.cljs$core$IFn$_invoke$arity$1(G__31995) : styles.call(null,G__31995));
})()));
});
} else {
return reagent_mui.util.clj__GT_js_SINGLEQUOTE_(reagent_mui.util.wrap_all_clj_functions(styles));
}
});
reagent_mui.util.apply_hoc = (function reagent_mui$util$apply_hoc(hoc,component){
return reagent.core.adapt_react_class((function (){var G__31996 = reagent_mui.util.reactify_component(component);
return (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(G__31996) : hoc.call(null,G__31996));
})());
});
reagent_mui.util.get_anycase = (function reagent_mui$util$get_anycase(var_args){
var G__31998 = arguments.length;
switch (G__31998) {
case 2:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3(m,k,null);
}));

(reagent_mui.util.get_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,default$){
var temp__5751__auto__ = (function (){var or__5045__auto__ = cljs.core.find(m,camel_snake_kebab.core.__GT_kebab_case_keyword(k));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.find(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var entry = temp__5751__auto__;
return cljs.core.val(entry);
} else {
return default$;
}
}));

(reagent_mui.util.get_anycase.cljs$lang$maxFixedArity = 3);

reagent_mui.util.assoc_anycase = (function reagent_mui$util$assoc_anycase(var_args){
var G__32004 = arguments.length;
switch (G__32004) {
case 3:
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___32023 = arguments.length;
var i__5770__auto___32024 = (0);
while(true){
if((i__5770__auto___32024 < len__5769__auto___32023)){
args_arr__5794__auto__.push((arguments[i__5770__auto___32024]));

var G__32025 = (i__5770__auto___32024 + (1));
i__5770__auto___32024 = G__32025;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k)),camel_snake_kebab.core.__GT_kebab_case_keyword(k),v);
}));

(reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = reagent_mui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3(m,k,v);
if(cljs.core.truth_(kvs)){
var G__32026 = ret;
var G__32027 = cljs.core.first(kvs);
var G__32028 = cljs.core.second(kvs);
var G__32029 = cljs.core.nnext(kvs);
m = G__32026;
k = G__32027;
v = G__32028;
kvs = G__32029;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(reagent_mui.util.assoc_anycase.cljs$lang$applyTo = (function (seq32000){
var G__32001 = cljs.core.first(seq32000);
var seq32000__$1 = cljs.core.next(seq32000);
var G__32002 = cljs.core.first(seq32000__$1);
var seq32000__$2 = cljs.core.next(seq32000__$1);
var G__32003 = cljs.core.first(seq32000__$2);
var seq32000__$3 = cljs.core.next(seq32000__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32001,G__32002,G__32003,seq32000__$3);
}));

(reagent_mui.util.assoc_anycase.cljs$lang$maxFixedArity = (3));

reagent_mui.util.remove_undefined_vals = (function reagent_mui$util$remove_undefined_vals(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if((void 0 === v)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$(m),m));
});
reagent_mui.util.set_ref = (function reagent_mui$util$set_ref(ref,value){
if(cljs.core.fn_QMARK_(ref)){
(ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(value) : ref.call(null,value));
} else {
if(cljs.core.truth_(ref)){
(ref.current = value);
} else {
}
}

return undefined;
});
reagent_mui.util.swap_ref = (function reagent_mui$util$swap_ref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32030 = arguments.length;
var i__5770__auto___32031 = (0);
while(true){
if((i__5770__auto___32031 < len__5769__auto___32030)){
args__5775__auto__.push((arguments[i__5770__auto___32031]));

var G__32032 = (i__5770__auto___32031 + (1));
i__5770__auto___32031 = G__32032;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent_mui.util.swap_ref.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
return (ref.current = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ref.current,args));
}));

(reagent_mui.util.swap_ref.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent_mui.util.swap_ref.cljs$lang$applyTo = (function (seq32005){
var G__32006 = cljs.core.first(seq32005);
var seq32005__$1 = cljs.core.next(seq32005);
var G__32007 = cljs.core.first(seq32005__$1);
var seq32005__$2 = cljs.core.next(seq32005__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32006,G__32007,seq32005__$2);
}));

reagent_mui.util.use_fork_ref = (function reagent_mui$util$use_fork_ref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32033 = arguments.length;
var i__5770__auto___32034 = (0);
while(true){
if((i__5770__auto___32034 < len__5769__auto___32033)){
args__5775__auto__.push((arguments[i__5770__auto___32034]));

var G__32035 = (i__5770__auto___32034 + (1));
i__5770__auto___32034 = G__32035;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(reagent_mui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic = (function (refs){
return module$node_modules$react$index.useMemo((function (){
if(cljs.core.not_every_QMARK_(cljs.core.nil_QMARK_,refs)){
return (function (value){
var seq__32009 = cljs.core.seq(refs);
var chunk__32010 = null;
var count__32011 = (0);
var i__32012 = (0);
while(true){
if((i__32012 < count__32011)){
var ref = chunk__32010.cljs$core$IIndexed$_nth$arity$2(null,i__32012);
reagent_mui.util.set_ref(ref,value);


var G__32036 = seq__32009;
var G__32037 = chunk__32010;
var G__32038 = count__32011;
var G__32039 = (i__32012 + (1));
seq__32009 = G__32036;
chunk__32010 = G__32037;
count__32011 = G__32038;
i__32012 = G__32039;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32009);
if(temp__5753__auto__){
var seq__32009__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32009__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32009__$1);
var G__32040 = cljs.core.chunk_rest(seq__32009__$1);
var G__32041 = c__5568__auto__;
var G__32042 = cljs.core.count(c__5568__auto__);
var G__32043 = (0);
seq__32009 = G__32040;
chunk__32010 = G__32041;
count__32011 = G__32042;
i__32012 = G__32043;
continue;
} else {
var ref = cljs.core.first(seq__32009__$1);
reagent_mui.util.set_ref(ref,value);


var G__32044 = cljs.core.next(seq__32009__$1);
var G__32045 = null;
var G__32046 = (0);
var G__32047 = (0);
seq__32009 = G__32044;
chunk__32010 = G__32045;
count__32011 = G__32046;
i__32012 = G__32047;
continue;
}
} else {
return null;
}
}
break;
}
});
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,refs));
}));

(reagent_mui.util.use_fork_ref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reagent_mui.util.use_fork_ref.cljs$lang$applyTo = (function (seq32008){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32008));
}));

reagent_mui.util.use_callback = (function reagent_mui$util$use_callback(callback,props){
return module$node_modules$react$index.useCallback(callback,props);
});
reagent_mui.util.use_effect = (function reagent_mui$util$use_effect(effect,props){
return module$node_modules$react$index.useEffect(effect,props);
});
reagent_mui.util.use_layout_effect = (function reagent_mui$util$use_layout_effect(effect){
return module$node_modules$react$index.useLayoutEffect(effect);
});
reagent_mui.util.use_ref = (function reagent_mui$util$use_ref(value){
return module$node_modules$react$index.useRef(value);
});
reagent_mui.util.use_state = (function reagent_mui$util$use_state(initial_state){
return module$node_modules$react$index.useState(initial_state);
});

//# sourceMappingURL=reagent_mui.util.js.map
