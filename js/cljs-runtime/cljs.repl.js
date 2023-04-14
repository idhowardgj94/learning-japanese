goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45501){
var map__45502 = p__45501;
var map__45502__$1 = cljs.core.__destructure_map(map__45502);
var m = map__45502__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45502__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45502__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45531_45890 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45532_45891 = null;
var count__45533_45892 = (0);
var i__45534_45893 = (0);
while(true){
if((i__45534_45893 < count__45533_45892)){
var f_45894 = chunk__45532_45891.cljs$core$IIndexed$_nth$arity$2(null,i__45534_45893);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45894], 0));


var G__45895 = seq__45531_45890;
var G__45896 = chunk__45532_45891;
var G__45897 = count__45533_45892;
var G__45898 = (i__45534_45893 + (1));
seq__45531_45890 = G__45895;
chunk__45532_45891 = G__45896;
count__45533_45892 = G__45897;
i__45534_45893 = G__45898;
continue;
} else {
var temp__5753__auto___45900 = cljs.core.seq(seq__45531_45890);
if(temp__5753__auto___45900){
var seq__45531_45901__$1 = temp__5753__auto___45900;
if(cljs.core.chunked_seq_QMARK_(seq__45531_45901__$1)){
var c__5568__auto___45902 = cljs.core.chunk_first(seq__45531_45901__$1);
var G__45903 = cljs.core.chunk_rest(seq__45531_45901__$1);
var G__45904 = c__5568__auto___45902;
var G__45905 = cljs.core.count(c__5568__auto___45902);
var G__45906 = (0);
seq__45531_45890 = G__45903;
chunk__45532_45891 = G__45904;
count__45533_45892 = G__45905;
i__45534_45893 = G__45906;
continue;
} else {
var f_45907 = cljs.core.first(seq__45531_45901__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45907], 0));


var G__45908 = cljs.core.next(seq__45531_45901__$1);
var G__45909 = null;
var G__45910 = (0);
var G__45911 = (0);
seq__45531_45890 = G__45908;
chunk__45532_45891 = G__45909;
count__45533_45892 = G__45910;
i__45534_45893 = G__45911;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45912 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45912], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45912)))?cljs.core.second(arglists_45912):arglists_45912)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45602_45915 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45603_45916 = null;
var count__45604_45917 = (0);
var i__45605_45918 = (0);
while(true){
if((i__45605_45918 < count__45604_45917)){
var vec__45624_45924 = chunk__45603_45916.cljs$core$IIndexed$_nth$arity$2(null,i__45605_45918);
var name_45925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45624_45924,(0),null);
var map__45627_45926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45624_45924,(1),null);
var map__45627_45927__$1 = cljs.core.__destructure_map(map__45627_45926);
var doc_45928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45627_45927__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45627_45927__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45925], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45929], 0));

if(cljs.core.truth_(doc_45928)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45928], 0));
} else {
}


var G__45932 = seq__45602_45915;
var G__45933 = chunk__45603_45916;
var G__45934 = count__45604_45917;
var G__45935 = (i__45605_45918 + (1));
seq__45602_45915 = G__45932;
chunk__45603_45916 = G__45933;
count__45604_45917 = G__45934;
i__45605_45918 = G__45935;
continue;
} else {
var temp__5753__auto___45936 = cljs.core.seq(seq__45602_45915);
if(temp__5753__auto___45936){
var seq__45602_45937__$1 = temp__5753__auto___45936;
if(cljs.core.chunked_seq_QMARK_(seq__45602_45937__$1)){
var c__5568__auto___45938 = cljs.core.chunk_first(seq__45602_45937__$1);
var G__45939 = cljs.core.chunk_rest(seq__45602_45937__$1);
var G__45940 = c__5568__auto___45938;
var G__45941 = cljs.core.count(c__5568__auto___45938);
var G__45942 = (0);
seq__45602_45915 = G__45939;
chunk__45603_45916 = G__45940;
count__45604_45917 = G__45941;
i__45605_45918 = G__45942;
continue;
} else {
var vec__45637_45944 = cljs.core.first(seq__45602_45937__$1);
var name_45945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45637_45944,(0),null);
var map__45640_45946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45637_45944,(1),null);
var map__45640_45947__$1 = cljs.core.__destructure_map(map__45640_45946);
var doc_45948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45640_45947__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45640_45947__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45945], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45949], 0));

if(cljs.core.truth_(doc_45948)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45948], 0));
} else {
}


var G__45953 = cljs.core.next(seq__45602_45937__$1);
var G__45954 = null;
var G__45955 = (0);
var G__45956 = (0);
seq__45602_45915 = G__45953;
chunk__45603_45916 = G__45954;
count__45604_45917 = G__45955;
i__45605_45918 = G__45956;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45652 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45653 = null;
var count__45654 = (0);
var i__45655 = (0);
while(true){
if((i__45655 < count__45654)){
var role = chunk__45653.cljs$core$IIndexed$_nth$arity$2(null,i__45655);
var temp__5753__auto___45962__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___45962__$1)){
var spec_45963 = temp__5753__auto___45962__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45963)], 0));
} else {
}


