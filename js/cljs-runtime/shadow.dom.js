goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_52723 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_52723(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_52724 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_52724(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__51615 = coll;
var G__51616 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__51615,G__51616) : shadow.dom.lazy_native_coll_seq.call(null,G__51615,G__51616));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__51649 = arguments.length;
switch (G__51649) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__51665 = arguments.length;
switch (G__51665) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__51677 = arguments.length;
switch (G__51677) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__51692 = arguments.length;
switch (G__51692) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__51735 = arguments.length;
switch (G__51735) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__51766 = arguments.length;
switch (G__51766) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e51790){if((e51790 instanceof Object)){
var e = e51790;
return console.log("didnt support attachEvent",el,e);
} else {
throw e51790;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__51814 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__51815 = null;
var count__51816 = (0);
var i__51817 = (0);
while(true){
if((i__51817 < count__51816)){
var el = chunk__51815.cljs$core$IIndexed$_nth$arity$2(null,i__51817);
var handler_52746__$1 = ((function (seq__51814,chunk__51815,count__51816,i__51817,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51814,chunk__51815,count__51816,i__51817,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52746__$1);


var G__52751 = seq__51814;
var G__52752 = chunk__51815;
var G__52753 = count__51816;
var G__52754 = (i__51817 + (1));
seq__51814 = G__52751;
chunk__51815 = G__52752;
count__51816 = G__52753;
i__51817 = G__52754;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51814);
if(temp__5753__auto__){
var seq__51814__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51814__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51814__$1);
var G__52759 = cljs.core.chunk_rest(seq__51814__$1);
var G__52760 = c__5568__auto__;
var G__52761 = cljs.core.count(c__5568__auto__);
var G__52762 = (0);
seq__51814 = G__52759;
chunk__51815 = G__52760;
count__51816 = G__52761;
i__51817 = G__52762;
continue;
} else {
var el = cljs.core.first(seq__51814__$1);
var handler_52764__$1 = ((function (seq__51814,chunk__51815,count__51816,i__51817,el,seq__51814__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51814,chunk__51815,count__51816,i__51817,el,seq__51814__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52764__$1);


var G__52765 = cljs.core.next(seq__51814__$1);
var G__52766 = null;
var G__52767 = (0);
var G__52768 = (0);
seq__51814 = G__52765;
chunk__51815 = G__52766;
count__51816 = G__52767;
i__51817 = G__52768;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__51834 = arguments.length;
switch (G__51834) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51845 = cljs.core.seq(events);
var chunk__51846 = null;
var count__51847 = (0);
var i__51848 = (0);
while(true){
if((i__51848 < count__51847)){
var vec__51863 = chunk__51846.cljs$core$IIndexed$_nth$arity$2(null,i__51848);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51863,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51863,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52779 = seq__51845;
var G__52780 = chunk__51846;
var G__52781 = count__51847;
var G__52782 = (i__51848 + (1));
seq__51845 = G__52779;
chunk__51846 = G__52780;
count__51847 = G__52781;
i__51848 = G__52782;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51845);
if(temp__5753__auto__){
var seq__51845__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51845__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51845__$1);
var G__52784 = cljs.core.chunk_rest(seq__51845__$1);
var G__52785 = c__5568__auto__;
var G__52786 = cljs.core.count(c__5568__auto__);
var G__52787 = (0);
seq__51845 = G__52784;
chunk__51846 = G__52785;
count__51847 = G__52786;
i__51848 = G__52787;
continue;
} else {
var vec__51873 = cljs.core.first(seq__51845__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51873,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51873,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52791 = cljs.core.next(seq__51845__$1);
var G__52792 = null;
var G__52793 = (0);
var G__52794 = (0);
seq__51845 = G__52791;
chunk__51846 = G__52792;
count__51847 = G__52793;
i__51848 = G__52794;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__51879 = cljs.core.seq(styles);
var chunk__51880 = null;
var count__51881 = (0);
var i__51882 = (0);
while(true){
if((i__51882 < count__51881)){
var vec__51896 = chunk__51880.cljs$core$IIndexed$_nth$arity$2(null,i__51882);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51896,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52796 = seq__51879;
var G__52797 = chunk__51880;
var G__52798 = count__51881;
var G__52799 = (i__51882 + (1));
seq__51879 = G__52796;
chunk__51880 = G__52797;
count__51881 = G__52798;
i__51882 = G__52799;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51879);
if(temp__5753__auto__){
var seq__51879__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51879__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51879__$1);
var G__52800 = cljs.core.chunk_rest(seq__51879__$1);
var G__52801 = c__5568__auto__;
var G__52802 = cljs.core.count(c__5568__auto__);
var G__52803 = (0);
seq__51879 = G__52800;
chunk__51880 = G__52801;
count__51881 = G__52802;
i__51882 = G__52803;
continue;
} else {
var vec__51906 = cljs.core.first(seq__51879__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51906,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51906,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52804 = cljs.core.next(seq__51879__$1);
var G__52805 = null;
var G__52806 = (0);
var G__52807 = (0);
seq__51879 = G__52804;
chunk__51880 = G__52805;
count__51881 = G__52806;
i__51882 = G__52807;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__51911_52808 = key;
var G__51911_52809__$1 = (((G__51911_52808 instanceof cljs.core.Keyword))?G__51911_52808.fqn:null);
switch (G__51911_52809__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_52813 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_52813,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_52813,"aria-");
}
})())){
el.setAttribute(ks_52813,value);
} else {
(el[ks_52813] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51939){
var map__51940 = p__51939;
var map__51940__$1 = cljs.core.__destructure_map(map__51940);
var props = map__51940__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51940__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51943 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51943,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51943,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51943,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51950 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51950,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51950;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51959 = arguments.length;
switch (G__51959) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51971){
var vec__51976 = p__51971;
var seq__51977 = cljs.core.seq(vec__51976);
var first__51978 = cljs.core.first(seq__51977);
var seq__51977__$1 = cljs.core.next(seq__51977);
var nn = first__51978;
var first__51978__$1 = cljs.core.first(seq__51977__$1);
var seq__51977__$2 = cljs.core.next(seq__51977__$1);
var np = first__51978__$1;
var nc = seq__51977__$2;
var node = vec__51976;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51981 = nn;
var G__51982 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51981,G__51982) : create_fn.call(null,G__51981,G__51982));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51992 = nn;
var G__51993 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51992,G__51993) : create_fn.call(null,G__51992,G__51993));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__52001 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52001,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52001,(1),null);
var seq__52004_52823 = cljs.core.seq(node_children);
var chunk__52005_52824 = null;
var count__52006_52825 = (0);
var i__52007_52826 = (0);
while(true){
if((i__52007_52826 < count__52006_52825)){
var child_struct_52828 = chunk__52005_52824.cljs$core$IIndexed$_nth$arity$2(null,i__52007_52826);
var children_52829 = shadow.dom.dom_node(child_struct_52828);
if(cljs.core.seq_QMARK_(children_52829)){
var seq__52053_52830 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52829));
var chunk__52055_52831 = null;
var count__52056_52832 = (0);
var i__52057_52833 = (0);
while(true){
if((i__52057_52833 < count__52056_52832)){
var child_52834 = chunk__52055_52831.cljs$core$IIndexed$_nth$arity$2(null,i__52057_52833);
if(cljs.core.truth_(child_52834)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52834);


var G__52835 = seq__52053_52830;
var G__52836 = chunk__52055_52831;
var G__52837 = count__52056_52832;
var G__52838 = (i__52057_52833 + (1));
seq__52053_52830 = G__52835;
chunk__52055_52831 = G__52836;
count__52056_52832 = G__52837;
i__52057_52833 = G__52838;
continue;
} else {
var G__52839 = seq__52053_52830;
var G__52840 = chunk__52055_52831;
var G__52841 = count__52056_52832;
var G__52842 = (i__52057_52833 + (1));
seq__52053_52830 = G__52839;
chunk__52055_52831 = G__52840;
count__52056_52832 = G__52841;
i__52057_52833 = G__52842;
continue;
}
} else {
var temp__5753__auto___52843 = cljs.core.seq(seq__52053_52830);
if(temp__5753__auto___52843){
var seq__52053_52844__$1 = temp__5753__auto___52843;
if(cljs.core.chunked_seq_QMARK_(seq__52053_52844__$1)){
var c__5568__auto___52845 = cljs.core.chunk_first(seq__52053_52844__$1);
var G__52846 = cljs.core.chunk_rest(seq__52053_52844__$1);
var G__52847 = c__5568__auto___52845;
var G__52848 = cljs.core.count(c__5568__auto___52845);
var G__52849 = (0);
seq__52053_52830 = G__52846;
chunk__52055_52831 = G__52847;
count__52056_52832 = G__52848;
i__52057_52833 = G__52849;
continue;
} else {
var child_52850 = cljs.core.first(seq__52053_52844__$1);
if(cljs.core.truth_(child_52850)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52850);


var G__52851 = cljs.core.next(seq__52053_52844__$1);
var G__52852 = null;
var G__52853 = (0);
var G__52854 = (0);
seq__52053_52830 = G__52851;
chunk__52055_52831 = G__52852;
count__52056_52832 = G__52853;
i__52057_52833 = G__52854;
continue;
} else {
var G__52855 = cljs.core.next(seq__52053_52844__$1);
var G__52856 = null;
var G__52857 = (0);
var G__52858 = (0);
seq__52053_52830 = G__52855;
chunk__52055_52831 = G__52856;
count__52056_52832 = G__52857;
i__52057_52833 = G__52858;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52829);
}


var G__52859 = seq__52004_52823;
var G__52860 = chunk__52005_52824;
var G__52861 = count__52006_52825;
var G__52862 = (i__52007_52826 + (1));
seq__52004_52823 = G__52859;
chunk__52005_52824 = G__52860;
count__52006_52825 = G__52861;
i__52007_52826 = G__52862;
continue;
} else {
var temp__5753__auto___52863 = cljs.core.seq(seq__52004_52823);
if(temp__5753__auto___52863){
var seq__52004_52864__$1 = temp__5753__auto___52863;
if(cljs.core.chunked_seq_QMARK_(seq__52004_52864__$1)){
var c__5568__auto___52865 = cljs.core.chunk_first(seq__52004_52864__$1);
var G__52866 = cljs.core.chunk_rest(seq__52004_52864__$1);
var G__52867 = c__5568__auto___52865;
var G__52868 = cljs.core.count(c__5568__auto___52865);
var G__52869 = (0);
seq__52004_52823 = G__52866;
chunk__52005_52824 = G__52867;
count__52006_52825 = G__52868;
i__52007_52826 = G__52869;
continue;
} else {
var child_struct_52870 = cljs.core.first(seq__52004_52864__$1);
var children_52871 = shadow.dom.dom_node(child_struct_52870);
if(cljs.core.seq_QMARK_(children_52871)){
var seq__52065_52872 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52871));
var chunk__52067_52873 = null;
var count__52068_52874 = (0);
var i__52069_52875 = (0);
while(true){
if((i__52069_52875 < count__52068_52874)){
var child_52876 = chunk__52067_52873.cljs$core$IIndexed$_nth$arity$2(null,i__52069_52875);
if(cljs.core.truth_(child_52876)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52876);


var G__52879 = seq__52065_52872;
var G__52880 = chunk__52067_52873;
var G__52881 = count__52068_52874;
var G__52882 = (i__52069_52875 + (1));
seq__52065_52872 = G__52879;
chunk__52067_52873 = G__52880;
count__52068_52874 = G__52881;
i__52069_52875 = G__52882;
continue;
} else {
var G__52883 = seq__52065_52872;
var G__52884 = chunk__52067_52873;
var G__52885 = count__52068_52874;
var G__52886 = (i__52069_52875 + (1));
seq__52065_52872 = G__52883;
chunk__52067_52873 = G__52884;
count__52068_52874 = G__52885;
i__52069_52875 = G__52886;
continue;
}
} else {
var temp__5753__auto___52887__$1 = cljs.core.seq(seq__52065_52872);
if(temp__5753__auto___52887__$1){
var seq__52065_52888__$1 = temp__5753__auto___52887__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52065_52888__$1)){
var c__5568__auto___52889 = cljs.core.chunk_first(seq__52065_52888__$1);
var G__52890 = cljs.core.chunk_rest(seq__52065_52888__$1);
var G__52891 = c__5568__auto___52889;
var G__52892 = cljs.core.count(c__5568__auto___52889);
var G__52893 = (0);
seq__52065_52872 = G__52890;
chunk__52067_52873 = G__52891;
count__52068_52874 = G__52892;
i__52069_52875 = G__52893;
continue;
} else {
var child_52894 = cljs.core.first(seq__52065_52888__$1);
if(cljs.core.truth_(child_52894)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52894);


var G__52895 = cljs.core.next(seq__52065_52888__$1);
var G__52896 = null;
var G__52897 = (0);
var G__52898 = (0);
seq__52065_52872 = G__52895;
chunk__52067_52873 = G__52896;
count__52068_52874 = G__52897;
i__52069_52875 = G__52898;
continue;
} else {
var G__52899 = cljs.core.next(seq__52065_52888__$1);
var G__52900 = null;
var G__52901 = (0);
var G__52902 = (0);
seq__52065_52872 = G__52899;
chunk__52067_52873 = G__52900;
count__52068_52874 = G__52901;
i__52069_52875 = G__52902;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52871);
}


var G__52903 = cljs.core.next(seq__52004_52864__$1);
var G__52904 = null;
var G__52905 = (0);
var G__52906 = (0);
seq__52004_52823 = G__52903;
chunk__52005_52824 = G__52904;
count__52006_52825 = G__52905;
i__52007_52826 = G__52906;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__52102 = cljs.core.seq(node);
var chunk__52103 = null;
var count__52104 = (0);
var i__52105 = (0);
while(true){
if((i__52105 < count__52104)){
var n = chunk__52103.cljs$core$IIndexed$_nth$arity$2(null,i__52105);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52915 = seq__52102;
var G__52916 = chunk__52103;
var G__52917 = count__52104;
var G__52918 = (i__52105 + (1));
seq__52102 = G__52915;
chunk__52103 = G__52916;
count__52104 = G__52917;
i__52105 = G__52918;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52102);
if(temp__5753__auto__){
var seq__52102__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52102__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52102__$1);
var G__52919 = cljs.core.chunk_rest(seq__52102__$1);
var G__52920 = c__5568__auto__;
var G__52921 = cljs.core.count(c__5568__auto__);
var G__52922 = (0);
seq__52102 = G__52919;
chunk__52103 = G__52920;
count__52104 = G__52921;
i__52105 = G__52922;
continue;
} else {
var n = cljs.core.first(seq__52102__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52923 = cljs.core.next(seq__52102__$1);
var G__52924 = null;
var G__52925 = (0);
var G__52926 = (0);
seq__52102 = G__52923;
chunk__52103 = G__52924;
count__52104 = G__52925;
i__52105 = G__52926;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__52129 = arguments.length;
switch (G__52129) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__52138 = arguments.length;
switch (G__52138) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__52150 = arguments.length;
switch (G__52150) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52931 = arguments.length;
var i__5770__auto___52932 = (0);
while(true){
if((i__5770__auto___52932 < len__5769__auto___52931)){
args__5775__auto__.push((arguments[i__5770__auto___52932]));

var G__52933 = (i__5770__auto___52932 + (1));
i__5770__auto___52932 = G__52933;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__52167_52934 = cljs.core.seq(nodes);
var chunk__52168_52935 = null;
var count__52169_52936 = (0);
var i__52170_52937 = (0);
while(true){
if((i__52170_52937 < count__52169_52936)){
var node_52940 = chunk__52168_52935.cljs$core$IIndexed$_nth$arity$2(null,i__52170_52937);
fragment.appendChild(shadow.dom._to_dom(node_52940));


var G__52942 = seq__52167_52934;
var G__52943 = chunk__52168_52935;
var G__52944 = count__52169_52936;
var G__52945 = (i__52170_52937 + (1));
seq__52167_52934 = G__52942;
chunk__52168_52935 = G__52943;
count__52169_52936 = G__52944;
i__52170_52937 = G__52945;
continue;
} else {
var temp__5753__auto___52946 = cljs.core.seq(seq__52167_52934);
if(temp__5753__auto___52946){
var seq__52167_52947__$1 = temp__5753__auto___52946;
if(cljs.core.chunked_seq_QMARK_(seq__52167_52947__$1)){
var c__5568__auto___52948 = cljs.core.chunk_first(seq__52167_52947__$1);
var G__52949 = cljs.core.chunk_rest(seq__52167_52947__$1);
var G__52950 = c__5568__auto___52948;
var G__52951 = cljs.core.count(c__5568__auto___52948);
var G__52952 = (0);
seq__52167_52934 = G__52949;
chunk__52168_52935 = G__52950;
count__52169_52936 = G__52951;
i__52170_52937 = G__52952;
continue;
} else {
var node_52953 = cljs.core.first(seq__52167_52947__$1);
fragment.appendChild(shadow.dom._to_dom(node_52953));


var G__52954 = cljs.core.next(seq__52167_52947__$1);
var G__52955 = null;
var G__52956 = (0);
var G__52957 = (0);
seq__52167_52934 = G__52954;
chunk__52168_52935 = G__52955;
count__52169_52936 = G__52956;
i__52170_52937 = G__52957;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq52160){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52160));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__52189_52961 = cljs.core.seq(scripts);
var chunk__52190_52962 = null;
var count__52191_52963 = (0);
var i__52192_52964 = (0);
while(true){
if((i__52192_52964 < count__52191_52963)){
var vec__52209_52965 = chunk__52190_52962.cljs$core$IIndexed$_nth$arity$2(null,i__52192_52964);
var script_tag_52966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52209_52965,(0),null);
var script_body_52967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52209_52965,(1),null);
eval(script_body_52967);


var G__52968 = seq__52189_52961;
var G__52969 = chunk__52190_52962;
var G__52970 = count__52191_52963;
var G__52971 = (i__52192_52964 + (1));
seq__52189_52961 = G__52968;
chunk__52190_52962 = G__52969;
count__52191_52963 = G__52970;
i__52192_52964 = G__52971;
continue;
} else {
var temp__5753__auto___52972 = cljs.core.seq(seq__52189_52961);
if(temp__5753__auto___52972){
var seq__52189_52973__$1 = temp__5753__auto___52972;
if(cljs.core.chunked_seq_QMARK_(seq__52189_52973__$1)){
var c__5568__auto___52974 = cljs.core.chunk_first(seq__52189_52973__$1);
var G__52975 = cljs.core.chunk_rest(seq__52189_52973__$1);
var G__52976 = c__5568__auto___52974;
var G__52977 = cljs.core.count(c__5568__auto___52974);
var G__52978 = (0);
seq__52189_52961 = G__52975;
chunk__52190_52962 = G__52976;
count__52191_52963 = G__52977;
i__52192_52964 = G__52978;
continue;
} else {
var vec__52215_52979 = cljs.core.first(seq__52189_52973__$1);
var script_tag_52980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52215_52979,(0),null);
var script_body_52981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52215_52979,(1),null);
eval(script_body_52981);


var G__52985 = cljs.core.next(seq__52189_52973__$1);
var G__52986 = null;
var G__52987 = (0);
var G__52988 = (0);
seq__52189_52961 = G__52985;
chunk__52190_52962 = G__52986;
count__52191_52963 = G__52987;
i__52192_52964 = G__52988;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__52220){
var vec__52221 = p__52220;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52221,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52221,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__52237 = arguments.length;
switch (G__52237) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__52254 = cljs.core.seq(style_keys);
var chunk__52255 = null;
var count__52256 = (0);
var i__52257 = (0);
while(true){
if((i__52257 < count__52256)){
var it = chunk__52255.cljs$core$IIndexed$_nth$arity$2(null,i__52257);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52995 = seq__52254;
var G__52996 = chunk__52255;
var G__52997 = count__52256;
var G__52998 = (i__52257 + (1));
seq__52254 = G__52995;
chunk__52255 = G__52996;
count__52256 = G__52997;
i__52257 = G__52998;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52254);
if(temp__5753__auto__){
var seq__52254__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52254__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52254__$1);
var G__52999 = cljs.core.chunk_rest(seq__52254__$1);
var G__53000 = c__5568__auto__;
var G__53001 = cljs.core.count(c__5568__auto__);
var G__53002 = (0);
seq__52254 = G__52999;
chunk__52255 = G__53000;
count__52256 = G__53001;
i__52257 = G__53002;
continue;
} else {
var it = cljs.core.first(seq__52254__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53003 = cljs.core.next(seq__52254__$1);
var G__53004 = null;
var G__53005 = (0);
var G__53006 = (0);
seq__52254 = G__53003;
chunk__52255 = G__53004;
count__52256 = G__53005;
i__52257 = G__53006;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k52270,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__52281 = k52270;
var G__52281__$1 = (((G__52281 instanceof cljs.core.Keyword))?G__52281.fqn:null);
switch (G__52281__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52270,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__52291){
var vec__52292 = p__52291;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52292,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52292,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52269){
var self__ = this;
var G__52269__$1 = this;
return (new cljs.core.RecordIter((0),G__52269__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52271,other52272){
var self__ = this;
var this52271__$1 = this;
return (((!((other52272 == null)))) && ((((this52271__$1.constructor === other52272.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52271__$1.x,other52272.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52271__$1.y,other52272.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52271__$1.__extmap,other52272.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k52270){
var self__ = this;
var this__5350__auto____$1 = this;
var G__52322 = k52270;
var G__52322__$1 = (((G__52322 instanceof cljs.core.Keyword))?G__52322.fqn:null);
switch (G__52322__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52270);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__52269){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__52328 = cljs.core.keyword_identical_QMARK_;
var expr__52329 = k__5352__auto__;
if(cljs.core.truth_((pred__52328.cljs$core$IFn$_invoke$arity$2 ? pred__52328.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__52329) : pred__52328.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__52329)))){
return (new shadow.dom.Coordinate(G__52269,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52328.cljs$core$IFn$_invoke$arity$2 ? pred__52328.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__52329) : pred__52328.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__52329)))){
return (new shadow.dom.Coordinate(self__.x,G__52269,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__52269),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__52269){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__52269,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__52275){
var extmap__5385__auto__ = (function (){var G__52346 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52275,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__52275)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52346);
} else {
return G__52346;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__52275),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__52275),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k52348,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__52364 = k52348;
var G__52364__$1 = (((G__52364 instanceof cljs.core.Keyword))?G__52364.fqn:null);
switch (G__52364__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52348,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__52377){
var vec__52381 = p__52377;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52381,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52381,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52347){
var self__ = this;
var G__52347__$1 = this;
return (new cljs.core.RecordIter((0),G__52347__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52349,other52350){
var self__ = this;
var this52349__$1 = this;
return (((!((other52350 == null)))) && ((((this52349__$1.constructor === other52350.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52349__$1.w,other52350.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52349__$1.h,other52350.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52349__$1.__extmap,other52350.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k52348){
var self__ = this;
var this__5350__auto____$1 = this;
var G__52408 = k52348;
var G__52408__$1 = (((G__52408 instanceof cljs.core.Keyword))?G__52408.fqn:null);
switch (G__52408__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52348);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__52347){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__52411 = cljs.core.keyword_identical_QMARK_;
var expr__52412 = k__5352__auto__;
if(cljs.core.truth_((pred__52411.cljs$core$IFn$_invoke$arity$2 ? pred__52411.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__52412) : pred__52411.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__52412)))){
return (new shadow.dom.Size(G__52347,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52411.cljs$core$IFn$_invoke$arity$2 ? pred__52411.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__52412) : pred__52411.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__52412)))){
return (new shadow.dom.Size(self__.w,G__52347,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__52347),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__52347){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__52347,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__52351){
var extmap__5385__auto__ = (function (){var G__52447 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52351,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__52351)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52447);
} else {
return G__52447;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__52351),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__52351),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__53047 = (i + (1));
var G__53048 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__53047;
ret = G__53048;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52472){
var vec__52476 = p__52472;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__52487 = arguments.length;
switch (G__52487) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__53052 = ps;
var G__53053 = (i + (1));
el__$1 = G__53052;
i = G__53053;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__52531 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52531,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52531,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52531,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__52536_53055 = cljs.core.seq(props);
var chunk__52540_53056 = null;
var count__52541_53057 = (0);
var i__52542_53058 = (0);
while(true){
if((i__52542_53058 < count__52541_53057)){
var vec__52562_53059 = chunk__52540_53056.cljs$core$IIndexed$_nth$arity$2(null,i__52542_53058);
var k_53060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52562_53059,(0),null);
var v_53061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52562_53059,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_53060);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53060),v_53061);


var G__53062 = seq__52536_53055;
var G__53063 = chunk__52540_53056;
var G__53064 = count__52541_53057;
var G__53065 = (i__52542_53058 + (1));
seq__52536_53055 = G__53062;
chunk__52540_53056 = G__53063;
count__52541_53057 = G__53064;
i__52542_53058 = G__53065;
continue;
} else {
var temp__5753__auto___53066 = cljs.core.seq(seq__52536_53055);
if(temp__5753__auto___53066){
var seq__52536_53067__$1 = temp__5753__auto___53066;
if(cljs.core.chunked_seq_QMARK_(seq__52536_53067__$1)){
var c__5568__auto___53069 = cljs.core.chunk_first(seq__52536_53067__$1);
var G__53070 = cljs.core.chunk_rest(seq__52536_53067__$1);
var G__53071 = c__5568__auto___53069;
var G__53072 = cljs.core.count(c__5568__auto___53069);
var G__53073 = (0);
seq__52536_53055 = G__53070;
chunk__52540_53056 = G__53071;
count__52541_53057 = G__53072;
i__52542_53058 = G__53073;
continue;
} else {
var vec__52576_53074 = cljs.core.first(seq__52536_53067__$1);
var k_53075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52576_53074,(0),null);
var v_53076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52576_53074,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_53075);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53075),v_53076);


var G__53077 = cljs.core.next(seq__52536_53067__$1);
var G__53078 = null;
var G__53079 = (0);
var G__53080 = (0);
seq__52536_53055 = G__53077;
chunk__52540_53056 = G__53078;
count__52541_53057 = G__53079;
i__52542_53058 = G__53080;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__52590 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52590,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52590,(1),null);
var seq__52594_53082 = cljs.core.seq(node_children);
var chunk__52597_53083 = null;
var count__52598_53084 = (0);
var i__52599_53085 = (0);
while(true){
if((i__52599_53085 < count__52598_53084)){
var child_struct_53086 = chunk__52597_53083.cljs$core$IIndexed$_nth$arity$2(null,i__52599_53085);
if((!((child_struct_53086 == null)))){
if(typeof child_struct_53086 === 'string'){
var text_53087 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53087),child_struct_53086].join(''));
} else {
var children_53088 = shadow.dom.svg_node(child_struct_53086);
if(cljs.core.seq_QMARK_(children_53088)){
var seq__52649_53089 = cljs.core.seq(children_53088);
var chunk__52651_53090 = null;
var count__52652_53091 = (0);
var i__52653_53092 = (0);
while(true){
if((i__52653_53092 < count__52652_53091)){
var child_53093 = chunk__52651_53090.cljs$core$IIndexed$_nth$arity$2(null,i__52653_53092);
if(cljs.core.truth_(child_53093)){
node.appendChild(child_53093);


var G__53094 = seq__52649_53089;
var G__53095 = chunk__52651_53090;
var G__53096 = count__52652_53091;
var G__53097 = (i__52653_53092 + (1));
seq__52649_53089 = G__53094;
chunk__52651_53090 = G__53095;
count__52652_53091 = G__53096;
i__52653_53092 = G__53097;
continue;
} else {
var G__53098 = seq__52649_53089;
var G__53099 = chunk__52651_53090;
var G__53100 = count__52652_53091;
var G__53101 = (i__52653_53092 + (1));
seq__52649_53089 = G__53098;
chunk__52651_53090 = G__53099;
count__52652_53091 = G__53100;
i__52653_53092 = G__53101;
continue;
}
} else {
var temp__5753__auto___53102 = cljs.core.seq(seq__52649_53089);
if(temp__5753__auto___53102){
var seq__52649_53103__$1 = temp__5753__auto___53102;
if(cljs.core.chunked_seq_QMARK_(seq__52649_53103__$1)){
var c__5568__auto___53104 = cljs.core.chunk_first(seq__52649_53103__$1);
var G__53105 = cljs.core.chunk_rest(seq__52649_53103__$1);
var G__53106 = c__5568__auto___53104;
var G__53107 = cljs.core.count(c__5568__auto___53104);
var G__53108 = (0);
seq__52649_53089 = G__53105;
chunk__52651_53090 = G__53106;
count__52652_53091 = G__53107;
i__52653_53092 = G__53108;
continue;
} else {
var child_53109 = cljs.core.first(seq__52649_53103__$1);
if(cljs.core.truth_(child_53109)){
node.appendChild(child_53109);


var G__53110 = cljs.core.next(seq__52649_53103__$1);
var G__53111 = null;
var G__53112 = (0);
var G__53113 = (0);
seq__52649_53089 = G__53110;
chunk__52651_53090 = G__53111;
count__52652_53091 = G__53112;
i__52653_53092 = G__53113;
continue;
} else {
var G__53115 = cljs.core.next(seq__52649_53103__$1);
var G__53116 = null;
var G__53117 = (0);
var G__53118 = (0);
seq__52649_53089 = G__53115;
chunk__52651_53090 = G__53116;
count__52652_53091 = G__53117;
i__52653_53092 = G__53118;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53088);
}
}


var G__53119 = seq__52594_53082;
var G__53120 = chunk__52597_53083;
var G__53121 = count__52598_53084;
var G__53122 = (i__52599_53085 + (1));
seq__52594_53082 = G__53119;
chunk__52597_53083 = G__53120;
count__52598_53084 = G__53121;
i__52599_53085 = G__53122;
continue;
} else {
var G__53123 = seq__52594_53082;
var G__53124 = chunk__52597_53083;
var G__53125 = count__52598_53084;
var G__53126 = (i__52599_53085 + (1));
seq__52594_53082 = G__53123;
chunk__52597_53083 = G__53124;
count__52598_53084 = G__53125;
i__52599_53085 = G__53126;
continue;
}
} else {
var temp__5753__auto___53128 = cljs.core.seq(seq__52594_53082);
if(temp__5753__auto___53128){
var seq__52594_53129__$1 = temp__5753__auto___53128;
if(cljs.core.chunked_seq_QMARK_(seq__52594_53129__$1)){
var c__5568__auto___53130 = cljs.core.chunk_first(seq__52594_53129__$1);
var G__53131 = cljs.core.chunk_rest(seq__52594_53129__$1);
var G__53132 = c__5568__auto___53130;
var G__53133 = cljs.core.count(c__5568__auto___53130);
var G__53134 = (0);
seq__52594_53082 = G__53131;
chunk__52597_53083 = G__53132;
count__52598_53084 = G__53133;
i__52599_53085 = G__53134;
continue;
} else {
var child_struct_53135 = cljs.core.first(seq__52594_53129__$1);
if((!((child_struct_53135 == null)))){
if(typeof child_struct_53135 === 'string'){
var text_53136 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53136),child_struct_53135].join(''));
} else {
var children_53137 = shadow.dom.svg_node(child_struct_53135);
if(cljs.core.seq_QMARK_(children_53137)){
var seq__52665_53138 = cljs.core.seq(children_53137);
var chunk__52667_53139 = null;
var count__52668_53140 = (0);
var i__52669_53141 = (0);
while(true){
if((i__52669_53141 < count__52668_53140)){
var child_53142 = chunk__52667_53139.cljs$core$IIndexed$_nth$arity$2(null,i__52669_53141);
if(cljs.core.truth_(child_53142)){
node.appendChild(child_53142);


var G__53143 = seq__52665_53138;
var G__53144 = chunk__52667_53139;
var G__53145 = count__52668_53140;
var G__53146 = (i__52669_53141 + (1));
seq__52665_53138 = G__53143;
chunk__52667_53139 = G__53144;
count__52668_53140 = G__53145;
i__52669_53141 = G__53146;
continue;
} else {
var G__53147 = seq__52665_53138;
var G__53148 = chunk__52667_53139;
var G__53149 = count__52668_53140;
var G__53150 = (i__52669_53141 + (1));
seq__52665_53138 = G__53147;
chunk__52667_53139 = G__53148;
count__52668_53140 = G__53149;
i__52669_53141 = G__53150;
continue;
}
} else {
var temp__5753__auto___53151__$1 = cljs.core.seq(seq__52665_53138);
if(temp__5753__auto___53151__$1){
var seq__52665_53152__$1 = temp__5753__auto___53151__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52665_53152__$1)){
var c__5568__auto___53153 = cljs.core.chunk_first(seq__52665_53152__$1);
var G__53154 = cljs.core.chunk_rest(seq__52665_53152__$1);
var G__53155 = c__5568__auto___53153;
var G__53156 = cljs.core.count(c__5568__auto___53153);
var G__53157 = (0);
seq__52665_53138 = G__53154;
chunk__52667_53139 = G__53155;
count__52668_53140 = G__53156;
i__52669_53141 = G__53157;
continue;
} else {
var child_53158 = cljs.core.first(seq__52665_53152__$1);
if(cljs.core.truth_(child_53158)){
node.appendChild(child_53158);


var G__53159 = cljs.core.next(seq__52665_53152__$1);
var G__53160 = null;
var G__53161 = (0);
var G__53162 = (0);
seq__52665_53138 = G__53159;
chunk__52667_53139 = G__53160;
count__52668_53140 = G__53161;
i__52669_53141 = G__53162;
continue;
} else {
var G__53163 = cljs.core.next(seq__52665_53152__$1);
var G__53164 = null;
var G__53165 = (0);
var G__53166 = (0);
seq__52665_53138 = G__53163;
chunk__52667_53139 = G__53164;
count__52668_53140 = G__53165;
i__52669_53141 = G__53166;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53137);
}
}


var G__53167 = cljs.core.next(seq__52594_53129__$1);
var G__53168 = null;
var G__53169 = (0);
var G__53170 = (0);
seq__52594_53082 = G__53167;
chunk__52597_53083 = G__53168;
count__52598_53084 = G__53169;
i__52599_53085 = G__53170;
continue;
} else {
var G__53171 = cljs.core.next(seq__52594_53129__$1);
var G__53172 = null;
var G__53173 = (0);
var G__53174 = (0);
seq__52594_53082 = G__53171;
chunk__52597_53083 = G__53172;
count__52598_53084 = G__53173;
i__52599_53085 = G__53174;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53176 = arguments.length;
var i__5770__auto___53177 = (0);
while(true){
if((i__5770__auto___53177 < len__5769__auto___53176)){
args__5775__auto__.push((arguments[i__5770__auto___53177]));

var G__53178 = (i__5770__auto___53177 + (1));
i__5770__auto___53177 = G__53178;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq52680){
var G__52681 = cljs.core.first(seq52680);
var seq52680__$1 = cljs.core.next(seq52680);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52681,seq52680__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__52691 = arguments.length;
switch (G__52691) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__48721__auto___53182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_52705){
var state_val_52706 = (state_52705[(1)]);
if((state_val_52706 === (1))){
var state_52705__$1 = state_52705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52705__$1,(2),once_or_cleanup);
} else {
if((state_val_52706 === (2))){
var inst_52702 = (state_52705[(2)]);
var inst_52703 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_52705__$1 = (function (){var statearr_52707 = state_52705;
(statearr_52707[(7)] = inst_52702);

return statearr_52707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52705__$1,inst_52703);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48333__auto__ = null;
var shadow$dom$state_machine__48333__auto____0 = (function (){
var statearr_52710 = [null,null,null,null,null,null,null,null];
(statearr_52710[(0)] = shadow$dom$state_machine__48333__auto__);

(statearr_52710[(1)] = (1));

return statearr_52710;
});
var shadow$dom$state_machine__48333__auto____1 = (function (state_52705){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_52705);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e52711){var ex__48336__auto__ = e52711;
var statearr_52712_53186 = state_52705;
(statearr_52712_53186[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_52705[(4)]))){
var statearr_52713_53187 = state_52705;
(statearr_52713_53187[(1)] = cljs.core.first((state_52705[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53188 = state_52705;
state_52705 = G__53188;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
shadow$dom$state_machine__48333__auto__ = function(state_52705){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48333__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48333__auto____1.call(this,state_52705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48333__auto____0;
shadow$dom$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48333__auto____1;
return shadow$dom$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_52714 = f__48722__auto__();
(statearr_52714[(6)] = c__48721__auto___53182);

return statearr_52714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
