goog.provide('cljss.core');
cljss.core.sheets = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljss.sheet.create_sheet(),null,(1),null)));
cljss.core.remove_styles_BANG_ = (function cljss$core$remove_styles_BANG_(){
cljs.core.run_BANG_(cljss.sheet.flush_BANG_,cljs.core.deref(cljss.core.sheets));

return cljs.core.reset_BANG_(cljss.core.sheets,(new cljs.core.List(null,cljss.sheet.create_sheet(),null,(1),null)));
});
/**
 * Takes class name, static styles and dynamic styles.
 * Injects styles and returns a string of generated class names.
 */
cljss.core.css = (function cljss$core$css(cls,static$,vars){
var static$__$1 = ((typeof static$ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [static$], null):static$);
var sheet = cljs.core.first(cljs.core.deref(cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_(sheet))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet());

return (cljss.core.css.cljs$core$IFn$_invoke$arity$3 ? cljss.core.css.cljs$core$IFn$_invoke$arity$3(cls,static$__$1,vars) : cljss.core.css.call(null,cls,static$__$1,vars));
} else {
var G__51153_51265 = static$__$1;
var vec__51156_51266 = G__51153_51265;
var seq__51157_51267 = cljs.core.seq(vec__51156_51266);
var first__51158_51268 = cljs.core.first(seq__51157_51267);
var seq__51157_51269__$1 = cljs.core.next(seq__51157_51267);
var s_51270 = first__51158_51268;
var static_51271__$2 = seq__51157_51269__$1;
var idx_51272 = (0);
var G__51153_51278__$1 = G__51153_51265;
var idx_51279__$1 = idx_51272;
while(true){
var vec__51167_51281 = G__51153_51278__$1;
var seq__51169_51282 = cljs.core.seq(vec__51167_51281);
var first__51170_51283 = cljs.core.first(seq__51169_51282);
var seq__51169_51284__$1 = cljs.core.next(seq__51169_51282);
var s_51285__$1 = first__51170_51283;
var static_51286__$3 = seq__51169_51284__$1;
var idx_51287__$2 = idx_51279__$1;
var cls_51289__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_51287__$2)].join('');
cljss.sheet.insert_BANG_(sheet,s_51285__$1,cls_51289__$1);

if(cljs.core.empty_QMARK_(static_51286__$3)){
} else {
var G__51290 = static_51286__$3;
var G__51291 = (idx_51287__$2 + (1));
G__51153_51278__$1 = G__51290;
idx_51279__$1 = G__51291;
continue;
}
break;
}

if((cljs.core.count(vars) > (0))){
var var_cls = ["vars-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(vars))].join('');
cljss.sheet.insert_BANG_(sheet,(function (){
return cljss.utils.build_css(var_cls,vars);
}),var_cls);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)," ",var_cls].join('');
} else {
return cls;
}
}
});
/**
 * Takes CSS animation name, static styles and dynamic styles.
 * Injects styles and returns generated CSS animation name.
 */
