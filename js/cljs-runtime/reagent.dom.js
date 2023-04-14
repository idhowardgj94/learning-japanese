goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__39169 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39170 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39170);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__39171 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__39172 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__39172);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39171);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__39169);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__39175 = arguments.length;
switch (G__39175) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__39180 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39180,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39180,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__39183_39220 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__39184_39221 = null;
var count__39185_39222 = (0);
var i__39186_39223 = (0);
while(true){
if((i__39186_39223 < count__39185_39222)){
var vec__39201_39224 = chunk__39184_39221.cljs$core$IIndexed$_nth$arity$2(null,i__39186_39223);
var container_39225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39201_39224,(0),null);
var comp_39226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39201_39224,(1),null);
reagent.dom.re_render_component(comp_39226,container_39225);


var G__39227 = seq__39183_39220;
var G__39228 = chunk__39184_39221;
var G__39229 = count__39185_39222;
var G__39230 = (i__39186_39223 + (1));
seq__39183_39220 = G__39227;
chunk__39184_39221 = G__39228;
count__39185_39222 = G__39229;
i__39186_39223 = G__39230;
continue;
} else {
var temp__5753__auto___39231 = cljs.core.seq(seq__39183_39220);
if(temp__5753__auto___39231){
var seq__39183_39232__$1 = temp__5753__auto___39231;
if(cljs.core.chunked_seq_QMARK_(seq__39183_39232__$1)){
var c__5568__auto___39233 = cljs.core.chunk_first(seq__39183_39232__$1);
var G__39234 = cljs.core.chunk_rest(seq__39183_39232__$1);
var G__39235 = c__5568__auto___39233;
var G__39236 = cljs.core.count(c__5568__auto___39233);
var G__39237 = (0);
seq__39183_39220 = G__39234;
chunk__39184_39221 = G__39235;
count__39185_39222 = G__39236;
i__39186_39223 = G__39237;
continue;
} else {
var vec__39207_39240 = cljs.core.first(seq__39183_39232__$1);
var container_39241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39207_39240,(0),null);
var comp_39242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39207_39240,(1),null);
reagent.dom.re_render_component(comp_39242,container_39241);


var G__39244 = cljs.core.next(seq__39183_39232__$1);
var G__39245 = null;
var G__39246 = (0);
var G__39247 = (0);
seq__39183_39220 = G__39244;
chunk__39184_39221 = G__39245;
count__39185_39222 = G__39246;
i__39186_39223 = G__39247;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
