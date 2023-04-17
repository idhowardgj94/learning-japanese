goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54761 = arguments.length;
var i__5770__auto___54762 = (0);
while(true){
if((i__5770__auto___54762 < len__5769__auto___54761)){
args__5775__auto__.push((arguments[i__5770__auto___54762]));

var G__54763 = (i__5770__auto___54762 + (1));
i__5770__auto___54762 = G__54763;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__54736){
var map__54737 = p__54736;
var map__54737__$1 = cljs.core.__destructure_map(map__54737);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54737__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5751__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5751__auto__){
var vec__54745 = temp__5751__auto__;
var seq__54746 = cljs.core.seq(vec__54745);
var first__54747 = cljs.core.first(seq__54746);
var seq__54746__$1 = cljs.core.next(seq__54746);
var first = first__54747;
var rest = seq__54746__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq54719){
var G__54720 = cljs.core.first(seq54719);
var seq54719__$1 = cljs.core.next(seq54719);
var G__54721 = cljs.core.first(seq54719__$1);
var seq54719__$2 = cljs.core.next(seq54719__$1);
var G__54722 = cljs.core.first(seq54719__$2);
var seq54719__$3 = cljs.core.next(seq54719__$2);
var G__54723 = cljs.core.first(seq54719__$3);
var seq54719__$4 = cljs.core.next(seq54719__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54720,G__54721,G__54722,G__54723,seq54719__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5045__auto__ = (function (){var G__54756 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__54756) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__54756));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
