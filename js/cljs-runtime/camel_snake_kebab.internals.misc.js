goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49872 = arguments.length;
var i__5770__auto___49873 = (0);
while(true){
if((i__5770__auto___49873 < len__5769__auto___49872)){
args__5775__auto__.push((arguments[i__5770__auto___49873]));

var G__49874 = (i__5770__auto___49873 + (1));
i__5770__auto___49873 = G__49874;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__49861){
var map__49862 = p__49861;
var map__49862__$1 = cljs.core.__destructure_map(map__49862);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49862__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5751__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5751__auto__){
var vec__49864 = temp__5751__auto__;
var seq__49865 = cljs.core.seq(vec__49864);
var first__49866 = cljs.core.first(seq__49865);
var seq__49865__$1 = cljs.core.next(seq__49865);
var first = first__49866;
var rest = seq__49865__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq49821){
var G__49823 = cljs.core.first(seq49821);
var seq49821__$1 = cljs.core.next(seq49821);
var G__49824 = cljs.core.first(seq49821__$1);
var seq49821__$2 = cljs.core.next(seq49821__$1);
var G__49825 = cljs.core.first(seq49821__$2);
var seq49821__$3 = cljs.core.next(seq49821__$2);
var G__49826 = cljs.core.first(seq49821__$3);
var seq49821__$4 = cljs.core.next(seq49821__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49823,G__49824,G__49825,G__49826,seq49821__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5045__auto__ = (function (){var G__49871 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__49871) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__49871));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
