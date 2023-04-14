goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48219 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_48219(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48220 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_48220(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47519 = coll;
var G__47520 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47519,G__47520) : shadow.dom.lazy_native_coll_seq.call(null,G__47519,G__47520));
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
var G__47536 = arguments.length;
switch (G__47536) {
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
var G__47547 = arguments.length;
switch (G__47547) {
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
var G__47553 = arguments.length;
switch (G__47553) {
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
var G__47561 = arguments.length;
switch (G__47561) {
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
var G__47576 = arguments.length;
switch (G__47576) {
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
var G__47591 = arguments.length;
switch (G__47591) {
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
}catch (e47599){if((e47599 instanceof Object)){
var e = e47599;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47599;

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
var seq__47610 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47611 = null;
var count__47612 = (0);
var i__47613 = (0);
while(true){
if((i__47613 < count__47612)){
var el = chunk__47611.cljs$core$IIndexed$_nth$arity$2(null,i__47613);
var handler_48227__$1 = ((function (seq__47610,chunk__47611,count__47612,i__47613,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47610,chunk__47611,count__47612,i__47613,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48227__$1);


var G__48228 = seq__47610;
var G__48229 = chunk__47611;
var G__48230 = count__47612;
var G__48231 = (i__47613 + (1));
seq__47610 = G__48228;
chunk__47611 = G__48229;
count__47612 = G__48230;
i__47613 = G__48231;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47610);
if(temp__5753__auto__){
var seq__47610__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47610__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47610__$1);
var G__48232 = cljs.core.chunk_rest(seq__47610__$1);
var G__48233 = c__5568__auto__;
var G__48234 = cljs.core.count(c__5568__auto__);
var G__48235 = (0);
seq__47610 = G__48232;
chunk__47611 = G__48233;
count__47612 = G__48234;
i__47613 = G__48235;
continue;
} else {
var el = cljs.core.first(seq__47610__$1);
var handler_48236__$1 = ((function (seq__47610,chunk__47611,count__47612,i__47613,el,seq__47610__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47610,chunk__47611,count__47612,i__47613,el,seq__47610__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48236__$1);


var G__48237 = cljs.core.next(seq__47610__$1);
var G__48238 = null;
var G__48239 = (0);
var G__48240 = (0);
seq__47610 = G__48237;
chunk__47611 = G__48238;
count__47612 = G__48239;
i__47613 = G__48240;
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
var G__47631 = arguments.length;
switch (G__47631) {
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
var seq__47642 = cljs.core.seq(events);
var chunk__47643 = null;
var count__47644 = (0);
var i__47645 = (0);
while(true){
if((i__47645 < count__47644)){
var vec__47660 = chunk__47643.cljs$core$IIndexed$_nth$arity$2(null,i__47645);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47660,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48242 = seq__47642;
var G__48243 = chunk__47643;
var G__48244 = count__47644;
var G__48245 = (i__47645 + (1));
seq__47642 = G__48242;
chunk__47643 = G__48243;
count__47644 = G__48244;
i__47645 = G__48245;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47642);
if(temp__5753__auto__){
var seq__47642__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47642__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47642__$1);
var G__48246 = cljs.core.chunk_rest(seq__47642__$1);
var G__48247 = c__5568__auto__;
var G__48248 = cljs.core.count(c__5568__auto__);
var G__48249 = (0);
seq__47642 = G__48246;
chunk__47643 = G__48247;
count__47644 = G__48248;
i__47645 = G__48249;
continue;
} else {
var vec__47665 = cljs.core.first(seq__47642__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47665,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48250 = cljs.core.next(seq__47642__$1);
var G__48251 = null;
var G__48252 = (0);
var G__48253 = (0);
seq__47642 = G__48250;
chunk__47643 = G__48251;
count__47644 = G__48252;
i__47645 = G__48253;
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
var seq__47673 = cljs.core.seq(styles);
var chunk__47674 = null;
var count__47675 = (0);
var i__47676 = (0);
while(true){
if((i__47676 < count__47675)){
var vec__47690 = chunk__47674.cljs$core$IIndexed$_nth$arity$2(null,i__47676);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47690,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47690,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48254 = seq__47673;
var G__48255 = chunk__47674;
var G__48256 = count__47675;
var G__48257 = (i__47676 + (1));
seq__47673 = G__48254;
chunk__47674 = G__48255;
count__47675 = G__48256;
i__47676 = G__48257;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47673);
if(temp__5753__auto__){
var seq__47673__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47673__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47673__$1);
var G__48258 = cljs.core.chunk_rest(seq__47673__$1);
var G__48259 = c__5568__auto__;
var G__48260 = cljs.core.count(c__5568__auto__);
var G__48261 = (0);
seq__47673 = G__48258;
chunk__47674 = G__48259;
count__47675 = G__48260;
i__47676 = G__48261;
continue;
} else {
var vec__47693 = cljs.core.first(seq__47673__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47693,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48262 = cljs.core.next(seq__47673__$1);
var G__48263 = null;
var G__48264 = (0);
var G__48265 = (0);
seq__47673 = G__48262;
chunk__47674 = G__48263;
count__47675 = G__48264;
i__47676 = G__48265;
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
var G__47700_48266 = key;
var G__47700_48267__$1 = (((G__47700_48266 instanceof cljs.core.Keyword))?G__47700_48266.fqn:null);
switch (G__47700_48267__$1) {
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
var ks_48269 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_48269,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_48269,"aria-");
}
})())){
el.setAttribute(ks_48269,value);
} else {
(el[ks_48269] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47722){
var map__47723 = p__47722;
var map__47723__$1 = cljs.core.__destructure_map(map__47723);
var props = map__47723__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47723__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47725 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47725,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47725,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47725,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47728 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47728,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47728;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47730 = arguments.length;
switch (G__47730) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47740){
var vec__47741 = p__47740;
var seq__47742 = cljs.core.seq(vec__47741);
var first__47743 = cljs.core.first(seq__47742);
var seq__47742__$1 = cljs.core.next(seq__47742);
var nn = first__47743;
var first__47743__$1 = cljs.core.first(seq__47742__$1);
var seq__47742__$2 = cljs.core.next(seq__47742__$1);
var np = first__47743__$1;
var nc = seq__47742__$2;
var node = vec__47741;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47747 = nn;
var G__47748 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47747,G__47748) : create_fn.call(null,G__47747,G__47748));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47750 = nn;
var G__47751 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47750,G__47751) : create_fn.call(null,G__47750,G__47751));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47754 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47754,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47754,(1),null);
var seq__47758_48273 = cljs.core.seq(node_children);
var chunk__47759_48274 = null;
var count__47760_48275 = (0);
var i__47761_48276 = (0);
while(true){
if((i__47761_48276 < count__47760_48275)){
var child_struct_48277 = chunk__47759_48274.cljs$core$IIndexed$_nth$arity$2(null,i__47761_48276);
var children_48278 = shadow.dom.dom_node(child_struct_48277);
if(cljs.core.seq_QMARK_(children_48278)){
var seq__47809_48279 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48278));
var chunk__47811_48280 = null;
var count__47812_48281 = (0);
var i__47813_48282 = (0);
while(true){
if((i__47813_48282 < count__47812_48281)){
var child_48283 = chunk__47811_48280.cljs$core$IIndexed$_nth$arity$2(null,i__47813_48282);
if(cljs.core.truth_(child_48283)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48283);


var G__48284 = seq__47809_48279;
var G__48285 = chunk__47811_48280;
var G__48286 = count__47812_48281;
var G__48287 = (i__47813_48282 + (1));
seq__47809_48279 = G__48284;
chunk__47811_48280 = G__48285;
count__47812_48281 = G__48286;
i__47813_48282 = G__48287;
continue;
} else {
var G__48289 = seq__47809_48279;
var G__48290 = chunk__47811_48280;
var G__48291 = count__47812_48281;
var G__48292 = (i__47813_48282 + (1));
seq__47809_48279 = G__48289;
chunk__47811_48280 = G__48290;
count__47812_48281 = G__48291;
i__47813_48282 = G__48292;
continue;
}
} else {
var temp__5753__auto___48293 = cljs.core.seq(seq__47809_48279);
if(temp__5753__auto___48293){
var seq__47809_48294__$1 = temp__5753__auto___48293;
if(cljs.core.chunked_seq_QMARK_(seq__47809_48294__$1)){
var c__5568__auto___48295 = cljs.core.chunk_first(seq__47809_48294__$1);
var G__48296 = cljs.core.chunk_rest(seq__47809_48294__$1);
var G__48297 = c__5568__auto___48295;
var G__48298 = cljs.core.count(c__5568__auto___48295);
var G__48299 = (0);
seq__47809_48279 = G__48296;
chunk__47811_48280 = G__48297;
count__47812_48281 = G__48298;
i__47813_48282 = G__48299;
continue;
} else {
var child_48300 = cljs.core.first(seq__47809_48294__$1);
if(cljs.core.truth_(child_48300)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48300);


var G__48301 = cljs.core.next(seq__47809_48294__$1);
var G__48302 = null;
var G__48303 = (0);
var G__48304 = (0);
seq__47809_48279 = G__48301;
chunk__47811_48280 = G__48302;
count__47812_48281 = G__48303;
i__47813_48282 = G__48304;
continue;
} else {
var G__48305 = cljs.core.next(seq__47809_48294__$1);
var G__48306 = null;
var G__48307 = (0);
var G__48308 = (0);
seq__47809_48279 = G__48305;
chunk__47811_48280 = G__48306;
count__47812_48281 = G__48307;
i__47813_48282 = G__48308;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48278);
}


var G__48309 = seq__47758_48273;
var G__48310 = chunk__47759_48274;
var G__48311 = count__47760_48275;
var G__48312 = (i__47761_48276 + (1));
seq__47758_48273 = G__48309;
chunk__47759_48274 = G__48310;
count__47760_48275 = G__48311;
i__47761_48276 = G__48312;
continue;
} else {
var temp__5753__auto___48313 = cljs.core.seq(seq__47758_48273);
if(temp__5753__auto___48313){
var seq__47758_48314__$1 = temp__5753__auto___48313;
if(cljs.core.chunked_seq_QMARK_(seq__47758_48314__$1)){
var c__5568__auto___48315 = cljs.core.chunk_first(seq__47758_48314__$1);
var G__48316 = cljs.core.chunk_rest(seq__47758_48314__$1);
var G__48317 = c__5568__auto___48315;
var G__48318 = cljs.core.count(c__5568__auto___48315);
var G__48319 = (0);
seq__47758_48273 = G__48316;
chunk__47759_48274 = G__48317;
count__47760_48275 = G__48318;
i__47761_48276 = G__48319;
continue;
} else {
var child_struct_48320 = cljs.core.first(seq__47758_48314__$1);
var children_48321 = shadow.dom.dom_node(child_struct_48320);
if(cljs.core.seq_QMARK_(children_48321)){
var seq__47825_48322 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48321));
var chunk__47827_48323 = null;
var count__47828_48324 = (0);
var i__47829_48325 = (0);
while(true){
if((i__47829_48325 < count__47828_48324)){
var child_48327 = chunk__47827_48323.cljs$core$IIndexed$_nth$arity$2(null,i__47829_48325);
if(cljs.core.truth_(child_48327)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48327);


var G__48328 = seq__47825_48322;
var G__48329 = chunk__47827_48323;
var G__48330 = count__47828_48324;
var G__48331 = (i__47829_48325 + (1));
seq__47825_48322 = G__48328;
chunk__47827_48323 = G__48329;
count__47828_48324 = G__48330;
i__47829_48325 = G__48331;
continue;
} else {
var G__48332 = seq__47825_48322;
var G__48333 = chunk__47827_48323;
var G__48334 = count__47828_48324;
var G__48335 = (i__47829_48325 + (1));
seq__47825_48322 = G__48332;
chunk__47827_48323 = G__48333;
count__47828_48324 = G__48334;
i__47829_48325 = G__48335;
continue;
}
} else {
var temp__5753__auto___48336__$1 = cljs.core.seq(seq__47825_48322);
if(temp__5753__auto___48336__$1){
var seq__47825_48337__$1 = temp__5753__auto___48336__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47825_48337__$1)){
var c__5568__auto___48338 = cljs.core.chunk_first(seq__47825_48337__$1);
var G__48339 = cljs.core.chunk_rest(seq__47825_48337__$1);
var G__48340 = c__5568__auto___48338;
var G__48341 = cljs.core.count(c__5568__auto___48338);
var G__48342 = (0);
seq__47825_48322 = G__48339;
chunk__47827_48323 = G__48340;
count__47828_48324 = G__48341;
i__47829_48325 = G__48342;
continue;
} else {
var child_48343 = cljs.core.first(seq__47825_48337__$1);
if(cljs.core.truth_(child_48343)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48343);


var G__48344 = cljs.core.next(seq__47825_48337__$1);
var G__48345 = null;
var G__48346 = (0);
var G__48347 = (0);
seq__47825_48322 = G__48344;
chunk__47827_48323 = G__48345;
count__47828_48324 = G__48346;
i__47829_48325 = G__48347;
continue;
} else {
var G__48349 = cljs.core.next(seq__47825_48337__$1);
var G__48350 = null;
var G__48351 = (0);
var G__48352 = (0);
seq__47825_48322 = G__48349;
chunk__47827_48323 = G__48350;
count__47828_48324 = G__48351;
i__47829_48325 = G__48352;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48321);
}


var G__48353 = cljs.core.next(seq__47758_48314__$1);
var G__48354 = null;
var G__48355 = (0);
var G__48356 = (0);
seq__47758_48273 = G__48353;
chunk__47759_48274 = G__48354;
count__47760_48275 = G__48355;
i__47761_48276 = G__48356;
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
var seq__47841 = cljs.core.seq(node);
var chunk__47842 = null;
var count__47843 = (0);
var i__47844 = (0);
while(true){
if((i__47844 < count__47843)){
var n = chunk__47842.cljs$core$IIndexed$_nth$arity$2(null,i__47844);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48357 = seq__47841;
var G__48358 = chunk__47842;
var G__48359 = count__47843;
var G__48360 = (i__47844 + (1));
seq__47841 = G__48357;
chunk__47842 = G__48358;
count__47843 = G__48359;
i__47844 = G__48360;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47841);
if(temp__5753__auto__){
var seq__47841__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47841__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47841__$1);
var G__48361 = cljs.core.chunk_rest(seq__47841__$1);
var G__48362 = c__5568__auto__;
var G__48363 = cljs.core.count(c__5568__auto__);
var G__48364 = (0);
seq__47841 = G__48361;
chunk__47842 = G__48362;
count__47843 = G__48363;
i__47844 = G__48364;
continue;
} else {
var n = cljs.core.first(seq__47841__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48365 = cljs.core.next(seq__47841__$1);
var G__48366 = null;
var G__48367 = (0);
var G__48368 = (0);
seq__47841 = G__48365;
chunk__47842 = G__48366;
count__47843 = G__48367;
i__47844 = G__48368;
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
var G__47857 = arguments.length;
switch (G__47857) {
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
var G__47864 = arguments.length;
switch (G__47864) {
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
var G__47884 = arguments.length;
switch (G__47884) {
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
var len__5769__auto___48375 = arguments.length;
var i__5770__auto___48376 = (0);
while(true){
if((i__5770__auto___48376 < len__5769__auto___48375)){
args__5775__auto__.push((arguments[i__5770__auto___48376]));

var G__48377 = (i__5770__auto___48376 + (1));
i__5770__auto___48376 = G__48377;
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
var seq__47892_48378 = cljs.core.seq(nodes);
var chunk__47893_48379 = null;
var count__47894_48380 = (0);
var i__47895_48381 = (0);
while(true){
if((i__47895_48381 < count__47894_48380)){
var node_48382 = chunk__47893_48379.cljs$core$IIndexed$_nth$arity$2(null,i__47895_48381);
fragment.appendChild(shadow.dom._to_dom(node_48382));


var G__48383 = seq__47892_48378;
var G__48384 = chunk__47893_48379;
var G__48385 = count__47894_48380;
var G__48386 = (i__47895_48381 + (1));
seq__47892_48378 = G__48383;
chunk__47893_48379 = G__48384;
count__47894_48380 = G__48385;
i__47895_48381 = G__48386;
continue;
} else {
var temp__5753__auto___48387 = cljs.core.seq(seq__47892_48378);
if(temp__5753__auto___48387){
var seq__47892_48388__$1 = temp__5753__auto___48387;
if(cljs.core.chunked_seq_QMARK_(seq__47892_48388__$1)){
var c__5568__auto___48389 = cljs.core.chunk_first(seq__47892_48388__$1);
var G__48390 = cljs.core.chunk_rest(seq__47892_48388__$1);
var G__48391 = c__5568__auto___48389;
var G__48392 = cljs.core.count(c__5568__auto___48389);
var G__48393 = (0);
seq__47892_48378 = G__48390;
chunk__47893_48379 = G__48391;
count__47894_48380 = G__48392;
i__47895_48381 = G__48393;
continue;
} else {
var node_48394 = cljs.core.first(seq__47892_48388__$1);
fragment.appendChild(shadow.dom._to_dom(node_48394));


var G__48395 = cljs.core.next(seq__47892_48388__$1);
var G__48396 = null;
var G__48397 = (0);
var G__48398 = (0);
seq__47892_48378 = G__48395;
chunk__47893_48379 = G__48396;
count__47894_48380 = G__48397;
i__47895_48381 = G__48398;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47890){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47890));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47910_48400 = cljs.core.seq(scripts);
var chunk__47911_48401 = null;
var count__47912_48402 = (0);
var i__47913_48403 = (0);
while(true){
if((i__47913_48403 < count__47912_48402)){
var vec__47926_48404 = chunk__47911_48401.cljs$core$IIndexed$_nth$arity$2(null,i__47913_48403);
var script_tag_48405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47926_48404,(0),null);
var script_body_48406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47926_48404,(1),null);
eval(script_body_48406);


var G__48407 = seq__47910_48400;
var G__48408 = chunk__47911_48401;
var G__48409 = count__47912_48402;
var G__48410 = (i__47913_48403 + (1));
seq__47910_48400 = G__48407;
chunk__47911_48401 = G__48408;
count__47912_48402 = G__48409;
i__47913_48403 = G__48410;
continue;
} else {
var temp__5753__auto___48411 = cljs.core.seq(seq__47910_48400);
if(temp__5753__auto___48411){
var seq__47910_48412__$1 = temp__5753__auto___48411;
if(cljs.core.chunked_seq_QMARK_(seq__47910_48412__$1)){
var c__5568__auto___48413 = cljs.core.chunk_first(seq__47910_48412__$1);
var G__48414 = cljs.core.chunk_rest(seq__47910_48412__$1);
var G__48415 = c__5568__auto___48413;
var G__48416 = cljs.core.count(c__5568__auto___48413);
var G__48417 = (0);
seq__47910_48400 = G__48414;
chunk__47911_48401 = G__48415;
count__47912_48402 = G__48416;
i__47913_48403 = G__48417;
continue;
} else {
var vec__47933_48418 = cljs.core.first(seq__47910_48412__$1);
var script_tag_48419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47933_48418,(0),null);
var script_body_48420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47933_48418,(1),null);
eval(script_body_48420);


var G__48421 = cljs.core.next(seq__47910_48412__$1);
var G__48422 = null;
var G__48423 = (0);
var G__48424 = (0);
seq__47910_48400 = G__48421;
chunk__47911_48401 = G__48422;
count__47912_48402 = G__48423;
i__47913_48403 = G__48424;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47937){
var vec__47938 = p__47937;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47938,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47938,(1),null);
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
var G__47950 = arguments.length;
switch (G__47950) {
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
var seq__47966 = cljs.core.seq(style_keys);
var chunk__47967 = null;
var count__47968 = (0);
var i__47969 = (0);
while(true){
if((i__47969 < count__47968)){
var it = chunk__47967.cljs$core$IIndexed$_nth$arity$2(null,i__47969);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48431 = seq__47966;
var G__48432 = chunk__47967;
var G__48433 = count__47968;
var G__48434 = (i__47969 + (1));
seq__47966 = G__48431;
chunk__47967 = G__48432;
count__47968 = G__48433;
i__47969 = G__48434;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47966);
if(temp__5753__auto__){
var seq__47966__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47966__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47966__$1);
var G__48435 = cljs.core.chunk_rest(seq__47966__$1);
var G__48436 = c__5568__auto__;
var G__48437 = cljs.core.count(c__5568__auto__);
var G__48438 = (0);
seq__47966 = G__48435;
chunk__47967 = G__48436;
count__47968 = G__48437;
i__47969 = G__48438;
continue;
} else {
var it = cljs.core.first(seq__47966__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48439 = cljs.core.next(seq__47966__$1);
var G__48440 = null;
var G__48441 = (0);
var G__48442 = (0);
seq__47966 = G__48439;
chunk__47967 = G__48440;
count__47968 = G__48441;
i__47969 = G__48442;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k47979,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__47988 = k47979;
var G__47988__$1 = (((G__47988 instanceof cljs.core.Keyword))?G__47988.fqn:null);
switch (G__47988__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47979,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__47993){
var vec__47994 = p__47993;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47994,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47994,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47978){
var self__ = this;
var G__47978__$1 = this;
return (new cljs.core.RecordIter((0),G__47978__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47980,other47981){
var self__ = this;
var this47980__$1 = this;
return (((!((other47981 == null)))) && ((((this47980__$1.constructor === other47981.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47980__$1.x,other47981.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47980__$1.y,other47981.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47980__$1.__extmap,other47981.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k47979){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48015 = k47979;
var G__48015__$1 = (((G__48015 instanceof cljs.core.Keyword))?G__48015.fqn:null);
switch (G__48015__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47979);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__47978){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48019 = cljs.core.keyword_identical_QMARK_;
var expr__48020 = k__5352__auto__;
if(cljs.core.truth_((pred__48019.cljs$core$IFn$_invoke$arity$2 ? pred__48019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48020) : pred__48019.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48020)))){
return (new shadow.dom.Coordinate(G__47978,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48019.cljs$core$IFn$_invoke$arity$2 ? pred__48019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48020) : pred__48019.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48020)))){
return (new shadow.dom.Coordinate(self__.x,G__47978,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__47978),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__47978){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47978,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47983){
var extmap__5385__auto__ = (function (){var G__48022 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47983,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47983)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48022);
} else {
return G__48022;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47983),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47983),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48028,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48040 = k48028;
var G__48040__$1 = (((G__48040 instanceof cljs.core.Keyword))?G__48040.fqn:null);
switch (G__48040__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48028,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48044){
var vec__48045 = p__48044;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48045,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48045,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48027){
var self__ = this;
var G__48027__$1 = this;
return (new cljs.core.RecordIter((0),G__48027__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48029,other48030){
var self__ = this;
var this48029__$1 = this;
return (((!((other48030 == null)))) && ((((this48029__$1.constructor === other48030.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48029__$1.w,other48030.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48029__$1.h,other48030.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48029__$1.__extmap,other48030.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48028){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48063 = k48028;
var G__48063__$1 = (((G__48063 instanceof cljs.core.Keyword))?G__48063.fqn:null);
switch (G__48063__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48028);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48027){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48066 = cljs.core.keyword_identical_QMARK_;
var expr__48067 = k__5352__auto__;
if(cljs.core.truth_((pred__48066.cljs$core$IFn$_invoke$arity$2 ? pred__48066.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48067) : pred__48066.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48067)))){
return (new shadow.dom.Size(G__48027,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48066.cljs$core$IFn$_invoke$arity$2 ? pred__48066.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48067) : pred__48066.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48067)))){
return (new shadow.dom.Size(self__.w,G__48027,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48027),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48027){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48027,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48033){
var extmap__5385__auto__ = (function (){var G__48081 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48033,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48033)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48081);
} else {
return G__48081;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48033),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48033),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__48458 = (i + (1));
var G__48459 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48458;
ret = G__48459;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48106){
var vec__48108 = p__48106;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48108,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48108,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48117 = arguments.length;
switch (G__48117) {
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
var G__48464 = ps;
var G__48465 = (i + (1));
el__$1 = G__48464;
i = G__48465;
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
var vec__48149 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48149,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48153_48469 = cljs.core.seq(props);
var chunk__48154_48470 = null;
var count__48155_48471 = (0);
var i__48156_48472 = (0);
while(true){
if((i__48156_48472 < count__48155_48471)){
var vec__48163_48473 = chunk__48154_48470.cljs$core$IIndexed$_nth$arity$2(null,i__48156_48472);
var k_48474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48163_48473,(0),null);
var v_48475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48163_48473,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48474);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48474),v_48475);


var G__48476 = seq__48153_48469;
var G__48477 = chunk__48154_48470;
var G__48478 = count__48155_48471;
var G__48479 = (i__48156_48472 + (1));
seq__48153_48469 = G__48476;
chunk__48154_48470 = G__48477;
count__48155_48471 = G__48478;
i__48156_48472 = G__48479;
continue;
} else {
var temp__5753__auto___48480 = cljs.core.seq(seq__48153_48469);
if(temp__5753__auto___48480){
var seq__48153_48481__$1 = temp__5753__auto___48480;
if(cljs.core.chunked_seq_QMARK_(seq__48153_48481__$1)){
var c__5568__auto___48482 = cljs.core.chunk_first(seq__48153_48481__$1);
var G__48483 = cljs.core.chunk_rest(seq__48153_48481__$1);
var G__48484 = c__5568__auto___48482;
var G__48485 = cljs.core.count(c__5568__auto___48482);
var G__48486 = (0);
seq__48153_48469 = G__48483;
chunk__48154_48470 = G__48484;
count__48155_48471 = G__48485;
i__48156_48472 = G__48486;
continue;
} else {
var vec__48166_48487 = cljs.core.first(seq__48153_48481__$1);
var k_48488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48166_48487,(0),null);
var v_48489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48166_48487,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48488);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48488),v_48489);


var G__48490 = cljs.core.next(seq__48153_48481__$1);
var G__48491 = null;
var G__48492 = (0);
var G__48493 = (0);
seq__48153_48469 = G__48490;
chunk__48154_48470 = G__48491;
count__48155_48471 = G__48492;
i__48156_48472 = G__48493;
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
var vec__48170 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48170,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48170,(1),null);
var seq__48173_48494 = cljs.core.seq(node_children);
var chunk__48175_48495 = null;
var count__48176_48496 = (0);
var i__48177_48497 = (0);
while(true){
if((i__48177_48497 < count__48176_48496)){
var child_struct_48498 = chunk__48175_48495.cljs$core$IIndexed$_nth$arity$2(null,i__48177_48497);
if((!((child_struct_48498 == null)))){
if(typeof child_struct_48498 === 'string'){
var text_48499 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48499),child_struct_48498].join(''));
} else {
var children_48500 = shadow.dom.svg_node(child_struct_48498);
if(cljs.core.seq_QMARK_(children_48500)){
var seq__48191_48501 = cljs.core.seq(children_48500);
var chunk__48193_48502 = null;
var count__48194_48503 = (0);
var i__48195_48504 = (0);
while(true){
if((i__48195_48504 < count__48194_48503)){
var child_48505 = chunk__48193_48502.cljs$core$IIndexed$_nth$arity$2(null,i__48195_48504);
if(cljs.core.truth_(child_48505)){
node.appendChild(child_48505);


var G__48506 = seq__48191_48501;
var G__48507 = chunk__48193_48502;
var G__48508 = count__48194_48503;
var G__48509 = (i__48195_48504 + (1));
seq__48191_48501 = G__48506;
chunk__48193_48502 = G__48507;
count__48194_48503 = G__48508;
i__48195_48504 = G__48509;
continue;
} else {
var G__48510 = seq__48191_48501;
var G__48511 = chunk__48193_48502;
var G__48512 = count__48194_48503;
var G__48513 = (i__48195_48504 + (1));
seq__48191_48501 = G__48510;
chunk__48193_48502 = G__48511;
count__48194_48503 = G__48512;
i__48195_48504 = G__48513;
continue;
}
} else {
var temp__5753__auto___48514 = cljs.core.seq(seq__48191_48501);
if(temp__5753__auto___48514){
var seq__48191_48518__$1 = temp__5753__auto___48514;
if(cljs.core.chunked_seq_QMARK_(seq__48191_48518__$1)){
var c__5568__auto___48519 = cljs.core.chunk_first(seq__48191_48518__$1);
var G__48520 = cljs.core.chunk_rest(seq__48191_48518__$1);
var G__48521 = c__5568__auto___48519;
var G__48522 = cljs.core.count(c__5568__auto___48519);
var G__48523 = (0);
seq__48191_48501 = G__48520;
chunk__48193_48502 = G__48521;
count__48194_48503 = G__48522;
i__48195_48504 = G__48523;
continue;
} else {
var child_48524 = cljs.core.first(seq__48191_48518__$1);
if(cljs.core.truth_(child_48524)){
node.appendChild(child_48524);


var G__48525 = cljs.core.next(seq__48191_48518__$1);
var G__48526 = null;
var G__48527 = (0);
var G__48528 = (0);
seq__48191_48501 = G__48525;
chunk__48193_48502 = G__48526;
count__48194_48503 = G__48527;
i__48195_48504 = G__48528;
continue;
} else {
var G__48529 = cljs.core.next(seq__48191_48518__$1);
var G__48530 = null;
var G__48531 = (0);
var G__48532 = (0);
seq__48191_48501 = G__48529;
chunk__48193_48502 = G__48530;
count__48194_48503 = G__48531;
i__48195_48504 = G__48532;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48500);
}
}


var G__48533 = seq__48173_48494;
var G__48534 = chunk__48175_48495;
var G__48535 = count__48176_48496;
var G__48536 = (i__48177_48497 + (1));
seq__48173_48494 = G__48533;
chunk__48175_48495 = G__48534;
count__48176_48496 = G__48535;
i__48177_48497 = G__48536;
continue;
} else {
var G__48537 = seq__48173_48494;
var G__48538 = chunk__48175_48495;
var G__48539 = count__48176_48496;
var G__48540 = (i__48177_48497 + (1));
seq__48173_48494 = G__48537;
chunk__48175_48495 = G__48538;
count__48176_48496 = G__48539;
i__48177_48497 = G__48540;
continue;
}
} else {
var temp__5753__auto___48541 = cljs.core.seq(seq__48173_48494);
if(temp__5753__auto___48541){
var seq__48173_48542__$1 = temp__5753__auto___48541;
if(cljs.core.chunked_seq_QMARK_(seq__48173_48542__$1)){
var c__5568__auto___48543 = cljs.core.chunk_first(seq__48173_48542__$1);
var G__48544 = cljs.core.chunk_rest(seq__48173_48542__$1);
var G__48545 = c__5568__auto___48543;
var G__48546 = cljs.core.count(c__5568__auto___48543);
var G__48547 = (0);
seq__48173_48494 = G__48544;
chunk__48175_48495 = G__48545;
count__48176_48496 = G__48546;
i__48177_48497 = G__48547;
continue;
} else {
var child_struct_48548 = cljs.core.first(seq__48173_48542__$1);
if((!((child_struct_48548 == null)))){
if(typeof child_struct_48548 === 'string'){
var text_48549 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48549),child_struct_48548].join(''));
} else {
var children_48550 = shadow.dom.svg_node(child_struct_48548);
if(cljs.core.seq_QMARK_(children_48550)){
var seq__48197_48551 = cljs.core.seq(children_48550);
var chunk__48199_48552 = null;
var count__48200_48553 = (0);
var i__48201_48554 = (0);
while(true){
if((i__48201_48554 < count__48200_48553)){
var child_48555 = chunk__48199_48552.cljs$core$IIndexed$_nth$arity$2(null,i__48201_48554);
if(cljs.core.truth_(child_48555)){
node.appendChild(child_48555);


var G__48556 = seq__48197_48551;
var G__48557 = chunk__48199_48552;
var G__48558 = count__48200_48553;
var G__48559 = (i__48201_48554 + (1));
seq__48197_48551 = G__48556;
chunk__48199_48552 = G__48557;
count__48200_48553 = G__48558;
i__48201_48554 = G__48559;
continue;
} else {
var G__48560 = seq__48197_48551;
var G__48561 = chunk__48199_48552;
var G__48562 = count__48200_48553;
var G__48563 = (i__48201_48554 + (1));
seq__48197_48551 = G__48560;
chunk__48199_48552 = G__48561;
count__48200_48553 = G__48562;
i__48201_48554 = G__48563;
continue;
}
} else {
var temp__5753__auto___48564__$1 = cljs.core.seq(seq__48197_48551);
if(temp__5753__auto___48564__$1){
var seq__48197_48565__$1 = temp__5753__auto___48564__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48197_48565__$1)){
var c__5568__auto___48566 = cljs.core.chunk_first(seq__48197_48565__$1);
var G__48567 = cljs.core.chunk_rest(seq__48197_48565__$1);
var G__48568 = c__5568__auto___48566;
var G__48569 = cljs.core.count(c__5568__auto___48566);
var G__48570 = (0);
seq__48197_48551 = G__48567;
chunk__48199_48552 = G__48568;
count__48200_48553 = G__48569;
i__48201_48554 = G__48570;
continue;
} else {
var child_48571 = cljs.core.first(seq__48197_48565__$1);
if(cljs.core.truth_(child_48571)){
node.appendChild(child_48571);


var G__48572 = cljs.core.next(seq__48197_48565__$1);
var G__48573 = null;
var G__48574 = (0);
var G__48575 = (0);
seq__48197_48551 = G__48572;
chunk__48199_48552 = G__48573;
count__48200_48553 = G__48574;
i__48201_48554 = G__48575;
continue;
} else {
var G__48576 = cljs.core.next(seq__48197_48565__$1);
var G__48577 = null;
var G__48578 = (0);
var G__48579 = (0);
seq__48197_48551 = G__48576;
chunk__48199_48552 = G__48577;
count__48200_48553 = G__48578;
i__48201_48554 = G__48579;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48550);
}
}


var G__48580 = cljs.core.next(seq__48173_48542__$1);
var G__48581 = null;
var G__48582 = (0);
var G__48583 = (0);
seq__48173_48494 = G__48580;
chunk__48175_48495 = G__48581;
count__48176_48496 = G__48582;
i__48177_48497 = G__48583;
continue;
} else {
var G__48584 = cljs.core.next(seq__48173_48542__$1);
var G__48585 = null;
var G__48586 = (0);
var G__48587 = (0);
seq__48173_48494 = G__48584;
chunk__48175_48495 = G__48585;
count__48176_48496 = G__48586;
i__48177_48497 = G__48587;
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
var len__5769__auto___48588 = arguments.length;
var i__5770__auto___48589 = (0);
while(true){
if((i__5770__auto___48589 < len__5769__auto___48588)){
args__5775__auto__.push((arguments[i__5770__auto___48589]));

var G__48590 = (i__5770__auto___48589 + (1));
i__5770__auto___48589 = G__48590;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48203){
var G__48204 = cljs.core.first(seq48203);
var seq48203__$1 = cljs.core.next(seq48203);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48204,seq48203__$1);
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
var G__48206 = arguments.length;
switch (G__48206) {
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
var c__45315__auto___48592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_48211){
var state_val_48212 = (state_48211[(1)]);
if((state_val_48212 === (1))){
var state_48211__$1 = state_48211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48211__$1,(2),once_or_cleanup);
} else {
if((state_val_48212 === (2))){
var inst_48208 = (state_48211[(2)]);
var inst_48209 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48211__$1 = (function (){var statearr_48213 = state_48211;
(statearr_48213[(7)] = inst_48208);

return statearr_48213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48211__$1,inst_48209);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45167__auto__ = null;
var shadow$dom$state_machine__45167__auto____0 = (function (){
var statearr_48214 = [null,null,null,null,null,null,null,null];
(statearr_48214[(0)] = shadow$dom$state_machine__45167__auto__);

(statearr_48214[(1)] = (1));

return statearr_48214;
});
var shadow$dom$state_machine__45167__auto____1 = (function (state_48211){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_48211);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e48215){var ex__45170__auto__ = e48215;
var statearr_48216_48593 = state_48211;
(statearr_48216_48593[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_48211[(4)]))){
var statearr_48217_48594 = state_48211;
(statearr_48217_48594[(1)] = cljs.core.first((state_48211[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48595 = state_48211;
state_48211 = G__48595;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
shadow$dom$state_machine__45167__auto__ = function(state_48211){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45167__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45167__auto____1.call(this,state_48211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45167__auto____0;
shadow$dom$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45167__auto____1;
return shadow$dom$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_48218 = f__45316__auto__();
(statearr_48218[(6)] = c__45315__auto___48592);

return statearr_48218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
