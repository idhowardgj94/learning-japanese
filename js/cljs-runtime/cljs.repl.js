goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44513){
var map__44514 = p__44513;
var map__44514__$1 = cljs.core.__destructure_map(map__44514);
var m = map__44514__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44514__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44514__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__44524_44891 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44525_44892 = null;
var count__44526_44893 = (0);
var i__44527_44894 = (0);
while(true){
if((i__44527_44894 < count__44526_44893)){
var f_44896 = chunk__44525_44892.cljs$core$IIndexed$_nth$arity$2(null,i__44527_44894);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44896], 0));


var G__44897 = seq__44524_44891;
var G__44898 = chunk__44525_44892;
var G__44899 = count__44526_44893;
var G__44900 = (i__44527_44894 + (1));
seq__44524_44891 = G__44897;
chunk__44525_44892 = G__44898;
count__44526_44893 = G__44899;
i__44527_44894 = G__44900;
continue;
} else {
var temp__5753__auto___44902 = cljs.core.seq(seq__44524_44891);
if(temp__5753__auto___44902){
var seq__44524_44903__$1 = temp__5753__auto___44902;
if(cljs.core.chunked_seq_QMARK_(seq__44524_44903__$1)){
var c__5568__auto___44904 = cljs.core.chunk_first(seq__44524_44903__$1);
var G__44905 = cljs.core.chunk_rest(seq__44524_44903__$1);
var G__44906 = c__5568__auto___44904;
var G__44907 = cljs.core.count(c__5568__auto___44904);
var G__44908 = (0);
seq__44524_44891 = G__44905;
chunk__44525_44892 = G__44906;
count__44526_44893 = G__44907;
i__44527_44894 = G__44908;
continue;
} else {
var f_44909 = cljs.core.first(seq__44524_44903__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44909], 0));


var G__44910 = cljs.core.next(seq__44524_44903__$1);
var G__44911 = null;
var G__44912 = (0);
var G__44913 = (0);
seq__44524_44891 = G__44910;
chunk__44525_44892 = G__44911;
count__44526_44893 = G__44912;
i__44527_44894 = G__44913;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44914 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44914], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44914)))?cljs.core.second(arglists_44914):arglists_44914)], 0));
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
var seq__44540_44921 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44541_44922 = null;
var count__44542_44923 = (0);
var i__44543_44925 = (0);
while(true){
if((i__44543_44925 < count__44542_44923)){
var vec__44575_44926 = chunk__44541_44922.cljs$core$IIndexed$_nth$arity$2(null,i__44543_44925);
var name_44927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44575_44926,(0),null);
var map__44578_44928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44575_44926,(1),null);
var map__44578_44929__$1 = cljs.core.__destructure_map(map__44578_44928);
var doc_44930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44578_44929__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44578_44929__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44927], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44931], 0));

if(cljs.core.truth_(doc_44930)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44930], 0));
} else {
}


var G__44937 = seq__44540_44921;
var G__44938 = chunk__44541_44922;
var G__44939 = count__44542_44923;
var G__44940 = (i__44543_44925 + (1));
seq__44540_44921 = G__44937;
chunk__44541_44922 = G__44938;
count__44542_44923 = G__44939;
i__44543_44925 = G__44940;
continue;
} else {
var temp__5753__auto___44942 = cljs.core.seq(seq__44540_44921);
if(temp__5753__auto___44942){
var seq__44540_44944__$1 = temp__5753__auto___44942;
if(cljs.core.chunked_seq_QMARK_(seq__44540_44944__$1)){
var c__5568__auto___44945 = cljs.core.chunk_first(seq__44540_44944__$1);
var G__44946 = cljs.core.chunk_rest(seq__44540_44944__$1);
var G__44947 = c__5568__auto___44945;
var G__44948 = cljs.core.count(c__5568__auto___44945);
var G__44949 = (0);
seq__44540_44921 = G__44946;
chunk__44541_44922 = G__44947;
count__44542_44923 = G__44948;
i__44543_44925 = G__44949;
continue;
} else {
var vec__44588_44950 = cljs.core.first(seq__44540_44944__$1);
var name_44951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44588_44950,(0),null);
var map__44591_44952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44588_44950,(1),null);
var map__44591_44953__$1 = cljs.core.__destructure_map(map__44591_44952);
var doc_44954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44591_44953__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44591_44953__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44951], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_44955], 0));

if(cljs.core.truth_(doc_44954)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_44954], 0));
} else {
}


var G__44957 = cljs.core.next(seq__44540_44944__$1);
var G__44958 = null;
var G__44959 = (0);
var G__44960 = (0);
seq__44540_44921 = G__44957;
chunk__44541_44922 = G__44958;
count__44542_44923 = G__44959;
i__44543_44925 = G__44960;
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

var seq__44594 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44595 = null;
var count__44596 = (0);
var i__44597 = (0);
while(true){
if((i__44597 < count__44596)){
var role = chunk__44595.cljs$core$IIndexed$_nth$arity$2(null,i__44597);
var temp__5753__auto___44963__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___44963__$1)){
var spec_44965 = temp__5753__auto___44963__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44965)], 0));
} else {
}


