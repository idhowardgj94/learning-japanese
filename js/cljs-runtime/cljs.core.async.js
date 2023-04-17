goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48829 = (function (f,blockable,meta48830){
this.f = f;
this.blockable = blockable;
this.meta48830 = meta48830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48831,meta48830__$1){
var self__ = this;
var _48831__$1 = this;
return (new cljs.core.async.t_cljs$core$async48829(self__.f,self__.blockable,meta48830__$1));
}));

(cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48831){
var self__ = this;
var _48831__$1 = this;
return self__.meta48830;
}));

(cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48830","meta48830",1170343883,null)], null);
}));

(cljs.core.async.t_cljs$core$async48829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48829");

(cljs.core.async.t_cljs$core$async48829.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48829.
 */
cljs.core.async.__GT_t_cljs$core$async48829 = (function cljs$core$async$__GT_t_cljs$core$async48829(f,blockable,meta48830){
return (new cljs.core.async.t_cljs$core$async48829(f,blockable,meta48830));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48807 = arguments.length;
switch (G__48807) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async48829(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__48895 = arguments.length;
switch (G__48895) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__48920 = arguments.length;
switch (G__48920) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__48927 = arguments.length;
switch (G__48927) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_51564 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51564) : fn1.call(null,val_51564));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51564) : fn1.call(null,val_51564));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__48942 = arguments.length;
switch (G__48942) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___51570 = n;
var x_51571 = (0);
while(true){
if((x_51571 < n__5636__auto___51570)){
(a[x_51571] = x_51571);

var G__51572 = (x_51571 + (1));
x_51571 = G__51572;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48946 = (function (flag,meta48947){
this.flag = flag;
this.meta48947 = meta48947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48948,meta48947__$1){
var self__ = this;
var _48948__$1 = this;
return (new cljs.core.async.t_cljs$core$async48946(self__.flag,meta48947__$1));
}));

(cljs.core.async.t_cljs$core$async48946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48948){
var self__ = this;
var _48948__$1 = this;
return self__.meta48947;
}));

(cljs.core.async.t_cljs$core$async48946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48947","meta48947",-1451194965,null)], null);
}));

(cljs.core.async.t_cljs$core$async48946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48946");

(cljs.core.async.t_cljs$core$async48946.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48946.
 */
cljs.core.async.__GT_t_cljs$core$async48946 = (function cljs$core$async$__GT_t_cljs$core$async48946(flag,meta48947){
return (new cljs.core.async.t_cljs$core$async48946(flag,meta48947));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async48946(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48949 = (function (flag,cb,meta48950){
this.flag = flag;
this.cb = cb;
this.meta48950 = meta48950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48951,meta48950__$1){
var self__ = this;
var _48951__$1 = this;
return (new cljs.core.async.t_cljs$core$async48949(self__.flag,self__.cb,meta48950__$1));
}));

(cljs.core.async.t_cljs$core$async48949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48951){
var self__ = this;
var _48951__$1 = this;
return self__.meta48950;
}));

(cljs.core.async.t_cljs$core$async48949.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48949.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48950","meta48950",1573125366,null)], null);
}));

