goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31846 = arguments.length;
var i__5770__auto___31847 = (0);
while(true){
if((i__5770__auto___31847 < len__5769__auto___31846)){
args__5775__auto__.push((arguments[i__5770__auto___31847]));

var G__31849 = (i__5770__auto___31847 + (1));
i__5770__auto___31847 = G__31849;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq31780){
var G__31781 = cljs.core.first(seq31780);
var seq31780__$1 = cljs.core.next(seq31780);
var G__31782 = cljs.core.first(seq31780__$1);
var seq31780__$2 = cljs.core.next(seq31780__$1);
var G__31783 = cljs.core.first(seq31780__$2);
var seq31780__$3 = cljs.core.next(seq31780__$2);
var G__31784 = cljs.core.first(seq31780__$3);
var seq31780__$4 = cljs.core.next(seq31780__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31781,G__31782,G__31783,G__31784,seq31780__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31854 = arguments.length;
var i__5770__auto___31855 = (0);
while(true){
if((i__5770__auto___31855 < len__5769__auto___31854)){
args__5775__auto__.push((arguments[i__5770__auto___31855]));

var G__31856 = (i__5770__auto___31855 + (1));
i__5770__auto___31855 = G__31856;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__31745__auto__,rest__31746__auto__){
var convert_case__31747__auto__ = (function (p1__31744__31748__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__31744__31748__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31746__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__31745__auto__,convert_case__31747__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq31785){
var G__31786 = cljs.core.first(seq31785);
var seq31785__$1 = cljs.core.next(seq31785);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31786,seq31785__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31860 = arguments.length;
var i__5770__auto___31861 = (0);
while(true){
if((i__5770__auto___31861 < len__5769__auto___31860)){
args__5775__auto__.push((arguments[i__5770__auto___31861]));

var G__31862 = (i__5770__auto___31861 + (1));
i__5770__auto___31861 = G__31862;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq31787){
var G__31788 = cljs.core.first(seq31787);
var seq31787__$1 = cljs.core.next(seq31787);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31788,seq31787__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31865 = arguments.length;
var i__5770__auto___31866 = (0);
while(true){
if((i__5770__auto___31866 < len__5769__auto___31865)){
args__5775__auto__.push((arguments[i__5770__auto___31866]));

var G__31867 = (i__5770__auto___31866 + (1));
i__5770__auto___31866 = G__31867;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq31789){
var G__31790 = cljs.core.first(seq31789);
var seq31789__$1 = cljs.core.next(seq31789);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31790,seq31789__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31868 = arguments.length;
var i__5770__auto___31869 = (0);
while(true){
if((i__5770__auto___31869 < len__5769__auto___31868)){
args__5775__auto__.push((arguments[i__5770__auto___31869]));

var G__31870 = (i__5770__auto___31869 + (1));
i__5770__auto___31869 = G__31870;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq31791){
var G__31792 = cljs.core.first(seq31791);
var seq31791__$1 = cljs.core.next(seq31791);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31792,seq31791__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31875 = arguments.length;
var i__5770__auto___31876 = (0);
while(true){
if((i__5770__auto___31876 < len__5769__auto___31875)){
args__5775__auto__.push((arguments[i__5770__auto___31876]));

var G__31877 = (i__5770__auto___31876 + (1));
i__5770__auto___31876 = G__31877;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31745__auto__,rest__31746__auto__){
var convert_case__31747__auto__ = (function (p1__31744__31748__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__31744__31748__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31746__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__31745__auto__,convert_case__31747__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq31793){
var G__31794 = cljs.core.first(seq31793);
var seq31793__$1 = cljs.core.next(seq31793);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31794,seq31793__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31882 = arguments.length;
var i__5770__auto___31883 = (0);
while(true){
if((i__5770__auto___31883 < len__5769__auto___31882)){
args__5775__auto__.push((arguments[i__5770__auto___31883]));

var G__31884 = (i__5770__auto___31883 + (1));
i__5770__auto___31883 = G__31884;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq31795){
var G__31796 = cljs.core.first(seq31795);
var seq31795__$1 = cljs.core.next(seq31795);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31796,seq31795__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31893 = arguments.length;
var i__5770__auto___31894 = (0);
while(true){
if((i__5770__auto___31894 < len__5769__auto___31893)){
args__5775__auto__.push((arguments[i__5770__auto___31894]));

var G__31895 = (i__5770__auto___31894 + (1));
i__5770__auto___31894 = G__31895;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq31797){
var G__31798 = cljs.core.first(seq31797);
var seq31797__$1 = cljs.core.next(seq31797);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31798,seq31797__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31905 = arguments.length;
var i__5770__auto___31906 = (0);
while(true){
if((i__5770__auto___31906 < len__5769__auto___31905)){
args__5775__auto__.push((arguments[i__5770__auto___31906]));

var G__31908 = (i__5770__auto___31906 + (1));
i__5770__auto___31906 = G__31908;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq31799){
var G__31800 = cljs.core.first(seq31799);
var seq31799__$1 = cljs.core.next(seq31799);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31800,seq31799__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31916 = arguments.length;
var i__5770__auto___31917 = (0);
while(true){
if((i__5770__auto___31917 < len__5769__auto___31916)){
args__5775__auto__.push((arguments[i__5770__auto___31917]));

var G__31920 = (i__5770__auto___31917 + (1));
i__5770__auto___31917 = G__31920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__31745__auto__,rest__31746__auto__){
var convert_case__31747__auto__ = (function (p1__31744__31748__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__31744__31748__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31746__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__31745__auto__,convert_case__31747__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq31801){
var G__31802 = cljs.core.first(seq31801);
var seq31801__$1 = cljs.core.next(seq31801);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31802,seq31801__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31923 = arguments.length;
var i__5770__auto___31924 = (0);
while(true){
if((i__5770__auto___31924 < len__5769__auto___31923)){
args__5775__auto__.push((arguments[i__5770__auto___31924]));

var G__31925 = (i__5770__auto___31924 + (1));
i__5770__auto___31924 = G__31925;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq31803){
var G__31804 = cljs.core.first(seq31803);
var seq31803__$1 = cljs.core.next(seq31803);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31804,seq31803__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31926 = arguments.length;
var i__5770__auto___31927 = (0);
while(true){
if((i__5770__auto___31927 < len__5769__auto___31926)){
args__5775__auto__.push((arguments[i__5770__auto___31927]));

var G__31928 = (i__5770__auto___31927 + (1));
i__5770__auto___31927 = G__31928;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq31805){
var G__31806 = cljs.core.first(seq31805);
var seq31805__$1 = cljs.core.next(seq31805);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31806,seq31805__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31929 = arguments.length;
var i__5770__auto___31930 = (0);
while(true){
if((i__5770__auto___31930 < len__5769__auto___31929)){
args__5775__auto__.push((arguments[i__5770__auto___31930]));

var G__31931 = (i__5770__auto___31930 + (1));
i__5770__auto___31930 = G__31931;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq31807){
var G__31808 = cljs.core.first(seq31807);
var seq31807__$1 = cljs.core.next(seq31807);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31808,seq31807__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31932 = arguments.length;
var i__5770__auto___31933 = (0);
while(true){
if((i__5770__auto___31933 < len__5769__auto___31932)){
args__5775__auto__.push((arguments[i__5770__auto___31933]));

var G__31935 = (i__5770__auto___31933 + (1));
i__5770__auto___31933 = G__31935;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__31745__auto__,rest__31746__auto__){
var convert_case__31747__auto__ = (function (p1__31744__31748__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__31744__31748__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31746__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__31745__auto__,convert_case__31747__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq31809){
var G__31810 = cljs.core.first(seq31809);
var seq31809__$1 = cljs.core.next(seq31809);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31810,seq31809__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31943 = arguments.length;
var i__5770__auto___31944 = (0);
while(true){
if((i__5770__auto___31944 < len__5769__auto___31943)){
args__5775__auto__.push((arguments[i__5770__auto___31944]));

var G__31945 = (i__5770__auto___31944 + (1));
i__5770__auto___31944 = G__31945;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq31811){
var G__31812 = cljs.core.first(seq31811);
var seq31811__$1 = cljs.core.next(seq31811);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31812,seq31811__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31946 = arguments.length;
var i__5770__auto___31947 = (0);
while(true){
if((i__5770__auto___31947 < len__5769__auto___31946)){
args__5775__auto__.push((arguments[i__5770__auto___31947]));

var G__31948 = (i__5770__auto___31947 + (1));
i__5770__auto___31947 = G__31948;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq31813){
var G__31814 = cljs.core.first(seq31813);
var seq31813__$1 = cljs.core.next(seq31813);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31814,seq31813__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31953 = arguments.length;
var i__5770__auto___31954 = (0);
while(true){
if((i__5770__auto___31954 < len__5769__auto___31953)){
args__5775__auto__.push((arguments[i__5770__auto___31954]));

var G__31955 = (i__5770__auto___31954 + (1));
i__5770__auto___31954 = G__31955;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq31815){
var G__31816 = cljs.core.first(seq31815);
var seq31815__$1 = cljs.core.next(seq31815);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31816,seq31815__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31956 = arguments.length;
var i__5770__auto___31957 = (0);
while(true){
if((i__5770__auto___31957 < len__5769__auto___31956)){
args__5775__auto__.push((arguments[i__5770__auto___31957]));

var G__31958 = (i__5770__auto___31957 + (1));
i__5770__auto___31957 = G__31958;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31745__auto__,rest__31746__auto__){
var convert_case__31747__auto__ = (function (p1__31744__31748__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__31744__31748__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31746__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__31745__auto__,convert_case__31747__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq31817){
var G__31818 = cljs.core.first(seq31817);
var seq31817__$1 = cljs.core.next(seq31817);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31818,seq31817__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31959 = arguments.length;
var i__5770__auto___31960 = (0);
while(true){
if((i__5770__auto___31960 < len__5769__auto___31959)){
args__5775__auto__.push((arguments[i__5770__auto___31960]));

var G__31961 = (i__5770__auto___31960 + (1));
i__5770__auto___31960 = G__31961;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq31819){
var G__31820 = cljs.core.first(seq31819);
var seq31819__$1 = cljs.core.next(seq31819);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31820,seq31819__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31962 = arguments.length;
var i__5770__auto___31963 = (0);
while(true){
if((i__5770__auto___31963 < len__5769__auto___31962)){
args__5775__auto__.push((arguments[i__5770__auto___31963]));

var G__31964 = (i__5770__auto___31963 + (1));
i__5770__auto___31963 = G__31964;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq31821){
var G__31822 = cljs.core.first(seq31821);
var seq31821__$1 = cljs.core.next(seq31821);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31822,seq31821__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31966 = arguments.length;
var i__5770__auto___31967 = (0);
while(true){
if((i__5770__auto___31967 < len__5769__auto___31966)){
args__5775__auto__.push((arguments[i__5770__auto___31967]));

var G__31968 = (i__5770__auto___31967 + (1));
i__5770__auto___31967 = G__31968;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq31823){
var G__31824 = cljs.core.first(seq31823);
var seq31823__$1 = cljs.core.next(seq31823);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31824,seq31823__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31969 = arguments.length;
var i__5770__auto___31970 = (0);
while(true){
if((i__5770__auto___31970 < len__5769__auto___31969)){
args__5775__auto__.push((arguments[i__5770__auto___31970]));

var G__31971 = (i__5770__auto___31970 + (1));
i__5770__auto___31970 = G__31971;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31745__auto__,rest__31746__auto__){
var convert_case__31747__auto__ = (function (p1__31744__31748__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__31744__31748__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31746__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__31745__auto__,convert_case__31747__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq31825){
var G__31826 = cljs.core.first(seq31825);
var seq31825__$1 = cljs.core.next(seq31825);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31826,seq31825__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31972 = arguments.length;
var i__5770__auto___31973 = (0);
while(true){
if((i__5770__auto___31973 < len__5769__auto___31972)){
args__5775__auto__.push((arguments[i__5770__auto___31973]));

var G__31974 = (i__5770__auto___31973 + (1));
i__5770__auto___31973 = G__31974;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq31827){
var G__31828 = cljs.core.first(seq31827);
var seq31827__$1 = cljs.core.next(seq31827);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31828,seq31827__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31977 = arguments.length;
var i__5770__auto___31978 = (0);
while(true){
if((i__5770__auto___31978 < len__5769__auto___31977)){
args__5775__auto__.push((arguments[i__5770__auto___31978]));

var G__31979 = (i__5770__auto___31978 + (1));
i__5770__auto___31978 = G__31979;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq31829){
var G__31830 = cljs.core.first(seq31829);
var seq31829__$1 = cljs.core.next(seq31829);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31830,seq31829__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31980 = arguments.length;
var i__5770__auto___31981 = (0);
while(true){
if((i__5770__auto___31981 < len__5769__auto___31980)){
args__5775__auto__.push((arguments[i__5770__auto___31981]));

var G__31982 = (i__5770__auto___31981 + (1));
i__5770__auto___31981 = G__31982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq31831){
var G__31832 = cljs.core.first(seq31831);
var seq31831__$1 = cljs.core.next(seq31831);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31832,seq31831__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31983 = arguments.length;
var i__5770__auto___31984 = (0);
while(true){
if((i__5770__auto___31984 < len__5769__auto___31983)){
args__5775__auto__.push((arguments[i__5770__auto___31984]));

var G__31985 = (i__5770__auto___31984 + (1));
i__5770__auto___31984 = G__31985;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__31745__auto__,rest__31746__auto__){
var convert_case__31747__auto__ = (function (p1__31744__31748__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__31744__31748__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31746__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__31745__auto__,convert_case__31747__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq31833){
var G__31834 = cljs.core.first(seq31833);
var seq31833__$1 = cljs.core.next(seq31833);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31834,seq31833__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31986 = arguments.length;
var i__5770__auto___31987 = (0);
while(true){
if((i__5770__auto___31987 < len__5769__auto___31986)){
args__5775__auto__.push((arguments[i__5770__auto___31987]));

var G__31988 = (i__5770__auto___31987 + (1));
i__5770__auto___31987 = G__31988;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq31835){
var G__31836 = cljs.core.first(seq31835);
var seq31835__$1 = cljs.core.next(seq31835);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31836,seq31835__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31989 = arguments.length;
var i__5770__auto___31990 = (0);
while(true){
if((i__5770__auto___31990 < len__5769__auto___31989)){
args__5775__auto__.push((arguments[i__5770__auto___31990]));

var G__31991 = (i__5770__auto___31990 + (1));
i__5770__auto___31990 = G__31991;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq31837){
var G__31838 = cljs.core.first(seq31837);
var seq31837__$1 = cljs.core.next(seq31837);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31838,seq31837__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31992 = arguments.length;
var i__5770__auto___31993 = (0);
while(true){
if((i__5770__auto___31993 < len__5769__auto___31992)){
args__5775__auto__.push((arguments[i__5770__auto___31993]));

var G__31994 = (i__5770__auto___31993 + (1));
i__5770__auto___31993 = G__31994;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__31750__auto__,rest__31751__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__31750__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__31751__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq31839){
var G__31840 = cljs.core.first(seq31839);
var seq31839__$1 = cljs.core.next(seq31839);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31840,seq31839__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