var G__45964 = seq__45652;
var G__45965 = chunk__45653;
var G__45966 = count__45654;
var G__45967 = (i__45655 + (1));
seq__45652 = G__45964;
chunk__45653 = G__45965;
count__45654 = G__45966;
i__45655 = G__45967;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__45652);
if(temp__5753__auto____$1){
var seq__45652__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45652__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45652__$1);
var G__45969 = cljs.core.chunk_rest(seq__45652__$1);
var G__45970 = c__5568__auto__;
var G__45971 = cljs.core.count(c__5568__auto__);
var G__45972 = (0);
seq__45652 = G__45969;
chunk__45653 = G__45970;
count__45654 = G__45971;
i__45655 = G__45972;
continue;
} else {
var role = cljs.core.first(seq__45652__$1);
var temp__5753__auto___45973__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___45973__$2)){
var spec_45974 = temp__5753__auto___45973__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45974)], 0));
} else {
}


var G__45976 = cljs.core.next(seq__45652__$1);
var G__45977 = null;
var G__45978 = (0);
var G__45979 = (0);
seq__45652 = G__45976;
chunk__45653 = G__45977;
count__45654 = G__45978;
i__45655 = G__45979;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45997 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45998 = cljs.core.ex_cause(t);
via = G__45997;
t = G__45998;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45698 = datafied_throwable;
var map__45698__$1 = cljs.core.__destructure_map(map__45698);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45698__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45698__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45698__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45699 = cljs.core.last(via);
var map__45699__$1 = cljs.core.__destructure_map(map__45699);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45699__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45699__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45699__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45700 = data;
var map__45700__$1 = cljs.core.__destructure_map(map__45700);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45700__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45700__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45700__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45701 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45701__$1 = cljs.core.__destructure_map(map__45701);
var top_data = map__45701__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45701__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45706 = phase;
var G__45706__$1 = (((G__45706 instanceof cljs.core.Keyword))?G__45706.fqn:null);
switch (G__45706__$1) {
case "read-source":
var map__45707 = data;
var map__45707__$1 = cljs.core.__destructure_map(map__45707);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45707__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45707__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45709 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45709__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45709,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45709);
var G__45709__$2 = (cljs.core.truth_((function (){var fexpr__45713 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45713.cljs$core$IFn$_invoke$arity$1 ? fexpr__45713.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45713.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45709__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45709__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45709__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45709__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45735 = top_data;
var G__45735__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45735,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45735);
var G__45735__$2 = (cljs.core.truth_((function (){var fexpr__45736 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45736.cljs$core$IFn$_invoke$arity$1 ? fexpr__45736.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45736.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45735__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45735__$1);
var G__45735__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45735__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45735__$2);
var G__45735__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45735__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45735__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45735__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45735__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45741 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45741,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45741,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45741,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45741,(3),null);
var G__45745 = top_data;
var G__45745__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45745,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45745);
var G__45745__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45745__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45745__$1);
var G__45745__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45745__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45745__$2);
var G__45745__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45745__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45745__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45745__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45745__$4;
}

break;
case "execution":
var vec__45760 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45760,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45760,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45760,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45760,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45690_SHARP_){
var or__5045__auto__ = (p1__45690_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__45764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45764.cljs$core$IFn$_invoke$arity$1 ? fexpr__45764.cljs$core$IFn$_invoke$arity$1(p1__45690_SHARP_) : fexpr__45764.call(null,p1__45690_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__45765 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45765__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45765,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45765);
var G__45765__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45765__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45765__$1);
var G__45765__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45765__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45765__$2);
var G__45765__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45765__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45765__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45765__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45765__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45706__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45777){
var map__45778 = p__45777;
var map__45778__$1 = cljs.core.__destructure_map(map__45778);
var triage_data = map__45778__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45778__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45778__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45778__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45778__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45778__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45778__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45778__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45778__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45815 = phase;
var G__45815__$1 = (((G__45815 instanceof cljs.core.Keyword))?G__45815.fqn:null);
switch (G__45815__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45817 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45818 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45819 = loc;
var G__45820 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45823_46044 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45824_46045 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45825_46046 = true;
var _STAR_print_fn_STAR__temp_val__45826_46047 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45825_46046);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45826_46047);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45773_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45773_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45824_46045);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45823_46044);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45817,G__45818,G__45819,G__45820) : format.call(null,G__45817,G__45818,G__45819,G__45820));

break;
case "macroexpansion":
var G__45833 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45834 = cause_type;
var G__45835 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45836 = loc;
var G__45837 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45833,G__45834,G__45835,G__45836,G__45837) : format.call(null,G__45833,G__45834,G__45835,G__45836,G__45837));

break;
case "compile-syntax-check":
var G__45838 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45839 = cause_type;
var G__45840 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45841 = loc;
var G__45842 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45838,G__45839,G__45840,G__45841,G__45842) : format.call(null,G__45838,G__45839,G__45840,G__45841,G__45842));

break;
case "compilation":
var G__45844 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45845 = cause_type;
var G__45846 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45847 = loc;
var G__45848 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45844,G__45845,G__45846,G__45847,G__45848) : format.call(null,G__45844,G__45845,G__45846,G__45847,G__45848));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45856 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45857 = symbol;
var G__45858 = loc;
var G__45859 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45861_46052 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45862_46053 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45863_46054 = true;
var _STAR_print_fn_STAR__temp_val__45865_46055 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45863_46054);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45865_46055);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45776_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45776_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45862_46053);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45861_46052);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45856,G__45857,G__45858,G__45859) : format.call(null,G__45856,G__45857,G__45858,G__45859));
} else {
var G__45880 = "Execution error%s at %s(%s).\n%s\n";
var G__45881 = cause_type;
var G__45882 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45883 = loc;
var G__45884 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45880,G__45881,G__45882,G__45883,G__45884) : format.call(null,G__45880,G__45881,G__45882,G__45883,G__45884));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45815__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