(cljs.core.async.t_cljs$core$async48949.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48949");

(cljs.core.async.t_cljs$core$async48949.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async48949");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48949.
 */
cljs.core.async.__GT_t_cljs$core$async48949 = (function cljs$core$async$__GT_t_cljs$core$async48949(flag,cb,meta48950){
return (new cljs.core.async.t_cljs$core$async48949(flag,cb,meta48950));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async48949(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48954_SHARP_){
var G__48956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48954_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48956) : fret.call(null,G__48956));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48955_SHARP_){
var G__48957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48955_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48957) : fret.call(null,G__48957));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__51582 = (i + (1));
i = G__51582;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51587 = arguments.length;
var i__5770__auto___51588 = (0);
while(true){
if((i__5770__auto___51588 < len__5769__auto___51587)){
args__5775__auto__.push((arguments[i__5770__auto___51588]));

var G__51590 = (i__5770__auto___51588 + (1));
i__5770__auto___51588 = G__51590;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48962){
var map__48963 = p__48962;
var map__48963__$1 = cljs.core.__destructure_map(map__48963);
var opts = map__48963__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48960){
var G__48961 = cljs.core.first(seq48960);
var seq48960__$1 = cljs.core.next(seq48960);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48961,seq48960__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__48967 = arguments.length;
switch (G__48967) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48721__auto___51594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_49031){
var state_val_49032 = (state_49031[(1)]);
if((state_val_49032 === (7))){
var inst_49027 = (state_49031[(2)]);
var state_49031__$1 = state_49031;
var statearr_49046_51595 = state_49031__$1;
(statearr_49046_51595[(2)] = inst_49027);

(statearr_49046_51595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49032 === (1))){
var state_49031__$1 = state_49031;
var statearr_49047_51596 = state_49031__$1;
(statearr_49047_51596[(2)] = null);

(statearr_49047_51596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49032 === (4))){
var inst_48986 = (state_49031[(7)]);
var inst_48986__$1 = (state_49031[(2)]);
var inst_49007 = (inst_48986__$1 == null);
var state_49031__$1 = (function (){var statearr_49054 = state_49031;
(statearr_49054[(7)] = inst_48986__$1);

return statearr_49054;
})();
if(cljs.core.truth_(inst_49007)){
var statearr_49055_51597 = state_49031__$1;
(statearr_49055_51597[(1)] = (5));

} else {
var statearr_49056_51598 = state_49031__$1;
(statearr_49056_51598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49032 === (13))){
var state_49031__$1 = state_49031;
var statearr_49063_51599 = state_49031__$1;
(statearr_49063_51599[(2)] = null);

(statearr_49063_51599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49032 === (6))){
var inst_48986 = (state_49031[(7)]);
var state_49031__$1 = state_49031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49031__$1,(11),to,inst_48986);
} else {
if((state_val_49032 === (3))){
var inst_49029 = (state_49031[(2)]);
var state_49031__$1 = state_49031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49031__$1,inst_49029);
} else {
if((state_val_49032 === (12))){
var state_49031__$1 = state_49031;
var statearr_49073_51600 = state_49031__$1;
(statearr_49073_51600[(2)] = null);

(statearr_49073_51600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49032 === (2))){
var state_49031__$1 = state_49031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49031__$1,(4),from);
} else {
if((state_val_49032 === (11))){
var inst_49016 = (state_49031[(2)]);
var state_49031__$1 = state_49031;
if(cljs.core.truth_(inst_49016)){
var statearr_49079_51601 = state_49031__$1;
(statearr_49079_51601[(1)] = (12));

} else {
var statearr_49080_51602 = state_49031__$1;
(statearr_49080_51602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49032 === (9))){
var state_49031__$1 = state_49031;
var statearr_49081_51603 = state_49031__$1;
(statearr_49081_51603[(2)] = null);

(statearr_49081_51603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49032 === (5))){
var state_49031__$1 = state_49031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49082_51604 = state_49031__$1;
(statearr_49082_51604[(1)] = (8));

} else {
var statearr_49083_51605 = state_49031__$1;
(statearr_49083_51605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49032 === (14))){
var inst_49025 = (state_49031[(2)]);
var state_49031__$1 = state_49031;
var statearr_49086_51606 = state_49031__$1;
(statearr_49086_51606[(2)] = inst_49025);

(statearr_49086_51606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49032 === (10))){
var inst_49013 = (state_49031[(2)]);
var state_49031__$1 = state_49031;
var statearr_49092_51607 = state_49031__$1;
(statearr_49092_51607[(2)] = inst_49013);

(statearr_49092_51607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49032 === (8))){
var inst_49010 = cljs.core.async.close_BANG_(to);
var state_49031__$1 = state_49031;
var statearr_49093_51608 = state_49031__$1;
(statearr_49093_51608[(2)] = inst_49010);

(statearr_49093_51608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_49094 = [null,null,null,null,null,null,null,null];
(statearr_49094[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_49094[(1)] = (1));

return statearr_49094;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_49031){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49031);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e49095){var ex__48336__auto__ = e49095;
var statearr_49096_51609 = state_49031;
(statearr_49096_51609[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49031[(4)]))){
var statearr_49097_51610 = state_49031;
(statearr_49097_51610[(1)] = cljs.core.first((state_49031[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51611 = state_49031;
state_49031 = G__51611;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_49031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_49031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_49101 = f__48722__auto__();
(statearr_49101[(6)] = c__48721__auto___51594);

return statearr_49101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__49110){
var vec__49111 = p__49110;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49111,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49111,(1),null);
var job = vec__49111;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48721__auto___51613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_49122){
var state_val_49123 = (state_49122[(1)]);
if((state_val_49123 === (1))){
var state_49122__$1 = state_49122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49122__$1,(2),res,v);
} else {
if((state_val_49123 === (2))){
var inst_49119 = (state_49122[(2)]);
var inst_49120 = cljs.core.async.close_BANG_(res);
var state_49122__$1 = (function (){var statearr_49136 = state_49122;
(statearr_49136[(7)] = inst_49119);

return statearr_49136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49122__$1,inst_49120);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0 = (function (){
var statearr_49139 = [null,null,null,null,null,null,null,null];
(statearr_49139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__);

(statearr_49139[(1)] = (1));

return statearr_49139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1 = (function (state_49122){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49122);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e49141){var ex__48336__auto__ = e49141;
var statearr_49142_51617 = state_49122;
(statearr_49142_51617[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49122[(4)]))){
var statearr_49146_51618 = state_49122;
(statearr_49146_51618[(1)] = cljs.core.first((state_49122[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51619 = state_49122;
state_49122 = G__51619;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__ = function(state_49122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1.call(this,state_49122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_49149 = f__48722__auto__();
(statearr_49149[(6)] = c__48721__auto___51613);

return statearr_49149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49154){
var vec__49155 = p__49154;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49155,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49155,(1),null);
var job = vec__49155;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___51620 = n;
var __51621 = (0);
while(true){
if((__51621 < n__5636__auto___51620)){
var G__49163_51622 = type;
var G__49163_51623__$1 = (((G__49163_51622 instanceof cljs.core.Keyword))?G__49163_51622.fqn:null);
switch (G__49163_51623__$1) {
case "compute":
var c__48721__auto___51625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__51621,c__48721__auto___51625,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async){
return (function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = ((function (__51621,c__48721__auto___51625,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async){
return (function (state_49180){
var state_val_49181 = (state_49180[(1)]);
if((state_val_49181 === (1))){
var state_49180__$1 = state_49180;
var statearr_49185_51629 = state_49180__$1;
(statearr_49185_51629[(2)] = null);

(statearr_49185_51629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49181 === (2))){
var state_49180__$1 = state_49180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49180__$1,(4),jobs);
} else {
if((state_val_49181 === (3))){
var inst_49178 = (state_49180[(2)]);
var state_49180__$1 = state_49180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49180__$1,inst_49178);
} else {
if((state_val_49181 === (4))){
var inst_49169 = (state_49180[(2)]);
var inst_49170 = process__$1(inst_49169);
var state_49180__$1 = state_49180;
if(cljs.core.truth_(inst_49170)){
var statearr_49190_51630 = state_49180__$1;
(statearr_49190_51630[(1)] = (5));

} else {
var statearr_49192_51631 = state_49180__$1;
(statearr_49192_51631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49181 === (5))){
var state_49180__$1 = state_49180;
var statearr_49193_51632 = state_49180__$1;
(statearr_49193_51632[(2)] = null);

(statearr_49193_51632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49181 === (6))){
var state_49180__$1 = state_49180;
var statearr_49195_51633 = state_49180__$1;
(statearr_49195_51633[(2)] = null);

(statearr_49195_51633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49181 === (7))){
var inst_49175 = (state_49180[(2)]);
var state_49180__$1 = state_49180;
var statearr_49204_51634 = state_49180__$1;
(statearr_49204_51634[(2)] = inst_49175);

(statearr_49204_51634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__51621,c__48721__auto___51625,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async))
;
return ((function (__51621,switch__48332__auto__,c__48721__auto___51625,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0 = (function (){
var statearr_49217 = [null,null,null,null,null,null,null];
(statearr_49217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__);

(statearr_49217[(1)] = (1));

return statearr_49217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1 = (function (state_49180){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49180);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e49226){var ex__48336__auto__ = e49226;
var statearr_49227_51635 = state_49180;
(statearr_49227_51635[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49180[(4)]))){
var statearr_49233_51636 = state_49180;
(statearr_49233_51636[(1)] = cljs.core.first((state_49180[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51637 = state_49180;
state_49180 = G__51637;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__ = function(state_49180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1.call(this,state_49180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__;
})()
;})(__51621,switch__48332__auto__,c__48721__auto___51625,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async))
})();
var state__48723__auto__ = (function (){var statearr_49244 = f__48722__auto__();
(statearr_49244[(6)] = c__48721__auto___51625);

return statearr_49244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
});})(__51621,c__48721__auto___51625,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async))
);


break;
case "async":
var c__48721__auto___51638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__51621,c__48721__auto___51638,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async){
return (function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = ((function (__51621,c__48721__auto___51638,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async){
return (function (state_49265){
var state_val_49266 = (state_49265[(1)]);
if((state_val_49266 === (1))){
var state_49265__$1 = state_49265;
var statearr_49276_51640 = state_49265__$1;
(statearr_49276_51640[(2)] = null);

(statearr_49276_51640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49266 === (2))){
var state_49265__$1 = state_49265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49265__$1,(4),jobs);
} else {
if((state_val_49266 === (3))){
var inst_49263 = (state_49265[(2)]);
var state_49265__$1 = state_49265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49265__$1,inst_49263);
} else {
if((state_val_49266 === (4))){
var inst_49255 = (state_49265[(2)]);
var inst_49256 = async(inst_49255);
var state_49265__$1 = state_49265;
if(cljs.core.truth_(inst_49256)){
var statearr_49279_51641 = state_49265__$1;
(statearr_49279_51641[(1)] = (5));

} else {
var statearr_49280_51642 = state_49265__$1;
(statearr_49280_51642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49266 === (5))){
var state_49265__$1 = state_49265;
var statearr_49281_51643 = state_49265__$1;
(statearr_49281_51643[(2)] = null);

(statearr_49281_51643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49266 === (6))){
var state_49265__$1 = state_49265;
var statearr_49282_51644 = state_49265__$1;
(statearr_49282_51644[(2)] = null);

(statearr_49282_51644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49266 === (7))){
var inst_49261 = (state_49265[(2)]);
var state_49265__$1 = state_49265;
var statearr_49287_51645 = state_49265__$1;
(statearr_49287_51645[(2)] = inst_49261);

(statearr_49287_51645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__51621,c__48721__auto___51638,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async))
;
return ((function (__51621,switch__48332__auto__,c__48721__auto___51638,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0 = (function (){
var statearr_49305 = [null,null,null,null,null,null,null];
(statearr_49305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__);

(statearr_49305[(1)] = (1));

return statearr_49305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1 = (function (state_49265){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49265);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e49307){var ex__48336__auto__ = e49307;
var statearr_49308_51646 = state_49265;
(statearr_49308_51646[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49265[(4)]))){
var statearr_49309_51648 = state_49265;
(statearr_49309_51648[(1)] = cljs.core.first((state_49265[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51650 = state_49265;
state_49265 = G__51650;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__ = function(state_49265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1.call(this,state_49265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__;
})()
;})(__51621,switch__48332__auto__,c__48721__auto___51638,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async))
})();
var state__48723__auto__ = (function (){var statearr_49320 = f__48722__auto__();
(statearr_49320[(6)] = c__48721__auto___51638);

return statearr_49320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
});})(__51621,c__48721__auto___51638,G__49163_51622,G__49163_51623__$1,n__5636__auto___51620,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49163_51623__$1)].join('')));

}

var G__51651 = (__51621 + (1));
__51621 = G__51651;
continue;
} else {
}
break;
}

var c__48721__auto___51652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_49383){
var state_val_49384 = (state_49383[(1)]);
if((state_val_49384 === (7))){
var inst_49379 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
var statearr_49395_51653 = state_49383__$1;
(statearr_49395_51653[(2)] = inst_49379);

(statearr_49395_51653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (1))){
var state_49383__$1 = state_49383;
var statearr_49403_51654 = state_49383__$1;
(statearr_49403_51654[(2)] = null);

(statearr_49403_51654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (4))){
var inst_49348 = (state_49383[(7)]);
var inst_49348__$1 = (state_49383[(2)]);
var inst_49349 = (inst_49348__$1 == null);
var state_49383__$1 = (function (){var statearr_49418 = state_49383;
(statearr_49418[(7)] = inst_49348__$1);

return statearr_49418;
})();
if(cljs.core.truth_(inst_49349)){
var statearr_49419_51655 = state_49383__$1;
(statearr_49419_51655[(1)] = (5));

} else {
var statearr_49420_51656 = state_49383__$1;
(statearr_49420_51656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (6))){
var inst_49353 = (state_49383[(8)]);
var inst_49348 = (state_49383[(7)]);
var inst_49353__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_49360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49366 = [inst_49348,inst_49353__$1];
var inst_49367 = (new cljs.core.PersistentVector(null,2,(5),inst_49360,inst_49366,null));
var state_49383__$1 = (function (){var statearr_49424 = state_49383;
(statearr_49424[(8)] = inst_49353__$1);

return statearr_49424;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49383__$1,(8),jobs,inst_49367);
} else {
if((state_val_49384 === (3))){
var inst_49381 = (state_49383[(2)]);
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49383__$1,inst_49381);
} else {
if((state_val_49384 === (2))){
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49383__$1,(4),from);
} else {
if((state_val_49384 === (9))){
var inst_49372 = (state_49383[(2)]);
var state_49383__$1 = (function (){var statearr_49425 = state_49383;
(statearr_49425[(9)] = inst_49372);

return statearr_49425;
})();
var statearr_49426_51661 = state_49383__$1;
(statearr_49426_51661[(2)] = null);

(statearr_49426_51661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (5))){
var inst_49351 = cljs.core.async.close_BANG_(jobs);
var state_49383__$1 = state_49383;
var statearr_49427_51666 = state_49383__$1;
(statearr_49427_51666[(2)] = inst_49351);

(statearr_49427_51666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49384 === (8))){
var inst_49353 = (state_49383[(8)]);
var inst_49369 = (state_49383[(2)]);
var state_49383__$1 = (function (){var statearr_49428 = state_49383;
(statearr_49428[(10)] = inst_49369);

return statearr_49428;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49383__$1,(9),results,inst_49353);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0 = (function (){
var statearr_49429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__);

(statearr_49429[(1)] = (1));

return statearr_49429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1 = (function (state_49383){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49383);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e49430){var ex__48336__auto__ = e49430;
var statearr_49431_51670 = state_49383;
(statearr_49431_51670[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49383[(4)]))){
var statearr_49432_51671 = state_49383;
(statearr_49432_51671[(1)] = cljs.core.first((state_49383[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51672 = state_49383;
state_49383 = G__51672;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__ = function(state_49383){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1.call(this,state_49383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_49434 = f__48722__auto__();
(statearr_49434[(6)] = c__48721__auto___51652);

return statearr_49434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


var c__48721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_49486){
var state_val_49487 = (state_49486[(1)]);
if((state_val_49487 === (7))){
var inst_49482 = (state_49486[(2)]);
var state_49486__$1 = state_49486;
var statearr_49488_51673 = state_49486__$1;
(statearr_49488_51673[(2)] = inst_49482);

(statearr_49488_51673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (20))){
var state_49486__$1 = state_49486;
var statearr_49489_51674 = state_49486__$1;
(statearr_49489_51674[(2)] = null);

(statearr_49489_51674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (1))){
var state_49486__$1 = state_49486;
var statearr_49490_51676 = state_49486__$1;
(statearr_49490_51676[(2)] = null);

(statearr_49490_51676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (4))){
var inst_49441 = (state_49486[(7)]);
var inst_49441__$1 = (state_49486[(2)]);
var inst_49442 = (inst_49441__$1 == null);
var state_49486__$1 = (function (){var statearr_49491 = state_49486;
(statearr_49491[(7)] = inst_49441__$1);

return statearr_49491;
})();
if(cljs.core.truth_(inst_49442)){
var statearr_49492_51678 = state_49486__$1;
(statearr_49492_51678[(1)] = (5));

} else {
var statearr_49493_51679 = state_49486__$1;
(statearr_49493_51679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (15))){
var inst_49454 = (state_49486[(8)]);
var state_49486__$1 = state_49486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49486__$1,(18),to,inst_49454);
} else {
if((state_val_49487 === (21))){
var inst_49471 = (state_49486[(2)]);
var state_49486__$1 = state_49486;
var statearr_49494_51680 = state_49486__$1;
(statearr_49494_51680[(2)] = inst_49471);

(statearr_49494_51680[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (13))){
var inst_49473 = (state_49486[(2)]);
var state_49486__$1 = (function (){var statearr_49495 = state_49486;
(statearr_49495[(9)] = inst_49473);

return statearr_49495;
})();
var statearr_49496_51681 = state_49486__$1;
(statearr_49496_51681[(2)] = null);

(statearr_49496_51681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (6))){
var inst_49441 = (state_49486[(7)]);
var state_49486__$1 = state_49486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49486__$1,(11),inst_49441);
} else {
if((state_val_49487 === (17))){
var inst_49466 = (state_49486[(2)]);
var state_49486__$1 = state_49486;
if(cljs.core.truth_(inst_49466)){
var statearr_49497_51682 = state_49486__$1;
(statearr_49497_51682[(1)] = (19));

} else {
var statearr_49498_51683 = state_49486__$1;
(statearr_49498_51683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (3))){
var inst_49484 = (state_49486[(2)]);
var state_49486__$1 = state_49486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49486__$1,inst_49484);
} else {
if((state_val_49487 === (12))){
var inst_49451 = (state_49486[(10)]);
var state_49486__$1 = state_49486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49486__$1,(14),inst_49451);
} else {
if((state_val_49487 === (2))){
var state_49486__$1 = state_49486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49486__$1,(4),results);
} else {
if((state_val_49487 === (19))){
var state_49486__$1 = state_49486;
var statearr_49499_51684 = state_49486__$1;
(statearr_49499_51684[(2)] = null);

(statearr_49499_51684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (11))){
var inst_49451 = (state_49486[(2)]);
var state_49486__$1 = (function (){var statearr_49500 = state_49486;
(statearr_49500[(10)] = inst_49451);

return statearr_49500;
})();
var statearr_49501_51685 = state_49486__$1;
(statearr_49501_51685[(2)] = null);

(statearr_49501_51685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (9))){
var state_49486__$1 = state_49486;
var statearr_49508_51686 = state_49486__$1;
(statearr_49508_51686[(2)] = null);

(statearr_49508_51686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (5))){
var state_49486__$1 = state_49486;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49509_51687 = state_49486__$1;
(statearr_49509_51687[(1)] = (8));

} else {
var statearr_49510_51688 = state_49486__$1;
(statearr_49510_51688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (14))){
var inst_49454 = (state_49486[(8)]);
var inst_49460 = (state_49486[(11)]);
var inst_49454__$1 = (state_49486[(2)]);
var inst_49459 = (inst_49454__$1 == null);
var inst_49460__$1 = cljs.core.not(inst_49459);
var state_49486__$1 = (function (){var statearr_49511 = state_49486;
(statearr_49511[(8)] = inst_49454__$1);

(statearr_49511[(11)] = inst_49460__$1);

return statearr_49511;
})();
if(inst_49460__$1){
var statearr_49512_51690 = state_49486__$1;
(statearr_49512_51690[(1)] = (15));

} else {
var statearr_49513_51691 = state_49486__$1;
(statearr_49513_51691[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (16))){
var inst_49460 = (state_49486[(11)]);
var state_49486__$1 = state_49486;
var statearr_49514_51693 = state_49486__$1;
(statearr_49514_51693[(2)] = inst_49460);

(statearr_49514_51693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (10))){
var inst_49448 = (state_49486[(2)]);
var state_49486__$1 = state_49486;
var statearr_49515_51694 = state_49486__$1;
(statearr_49515_51694[(2)] = inst_49448);

(statearr_49515_51694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (18))){
var inst_49463 = (state_49486[(2)]);
var state_49486__$1 = state_49486;
var statearr_49516_51695 = state_49486__$1;
(statearr_49516_51695[(2)] = inst_49463);

(statearr_49516_51695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49487 === (8))){
var inst_49445 = cljs.core.async.close_BANG_(to);
var state_49486__$1 = state_49486;
var statearr_49517_51696 = state_49486__$1;
(statearr_49517_51696[(2)] = inst_49445);

(statearr_49517_51696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0 = (function (){
var statearr_49518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__);

(statearr_49518[(1)] = (1));

return statearr_49518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1 = (function (state_49486){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49486);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e49519){var ex__48336__auto__ = e49519;
var statearr_49520_51697 = state_49486;
(statearr_49520_51697[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49486[(4)]))){
var statearr_49521_51698 = state_49486;
(statearr_49521_51698[(1)] = cljs.core.first((state_49486[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51699 = state_49486;
state_49486 = G__51699;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__ = function(state_49486){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1.call(this,state_49486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48333__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_49525 = f__48722__auto__();
(statearr_49525[(6)] = c__48721__auto__);

return statearr_49525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));

return c__48721__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__49527 = arguments.length;
switch (G__49527) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__49532 = arguments.length;
switch (G__49532) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__49540 = arguments.length;
switch (G__49540) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__48721__auto___51710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_49571){
var state_val_49572 = (state_49571[(1)]);
if((state_val_49572 === (7))){
var inst_49567 = (state_49571[(2)]);
var state_49571__$1 = state_49571;
var statearr_49573_51712 = state_49571__$1;
(statearr_49573_51712[(2)] = inst_49567);

(statearr_49573_51712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49572 === (1))){
var state_49571__$1 = state_49571;
var statearr_49574_51713 = state_49571__$1;
(statearr_49574_51713[(2)] = null);

(statearr_49574_51713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49572 === (4))){
var inst_49547 = (state_49571[(7)]);
var inst_49547__$1 = (state_49571[(2)]);
var inst_49548 = (inst_49547__$1 == null);
var state_49571__$1 = (function (){var statearr_49578 = state_49571;
(statearr_49578[(7)] = inst_49547__$1);

return statearr_49578;
})();
if(cljs.core.truth_(inst_49548)){
var statearr_49580_51715 = state_49571__$1;
(statearr_49580_51715[(1)] = (5));

} else {
var statearr_49584_51716 = state_49571__$1;
(statearr_49584_51716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49572 === (13))){
var state_49571__$1 = state_49571;
var statearr_49585_51717 = state_49571__$1;
(statearr_49585_51717[(2)] = null);

(statearr_49585_51717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49572 === (6))){
var inst_49547 = (state_49571[(7)]);
var inst_49554 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49547) : p.call(null,inst_49547));
var state_49571__$1 = state_49571;
if(cljs.core.truth_(inst_49554)){
var statearr_49587_51718 = state_49571__$1;
(statearr_49587_51718[(1)] = (9));

} else {
var statearr_49588_51719 = state_49571__$1;
(statearr_49588_51719[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49572 === (3))){
var inst_49569 = (state_49571[(2)]);
var state_49571__$1 = state_49571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49571__$1,inst_49569);
} else {
if((state_val_49572 === (12))){
var state_49571__$1 = state_49571;
var statearr_49592_51720 = state_49571__$1;
(statearr_49592_51720[(2)] = null);

(statearr_49592_51720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49572 === (2))){
var state_49571__$1 = state_49571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49571__$1,(4),ch);
} else {
if((state_val_49572 === (11))){
var inst_49547 = (state_49571[(7)]);
var inst_49558 = (state_49571[(2)]);
var state_49571__$1 = state_49571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49571__$1,(8),inst_49558,inst_49547);
} else {
if((state_val_49572 === (9))){
var state_49571__$1 = state_49571;
var statearr_49593_51721 = state_49571__$1;
(statearr_49593_51721[(2)] = tc);

(statearr_49593_51721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49572 === (5))){
var inst_49551 = cljs.core.async.close_BANG_(tc);
var inst_49552 = cljs.core.async.close_BANG_(fc);
var state_49571__$1 = (function (){var statearr_49594 = state_49571;
(statearr_49594[(8)] = inst_49551);

return statearr_49594;
})();
var statearr_49595_51722 = state_49571__$1;
(statearr_49595_51722[(2)] = inst_49552);

(statearr_49595_51722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49572 === (14))){
var inst_49565 = (state_49571[(2)]);
var state_49571__$1 = state_49571;
var statearr_49596_51723 = state_49571__$1;
(statearr_49596_51723[(2)] = inst_49565);

(statearr_49596_51723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49572 === (10))){
var state_49571__$1 = state_49571;
var statearr_49597_51725 = state_49571__$1;
(statearr_49597_51725[(2)] = fc);

(statearr_49597_51725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49572 === (8))){
var inst_49560 = (state_49571[(2)]);
var state_49571__$1 = state_49571;
if(cljs.core.truth_(inst_49560)){
var statearr_49598_51728 = state_49571__$1;
(statearr_49598_51728[(1)] = (12));

} else {
var statearr_49599_51732 = state_49571__$1;
(statearr_49599_51732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_49600 = [null,null,null,null,null,null,null,null,null];
(statearr_49600[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_49600[(1)] = (1));

return statearr_49600;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_49571){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49571);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e49601){var ex__48336__auto__ = e49601;
var statearr_49602_51734 = state_49571;
(statearr_49602_51734[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49571[(4)]))){
var statearr_49603_51737 = state_49571;
(statearr_49603_51737[(1)] = cljs.core.first((state_49571[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51738 = state_49571;
state_49571 = G__51738;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_49571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_49571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_49604 = f__48722__auto__();
(statearr_49604[(6)] = c__48721__auto___51710);

return statearr_49604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_49632){
var state_val_49633 = (state_49632[(1)]);
if((state_val_49633 === (7))){
var inst_49627 = (state_49632[(2)]);
var state_49632__$1 = state_49632;
var statearr_49635_51741 = state_49632__$1;
(statearr_49635_51741[(2)] = inst_49627);

(statearr_49635_51741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (1))){
var inst_49609 = init;
var inst_49610 = inst_49609;
var state_49632__$1 = (function (){var statearr_49636 = state_49632;
(statearr_49636[(7)] = inst_49610);

return statearr_49636;
})();
var statearr_49637_51743 = state_49632__$1;
(statearr_49637_51743[(2)] = null);

(statearr_49637_51743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (4))){
var inst_49613 = (state_49632[(8)]);
var inst_49613__$1 = (state_49632[(2)]);
var inst_49614 = (inst_49613__$1 == null);
var state_49632__$1 = (function (){var statearr_49638 = state_49632;
(statearr_49638[(8)] = inst_49613__$1);

return statearr_49638;
})();
if(cljs.core.truth_(inst_49614)){
var statearr_49639_51744 = state_49632__$1;
(statearr_49639_51744[(1)] = (5));

} else {
var statearr_49641_51745 = state_49632__$1;
(statearr_49641_51745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (6))){
var inst_49610 = (state_49632[(7)]);
var inst_49613 = (state_49632[(8)]);
var inst_49617 = (state_49632[(9)]);
var inst_49617__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49610,inst_49613) : f.call(null,inst_49610,inst_49613));
var inst_49618 = cljs.core.reduced_QMARK_(inst_49617__$1);
var state_49632__$1 = (function (){var statearr_49642 = state_49632;
(statearr_49642[(9)] = inst_49617__$1);

return statearr_49642;
})();
if(inst_49618){
var statearr_49643_51748 = state_49632__$1;
(statearr_49643_51748[(1)] = (8));

} else {
var statearr_49644_51750 = state_49632__$1;
(statearr_49644_51750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (3))){
var inst_49629 = (state_49632[(2)]);
var state_49632__$1 = state_49632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49632__$1,inst_49629);
} else {
if((state_val_49633 === (2))){
var state_49632__$1 = state_49632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49632__$1,(4),ch);
} else {
if((state_val_49633 === (9))){
var inst_49617 = (state_49632[(9)]);
var inst_49610 = inst_49617;
var state_49632__$1 = (function (){var statearr_49646 = state_49632;
(statearr_49646[(7)] = inst_49610);

return statearr_49646;
})();
var statearr_49647_51752 = state_49632__$1;
(statearr_49647_51752[(2)] = null);

(statearr_49647_51752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (5))){
var inst_49610 = (state_49632[(7)]);
var state_49632__$1 = state_49632;
var statearr_49651_51753 = state_49632__$1;
(statearr_49651_51753[(2)] = inst_49610);

(statearr_49651_51753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (10))){
var inst_49625 = (state_49632[(2)]);
var state_49632__$1 = state_49632;
var statearr_49652_51754 = state_49632__$1;
(statearr_49652_51754[(2)] = inst_49625);

(statearr_49652_51754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (8))){
var inst_49617 = (state_49632[(9)]);
var inst_49620 = cljs.core.deref(inst_49617);
var state_49632__$1 = state_49632;
var statearr_49653_51756 = state_49632__$1;
(statearr_49653_51756[(2)] = inst_49620);

(statearr_49653_51756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__48333__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48333__auto____0 = (function (){
var statearr_49654 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49654[(0)] = cljs$core$async$reduce_$_state_machine__48333__auto__);

(statearr_49654[(1)] = (1));

return statearr_49654;
});
var cljs$core$async$reduce_$_state_machine__48333__auto____1 = (function (state_49632){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49632);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e49655){var ex__48336__auto__ = e49655;
var statearr_49656_51757 = state_49632;
(statearr_49656_51757[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49632[(4)]))){
var statearr_49657_51759 = state_49632;
(statearr_49657_51759[(1)] = cljs.core.first((state_49632[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51761 = state_49632;
state_49632 = G__51761;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48333__auto__ = function(state_49632){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48333__auto____1.call(this,state_49632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48333__auto____0;
cljs$core$async$reduce_$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48333__auto____1;
return cljs$core$async$reduce_$_state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_49658 = f__48722__auto__();
(statearr_49658[(6)] = c__48721__auto__);

return statearr_49658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));

return c__48721__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__48721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_49673){
var state_val_49674 = (state_49673[(1)]);
if((state_val_49674 === (1))){
var inst_49668 = cljs.core.async.reduce(f__$1,init,ch);
var state_49673__$1 = state_49673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49673__$1,(2),inst_49668);
} else {
if((state_val_49674 === (2))){
var inst_49670 = (state_49673[(2)]);
var inst_49671 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_49670) : f__$1.call(null,inst_49670));
var state_49673__$1 = state_49673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49673__$1,inst_49671);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48333__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48333__auto____0 = (function (){
var statearr_49682 = [null,null,null,null,null,null,null];
(statearr_49682[(0)] = cljs$core$async$transduce_$_state_machine__48333__auto__);

(statearr_49682[(1)] = (1));

return statearr_49682;
});
var cljs$core$async$transduce_$_state_machine__48333__auto____1 = (function (state_49673){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49673);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e49683){var ex__48336__auto__ = e49683;
var statearr_49684_51769 = state_49673;
(statearr_49684_51769[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49673[(4)]))){
var statearr_49685_51770 = state_49673;
(statearr_49685_51770[(1)] = cljs.core.first((state_49673[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51771 = state_49673;
state_49673 = G__51771;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48333__auto__ = function(state_49673){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48333__auto____1.call(this,state_49673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48333__auto____0;
cljs$core$async$transduce_$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48333__auto____1;
return cljs$core$async$transduce_$_state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_49688 = f__48722__auto__();
(statearr_49688[(6)] = c__48721__auto__);

return statearr_49688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));

return c__48721__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__49690 = arguments.length;
switch (G__49690) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_49716){
var state_val_49717 = (state_49716[(1)]);
if((state_val_49717 === (7))){
var inst_49697 = (state_49716[(2)]);
var state_49716__$1 = state_49716;
var statearr_49726_51773 = state_49716__$1;
(statearr_49726_51773[(2)] = inst_49697);

(statearr_49726_51773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49717 === (1))){
var inst_49691 = cljs.core.seq(coll);
var inst_49692 = inst_49691;
var state_49716__$1 = (function (){var statearr_49727 = state_49716;
(statearr_49727[(7)] = inst_49692);

return statearr_49727;
})();
var statearr_49728_51778 = state_49716__$1;
(statearr_49728_51778[(2)] = null);

(statearr_49728_51778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49717 === (4))){
var inst_49692 = (state_49716[(7)]);
var inst_49695 = cljs.core.first(inst_49692);
var state_49716__$1 = state_49716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49716__$1,(7),ch,inst_49695);
} else {
if((state_val_49717 === (13))){
var inst_49710 = (state_49716[(2)]);
var state_49716__$1 = state_49716;
var statearr_49731_51780 = state_49716__$1;
(statearr_49731_51780[(2)] = inst_49710);

(statearr_49731_51780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49717 === (6))){
var inst_49700 = (state_49716[(2)]);
var state_49716__$1 = state_49716;
if(cljs.core.truth_(inst_49700)){
var statearr_49734_51781 = state_49716__$1;
(statearr_49734_51781[(1)] = (8));

} else {
var statearr_49735_51782 = state_49716__$1;
(statearr_49735_51782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49717 === (3))){
var inst_49714 = (state_49716[(2)]);
var state_49716__$1 = state_49716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49716__$1,inst_49714);
} else {
if((state_val_49717 === (12))){
var state_49716__$1 = state_49716;
var statearr_49738_51784 = state_49716__$1;
(statearr_49738_51784[(2)] = null);

(statearr_49738_51784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49717 === (2))){
var inst_49692 = (state_49716[(7)]);
var state_49716__$1 = state_49716;
if(cljs.core.truth_(inst_49692)){
var statearr_49739_51785 = state_49716__$1;
(statearr_49739_51785[(1)] = (4));

} else {
var statearr_49740_51786 = state_49716__$1;
(statearr_49740_51786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49717 === (11))){
var inst_49707 = cljs.core.async.close_BANG_(ch);
var state_49716__$1 = state_49716;
var statearr_49747_51787 = state_49716__$1;
(statearr_49747_51787[(2)] = inst_49707);

(statearr_49747_51787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49717 === (9))){
var state_49716__$1 = state_49716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49749_51788 = state_49716__$1;
(statearr_49749_51788[(1)] = (11));

} else {
var statearr_49751_51789 = state_49716__$1;
(statearr_49751_51789[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49717 === (5))){
var inst_49692 = (state_49716[(7)]);
var state_49716__$1 = state_49716;
var statearr_49753_51791 = state_49716__$1;
(statearr_49753_51791[(2)] = inst_49692);

(statearr_49753_51791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49717 === (10))){
var inst_49712 = (state_49716[(2)]);
var state_49716__$1 = state_49716;
var statearr_49754_51804 = state_49716__$1;
(statearr_49754_51804[(2)] = inst_49712);

(statearr_49754_51804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49717 === (8))){
var inst_49692 = (state_49716[(7)]);
var inst_49702 = cljs.core.next(inst_49692);
var inst_49692__$1 = inst_49702;
var state_49716__$1 = (function (){var statearr_49758 = state_49716;
(statearr_49758[(7)] = inst_49692__$1);

return statearr_49758;
})();
var statearr_49759_51807 = state_49716__$1;
(statearr_49759_51807[(2)] = null);

(statearr_49759_51807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_49763 = [null,null,null,null,null,null,null,null];
(statearr_49763[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_49763[(1)] = (1));

return statearr_49763;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_49716){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49716);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e49766){var ex__48336__auto__ = e49766;
var statearr_49767_51811 = state_49716;
(statearr_49767_51811[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49716[(4)]))){
var statearr_49768_51812 = state_49716;
(statearr_49768_51812[(1)] = cljs.core.first((state_49716[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51813 = state_49716;
state_49716 = G__51813;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_49716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_49716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_49769 = f__48722__auto__();
(statearr_49769[(6)] = c__48721__auto__);

return statearr_49769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));

return c__48721__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__49778 = arguments.length;
switch (G__49778) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_51820 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_51820(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_51823 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_51823(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_51826 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_51826(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_51828 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_51828(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49810 = (function (ch,cs,meta49811){
this.ch = ch;
this.cs = cs;
this.meta49811 = meta49811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49812,meta49811__$1){
var self__ = this;
var _49812__$1 = this;
return (new cljs.core.async.t_cljs$core$async49810(self__.ch,self__.cs,meta49811__$1));
}));

(cljs.core.async.t_cljs$core$async49810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49812){
var self__ = this;
var _49812__$1 = this;
return self__.meta49811;
}));

(cljs.core.async.t_cljs$core$async49810.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49810.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49810.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49810.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async49810.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async49810.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async49810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49811","meta49811",2063609431,null)], null);
}));

(cljs.core.async.t_cljs$core$async49810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49810");

(cljs.core.async.t_cljs$core$async49810.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async49810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49810.
 */
cljs.core.async.__GT_t_cljs$core$async49810 = (function cljs$core$async$__GT_t_cljs$core$async49810(ch,cs,meta49811){
return (new cljs.core.async.t_cljs$core$async49810(ch,cs,meta49811));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async49810(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__48721__auto___51841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_49974){
var state_val_49975 = (state_49974[(1)]);
if((state_val_49975 === (7))){
var inst_49968 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_49980_51844 = state_49974__$1;
(statearr_49980_51844[(2)] = inst_49968);

(statearr_49980_51844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (20))){
var inst_49862 = (state_49974[(7)]);
var inst_49877 = cljs.core.first(inst_49862);
var inst_49878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49877,(0),null);
var inst_49879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49877,(1),null);
var state_49974__$1 = (function (){var statearr_49981 = state_49974;
(statearr_49981[(8)] = inst_49878);

return statearr_49981;
})();
if(cljs.core.truth_(inst_49879)){
var statearr_49982_51849 = state_49974__$1;
(statearr_49982_51849[(1)] = (22));

} else {
var statearr_49983_51850 = state_49974__$1;
(statearr_49983_51850[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (27))){
var inst_49911 = (state_49974[(9)]);
var inst_49918 = (state_49974[(10)]);
var inst_49913 = (state_49974[(11)]);
var inst_49830 = (state_49974[(12)]);
var inst_49918__$1 = cljs.core._nth(inst_49911,inst_49913);
var inst_49919 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49918__$1,inst_49830,done);
var state_49974__$1 = (function (){var statearr_49984 = state_49974;
(statearr_49984[(10)] = inst_49918__$1);

return statearr_49984;
})();
if(cljs.core.truth_(inst_49919)){
var statearr_49985_51857 = state_49974__$1;
(statearr_49985_51857[(1)] = (30));

} else {
var statearr_49986_51858 = state_49974__$1;
(statearr_49986_51858[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (1))){
var state_49974__$1 = state_49974;
var statearr_49991_51859 = state_49974__$1;
(statearr_49991_51859[(2)] = null);

(statearr_49991_51859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (24))){
var inst_49862 = (state_49974[(7)]);
var inst_49885 = (state_49974[(2)]);
var inst_49887 = cljs.core.next(inst_49862);
var inst_49840 = inst_49887;
var inst_49841 = null;
var inst_49842 = (0);
var inst_49843 = (0);
var state_49974__$1 = (function (){var statearr_49992 = state_49974;
(statearr_49992[(13)] = inst_49843);

(statearr_49992[(14)] = inst_49841);

(statearr_49992[(15)] = inst_49885);

(statearr_49992[(16)] = inst_49840);

(statearr_49992[(17)] = inst_49842);

return statearr_49992;
})();
var statearr_49993_51866 = state_49974__$1;
(statearr_49993_51866[(2)] = null);

(statearr_49993_51866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (39))){
var state_49974__$1 = state_49974;
var statearr_50001_51867 = state_49974__$1;
(statearr_50001_51867[(2)] = null);

(statearr_50001_51867[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (4))){
var inst_49830 = (state_49974[(12)]);
var inst_49830__$1 = (state_49974[(2)]);
var inst_49831 = (inst_49830__$1 == null);
var state_49974__$1 = (function (){var statearr_50003 = state_49974;
(statearr_50003[(12)] = inst_49830__$1);

return statearr_50003;
})();
if(cljs.core.truth_(inst_49831)){
var statearr_50004_51872 = state_49974__$1;
(statearr_50004_51872[(1)] = (5));

} else {
var statearr_50005_51877 = state_49974__$1;
(statearr_50005_51877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (15))){
var inst_49843 = (state_49974[(13)]);
var inst_49841 = (state_49974[(14)]);
var inst_49840 = (state_49974[(16)]);
var inst_49842 = (state_49974[(17)]);
var inst_49858 = (state_49974[(2)]);
var inst_49859 = (inst_49843 + (1));
var tmp49998 = inst_49841;
var tmp49999 = inst_49840;
var tmp50000 = inst_49842;
var inst_49840__$1 = tmp49999;
var inst_49841__$1 = tmp49998;
var inst_49842__$1 = tmp50000;
var inst_49843__$1 = inst_49859;
var state_49974__$1 = (function (){var statearr_50008 = state_49974;
(statearr_50008[(13)] = inst_49843__$1);

(statearr_50008[(14)] = inst_49841__$1);

(statearr_50008[(18)] = inst_49858);

(statearr_50008[(16)] = inst_49840__$1);

(statearr_50008[(17)] = inst_49842__$1);

return statearr_50008;
})();
var statearr_50013_51878 = state_49974__$1;
(statearr_50013_51878[(2)] = null);

(statearr_50013_51878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (21))){
var inst_49890 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50020_51883 = state_49974__$1;
(statearr_50020_51883[(2)] = inst_49890);

(statearr_50020_51883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (31))){
var inst_49918 = (state_49974[(10)]);
var inst_49923 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49918);
var state_49974__$1 = state_49974;
var statearr_50023_51888 = state_49974__$1;
(statearr_50023_51888[(2)] = inst_49923);

(statearr_50023_51888[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (32))){
var inst_49910 = (state_49974[(19)]);
var inst_49912 = (state_49974[(20)]);
var inst_49911 = (state_49974[(9)]);
var inst_49913 = (state_49974[(11)]);
var inst_49926 = (state_49974[(2)]);
var inst_49927 = (inst_49913 + (1));
var tmp50015 = inst_49910;
var tmp50016 = inst_49912;
var tmp50017 = inst_49911;
var inst_49910__$1 = tmp50015;
var inst_49911__$1 = tmp50017;
var inst_49912__$1 = tmp50016;
var inst_49913__$1 = inst_49927;
var state_49974__$1 = (function (){var statearr_50025 = state_49974;
(statearr_50025[(19)] = inst_49910__$1);

(statearr_50025[(20)] = inst_49912__$1);

(statearr_50025[(9)] = inst_49911__$1);

(statearr_50025[(11)] = inst_49913__$1);

(statearr_50025[(21)] = inst_49926);

return statearr_50025;
})();
var statearr_50027_51893 = state_49974__$1;
(statearr_50027_51893[(2)] = null);

(statearr_50027_51893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (40))){
var inst_49941 = (state_49974[(22)]);
var inst_49945 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49941);
var state_49974__$1 = state_49974;
var statearr_50028_51895 = state_49974__$1;
(statearr_50028_51895[(2)] = inst_49945);

(statearr_50028_51895[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (33))){
var inst_49930 = (state_49974[(23)]);
var inst_49934 = cljs.core.chunked_seq_QMARK_(inst_49930);
var state_49974__$1 = state_49974;
if(inst_49934){
var statearr_50033_51899 = state_49974__$1;
(statearr_50033_51899[(1)] = (36));

} else {
var statearr_50034_51900 = state_49974__$1;
(statearr_50034_51900[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (13))){
var inst_49852 = (state_49974[(24)]);
var inst_49855 = cljs.core.async.close_BANG_(inst_49852);
var state_49974__$1 = state_49974;
var statearr_50035_51902 = state_49974__$1;
(statearr_50035_51902[(2)] = inst_49855);

(statearr_50035_51902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (22))){
var inst_49878 = (state_49974[(8)]);
var inst_49882 = cljs.core.async.close_BANG_(inst_49878);
var state_49974__$1 = state_49974;
var statearr_50038_51909 = state_49974__$1;
(statearr_50038_51909[(2)] = inst_49882);

(statearr_50038_51909[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (36))){
var inst_49930 = (state_49974[(23)]);
var inst_49936 = cljs.core.chunk_first(inst_49930);
var inst_49937 = cljs.core.chunk_rest(inst_49930);
var inst_49938 = cljs.core.count(inst_49936);
var inst_49910 = inst_49937;
var inst_49911 = inst_49936;
var inst_49912 = inst_49938;
var inst_49913 = (0);
var state_49974__$1 = (function (){var statearr_50041 = state_49974;
(statearr_50041[(19)] = inst_49910);

(statearr_50041[(20)] = inst_49912);

(statearr_50041[(9)] = inst_49911);

(statearr_50041[(11)] = inst_49913);

return statearr_50041;
})();
var statearr_50042_51910 = state_49974__$1;
(statearr_50042_51910[(2)] = null);

(statearr_50042_51910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (41))){
var inst_49930 = (state_49974[(23)]);
var inst_49947 = (state_49974[(2)]);
var inst_49948 = cljs.core.next(inst_49930);
var inst_49910 = inst_49948;
var inst_49911 = null;
var inst_49912 = (0);
var inst_49913 = (0);
var state_49974__$1 = (function (){var statearr_50045 = state_49974;
(statearr_50045[(19)] = inst_49910);

(statearr_50045[(20)] = inst_49912);

(statearr_50045[(9)] = inst_49911);

(statearr_50045[(11)] = inst_49913);

(statearr_50045[(25)] = inst_49947);

return statearr_50045;
})();
var statearr_50046_51912 = state_49974__$1;
(statearr_50046_51912[(2)] = null);

(statearr_50046_51912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (43))){
var state_49974__$1 = state_49974;
var statearr_50047_51913 = state_49974__$1;
(statearr_50047_51913[(2)] = null);

(statearr_50047_51913[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (29))){
var inst_49956 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50050_51914 = state_49974__$1;
(statearr_50050_51914[(2)] = inst_49956);

(statearr_50050_51914[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (44))){
var inst_49965 = (state_49974[(2)]);
var state_49974__$1 = (function (){var statearr_50052 = state_49974;
(statearr_50052[(26)] = inst_49965);

return statearr_50052;
})();
var statearr_50054_51915 = state_49974__$1;
(statearr_50054_51915[(2)] = null);

(statearr_50054_51915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (6))){
var inst_49900 = (state_49974[(27)]);
var inst_49899 = cljs.core.deref(cs);
var inst_49900__$1 = cljs.core.keys(inst_49899);
var inst_49901 = cljs.core.count(inst_49900__$1);
var inst_49902 = cljs.core.reset_BANG_(dctr,inst_49901);
var inst_49907 = cljs.core.seq(inst_49900__$1);
var inst_49910 = inst_49907;
var inst_49911 = null;
var inst_49912 = (0);
var inst_49913 = (0);
var state_49974__$1 = (function (){var statearr_50055 = state_49974;
(statearr_50055[(19)] = inst_49910);

(statearr_50055[(20)] = inst_49912);

(statearr_50055[(27)] = inst_49900__$1);

(statearr_50055[(9)] = inst_49911);

(statearr_50055[(28)] = inst_49902);

(statearr_50055[(11)] = inst_49913);

return statearr_50055;
})();
var statearr_50056_51918 = state_49974__$1;
(statearr_50056_51918[(2)] = null);

(statearr_50056_51918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (28))){
var inst_49930 = (state_49974[(23)]);
var inst_49910 = (state_49974[(19)]);
var inst_49930__$1 = cljs.core.seq(inst_49910);
var state_49974__$1 = (function (){var statearr_50057 = state_49974;
(statearr_50057[(23)] = inst_49930__$1);

return statearr_50057;
})();
if(inst_49930__$1){
var statearr_50058_51922 = state_49974__$1;
(statearr_50058_51922[(1)] = (33));

} else {
var statearr_50059_51923 = state_49974__$1;
(statearr_50059_51923[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (25))){
var inst_49912 = (state_49974[(20)]);
var inst_49913 = (state_49974[(11)]);
var inst_49915 = (inst_49913 < inst_49912);
var inst_49916 = inst_49915;
var state_49974__$1 = state_49974;
if(cljs.core.truth_(inst_49916)){
var statearr_50060_51924 = state_49974__$1;
(statearr_50060_51924[(1)] = (27));

} else {
var statearr_50061_51925 = state_49974__$1;
(statearr_50061_51925[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (34))){
var state_49974__$1 = state_49974;
var statearr_50065_51926 = state_49974__$1;
(statearr_50065_51926[(2)] = null);

(statearr_50065_51926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (17))){
var state_49974__$1 = state_49974;
var statearr_50066_51927 = state_49974__$1;
(statearr_50066_51927[(2)] = null);

(statearr_50066_51927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (3))){
var inst_49970 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49974__$1,inst_49970);
} else {
if((state_val_49975 === (12))){
var inst_49895 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50068_51928 = state_49974__$1;
(statearr_50068_51928[(2)] = inst_49895);

(statearr_50068_51928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (2))){
var state_49974__$1 = state_49974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49974__$1,(4),ch);
} else {
if((state_val_49975 === (23))){
var state_49974__$1 = state_49974;
var statearr_50070_51929 = state_49974__$1;
(statearr_50070_51929[(2)] = null);

(statearr_50070_51929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (35))){
var inst_49954 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50071_51930 = state_49974__$1;
(statearr_50071_51930[(2)] = inst_49954);

(statearr_50071_51930[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (19))){
var inst_49862 = (state_49974[(7)]);
var inst_49866 = cljs.core.chunk_first(inst_49862);
var inst_49867 = cljs.core.chunk_rest(inst_49862);
var inst_49868 = cljs.core.count(inst_49866);
var inst_49840 = inst_49867;
var inst_49841 = inst_49866;
var inst_49842 = inst_49868;
var inst_49843 = (0);
var state_49974__$1 = (function (){var statearr_50072 = state_49974;
(statearr_50072[(13)] = inst_49843);

(statearr_50072[(14)] = inst_49841);

(statearr_50072[(16)] = inst_49840);

(statearr_50072[(17)] = inst_49842);

return statearr_50072;
})();
var statearr_50073_51934 = state_49974__$1;
(statearr_50073_51934[(2)] = null);

(statearr_50073_51934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (11))){
var inst_49862 = (state_49974[(7)]);
var inst_49840 = (state_49974[(16)]);
var inst_49862__$1 = cljs.core.seq(inst_49840);
var state_49974__$1 = (function (){var statearr_50076 = state_49974;
(statearr_50076[(7)] = inst_49862__$1);

return statearr_50076;
})();
if(inst_49862__$1){
var statearr_50078_51936 = state_49974__$1;
(statearr_50078_51936[(1)] = (16));

} else {
var statearr_50079_51937 = state_49974__$1;
(statearr_50079_51937[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (9))){
var inst_49897 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50080_51938 = state_49974__$1;
(statearr_50080_51938[(2)] = inst_49897);

(statearr_50080_51938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (5))){
var inst_49838 = cljs.core.deref(cs);
var inst_49839 = cljs.core.seq(inst_49838);
var inst_49840 = inst_49839;
var inst_49841 = null;
var inst_49842 = (0);
var inst_49843 = (0);
var state_49974__$1 = (function (){var statearr_50084 = state_49974;
(statearr_50084[(13)] = inst_49843);

(statearr_50084[(14)] = inst_49841);

(statearr_50084[(16)] = inst_49840);

(statearr_50084[(17)] = inst_49842);

return statearr_50084;
})();
var statearr_50085_51942 = state_49974__$1;
(statearr_50085_51942[(2)] = null);

(statearr_50085_51942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (14))){
var state_49974__$1 = state_49974;
var statearr_50089_51949 = state_49974__$1;
(statearr_50089_51949[(2)] = null);

(statearr_50089_51949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (45))){
var inst_49962 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50090_51951 = state_49974__$1;
(statearr_50090_51951[(2)] = inst_49962);

(statearr_50090_51951[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (26))){
var inst_49900 = (state_49974[(27)]);
var inst_49958 = (state_49974[(2)]);
var inst_49959 = cljs.core.seq(inst_49900);
var state_49974__$1 = (function (){var statearr_50091 = state_49974;
(statearr_50091[(29)] = inst_49958);

return statearr_50091;
})();
if(inst_49959){
var statearr_50092_51955 = state_49974__$1;
(statearr_50092_51955[(1)] = (42));

} else {
var statearr_50093_51956 = state_49974__$1;
(statearr_50093_51956[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (16))){
var inst_49862 = (state_49974[(7)]);
var inst_49864 = cljs.core.chunked_seq_QMARK_(inst_49862);
var state_49974__$1 = state_49974;
if(inst_49864){
var statearr_50094_51958 = state_49974__$1;
(statearr_50094_51958[(1)] = (19));

} else {
var statearr_50097_51960 = state_49974__$1;
(statearr_50097_51960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (38))){
var inst_49951 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50100_51961 = state_49974__$1;
(statearr_50100_51961[(2)] = inst_49951);

(statearr_50100_51961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (30))){
var state_49974__$1 = state_49974;
var statearr_50107_51962 = state_49974__$1;
(statearr_50107_51962[(2)] = null);

(statearr_50107_51962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (10))){
var inst_49843 = (state_49974[(13)]);
var inst_49841 = (state_49974[(14)]);
var inst_49851 = cljs.core._nth(inst_49841,inst_49843);
var inst_49852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49851,(0),null);
var inst_49853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49851,(1),null);
var state_49974__$1 = (function (){var statearr_50109 = state_49974;
(statearr_50109[(24)] = inst_49852);

return statearr_50109;
})();
if(cljs.core.truth_(inst_49853)){
var statearr_50111_51965 = state_49974__$1;
(statearr_50111_51965[(1)] = (13));

} else {
var statearr_50113_51969 = state_49974__$1;
(statearr_50113_51969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (18))){
var inst_49893 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50115_51970 = state_49974__$1;
(statearr_50115_51970[(2)] = inst_49893);

(statearr_50115_51970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (42))){
var state_49974__$1 = state_49974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49974__$1,(45),dchan);
} else {
if((state_val_49975 === (37))){
var inst_49930 = (state_49974[(23)]);
var inst_49941 = (state_49974[(22)]);
var inst_49830 = (state_49974[(12)]);
var inst_49941__$1 = cljs.core.first(inst_49930);
var inst_49942 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49941__$1,inst_49830,done);
var state_49974__$1 = (function (){var statearr_50124 = state_49974;
(statearr_50124[(22)] = inst_49941__$1);

return statearr_50124;
})();
if(cljs.core.truth_(inst_49942)){
var statearr_50125_51973 = state_49974__$1;
(statearr_50125_51973[(1)] = (39));

} else {
var statearr_50127_51975 = state_49974__$1;
(statearr_50127_51975[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (8))){
var inst_49843 = (state_49974[(13)]);
var inst_49842 = (state_49974[(17)]);
var inst_49845 = (inst_49843 < inst_49842);
var inst_49846 = inst_49845;
var state_49974__$1 = state_49974;
if(cljs.core.truth_(inst_49846)){
var statearr_50132_51979 = state_49974__$1;
(statearr_50132_51979[(1)] = (10));

} else {
var statearr_50133_51980 = state_49974__$1;
(statearr_50133_51980[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__48333__auto__ = null;
var cljs$core$async$mult_$_state_machine__48333__auto____0 = (function (){
var statearr_50141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50141[(0)] = cljs$core$async$mult_$_state_machine__48333__auto__);

(statearr_50141[(1)] = (1));

return statearr_50141;
});
var cljs$core$async$mult_$_state_machine__48333__auto____1 = (function (state_49974){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_49974);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e50142){var ex__48336__auto__ = e50142;
var statearr_50143_51995 = state_49974;
(statearr_50143_51995[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_49974[(4)]))){
var statearr_50147_51999 = state_49974;
(statearr_50147_51999[(1)] = cljs.core.first((state_49974[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52000 = state_49974;
state_49974 = G__52000;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48333__auto__ = function(state_49974){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48333__auto____1.call(this,state_49974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48333__auto____0;
cljs$core$async$mult_$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48333__auto____1;
return cljs$core$async$mult_$_state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_50153 = f__48722__auto__();
(statearr_50153[(6)] = c__48721__auto___51841);

return statearr_50153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__50163 = arguments.length;
switch (G__50163) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_52009 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52009(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52026 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52026(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52028 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52028(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52029 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52029(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52033 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52033(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52042 = arguments.length;
var i__5770__auto___52043 = (0);
while(true){
if((i__5770__auto___52043 < len__5769__auto___52042)){
args__5775__auto__.push((arguments[i__5770__auto___52043]));

var G__52044 = (i__5770__auto___52043 + (1));
i__5770__auto___52043 = G__52044;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50222){
var map__50223 = p__50222;
var map__50223__$1 = cljs.core.__destructure_map(map__50223);
var opts = map__50223__$1;
var statearr_50224_52045 = state;
(statearr_50224_52045[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50225_52048 = state;
(statearr_50225_52048[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_50226_52049 = state;
(statearr_50226_52049[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50204){
var G__50205 = cljs.core.first(seq50204);
var seq50204__$1 = cljs.core.next(seq50204);
var G__50206 = cljs.core.first(seq50204__$1);
var seq50204__$2 = cljs.core.next(seq50204__$1);
var G__50207 = cljs.core.first(seq50204__$2);
var seq50204__$3 = cljs.core.next(seq50204__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50205,G__50206,G__50207,seq50204__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50235 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50236){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50236 = meta50236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50237,meta50236__$1){
var self__ = this;
var _50237__$1 = this;
return (new cljs.core.async.t_cljs$core$async50235(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50236__$1));
}));

(cljs.core.async.t_cljs$core$async50235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50237){
var self__ = this;
var _50237__$1 = this;
return self__.meta50236;
}));

(cljs.core.async.t_cljs$core$async50235.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50235.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50235.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50235.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50235.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50235.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50235.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50235.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50236","meta50236",1521266928,null)], null);
}));

(cljs.core.async.t_cljs$core$async50235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50235");

(cljs.core.async.t_cljs$core$async50235.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50235.
 */
cljs.core.async.__GT_t_cljs$core$async50235 = (function cljs$core$async$__GT_t_cljs$core$async50235(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50236){
return (new cljs.core.async.t_cljs$core$async50235(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50236));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async50235(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__48721__auto___52074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_50317){
var state_val_50318 = (state_50317[(1)]);
if((state_val_50318 === (7))){
var inst_50270 = (state_50317[(2)]);
var state_50317__$1 = state_50317;
if(cljs.core.truth_(inst_50270)){
var statearr_50319_52075 = state_50317__$1;
(statearr_50319_52075[(1)] = (8));

} else {
var statearr_50320_52076 = state_50317__$1;
(statearr_50320_52076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (20))){
var inst_50263 = (state_50317[(7)]);
var state_50317__$1 = state_50317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50317__$1,(23),out,inst_50263);
} else {
if((state_val_50318 === (1))){
var inst_50246 = calc_state();
var inst_50247 = cljs.core.__destructure_map(inst_50246);
var inst_50248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50247,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50247,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50247,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50251 = inst_50246;
var state_50317__$1 = (function (){var statearr_50323 = state_50317;
(statearr_50323[(8)] = inst_50251);

(statearr_50323[(9)] = inst_50249);

(statearr_50323[(10)] = inst_50250);

(statearr_50323[(11)] = inst_50248);

return statearr_50323;
})();
var statearr_50324_52077 = state_50317__$1;
(statearr_50324_52077[(2)] = null);

(statearr_50324_52077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (24))){
var inst_50254 = (state_50317[(12)]);
var inst_50251 = inst_50254;
var state_50317__$1 = (function (){var statearr_50326 = state_50317;
(statearr_50326[(8)] = inst_50251);

return statearr_50326;
})();
var statearr_50328_52080 = state_50317__$1;
(statearr_50328_52080[(2)] = null);

(statearr_50328_52080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (4))){
var inst_50265 = (state_50317[(13)]);
var inst_50263 = (state_50317[(7)]);
var inst_50262 = (state_50317[(2)]);
var inst_50263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50262,(0),null);
var inst_50264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50262,(1),null);
var inst_50265__$1 = (inst_50263__$1 == null);
var state_50317__$1 = (function (){var statearr_50332 = state_50317;
(statearr_50332[(13)] = inst_50265__$1);

(statearr_50332[(14)] = inst_50264);

(statearr_50332[(7)] = inst_50263__$1);

return statearr_50332;
})();
if(cljs.core.truth_(inst_50265__$1)){
var statearr_50333_52085 = state_50317__$1;
(statearr_50333_52085[(1)] = (5));

} else {
var statearr_50334_52086 = state_50317__$1;
(statearr_50334_52086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (15))){
var inst_50287 = (state_50317[(15)]);
var inst_50255 = (state_50317[(16)]);
var inst_50287__$1 = cljs.core.empty_QMARK_(inst_50255);
var state_50317__$1 = (function (){var statearr_50335 = state_50317;
(statearr_50335[(15)] = inst_50287__$1);

return statearr_50335;
})();
if(inst_50287__$1){
var statearr_50336_52087 = state_50317__$1;
(statearr_50336_52087[(1)] = (17));

} else {
var statearr_50337_52088 = state_50317__$1;
(statearr_50337_52088[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (21))){
var inst_50254 = (state_50317[(12)]);
var inst_50251 = inst_50254;
var state_50317__$1 = (function (){var statearr_50338 = state_50317;
(statearr_50338[(8)] = inst_50251);

return statearr_50338;
})();
var statearr_50339_52089 = state_50317__$1;
(statearr_50339_52089[(2)] = null);

(statearr_50339_52089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (13))){
var inst_50277 = (state_50317[(2)]);
var inst_50278 = calc_state();
var inst_50251 = inst_50278;
var state_50317__$1 = (function (){var statearr_50340 = state_50317;
(statearr_50340[(8)] = inst_50251);

(statearr_50340[(17)] = inst_50277);

return statearr_50340;
})();
var statearr_50341_52094 = state_50317__$1;
(statearr_50341_52094[(2)] = null);

(statearr_50341_52094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (22))){
var inst_50308 = (state_50317[(2)]);
var state_50317__$1 = state_50317;
var statearr_50342_52095 = state_50317__$1;
(statearr_50342_52095[(2)] = inst_50308);

(statearr_50342_52095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (6))){
var inst_50264 = (state_50317[(14)]);
var inst_50268 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50264,change);
var state_50317__$1 = state_50317;
var statearr_50346_52096 = state_50317__$1;
(statearr_50346_52096[(2)] = inst_50268);

(statearr_50346_52096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (25))){
var state_50317__$1 = state_50317;
var statearr_50348_52097 = state_50317__$1;
(statearr_50348_52097[(2)] = null);

(statearr_50348_52097[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (17))){
var inst_50264 = (state_50317[(14)]);
var inst_50256 = (state_50317[(18)]);
var inst_50289 = (inst_50256.cljs$core$IFn$_invoke$arity$1 ? inst_50256.cljs$core$IFn$_invoke$arity$1(inst_50264) : inst_50256.call(null,inst_50264));
var inst_50290 = cljs.core.not(inst_50289);
var state_50317__$1 = state_50317;
var statearr_50352_52098 = state_50317__$1;
(statearr_50352_52098[(2)] = inst_50290);

(statearr_50352_52098[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (3))){
var inst_50312 = (state_50317[(2)]);
var state_50317__$1 = state_50317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50317__$1,inst_50312);
} else {
if((state_val_50318 === (12))){
var state_50317__$1 = state_50317;
var statearr_50356_52101 = state_50317__$1;
(statearr_50356_52101[(2)] = null);

(statearr_50356_52101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (2))){
var inst_50251 = (state_50317[(8)]);
var inst_50254 = (state_50317[(12)]);
var inst_50254__$1 = cljs.core.__destructure_map(inst_50251);
var inst_50255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50254__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50254__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50254__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50317__$1 = (function (){var statearr_50358 = state_50317;
(statearr_50358[(16)] = inst_50255);

(statearr_50358[(18)] = inst_50256);

(statearr_50358[(12)] = inst_50254__$1);

return statearr_50358;
})();
return cljs.core.async.ioc_alts_BANG_(state_50317__$1,(4),inst_50257);
} else {
if((state_val_50318 === (23))){
var inst_50298 = (state_50317[(2)]);
var state_50317__$1 = state_50317;
if(cljs.core.truth_(inst_50298)){
var statearr_50362_52106 = state_50317__$1;
(statearr_50362_52106[(1)] = (24));

} else {
var statearr_50363_52107 = state_50317__$1;
(statearr_50363_52107[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (19))){
var inst_50293 = (state_50317[(2)]);
var state_50317__$1 = state_50317;
var statearr_50365_52108 = state_50317__$1;
(statearr_50365_52108[(2)] = inst_50293);

(statearr_50365_52108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (11))){
var inst_50264 = (state_50317[(14)]);
var inst_50274 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_50264);
var state_50317__$1 = state_50317;
var statearr_50369_52109 = state_50317__$1;
(statearr_50369_52109[(2)] = inst_50274);

(statearr_50369_52109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (9))){
var inst_50264 = (state_50317[(14)]);
var inst_50255 = (state_50317[(16)]);
var inst_50282 = (state_50317[(19)]);
var inst_50282__$1 = (inst_50255.cljs$core$IFn$_invoke$arity$1 ? inst_50255.cljs$core$IFn$_invoke$arity$1(inst_50264) : inst_50255.call(null,inst_50264));
var state_50317__$1 = (function (){var statearr_50370 = state_50317;
(statearr_50370[(19)] = inst_50282__$1);

return statearr_50370;
})();
if(cljs.core.truth_(inst_50282__$1)){
var statearr_50371_52114 = state_50317__$1;
(statearr_50371_52114[(1)] = (14));

} else {
var statearr_50372_52115 = state_50317__$1;
(statearr_50372_52115[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (5))){
var inst_50265 = (state_50317[(13)]);
var state_50317__$1 = state_50317;
var statearr_50373_52116 = state_50317__$1;
(statearr_50373_52116[(2)] = inst_50265);

(statearr_50373_52116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (14))){
var inst_50282 = (state_50317[(19)]);
var state_50317__$1 = state_50317;
var statearr_50376_52120 = state_50317__$1;
(statearr_50376_52120[(2)] = inst_50282);

(statearr_50376_52120[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (26))){
var inst_50304 = (state_50317[(2)]);
var state_50317__$1 = state_50317;
var statearr_50377_52121 = state_50317__$1;
(statearr_50377_52121[(2)] = inst_50304);

(statearr_50377_52121[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (16))){
var inst_50295 = (state_50317[(2)]);
var state_50317__$1 = state_50317;
if(cljs.core.truth_(inst_50295)){
var statearr_50378_52122 = state_50317__$1;
(statearr_50378_52122[(1)] = (20));

} else {
var statearr_50380_52124 = state_50317__$1;
(statearr_50380_52124[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (10))){
var inst_50310 = (state_50317[(2)]);
var state_50317__$1 = state_50317;
var statearr_50382_52130 = state_50317__$1;
(statearr_50382_52130[(2)] = inst_50310);

(statearr_50382_52130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (18))){
var inst_50287 = (state_50317[(15)]);
var state_50317__$1 = state_50317;
var statearr_50383_52131 = state_50317__$1;
(statearr_50383_52131[(2)] = inst_50287);

(statearr_50383_52131[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50318 === (8))){
var inst_50263 = (state_50317[(7)]);
var inst_50272 = (inst_50263 == null);
var state_50317__$1 = state_50317;
if(cljs.core.truth_(inst_50272)){
var statearr_50384_52132 = state_50317__$1;
(statearr_50384_52132[(1)] = (11));

} else {
var statearr_50385_52133 = state_50317__$1;
(statearr_50385_52133[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__48333__auto__ = null;
var cljs$core$async$mix_$_state_machine__48333__auto____0 = (function (){
var statearr_50386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50386[(0)] = cljs$core$async$mix_$_state_machine__48333__auto__);

(statearr_50386[(1)] = (1));

return statearr_50386;
});
var cljs$core$async$mix_$_state_machine__48333__auto____1 = (function (state_50317){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_50317);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e50389){var ex__48336__auto__ = e50389;
var statearr_50390_52136 = state_50317;
(statearr_50390_52136[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_50317[(4)]))){
var statearr_50391_52137 = state_50317;
(statearr_50391_52137[(1)] = cljs.core.first((state_50317[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52139 = state_50317;
state_50317 = G__52139;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48333__auto__ = function(state_50317){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48333__auto____1.call(this,state_50317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48333__auto____0;
cljs$core$async$mix_$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48333__auto____1;
return cljs$core$async$mix_$_state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_50392 = f__48722__auto__();
(statearr_50392[(6)] = c__48721__auto___52074);

return statearr_50392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_52140 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_52140(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52142 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_52142(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52148 = (function() {
var G__52149 = null;
var G__52149__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__52149__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__52149 = function(p,v){
switch(arguments.length){
case 1:
return G__52149__1.call(this,p);
case 2:
return G__52149__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52149.cljs$core$IFn$_invoke$arity$1 = G__52149__1;
G__52149.cljs$core$IFn$_invoke$arity$2 = G__52149__2;
return G__52149;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__50423 = arguments.length;
switch (G__50423) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52148(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52148(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50448 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50449){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50449 = meta50449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50450,meta50449__$1){
var self__ = this;
var _50450__$1 = this;
return (new cljs.core.async.t_cljs$core$async50448(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50449__$1));
}));

(cljs.core.async.t_cljs$core$async50448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50450){
var self__ = this;
var _50450__$1 = this;
return self__.meta50449;
}));

(cljs.core.async.t_cljs$core$async50448.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50448.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50448.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async50448.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async50448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async50448.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async50448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50449","meta50449",81086482,null)], null);
}));

(cljs.core.async.t_cljs$core$async50448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50448");

(cljs.core.async.t_cljs$core$async50448.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50448.
 */
cljs.core.async.__GT_t_cljs$core$async50448 = (function cljs$core$async$__GT_t_cljs$core$async50448(ch,topic_fn,buf_fn,mults,ensure_mult,meta50449){
return (new cljs.core.async.t_cljs$core$async50448(ch,topic_fn,buf_fn,mults,ensure_mult,meta50449));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__50439 = arguments.length;
switch (G__50439) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__50434_SHARP_){
if(cljs.core.truth_((p1__50434_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__50434_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__50434_SHARP_.call(null,topic)))){
return p1__50434_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50434_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async50448(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__48721__auto___52171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_50548){
var state_val_50549 = (state_50548[(1)]);
if((state_val_50549 === (7))){
var inst_50544 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50550_52172 = state_50548__$1;
(statearr_50550_52172[(2)] = inst_50544);

(statearr_50550_52172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (20))){
var state_50548__$1 = state_50548;
var statearr_50551_52173 = state_50548__$1;
(statearr_50551_52173[(2)] = null);

(statearr_50551_52173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (1))){
var state_50548__$1 = state_50548;
var statearr_50552_52174 = state_50548__$1;
(statearr_50552_52174[(2)] = null);

(statearr_50552_52174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (24))){
var inst_50524 = (state_50548[(7)]);
var inst_50536 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_50524);
var state_50548__$1 = state_50548;
var statearr_50553_52176 = state_50548__$1;
(statearr_50553_52176[(2)] = inst_50536);

(statearr_50553_52176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (4))){
var inst_50467 = (state_50548[(8)]);
var inst_50467__$1 = (state_50548[(2)]);
var inst_50468 = (inst_50467__$1 == null);
var state_50548__$1 = (function (){var statearr_50554 = state_50548;
(statearr_50554[(8)] = inst_50467__$1);

return statearr_50554;
})();
if(cljs.core.truth_(inst_50468)){
var statearr_50555_52177 = state_50548__$1;
(statearr_50555_52177[(1)] = (5));

} else {
var statearr_50556_52178 = state_50548__$1;
(statearr_50556_52178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (15))){
var inst_50514 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50559_52180 = state_50548__$1;
(statearr_50559_52180[(2)] = inst_50514);

(statearr_50559_52180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (21))){
var inst_50541 = (state_50548[(2)]);
var state_50548__$1 = (function (){var statearr_50561 = state_50548;
(statearr_50561[(9)] = inst_50541);

return statearr_50561;
})();
var statearr_50562_52184 = state_50548__$1;
(statearr_50562_52184[(2)] = null);

(statearr_50562_52184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (13))){
var inst_50492 = (state_50548[(10)]);
var inst_50494 = cljs.core.chunked_seq_QMARK_(inst_50492);
var state_50548__$1 = state_50548;
if(inst_50494){
var statearr_50564_52185 = state_50548__$1;
(statearr_50564_52185[(1)] = (16));

} else {
var statearr_50565_52186 = state_50548__$1;
(statearr_50565_52186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (22))){
var inst_50533 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
if(cljs.core.truth_(inst_50533)){
var statearr_50567_52187 = state_50548__$1;
(statearr_50567_52187[(1)] = (23));

} else {
var statearr_50569_52188 = state_50548__$1;
(statearr_50569_52188[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (6))){
var inst_50467 = (state_50548[(8)]);
var inst_50524 = (state_50548[(7)]);
var inst_50526 = (state_50548[(11)]);
var inst_50524__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_50467) : topic_fn.call(null,inst_50467));
var inst_50525 = cljs.core.deref(mults);
var inst_50526__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50525,inst_50524__$1);
var state_50548__$1 = (function (){var statearr_50570 = state_50548;
(statearr_50570[(7)] = inst_50524__$1);

(statearr_50570[(11)] = inst_50526__$1);

return statearr_50570;
})();
if(cljs.core.truth_(inst_50526__$1)){
var statearr_50571_52193 = state_50548__$1;
(statearr_50571_52193[(1)] = (19));

} else {
var statearr_50572_52195 = state_50548__$1;
(statearr_50572_52195[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (25))){
var inst_50538 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50576_52199 = state_50548__$1;
(statearr_50576_52199[(2)] = inst_50538);

(statearr_50576_52199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (17))){
var inst_50492 = (state_50548[(10)]);
var inst_50505 = cljs.core.first(inst_50492);
var inst_50506 = cljs.core.async.muxch_STAR_(inst_50505);
var inst_50507 = cljs.core.async.close_BANG_(inst_50506);
var inst_50508 = cljs.core.next(inst_50492);
var inst_50477 = inst_50508;
var inst_50478 = null;
var inst_50479 = (0);
var inst_50480 = (0);
var state_50548__$1 = (function (){var statearr_50579 = state_50548;
(statearr_50579[(12)] = inst_50480);

(statearr_50579[(13)] = inst_50479);

(statearr_50579[(14)] = inst_50477);

(statearr_50579[(15)] = inst_50507);

(statearr_50579[(16)] = inst_50478);

return statearr_50579;
})();
var statearr_50581_52200 = state_50548__$1;
(statearr_50581_52200[(2)] = null);

(statearr_50581_52200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (3))){
var inst_50546 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50548__$1,inst_50546);
} else {
if((state_val_50549 === (12))){
var inst_50519 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50583_52207 = state_50548__$1;
(statearr_50583_52207[(2)] = inst_50519);

(statearr_50583_52207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (2))){
var state_50548__$1 = state_50548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50548__$1,(4),ch);
} else {
if((state_val_50549 === (23))){
var state_50548__$1 = state_50548;
var statearr_50596_52208 = state_50548__$1;
(statearr_50596_52208[(2)] = null);

(statearr_50596_52208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (19))){
var inst_50467 = (state_50548[(8)]);
var inst_50526 = (state_50548[(11)]);
var inst_50531 = cljs.core.async.muxch_STAR_(inst_50526);
var state_50548__$1 = state_50548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50548__$1,(22),inst_50531,inst_50467);
} else {
if((state_val_50549 === (11))){
var inst_50477 = (state_50548[(14)]);
var inst_50492 = (state_50548[(10)]);
var inst_50492__$1 = cljs.core.seq(inst_50477);
var state_50548__$1 = (function (){var statearr_50601 = state_50548;
(statearr_50601[(10)] = inst_50492__$1);

return statearr_50601;
})();
if(inst_50492__$1){
var statearr_50602_52212 = state_50548__$1;
(statearr_50602_52212[(1)] = (13));

} else {
var statearr_50603_52213 = state_50548__$1;
(statearr_50603_52213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (9))){
var inst_50521 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50604_52214 = state_50548__$1;
(statearr_50604_52214[(2)] = inst_50521);

(statearr_50604_52214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (5))){
var inst_50474 = cljs.core.deref(mults);
var inst_50475 = cljs.core.vals(inst_50474);
var inst_50476 = cljs.core.seq(inst_50475);
var inst_50477 = inst_50476;
var inst_50478 = null;
var inst_50479 = (0);
var inst_50480 = (0);
var state_50548__$1 = (function (){var statearr_50605 = state_50548;
(statearr_50605[(12)] = inst_50480);

(statearr_50605[(13)] = inst_50479);

(statearr_50605[(14)] = inst_50477);

(statearr_50605[(16)] = inst_50478);

return statearr_50605;
})();
var statearr_50606_52218 = state_50548__$1;
(statearr_50606_52218[(2)] = null);

(statearr_50606_52218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (14))){
var state_50548__$1 = state_50548;
var statearr_50610_52219 = state_50548__$1;
(statearr_50610_52219[(2)] = null);

(statearr_50610_52219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (16))){
var inst_50492 = (state_50548[(10)]);
var inst_50496 = cljs.core.chunk_first(inst_50492);
var inst_50499 = cljs.core.chunk_rest(inst_50492);
var inst_50502 = cljs.core.count(inst_50496);
var inst_50477 = inst_50499;
var inst_50478 = inst_50496;
var inst_50479 = inst_50502;
var inst_50480 = (0);
var state_50548__$1 = (function (){var statearr_50611 = state_50548;
(statearr_50611[(12)] = inst_50480);

(statearr_50611[(13)] = inst_50479);

(statearr_50611[(14)] = inst_50477);

(statearr_50611[(16)] = inst_50478);

return statearr_50611;
})();
var statearr_50612_52224 = state_50548__$1;
(statearr_50612_52224[(2)] = null);

(statearr_50612_52224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (10))){
var inst_50480 = (state_50548[(12)]);
var inst_50479 = (state_50548[(13)]);
var inst_50477 = (state_50548[(14)]);
var inst_50478 = (state_50548[(16)]);
var inst_50486 = cljs.core._nth(inst_50478,inst_50480);
var inst_50487 = cljs.core.async.muxch_STAR_(inst_50486);
var inst_50488 = cljs.core.async.close_BANG_(inst_50487);
var inst_50489 = (inst_50480 + (1));
var tmp50607 = inst_50479;
var tmp50608 = inst_50477;
var tmp50609 = inst_50478;
var inst_50477__$1 = tmp50608;
var inst_50478__$1 = tmp50609;
var inst_50479__$1 = tmp50607;
var inst_50480__$1 = inst_50489;
var state_50548__$1 = (function (){var statearr_50614 = state_50548;
(statearr_50614[(12)] = inst_50480__$1);

(statearr_50614[(17)] = inst_50488);

(statearr_50614[(13)] = inst_50479__$1);

(statearr_50614[(14)] = inst_50477__$1);

(statearr_50614[(16)] = inst_50478__$1);

return statearr_50614;
})();
var statearr_50615_52225 = state_50548__$1;
(statearr_50615_52225[(2)] = null);

(statearr_50615_52225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (18))){
var inst_50511 = (state_50548[(2)]);
var state_50548__$1 = state_50548;
var statearr_50616_52227 = state_50548__$1;
(statearr_50616_52227[(2)] = inst_50511);

(statearr_50616_52227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50549 === (8))){
var inst_50480 = (state_50548[(12)]);
var inst_50479 = (state_50548[(13)]);
var inst_50482 = (inst_50480 < inst_50479);
var inst_50483 = inst_50482;
var state_50548__$1 = state_50548;
if(cljs.core.truth_(inst_50483)){
var statearr_50620_52228 = state_50548__$1;
(statearr_50620_52228[(1)] = (10));

} else {
var statearr_50621_52229 = state_50548__$1;
(statearr_50621_52229[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_50623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50623[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_50623[(1)] = (1));

return statearr_50623;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_50548){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_50548);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e50624){var ex__48336__auto__ = e50624;
var statearr_50626_52233 = state_50548;
(statearr_50626_52233[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_50548[(4)]))){
var statearr_50627_52234 = state_50548;
(statearr_50627_52234[(1)] = cljs.core.first((state_50548[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52236 = state_50548;
state_50548 = G__52236;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_50548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_50548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_50628 = f__48722__auto__();
(statearr_50628[(6)] = c__48721__auto___52171);

return statearr_50628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__50630 = arguments.length;
switch (G__50630) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__50638 = arguments.length;
switch (G__50638) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__50643 = arguments.length;
switch (G__50643) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__48721__auto___52243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_50703){
var state_val_50704 = (state_50703[(1)]);
if((state_val_50704 === (7))){
var state_50703__$1 = state_50703;
var statearr_50707_52244 = state_50703__$1;
(statearr_50707_52244[(2)] = null);

(statearr_50707_52244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (1))){
var state_50703__$1 = state_50703;
var statearr_50709_52245 = state_50703__$1;
(statearr_50709_52245[(2)] = null);

(statearr_50709_52245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (4))){
var inst_50654 = (state_50703[(7)]);
var inst_50655 = (state_50703[(8)]);
var inst_50657 = (inst_50655 < inst_50654);
var state_50703__$1 = state_50703;
if(cljs.core.truth_(inst_50657)){
var statearr_50710_52247 = state_50703__$1;
(statearr_50710_52247[(1)] = (6));

} else {
var statearr_50712_52249 = state_50703__$1;
(statearr_50712_52249[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (15))){
var inst_50688 = (state_50703[(9)]);
var inst_50693 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_50688);
var state_50703__$1 = state_50703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50703__$1,(17),out,inst_50693);
} else {
if((state_val_50704 === (13))){
var inst_50688 = (state_50703[(9)]);
var inst_50688__$1 = (state_50703[(2)]);
var inst_50689 = cljs.core.some(cljs.core.nil_QMARK_,inst_50688__$1);
var state_50703__$1 = (function (){var statearr_50718 = state_50703;
(statearr_50718[(9)] = inst_50688__$1);

return statearr_50718;
})();
if(cljs.core.truth_(inst_50689)){
var statearr_50719_52250 = state_50703__$1;
(statearr_50719_52250[(1)] = (14));

} else {
var statearr_50720_52251 = state_50703__$1;
(statearr_50720_52251[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (6))){
var state_50703__$1 = state_50703;
var statearr_50721_52252 = state_50703__$1;
(statearr_50721_52252[(2)] = null);

(statearr_50721_52252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (17))){
var inst_50696 = (state_50703[(2)]);
var state_50703__$1 = (function (){var statearr_50724 = state_50703;
(statearr_50724[(10)] = inst_50696);

return statearr_50724;
})();
var statearr_50726_52253 = state_50703__$1;
(statearr_50726_52253[(2)] = null);

(statearr_50726_52253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (3))){
var inst_50701 = (state_50703[(2)]);
var state_50703__$1 = state_50703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50703__$1,inst_50701);
} else {
if((state_val_50704 === (12))){
var _ = (function (){var statearr_50734 = state_50703;
(statearr_50734[(4)] = cljs.core.rest((state_50703[(4)])));

return statearr_50734;
})();
var state_50703__$1 = state_50703;
var ex50723 = (state_50703__$1[(2)]);
var statearr_50735_52262 = state_50703__$1;
(statearr_50735_52262[(5)] = ex50723);


if((ex50723 instanceof Object)){
var statearr_50737_52263 = state_50703__$1;
(statearr_50737_52263[(1)] = (11));

(statearr_50737_52263[(5)] = null);

} else {
throw ex50723;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (2))){
var inst_50653 = cljs.core.reset_BANG_(dctr,cnt);
var inst_50654 = cnt;
var inst_50655 = (0);
var state_50703__$1 = (function (){var statearr_50739 = state_50703;
(statearr_50739[(7)] = inst_50654);

(statearr_50739[(8)] = inst_50655);

(statearr_50739[(11)] = inst_50653);

return statearr_50739;
})();
var statearr_50740_52264 = state_50703__$1;
(statearr_50740_52264[(2)] = null);

(statearr_50740_52264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (11))){
var inst_50663 = (state_50703[(2)]);
var inst_50664 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_50703__$1 = (function (){var statearr_50744 = state_50703;
(statearr_50744[(12)] = inst_50663);

return statearr_50744;
})();
var statearr_50745_52265 = state_50703__$1;
(statearr_50745_52265[(2)] = inst_50664);

(statearr_50745_52265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (9))){
var inst_50655 = (state_50703[(8)]);
var _ = (function (){var statearr_50749 = state_50703;
(statearr_50749[(4)] = cljs.core.cons((12),(state_50703[(4)])));

return statearr_50749;
})();
var inst_50673 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_50655) : chs__$1.call(null,inst_50655));
var inst_50675 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_50655) : done.call(null,inst_50655));
var inst_50676 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_50673,inst_50675);
var ___$1 = (function (){var statearr_50750 = state_50703;
(statearr_50750[(4)] = cljs.core.rest((state_50703[(4)])));

return statearr_50750;
})();
var state_50703__$1 = state_50703;
var statearr_50754_52266 = state_50703__$1;
(statearr_50754_52266[(2)] = inst_50676);

(statearr_50754_52266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (5))){
var inst_50686 = (state_50703[(2)]);
var state_50703__$1 = (function (){var statearr_50755 = state_50703;
(statearr_50755[(13)] = inst_50686);

return statearr_50755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50703__$1,(13),dchan);
} else {
if((state_val_50704 === (14))){
var inst_50691 = cljs.core.async.close_BANG_(out);
var state_50703__$1 = state_50703;
var statearr_50756_52267 = state_50703__$1;
(statearr_50756_52267[(2)] = inst_50691);

(statearr_50756_52267[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (16))){
var inst_50699 = (state_50703[(2)]);
var state_50703__$1 = state_50703;
var statearr_50757_52268 = state_50703__$1;
(statearr_50757_52268[(2)] = inst_50699);

(statearr_50757_52268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (10))){
var inst_50655 = (state_50703[(8)]);
var inst_50679 = (state_50703[(2)]);
var inst_50680 = (inst_50655 + (1));
var inst_50655__$1 = inst_50680;
var state_50703__$1 = (function (){var statearr_50758 = state_50703;
(statearr_50758[(14)] = inst_50679);

(statearr_50758[(8)] = inst_50655__$1);

return statearr_50758;
})();
var statearr_50759_52273 = state_50703__$1;
(statearr_50759_52273[(2)] = null);

(statearr_50759_52273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50704 === (8))){
var inst_50684 = (state_50703[(2)]);
var state_50703__$1 = state_50703;
var statearr_50760_52274 = state_50703__$1;
(statearr_50760_52274[(2)] = inst_50684);

(statearr_50760_52274[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_50764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50764[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_50764[(1)] = (1));

return statearr_50764;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_50703){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_50703);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e50766){var ex__48336__auto__ = e50766;
var statearr_50767_52276 = state_50703;
(statearr_50767_52276[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_50703[(4)]))){
var statearr_50768_52277 = state_50703;
(statearr_50768_52277[(1)] = cljs.core.first((state_50703[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52278 = state_50703;
state_50703 = G__52278;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_50703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_50703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_50769 = f__48722__auto__();
(statearr_50769[(6)] = c__48721__auto___52243);

return statearr_50769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__50775 = arguments.length;
switch (G__50775) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48721__auto___52282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_50816){
var state_val_50817 = (state_50816[(1)]);
if((state_val_50817 === (7))){
var inst_50793 = (state_50816[(7)]);
var inst_50789 = (state_50816[(8)]);
var inst_50789__$1 = (state_50816[(2)]);
var inst_50793__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50789__$1,(0),null);
var inst_50794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50789__$1,(1),null);
var inst_50795 = (inst_50793__$1 == null);
var state_50816__$1 = (function (){var statearr_50819 = state_50816;
(statearr_50819[(7)] = inst_50793__$1);

(statearr_50819[(8)] = inst_50789__$1);

(statearr_50819[(9)] = inst_50794);

return statearr_50819;
})();
if(cljs.core.truth_(inst_50795)){
var statearr_50820_52287 = state_50816__$1;
(statearr_50820_52287[(1)] = (8));

} else {
var statearr_50821_52288 = state_50816__$1;
(statearr_50821_52288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (1))){
var inst_50779 = cljs.core.vec(chs);
var inst_50780 = inst_50779;
var state_50816__$1 = (function (){var statearr_50822 = state_50816;
(statearr_50822[(10)] = inst_50780);

return statearr_50822;
})();
var statearr_50823_52290 = state_50816__$1;
(statearr_50823_52290[(2)] = null);

(statearr_50823_52290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (4))){
var inst_50780 = (state_50816[(10)]);
var state_50816__$1 = state_50816;
return cljs.core.async.ioc_alts_BANG_(state_50816__$1,(7),inst_50780);
} else {
if((state_val_50817 === (6))){
var inst_50812 = (state_50816[(2)]);
var state_50816__$1 = state_50816;
var statearr_50826_52295 = state_50816__$1;
(statearr_50826_52295[(2)] = inst_50812);

(statearr_50826_52295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (3))){
var inst_50814 = (state_50816[(2)]);
var state_50816__$1 = state_50816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50816__$1,inst_50814);
} else {
if((state_val_50817 === (2))){
var inst_50780 = (state_50816[(10)]);
var inst_50782 = cljs.core.count(inst_50780);
var inst_50783 = (inst_50782 > (0));
var state_50816__$1 = state_50816;
if(cljs.core.truth_(inst_50783)){
var statearr_50830_52296 = state_50816__$1;
(statearr_50830_52296[(1)] = (4));

} else {
var statearr_50831_52297 = state_50816__$1;
(statearr_50831_52297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (11))){
var inst_50780 = (state_50816[(10)]);
var inst_50805 = (state_50816[(2)]);
var tmp50828 = inst_50780;
var inst_50780__$1 = tmp50828;
var state_50816__$1 = (function (){var statearr_50835 = state_50816;
(statearr_50835[(10)] = inst_50780__$1);

(statearr_50835[(11)] = inst_50805);

return statearr_50835;
})();
var statearr_50836_52298 = state_50816__$1;
(statearr_50836_52298[(2)] = null);

(statearr_50836_52298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (9))){
var inst_50793 = (state_50816[(7)]);
var state_50816__$1 = state_50816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50816__$1,(11),out,inst_50793);
} else {
if((state_val_50817 === (5))){
var inst_50810 = cljs.core.async.close_BANG_(out);
var state_50816__$1 = state_50816;
var statearr_50840_52299 = state_50816__$1;
(statearr_50840_52299[(2)] = inst_50810);

(statearr_50840_52299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (10))){
var inst_50808 = (state_50816[(2)]);
var state_50816__$1 = state_50816;
var statearr_50841_52300 = state_50816__$1;
(statearr_50841_52300[(2)] = inst_50808);

(statearr_50841_52300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50817 === (8))){
var inst_50793 = (state_50816[(7)]);
var inst_50789 = (state_50816[(8)]);
var inst_50780 = (state_50816[(10)]);
var inst_50794 = (state_50816[(9)]);
var inst_50800 = (function (){var cs = inst_50780;
var vec__50785 = inst_50789;
var v = inst_50793;
var c = inst_50794;
return (function (p1__50770_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__50770_SHARP_);
});
})();
var inst_50801 = cljs.core.filterv(inst_50800,inst_50780);
var inst_50780__$1 = inst_50801;
var state_50816__$1 = (function (){var statearr_50842 = state_50816;
(statearr_50842[(10)] = inst_50780__$1);

return statearr_50842;
})();
var statearr_50843_52302 = state_50816__$1;
(statearr_50843_52302[(2)] = null);

(statearr_50843_52302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_50844 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50844[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_50844[(1)] = (1));

return statearr_50844;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_50816){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_50816);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e50845){var ex__48336__auto__ = e50845;
var statearr_50846_52303 = state_50816;
(statearr_50846_52303[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_50816[(4)]))){
var statearr_50847_52304 = state_50816;
(statearr_50847_52304[(1)] = cljs.core.first((state_50816[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52306 = state_50816;
state_50816 = G__52306;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_50816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_50816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_50848 = f__48722__auto__();
(statearr_50848[(6)] = c__48721__auto___52282);

return statearr_50848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__50850 = arguments.length;
switch (G__50850) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48721__auto___52313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_50877){
var state_val_50878 = (state_50877[(1)]);
if((state_val_50878 === (7))){
var inst_50859 = (state_50877[(7)]);
var inst_50859__$1 = (state_50877[(2)]);
var inst_50860 = (inst_50859__$1 == null);
var inst_50861 = cljs.core.not(inst_50860);
var state_50877__$1 = (function (){var statearr_50879 = state_50877;
(statearr_50879[(7)] = inst_50859__$1);

return statearr_50879;
})();
if(inst_50861){
var statearr_50880_52315 = state_50877__$1;
(statearr_50880_52315[(1)] = (8));

} else {
var statearr_50881_52316 = state_50877__$1;
(statearr_50881_52316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50878 === (1))){
var inst_50854 = (0);
var state_50877__$1 = (function (){var statearr_50882 = state_50877;
(statearr_50882[(8)] = inst_50854);

return statearr_50882;
})();
var statearr_50883_52317 = state_50877__$1;
(statearr_50883_52317[(2)] = null);

(statearr_50883_52317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50878 === (4))){
var state_50877__$1 = state_50877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50877__$1,(7),ch);
} else {
if((state_val_50878 === (6))){
var inst_50872 = (state_50877[(2)]);
var state_50877__$1 = state_50877;
var statearr_50884_52318 = state_50877__$1;
(statearr_50884_52318[(2)] = inst_50872);

(statearr_50884_52318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50878 === (3))){
var inst_50874 = (state_50877[(2)]);
var inst_50875 = cljs.core.async.close_BANG_(out);
var state_50877__$1 = (function (){var statearr_50885 = state_50877;
(statearr_50885[(9)] = inst_50874);

return statearr_50885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50877__$1,inst_50875);
} else {
if((state_val_50878 === (2))){
var inst_50854 = (state_50877[(8)]);
var inst_50856 = (inst_50854 < n);
var state_50877__$1 = state_50877;
if(cljs.core.truth_(inst_50856)){
var statearr_50887_52323 = state_50877__$1;
(statearr_50887_52323[(1)] = (4));

} else {
var statearr_50888_52324 = state_50877__$1;
(statearr_50888_52324[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50878 === (11))){
var inst_50854 = (state_50877[(8)]);
var inst_50864 = (state_50877[(2)]);
var inst_50865 = (inst_50854 + (1));
var inst_50854__$1 = inst_50865;
var state_50877__$1 = (function (){var statearr_50889 = state_50877;
(statearr_50889[(8)] = inst_50854__$1);

(statearr_50889[(10)] = inst_50864);

return statearr_50889;
})();
var statearr_50890_52326 = state_50877__$1;
(statearr_50890_52326[(2)] = null);

(statearr_50890_52326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50878 === (9))){
var state_50877__$1 = state_50877;
var statearr_50892_52327 = state_50877__$1;
(statearr_50892_52327[(2)] = null);

(statearr_50892_52327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50878 === (5))){
var state_50877__$1 = state_50877;
var statearr_50898_52331 = state_50877__$1;
(statearr_50898_52331[(2)] = null);

(statearr_50898_52331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50878 === (10))){
var inst_50869 = (state_50877[(2)]);
var state_50877__$1 = state_50877;
var statearr_50899_52332 = state_50877__$1;
(statearr_50899_52332[(2)] = inst_50869);

(statearr_50899_52332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50878 === (8))){
var inst_50859 = (state_50877[(7)]);
var state_50877__$1 = state_50877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50877__$1,(11),out,inst_50859);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_50901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50901[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_50901[(1)] = (1));

return statearr_50901;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_50877){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_50877);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e50905){var ex__48336__auto__ = e50905;
var statearr_50906_52339 = state_50877;
(statearr_50906_52339[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_50877[(4)]))){
var statearr_50908_52340 = state_50877;
(statearr_50908_52340[(1)] = cljs.core.first((state_50877[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52343 = state_50877;
state_50877 = G__52343;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_50877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_50877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_50910 = f__48722__auto__();
(statearr_50910[(6)] = c__48721__auto___52313);

return statearr_50910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50920 = (function (f,ch,meta50914,_,fn1,meta50921){
this.f = f;
this.ch = ch;
this.meta50914 = meta50914;
this._ = _;
this.fn1 = fn1;
this.meta50921 = meta50921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50922,meta50921__$1){
var self__ = this;
var _50922__$1 = this;
return (new cljs.core.async.t_cljs$core$async50920(self__.f,self__.ch,self__.meta50914,self__._,self__.fn1,meta50921__$1));
}));

(cljs.core.async.t_cljs$core$async50920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50922){
var self__ = this;
var _50922__$1 = this;
return self__.meta50921;
}));

(cljs.core.async.t_cljs$core$async50920.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async50920.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__50911_SHARP_){
var G__50928 = (((p1__50911_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__50911_SHARP_) : self__.f.call(null,p1__50911_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__50928) : f1.call(null,G__50928));
});
}));

(cljs.core.async.t_cljs$core$async50920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50914","meta50914",-1098981692,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50913","cljs.core.async/t_cljs$core$async50913",-706068159,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50921","meta50921",-750951758,null)], null);
}));

(cljs.core.async.t_cljs$core$async50920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50920");

(cljs.core.async.t_cljs$core$async50920.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50920.
 */
cljs.core.async.__GT_t_cljs$core$async50920 = (function cljs$core$async$__GT_t_cljs$core$async50920(f,ch,meta50914,_,fn1,meta50921){
return (new cljs.core.async.t_cljs$core$async50920(f,ch,meta50914,_,fn1,meta50921));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50913 = (function (f,ch,meta50914){
this.f = f;
this.ch = ch;
this.meta50914 = meta50914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50915,meta50914__$1){
var self__ = this;
var _50915__$1 = this;
return (new cljs.core.async.t_cljs$core$async50913(self__.f,self__.ch,meta50914__$1));
}));

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50915){
var self__ = this;
var _50915__$1 = this;
return self__.meta50914;
}));

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async50920(self__.f,self__.ch,self__.meta50914,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__50931 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__50931) : self__.f.call(null,G__50931));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async50913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50914","meta50914",-1098981692,null)], null);
}));

(cljs.core.async.t_cljs$core$async50913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50913");

(cljs.core.async.t_cljs$core$async50913.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50913.
 */
cljs.core.async.__GT_t_cljs$core$async50913 = (function cljs$core$async$__GT_t_cljs$core$async50913(f,ch,meta50914){
return (new cljs.core.async.t_cljs$core$async50913(f,ch,meta50914));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async50913(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50935 = (function (f,ch,meta50936){
this.f = f;
this.ch = ch;
this.meta50936 = meta50936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50937,meta50936__$1){
var self__ = this;
var _50937__$1 = this;
return (new cljs.core.async.t_cljs$core$async50935(self__.f,self__.ch,meta50936__$1));
}));

(cljs.core.async.t_cljs$core$async50935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50937){
var self__ = this;
var _50937__$1 = this;
return self__.meta50936;
}));

(cljs.core.async.t_cljs$core$async50935.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50935.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50935.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async50935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50936","meta50936",474852456,null)], null);
}));

(cljs.core.async.t_cljs$core$async50935.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50935");

(cljs.core.async.t_cljs$core$async50935.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50935");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50935.
 */
cljs.core.async.__GT_t_cljs$core$async50935 = (function cljs$core$async$__GT_t_cljs$core$async50935(f,ch,meta50936){
return (new cljs.core.async.t_cljs$core$async50935(f,ch,meta50936));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async50935(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50939 = (function (p,ch,meta50940){
this.p = p;
this.ch = ch;
this.meta50940 = meta50940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50941,meta50940__$1){
var self__ = this;
var _50941__$1 = this;
return (new cljs.core.async.t_cljs$core$async50939(self__.p,self__.ch,meta50940__$1));
}));

(cljs.core.async.t_cljs$core$async50939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50941){
var self__ = this;
var _50941__$1 = this;
return self__.meta50940;
}));

(cljs.core.async.t_cljs$core$async50939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async50939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50940","meta50940",-1412772181,null)], null);
}));

(cljs.core.async.t_cljs$core$async50939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50939");

(cljs.core.async.t_cljs$core$async50939.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50939.
 */
cljs.core.async.__GT_t_cljs$core$async50939 = (function cljs$core$async$__GT_t_cljs$core$async50939(p,ch,meta50940){
return (new cljs.core.async.t_cljs$core$async50939(p,ch,meta50940));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async50939(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__50961 = arguments.length;
switch (G__50961) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48721__auto___52353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_50983){
var state_val_50984 = (state_50983[(1)]);
if((state_val_50984 === (7))){
var inst_50979 = (state_50983[(2)]);
var state_50983__$1 = state_50983;
var statearr_50985_52357 = state_50983__$1;
(statearr_50985_52357[(2)] = inst_50979);

(statearr_50985_52357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (1))){
var state_50983__$1 = state_50983;
var statearr_50986_52358 = state_50983__$1;
(statearr_50986_52358[(2)] = null);

(statearr_50986_52358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (4))){
var inst_50965 = (state_50983[(7)]);
var inst_50965__$1 = (state_50983[(2)]);
var inst_50966 = (inst_50965__$1 == null);
var state_50983__$1 = (function (){var statearr_50988 = state_50983;
(statearr_50988[(7)] = inst_50965__$1);

return statearr_50988;
})();
if(cljs.core.truth_(inst_50966)){
var statearr_50989_52361 = state_50983__$1;
(statearr_50989_52361[(1)] = (5));

} else {
var statearr_50990_52363 = state_50983__$1;
(statearr_50990_52363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (6))){
var inst_50965 = (state_50983[(7)]);
var inst_50970 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50965) : p.call(null,inst_50965));
var state_50983__$1 = state_50983;
if(cljs.core.truth_(inst_50970)){
var statearr_50991_52370 = state_50983__$1;
(statearr_50991_52370[(1)] = (8));

} else {
var statearr_50992_52371 = state_50983__$1;
(statearr_50992_52371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (3))){
var inst_50981 = (state_50983[(2)]);
var state_50983__$1 = state_50983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50983__$1,inst_50981);
} else {
if((state_val_50984 === (2))){
var state_50983__$1 = state_50983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50983__$1,(4),ch);
} else {
if((state_val_50984 === (11))){
var inst_50973 = (state_50983[(2)]);
var state_50983__$1 = state_50983;
var statearr_50993_52372 = state_50983__$1;
(statearr_50993_52372[(2)] = inst_50973);

(statearr_50993_52372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (9))){
var state_50983__$1 = state_50983;
var statearr_50994_52376 = state_50983__$1;
(statearr_50994_52376[(2)] = null);

(statearr_50994_52376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (5))){
var inst_50968 = cljs.core.async.close_BANG_(out);
var state_50983__$1 = state_50983;
var statearr_50995_52380 = state_50983__$1;
(statearr_50995_52380[(2)] = inst_50968);

(statearr_50995_52380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (10))){
var inst_50976 = (state_50983[(2)]);
var state_50983__$1 = (function (){var statearr_50996 = state_50983;
(statearr_50996[(8)] = inst_50976);

return statearr_50996;
})();
var statearr_50997_52385 = state_50983__$1;
(statearr_50997_52385[(2)] = null);

(statearr_50997_52385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50984 === (8))){
var inst_50965 = (state_50983[(7)]);
var state_50983__$1 = state_50983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50983__$1,(11),out,inst_50965);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_50998 = [null,null,null,null,null,null,null,null,null];
(statearr_50998[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_50998[(1)] = (1));

return statearr_50998;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_50983){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_50983);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e50999){var ex__48336__auto__ = e50999;
var statearr_51000_52386 = state_50983;
(statearr_51000_52386[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_50983[(4)]))){
var statearr_51001_52387 = state_50983;
(statearr_51001_52387[(1)] = cljs.core.first((state_50983[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52388 = state_50983;
state_50983 = G__52388;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_50983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_50983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_51005 = f__48722__auto__();
(statearr_51005[(6)] = c__48721__auto___52353);

return statearr_51005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51015 = arguments.length;
switch (G__51015) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48721__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_51095){
var state_val_51096 = (state_51095[(1)]);
if((state_val_51096 === (7))){
var inst_51091 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
var statearr_51104_52393 = state_51095__$1;
(statearr_51104_52393[(2)] = inst_51091);

(statearr_51104_52393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (20))){
var inst_51056 = (state_51095[(7)]);
var inst_51072 = (state_51095[(2)]);
var inst_51073 = cljs.core.next(inst_51056);
var inst_51038 = inst_51073;
var inst_51039 = null;
var inst_51040 = (0);
var inst_51041 = (0);
var state_51095__$1 = (function (){var statearr_51105 = state_51095;
(statearr_51105[(8)] = inst_51040);

(statearr_51105[(9)] = inst_51039);

(statearr_51105[(10)] = inst_51072);

(statearr_51105[(11)] = inst_51038);

(statearr_51105[(12)] = inst_51041);

return statearr_51105;
})();
var statearr_51109_52394 = state_51095__$1;
(statearr_51109_52394[(2)] = null);

(statearr_51109_52394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (1))){
var state_51095__$1 = state_51095;
var statearr_51110_52395 = state_51095__$1;
(statearr_51110_52395[(2)] = null);

(statearr_51110_52395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (4))){
var inst_51027 = (state_51095[(13)]);
var inst_51027__$1 = (state_51095[(2)]);
var inst_51028 = (inst_51027__$1 == null);
var state_51095__$1 = (function (){var statearr_51114 = state_51095;
(statearr_51114[(13)] = inst_51027__$1);

return statearr_51114;
})();
if(cljs.core.truth_(inst_51028)){
var statearr_51115_52397 = state_51095__$1;
(statearr_51115_52397[(1)] = (5));

} else {
var statearr_51116_52398 = state_51095__$1;
(statearr_51116_52398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (15))){
var state_51095__$1 = state_51095;
var statearr_51120_52399 = state_51095__$1;
(statearr_51120_52399[(2)] = null);

(statearr_51120_52399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (21))){
var state_51095__$1 = state_51095;
var statearr_51121_52400 = state_51095__$1;
(statearr_51121_52400[(2)] = null);

(statearr_51121_52400[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (13))){
var inst_51040 = (state_51095[(8)]);
var inst_51039 = (state_51095[(9)]);
var inst_51038 = (state_51095[(11)]);
var inst_51041 = (state_51095[(12)]);
var inst_51051 = (state_51095[(2)]);
var inst_51053 = (inst_51041 + (1));
var tmp51117 = inst_51040;
var tmp51118 = inst_51039;
var tmp51119 = inst_51038;
var inst_51038__$1 = tmp51119;
var inst_51039__$1 = tmp51118;
var inst_51040__$1 = tmp51117;
var inst_51041__$1 = inst_51053;
var state_51095__$1 = (function (){var statearr_51125 = state_51095;
(statearr_51125[(8)] = inst_51040__$1);

(statearr_51125[(9)] = inst_51039__$1);

(statearr_51125[(11)] = inst_51038__$1);

(statearr_51125[(12)] = inst_51041__$1);

(statearr_51125[(14)] = inst_51051);

return statearr_51125;
})();
var statearr_51126_52401 = state_51095__$1;
(statearr_51126_52401[(2)] = null);

(statearr_51126_52401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (22))){
var state_51095__$1 = state_51095;
var statearr_51130_52402 = state_51095__$1;
(statearr_51130_52402[(2)] = null);

(statearr_51130_52402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (6))){
var inst_51027 = (state_51095[(13)]);
var inst_51036 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51027) : f.call(null,inst_51027));
var inst_51037 = cljs.core.seq(inst_51036);
var inst_51038 = inst_51037;
var inst_51039 = null;
var inst_51040 = (0);
var inst_51041 = (0);
var state_51095__$1 = (function (){var statearr_51137 = state_51095;
(statearr_51137[(8)] = inst_51040);

(statearr_51137[(9)] = inst_51039);

(statearr_51137[(11)] = inst_51038);

(statearr_51137[(12)] = inst_51041);

return statearr_51137;
})();
var statearr_51138_52403 = state_51095__$1;
(statearr_51138_52403[(2)] = null);

(statearr_51138_52403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (17))){
var inst_51056 = (state_51095[(7)]);
var inst_51061 = cljs.core.chunk_first(inst_51056);
var inst_51062 = cljs.core.chunk_rest(inst_51056);
var inst_51063 = cljs.core.count(inst_51061);
var inst_51038 = inst_51062;
var inst_51039 = inst_51061;
var inst_51040 = inst_51063;
var inst_51041 = (0);
var state_51095__$1 = (function (){var statearr_51142 = state_51095;
(statearr_51142[(8)] = inst_51040);

(statearr_51142[(9)] = inst_51039);

(statearr_51142[(11)] = inst_51038);

(statearr_51142[(12)] = inst_51041);

return statearr_51142;
})();
var statearr_51143_52409 = state_51095__$1;
(statearr_51143_52409[(2)] = null);

(statearr_51143_52409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (3))){
var inst_51093 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51095__$1,inst_51093);
} else {
if((state_val_51096 === (12))){
var inst_51081 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
var statearr_51144_52414 = state_51095__$1;
(statearr_51144_52414[(2)] = inst_51081);

(statearr_51144_52414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (2))){
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51095__$1,(4),in$);
} else {
if((state_val_51096 === (23))){
var inst_51089 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
var statearr_51145_52415 = state_51095__$1;
(statearr_51145_52415[(2)] = inst_51089);

(statearr_51145_52415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (19))){
var inst_51076 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
var statearr_51146_52416 = state_51095__$1;
(statearr_51146_52416[(2)] = inst_51076);

(statearr_51146_52416[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (11))){
var inst_51038 = (state_51095[(11)]);
var inst_51056 = (state_51095[(7)]);
var inst_51056__$1 = cljs.core.seq(inst_51038);
var state_51095__$1 = (function (){var statearr_51150 = state_51095;
(statearr_51150[(7)] = inst_51056__$1);

return statearr_51150;
})();
if(inst_51056__$1){
var statearr_51154_52422 = state_51095__$1;
(statearr_51154_52422[(1)] = (14));

} else {
var statearr_51155_52423 = state_51095__$1;
(statearr_51155_52423[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (9))){
var inst_51083 = (state_51095[(2)]);
var inst_51084 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51095__$1 = (function (){var statearr_51159 = state_51095;
(statearr_51159[(15)] = inst_51083);

return statearr_51159;
})();
if(cljs.core.truth_(inst_51084)){
var statearr_51163_52425 = state_51095__$1;
(statearr_51163_52425[(1)] = (21));

} else {
var statearr_51164_52429 = state_51095__$1;
(statearr_51164_52429[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (5))){
var inst_51030 = cljs.core.async.close_BANG_(out);
var state_51095__$1 = state_51095;
var statearr_51165_52430 = state_51095__$1;
(statearr_51165_52430[(2)] = inst_51030);

(statearr_51165_52430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (14))){
var inst_51056 = (state_51095[(7)]);
var inst_51058 = cljs.core.chunked_seq_QMARK_(inst_51056);
var state_51095__$1 = state_51095;
if(inst_51058){
var statearr_51168_52431 = state_51095__$1;
(statearr_51168_52431[(1)] = (17));

} else {
var statearr_51172_52432 = state_51095__$1;
(statearr_51172_52432[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (16))){
var inst_51079 = (state_51095[(2)]);
var state_51095__$1 = state_51095;
var statearr_51174_52437 = state_51095__$1;
(statearr_51174_52437[(2)] = inst_51079);

(statearr_51174_52437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51096 === (10))){
var inst_51039 = (state_51095[(9)]);
var inst_51041 = (state_51095[(12)]);
var inst_51049 = cljs.core._nth(inst_51039,inst_51041);
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51095__$1,(13),out,inst_51049);
} else {
if((state_val_51096 === (18))){
var inst_51056 = (state_51095[(7)]);
var inst_51069 = cljs.core.first(inst_51056);
var state_51095__$1 = state_51095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51095__$1,(20),out,inst_51069);
} else {
if((state_val_51096 === (8))){
var inst_51040 = (state_51095[(8)]);
var inst_51041 = (state_51095[(12)]);
var inst_51046 = (inst_51041 < inst_51040);
var inst_51047 = inst_51046;
var state_51095__$1 = state_51095;
if(cljs.core.truth_(inst_51047)){
var statearr_51178_52443 = state_51095__$1;
(statearr_51178_52443[(1)] = (10));

} else {
var statearr_51179_52445 = state_51095__$1;
(statearr_51179_52445[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48333__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48333__auto____0 = (function (){
var statearr_51180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51180[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48333__auto__);

(statearr_51180[(1)] = (1));

return statearr_51180;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48333__auto____1 = (function (state_51095){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_51095);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e51181){var ex__48336__auto__ = e51181;
var statearr_51182_52446 = state_51095;
(statearr_51182_52446[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_51095[(4)]))){
var statearr_51183_52448 = state_51095;
(statearr_51183_52448[(1)] = cljs.core.first((state_51095[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52450 = state_51095;
state_51095 = G__52450;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48333__auto__ = function(state_51095){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48333__auto____1.call(this,state_51095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48333__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48333__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_51188 = f__48722__auto__();
(statearr_51188[(6)] = c__48721__auto__);

return statearr_51188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));

return c__48721__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51190 = arguments.length;
switch (G__51190) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__51198 = arguments.length;
switch (G__51198) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__51206 = arguments.length;
switch (G__51206) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48721__auto___52462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_51234){
var state_val_51235 = (state_51234[(1)]);
if((state_val_51235 === (7))){
var inst_51228 = (state_51234[(2)]);
var state_51234__$1 = state_51234;
var statearr_51237_52463 = state_51234__$1;
(statearr_51237_52463[(2)] = inst_51228);

(statearr_51237_52463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51235 === (1))){
var inst_51210 = null;
var state_51234__$1 = (function (){var statearr_51239 = state_51234;
(statearr_51239[(7)] = inst_51210);

return statearr_51239;
})();
var statearr_51240_52464 = state_51234__$1;
(statearr_51240_52464[(2)] = null);

(statearr_51240_52464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51235 === (4))){
var inst_51213 = (state_51234[(8)]);
var inst_51213__$1 = (state_51234[(2)]);
var inst_51214 = (inst_51213__$1 == null);
var inst_51215 = cljs.core.not(inst_51214);
var state_51234__$1 = (function (){var statearr_51248 = state_51234;
(statearr_51248[(8)] = inst_51213__$1);

return statearr_51248;
})();
if(inst_51215){
var statearr_51249_52465 = state_51234__$1;
(statearr_51249_52465[(1)] = (5));

} else {
var statearr_51250_52466 = state_51234__$1;
(statearr_51250_52466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51235 === (6))){
var state_51234__$1 = state_51234;
var statearr_51254_52471 = state_51234__$1;
(statearr_51254_52471[(2)] = null);

(statearr_51254_52471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51235 === (3))){
var inst_51230 = (state_51234[(2)]);
var inst_51231 = cljs.core.async.close_BANG_(out);
var state_51234__$1 = (function (){var statearr_51255 = state_51234;
(statearr_51255[(9)] = inst_51230);

return statearr_51255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51234__$1,inst_51231);
} else {
if((state_val_51235 === (2))){
var state_51234__$1 = state_51234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51234__$1,(4),ch);
} else {
if((state_val_51235 === (11))){
var inst_51213 = (state_51234[(8)]);
var inst_51222 = (state_51234[(2)]);
var inst_51210 = inst_51213;
var state_51234__$1 = (function (){var statearr_51256 = state_51234;
(statearr_51256[(7)] = inst_51210);

(statearr_51256[(10)] = inst_51222);

return statearr_51256;
})();
var statearr_51258_52485 = state_51234__$1;
(statearr_51258_52485[(2)] = null);

(statearr_51258_52485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51235 === (9))){
var inst_51213 = (state_51234[(8)]);
var state_51234__$1 = state_51234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51234__$1,(11),out,inst_51213);
} else {
if((state_val_51235 === (5))){
var inst_51210 = (state_51234[(7)]);
var inst_51213 = (state_51234[(8)]);
var inst_51217 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51213,inst_51210);
var state_51234__$1 = state_51234;
if(inst_51217){
var statearr_51262_52488 = state_51234__$1;
(statearr_51262_52488[(1)] = (8));

} else {
var statearr_51263_52489 = state_51234__$1;
(statearr_51263_52489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51235 === (10))){
var inst_51225 = (state_51234[(2)]);
var state_51234__$1 = state_51234;
var statearr_51264_52490 = state_51234__$1;
(statearr_51264_52490[(2)] = inst_51225);

(statearr_51264_52490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51235 === (8))){
var inst_51210 = (state_51234[(7)]);
var tmp51261 = inst_51210;
var inst_51210__$1 = tmp51261;
var state_51234__$1 = (function (){var statearr_51280 = state_51234;
(statearr_51280[(7)] = inst_51210__$1);

return statearr_51280;
})();
var statearr_51288_52491 = state_51234__$1;
(statearr_51288_52491[(2)] = null);

(statearr_51288_52491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_51293 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51293[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_51293[(1)] = (1));

return statearr_51293;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_51234){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_51234);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e51294){var ex__48336__auto__ = e51294;
var statearr_51295_52494 = state_51234;
(statearr_51295_52494[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_51234[(4)]))){
var statearr_51296_52495 = state_51234;
(statearr_51296_52495[(1)] = cljs.core.first((state_51234[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52496 = state_51234;
state_51234 = G__52496;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_51234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_51234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_51297 = f__48722__auto__();
(statearr_51297[(6)] = c__48721__auto___52462);

return statearr_51297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51299 = arguments.length;
switch (G__51299) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48721__auto___52500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_51341){
var state_val_51342 = (state_51341[(1)]);
if((state_val_51342 === (7))){
var inst_51337 = (state_51341[(2)]);
var state_51341__$1 = state_51341;
var statearr_51343_52503 = state_51341__$1;
(statearr_51343_52503[(2)] = inst_51337);

(statearr_51343_52503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51342 === (1))){
var inst_51301 = (new Array(n));
var inst_51302 = inst_51301;
var inst_51303 = (0);
var state_51341__$1 = (function (){var statearr_51344 = state_51341;
(statearr_51344[(7)] = inst_51303);

(statearr_51344[(8)] = inst_51302);

return statearr_51344;
})();
var statearr_51345_52508 = state_51341__$1;
(statearr_51345_52508[(2)] = null);

(statearr_51345_52508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51342 === (4))){
var inst_51307 = (state_51341[(9)]);
var inst_51307__$1 = (state_51341[(2)]);
var inst_51308 = (inst_51307__$1 == null);
var inst_51309 = cljs.core.not(inst_51308);
var state_51341__$1 = (function (){var statearr_51346 = state_51341;
(statearr_51346[(9)] = inst_51307__$1);

return statearr_51346;
})();
if(inst_51309){
var statearr_51347_52511 = state_51341__$1;
(statearr_51347_52511[(1)] = (5));

} else {
var statearr_51348_52512 = state_51341__$1;
(statearr_51348_52512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51342 === (15))){
var inst_51331 = (state_51341[(2)]);
var state_51341__$1 = state_51341;
var statearr_51349_52513 = state_51341__$1;
(statearr_51349_52513[(2)] = inst_51331);

(statearr_51349_52513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51342 === (13))){
var state_51341__$1 = state_51341;
var statearr_51350_52517 = state_51341__$1;
(statearr_51350_52517[(2)] = null);

(statearr_51350_52517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51342 === (6))){
var inst_51303 = (state_51341[(7)]);
var inst_51325 = (inst_51303 > (0));
var state_51341__$1 = state_51341;
if(cljs.core.truth_(inst_51325)){
var statearr_51351_52518 = state_51341__$1;
(statearr_51351_52518[(1)] = (12));

} else {
var statearr_51353_52519 = state_51341__$1;
(statearr_51353_52519[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51342 === (3))){
var inst_51339 = (state_51341[(2)]);
var state_51341__$1 = state_51341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51341__$1,inst_51339);
} else {
if((state_val_51342 === (12))){
var inst_51302 = (state_51341[(8)]);
var inst_51329 = cljs.core.vec(inst_51302);
var state_51341__$1 = state_51341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51341__$1,(15),out,inst_51329);
} else {
if((state_val_51342 === (2))){
var state_51341__$1 = state_51341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51341__$1,(4),ch);
} else {
if((state_val_51342 === (11))){
var inst_51319 = (state_51341[(2)]);
var inst_51320 = (new Array(n));
var inst_51302 = inst_51320;
var inst_51303 = (0);
var state_51341__$1 = (function (){var statearr_51355 = state_51341;
(statearr_51355[(7)] = inst_51303);

(statearr_51355[(8)] = inst_51302);

(statearr_51355[(10)] = inst_51319);

return statearr_51355;
})();
var statearr_51356_52525 = state_51341__$1;
(statearr_51356_52525[(2)] = null);

(statearr_51356_52525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51342 === (9))){
var inst_51302 = (state_51341[(8)]);
var inst_51317 = cljs.core.vec(inst_51302);
var state_51341__$1 = state_51341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51341__$1,(11),out,inst_51317);
} else {
if((state_val_51342 === (5))){
var inst_51303 = (state_51341[(7)]);
var inst_51312 = (state_51341[(11)]);
var inst_51302 = (state_51341[(8)]);
var inst_51307 = (state_51341[(9)]);
var inst_51311 = (inst_51302[inst_51303] = inst_51307);
var inst_51312__$1 = (inst_51303 + (1));
var inst_51313 = (inst_51312__$1 < n);
var state_51341__$1 = (function (){var statearr_51357 = state_51341;
(statearr_51357[(11)] = inst_51312__$1);

(statearr_51357[(12)] = inst_51311);

return statearr_51357;
})();
if(cljs.core.truth_(inst_51313)){
var statearr_51358_52526 = state_51341__$1;
(statearr_51358_52526[(1)] = (8));

} else {
var statearr_51359_52527 = state_51341__$1;
(statearr_51359_52527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51342 === (14))){
var inst_51334 = (state_51341[(2)]);
var inst_51335 = cljs.core.async.close_BANG_(out);
var state_51341__$1 = (function (){var statearr_51361 = state_51341;
(statearr_51361[(13)] = inst_51334);

return statearr_51361;
})();
var statearr_51368_52529 = state_51341__$1;
(statearr_51368_52529[(2)] = inst_51335);

(statearr_51368_52529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51342 === (10))){
var inst_51323 = (state_51341[(2)]);
var state_51341__$1 = state_51341;
var statearr_51369_52534 = state_51341__$1;
(statearr_51369_52534[(2)] = inst_51323);

(statearr_51369_52534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51342 === (8))){
var inst_51312 = (state_51341[(11)]);
var inst_51302 = (state_51341[(8)]);
var tmp51360 = inst_51302;
var inst_51302__$1 = tmp51360;
var inst_51303 = inst_51312;
var state_51341__$1 = (function (){var statearr_51370 = state_51341;
(statearr_51370[(7)] = inst_51303);

(statearr_51370[(8)] = inst_51302__$1);

return statearr_51370;
})();
var statearr_51371_52543 = state_51341__$1;
(statearr_51371_52543[(2)] = null);

(statearr_51371_52543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_51378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51378[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_51378[(1)] = (1));

return statearr_51378;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_51341){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_51341);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e51379){var ex__48336__auto__ = e51379;
var statearr_51380_52549 = state_51341;
(statearr_51380_52549[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_51341[(4)]))){
var statearr_51381_52550 = state_51341;
(statearr_51381_52550[(1)] = cljs.core.first((state_51341[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52552 = state_51341;
state_51341 = G__52552;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_51341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_51341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_51382 = f__48722__auto__();
(statearr_51382[(6)] = c__48721__auto___52500);

return statearr_51382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51390 = arguments.length;
switch (G__51390) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48721__auto___52560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48722__auto__ = (function (){var switch__48332__auto__ = (function (state_51442){
var state_val_51443 = (state_51442[(1)]);
if((state_val_51443 === (7))){
var inst_51438 = (state_51442[(2)]);
var state_51442__$1 = state_51442;
var statearr_51444_52561 = state_51442__$1;
(statearr_51444_52561[(2)] = inst_51438);

(statearr_51444_52561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (1))){
var inst_51398 = [];
var inst_51399 = inst_51398;
var inst_51400 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51442__$1 = (function (){var statearr_51445 = state_51442;
(statearr_51445[(7)] = inst_51400);

(statearr_51445[(8)] = inst_51399);

return statearr_51445;
})();
var statearr_51449_52565 = state_51442__$1;
(statearr_51449_52565[(2)] = null);

(statearr_51449_52565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (4))){
var inst_51403 = (state_51442[(9)]);
var inst_51403__$1 = (state_51442[(2)]);
var inst_51404 = (inst_51403__$1 == null);
var inst_51405 = cljs.core.not(inst_51404);
var state_51442__$1 = (function (){var statearr_51450 = state_51442;
(statearr_51450[(9)] = inst_51403__$1);

return statearr_51450;
})();
if(inst_51405){
var statearr_51451_52569 = state_51442__$1;
(statearr_51451_52569[(1)] = (5));

} else {
var statearr_51452_52570 = state_51442__$1;
(statearr_51452_52570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (15))){
var inst_51399 = (state_51442[(8)]);
var inst_51430 = cljs.core.vec(inst_51399);
var state_51442__$1 = state_51442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51442__$1,(18),out,inst_51430);
} else {
if((state_val_51443 === (13))){
var inst_51425 = (state_51442[(2)]);
var state_51442__$1 = state_51442;
var statearr_51457_52573 = state_51442__$1;
(statearr_51457_52573[(2)] = inst_51425);

(statearr_51457_52573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (6))){
var inst_51399 = (state_51442[(8)]);
var inst_51427 = inst_51399.length;
var inst_51428 = (inst_51427 > (0));
var state_51442__$1 = state_51442;
if(cljs.core.truth_(inst_51428)){
var statearr_51458_52574 = state_51442__$1;
(statearr_51458_52574[(1)] = (15));

} else {
var statearr_51459_52575 = state_51442__$1;
(statearr_51459_52575[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (17))){
var inst_51435 = (state_51442[(2)]);
var inst_51436 = cljs.core.async.close_BANG_(out);
var state_51442__$1 = (function (){var statearr_51460 = state_51442;
(statearr_51460[(10)] = inst_51435);

return statearr_51460;
})();
var statearr_51461_52579 = state_51442__$1;
(statearr_51461_52579[(2)] = inst_51436);

(statearr_51461_52579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (3))){
var inst_51440 = (state_51442[(2)]);
var state_51442__$1 = state_51442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51442__$1,inst_51440);
} else {
if((state_val_51443 === (12))){
var inst_51399 = (state_51442[(8)]);
var inst_51418 = cljs.core.vec(inst_51399);
var state_51442__$1 = state_51442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51442__$1,(14),out,inst_51418);
} else {
if((state_val_51443 === (2))){
var state_51442__$1 = state_51442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51442__$1,(4),ch);
} else {
if((state_val_51443 === (11))){
var inst_51403 = (state_51442[(9)]);
var inst_51399 = (state_51442[(8)]);
var inst_51407 = (state_51442[(11)]);
var inst_51415 = inst_51399.push(inst_51403);
var tmp51465 = inst_51399;
var inst_51399__$1 = tmp51465;
var inst_51400 = inst_51407;
var state_51442__$1 = (function (){var statearr_51470 = state_51442;
(statearr_51470[(7)] = inst_51400);

(statearr_51470[(8)] = inst_51399__$1);

(statearr_51470[(12)] = inst_51415);

return statearr_51470;
})();
var statearr_51477_52580 = state_51442__$1;
(statearr_51477_52580[(2)] = null);

(statearr_51477_52580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (9))){
var inst_51400 = (state_51442[(7)]);
var inst_51411 = cljs.core.keyword_identical_QMARK_(inst_51400,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_51442__$1 = state_51442;
var statearr_51479_52582 = state_51442__$1;
(statearr_51479_52582[(2)] = inst_51411);

(statearr_51479_52582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (5))){
var inst_51400 = (state_51442[(7)]);
var inst_51403 = (state_51442[(9)]);
var inst_51407 = (state_51442[(11)]);
var inst_51408 = (state_51442[(13)]);
var inst_51407__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51403) : f.call(null,inst_51403));
var inst_51408__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51407__$1,inst_51400);
var state_51442__$1 = (function (){var statearr_51480 = state_51442;
(statearr_51480[(11)] = inst_51407__$1);

(statearr_51480[(13)] = inst_51408__$1);

return statearr_51480;
})();
if(inst_51408__$1){
var statearr_51481_52586 = state_51442__$1;
(statearr_51481_52586[(1)] = (8));

} else {
var statearr_51482_52587 = state_51442__$1;
(statearr_51482_52587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (14))){
var inst_51403 = (state_51442[(9)]);
var inst_51407 = (state_51442[(11)]);
var inst_51420 = (state_51442[(2)]);
var inst_51421 = [];
var inst_51422 = inst_51421.push(inst_51403);
var inst_51399 = inst_51421;
var inst_51400 = inst_51407;
var state_51442__$1 = (function (){var statearr_51484 = state_51442;
(statearr_51484[(7)] = inst_51400);

(statearr_51484[(14)] = inst_51422);

(statearr_51484[(8)] = inst_51399);

(statearr_51484[(15)] = inst_51420);

return statearr_51484;
})();
var statearr_51485_52588 = state_51442__$1;
(statearr_51485_52588[(2)] = null);

(statearr_51485_52588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (16))){
var state_51442__$1 = state_51442;
var statearr_51488_52589 = state_51442__$1;
(statearr_51488_52589[(2)] = null);

(statearr_51488_52589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (10))){
var inst_51413 = (state_51442[(2)]);
var state_51442__$1 = state_51442;
if(cljs.core.truth_(inst_51413)){
var statearr_51490_52593 = state_51442__$1;
(statearr_51490_52593[(1)] = (11));

} else {
var statearr_51494_52596 = state_51442__$1;
(statearr_51494_52596[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (18))){
var inst_51432 = (state_51442[(2)]);
var state_51442__$1 = state_51442;
var statearr_51501_52604 = state_51442__$1;
(statearr_51501_52604[(2)] = inst_51432);

(statearr_51501_52604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51443 === (8))){
var inst_51408 = (state_51442[(13)]);
var state_51442__$1 = state_51442;
var statearr_51502_52605 = state_51442__$1;
(statearr_51502_52605[(2)] = inst_51408);

(statearr_51502_52605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48333__auto__ = null;
var cljs$core$async$state_machine__48333__auto____0 = (function (){
var statearr_51506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51506[(0)] = cljs$core$async$state_machine__48333__auto__);

(statearr_51506[(1)] = (1));

return statearr_51506;
});
var cljs$core$async$state_machine__48333__auto____1 = (function (state_51442){
while(true){
var ret_value__48334__auto__ = (function (){try{while(true){
var result__48335__auto__ = switch__48332__auto__(state_51442);
if(cljs.core.keyword_identical_QMARK_(result__48335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48335__auto__;
}
break;
}
}catch (e51507){var ex__48336__auto__ = e51507;
var statearr_51508_52619 = state_51442;
(statearr_51508_52619[(2)] = ex__48336__auto__);


if(cljs.core.seq((state_51442[(4)]))){
var statearr_51509_52621 = state_51442;
(statearr_51509_52621[(1)] = cljs.core.first((state_51442[(4)])));

} else {
throw ex__48336__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52622 = state_51442;
state_51442 = G__52622;
continue;
} else {
return ret_value__48334__auto__;
}
break;
}
});
cljs$core$async$state_machine__48333__auto__ = function(state_51442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48333__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48333__auto____1.call(this,state_51442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48333__auto____0;
cljs$core$async$state_machine__48333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48333__auto____1;
return cljs$core$async$state_machine__48333__auto__;
})()
})();
var state__48723__auto__ = (function (){var statearr_51510 = f__48722__auto__();
(statearr_51510[(6)] = c__48721__auto___52560);

return statearr_51510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48723__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
