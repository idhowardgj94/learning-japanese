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
var vec__53616 = libspec;
var seq__53617 = cljs.core.seq(vec__53616);
var first__53618 = cljs.core.first(seq__53617);
var seq__53617__$1 = cljs.core.next(seq__53617);
var lib = first__53618;
var spec = seq__53617__$1;
var libspec__$1 = vec__53616;
var vec__53619 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53619,(0),null);
var vec__53622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53619,(1),null);
var seq__53623 = cljs.core.seq(vec__53622);
var first__53624 = cljs.core.first(seq__53623);
var seq__53623__$1 = cljs.core.next(seq__53623);
var _ = first__53624;
var first__53624__$1 = cljs.core.first(seq__53623__$1);
var seq__53623__$2 = cljs.core.next(seq__53623__$1);
var alias = first__53624__$1;
var post_spec = seq__53623__$2;
var post = vec__53622;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__53632 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53632,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__53632;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__53642 = cljs.core.seq(new_as_aliases);
var chunk__53643 = null;
var count__53644 = (0);
var i__53645 = (0);
while(true){
if((i__53645 < count__53644)){
var vec__53659 = chunk__53643.cljs$core$IIndexed$_nth$arity$2(null,i__53645);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53659,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53659,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__53727 = seq__53642;
var G__53728 = chunk__53643;
var G__53729 = count__53644;
var G__53730 = (i__53645 + (1));
seq__53642 = G__53727;
chunk__53643 = G__53728;
count__53644 = G__53729;
i__53645 = G__53730;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53642);
if(temp__5753__auto__){
var seq__53642__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53642__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53642__$1);
var G__53731 = cljs.core.chunk_rest(seq__53642__$1);
var G__53732 = c__5568__auto__;
var G__53733 = cljs.core.count(c__5568__auto__);
var G__53734 = (0);
seq__53642 = G__53731;
chunk__53643 = G__53732;
count__53644 = G__53733;
i__53645 = G__53734;
continue;
} else {
var vec__53669 = cljs.core.first(seq__53642__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53669,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53669,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__53735 = cljs.core.next(seq__53642__$1);
var G__53736 = null;
var G__53737 = (0);
var G__53738 = (0);
seq__53642 = G__53735;
chunk__53643 = G__53736;
count__53644 = G__53737;
i__53645 = G__53738;
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
var G__53679 = arguments.length;
switch (G__53679) {
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
var map__53684 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__53684__$1 = cljs.core.__destructure_map(map__53684);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53684__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53684__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__53688 = ret__$1;
var G__53688__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53688,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__53688);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53688__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__53688__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__53701,p__53702){
var map__53704 = p__53701;
var map__53704__$1 = cljs.core.__destructure_map(map__53704);
var ret__$1 = map__53704__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53704__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__53705 = p__53702;
var seq__53706 = cljs.core.seq(vec__53705);
var first__53707 = cljs.core.first(seq__53706);
var seq__53706__$1 = cljs.core.next(seq__53706);
var spec_key = first__53707;
var libspecs = seq__53706__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__53708 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__53708__$1 = cljs.core.__destructure_map(map__53708);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53708__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53708__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__53709 = ret__$1;
var G__53709__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53709,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__53709);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53709__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__53709__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
