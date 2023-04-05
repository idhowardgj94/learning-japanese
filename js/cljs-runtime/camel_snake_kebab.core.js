goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50537 = arguments.length;
var i__5770__auto___50538 = (0);
while(true){
if((i__5770__auto___50538 < len__5769__auto___50537)){
args__5775__auto__.push((arguments[i__5770__auto___50538]));

var G__50539 = (i__5770__auto___50538 + (1));
i__5770__auto___50538 = G__50539;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq50264){
var G__50265 = cljs.core.first(seq50264);
var seq50264__$1 = cljs.core.next(seq50264);
var G__50266 = cljs.core.first(seq50264__$1);
var seq50264__$2 = cljs.core.next(seq50264__$1);
var G__50267 = cljs.core.first(seq50264__$2);
var seq50264__$3 = cljs.core.next(seq50264__$2);
var G__50268 = cljs.core.first(seq50264__$3);
var seq50264__$4 = cljs.core.next(seq50264__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50265,G__50266,G__50267,G__50268,seq50264__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50545 = arguments.length;
var i__5770__auto___50546 = (0);
while(true){
if((i__5770__auto___50546 < len__5769__auto___50545)){
args__5775__auto__.push((arguments[i__5770__auto___50546]));

var G__50547 = (i__5770__auto___50546 + (1));
i__5770__auto___50546 = G__50547;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__50211__auto__,rest__50212__auto__){
var convert_case__50213__auto__ = (function (p1__50210__50214__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__50210__50214__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50212__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__50211__auto__,convert_case__50213__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq50274){
var G__50275 = cljs.core.first(seq50274);
var seq50274__$1 = cljs.core.next(seq50274);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50275,seq50274__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50557 = arguments.length;
var i__5770__auto___50560 = (0);
while(true){
if((i__5770__auto___50560 < len__5769__auto___50557)){
args__5775__auto__.push((arguments[i__5770__auto___50560]));

var G__50561 = (i__5770__auto___50560 + (1));
i__5770__auto___50560 = G__50561;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq50276){
var G__50277 = cljs.core.first(seq50276);
var seq50276__$1 = cljs.core.next(seq50276);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50277,seq50276__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50563 = arguments.length;
var i__5770__auto___50564 = (0);
while(true){
if((i__5770__auto___50564 < len__5769__auto___50563)){
args__5775__auto__.push((arguments[i__5770__auto___50564]));

var G__50565 = (i__5770__auto___50564 + (1));
i__5770__auto___50564 = G__50565;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq50301){
var G__50302 = cljs.core.first(seq50301);
var seq50301__$1 = cljs.core.next(seq50301);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50302,seq50301__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50568 = arguments.length;
var i__5770__auto___50569 = (0);
while(true){
if((i__5770__auto___50569 < len__5769__auto___50568)){
args__5775__auto__.push((arguments[i__5770__auto___50569]));

var G__50570 = (i__5770__auto___50569 + (1));
i__5770__auto___50569 = G__50570;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq50309){
var G__50310 = cljs.core.first(seq50309);
var seq50309__$1 = cljs.core.next(seq50309);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50310,seq50309__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50576 = arguments.length;
var i__5770__auto___50577 = (0);
while(true){
if((i__5770__auto___50577 < len__5769__auto___50576)){
args__5775__auto__.push((arguments[i__5770__auto___50577]));

var G__50578 = (i__5770__auto___50577 + (1));
i__5770__auto___50577 = G__50578;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__50211__auto__,rest__50212__auto__){
var convert_case__50213__auto__ = (function (p1__50210__50214__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__50210__50214__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50212__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__50211__auto__,convert_case__50213__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq50320){
var G__50321 = cljs.core.first(seq50320);
var seq50320__$1 = cljs.core.next(seq50320);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50321,seq50320__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50584 = arguments.length;
var i__5770__auto___50585 = (0);
while(true){
if((i__5770__auto___50585 < len__5769__auto___50584)){
args__5775__auto__.push((arguments[i__5770__auto___50585]));

var G__50587 = (i__5770__auto___50585 + (1));
i__5770__auto___50585 = G__50587;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq50324){
var G__50325 = cljs.core.first(seq50324);
var seq50324__$1 = cljs.core.next(seq50324);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50325,seq50324__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50589 = arguments.length;
var i__5770__auto___50590 = (0);
while(true){
if((i__5770__auto___50590 < len__5769__auto___50589)){
args__5775__auto__.push((arguments[i__5770__auto___50590]));

var G__50591 = (i__5770__auto___50590 + (1));
i__5770__auto___50590 = G__50591;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq50336){
var G__50337 = cljs.core.first(seq50336);
var seq50336__$1 = cljs.core.next(seq50336);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50337,seq50336__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50596 = arguments.length;
var i__5770__auto___50597 = (0);
while(true){
if((i__5770__auto___50597 < len__5769__auto___50596)){
args__5775__auto__.push((arguments[i__5770__auto___50597]));

var G__50599 = (i__5770__auto___50597 + (1));
i__5770__auto___50597 = G__50599;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq50348){
var G__50349 = cljs.core.first(seq50348);
var seq50348__$1 = cljs.core.next(seq50348);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50349,seq50348__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50606 = arguments.length;
var i__5770__auto___50616 = (0);
while(true){
if((i__5770__auto___50616 < len__5769__auto___50606)){
args__5775__auto__.push((arguments[i__5770__auto___50616]));

var G__50617 = (i__5770__auto___50616 + (1));
i__5770__auto___50616 = G__50617;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__50211__auto__,rest__50212__auto__){
var convert_case__50213__auto__ = (function (p1__50210__50214__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__50210__50214__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50212__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__50211__auto__,convert_case__50213__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq50355){
var G__50356 = cljs.core.first(seq50355);
var seq50355__$1 = cljs.core.next(seq50355);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50356,seq50355__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50623 = arguments.length;
var i__5770__auto___50624 = (0);
while(true){
if((i__5770__auto___50624 < len__5769__auto___50623)){
args__5775__auto__.push((arguments[i__5770__auto___50624]));

var G__50625 = (i__5770__auto___50624 + (1));
i__5770__auto___50624 = G__50625;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq50361){
var G__50362 = cljs.core.first(seq50361);
var seq50361__$1 = cljs.core.next(seq50361);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50362,seq50361__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50632 = arguments.length;
var i__5770__auto___50635 = (0);
while(true){
if((i__5770__auto___50635 < len__5769__auto___50632)){
args__5775__auto__.push((arguments[i__5770__auto___50635]));

var G__50637 = (i__5770__auto___50635 + (1));
i__5770__auto___50635 = G__50637;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq50364){
var G__50365 = cljs.core.first(seq50364);
var seq50364__$1 = cljs.core.next(seq50364);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50365,seq50364__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50639 = arguments.length;
var i__5770__auto___50640 = (0);
while(true){
if((i__5770__auto___50640 < len__5769__auto___50639)){
args__5775__auto__.push((arguments[i__5770__auto___50640]));

var G__50644 = (i__5770__auto___50640 + (1));
i__5770__auto___50640 = G__50644;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq50370){
var G__50371 = cljs.core.first(seq50370);
var seq50370__$1 = cljs.core.next(seq50370);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50371,seq50370__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50650 = arguments.length;
var i__5770__auto___50653 = (0);
while(true){
if((i__5770__auto___50653 < len__5769__auto___50650)){
args__5775__auto__.push((arguments[i__5770__auto___50653]));

var G__50654 = (i__5770__auto___50653 + (1));
i__5770__auto___50653 = G__50654;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__50211__auto__,rest__50212__auto__){
var convert_case__50213__auto__ = (function (p1__50210__50214__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__50210__50214__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50212__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__50211__auto__,convert_case__50213__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq50380){
var G__50381 = cljs.core.first(seq50380);
var seq50380__$1 = cljs.core.next(seq50380);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50381,seq50380__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50657 = arguments.length;
var i__5770__auto___50658 = (0);
while(true){
if((i__5770__auto___50658 < len__5769__auto___50657)){
args__5775__auto__.push((arguments[i__5770__auto___50658]));

var G__50659 = (i__5770__auto___50658 + (1));
i__5770__auto___50658 = G__50659;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq50384){
var G__50385 = cljs.core.first(seq50384);
var seq50384__$1 = cljs.core.next(seq50384);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50385,seq50384__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50664 = arguments.length;
var i__5770__auto___50665 = (0);
while(true){
if((i__5770__auto___50665 < len__5769__auto___50664)){
args__5775__auto__.push((arguments[i__5770__auto___50665]));

var G__50666 = (i__5770__auto___50665 + (1));
i__5770__auto___50665 = G__50666;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq50386){
var G__50387 = cljs.core.first(seq50386);
var seq50386__$1 = cljs.core.next(seq50386);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50387,seq50386__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50675 = arguments.length;
var i__5770__auto___50676 = (0);
while(true){
if((i__5770__auto___50676 < len__5769__auto___50675)){
args__5775__auto__.push((arguments[i__5770__auto___50676]));

var G__50677 = (i__5770__auto___50676 + (1));
i__5770__auto___50676 = G__50677;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq50393){
var G__50394 = cljs.core.first(seq50393);
var seq50393__$1 = cljs.core.next(seq50393);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50394,seq50393__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50686 = arguments.length;
var i__5770__auto___50687 = (0);
while(true){
if((i__5770__auto___50687 < len__5769__auto___50686)){
args__5775__auto__.push((arguments[i__5770__auto___50687]));

var G__50688 = (i__5770__auto___50687 + (1));
i__5770__auto___50687 = G__50688;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__50211__auto__,rest__50212__auto__){
var convert_case__50213__auto__ = (function (p1__50210__50214__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__50210__50214__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50212__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__50211__auto__,convert_case__50213__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq50403){
var G__50404 = cljs.core.first(seq50403);
var seq50403__$1 = cljs.core.next(seq50403);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50404,seq50403__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50689 = arguments.length;
var i__5770__auto___50690 = (0);
while(true){
if((i__5770__auto___50690 < len__5769__auto___50689)){
args__5775__auto__.push((arguments[i__5770__auto___50690]));

var G__50691 = (i__5770__auto___50690 + (1));
i__5770__auto___50690 = G__50691;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq50407){
var G__50408 = cljs.core.first(seq50407);
var seq50407__$1 = cljs.core.next(seq50407);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50408,seq50407__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50697 = arguments.length;
var i__5770__auto___50698 = (0);
while(true){
if((i__5770__auto___50698 < len__5769__auto___50697)){
args__5775__auto__.push((arguments[i__5770__auto___50698]));

var G__50699 = (i__5770__auto___50698 + (1));
i__5770__auto___50698 = G__50699;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq50419){
var G__50420 = cljs.core.first(seq50419);
var seq50419__$1 = cljs.core.next(seq50419);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50420,seq50419__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50705 = arguments.length;
var i__5770__auto___50706 = (0);
while(true){
if((i__5770__auto___50706 < len__5769__auto___50705)){
args__5775__auto__.push((arguments[i__5770__auto___50706]));

var G__50707 = (i__5770__auto___50706 + (1));
i__5770__auto___50706 = G__50707;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq50427){
var G__50428 = cljs.core.first(seq50427);
var seq50427__$1 = cljs.core.next(seq50427);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50428,seq50427__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50709 = arguments.length;
var i__5770__auto___50710 = (0);
while(true){
if((i__5770__auto___50710 < len__5769__auto___50709)){
args__5775__auto__.push((arguments[i__5770__auto___50710]));

var G__50711 = (i__5770__auto___50710 + (1));
i__5770__auto___50710 = G__50711;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__50211__auto__,rest__50212__auto__){
var convert_case__50213__auto__ = (function (p1__50210__50214__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__50210__50214__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50212__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__50211__auto__,convert_case__50213__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq50439){
var G__50440 = cljs.core.first(seq50439);
var seq50439__$1 = cljs.core.next(seq50439);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50440,seq50439__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50713 = arguments.length;
var i__5770__auto___50714 = (0);
while(true){
if((i__5770__auto___50714 < len__5769__auto___50713)){
args__5775__auto__.push((arguments[i__5770__auto___50714]));

var G__50715 = (i__5770__auto___50714 + (1));
i__5770__auto___50714 = G__50715;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq50447){
var G__50448 = cljs.core.first(seq50447);
var seq50447__$1 = cljs.core.next(seq50447);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50448,seq50447__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50716 = arguments.length;
var i__5770__auto___50717 = (0);
while(true){
if((i__5770__auto___50717 < len__5769__auto___50716)){
args__5775__auto__.push((arguments[i__5770__auto___50717]));

var G__50718 = (i__5770__auto___50717 + (1));
i__5770__auto___50717 = G__50718;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq50461){
var G__50463 = cljs.core.first(seq50461);
var seq50461__$1 = cljs.core.next(seq50461);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50463,seq50461__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50721 = arguments.length;
var i__5770__auto___50722 = (0);
while(true){
if((i__5770__auto___50722 < len__5769__auto___50721)){
args__5775__auto__.push((arguments[i__5770__auto___50722]));

var G__50724 = (i__5770__auto___50722 + (1));
i__5770__auto___50722 = G__50724;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq50470){
var G__50471 = cljs.core.first(seq50470);
var seq50470__$1 = cljs.core.next(seq50470);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50471,seq50470__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50732 = arguments.length;
var i__5770__auto___50733 = (0);
while(true){
if((i__5770__auto___50733 < len__5769__auto___50732)){
args__5775__auto__.push((arguments[i__5770__auto___50733]));

var G__50734 = (i__5770__auto___50733 + (1));
i__5770__auto___50733 = G__50734;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__50211__auto__,rest__50212__auto__){
var convert_case__50213__auto__ = (function (p1__50210__50214__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__50210__50214__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50212__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__50211__auto__,convert_case__50213__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq50490){
var G__50491 = cljs.core.first(seq50490);
var seq50490__$1 = cljs.core.next(seq50490);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50491,seq50490__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50744 = arguments.length;
var i__5770__auto___50745 = (0);
while(true){
if((i__5770__auto___50745 < len__5769__auto___50744)){
args__5775__auto__.push((arguments[i__5770__auto___50745]));

var G__50746 = (i__5770__auto___50745 + (1));
i__5770__auto___50745 = G__50746;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq50492){
var G__50493 = cljs.core.first(seq50492);
var seq50492__$1 = cljs.core.next(seq50492);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50493,seq50492__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50748 = arguments.length;
var i__5770__auto___50749 = (0);
while(true){
if((i__5770__auto___50749 < len__5769__auto___50748)){
args__5775__auto__.push((arguments[i__5770__auto___50749]));

var G__50750 = (i__5770__auto___50749 + (1));
i__5770__auto___50749 = G__50750;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq50503){
var G__50504 = cljs.core.first(seq50503);
var seq50503__$1 = cljs.core.next(seq50503);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50504,seq50503__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___50752 = arguments.length;
var i__5770__auto___50753 = (0);
while(true){
if((i__5770__auto___50753 < len__5769__auto___50752)){
args__5775__auto__.push((arguments[i__5770__auto___50753]));

var G__50754 = (i__5770__auto___50753 + (1));
i__5770__auto___50753 = G__50754;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__50216__auto__,rest__50217__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__50216__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__50217__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq50507){
var G__50508 = cljs.core.first(seq50507);
var seq50507__$1 = cljs.core.next(seq50507);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50508,seq50507__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