var G__44966 = seq__44594;
var G__44967 = chunk__44595;
var G__44968 = count__44596;
var G__44969 = (i__44597 + (1));
seq__44594 = G__44966;
chunk__44595 = G__44967;
count__44596 = G__44968;
i__44597 = G__44969;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__44594);
if(temp__5753__auto____$1){
var seq__44594__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44594__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44594__$1);
var G__44974 = cljs.core.chunk_rest(seq__44594__$1);
var G__44975 = c__5568__auto__;
var G__44976 = cljs.core.count(c__5568__auto__);
var G__44977 = (0);
seq__44594 = G__44974;
chunk__44595 = G__44975;
count__44596 = G__44976;
i__44597 = G__44977;
continue;
} else {
var role = cljs.core.first(seq__44594__$1);
var temp__5753__auto___44979__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___44979__$2)){
var spec_44980 = temp__5753__auto___44979__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_44980)], 0));
} else {
}


var G__44982 = cljs.core.next(seq__44594__$1);
var G__44983 = null;
var G__44984 = (0);
var G__44985 = (0);
seq__44594 = G__44982;
chunk__44595 = G__44983;
count__44596 = G__44984;
i__44597 = G__44985;
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
var G__44987 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__44988 = cljs.core.ex_cause(t);
via = G__44987;
t = G__44988;
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
var map__44660 = datafied_throwable;
var map__44660__$1 = cljs.core.__destructure_map(map__44660);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44660__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44660__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44660__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44663 = cljs.core.last(via);
var map__44663__$1 = cljs.core.__destructure_map(map__44663);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44663__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44663__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44663__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44664 = data;
var map__44664__$1 = cljs.core.__destructure_map(map__44664);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44664__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44664__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44664__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44665 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44665__$1 = cljs.core.__destructure_map(map__44665);
var top_data = map__44665__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44665__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44681 = phase;
var G__44681__$1 = (((G__44681 instanceof cljs.core.Keyword))?G__44681.fqn:null);
switch (G__44681__$1) {
case "read-source":
var map__44687 = data;
var map__44687__$1 = cljs.core.__destructure_map(map__44687);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44687__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44687__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44689 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44689__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44689,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44689);
var G__44689__$2 = (cljs.core.truth_((function (){var fexpr__44699 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44699.cljs$core$IFn$_invoke$arity$1 ? fexpr__44699.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44699.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44689__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44689__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44689__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44689__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44701 = top_data;
var G__44701__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44701,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44701);
var G__44701__$2 = (cljs.core.truth_((function (){var fexpr__44702 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44702.cljs$core$IFn$_invoke$arity$1 ? fexpr__44702.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44702.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44701__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44701__$1);
var G__44701__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44701__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44701__$2);
var G__44701__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44701__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44701__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44701__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44701__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44704 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44704,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44704,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44704,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44704,(3),null);
var G__44714 = top_data;
var G__44714__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44714,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44714);
var G__44714__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44714__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44714__$1);
var G__44714__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44714__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44714__$2);
var G__44714__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44714__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44714__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44714__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44714__$4;
}

break;
case "execution":
var vec__44720 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44720,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44720,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44720,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44720,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44654_SHARP_){
var or__5045__auto__ = (p1__44654_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__44727 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44727.cljs$core$IFn$_invoke$arity$1 ? fexpr__44727.cljs$core$IFn$_invoke$arity$1(p1__44654_SHARP_) : fexpr__44727.call(null,p1__44654_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__44729 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44729__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44729,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44729);
var G__44729__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44729__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44729__$1);
var G__44729__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44729__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44729__$2);
var G__44729__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44729__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44729__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44729__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44729__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44681__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44740){
var map__44741 = p__44740;
var map__44741__$1 = cljs.core.__destructure_map(map__44741);
var triage_data = map__44741__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44741__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44741__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44741__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44741__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44741__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44741__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44741__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44741__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__44768 = phase;
var G__44768__$1 = (((G__44768 instanceof cljs.core.Keyword))?G__44768.fqn:null);
switch (G__44768__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44775 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44776 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44777 = loc;
var G__44778 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44782_45028 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44783_45029 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44784_45030 = true;
var _STAR_print_fn_STAR__temp_val__44785_45031 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44784_45030);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44785_45031);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44734_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44734_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44783_45029);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44782_45028);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44775,G__44776,G__44777,G__44778) : format.call(null,G__44775,G__44776,G__44777,G__44778));

break;
case "macroexpansion":
var G__44802 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44803 = cause_type;
var G__44804 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44805 = loc;
var G__44806 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44802,G__44803,G__44804,G__44805,G__44806) : format.call(null,G__44802,G__44803,G__44804,G__44805,G__44806));

break;
case "compile-syntax-check":
var G__44815 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44817 = cause_type;
var G__44818 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44819 = loc;
var G__44820 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44815,G__44817,G__44818,G__44819,G__44820) : format.call(null,G__44815,G__44817,G__44818,G__44819,G__44820));

break;
case "compilation":
var G__44830 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44831 = cause_type;
var G__44832 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44833 = loc;
var G__44834 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44830,G__44831,G__44832,G__44833,G__44834) : format.call(null,G__44830,G__44831,G__44832,G__44833,G__44834));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44843 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44844 = symbol;
var G__44845 = loc;
var G__44846 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44847_45039 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44848_45040 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44849_45041 = true;
var _STAR_print_fn_STAR__temp_val__44850_45042 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44849_45041);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44850_45042);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44737_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44737_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44848_45040);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44847_45039);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44843,G__44844,G__44845,G__44846) : format.call(null,G__44843,G__44844,G__44845,G__44846));
} else {
var G__44853 = "Execution error%s at %s(%s).\n%s\n";
var G__44855 = cause_type;
var G__44856 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44857 = loc;
var G__44858 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44853,G__44855,G__44856,G__44857,G__44858) : format.call(null,G__44853,G__44855,G__44856,G__44857,G__44858));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44768__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