cljss.core.css_keyframes = (function cljss$core$css_keyframes(cls,static$,vars){
var sheet = cljs.core.first(cljs.core.deref(cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_(sheet))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet());

return (cljss.core.css_keyframes.cljs$core$IFn$_invoke$arity$3 ? cljss.core.css_keyframes.cljs$core$IFn$_invoke$arity$3(cls,static$,vars) : cljss.core.css_keyframes.call(null,cls,static$,vars));
} else {
var inner = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__51184){
var vec__51185 = p__51184;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51185,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51185,(1),null);
return clojure.string.replace(s,id,val);
}),static$,vars);
var anim_name = ["animation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(vars))].join('');
var keyframes = ["@keyframes ",anim_name,"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner),"}"].join('');
cljss.sheet.insert_BANG_(sheet,keyframes,anim_name);

return anim_name;
}
});
cljss.core._camel_case = (function cljss$core$_camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (((typeof k === 'string') || ((k instanceof cljs.core.Symbol)))))){
var vec__51191 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/-/);
var seq__51192 = cljs.core.seq(vec__51191);
var first__51193 = cljs.core.first(seq__51192);
var seq__51192__$1 = cljs.core.next(seq__51192);
var first_word = first__51193;
var words = seq__51192__$1;
if(((cljs.core.empty_QMARK_(words)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
cljss.core._compile_class_name = (function cljss$core$_compile_class_name(props){
var className = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.vals(cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584)], null))));
if(cljs.core.empty_QMARK_(className)){
return null;
} else {
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",className)," "].join('');
}
});
cljss.core._mk_var_class = (function cljss$core$_mk_var_class(props,vars,cls,static$){
return cljss.core.css(cls,static$,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51200){
var vec__51201 = p__51200;
var cls__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51201,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51201,(1),null);
if((function (){var and__5043__auto__ = cljs.core.ifn_QMARK_(v);
if(and__5043__auto__){
if((!((v == null)))){
if((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$)))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,v);
}
} else {
return and__5043__auto__;
}
})()){
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51199_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,p1__51199_SHARP_,null);
}),cljs.core.flatten((new cljs.core.List(null,cljs.core.meta(v),null,(1),null))))),null,(1),null)),(2),null));
} else {
if(cljs.core.ifn_QMARK_(v)){
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(props) : v.call(null,props)),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,v,null,(1),null)),(2),null));

}
}
}),vars));
});
cljss.core._meta_attrs = (function cljss$core$_meta_attrs(vars){
return cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51207_SHARP_){
if((!((p1__51207_SHARP_ == null)))){
if((((p1__51207_SHARP_.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === p1__51207_SHARP_.cljs$core$IWithMeta$)))){
return true;
} else {
if((!p1__51207_SHARP_.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,p1__51207_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,p1__51207_SHARP_);
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,vars)))));
});
cljss.core._camel_case_attrs = (function cljss$core$_camel_case_attrs(props){
return cljs.core.reduce_kv((function (m,k,v){
var k__$1 = (function (){var G__51233 = k;
var G__51233__$1 = (((G__51233 instanceof cljs.core.Keyword))?G__51233.fqn:null);
switch (G__51233__$1) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return cljss.core._camel_case(k);

}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,v);
}),cljs.core.PersistentArrayMap.EMPTY,props);
});
cljss.core._styled = (function cljss$core$_styled(cls,static$,vars,attrs,create_element){
var clsn = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())].join('');
var static$__$1 = ((cljss.utils.dev_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51236_SHARP_){
return clojure.string.replace(p1__51236_SHARP_,cls,clsn);
}),static$):static$);
var vars__$1 = ((cljss.utils.dev_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51244){
var vec__51245 = p__51244;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51245,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51245,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,cls,clsn),v], null);
}),vars):vars);
var cls__$1 = ((cljss.utils.dev_QMARK_)?clsn:cls);
return (function() { 
var G__51305__delegate = function (props,children){
var vec__51251 = ((cljs.core.map_QMARK_(props))?[props,children]:[cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.array,props,children)]);
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51251,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51251,(1),null);
var var_class = cljss.core._mk_var_class(props__$1,vars__$1,cls__$1,static$__$1);
var meta_attrs = cljss.core._meta_attrs(vars__$1);
var className = [cljss.core._compile_class_name(props__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_class)].join('');
var props__$2 = cljss.core._camel_case_attrs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,props__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(attrs,meta_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"className","className",-1983287057)], null)], 0))),new cljs.core.Keyword(null,"className","className",-1983287057),className));
return (create_element.cljs$core$IFn$_invoke$arity$2 ? create_element.cljs$core$IFn$_invoke$arity$2(props__$2,children__$1) : create_element.call(null,props__$2,children__$1));
};
var G__51305 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__51326__i = 0, G__51326__a = new Array(arguments.length -  1);
while (G__51326__i < G__51326__a.length) {G__51326__a[G__51326__i] = arguments[G__51326__i + 1]; ++G__51326__i;}
  children = new cljs.core.IndexedSeq(G__51326__a,0,null);
} 
return G__51305__delegate.call(this,props,children);};
G__51305.cljs$lang$maxFixedArity = 1;
G__51305.cljs$lang$applyTo = (function (arglist__51328){
var props = cljs.core.first(arglist__51328);
var children = cljs.core.rest(arglist__51328);
return G__51305__delegate(props,children);
});
G__51305.cljs$core$IFn$_invoke$arity$variadic = G__51305__delegate;
return G__51305;
})()
;
});

//# sourceMappingURL=cljss.core.js.map
