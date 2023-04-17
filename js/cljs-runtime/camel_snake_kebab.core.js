goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55747 = arguments.length;
var i__5770__auto___55748 = (0);
while(true){
if((i__5770__auto___55748 < len__5769__auto___55747)){
args__5775__auto__.push((arguments[i__5770__auto___55748]));

var G__55749 = (i__5770__auto___55748 + (1));
i__5770__auto___55748 = G__55749;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq55216){
var G__55217 = cljs.core.first(seq55216);
var seq55216__$1 = cljs.core.next(seq55216);
var G__55218 = cljs.core.first(seq55216__$1);
var seq55216__$2 = cljs.core.next(seq55216__$1);
var G__55219 = cljs.core.first(seq55216__$2);
var seq55216__$3 = cljs.core.next(seq55216__$2);
var G__55220 = cljs.core.first(seq55216__$3);
var seq55216__$4 = cljs.core.next(seq55216__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55217,G__55218,G__55219,G__55220,seq55216__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55750 = arguments.length;
var i__5770__auto___55751 = (0);
while(true){
if((i__5770__auto___55751 < len__5769__auto___55750)){
args__5775__auto__.push((arguments[i__5770__auto___55751]));

var G__55752 = (i__5770__auto___55751 + (1));
i__5770__auto___55751 = G__55752;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__55129__auto__,rest__55130__auto__){
var convert_case__55131__auto__ = (function (p1__55128__55132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__55128__55132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__55129__auto__,convert_case__55131__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq55244){
var G__55245 = cljs.core.first(seq55244);
var seq55244__$1 = cljs.core.next(seq55244);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55245,seq55244__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55753 = arguments.length;
var i__5770__auto___55754 = (0);
while(true){
if((i__5770__auto___55754 < len__5769__auto___55753)){
args__5775__auto__.push((arguments[i__5770__auto___55754]));

var G__55755 = (i__5770__auto___55754 + (1));
i__5770__auto___55754 = G__55755;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq55255){
var G__55256 = cljs.core.first(seq55255);
var seq55255__$1 = cljs.core.next(seq55255);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55256,seq55255__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55756 = arguments.length;
var i__5770__auto___55757 = (0);
while(true){
if((i__5770__auto___55757 < len__5769__auto___55756)){
args__5775__auto__.push((arguments[i__5770__auto___55757]));

var G__55758 = (i__5770__auto___55757 + (1));
i__5770__auto___55757 = G__55758;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq55270){
var G__55271 = cljs.core.first(seq55270);
var seq55270__$1 = cljs.core.next(seq55270);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55271,seq55270__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55759 = arguments.length;
var i__5770__auto___55760 = (0);
while(true){
if((i__5770__auto___55760 < len__5769__auto___55759)){
args__5775__auto__.push((arguments[i__5770__auto___55760]));

var G__55761 = (i__5770__auto___55760 + (1));
i__5770__auto___55760 = G__55761;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq55294){
var G__55295 = cljs.core.first(seq55294);
var seq55294__$1 = cljs.core.next(seq55294);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55295,seq55294__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55763 = arguments.length;
var i__5770__auto___55764 = (0);
while(true){
if((i__5770__auto___55764 < len__5769__auto___55763)){
args__5775__auto__.push((arguments[i__5770__auto___55764]));

var G__55765 = (i__5770__auto___55764 + (1));
i__5770__auto___55764 = G__55765;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__55129__auto__,rest__55130__auto__){
var convert_case__55131__auto__ = (function (p1__55128__55132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__55128__55132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__55129__auto__,convert_case__55131__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq55314){
var G__55315 = cljs.core.first(seq55314);
var seq55314__$1 = cljs.core.next(seq55314);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55315,seq55314__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55770 = arguments.length;
var i__5770__auto___55771 = (0);
while(true){
if((i__5770__auto___55771 < len__5769__auto___55770)){
args__5775__auto__.push((arguments[i__5770__auto___55771]));

var G__55772 = (i__5770__auto___55771 + (1));
i__5770__auto___55771 = G__55772;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq55342){
var G__55343 = cljs.core.first(seq55342);
var seq55342__$1 = cljs.core.next(seq55342);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55343,seq55342__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55773 = arguments.length;
var i__5770__auto___55774 = (0);
while(true){
if((i__5770__auto___55774 < len__5769__auto___55773)){
args__5775__auto__.push((arguments[i__5770__auto___55774]));

var G__55775 = (i__5770__auto___55774 + (1));
i__5770__auto___55774 = G__55775;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq55378){
var G__55379 = cljs.core.first(seq55378);
var seq55378__$1 = cljs.core.next(seq55378);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55379,seq55378__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55776 = arguments.length;
var i__5770__auto___55777 = (0);
while(true){
if((i__5770__auto___55777 < len__5769__auto___55776)){
args__5775__auto__.push((arguments[i__5770__auto___55777]));

var G__55778 = (i__5770__auto___55777 + (1));
i__5770__auto___55777 = G__55778;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq55420){
var G__55425 = cljs.core.first(seq55420);
var seq55420__$1 = cljs.core.next(seq55420);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55425,seq55420__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55779 = arguments.length;
var i__5770__auto___55780 = (0);
while(true){
if((i__5770__auto___55780 < len__5769__auto___55779)){
args__5775__auto__.push((arguments[i__5770__auto___55780]));

var G__55781 = (i__5770__auto___55780 + (1));
i__5770__auto___55780 = G__55781;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__55129__auto__,rest__55130__auto__){
var convert_case__55131__auto__ = (function (p1__55128__55132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__55128__55132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__55129__auto__,convert_case__55131__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq55470){
var G__55475 = cljs.core.first(seq55470);
var seq55470__$1 = cljs.core.next(seq55470);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55475,seq55470__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55782 = arguments.length;
var i__5770__auto___55783 = (0);
while(true){
if((i__5770__auto___55783 < len__5769__auto___55782)){
args__5775__auto__.push((arguments[i__5770__auto___55783]));

var G__55784 = (i__5770__auto___55783 + (1));
i__5770__auto___55783 = G__55784;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq55506){
var G__55507 = cljs.core.first(seq55506);
var seq55506__$1 = cljs.core.next(seq55506);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55507,seq55506__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55785 = arguments.length;
var i__5770__auto___55786 = (0);
while(true){
if((i__5770__auto___55786 < len__5769__auto___55785)){
args__5775__auto__.push((arguments[i__5770__auto___55786]));

var G__55787 = (i__5770__auto___55786 + (1));
i__5770__auto___55786 = G__55787;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq55549){
var G__55551 = cljs.core.first(seq55549);
var seq55549__$1 = cljs.core.next(seq55549);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55551,seq55549__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55788 = arguments.length;
var i__5770__auto___55789 = (0);
while(true){
if((i__5770__auto___55789 < len__5769__auto___55788)){
args__5775__auto__.push((arguments[i__5770__auto___55789]));

var G__55790 = (i__5770__auto___55789 + (1));
i__5770__auto___55789 = G__55790;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq55586){
var G__55587 = cljs.core.first(seq55586);
var seq55586__$1 = cljs.core.next(seq55586);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55587,seq55586__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55792 = arguments.length;
var i__5770__auto___55793 = (0);
while(true){
if((i__5770__auto___55793 < len__5769__auto___55792)){
args__5775__auto__.push((arguments[i__5770__auto___55793]));

var G__55794 = (i__5770__auto___55793 + (1));
i__5770__auto___55793 = G__55794;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__55129__auto__,rest__55130__auto__){
var convert_case__55131__auto__ = (function (p1__55128__55132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__55128__55132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__55129__auto__,convert_case__55131__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq55620){
var G__55621 = cljs.core.first(seq55620);
var seq55620__$1 = cljs.core.next(seq55620);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55621,seq55620__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55799 = arguments.length;
var i__5770__auto___55800 = (0);
while(true){
if((i__5770__auto___55800 < len__5769__auto___55799)){
args__5775__auto__.push((arguments[i__5770__auto___55800]));

var G__55801 = (i__5770__auto___55800 + (1));
i__5770__auto___55800 = G__55801;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq55624){
var G__55625 = cljs.core.first(seq55624);
var seq55624__$1 = cljs.core.next(seq55624);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55625,seq55624__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55802 = arguments.length;
var i__5770__auto___55803 = (0);
while(true){
if((i__5770__auto___55803 < len__5769__auto___55802)){
args__5775__auto__.push((arguments[i__5770__auto___55803]));

var G__55804 = (i__5770__auto___55803 + (1));
i__5770__auto___55803 = G__55804;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq55630){
var G__55631 = cljs.core.first(seq55630);
var seq55630__$1 = cljs.core.next(seq55630);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55631,seq55630__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55805 = arguments.length;
var i__5770__auto___55806 = (0);
while(true){
if((i__5770__auto___55806 < len__5769__auto___55805)){
args__5775__auto__.push((arguments[i__5770__auto___55806]));

var G__55807 = (i__5770__auto___55806 + (1));
i__5770__auto___55806 = G__55807;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq55639){
var G__55640 = cljs.core.first(seq55639);
var seq55639__$1 = cljs.core.next(seq55639);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55640,seq55639__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55808 = arguments.length;
var i__5770__auto___55809 = (0);
while(true){
if((i__5770__auto___55809 < len__5769__auto___55808)){
args__5775__auto__.push((arguments[i__5770__auto___55809]));

var G__55810 = (i__5770__auto___55809 + (1));
i__5770__auto___55809 = G__55810;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__55129__auto__,rest__55130__auto__){
var convert_case__55131__auto__ = (function (p1__55128__55132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__55128__55132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__55129__auto__,convert_case__55131__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq55645){
var G__55646 = cljs.core.first(seq55645);
var seq55645__$1 = cljs.core.next(seq55645);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55646,seq55645__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55811 = arguments.length;
var i__5770__auto___55812 = (0);
while(true){
if((i__5770__auto___55812 < len__5769__auto___55811)){
args__5775__auto__.push((arguments[i__5770__auto___55812]));

var G__55813 = (i__5770__auto___55812 + (1));
i__5770__auto___55812 = G__55813;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq55652){
var G__55653 = cljs.core.first(seq55652);
var seq55652__$1 = cljs.core.next(seq55652);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55653,seq55652__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55814 = arguments.length;
var i__5770__auto___55815 = (0);
while(true){
if((i__5770__auto___55815 < len__5769__auto___55814)){
args__5775__auto__.push((arguments[i__5770__auto___55815]));

var G__55816 = (i__5770__auto___55815 + (1));
i__5770__auto___55815 = G__55816;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq55657){
var G__55658 = cljs.core.first(seq55657);
var seq55657__$1 = cljs.core.next(seq55657);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55658,seq55657__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55817 = arguments.length;
var i__5770__auto___55818 = (0);
while(true){
if((i__5770__auto___55818 < len__5769__auto___55817)){
args__5775__auto__.push((arguments[i__5770__auto___55818]));

var G__55819 = (i__5770__auto___55818 + (1));
i__5770__auto___55818 = G__55819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq55665){
var G__55666 = cljs.core.first(seq55665);
var seq55665__$1 = cljs.core.next(seq55665);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55666,seq55665__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55820 = arguments.length;
var i__5770__auto___55821 = (0);
while(true){
if((i__5770__auto___55821 < len__5769__auto___55820)){
args__5775__auto__.push((arguments[i__5770__auto___55821]));

var G__55822 = (i__5770__auto___55821 + (1));
i__5770__auto___55821 = G__55822;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__55129__auto__,rest__55130__auto__){
var convert_case__55131__auto__ = (function (p1__55128__55132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__55128__55132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__55129__auto__,convert_case__55131__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq55667){
var G__55668 = cljs.core.first(seq55667);
var seq55667__$1 = cljs.core.next(seq55667);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55668,seq55667__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55833 = arguments.length;
var i__5770__auto___55834 = (0);
while(true){
if((i__5770__auto___55834 < len__5769__auto___55833)){
args__5775__auto__.push((arguments[i__5770__auto___55834]));

var G__55835 = (i__5770__auto___55834 + (1));
i__5770__auto___55834 = G__55835;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq55669){
var G__55670 = cljs.core.first(seq55669);
var seq55669__$1 = cljs.core.next(seq55669);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55670,seq55669__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55836 = arguments.length;
var i__5770__auto___55837 = (0);
while(true){
if((i__5770__auto___55837 < len__5769__auto___55836)){
args__5775__auto__.push((arguments[i__5770__auto___55837]));

var G__55838 = (i__5770__auto___55837 + (1));
i__5770__auto___55837 = G__55838;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq55671){
var G__55672 = cljs.core.first(seq55671);
var seq55671__$1 = cljs.core.next(seq55671);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55672,seq55671__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55840 = arguments.length;
var i__5770__auto___55841 = (0);
while(true){
if((i__5770__auto___55841 < len__5769__auto___55840)){
args__5775__auto__.push((arguments[i__5770__auto___55841]));

var G__55842 = (i__5770__auto___55841 + (1));
i__5770__auto___55841 = G__55842;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq55677){
var G__55678 = cljs.core.first(seq55677);
var seq55677__$1 = cljs.core.next(seq55677);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55678,seq55677__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55843 = arguments.length;
var i__5770__auto___55844 = (0);
while(true){
if((i__5770__auto___55844 < len__5769__auto___55843)){
args__5775__auto__.push((arguments[i__5770__auto___55844]));

var G__55845 = (i__5770__auto___55844 + (1));
i__5770__auto___55844 = G__55845;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__55129__auto__,rest__55130__auto__){
var convert_case__55131__auto__ = (function (p1__55128__55132__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__55128__55132__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55130__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__55129__auto__,convert_case__55131__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq55691){
var G__55692 = cljs.core.first(seq55691);
var seq55691__$1 = cljs.core.next(seq55691);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55692,seq55691__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55850 = arguments.length;
var i__5770__auto___55851 = (0);
while(true){
if((i__5770__auto___55851 < len__5769__auto___55850)){
args__5775__auto__.push((arguments[i__5770__auto___55851]));

var G__55852 = (i__5770__auto___55851 + (1));
i__5770__auto___55851 = G__55852;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq55704){
var G__55705 = cljs.core.first(seq55704);
var seq55704__$1 = cljs.core.next(seq55704);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55705,seq55704__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55854 = arguments.length;
var i__5770__auto___55855 = (0);
while(true){
if((i__5770__auto___55855 < len__5769__auto___55854)){
args__5775__auto__.push((arguments[i__5770__auto___55855]));

var G__55856 = (i__5770__auto___55855 + (1));
i__5770__auto___55855 = G__55856;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq55716){
var G__55717 = cljs.core.first(seq55716);
var seq55716__$1 = cljs.core.next(seq55716);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55717,seq55716__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55857 = arguments.length;
var i__5770__auto___55858 = (0);
while(true){
if((i__5770__auto___55858 < len__5769__auto___55857)){
args__5775__auto__.push((arguments[i__5770__auto___55858]));

var G__55859 = (i__5770__auto___55858 + (1));
i__5770__auto___55858 = G__55859;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__55137__auto__,rest__55138__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__55137__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__55138__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq55726){
var G__55727 = cljs.core.first(seq55726);
var seq55726__$1 = cljs.core.next(seq55726);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55727,seq55726__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
