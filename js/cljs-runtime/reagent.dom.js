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
var _STAR_always_update_STAR__orig_val__38722 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38723 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38723);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__38727 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38728 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38728);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38727);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38722);
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
var G__38745 = arguments.length;
switch (G__38745) {
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

var vec__38752 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38752,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38752,(1),null);
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

var seq__38769_38839 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__38771_38840 = null;
var count__38772_38841 = (0);
var i__38773_38843 = (0);
while(true){
if((i__38773_38843 < count__38772_38841)){
var vec__38791_38846 = chunk__38771_38840.cljs$core$IIndexed$_nth$arity$2(null,i__38773_38843);
var container_38847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38791_38846,(0),null);
var comp_38848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38791_38846,(1),null);
reagent.dom.re_render_component(comp_38848,container_38847);


var G__38850 = seq__38769_38839;
var G__38851 = chunk__38771_38840;
var G__38852 = count__38772_38841;
var G__38853 = (i__38773_38843 + (1));
seq__38769_38839 = G__38850;
chunk__38771_38840 = G__38851;
count__38772_38841 = G__38852;
i__38773_38843 = G__38853;
continue;
} else {
var temp__5753__auto___38858 = cljs.core.seq(seq__38769_38839);
if(temp__5753__auto___38858){
var seq__38769_38860__$1 = temp__5753__auto___38858;
if(cljs.core.chunked_seq_QMARK_(seq__38769_38860__$1)){
var c__5568__auto___38861 = cljs.core.chunk_first(seq__38769_38860__$1);
var G__38863 = cljs.core.chunk_rest(seq__38769_38860__$1);
var G__38864 = c__5568__auto___38861;
var G__38865 = cljs.core.count(c__5568__auto___38861);
var G__38866 = (0);
seq__38769_38839 = G__38863;
chunk__38771_38840 = G__38864;
count__38772_38841 = G__38865;
i__38773_38843 = G__38866;
continue;
} else {
var vec__38803_38869 = cljs.core.first(seq__38769_38860__$1);
var container_38870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38803_38869,(0),null);
var comp_38871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38803_38869,(1),null);
reagent.dom.re_render_component(comp_38871,container_38870);


var G__38873 = cljs.core.next(seq__38769_38860__$1);
var G__38874 = null;
var G__38875 = (0);
var G__38876 = (0);
seq__38769_38839 = G__38873;
chunk__38771_38840 = G__38874;
count__38772_38841 = G__38875;
i__38773_38843 = G__38876;
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
