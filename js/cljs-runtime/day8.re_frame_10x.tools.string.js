goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45708 = arguments.length;
var i__5770__auto___45709 = (0);
while(true){
if((i__5770__auto___45709 < len__5769__auto___45708)){
args__5775__auto__.push((arguments[i__5770__auto___45709]));

var G__45710 = (i__5770__auto___45709 + (1));
i__5770__auto___45709 = G__45710;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__45672){
var vec__45673 = p__45672;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45673,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq45669){
var G__45670 = cljs.core.first(seq45669);
var seq45669__$1 = cljs.core.next(seq45669);
var G__45671 = cljs.core.first(seq45669__$1);
var seq45669__$2 = cljs.core.next(seq45669__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45670,G__45671,seq45669__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45713 = arguments.length;
var i__5770__auto___45714 = (0);
while(true){
if((i__5770__auto___45714 < len__5769__auto___45713)){
args__5775__auto__.push((arguments[i__5770__auto___45714]));

var G__45715 = (i__5770__auto___45714 + (1));
i__5770__auto___45714 = G__45715;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__45694){
var vec__45695 = p__45694;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45695,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__5045__auto__ = plural;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq45689){
var G__45690 = cljs.core.first(seq45689);
var seq45689__$1 = cljs.core.next(seq45689);
var G__45691 = cljs.core.first(seq45689__$1);
var seq45689__$2 = cljs.core.next(seq45689__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45690,G__45691,seq45689__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
