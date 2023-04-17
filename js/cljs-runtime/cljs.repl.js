goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49004){
var map__49005 = p__49004;
var map__49005__$1 = cljs.core.__destructure_map(map__49005);
var m = map__49005__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49005__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49005__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49017_49283 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49018_49284 = null;
var count__49019_49285 = (0);
var i__49020_49286 = (0);
while(true){
if((i__49020_49286 < count__49019_49285)){
var f_49288 = chunk__49018_49284.cljs$core$IIndexed$_nth$arity$2(null,i__49020_49286);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49288], 0));


var G__49289 = seq__49017_49283;
var G__49290 = chunk__49018_49284;
var G__49291 = count__49019_49285;
var G__49292 = (i__49020_49286 + (1));
seq__49017_49283 = G__49289;
chunk__49018_49284 = G__49290;
count__49019_49285 = G__49291;
i__49020_49286 = G__49292;
continue;
} else {
var temp__5753__auto___49293 = cljs.core.seq(seq__49017_49283);
if(temp__5753__auto___49293){
var seq__49017_49294__$1 = temp__5753__auto___49293;
if(cljs.core.chunked_seq_QMARK_(seq__49017_49294__$1)){
var c__5568__auto___49295 = cljs.core.chunk_first(seq__49017_49294__$1);
var G__49296 = cljs.core.chunk_rest(seq__49017_49294__$1);
var G__49297 = c__5568__auto___49295;
var G__49298 = cljs.core.count(c__5568__auto___49295);
var G__49299 = (0);
seq__49017_49283 = G__49296;
chunk__49018_49284 = G__49297;
count__49019_49285 = G__49298;
i__49020_49286 = G__49299;
continue;
} else {
var f_49300 = cljs.core.first(seq__49017_49294__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49300], 0));


var G__49301 = cljs.core.next(seq__49017_49294__$1);
var G__49302 = null;
var G__49303 = (0);
var G__49304 = (0);
seq__49017_49283 = G__49301;
chunk__49018_49284 = G__49302;
count__49019_49285 = G__49303;
i__49020_49286 = G__49304;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49306 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49306], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49306)))?cljs.core.second(arglists_49306):arglists_49306)], 0));
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
var seq__49037_49310 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49038_49311 = null;
var count__49039_49312 = (0);
var i__49040_49313 = (0);
while(true){
if((i__49040_49313 < count__49039_49312)){
var vec__49057_49314 = chunk__49038_49311.cljs$core$IIndexed$_nth$arity$2(null,i__49040_49313);
var name_49315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49057_49314,(0),null);
var map__49060_49316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49057_49314,(1),null);
var map__49060_49317__$1 = cljs.core.__destructure_map(map__49060_49316);
var doc_49318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49060_49317__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49060_49317__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49315], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49319], 0));

if(cljs.core.truth_(doc_49318)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49318], 0));
} else {
}


var G__49321 = seq__49037_49310;
var G__49322 = chunk__49038_49311;
var G__49323 = count__49039_49312;
var G__49324 = (i__49040_49313 + (1));
seq__49037_49310 = G__49321;
chunk__49038_49311 = G__49322;
count__49039_49312 = G__49323;
i__49040_49313 = G__49324;
continue;
} else {
var temp__5753__auto___49325 = cljs.core.seq(seq__49037_49310);
if(temp__5753__auto___49325){
var seq__49037_49326__$1 = temp__5753__auto___49325;
if(cljs.core.chunked_seq_QMARK_(seq__49037_49326__$1)){
var c__5568__auto___49327 = cljs.core.chunk_first(seq__49037_49326__$1);
var G__49328 = cljs.core.chunk_rest(seq__49037_49326__$1);
var G__49329 = c__5568__auto___49327;
var G__49330 = cljs.core.count(c__5568__auto___49327);
var G__49331 = (0);
seq__49037_49310 = G__49328;
chunk__49038_49311 = G__49329;
count__49039_49312 = G__49330;
i__49040_49313 = G__49331;
continue;
} else {
var vec__49064_49333 = cljs.core.first(seq__49037_49326__$1);
var name_49334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49064_49333,(0),null);
var map__49067_49335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49064_49333,(1),null);
var map__49067_49336__$1 = cljs.core.__destructure_map(map__49067_49335);
var doc_49337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49067_49336__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49067_49336__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49334], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49338], 0));

if(cljs.core.truth_(doc_49337)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49337], 0));
} else {
}


var G__49343 = cljs.core.next(seq__49037_49326__$1);
var G__49344 = null;
var G__49345 = (0);
var G__49346 = (0);
seq__49037_49310 = G__49343;
chunk__49038_49311 = G__49344;
count__49039_49312 = G__49345;
i__49040_49313 = G__49346;
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

var seq__49069 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49070 = null;
var count__49071 = (0);
var i__49072 = (0);
while(true){
if((i__49072 < count__49071)){
var role = chunk__49070.cljs$core$IIndexed$_nth$arity$2(null,i__49072);
var temp__5753__auto___49354__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49354__$1)){
var spec_49355 = temp__5753__auto___49354__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49355)], 0));
} else {
}


