goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template');
goog.scope(function(){
  day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null)], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.template/NativeWrapper");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.template/NativeWrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_NativeWrapper = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper(tag,id,className));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$adapt_react_class(c){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_NativeWrapper(c,null,null);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.hiccup_tag_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(x)) || (typeof x === 'string'));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.valid_tag_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$valid_tag_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.hiccup_tag_QMARK_(x)) || (((cljs.core.ifn_QMARK_(x)) || ((x instanceof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper)))));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.cache_get = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.get(o,k);
} else {
return null;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$cached_prop_name(k){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(k)){
var temp__5755__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5755__auto__ == null)){
var v = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.dash_to_prop_name(k);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.set(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5755__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.kv_conv = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$kv_conv(o,k,v){
var G__31117 = o;
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.set(G__31117,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_prop_name(k),(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value.call(null,v)));

return G__31117;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$convert_prop_value(x){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__31297__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__31297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31298__i = 0, G__31298__a = new Array(arguments.length -  0);
while (G__31298__i < G__31298__a.length) {G__31298__a[G__31298__i] = arguments[G__31298__i + 0]; ++G__31298__i;}
  args = new cljs.core.IndexedSeq(G__31298__a,0,null);
} 
return G__31297__delegate.call(this,args);};
G__31297.cljs$lang$maxFixedArity = 0;
G__31297.cljs$lang$applyTo = (function (arglist__31299){
var args = cljs.core.seq(arglist__31299);
return G__31297__delegate(args);
});
G__31297.cljs$core$IFn$_invoke$arity$variadic = G__31297__delegate;
return G__31297;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.custom_prop_name_cache = ({});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_custom_prop_name = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$cached_custom_prop_name(k){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(k)){
var temp__5755__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5755__auto__ == null)){
var v = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.dash_to_prop_name(k);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.set(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.custom_prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5755__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.custom_kv_conv = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$custom_kv_conv(o,k,v){
var G__31134 = o;
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.set(G__31134,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_custom_prop_name(k),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value(v));

return G__31134;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_custom_prop_value = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$convert_custom_prop_value(x){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__31320__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__31320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31322__i = 0, G__31322__a = new Array(arguments.length -  0);
while (G__31322__i < G__31322__a.length) {G__31322__a[G__31322__i] = arguments[G__31322__i + 0]; ++G__31322__i;}
  args = new cljs.core.IndexedSeq(G__31322__a,0,null);
} 
return G__31320__delegate.call(this,args);};
G__31320.cljs$lang$maxFixedArity = 0;
G__31320.cljs$lang$applyTo = (function (arglist__31323){
var args = cljs.core.seq(arglist__31323);
return G__31320__delegate(args);
});
G__31320.cljs$core$IFn$_invoke$arity$variadic = G__31320__delegate;
return G__31320;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.set_id_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__31150 = props;
var G__31150__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31150,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__31150);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31150__$1,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class$,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
}
})()));
} else {
return G__31150__$1;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_props = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$convert_props(props,id_class){
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.set_id_class((function (){var G__31157 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31157,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$));
} else {
return G__31157;
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_custom_prop_value(props__$1);
} else {
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value(props__$1);
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.make_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$make_element(this$,argv,component,jsprops,first_child){
var G__31161 = (cljs.core.count(argv) - first_child);
switch (G__31161) {
case (0):
return module$node_modules$react$index.createElement(component,jsprops);

break;
case (1):
return module$node_modules$react$index.createElement(component,jsprops,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(this$,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null)));

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(this$,v));
} else {
}

return a;
}),[component,jsprops],argv));

}
});

