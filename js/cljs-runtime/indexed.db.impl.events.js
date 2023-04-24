goog.provide('indexed.db.impl.events');

/**
* @constructor
 * @implements {indexed.db.impl.protocols.BelongsToRequest}
 * @implements {indexed.db.impl.protocols.IDBVersionChangeEvent}
*/
indexed.db.impl.events.VersionChangeEvent = (function (js_event){
this.js_event = js_event;
});
(indexed.db.impl.events.VersionChangeEvent.prototype.indexed$db$impl$protocols$IDBVersionChangeEvent$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.events.VersionChangeEvent.prototype.indexed$db$impl$protocols$IDBVersionChangeEvent$new_version$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.js_event.newVersion;
}));

(indexed.db.impl.events.VersionChangeEvent.prototype.indexed$db$impl$protocols$IDBVersionChangeEvent$old_version$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.js_event.oldVersion;
}));

(indexed.db.impl.events.VersionChangeEvent.prototype.indexed$db$impl$protocols$BelongsToRequest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.events.VersionChangeEvent.prototype.indexed$db$impl$protocols$BelongsToRequest$idb_request$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.js_event.target;
}));

(indexed.db.impl.events.VersionChangeEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js-event","js-event",-881916209,null)], null);
}));

(indexed.db.impl.events.VersionChangeEvent.cljs$lang$type = true);

(indexed.db.impl.events.VersionChangeEvent.cljs$lang$ctorStr = "indexed.db.impl.events/VersionChangeEvent");

(indexed.db.impl.events.VersionChangeEvent.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"indexed.db.impl.events/VersionChangeEvent");
}));

/**
 * Positional factory function for indexed.db.impl.events/VersionChangeEvent.
 */
indexed.db.impl.events.__GT_VersionChangeEvent = (function indexed$db$impl$events$__GT_VersionChangeEvent(js_event){
return (new indexed.db.impl.events.VersionChangeEvent(js_event));
});

indexed.db.impl.events.version_change_event_QMARK_ = (function indexed$db$impl$events$version_change_event_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBVersionChangeEvent$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(indexed.db.impl.protocols.IDBVersionChangeEvent,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(indexed.db.impl.protocols.IDBVersionChangeEvent,x);
}
});
indexed.db.impl.events.create_version_change_event = (function indexed$db$impl$events$create_version_change_event(js_event){
return (new indexed.db.impl.events.VersionChangeEvent(js_event));
});
indexed.db.impl.events.new_version = (function indexed$db$impl$events$new_version(version_change_event){
return indexed.db.impl.protocols.new_version(version_change_event);
});
indexed.db.impl.events.old_version = (function indexed$db$impl$events$old_version(version_change_event){
return indexed.db.impl.protocols.old_version(version_change_event);
});
indexed.db.impl.events.on = (function indexed$db$impl$events$on(var_args){
var G__45076 = arguments.length;
switch (G__45076) {
case 3:
return indexed.db.impl.events.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return indexed.db.impl.events.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.events.on.cljs$core$IFn$_invoke$arity$3 = (function (event_target,type,listener){
indexed.db.impl.protocols.target(event_target).addEventListener(type,listener);

return event_target;
}));

(indexed.db.impl.events.on.cljs$core$IFn$_invoke$arity$4 = (function (event_target,type,listener,options){
indexed.db.impl.protocols.target(event_target).addEventListener(type,listener,cljs.core.clj__GT_js(options));

return event_target;
}));

(indexed.db.impl.events.on.cljs$lang$maxFixedArity = 4);

indexed.db.impl.events.off = (function indexed$db$impl$events$off(var_args){
var G__45083 = arguments.length;
switch (G__45083) {
case 3:
return indexed.db.impl.events.off.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return indexed.db.impl.events.off.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.events.off.cljs$core$IFn$_invoke$arity$3 = (function (event_target,type,listener){
indexed.db.impl.protocols.target(event_target).removeEventListener(type,listener);

return event_target;
}));

(indexed.db.impl.events.off.cljs$core$IFn$_invoke$arity$4 = (function (event_target,type,listener,options){
indexed.db.impl.protocols.target(event_target).removeEventListener(type,listener,cljs.core.clj__GT_js(options));

return event_target;
}));

(indexed.db.impl.events.off.cljs$lang$maxFixedArity = 4);

indexed.db.impl.events.event_target_QMARK_ = (function indexed$db$impl$events$event_target_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$EventTarget$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(indexed.db.impl.protocols.EventTarget,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(indexed.db.impl.protocols.EventTarget,x);
}
});

//# sourceMappingURL=indexed.db.impl.events.js.map
