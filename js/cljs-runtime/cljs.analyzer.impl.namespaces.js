goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__46544 = libspec;
var seq__46545 = cljs.core.seq(vec__46544);
var first__46546 = cljs.core.first(seq__46545);
var seq__46545__$1 = cljs.core.next(seq__46545);
var lib = first__46546;
var spec = seq__46545__$1;
var libspec__$1 = vec__46544;
var vec__46547 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46547,(0),null);
var vec__46550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46547,(1),null);
var seq__46551 = cljs.core.seq(vec__46550);
var first__46552 = cljs.core.first(seq__46551);
var seq__46551__$1 = cljs.core.next(seq__46551);
var _ = first__46552;
var first__46552__$1 = cljs.core.first(seq__46551__$1);
var seq__46551__$2 = cljs.core.next(seq__46551__$1);
var alias = first__46552__$1;
var post_spec = seq__46551__$2;
var post = vec__46550;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__46561 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46561,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__46561;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__46562 = cljs.core.seq(new_as_aliases);
var chunk__46563 = null;
var count__46564 = (0);
var i__46565 = (0);
while(true){
if((i__46565 < count__46564)){
var vec__46579 = chunk__46563.cljs$core$IIndexed$_nth$arity$2(null,i__46565);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46579,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46579,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__46628 = seq__46562;
var G__46629 = chunk__46563;
var G__46630 = count__46564;
var G__46631 = (i__46565 + (1));
seq__46562 = G__46628;
chunk__46563 = G__46629;
count__46564 = G__46630;
i__46565 = G__46631;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46562);
if(temp__5753__auto__){
var seq__46562__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46562__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46562__$1);
var G__46632 = cljs.core.chunk_rest(seq__46562__$1);
var G__46633 = c__5568__auto__;
var G__46634 = cljs.core.count(c__5568__auto__);
var G__46635 = (0);
seq__46562 = G__46632;
chunk__46563 = G__46633;
count__46564 = G__46634;
i__46565 = G__46635;
continue;
} else {
var vec__46588 = cljs.core.first(seq__46562__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46588,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46588,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__46637 = cljs.core.next(seq__46562__$1);
var G__46638 = null;
var G__46639 = (0);
var G__46640 = (0);
seq__46562 = G__46637;
chunk__46563 = G__46638;
count__46564 = G__46639;
i__46565 = G__46640;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__46592 = arguments.length;
switch (G__46592) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__46595 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__46595__$1 = cljs.core.__destructure_map(map__46595);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46595__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46595__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__46599 = ret__$1;
var G__46599__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46599,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__46599);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46599__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__46599__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46609,p__46610){
var map__46611 = p__46609;
var map__46611__$1 = cljs.core.__destructure_map(map__46611);
var ret__$1 = map__46611__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46611__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__46612 = p__46610;
var seq__46613 = cljs.core.seq(vec__46612);
var first__46614 = cljs.core.first(seq__46613);
var seq__46613__$1 = cljs.core.next(seq__46613);
var spec_key = first__46614;
var libspecs = seq__46613__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__46615 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__46615__$1 = cljs.core.__destructure_map(map__46615);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46615__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46615__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__46616 = ret__$1;
var G__46616__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46616,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__46616);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46616__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__46616__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