/**
* @constructor
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null),new cljs.core.Symbol(null,"custom","custom",1980683475,null)], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.template/HiccupTag");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.template/HiccupTag");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.template/HiccupTag.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_HiccupTag = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag(tag,id,className,custom));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.parse_tag = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$parse_tag(hiccup_tag){
var vec__31169 = cljs.core.next(cljs.core.re_matches(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31169,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31169,(1),null);
var className = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31169,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace(className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_HiccupTag(tag,id,className__$1,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-")));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.reag_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$reag_element(tag,v,compiler){
var c = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.as_class(tag,compiler);
var jsprops = ({});
(jsprops.argv = v);

var temp__5757__auto___31359 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.react_key_from_vec(v);
if((temp__5757__auto___31359 == null)){
} else {
var key_31363 = temp__5757__auto___31359;
(jsprops.key = key_31363);
}

return module$node_modules$react$index.createElement(c,jsprops);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.function_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$function_element(tag,v,first_arg,compiler){
var jsprops = ({});
(jsprops.reagentRender = tag);

(jsprops.argv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_arg));

var temp__5757__auto___31368 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.react_key_from_vec(v);
if((temp__5757__auto___31368 == null)){
} else {
var key_31370 = temp__5757__auto___31368;
(jsprops.key = key_31370);
}

return module$node_modules$react$index.createElement(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render_fn(compiler,tag),jsprops);
});
/**
 * If given tag is a Class, use it as a class,
 *   else wrap in Reagent function wrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.maybe_function_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$maybe_function_element(tag,v,compiler){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.react_class_QMARK_(tag)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.reag_element(tag,v,compiler);
} else {
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.function_element(tag,v,(1),compiler);
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.fragment_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$fragment_element(argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__5045__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value(((hasprops)?props:null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5757__auto___31371 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.react_key_from_vec(argv);
if((temp__5757__auto___31371 == null)){
} else {
var key_31372 = temp__5757__auto___31371;
(jsprops.key = key_31372);
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.make_element(compiler,argv,module$node_modules$react$index.Fragment,jsprops,first_child);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.tag_name_cache = ({});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_parse = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$cached_parse(x){
var temp__5755__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.cache_get(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.tag_name_cache,x);
if((temp__5755__auto__ == null)){
var v = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.parse_tag(x);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.set(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5755__auto__;
return s;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.native_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$native_element(parsed,argv,first,compiler){
var component = parsed.tag;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__5045__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.input.input_component_QMARK_(component)){
var input_class = (function (){var or__5045__auto__ = compiler.reagentInput;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var x = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.create_class(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.input.input_spec,compiler);
(compiler.reagentInput = x);

return x;
}
})();
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_class,argv,component,jsprops,first_child,compiler], null),cljs.core.meta(argv)));
} else {
var temp__5757__auto___31384 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5757__auto___31384 == null)){
} else {
var key_31385 = temp__5757__auto___31384;
(jsprops.key = key_31385);
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.make_element(compiler,argv,component,jsprops,first_child);
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.raw_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$raw_element(comp,argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(2),null);
var jsprops = (function (){var or__5045__auto__ = props;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({});
}
})();
var temp__5757__auto___31390 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5757__auto___31390 == null)){
} else {
var key_31391 = temp__5757__auto___31390;
(jsprops.key = key_31391);
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.make_element(compiler,argv,comp,jsprops,(3));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.expand_seq = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$expand_seq(s,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31208_SHARP_){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,p1__31208_SHARP_);
}),s));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.expand_seq_dev = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$expand_seq_dev(s,o,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
if(((cljs.core.vector_QMARK_(val)) && ((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.react_key_from_vec(val) == null)))){
(o.no_key = true);
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,val);
}),s));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.expand_seq_check = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$expand_seq_check(x,compiler){
var ctx = ({});
var vec__31218 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.check_derefs((function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.expand_seq_dev(x,ctx,compiler);
}));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31218,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31218,(1),null);
if(cljs.core.truth_(derefed)){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.hiccup_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$hiccup_element(v,compiler){
while(true){
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__31234 = pos;
switch (G__31234) {
case (-1):
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.native_element(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_parse(n),v,(1),compiler);

break;
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
return null;
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

break;
default:
var G__31401 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
var G__31402 = compiler;
v = G__31401;
compiler = G__31402;
continue;

}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.vec_to_elem = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$vec_to_elem(v,compiler,fn_to_element){
if((compiler == null)){
console.error("vec-to-elem",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
} else {
}

if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

var G__31244 = tag;
var G__31244__$1 = (((G__31244 instanceof cljs.core.Keyword))?G__31244.fqn:null);
switch (G__31244__$1) {
case ">":
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.native_element(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_HiccupTag(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),null,null,null),v,(2),compiler);

break;
case "r>":
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.raw_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),v,compiler);

break;
case "f>":
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.function_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),v,(2),compiler);

break;
case "<>":
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.fragment_element(v,compiler);

break;
default:
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.hiccup_tag_QMARK_(tag)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.hiccup_element(v,compiler);
} else {
if((tag instanceof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.native_element(tag,v,(1),compiler);
} else {
return (fn_to_element.cljs$core$IFn$_invoke$arity$3 ? fn_to_element.cljs$core$IFn$_invoke$arity$3(tag,v,compiler) : fn_to_element.call(null,tag,v,compiler));

}
}

}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$as_element(this$,x,fn_to_element){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.vec_to_elem(x,this$,fn_to_element);
} else {
if(cljs.core.seq_QMARK_(x)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.expand_seq_check(x,this$);

} else {
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.Compiler}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260 = (function (opts,id,fn_to_element,meta31261){
this.opts = opts;
this.id = id;
this.fn_to_element = fn_to_element;
this.meta31261 = meta31261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31262,meta31261__$1){
var self__ = this;
var _31262__$1 = this;
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260(self__.opts,self__.id,self__.fn_to_element,meta31261__$1));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31262){
var self__ = this;
var _31262__$1 = this;
return self__.meta31261;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$protocols$Compiler$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$protocols$Compiler$get_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$protocols$Compiler$as_element$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.as_element(this$__$1,x,self__.fn_to_element);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$protocols$Compiler$make_element$arity$5 = (function (this$,argv,component,jsprops,first_child){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.make_element(this$__$1,argv,component,jsprops,first_child);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"fn-to-element","fn-to-element",-1764467095,null),new cljs.core.Symbol(null,"meta31261","meta31261",-1281496833,null)], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.template/t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.template/t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.impl.template/t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260 = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$__GT_t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260(opts,id,fn_to_element,meta31261){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260(opts,id,fn_to_element,meta31261));
});


day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.create_compiler = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$create_compiler(opts){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var fn_to_element = (cljs.core.truth_(new cljs.core.Keyword(null,"function-components","function-components",1492814963).cljs$core$IFn$_invoke$arity$1(opts))?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.maybe_function_element:day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.reag_element);
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template31260(opts,id,fn_to_element,cljs.core.PersistentArrayMap.EMPTY));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler_STAR_ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.create_compiler(cljs.core.PersistentArrayMap.EMPTY);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler_STAR_;
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.set_default_compiler_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$impl$template$set_default_compiler_BANG_(compiler){
return (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler = compiler);
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.template.js.map