var G__49356 = seq__49069;
var G__49357 = chunk__49070;
var G__49358 = count__49071;
var G__49359 = (i__49072 + (1));
seq__49069 = G__49356;
chunk__49070 = G__49357;
count__49071 = G__49358;
i__49072 = G__49359;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49069);
if(temp__5753__auto____$1){
var seq__49069__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49069__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49069__$1);
var G__49361 = cljs.core.chunk_rest(seq__49069__$1);
var G__49362 = c__5568__auto__;
var G__49363 = cljs.core.count(c__5568__auto__);
var G__49364 = (0);
seq__49069 = G__49361;
chunk__49070 = G__49362;
count__49071 = G__49363;
i__49072 = G__49364;
continue;
} else {
var role = cljs.core.first(seq__49069__$1);
var temp__5753__auto___49365__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49365__$2)){
var spec_49370 = temp__5753__auto___49365__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49370)], 0));
} else {
}


var G__49375 = cljs.core.next(seq__49069__$1);
var G__49376 = null;
var G__49377 = (0);
var G__49378 = (0);
seq__49069 = G__49375;
chunk__49070 = G__49376;
count__49071 = G__49377;
i__49072 = G__49378;
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
var G__49385 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49386 = cljs.core.ex_cause(t);
via = G__49385;
t = G__49386;
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
var map__49114 = datafied_throwable;
var map__49114__$1 = cljs.core.__destructure_map(map__49114);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49114__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49114__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49114__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49115 = cljs.core.last(via);
var map__49115__$1 = cljs.core.__destructure_map(map__49115);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49115__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49115__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49115__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49116 = data;
var map__49116__$1 = cljs.core.__destructure_map(map__49116);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49116__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49116__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49116__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49117 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49117__$1 = cljs.core.__destructure_map(map__49117);
var top_data = map__49117__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49117__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49124 = phase;
var G__49124__$1 = (((G__49124 instanceof cljs.core.Keyword))?G__49124.fqn:null);
switch (G__49124__$1) {
case "read-source":
var map__49126 = data;
var map__49126__$1 = cljs.core.__destructure_map(map__49126);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49126__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49126__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49133 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49133__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49133,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49133);
var G__49133__$2 = (cljs.core.truth_((function (){var fexpr__49135 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49135.cljs$core$IFn$_invoke$arity$1 ? fexpr__49135.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49135.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49133__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49133__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49133__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49133__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49137 = top_data;
var G__49137__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49137,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49137);
var G__49137__$2 = (cljs.core.truth_((function (){var fexpr__49138 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49138.cljs$core$IFn$_invoke$arity$1 ? fexpr__49138.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49138.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49137__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49137__$1);
var G__49137__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49137__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49137__$2);
var G__49137__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49137__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49137__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49137__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49137__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49143 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49143,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49143,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49143,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49143,(3),null);
var G__49148 = top_data;
var G__49148__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49148,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49148);
var G__49148__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49148__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49148__$1);
var G__49148__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49148__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49148__$2);
var G__49148__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49148__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49148__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49148__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49148__$4;
}

break;
case "execution":
var vec__49151 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49107_SHARP_){
var or__5045__auto__ = (p1__49107_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__49158 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49158.cljs$core$IFn$_invoke$arity$1 ? fexpr__49158.cljs$core$IFn$_invoke$arity$1(p1__49107_SHARP_) : fexpr__49158.call(null,p1__49107_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__49162 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49162__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49162,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49162);
var G__49162__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49162__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49162__$1);
var G__49162__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49162__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49162__$2);
var G__49162__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49162__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49162__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49162__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49162__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49124__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49184){
var map__49186 = p__49184;
var map__49186__$1 = cljs.core.__destructure_map(map__49186);
var triage_data = map__49186__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49186__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__49194 = phase;
var G__49194__$1 = (((G__49194 instanceof cljs.core.Keyword))?G__49194.fqn:null);
switch (G__49194__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49196 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49197 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49198 = loc;
var G__49199 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49209_49435 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49210_49436 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49211_49437 = true;
var _STAR_print_fn_STAR__temp_val__49212_49438 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49211_49437);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49212_49438);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49182_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49182_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49210_49436);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49209_49435);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49196,G__49197,G__49198,G__49199) : format.call(null,G__49196,G__49197,G__49198,G__49199));

break;
case "macroexpansion":
var G__49228 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49229 = cause_type;
var G__49230 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49231 = loc;
var G__49232 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49228,G__49229,G__49230,G__49231,G__49232) : format.call(null,G__49228,G__49229,G__49230,G__49231,G__49232));

break;
case "compile-syntax-check":
var G__49234 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49235 = cause_type;
var G__49236 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49237 = loc;
var G__49238 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49234,G__49235,G__49236,G__49237,G__49238) : format.call(null,G__49234,G__49235,G__49236,G__49237,G__49238));

break;
case "compilation":
var G__49239 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49240 = cause_type;
var G__49241 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49242 = loc;
var G__49243 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49239,G__49240,G__49241,G__49242,G__49243) : format.call(null,G__49239,G__49240,G__49241,G__49242,G__49243));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49245 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49246 = symbol;
var G__49247 = loc;
var G__49248 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49249_49455 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49250_49456 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49251_49457 = true;
var _STAR_print_fn_STAR__temp_val__49252_49458 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49251_49457);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49252_49458);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49183_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49183_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49250_49456);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49249_49455);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49245,G__49246,G__49247,G__49248) : format.call(null,G__49245,G__49246,G__49247,G__49248));
} else {
var G__49267 = "Execution error%s at %s(%s).\n%s\n";
var G__49268 = cause_type;
var G__49269 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49270 = loc;
var G__49271 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49267,G__49268,G__49269,G__49270,G__49271) : format.call(null,G__49267,G__49268,G__49269,G__49270,G__49271));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49194__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
