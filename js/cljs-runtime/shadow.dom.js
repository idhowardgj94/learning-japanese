goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48478 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_48478(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48479 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_48479(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47134 = coll;
var G__47135 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47134,G__47135) : shadow.dom.lazy_native_coll_seq.call(null,G__47134,G__47135));
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
var G__47168 = arguments.length;
switch (G__47168) {
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
var G__47189 = arguments.length;
switch (G__47189) {
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
var G__47207 = arguments.length;
switch (G__47207) {
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
var G__47231 = arguments.length;
switch (G__47231) {
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
var G__47250 = arguments.length;
switch (G__47250) {
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
var G__47280 = arguments.length;
switch (G__47280) {
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
}catch (e47300){if((e47300 instanceof Object)){
var e = e47300;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47300;

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
var seq__47318 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47319 = null;
var count__47320 = (0);
var i__47321 = (0);
while(true){
if((i__47321 < count__47320)){
var el = chunk__47319.cljs$core$IIndexed$_nth$arity$2(null,i__47321);
var handler_48508__$1 = ((function (seq__47318,chunk__47319,count__47320,i__47321,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47318,chunk__47319,count__47320,i__47321,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48508__$1);


var G__48509 = seq__47318;
var G__48510 = chunk__47319;
var G__48511 = count__47320;
var G__48512 = (i__47321 + (1));
seq__47318 = G__48509;
chunk__47319 = G__48510;
count__47320 = G__48511;
i__47321 = G__48512;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47318);
if(temp__5753__auto__){
var seq__47318__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47318__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47318__$1);
var G__48513 = cljs.core.chunk_rest(seq__47318__$1);
var G__48514 = c__5568__auto__;
var G__48515 = cljs.core.count(c__5568__auto__);
var G__48516 = (0);
seq__47318 = G__48513;
chunk__47319 = G__48514;
count__47320 = G__48515;
i__47321 = G__48516;
continue;
} else {
var el = cljs.core.first(seq__47318__$1);
var handler_48517__$1 = ((function (seq__47318,chunk__47319,count__47320,i__47321,el,seq__47318__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47318,chunk__47319,count__47320,i__47321,el,seq__47318__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48517__$1);


var G__48518 = cljs.core.next(seq__47318__$1);
var G__48519 = null;
var G__48520 = (0);
var G__48521 = (0);
seq__47318 = G__48518;
chunk__47319 = G__48519;
count__47320 = G__48520;
i__47321 = G__48521;
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
var G__47367 = arguments.length;
switch (G__47367) {
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
var seq__47394 = cljs.core.seq(events);
var chunk__47395 = null;
var count__47396 = (0);
var i__47397 = (0);
while(true){
if((i__47397 < count__47396)){
var vec__47415 = chunk__47395.cljs$core$IIndexed$_nth$arity$2(null,i__47397);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47415,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47415,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48524 = seq__47394;
var G__48525 = chunk__47395;
var G__48526 = count__47396;
var G__48527 = (i__47397 + (1));
seq__47394 = G__48524;
chunk__47395 = G__48525;
count__47396 = G__48526;
i__47397 = G__48527;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47394);
if(temp__5753__auto__){
var seq__47394__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47394__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47394__$1);
var G__48528 = cljs.core.chunk_rest(seq__47394__$1);
var G__48529 = c__5568__auto__;
var G__48530 = cljs.core.count(c__5568__auto__);
var G__48531 = (0);
seq__47394 = G__48528;
chunk__47395 = G__48529;
count__47396 = G__48530;
i__47397 = G__48531;
continue;
} else {
var vec__47424 = cljs.core.first(seq__47394__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47424,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48533 = cljs.core.next(seq__47394__$1);
var G__48534 = null;
var G__48535 = (0);
var G__48536 = (0);
seq__47394 = G__48533;
chunk__47395 = G__48534;
count__47396 = G__48535;
i__47397 = G__48536;
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
var seq__47437 = cljs.core.seq(styles);
var chunk__47438 = null;
var count__47439 = (0);
var i__47440 = (0);
while(true){
if((i__47440 < count__47439)){
var vec__47457 = chunk__47438.cljs$core$IIndexed$_nth$arity$2(null,i__47440);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47457,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48543 = seq__47437;
var G__48544 = chunk__47438;
var G__48545 = count__47439;
var G__48546 = (i__47440 + (1));
seq__47437 = G__48543;
chunk__47438 = G__48544;
count__47439 = G__48545;
i__47440 = G__48546;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47437);
if(temp__5753__auto__){
var seq__47437__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47437__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47437__$1);
var G__48547 = cljs.core.chunk_rest(seq__47437__$1);
var G__48548 = c__5568__auto__;
var G__48549 = cljs.core.count(c__5568__auto__);
var G__48550 = (0);
seq__47437 = G__48547;
chunk__47438 = G__48548;
count__47439 = G__48549;
i__47440 = G__48550;
continue;
} else {
var vec__47464 = cljs.core.first(seq__47437__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47464,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47464,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48551 = cljs.core.next(seq__47437__$1);
var G__48552 = null;
var G__48553 = (0);
var G__48554 = (0);
seq__47437 = G__48551;
chunk__47438 = G__48552;
count__47439 = G__48553;
i__47440 = G__48554;
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
var G__47471_48555 = key;
var G__47471_48556__$1 = (((G__47471_48555 instanceof cljs.core.Keyword))?G__47471_48555.fqn:null);
switch (G__47471_48556__$1) {
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
var ks_48560 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_48560,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_48560,"aria-");
}
})())){
el.setAttribute(ks_48560,value);
} else {
(el[ks_48560] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47502){
var map__47504 = p__47502;
var map__47504__$1 = cljs.core.__destructure_map(map__47504);
var props = map__47504__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47504__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47505 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47505,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47505,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47505,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47510 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47510,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47510;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47524 = arguments.length;
switch (G__47524) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47543){
var vec__47544 = p__47543;
var seq__47545 = cljs.core.seq(vec__47544);
var first__47546 = cljs.core.first(seq__47545);
var seq__47545__$1 = cljs.core.next(seq__47545);
var nn = first__47546;
var first__47546__$1 = cljs.core.first(seq__47545__$1);
var seq__47545__$2 = cljs.core.next(seq__47545__$1);
var np = first__47546__$1;
var nc = seq__47545__$2;
var node = vec__47544;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47553 = nn;
var G__47554 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47553,G__47554) : create_fn.call(null,G__47553,G__47554));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47557 = nn;
var G__47558 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47557,G__47558) : create_fn.call(null,G__47557,G__47558));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47567 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47567,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47567,(1),null);
var seq__47576_48566 = cljs.core.seq(node_children);
var chunk__47577_48567 = null;
var count__47578_48568 = (0);
var i__47579_48569 = (0);
while(true){
if((i__47579_48569 < count__47578_48568)){
var child_struct_48570 = chunk__47577_48567.cljs$core$IIndexed$_nth$arity$2(null,i__47579_48569);
var children_48571 = shadow.dom.dom_node(child_struct_48570);
if(cljs.core.seq_QMARK_(children_48571)){
var seq__47640_48572 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48571));
var chunk__47642_48573 = null;
var count__47643_48574 = (0);
var i__47644_48575 = (0);
while(true){
if((i__47644_48575 < count__47643_48574)){
var child_48578 = chunk__47642_48573.cljs$core$IIndexed$_nth$arity$2(null,i__47644_48575);
if(cljs.core.truth_(child_48578)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48578);


var G__48579 = seq__47640_48572;
var G__48580 = chunk__47642_48573;
var G__48581 = count__47643_48574;
var G__48582 = (i__47644_48575 + (1));
seq__47640_48572 = G__48579;
chunk__47642_48573 = G__48580;
count__47643_48574 = G__48581;
i__47644_48575 = G__48582;
continue;
} else {
var G__48583 = seq__47640_48572;
var G__48584 = chunk__47642_48573;
var G__48585 = count__47643_48574;
var G__48586 = (i__47644_48575 + (1));
seq__47640_48572 = G__48583;
chunk__47642_48573 = G__48584;
count__47643_48574 = G__48585;
i__47644_48575 = G__48586;
continue;
}
} else {
var temp__5753__auto___48591 = cljs.core.seq(seq__47640_48572);
if(temp__5753__auto___48591){
var seq__47640_48593__$1 = temp__5753__auto___48591;
if(cljs.core.chunked_seq_QMARK_(seq__47640_48593__$1)){
var c__5568__auto___48594 = cljs.core.chunk_first(seq__47640_48593__$1);
var G__48596 = cljs.core.chunk_rest(seq__47640_48593__$1);
var G__48597 = c__5568__auto___48594;
var G__48598 = cljs.core.count(c__5568__auto___48594);
var G__48599 = (0);
seq__47640_48572 = G__48596;
chunk__47642_48573 = G__48597;
count__47643_48574 = G__48598;
i__47644_48575 = G__48599;
continue;
} else {
var child_48600 = cljs.core.first(seq__47640_48593__$1);
if(cljs.core.truth_(child_48600)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48600);


var G__48603 = cljs.core.next(seq__47640_48593__$1);
var G__48604 = null;
var G__48605 = (0);
var G__48606 = (0);
seq__47640_48572 = G__48603;
chunk__47642_48573 = G__48604;
count__47643_48574 = G__48605;
i__47644_48575 = G__48606;
continue;
} else {
var G__48607 = cljs.core.next(seq__47640_48593__$1);
var G__48608 = null;
var G__48609 = (0);
var G__48610 = (0);
seq__47640_48572 = G__48607;
chunk__47642_48573 = G__48608;
count__47643_48574 = G__48609;
i__47644_48575 = G__48610;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48571);
}


var G__48613 = seq__47576_48566;
var G__48614 = chunk__47577_48567;
var G__48615 = count__47578_48568;
var G__48616 = (i__47579_48569 + (1));
seq__47576_48566 = G__48613;
chunk__47577_48567 = G__48614;
count__47578_48568 = G__48615;
i__47579_48569 = G__48616;
continue;
} else {
var temp__5753__auto___48617 = cljs.core.seq(seq__47576_48566);
if(temp__5753__auto___48617){
var seq__47576_48618__$1 = temp__5753__auto___48617;
if(cljs.core.chunked_seq_QMARK_(seq__47576_48618__$1)){
var c__5568__auto___48619 = cljs.core.chunk_first(seq__47576_48618__$1);
var G__48623 = cljs.core.chunk_rest(seq__47576_48618__$1);
var G__48624 = c__5568__auto___48619;
var G__48625 = cljs.core.count(c__5568__auto___48619);
var G__48626 = (0);
seq__47576_48566 = G__48623;
chunk__47577_48567 = G__48624;
count__47578_48568 = G__48625;
i__47579_48569 = G__48626;
continue;
} else {
var child_struct_48627 = cljs.core.first(seq__47576_48618__$1);
var children_48628 = shadow.dom.dom_node(child_struct_48627);
if(cljs.core.seq_QMARK_(children_48628)){
var seq__47667_48632 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48628));
var chunk__47669_48633 = null;
var count__47670_48634 = (0);
var i__47671_48635 = (0);
while(true){
if((i__47671_48635 < count__47670_48634)){
var child_48636 = chunk__47669_48633.cljs$core$IIndexed$_nth$arity$2(null,i__47671_48635);
if(cljs.core.truth_(child_48636)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48636);


var G__48637 = seq__47667_48632;
var G__48638 = chunk__47669_48633;
var G__48639 = count__47670_48634;
var G__48640 = (i__47671_48635 + (1));
seq__47667_48632 = G__48637;
chunk__47669_48633 = G__48638;
count__47670_48634 = G__48639;
i__47671_48635 = G__48640;
continue;
} else {
var G__48641 = seq__47667_48632;
var G__48642 = chunk__47669_48633;
var G__48643 = count__47670_48634;
var G__48644 = (i__47671_48635 + (1));
seq__47667_48632 = G__48641;
chunk__47669_48633 = G__48642;
count__47670_48634 = G__48643;
i__47671_48635 = G__48644;
continue;
}
} else {
var temp__5753__auto___48645__$1 = cljs.core.seq(seq__47667_48632);
if(temp__5753__auto___48645__$1){
var seq__47667_48646__$1 = temp__5753__auto___48645__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47667_48646__$1)){
var c__5568__auto___48647 = cljs.core.chunk_first(seq__47667_48646__$1);
var G__48648 = cljs.core.chunk_rest(seq__47667_48646__$1);
var G__48649 = c__5568__auto___48647;
var G__48650 = cljs.core.count(c__5568__auto___48647);
var G__48651 = (0);
seq__47667_48632 = G__48648;
chunk__47669_48633 = G__48649;
count__47670_48634 = G__48650;
i__47671_48635 = G__48651;
continue;
} else {
var child_48652 = cljs.core.first(seq__47667_48646__$1);
if(cljs.core.truth_(child_48652)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48652);


var G__48654 = cljs.core.next(seq__47667_48646__$1);
var G__48655 = null;
var G__48656 = (0);
var G__48657 = (0);
seq__47667_48632 = G__48654;
chunk__47669_48633 = G__48655;
count__47670_48634 = G__48656;
i__47671_48635 = G__48657;
continue;
} else {
var G__48658 = cljs.core.next(seq__47667_48646__$1);
var G__48659 = null;
var G__48660 = (0);
var G__48661 = (0);
seq__47667_48632 = G__48658;
chunk__47669_48633 = G__48659;
count__47670_48634 = G__48660;
i__47671_48635 = G__48661;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48628);
}


var G__48662 = cljs.core.next(seq__47576_48618__$1);
var G__48663 = null;
var G__48664 = (0);
var G__48665 = (0);
seq__47576_48566 = G__48662;
chunk__47577_48567 = G__48663;
count__47578_48568 = G__48664;
i__47579_48569 = G__48665;
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
var seq__47725 = cljs.core.seq(node);
var chunk__47726 = null;
var count__47727 = (0);
var i__47728 = (0);
while(true){
if((i__47728 < count__47727)){
var n = chunk__47726.cljs$core$IIndexed$_nth$arity$2(null,i__47728);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48668 = seq__47725;
var G__48669 = chunk__47726;
var G__48670 = count__47727;
var G__48671 = (i__47728 + (1));
seq__47725 = G__48668;
chunk__47726 = G__48669;
count__47727 = G__48670;
i__47728 = G__48671;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47725);
if(temp__5753__auto__){
var seq__47725__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47725__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47725__$1);
var G__48672 = cljs.core.chunk_rest(seq__47725__$1);
var G__48673 = c__5568__auto__;
var G__48674 = cljs.core.count(c__5568__auto__);
var G__48675 = (0);
seq__47725 = G__48672;
chunk__47726 = G__48673;
count__47727 = G__48674;
i__47728 = G__48675;
continue;
} else {
var n = cljs.core.first(seq__47725__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48678 = cljs.core.next(seq__47725__$1);
var G__48679 = null;
var G__48680 = (0);
var G__48681 = (0);
seq__47725 = G__48678;
chunk__47726 = G__48679;
count__47727 = G__48680;
i__47728 = G__48681;
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
var G__47752 = arguments.length;
switch (G__47752) {
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
var G__47761 = arguments.length;
switch (G__47761) {
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
var G__47770 = arguments.length;
switch (G__47770) {
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
var len__5769__auto___48703 = arguments.length;
var i__5770__auto___48704 = (0);
while(true){
if((i__5770__auto___48704 < len__5769__auto___48703)){
args__5775__auto__.push((arguments[i__5770__auto___48704]));

var G__48708 = (i__5770__auto___48704 + (1));
i__5770__auto___48704 = G__48708;
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
var seq__47808_48711 = cljs.core.seq(nodes);
var chunk__47809_48712 = null;
var count__47810_48713 = (0);
var i__47811_48714 = (0);
while(true){
if((i__47811_48714 < count__47810_48713)){
var node_48716 = chunk__47809_48712.cljs$core$IIndexed$_nth$arity$2(null,i__47811_48714);
fragment.appendChild(shadow.dom._to_dom(node_48716));


var G__48717 = seq__47808_48711;
var G__48718 = chunk__47809_48712;
var G__48719 = count__47810_48713;
var G__48720 = (i__47811_48714 + (1));
seq__47808_48711 = G__48717;
chunk__47809_48712 = G__48718;
count__47810_48713 = G__48719;
i__47811_48714 = G__48720;
continue;
} else {
var temp__5753__auto___48721 = cljs.core.seq(seq__47808_48711);
if(temp__5753__auto___48721){
var seq__47808_48722__$1 = temp__5753__auto___48721;
if(cljs.core.chunked_seq_QMARK_(seq__47808_48722__$1)){
var c__5568__auto___48725 = cljs.core.chunk_first(seq__47808_48722__$1);
var G__48727 = cljs.core.chunk_rest(seq__47808_48722__$1);
var G__48728 = c__5568__auto___48725;
var G__48729 = cljs.core.count(c__5568__auto___48725);
var G__48730 = (0);
seq__47808_48711 = G__48727;
chunk__47809_48712 = G__48728;
count__47810_48713 = G__48729;
i__47811_48714 = G__48730;
continue;
} else {
var node_48731 = cljs.core.first(seq__47808_48722__$1);
fragment.appendChild(shadow.dom._to_dom(node_48731));


var G__48733 = cljs.core.next(seq__47808_48722__$1);
var G__48734 = null;
var G__48735 = (0);
var G__48736 = (0);
seq__47808_48711 = G__48733;
chunk__47809_48712 = G__48734;
count__47810_48713 = G__48735;
i__47811_48714 = G__48736;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47802){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47802));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47825_48745 = cljs.core.seq(scripts);
var chunk__47826_48746 = null;
var count__47827_48747 = (0);
var i__47828_48748 = (0);
while(true){
if((i__47828_48748 < count__47827_48747)){
var vec__47839_48749 = chunk__47826_48746.cljs$core$IIndexed$_nth$arity$2(null,i__47828_48748);
var script_tag_48750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47839_48749,(0),null);
var script_body_48751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47839_48749,(1),null);
eval(script_body_48751);


var G__48754 = seq__47825_48745;
var G__48755 = chunk__47826_48746;
var G__48756 = count__47827_48747;
var G__48757 = (i__47828_48748 + (1));
seq__47825_48745 = G__48754;
chunk__47826_48746 = G__48755;
count__47827_48747 = G__48756;
i__47828_48748 = G__48757;
continue;
} else {
var temp__5753__auto___48758 = cljs.core.seq(seq__47825_48745);
if(temp__5753__auto___48758){
var seq__47825_48759__$1 = temp__5753__auto___48758;
if(cljs.core.chunked_seq_QMARK_(seq__47825_48759__$1)){
var c__5568__auto___48760 = cljs.core.chunk_first(seq__47825_48759__$1);
var G__48761 = cljs.core.chunk_rest(seq__47825_48759__$1);
var G__48762 = c__5568__auto___48760;
var G__48763 = cljs.core.count(c__5568__auto___48760);
var G__48764 = (0);
seq__47825_48745 = G__48761;
chunk__47826_48746 = G__48762;
count__47827_48747 = G__48763;
i__47828_48748 = G__48764;
continue;
} else {
var vec__47844_48765 = cljs.core.first(seq__47825_48759__$1);
var script_tag_48766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47844_48765,(0),null);
var script_body_48767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47844_48765,(1),null);
eval(script_body_48767);


var G__48769 = cljs.core.next(seq__47825_48759__$1);
var G__48770 = null;
var G__48771 = (0);
var G__48772 = (0);
seq__47825_48745 = G__48769;
chunk__47826_48746 = G__48770;
count__47827_48747 = G__48771;
i__47828_48748 = G__48772;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47848){
var vec__47849 = p__47848;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47849,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47849,(1),null);
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
var G__47868 = arguments.length;
switch (G__47868) {
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
var seq__47897 = cljs.core.seq(style_keys);
var chunk__47898 = null;
var count__47899 = (0);
var i__47900 = (0);
while(true){
if((i__47900 < count__47899)){
var it = chunk__47898.cljs$core$IIndexed$_nth$arity$2(null,i__47900);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48793 = seq__47897;
var G__48794 = chunk__47898;
var G__48795 = count__47899;
var G__48796 = (i__47900 + (1));
seq__47897 = G__48793;
chunk__47898 = G__48794;
count__47899 = G__48795;
i__47900 = G__48796;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47897);
if(temp__5753__auto__){
var seq__47897__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47897__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47897__$1);
var G__48797 = cljs.core.chunk_rest(seq__47897__$1);
var G__48798 = c__5568__auto__;
var G__48799 = cljs.core.count(c__5568__auto__);
var G__48800 = (0);
seq__47897 = G__48797;
chunk__47898 = G__48798;
count__47899 = G__48799;
i__47900 = G__48800;
continue;
} else {
var it = cljs.core.first(seq__47897__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48801 = cljs.core.next(seq__47897__$1);
var G__48802 = null;
var G__48803 = (0);
var G__48804 = (0);
seq__47897 = G__48801;
chunk__47898 = G__48802;
count__47899 = G__48803;
i__47900 = G__48804;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k47908,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__47916 = k47908;
var G__47916__$1 = (((G__47916 instanceof cljs.core.Keyword))?G__47916.fqn:null);
switch (G__47916__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47908,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__47925){
var vec__47927 = p__47925;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47927,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47927,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47907){
var self__ = this;
var G__47907__$1 = this;
return (new cljs.core.RecordIter((0),G__47907__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47909,other47910){
var self__ = this;
var this47909__$1 = this;
return (((!((other47910 == null)))) && ((((this47909__$1.constructor === other47910.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47909__$1.x,other47910.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47909__$1.y,other47910.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47909__$1.__extmap,other47910.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k47908){
var self__ = this;
var this__5350__auto____$1 = this;
var G__47970 = k47908;
var G__47970__$1 = (((G__47970 instanceof cljs.core.Keyword))?G__47970.fqn:null);
switch (G__47970__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47908);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__47907){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__47977 = cljs.core.keyword_identical_QMARK_;
var expr__47978 = k__5352__auto__;
if(cljs.core.truth_((pred__47977.cljs$core$IFn$_invoke$arity$2 ? pred__47977.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47978) : pred__47977.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47978)))){
return (new shadow.dom.Coordinate(G__47907,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47977.cljs$core$IFn$_invoke$arity$2 ? pred__47977.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47978) : pred__47977.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47978)))){
return (new shadow.dom.Coordinate(self__.x,G__47907,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__47907),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__47907){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47907,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47913){
var extmap__5385__auto__ = (function (){var G__47987 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47913,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47913)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47987);
} else {
return G__47987;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47913),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47913),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k48006,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__48022 = k48006;
var G__48022__$1 = (((G__48022 instanceof cljs.core.Keyword))?G__48022.fqn:null);
switch (G__48022__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48006,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__48029){
var vec__48030 = p__48029;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48030,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48030,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48005){
var self__ = this;
var G__48005__$1 = this;
return (new cljs.core.RecordIter((0),G__48005__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48007,other48008){
var self__ = this;
var this48007__$1 = this;
return (((!((other48008 == null)))) && ((((this48007__$1.constructor === other48008.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48007__$1.w,other48008.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48007__$1.h,other48008.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48007__$1.__extmap,other48008.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k48006){
var self__ = this;
var this__5350__auto____$1 = this;
var G__48075 = k48006;
var G__48075__$1 = (((G__48075 instanceof cljs.core.Keyword))?G__48075.fqn:null);
switch (G__48075__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48006);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__48005){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__48082 = cljs.core.keyword_identical_QMARK_;
var expr__48083 = k__5352__auto__;
if(cljs.core.truth_((pred__48082.cljs$core$IFn$_invoke$arity$2 ? pred__48082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48083) : pred__48082.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48083)))){
return (new shadow.dom.Size(G__48005,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48082.cljs$core$IFn$_invoke$arity$2 ? pred__48082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48083) : pred__48082.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48083)))){
return (new shadow.dom.Size(self__.w,G__48005,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__48005),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__48005){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48005,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48014){
var extmap__5385__auto__ = (function (){var G__48100 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48014,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48014)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48100);
} else {
return G__48100;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48014),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48014),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__48922 = (i + (1));
var G__48923 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48922;
ret = G__48923;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48154){
var vec__48155 = p__48154;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48155,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48174 = arguments.length;
switch (G__48174) {
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
var G__48938 = ps;
var G__48939 = (i + (1));
el__$1 = G__48938;
i = G__48939;
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
var vec__48218 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48218,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48218,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48218,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48224_48944 = cljs.core.seq(props);
var chunk__48225_48945 = null;
var count__48226_48946 = (0);
var i__48227_48947 = (0);
while(true){
if((i__48227_48947 < count__48226_48946)){
var vec__48249_48954 = chunk__48225_48945.cljs$core$IIndexed$_nth$arity$2(null,i__48227_48947);
var k_48955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48249_48954,(0),null);
var v_48956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48249_48954,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48955);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48955),v_48956);


var G__48957 = seq__48224_48944;
var G__48958 = chunk__48225_48945;
var G__48959 = count__48226_48946;
var G__48960 = (i__48227_48947 + (1));
seq__48224_48944 = G__48957;
chunk__48225_48945 = G__48958;
count__48226_48946 = G__48959;
i__48227_48947 = G__48960;
continue;
} else {
var temp__5753__auto___48961 = cljs.core.seq(seq__48224_48944);
if(temp__5753__auto___48961){
var seq__48224_48962__$1 = temp__5753__auto___48961;
if(cljs.core.chunked_seq_QMARK_(seq__48224_48962__$1)){
var c__5568__auto___48963 = cljs.core.chunk_first(seq__48224_48962__$1);
var G__48964 = cljs.core.chunk_rest(seq__48224_48962__$1);
var G__48965 = c__5568__auto___48963;
var G__48966 = cljs.core.count(c__5568__auto___48963);
var G__48967 = (0);
seq__48224_48944 = G__48964;
chunk__48225_48945 = G__48965;
count__48226_48946 = G__48966;
i__48227_48947 = G__48967;
continue;
} else {
var vec__48257_48968 = cljs.core.first(seq__48224_48962__$1);
var k_48969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48257_48968,(0),null);
var v_48970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48257_48968,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48969);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48969),v_48970);


var G__48971 = cljs.core.next(seq__48224_48962__$1);
var G__48972 = null;
var G__48973 = (0);
var G__48974 = (0);
seq__48224_48944 = G__48971;
chunk__48225_48945 = G__48972;
count__48226_48946 = G__48973;
i__48227_48947 = G__48974;
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
var vec__48282 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48282,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48282,(1),null);
var seq__48285_48980 = cljs.core.seq(node_children);
var chunk__48287_48981 = null;
var count__48288_48982 = (0);
var i__48289_48983 = (0);
while(true){
if((i__48289_48983 < count__48288_48982)){
var child_struct_48985 = chunk__48287_48981.cljs$core$IIndexed$_nth$arity$2(null,i__48289_48983);
if((!((child_struct_48985 == null)))){
if(typeof child_struct_48985 === 'string'){
var text_48986 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48986),child_struct_48985].join(''));
} else {
var children_48987 = shadow.dom.svg_node(child_struct_48985);
if(cljs.core.seq_QMARK_(children_48987)){
var seq__48335_48992 = cljs.core.seq(children_48987);
var chunk__48337_48993 = null;
var count__48338_48994 = (0);
var i__48339_48995 = (0);
while(true){
if((i__48339_48995 < count__48338_48994)){
var child_48996 = chunk__48337_48993.cljs$core$IIndexed$_nth$arity$2(null,i__48339_48995);
if(cljs.core.truth_(child_48996)){
node.appendChild(child_48996);


var G__48997 = seq__48335_48992;
var G__48998 = chunk__48337_48993;
var G__48999 = count__48338_48994;
var G__49000 = (i__48339_48995 + (1));
seq__48335_48992 = G__48997;
chunk__48337_48993 = G__48998;
count__48338_48994 = G__48999;
i__48339_48995 = G__49000;
continue;
} else {
var G__49001 = seq__48335_48992;
var G__49002 = chunk__48337_48993;
var G__49003 = count__48338_48994;
var G__49004 = (i__48339_48995 + (1));
seq__48335_48992 = G__49001;
chunk__48337_48993 = G__49002;
count__48338_48994 = G__49003;
i__48339_48995 = G__49004;
continue;
}
} else {
var temp__5753__auto___49008 = cljs.core.seq(seq__48335_48992);
if(temp__5753__auto___49008){
var seq__48335_49009__$1 = temp__5753__auto___49008;
if(cljs.core.chunked_seq_QMARK_(seq__48335_49009__$1)){
var c__5568__auto___49010 = cljs.core.chunk_first(seq__48335_49009__$1);
var G__49017 = cljs.core.chunk_rest(seq__48335_49009__$1);
var G__49018 = c__5568__auto___49010;
var G__49019 = cljs.core.count(c__5568__auto___49010);
var G__49020 = (0);
seq__48335_48992 = G__49017;
chunk__48337_48993 = G__49018;
count__48338_48994 = G__49019;
i__48339_48995 = G__49020;
continue;
} else {
var child_49021 = cljs.core.first(seq__48335_49009__$1);
if(cljs.core.truth_(child_49021)){
node.appendChild(child_49021);


var G__49022 = cljs.core.next(seq__48335_49009__$1);
var G__49023 = null;
var G__49024 = (0);
var G__49025 = (0);
seq__48335_48992 = G__49022;
chunk__48337_48993 = G__49023;
count__48338_48994 = G__49024;
i__48339_48995 = G__49025;
continue;
} else {
var G__49026 = cljs.core.next(seq__48335_49009__$1);
var G__49027 = null;
var G__49028 = (0);
var G__49029 = (0);
seq__48335_48992 = G__49026;
chunk__48337_48993 = G__49027;
count__48338_48994 = G__49028;
i__48339_48995 = G__49029;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48987);
}
}


var G__49030 = seq__48285_48980;
var G__49031 = chunk__48287_48981;
var G__49032 = count__48288_48982;
var G__49033 = (i__48289_48983 + (1));
seq__48285_48980 = G__49030;
chunk__48287_48981 = G__49031;
count__48288_48982 = G__49032;
i__48289_48983 = G__49033;
continue;
} else {
var G__49034 = seq__48285_48980;
var G__49035 = chunk__48287_48981;
var G__49036 = count__48288_48982;
var G__49037 = (i__48289_48983 + (1));
seq__48285_48980 = G__49034;
chunk__48287_48981 = G__49035;
count__48288_48982 = G__49036;
i__48289_48983 = G__49037;
continue;
}
} else {
var temp__5753__auto___49038 = cljs.core.seq(seq__48285_48980);
if(temp__5753__auto___49038){
var seq__48285_49039__$1 = temp__5753__auto___49038;
if(cljs.core.chunked_seq_QMARK_(seq__48285_49039__$1)){
var c__5568__auto___49040 = cljs.core.chunk_first(seq__48285_49039__$1);
var G__49041 = cljs.core.chunk_rest(seq__48285_49039__$1);
var G__49042 = c__5568__auto___49040;
var G__49043 = cljs.core.count(c__5568__auto___49040);
var G__49044 = (0);
seq__48285_48980 = G__49041;
chunk__48287_48981 = G__49042;
count__48288_48982 = G__49043;
i__48289_48983 = G__49044;
continue;
} else {
var child_struct_49045 = cljs.core.first(seq__48285_49039__$1);
if((!((child_struct_49045 == null)))){
if(typeof child_struct_49045 === 'string'){
var text_49047 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49047),child_struct_49045].join(''));
} else {
var children_49052 = shadow.dom.svg_node(child_struct_49045);
if(cljs.core.seq_QMARK_(children_49052)){
var seq__48354_49053 = cljs.core.seq(children_49052);
var chunk__48356_49054 = null;
var count__48357_49055 = (0);
var i__48358_49056 = (0);
while(true){
if((i__48358_49056 < count__48357_49055)){
var child_49058 = chunk__48356_49054.cljs$core$IIndexed$_nth$arity$2(null,i__48358_49056);
if(cljs.core.truth_(child_49058)){
node.appendChild(child_49058);


var G__49060 = seq__48354_49053;
var G__49061 = chunk__48356_49054;
var G__49062 = count__48357_49055;
var G__49063 = (i__48358_49056 + (1));
seq__48354_49053 = G__49060;
chunk__48356_49054 = G__49061;
count__48357_49055 = G__49062;
i__48358_49056 = G__49063;
continue;
} else {
var G__49064 = seq__48354_49053;
var G__49065 = chunk__48356_49054;
var G__49066 = count__48357_49055;
var G__49067 = (i__48358_49056 + (1));
seq__48354_49053 = G__49064;
chunk__48356_49054 = G__49065;
count__48357_49055 = G__49066;
i__48358_49056 = G__49067;
continue;
}
} else {
var temp__5753__auto___49068__$1 = cljs.core.seq(seq__48354_49053);
if(temp__5753__auto___49068__$1){
var seq__48354_49069__$1 = temp__5753__auto___49068__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48354_49069__$1)){
var c__5568__auto___49072 = cljs.core.chunk_first(seq__48354_49069__$1);
var G__49073 = cljs.core.chunk_rest(seq__48354_49069__$1);
var G__49074 = c__5568__auto___49072;
var G__49075 = cljs.core.count(c__5568__auto___49072);
var G__49076 = (0);
seq__48354_49053 = G__49073;
chunk__48356_49054 = G__49074;
count__48357_49055 = G__49075;
i__48358_49056 = G__49076;
continue;
} else {
var child_49077 = cljs.core.first(seq__48354_49069__$1);
if(cljs.core.truth_(child_49077)){
node.appendChild(child_49077);


var G__49078 = cljs.core.next(seq__48354_49069__$1);
var G__49079 = null;
var G__49080 = (0);
var G__49081 = (0);
seq__48354_49053 = G__49078;
chunk__48356_49054 = G__49079;
count__48357_49055 = G__49080;
i__48358_49056 = G__49081;
continue;
} else {
var G__49082 = cljs.core.next(seq__48354_49069__$1);
var G__49083 = null;
var G__49084 = (0);
var G__49085 = (0);
seq__48354_49053 = G__49082;
chunk__48356_49054 = G__49083;
count__48357_49055 = G__49084;
i__48358_49056 = G__49085;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49052);
}
}


var G__49091 = cljs.core.next(seq__48285_49039__$1);
var G__49092 = null;
var G__49093 = (0);
var G__49094 = (0);
seq__48285_48980 = G__49091;
chunk__48287_48981 = G__49092;
count__48288_48982 = G__49093;
i__48289_48983 = G__49094;
continue;
} else {
var G__49095 = cljs.core.next(seq__48285_49039__$1);
var G__49096 = null;
var G__49097 = (0);
var G__49098 = (0);
seq__48285_48980 = G__49095;
chunk__48287_48981 = G__49096;
count__48288_48982 = G__49097;
i__48289_48983 = G__49098;
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
var len__5769__auto___49100 = arguments.length;
var i__5770__auto___49101 = (0);
while(true){
if((i__5770__auto___49101 < len__5769__auto___49100)){
args__5775__auto__.push((arguments[i__5770__auto___49101]));

var G__49102 = (i__5770__auto___49101 + (1));
i__5770__auto___49101 = G__49102;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48387){
var G__48388 = cljs.core.first(seq48387);
var seq48387__$1 = cljs.core.next(seq48387);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48388,seq48387__$1);
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
var G__48400 = arguments.length;
switch (G__48400) {
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
var c__44082__auto___49115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_48414){
var state_val_48415 = (state_48414[(1)]);
if((state_val_48415 === (1))){
var state_48414__$1 = state_48414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48414__$1,(2),once_or_cleanup);
} else {
if((state_val_48415 === (2))){
var inst_48411 = (state_48414[(2)]);
var inst_48412 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48414__$1 = (function (){var statearr_48424 = state_48414;
(statearr_48424[(7)] = inst_48411);

return statearr_48424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48414__$1,inst_48412);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43749__auto__ = null;
var shadow$dom$state_machine__43749__auto____0 = (function (){
var statearr_48425 = [null,null,null,null,null,null,null,null];
(statearr_48425[(0)] = shadow$dom$state_machine__43749__auto__);

(statearr_48425[(1)] = (1));

return statearr_48425;
});
var shadow$dom$state_machine__43749__auto____1 = (function (state_48414){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_48414);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e48432){var ex__43752__auto__ = e48432;
var statearr_48434_49119 = state_48414;
(statearr_48434_49119[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_48414[(4)]))){
var statearr_48435_49120 = state_48414;
(statearr_48435_49120[(1)] = cljs.core.first((state_48414[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49124 = state_48414;
state_48414 = G__49124;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
shadow$dom$state_machine__43749__auto__ = function(state_48414){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43749__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43749__auto____1.call(this,state_48414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43749__auto____0;
shadow$dom$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43749__auto____1;
return shadow$dom$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_48440 = f__44083__auto__();
(statearr_48440[(6)] = c__44082__auto___49115);

return statearr_48440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
