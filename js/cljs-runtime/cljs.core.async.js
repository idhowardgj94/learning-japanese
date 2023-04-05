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
cljs.core.async.t_cljs$core$async44160 = (function (f,blockable,meta44161){
this.f = f;
this.blockable = blockable;
this.meta44161 = meta44161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44162,meta44161__$1){
var self__ = this;
var _44162__$1 = this;
return (new cljs.core.async.t_cljs$core$async44160(self__.f,self__.blockable,meta44161__$1));
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44162){
var self__ = this;
var _44162__$1 = this;
return self__.meta44161;
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44161","meta44161",672555268,null)], null);
}));

(cljs.core.async.t_cljs$core$async44160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44160");

(cljs.core.async.t_cljs$core$async44160.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44160.
 */
cljs.core.async.__GT_t_cljs$core$async44160 = (function cljs$core$async$__GT_t_cljs$core$async44160(f,blockable,meta44161){
return (new cljs.core.async.t_cljs$core$async44160(f,blockable,meta44161));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44155 = arguments.length;
switch (G__44155) {
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
return (new cljs.core.async.t_cljs$core$async44160(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44181 = arguments.length;
switch (G__44181) {
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
var G__44203 = arguments.length;
switch (G__44203) {
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
var G__44224 = arguments.length;
switch (G__44224) {
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
var val_47121 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47121) : fn1.call(null,val_47121));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47121) : fn1.call(null,val_47121));
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
var G__44245 = arguments.length;
switch (G__44245) {
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
var n__5636__auto___47125 = n;
var x_47126 = (0);
while(true){
if((x_47126 < n__5636__auto___47125)){
(a[x_47126] = x_47126);

var G__47127 = (x_47126 + (1));
x_47126 = G__47127;
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
cljs.core.async.t_cljs$core$async44248 = (function (flag,meta44249){
this.flag = flag;
this.meta44249 = meta44249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44250,meta44249__$1){
var self__ = this;
var _44250__$1 = this;
return (new cljs.core.async.t_cljs$core$async44248(self__.flag,meta44249__$1));
}));

(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44250){
var self__ = this;
var _44250__$1 = this;
return self__.meta44249;
}));

(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44249","meta44249",-457124132,null)], null);
}));

(cljs.core.async.t_cljs$core$async44248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44248");

(cljs.core.async.t_cljs$core$async44248.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44248.
 */
cljs.core.async.__GT_t_cljs$core$async44248 = (function cljs$core$async$__GT_t_cljs$core$async44248(flag,meta44249){
return (new cljs.core.async.t_cljs$core$async44248(flag,meta44249));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async44248(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44255 = (function (flag,cb,meta44256){
this.flag = flag;
this.cb = cb;
this.meta44256 = meta44256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44257,meta44256__$1){
var self__ = this;
var _44257__$1 = this;
return (new cljs.core.async.t_cljs$core$async44255(self__.flag,self__.cb,meta44256__$1));
}));

(cljs.core.async.t_cljs$core$async44255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44257){
var self__ = this;
var _44257__$1 = this;
return self__.meta44256;
}));

(cljs.core.async.t_cljs$core$async44255.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44255.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44256","meta44256",197856806,null)], null);
}));

(cljs.core.async.t_cljs$core$async44255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44255");

(cljs.core.async.t_cljs$core$async44255.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44255.
 */
cljs.core.async.__GT_t_cljs$core$async44255 = (function cljs$core$async$__GT_t_cljs$core$async44255(flag,cb,meta44256){
return (new cljs.core.async.t_cljs$core$async44255(flag,cb,meta44256));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async44255(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44291_SHARP_){
var G__44308 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44291_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44308) : fret.call(null,G__44308));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44292_SHARP_){
var G__44309 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44292_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44309) : fret.call(null,G__44309));
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
var G__47136 = (i + (1));
i = G__47136;
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
var len__5769__auto___47137 = arguments.length;
var i__5770__auto___47138 = (0);
while(true){
if((i__5770__auto___47138 < len__5769__auto___47137)){
args__5775__auto__.push((arguments[i__5770__auto___47138]));

var G__47139 = (i__5770__auto___47138 + (1));
i__5770__auto___47138 = G__47139;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44331){
var map__44336 = p__44331;
var map__44336__$1 = cljs.core.__destructure_map(map__44336);
var opts = map__44336__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44312){
var G__44313 = cljs.core.first(seq44312);
var seq44312__$1 = cljs.core.next(seq44312);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44313,seq44312__$1);
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
var G__44361 = arguments.length;
switch (G__44361) {
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
var c__44082__auto___47145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_44430){
var state_val_44431 = (state_44430[(1)]);
if((state_val_44431 === (7))){
var inst_44425 = (state_44430[(2)]);
var state_44430__$1 = state_44430;
var statearr_44433_47146 = state_44430__$1;
(statearr_44433_47146[(2)] = inst_44425);

(statearr_44433_47146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (1))){
var state_44430__$1 = state_44430;
var statearr_44434_47147 = state_44430__$1;
(statearr_44434_47147[(2)] = null);

(statearr_44434_47147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (4))){
var inst_44397 = (state_44430[(7)]);
var inst_44397__$1 = (state_44430[(2)]);
var inst_44408 = (inst_44397__$1 == null);
var state_44430__$1 = (function (){var statearr_44439 = state_44430;
(statearr_44439[(7)] = inst_44397__$1);

return statearr_44439;
})();
if(cljs.core.truth_(inst_44408)){
var statearr_44440_47148 = state_44430__$1;
(statearr_44440_47148[(1)] = (5));

} else {
var statearr_44442_47149 = state_44430__$1;
(statearr_44442_47149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (13))){
var state_44430__$1 = state_44430;
var statearr_44444_47150 = state_44430__$1;
(statearr_44444_47150[(2)] = null);

(statearr_44444_47150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (6))){
var inst_44397 = (state_44430[(7)]);
var state_44430__$1 = state_44430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44430__$1,(11),to,inst_44397);
} else {
if((state_val_44431 === (3))){
var inst_44427 = (state_44430[(2)]);
var state_44430__$1 = state_44430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44430__$1,inst_44427);
} else {
if((state_val_44431 === (12))){
var state_44430__$1 = state_44430;
var statearr_44445_47151 = state_44430__$1;
(statearr_44445_47151[(2)] = null);

(statearr_44445_47151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (2))){
var state_44430__$1 = state_44430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44430__$1,(4),from);
} else {
if((state_val_44431 === (11))){
var inst_44417 = (state_44430[(2)]);
var state_44430__$1 = state_44430;
if(cljs.core.truth_(inst_44417)){
var statearr_44450_47152 = state_44430__$1;
(statearr_44450_47152[(1)] = (12));

} else {
var statearr_44451_47153 = state_44430__$1;
(statearr_44451_47153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (9))){
var state_44430__$1 = state_44430;
var statearr_44452_47154 = state_44430__$1;
(statearr_44452_47154[(2)] = null);

(statearr_44452_47154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (5))){
var state_44430__$1 = state_44430;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44456_47155 = state_44430__$1;
(statearr_44456_47155[(1)] = (8));

} else {
var statearr_44457_47156 = state_44430__$1;
(statearr_44457_47156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (14))){
var inst_44423 = (state_44430[(2)]);
var state_44430__$1 = state_44430;
var statearr_44458_47157 = state_44430__$1;
(statearr_44458_47157[(2)] = inst_44423);

(statearr_44458_47157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (10))){
var inst_44414 = (state_44430[(2)]);
var state_44430__$1 = state_44430;
var statearr_44460_47158 = state_44430__$1;
(statearr_44460_47158[(2)] = inst_44414);

(statearr_44460_47158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (8))){
var inst_44411 = cljs.core.async.close_BANG_(to);
var state_44430__$1 = state_44430;
var statearr_44462_47159 = state_44430__$1;
(statearr_44462_47159[(2)] = inst_44411);

(statearr_44462_47159[(1)] = (10));


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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_44466 = [null,null,null,null,null,null,null,null];
(statearr_44466[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_44466[(1)] = (1));

return statearr_44466;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_44430){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_44430);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e44474){var ex__43752__auto__ = e44474;
var statearr_44475_47160 = state_44430;
(statearr_44475_47160[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_44430[(4)]))){
var statearr_44476_47161 = state_44430;
(statearr_44476_47161[(1)] = cljs.core.first((state_44430[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47163 = state_44430;
state_44430 = G__47163;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_44430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_44430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_44483 = f__44083__auto__();
(statearr_44483[(6)] = c__44082__auto___47145);

return statearr_44483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
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
var process__$1 = (function (p__44495){
var vec__44502 = p__44495;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44502,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44502,(1),null);
var job = vec__44502;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44082__auto___47166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_44509){
var state_val_44510 = (state_44509[(1)]);
if((state_val_44510 === (1))){
var state_44509__$1 = state_44509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44509__$1,(2),res,v);
} else {
if((state_val_44510 === (2))){
var inst_44506 = (state_44509[(2)]);
var inst_44507 = cljs.core.async.close_BANG_(res);
var state_44509__$1 = (function (){var statearr_44511 = state_44509;
(statearr_44511[(7)] = inst_44506);

return statearr_44511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44509__$1,inst_44507);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0 = (function (){
var statearr_44512 = [null,null,null,null,null,null,null,null];
(statearr_44512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__);

(statearr_44512[(1)] = (1));

return statearr_44512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1 = (function (state_44509){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_44509);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e44521){var ex__43752__auto__ = e44521;
var statearr_44522_47169 = state_44509;
(statearr_44522_47169[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_44509[(4)]))){
var statearr_44523_47170 = state_44509;
(statearr_44523_47170[(1)] = cljs.core.first((state_44509[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47171 = state_44509;
state_44509 = G__47171;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__ = function(state_44509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1.call(this,state_44509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_44528 = f__44083__auto__();
(statearr_44528[(6)] = c__44082__auto___47166);

return statearr_44528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44529){
var vec__44530 = p__44529;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44530,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44530,(1),null);
var job = vec__44530;
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
var n__5636__auto___47175 = n;
var __47176 = (0);
while(true){
if((__47176 < n__5636__auto___47175)){
var G__44536_47177 = type;
var G__44536_47178__$1 = (((G__44536_47177 instanceof cljs.core.Keyword))?G__44536_47177.fqn:null);
switch (G__44536_47178__$1) {
case "compute":
var c__44082__auto___47180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47176,c__44082__auto___47180,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async){
return (function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = ((function (__47176,c__44082__auto___47180,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async){
return (function (state_44562){
var state_val_44563 = (state_44562[(1)]);
if((state_val_44563 === (1))){
var state_44562__$1 = state_44562;
var statearr_44567_47182 = state_44562__$1;
(statearr_44567_47182[(2)] = null);

(statearr_44567_47182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44563 === (2))){
var state_44562__$1 = state_44562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44562__$1,(4),jobs);
} else {
if((state_val_44563 === (3))){
var inst_44554 = (state_44562[(2)]);
var state_44562__$1 = state_44562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44562__$1,inst_44554);
} else {
if((state_val_44563 === (4))){
var inst_44539 = (state_44562[(2)]);
var inst_44544 = process__$1(inst_44539);
var state_44562__$1 = state_44562;
if(cljs.core.truth_(inst_44544)){
var statearr_44579_47184 = state_44562__$1;
(statearr_44579_47184[(1)] = (5));

} else {
var statearr_44583_47185 = state_44562__$1;
(statearr_44583_47185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44563 === (5))){
var state_44562__$1 = state_44562;
var statearr_44584_47186 = state_44562__$1;
(statearr_44584_47186[(2)] = null);

(statearr_44584_47186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44563 === (6))){
var state_44562__$1 = state_44562;
var statearr_44586_47187 = state_44562__$1;
(statearr_44586_47187[(2)] = null);

(statearr_44586_47187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44563 === (7))){
var inst_44551 = (state_44562[(2)]);
var state_44562__$1 = state_44562;
var statearr_44592_47188 = state_44562__$1;
(statearr_44592_47188[(2)] = inst_44551);

(statearr_44592_47188[(1)] = (3));


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
});})(__47176,c__44082__auto___47180,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async))
;
return ((function (__47176,switch__43748__auto__,c__44082__auto___47180,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0 = (function (){
var statearr_44593 = [null,null,null,null,null,null,null];
(statearr_44593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__);

(statearr_44593[(1)] = (1));

return statearr_44593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1 = (function (state_44562){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_44562);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e44599){var ex__43752__auto__ = e44599;
var statearr_44601_47190 = state_44562;
(statearr_44601_47190[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_44562[(4)]))){
var statearr_44602_47193 = state_44562;
(statearr_44602_47193[(1)] = cljs.core.first((state_44562[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47194 = state_44562;
state_44562 = G__47194;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__ = function(state_44562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1.call(this,state_44562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__;
})()
;})(__47176,switch__43748__auto__,c__44082__auto___47180,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async))
})();
var state__44084__auto__ = (function (){var statearr_44603 = f__44083__auto__();
(statearr_44603[(6)] = c__44082__auto___47180);

return statearr_44603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
});})(__47176,c__44082__auto___47180,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async))
);


break;
case "async":
var c__44082__auto___47195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47176,c__44082__auto___47195,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async){
return (function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = ((function (__47176,c__44082__auto___47195,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async){
return (function (state_44622){
var state_val_44623 = (state_44622[(1)]);
if((state_val_44623 === (1))){
var state_44622__$1 = state_44622;
var statearr_44628_47205 = state_44622__$1;
(statearr_44628_47205[(2)] = null);

(statearr_44628_47205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44623 === (2))){
var state_44622__$1 = state_44622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44622__$1,(4),jobs);
} else {
if((state_val_44623 === (3))){
var inst_44620 = (state_44622[(2)]);
var state_44622__$1 = state_44622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44622__$1,inst_44620);
} else {
if((state_val_44623 === (4))){
var inst_44608 = (state_44622[(2)]);
var inst_44613 = async(inst_44608);
var state_44622__$1 = state_44622;
if(cljs.core.truth_(inst_44613)){
var statearr_44629_47208 = state_44622__$1;
(statearr_44629_47208[(1)] = (5));

} else {
var statearr_44630_47211 = state_44622__$1;
(statearr_44630_47211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44623 === (5))){
var state_44622__$1 = state_44622;
var statearr_44631_47212 = state_44622__$1;
(statearr_44631_47212[(2)] = null);

(statearr_44631_47212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44623 === (6))){
var state_44622__$1 = state_44622;
var statearr_44634_47214 = state_44622__$1;
(statearr_44634_47214[(2)] = null);

(statearr_44634_47214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44623 === (7))){
var inst_44618 = (state_44622[(2)]);
var state_44622__$1 = state_44622;
var statearr_44640_47215 = state_44622__$1;
(statearr_44640_47215[(2)] = inst_44618);

(statearr_44640_47215[(1)] = (3));


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
});})(__47176,c__44082__auto___47195,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async))
;
return ((function (__47176,switch__43748__auto__,c__44082__auto___47195,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0 = (function (){
var statearr_44641 = [null,null,null,null,null,null,null];
(statearr_44641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__);

(statearr_44641[(1)] = (1));

return statearr_44641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1 = (function (state_44622){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_44622);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e44642){var ex__43752__auto__ = e44642;
var statearr_44643_47216 = state_44622;
(statearr_44643_47216[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_44622[(4)]))){
var statearr_44644_47226 = state_44622;
(statearr_44644_47226[(1)] = cljs.core.first((state_44622[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47227 = state_44622;
state_44622 = G__47227;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__ = function(state_44622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1.call(this,state_44622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__;
})()
;})(__47176,switch__43748__auto__,c__44082__auto___47195,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async))
})();
var state__44084__auto__ = (function (){var statearr_44648 = f__44083__auto__();
(statearr_44648[(6)] = c__44082__auto___47195);

return statearr_44648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
});})(__47176,c__44082__auto___47195,G__44536_47177,G__44536_47178__$1,n__5636__auto___47175,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44536_47178__$1)].join('')));

}

var G__47229 = (__47176 + (1));
__47176 = G__47229;
continue;
} else {
}
break;
}

var c__44082__auto___47230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_44686){
var state_val_44688 = (state_44686[(1)]);
if((state_val_44688 === (7))){
var inst_44680 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
var statearr_44707_47232 = state_44686__$1;
(statearr_44707_47232[(2)] = inst_44680);

(statearr_44707_47232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (1))){
var state_44686__$1 = state_44686;
var statearr_44716_47233 = state_44686__$1;
(statearr_44716_47233[(2)] = null);

(statearr_44716_47233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (4))){
var inst_44657 = (state_44686[(7)]);
var inst_44657__$1 = (state_44686[(2)]);
var inst_44658 = (inst_44657__$1 == null);
var state_44686__$1 = (function (){var statearr_44718 = state_44686;
(statearr_44718[(7)] = inst_44657__$1);

return statearr_44718;
})();
if(cljs.core.truth_(inst_44658)){
var statearr_44719_47234 = state_44686__$1;
(statearr_44719_47234[(1)] = (5));

} else {
var statearr_44723_47235 = state_44686__$1;
(statearr_44723_47235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (6))){
var inst_44657 = (state_44686[(7)]);
var inst_44666 = (state_44686[(8)]);
var inst_44666__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44672 = [inst_44657,inst_44666__$1];
var inst_44673 = (new cljs.core.PersistentVector(null,2,(5),inst_44671,inst_44672,null));
var state_44686__$1 = (function (){var statearr_44728 = state_44686;
(statearr_44728[(8)] = inst_44666__$1);

return statearr_44728;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44686__$1,(8),jobs,inst_44673);
} else {
if((state_val_44688 === (3))){
var inst_44683 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44686__$1,inst_44683);
} else {
if((state_val_44688 === (2))){
var state_44686__$1 = state_44686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44686__$1,(4),from);
} else {
if((state_val_44688 === (9))){
var inst_44677 = (state_44686[(2)]);
var state_44686__$1 = (function (){var statearr_44731 = state_44686;
(statearr_44731[(9)] = inst_44677);

return statearr_44731;
})();
var statearr_44732_47242 = state_44686__$1;
(statearr_44732_47242[(2)] = null);

(statearr_44732_47242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (5))){
var inst_44661 = cljs.core.async.close_BANG_(jobs);
var state_44686__$1 = state_44686;
var statearr_44733_47243 = state_44686__$1;
(statearr_44733_47243[(2)] = inst_44661);

(statearr_44733_47243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44688 === (8))){
var inst_44666 = (state_44686[(8)]);
var inst_44675 = (state_44686[(2)]);
var state_44686__$1 = (function (){var statearr_44739 = state_44686;
(statearr_44739[(10)] = inst_44675);

return statearr_44739;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44686__$1,(9),results,inst_44666);
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
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0 = (function (){
var statearr_44750 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44750[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__);

(statearr_44750[(1)] = (1));

return statearr_44750;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1 = (function (state_44686){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_44686);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e44755){var ex__43752__auto__ = e44755;
var statearr_44760_47248 = state_44686;
(statearr_44760_47248[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_44686[(4)]))){
var statearr_44765_47251 = state_44686;
(statearr_44765_47251[(1)] = cljs.core.first((state_44686[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47255 = state_44686;
state_44686 = G__47255;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__ = function(state_44686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1.call(this,state_44686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_44769 = f__44083__auto__();
(statearr_44769[(6)] = c__44082__auto___47230);

return statearr_44769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));


var c__44082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_44835){
var state_val_44836 = (state_44835[(1)]);
if((state_val_44836 === (7))){
var inst_44826 = (state_44835[(2)]);
var state_44835__$1 = state_44835;
var statearr_44852_47258 = state_44835__$1;
(statearr_44852_47258[(2)] = inst_44826);

(statearr_44852_47258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (20))){
var state_44835__$1 = state_44835;
var statearr_44859_47259 = state_44835__$1;
(statearr_44859_47259[(2)] = null);

(statearr_44859_47259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (1))){
var state_44835__$1 = state_44835;
var statearr_44860_47262 = state_44835__$1;
(statearr_44860_47262[(2)] = null);

(statearr_44860_47262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (4))){
var inst_44781 = (state_44835[(7)]);
var inst_44781__$1 = (state_44835[(2)]);
var inst_44786 = (inst_44781__$1 == null);
var state_44835__$1 = (function (){var statearr_44862 = state_44835;
(statearr_44862[(7)] = inst_44781__$1);

return statearr_44862;
})();
if(cljs.core.truth_(inst_44786)){
var statearr_44863_47265 = state_44835__$1;
(statearr_44863_47265[(1)] = (5));

} else {
var statearr_44864_47266 = state_44835__$1;
(statearr_44864_47266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (15))){
var inst_44798 = (state_44835[(8)]);
var state_44835__$1 = state_44835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44835__$1,(18),to,inst_44798);
} else {
if((state_val_44836 === (21))){
var inst_44821 = (state_44835[(2)]);
var state_44835__$1 = state_44835;
var statearr_44868_47269 = state_44835__$1;
(statearr_44868_47269[(2)] = inst_44821);

(statearr_44868_47269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (13))){
var inst_44823 = (state_44835[(2)]);
var state_44835__$1 = (function (){var statearr_44873 = state_44835;
(statearr_44873[(9)] = inst_44823);

return statearr_44873;
})();
var statearr_44878_47275 = state_44835__$1;
(statearr_44878_47275[(2)] = null);

(statearr_44878_47275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (6))){
var inst_44781 = (state_44835[(7)]);
var state_44835__$1 = state_44835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44835__$1,(11),inst_44781);
} else {
if((state_val_44836 === (17))){
var inst_44811 = (state_44835[(2)]);
var state_44835__$1 = state_44835;
if(cljs.core.truth_(inst_44811)){
var statearr_44895_47278 = state_44835__$1;
(statearr_44895_47278[(1)] = (19));

} else {
var statearr_44901_47279 = state_44835__$1;
(statearr_44901_47279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (3))){
var inst_44828 = (state_44835[(2)]);
var state_44835__$1 = state_44835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44835__$1,inst_44828);
} else {
if((state_val_44836 === (12))){
var inst_44795 = (state_44835[(10)]);
var state_44835__$1 = state_44835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44835__$1,(14),inst_44795);
} else {
if((state_val_44836 === (2))){
var state_44835__$1 = state_44835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44835__$1,(4),results);
} else {
if((state_val_44836 === (19))){
var state_44835__$1 = state_44835;
var statearr_44915_47286 = state_44835__$1;
(statearr_44915_47286[(2)] = null);

(statearr_44915_47286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (11))){
var inst_44795 = (state_44835[(2)]);
var state_44835__$1 = (function (){var statearr_44920 = state_44835;
(statearr_44920[(10)] = inst_44795);

return statearr_44920;
})();
var statearr_44924_47289 = state_44835__$1;
(statearr_44924_47289[(2)] = null);

(statearr_44924_47289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (9))){
var state_44835__$1 = state_44835;
var statearr_44932_47290 = state_44835__$1;
(statearr_44932_47290[(2)] = null);

(statearr_44932_47290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (5))){
var state_44835__$1 = state_44835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44941_47291 = state_44835__$1;
(statearr_44941_47291[(1)] = (8));

} else {
var statearr_44943_47292 = state_44835__$1;
(statearr_44943_47292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (14))){
var inst_44800 = (state_44835[(11)]);
var inst_44798 = (state_44835[(8)]);
var inst_44798__$1 = (state_44835[(2)]);
var inst_44799 = (inst_44798__$1 == null);
var inst_44800__$1 = cljs.core.not(inst_44799);
var state_44835__$1 = (function (){var statearr_44956 = state_44835;
(statearr_44956[(11)] = inst_44800__$1);

(statearr_44956[(8)] = inst_44798__$1);

return statearr_44956;
})();
if(inst_44800__$1){
var statearr_44961_47297 = state_44835__$1;
(statearr_44961_47297[(1)] = (15));

} else {
var statearr_44962_47298 = state_44835__$1;
(statearr_44962_47298[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (16))){
var inst_44800 = (state_44835[(11)]);
var state_44835__$1 = state_44835;
var statearr_44964_47299 = state_44835__$1;
(statearr_44964_47299[(2)] = inst_44800);

(statearr_44964_47299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (10))){
var inst_44792 = (state_44835[(2)]);
var state_44835__$1 = state_44835;
var statearr_44973_47301 = state_44835__$1;
(statearr_44973_47301[(2)] = inst_44792);

(statearr_44973_47301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (18))){
var inst_44808 = (state_44835[(2)]);
var state_44835__$1 = state_44835;
var statearr_44981_47303 = state_44835__$1;
(statearr_44981_47303[(2)] = inst_44808);

(statearr_44981_47303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44836 === (8))){
var inst_44789 = cljs.core.async.close_BANG_(to);
var state_44835__$1 = state_44835;
var statearr_44986_47308 = state_44835__$1;
(statearr_44986_47308[(2)] = inst_44789);

(statearr_44986_47308[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0 = (function (){
var statearr_44989 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44989[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__);

(statearr_44989[(1)] = (1));

return statearr_44989;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1 = (function (state_44835){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_44835);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e44994){var ex__43752__auto__ = e44994;
var statearr_44995_47309 = state_44835;
(statearr_44995_47309[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_44835[(4)]))){
var statearr_44996_47311 = state_44835;
(statearr_44996_47311[(1)] = cljs.core.first((state_44835[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47314 = state_44835;
state_44835 = G__47314;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__ = function(state_44835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1.call(this,state_44835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43749__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_44997 = f__44083__auto__();
(statearr_44997[(6)] = c__44082__auto__);

return statearr_44997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));

return c__44082__auto__;
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
var G__45000 = arguments.length;
switch (G__45000) {
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
var G__45018 = arguments.length;
switch (G__45018) {
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
var G__45027 = arguments.length;
switch (G__45027) {
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
var c__44082__auto___47333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_45065){
var state_val_45066 = (state_45065[(1)]);
if((state_val_45066 === (7))){
var inst_45058 = (state_45065[(2)]);
var state_45065__$1 = state_45065;
var statearr_45067_47337 = state_45065__$1;
(statearr_45067_47337[(2)] = inst_45058);

(statearr_45067_47337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (1))){
var state_45065__$1 = state_45065;
var statearr_45068_47338 = state_45065__$1;
(statearr_45068_47338[(2)] = null);

(statearr_45068_47338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (4))){
var inst_45035 = (state_45065[(7)]);
var inst_45035__$1 = (state_45065[(2)]);
var inst_45036 = (inst_45035__$1 == null);
var state_45065__$1 = (function (){var statearr_45069 = state_45065;
(statearr_45069[(7)] = inst_45035__$1);

return statearr_45069;
})();
if(cljs.core.truth_(inst_45036)){
var statearr_45071_47339 = state_45065__$1;
(statearr_45071_47339[(1)] = (5));

} else {
var statearr_45072_47340 = state_45065__$1;
(statearr_45072_47340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (13))){
var state_45065__$1 = state_45065;
var statearr_45075_47341 = state_45065__$1;
(statearr_45075_47341[(2)] = null);

(statearr_45075_47341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (6))){
var inst_45035 = (state_45065[(7)]);
var inst_45045 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45035) : p.call(null,inst_45035));
var state_45065__$1 = state_45065;
if(cljs.core.truth_(inst_45045)){
var statearr_45076_47342 = state_45065__$1;
(statearr_45076_47342[(1)] = (9));

} else {
var statearr_45078_47343 = state_45065__$1;
(statearr_45078_47343[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (3))){
var inst_45061 = (state_45065[(2)]);
var state_45065__$1 = state_45065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45065__$1,inst_45061);
} else {
if((state_val_45066 === (12))){
var state_45065__$1 = state_45065;
var statearr_45080_47344 = state_45065__$1;
(statearr_45080_47344[(2)] = null);

(statearr_45080_47344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (2))){
var state_45065__$1 = state_45065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45065__$1,(4),ch);
} else {
if((state_val_45066 === (11))){
var inst_45035 = (state_45065[(7)]);
var inst_45049 = (state_45065[(2)]);
var state_45065__$1 = state_45065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45065__$1,(8),inst_45049,inst_45035);
} else {
if((state_val_45066 === (9))){
var state_45065__$1 = state_45065;
var statearr_45083_47345 = state_45065__$1;
(statearr_45083_47345[(2)] = tc);

(statearr_45083_47345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (5))){
var inst_45038 = cljs.core.async.close_BANG_(tc);
var inst_45043 = cljs.core.async.close_BANG_(fc);
var state_45065__$1 = (function (){var statearr_45086 = state_45065;
(statearr_45086[(8)] = inst_45038);

return statearr_45086;
})();
var statearr_45087_47346 = state_45065__$1;
(statearr_45087_47346[(2)] = inst_45043);

(statearr_45087_47346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (14))){
var inst_45056 = (state_45065[(2)]);
var state_45065__$1 = state_45065;
var statearr_45088_47348 = state_45065__$1;
(statearr_45088_47348[(2)] = inst_45056);

(statearr_45088_47348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (10))){
var state_45065__$1 = state_45065;
var statearr_45089_47350 = state_45065__$1;
(statearr_45089_47350[(2)] = fc);

(statearr_45089_47350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (8))){
var inst_45051 = (state_45065[(2)]);
var state_45065__$1 = state_45065;
if(cljs.core.truth_(inst_45051)){
var statearr_45090_47351 = state_45065__$1;
(statearr_45090_47351[(1)] = (12));

} else {
var statearr_45091_47352 = state_45065__$1;
(statearr_45091_47352[(1)] = (13));

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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_45092 = [null,null,null,null,null,null,null,null,null];
(statearr_45092[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_45092[(1)] = (1));

return statearr_45092;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_45065){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_45065);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e45094){var ex__43752__auto__ = e45094;
var statearr_45095_47353 = state_45065;
(statearr_45095_47353[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_45065[(4)]))){
var statearr_45096_47354 = state_45065;
(statearr_45096_47354[(1)] = cljs.core.first((state_45065[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47355 = state_45065;
state_45065 = G__47355;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_45065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_45065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_45098 = f__44083__auto__();
(statearr_45098[(6)] = c__44082__auto___47333);

return statearr_45098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
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
var c__44082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_45131){
var state_val_45133 = (state_45131[(1)]);
if((state_val_45133 === (7))){
var inst_45127 = (state_45131[(2)]);
var state_45131__$1 = state_45131;
var statearr_45139_47357 = state_45131__$1;
(statearr_45139_47357[(2)] = inst_45127);

(statearr_45139_47357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45133 === (1))){
var inst_45105 = init;
var inst_45107 = inst_45105;
var state_45131__$1 = (function (){var statearr_45142 = state_45131;
(statearr_45142[(7)] = inst_45107);

return statearr_45142;
})();
var statearr_45145_47359 = state_45131__$1;
(statearr_45145_47359[(2)] = null);

(statearr_45145_47359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45133 === (4))){
var inst_45112 = (state_45131[(8)]);
var inst_45112__$1 = (state_45131[(2)]);
var inst_45115 = (inst_45112__$1 == null);
var state_45131__$1 = (function (){var statearr_45148 = state_45131;
(statearr_45148[(8)] = inst_45112__$1);

return statearr_45148;
})();
if(cljs.core.truth_(inst_45115)){
var statearr_45149_47362 = state_45131__$1;
(statearr_45149_47362[(1)] = (5));

} else {
var statearr_45150_47363 = state_45131__$1;
(statearr_45150_47363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45133 === (6))){
var inst_45107 = (state_45131[(7)]);
var inst_45112 = (state_45131[(8)]);
var inst_45118 = (state_45131[(9)]);
var inst_45118__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45107,inst_45112) : f.call(null,inst_45107,inst_45112));
var inst_45119 = cljs.core.reduced_QMARK_(inst_45118__$1);
var state_45131__$1 = (function (){var statearr_45153 = state_45131;
(statearr_45153[(9)] = inst_45118__$1);

return statearr_45153;
})();
if(inst_45119){
var statearr_45155_47364 = state_45131__$1;
(statearr_45155_47364[(1)] = (8));

} else {
var statearr_45157_47365 = state_45131__$1;
(statearr_45157_47365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45133 === (3))){
var inst_45129 = (state_45131[(2)]);
var state_45131__$1 = state_45131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45131__$1,inst_45129);
} else {
if((state_val_45133 === (2))){
var state_45131__$1 = state_45131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45131__$1,(4),ch);
} else {
if((state_val_45133 === (9))){
var inst_45118 = (state_45131[(9)]);
var inst_45107 = inst_45118;
var state_45131__$1 = (function (){var statearr_45160 = state_45131;
(statearr_45160[(7)] = inst_45107);

return statearr_45160;
})();
var statearr_45163_47368 = state_45131__$1;
(statearr_45163_47368[(2)] = null);

(statearr_45163_47368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45133 === (5))){
var inst_45107 = (state_45131[(7)]);
var state_45131__$1 = state_45131;
var statearr_45164_47373 = state_45131__$1;
(statearr_45164_47373[(2)] = inst_45107);

(statearr_45164_47373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45133 === (10))){
var inst_45125 = (state_45131[(2)]);
var state_45131__$1 = state_45131;
var statearr_45165_47374 = state_45131__$1;
(statearr_45165_47374[(2)] = inst_45125);

(statearr_45165_47374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45133 === (8))){
var inst_45118 = (state_45131[(9)]);
var inst_45121 = cljs.core.deref(inst_45118);
var state_45131__$1 = state_45131;
var statearr_45167_47379 = state_45131__$1;
(statearr_45167_47379[(2)] = inst_45121);

(statearr_45167_47379[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__43749__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43749__auto____0 = (function (){
var statearr_45170 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45170[(0)] = cljs$core$async$reduce_$_state_machine__43749__auto__);

(statearr_45170[(1)] = (1));

return statearr_45170;
});
var cljs$core$async$reduce_$_state_machine__43749__auto____1 = (function (state_45131){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_45131);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e45173){var ex__43752__auto__ = e45173;
var statearr_45175_47385 = state_45131;
(statearr_45175_47385[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_45131[(4)]))){
var statearr_45176_47386 = state_45131;
(statearr_45176_47386[(1)] = cljs.core.first((state_45131[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47387 = state_45131;
state_45131 = G__47387;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43749__auto__ = function(state_45131){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43749__auto____1.call(this,state_45131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43749__auto____0;
cljs$core$async$reduce_$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43749__auto____1;
return cljs$core$async$reduce_$_state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_45179 = f__44083__auto__();
(statearr_45179[(6)] = c__44082__auto__);

return statearr_45179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));

return c__44082__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_45199){
var state_val_45200 = (state_45199[(1)]);
if((state_val_45200 === (1))){
var inst_45194 = cljs.core.async.reduce(f__$1,init,ch);
var state_45199__$1 = state_45199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45199__$1,(2),inst_45194);
} else {
if((state_val_45200 === (2))){
var inst_45196 = (state_45199[(2)]);
var inst_45197 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45196) : f__$1.call(null,inst_45196));
var state_45199__$1 = state_45199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45199__$1,inst_45197);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43749__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43749__auto____0 = (function (){
var statearr_45204 = [null,null,null,null,null,null,null];
(statearr_45204[(0)] = cljs$core$async$transduce_$_state_machine__43749__auto__);

(statearr_45204[(1)] = (1));

return statearr_45204;
});
var cljs$core$async$transduce_$_state_machine__43749__auto____1 = (function (state_45199){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_45199);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e45207){var ex__43752__auto__ = e45207;
var statearr_45208_47398 = state_45199;
(statearr_45208_47398[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_45199[(4)]))){
var statearr_45212_47399 = state_45199;
(statearr_45212_47399[(1)] = cljs.core.first((state_45199[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47403 = state_45199;
state_45199 = G__47403;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43749__auto__ = function(state_45199){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43749__auto____1.call(this,state_45199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43749__auto____0;
cljs$core$async$transduce_$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43749__auto____1;
return cljs$core$async$transduce_$_state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_45216 = f__44083__auto__();
(statearr_45216[(6)] = c__44082__auto__);

return statearr_45216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));

return c__44082__auto__;
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
var G__45224 = arguments.length;
switch (G__45224) {
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
var c__44082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_45255){
var state_val_45256 = (state_45255[(1)]);
if((state_val_45256 === (7))){
var inst_45237 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45258_47412 = state_45255__$1;
(statearr_45258_47412[(2)] = inst_45237);

(statearr_45258_47412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (1))){
var inst_45227 = cljs.core.seq(coll);
var inst_45228 = inst_45227;
var state_45255__$1 = (function (){var statearr_45259 = state_45255;
(statearr_45259[(7)] = inst_45228);

return statearr_45259;
})();
var statearr_45260_47413 = state_45255__$1;
(statearr_45260_47413[(2)] = null);

(statearr_45260_47413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (4))){
var inst_45228 = (state_45255[(7)]);
var inst_45235 = cljs.core.first(inst_45228);
var state_45255__$1 = state_45255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45255__$1,(7),ch,inst_45235);
} else {
if((state_val_45256 === (13))){
var inst_45249 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45264_47418 = state_45255__$1;
(statearr_45264_47418[(2)] = inst_45249);

(statearr_45264_47418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (6))){
var inst_45240 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
if(cljs.core.truth_(inst_45240)){
var statearr_45267_47419 = state_45255__$1;
(statearr_45267_47419[(1)] = (8));

} else {
var statearr_45269_47420 = state_45255__$1;
(statearr_45269_47420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (3))){
var inst_45253 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45255__$1,inst_45253);
} else {
if((state_val_45256 === (12))){
var state_45255__$1 = state_45255;
var statearr_45273_47421 = state_45255__$1;
(statearr_45273_47421[(2)] = null);

(statearr_45273_47421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (2))){
var inst_45228 = (state_45255[(7)]);
var state_45255__$1 = state_45255;
if(cljs.core.truth_(inst_45228)){
var statearr_45279_47422 = state_45255__$1;
(statearr_45279_47422[(1)] = (4));

} else {
var statearr_45282_47423 = state_45255__$1;
(statearr_45282_47423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (11))){
var inst_45246 = cljs.core.async.close_BANG_(ch);
var state_45255__$1 = state_45255;
var statearr_45285_47427 = state_45255__$1;
(statearr_45285_47427[(2)] = inst_45246);

(statearr_45285_47427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (9))){
var state_45255__$1 = state_45255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45286_47432 = state_45255__$1;
(statearr_45286_47432[(1)] = (11));

} else {
var statearr_45287_47433 = state_45255__$1;
(statearr_45287_47433[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (5))){
var inst_45228 = (state_45255[(7)]);
var state_45255__$1 = state_45255;
var statearr_45289_47434 = state_45255__$1;
(statearr_45289_47434[(2)] = inst_45228);

(statearr_45289_47434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (10))){
var inst_45251 = (state_45255[(2)]);
var state_45255__$1 = state_45255;
var statearr_45290_47436 = state_45255__$1;
(statearr_45290_47436[(2)] = inst_45251);

(statearr_45290_47436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45256 === (8))){
var inst_45228 = (state_45255[(7)]);
var inst_45242 = cljs.core.next(inst_45228);
var inst_45228__$1 = inst_45242;
var state_45255__$1 = (function (){var statearr_45294 = state_45255;
(statearr_45294[(7)] = inst_45228__$1);

return statearr_45294;
})();
var statearr_45296_47441 = state_45255__$1;
(statearr_45296_47441[(2)] = null);

(statearr_45296_47441[(1)] = (2));


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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_45299 = [null,null,null,null,null,null,null,null];
(statearr_45299[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_45299[(1)] = (1));

return statearr_45299;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_45255){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_45255);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e45302){var ex__43752__auto__ = e45302;
var statearr_45303_47448 = state_45255;
(statearr_45303_47448[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_45255[(4)]))){
var statearr_45305_47449 = state_45255;
(statearr_45305_47449[(1)] = cljs.core.first((state_45255[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47450 = state_45255;
state_45255 = G__47450;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_45255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_45255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_45310 = f__44083__auto__();
(statearr_45310[(6)] = c__44082__auto__);

return statearr_45310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));

return c__44082__auto__;
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
var G__45318 = arguments.length;
switch (G__45318) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_47456 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_47456(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47463 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_47463(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47467 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_47467(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47468 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_47468(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45374 = (function (ch,cs,meta45375){
this.ch = ch;
this.cs = cs;
this.meta45375 = meta45375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45376,meta45375__$1){
var self__ = this;
var _45376__$1 = this;
return (new cljs.core.async.t_cljs$core$async45374(self__.ch,self__.cs,meta45375__$1));
}));

(cljs.core.async.t_cljs$core$async45374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45376){
var self__ = this;
var _45376__$1 = this;
return self__.meta45375;
}));

(cljs.core.async.t_cljs$core$async45374.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45374.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45374.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45374.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45374.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45374.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45375","meta45375",-1743323129,null)], null);
}));

(cljs.core.async.t_cljs$core$async45374.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45374");

(cljs.core.async.t_cljs$core$async45374.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45374");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45374.
 */
cljs.core.async.__GT_t_cljs$core$async45374 = (function cljs$core$async$__GT_t_cljs$core$async45374(ch,cs,meta45375){
return (new cljs.core.async.t_cljs$core$async45374(ch,cs,meta45375));
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
var m = (new cljs.core.async.t_cljs$core$async45374(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44082__auto___47473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_45542){
var state_val_45543 = (state_45542[(1)]);
if((state_val_45543 === (7))){
var inst_45531 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45552_47474 = state_45542__$1;
(statearr_45552_47474[(2)] = inst_45531);

(statearr_45552_47474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (20))){
var inst_45424 = (state_45542[(7)]);
var inst_45438 = cljs.core.first(inst_45424);
var inst_45439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45438,(0),null);
var inst_45440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45438,(1),null);
var state_45542__$1 = (function (){var statearr_45555 = state_45542;
(statearr_45555[(8)] = inst_45439);

return statearr_45555;
})();
if(cljs.core.truth_(inst_45440)){
var statearr_45557_47475 = state_45542__$1;
(statearr_45557_47475[(1)] = (22));

} else {
var statearr_45558_47476 = state_45542__$1;
(statearr_45558_47476[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (27))){
var inst_45478 = (state_45542[(9)]);
var inst_45387 = (state_45542[(10)]);
var inst_45476 = (state_45542[(11)]);
var inst_45483 = (state_45542[(12)]);
var inst_45483__$1 = cljs.core._nth(inst_45476,inst_45478);
var inst_45484 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45483__$1,inst_45387,done);
var state_45542__$1 = (function (){var statearr_45562 = state_45542;
(statearr_45562[(12)] = inst_45483__$1);

return statearr_45562;
})();
if(cljs.core.truth_(inst_45484)){
var statearr_45563_47477 = state_45542__$1;
(statearr_45563_47477[(1)] = (30));

} else {
var statearr_45565_47478 = state_45542__$1;
(statearr_45565_47478[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (1))){
var state_45542__$1 = state_45542;
var statearr_45566_47479 = state_45542__$1;
(statearr_45566_47479[(2)] = null);

(statearr_45566_47479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (24))){
var inst_45424 = (state_45542[(7)]);
var inst_45446 = (state_45542[(2)]);
var inst_45454 = cljs.core.next(inst_45424);
var inst_45402 = inst_45454;
var inst_45403 = null;
var inst_45404 = (0);
var inst_45405 = (0);
var state_45542__$1 = (function (){var statearr_45570 = state_45542;
(statearr_45570[(13)] = inst_45403);

(statearr_45570[(14)] = inst_45405);

(statearr_45570[(15)] = inst_45404);

(statearr_45570[(16)] = inst_45402);

(statearr_45570[(17)] = inst_45446);

return statearr_45570;
})();
var statearr_45577_47482 = state_45542__$1;
(statearr_45577_47482[(2)] = null);

(statearr_45577_47482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (39))){
var state_45542__$1 = state_45542;
var statearr_45583_47483 = state_45542__$1;
(statearr_45583_47483[(2)] = null);

(statearr_45583_47483[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (4))){
var inst_45387 = (state_45542[(10)]);
var inst_45387__$1 = (state_45542[(2)]);
var inst_45388 = (inst_45387__$1 == null);
var state_45542__$1 = (function (){var statearr_45584 = state_45542;
(statearr_45584[(10)] = inst_45387__$1);

return statearr_45584;
})();
if(cljs.core.truth_(inst_45388)){
var statearr_45587_47484 = state_45542__$1;
(statearr_45587_47484[(1)] = (5));

} else {
var statearr_45589_47485 = state_45542__$1;
(statearr_45589_47485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (15))){
var inst_45403 = (state_45542[(13)]);
var inst_45405 = (state_45542[(14)]);
var inst_45404 = (state_45542[(15)]);
var inst_45402 = (state_45542[(16)]);
var inst_45420 = (state_45542[(2)]);
var inst_45421 = (inst_45405 + (1));
var tmp45579 = inst_45403;
var tmp45580 = inst_45404;
var tmp45581 = inst_45402;
var inst_45402__$1 = tmp45581;
var inst_45403__$1 = tmp45579;
var inst_45404__$1 = tmp45580;
var inst_45405__$1 = inst_45421;
var state_45542__$1 = (function (){var statearr_45592 = state_45542;
(statearr_45592[(13)] = inst_45403__$1);

(statearr_45592[(18)] = inst_45420);

(statearr_45592[(14)] = inst_45405__$1);

(statearr_45592[(15)] = inst_45404__$1);

(statearr_45592[(16)] = inst_45402__$1);

return statearr_45592;
})();
var statearr_45595_47486 = state_45542__$1;
(statearr_45595_47486[(2)] = null);

(statearr_45595_47486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (21))){
var inst_45457 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45599_47487 = state_45542__$1;
(statearr_45599_47487[(2)] = inst_45457);

(statearr_45599_47487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (31))){
var inst_45483 = (state_45542[(12)]);
var inst_45487 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45483);
var state_45542__$1 = state_45542;
var statearr_45607_47489 = state_45542__$1;
(statearr_45607_47489[(2)] = inst_45487);

(statearr_45607_47489[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (32))){
var inst_45475 = (state_45542[(19)]);
var inst_45478 = (state_45542[(9)]);
var inst_45477 = (state_45542[(20)]);
var inst_45476 = (state_45542[(11)]);
var inst_45489 = (state_45542[(2)]);
var inst_45490 = (inst_45478 + (1));
var tmp45596 = inst_45475;
var tmp45597 = inst_45477;
var tmp45598 = inst_45476;
var inst_45475__$1 = tmp45596;
var inst_45476__$1 = tmp45598;
var inst_45477__$1 = tmp45597;
var inst_45478__$1 = inst_45490;
var state_45542__$1 = (function (){var statearr_45613 = state_45542;
(statearr_45613[(19)] = inst_45475__$1);

(statearr_45613[(9)] = inst_45478__$1);

(statearr_45613[(20)] = inst_45477__$1);

(statearr_45613[(11)] = inst_45476__$1);

(statearr_45613[(21)] = inst_45489);

return statearr_45613;
})();
var statearr_45614_47495 = state_45542__$1;
(statearr_45614_47495[(2)] = null);

(statearr_45614_47495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (40))){
var inst_45504 = (state_45542[(22)]);
var inst_45508 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45504);
var state_45542__$1 = state_45542;
var statearr_45620_47496 = state_45542__$1;
(statearr_45620_47496[(2)] = inst_45508);

(statearr_45620_47496[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (33))){
var inst_45495 = (state_45542[(23)]);
var inst_45497 = cljs.core.chunked_seq_QMARK_(inst_45495);
var state_45542__$1 = state_45542;
if(inst_45497){
var statearr_45625_47497 = state_45542__$1;
(statearr_45625_47497[(1)] = (36));

} else {
var statearr_45626_47498 = state_45542__$1;
(statearr_45626_47498[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (13))){
var inst_45414 = (state_45542[(24)]);
var inst_45417 = cljs.core.async.close_BANG_(inst_45414);
var state_45542__$1 = state_45542;
var statearr_45631_47499 = state_45542__$1;
(statearr_45631_47499[(2)] = inst_45417);

(statearr_45631_47499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (22))){
var inst_45439 = (state_45542[(8)]);
var inst_45442 = cljs.core.async.close_BANG_(inst_45439);
var state_45542__$1 = state_45542;
var statearr_45633_47500 = state_45542__$1;
(statearr_45633_47500[(2)] = inst_45442);

(statearr_45633_47500[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (36))){
var inst_45495 = (state_45542[(23)]);
var inst_45499 = cljs.core.chunk_first(inst_45495);
var inst_45500 = cljs.core.chunk_rest(inst_45495);
var inst_45501 = cljs.core.count(inst_45499);
var inst_45475 = inst_45500;
var inst_45476 = inst_45499;
var inst_45477 = inst_45501;
var inst_45478 = (0);
var state_45542__$1 = (function (){var statearr_45637 = state_45542;
(statearr_45637[(19)] = inst_45475);

(statearr_45637[(9)] = inst_45478);

(statearr_45637[(20)] = inst_45477);

(statearr_45637[(11)] = inst_45476);

return statearr_45637;
})();
var statearr_45638_47503 = state_45542__$1;
(statearr_45638_47503[(2)] = null);

(statearr_45638_47503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (41))){
var inst_45495 = (state_45542[(23)]);
var inst_45510 = (state_45542[(2)]);
var inst_45511 = cljs.core.next(inst_45495);
var inst_45475 = inst_45511;
var inst_45476 = null;
var inst_45477 = (0);
var inst_45478 = (0);
var state_45542__$1 = (function (){var statearr_45642 = state_45542;
(statearr_45642[(19)] = inst_45475);

(statearr_45642[(9)] = inst_45478);

(statearr_45642[(25)] = inst_45510);

(statearr_45642[(20)] = inst_45477);

(statearr_45642[(11)] = inst_45476);

return statearr_45642;
})();
var statearr_45643_47508 = state_45542__$1;
(statearr_45643_47508[(2)] = null);

(statearr_45643_47508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (43))){
var state_45542__$1 = state_45542;
var statearr_45645_47509 = state_45542__$1;
(statearr_45645_47509[(2)] = null);

(statearr_45645_47509[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (29))){
var inst_45519 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45646_47511 = state_45542__$1;
(statearr_45646_47511[(2)] = inst_45519);

(statearr_45646_47511[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (44))){
var inst_45528 = (state_45542[(2)]);
var state_45542__$1 = (function (){var statearr_45650 = state_45542;
(statearr_45650[(26)] = inst_45528);

return statearr_45650;
})();
var statearr_45651_47518 = state_45542__$1;
(statearr_45651_47518[(2)] = null);

(statearr_45651_47518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (6))){
var inst_45467 = (state_45542[(27)]);
var inst_45466 = cljs.core.deref(cs);
var inst_45467__$1 = cljs.core.keys(inst_45466);
var inst_45468 = cljs.core.count(inst_45467__$1);
var inst_45469 = cljs.core.reset_BANG_(dctr,inst_45468);
var inst_45474 = cljs.core.seq(inst_45467__$1);
var inst_45475 = inst_45474;
var inst_45476 = null;
var inst_45477 = (0);
var inst_45478 = (0);
var state_45542__$1 = (function (){var statearr_45655 = state_45542;
(statearr_45655[(28)] = inst_45469);

(statearr_45655[(27)] = inst_45467__$1);

(statearr_45655[(19)] = inst_45475);

(statearr_45655[(9)] = inst_45478);

(statearr_45655[(20)] = inst_45477);

(statearr_45655[(11)] = inst_45476);

return statearr_45655;
})();
var statearr_45656_47525 = state_45542__$1;
(statearr_45656_47525[(2)] = null);

(statearr_45656_47525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (28))){
var inst_45495 = (state_45542[(23)]);
var inst_45475 = (state_45542[(19)]);
var inst_45495__$1 = cljs.core.seq(inst_45475);
var state_45542__$1 = (function (){var statearr_45657 = state_45542;
(statearr_45657[(23)] = inst_45495__$1);

return statearr_45657;
})();
if(inst_45495__$1){
var statearr_45658_47530 = state_45542__$1;
(statearr_45658_47530[(1)] = (33));

} else {
var statearr_45659_47532 = state_45542__$1;
(statearr_45659_47532[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (25))){
var inst_45478 = (state_45542[(9)]);
var inst_45477 = (state_45542[(20)]);
var inst_45480 = (inst_45478 < inst_45477);
var inst_45481 = inst_45480;
var state_45542__$1 = state_45542;
if(cljs.core.truth_(inst_45481)){
var statearr_45662_47533 = state_45542__$1;
(statearr_45662_47533[(1)] = (27));

} else {
var statearr_45663_47534 = state_45542__$1;
(statearr_45663_47534[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (34))){
var state_45542__$1 = state_45542;
var statearr_45664_47535 = state_45542__$1;
(statearr_45664_47535[(2)] = null);

(statearr_45664_47535[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (17))){
var state_45542__$1 = state_45542;
var statearr_45668_47537 = state_45542__$1;
(statearr_45668_47537[(2)] = null);

(statearr_45668_47537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (3))){
var inst_45533 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45542__$1,inst_45533);
} else {
if((state_val_45543 === (12))){
var inst_45462 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45672_47539 = state_45542__$1;
(statearr_45672_47539[(2)] = inst_45462);

(statearr_45672_47539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (2))){
var state_45542__$1 = state_45542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45542__$1,(4),ch);
} else {
if((state_val_45543 === (23))){
var state_45542__$1 = state_45542;
var statearr_45673_47540 = state_45542__$1;
(statearr_45673_47540[(2)] = null);

(statearr_45673_47540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (35))){
var inst_45517 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45674_47541 = state_45542__$1;
(statearr_45674_47541[(2)] = inst_45517);

(statearr_45674_47541[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (19))){
var inst_45424 = (state_45542[(7)]);
var inst_45430 = cljs.core.chunk_first(inst_45424);
var inst_45431 = cljs.core.chunk_rest(inst_45424);
var inst_45432 = cljs.core.count(inst_45430);
var inst_45402 = inst_45431;
var inst_45403 = inst_45430;
var inst_45404 = inst_45432;
var inst_45405 = (0);
var state_45542__$1 = (function (){var statearr_45675 = state_45542;
(statearr_45675[(13)] = inst_45403);

(statearr_45675[(14)] = inst_45405);

(statearr_45675[(15)] = inst_45404);

(statearr_45675[(16)] = inst_45402);

return statearr_45675;
})();
var statearr_45676_47542 = state_45542__$1;
(statearr_45676_47542[(2)] = null);

(statearr_45676_47542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (11))){
var inst_45402 = (state_45542[(16)]);
var inst_45424 = (state_45542[(7)]);
var inst_45424__$1 = cljs.core.seq(inst_45402);
var state_45542__$1 = (function (){var statearr_45677 = state_45542;
(statearr_45677[(7)] = inst_45424__$1);

return statearr_45677;
})();
if(inst_45424__$1){
var statearr_45678_47547 = state_45542__$1;
(statearr_45678_47547[(1)] = (16));

} else {
var statearr_45679_47548 = state_45542__$1;
(statearr_45679_47548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (9))){
var inst_45464 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45684_47549 = state_45542__$1;
(statearr_45684_47549[(2)] = inst_45464);

(statearr_45684_47549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (5))){
var inst_45394 = cljs.core.deref(cs);
var inst_45395 = cljs.core.seq(inst_45394);
var inst_45402 = inst_45395;
var inst_45403 = null;
var inst_45404 = (0);
var inst_45405 = (0);
var state_45542__$1 = (function (){var statearr_45689 = state_45542;
(statearr_45689[(13)] = inst_45403);

(statearr_45689[(14)] = inst_45405);

(statearr_45689[(15)] = inst_45404);

(statearr_45689[(16)] = inst_45402);

return statearr_45689;
})();
var statearr_45694_47555 = state_45542__$1;
(statearr_45694_47555[(2)] = null);

(statearr_45694_47555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (14))){
var state_45542__$1 = state_45542;
var statearr_45695_47556 = state_45542__$1;
(statearr_45695_47556[(2)] = null);

(statearr_45695_47556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (45))){
var inst_45525 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45696_47562 = state_45542__$1;
(statearr_45696_47562[(2)] = inst_45525);

(statearr_45696_47562[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (26))){
var inst_45467 = (state_45542[(27)]);
var inst_45521 = (state_45542[(2)]);
var inst_45522 = cljs.core.seq(inst_45467);
var state_45542__$1 = (function (){var statearr_45698 = state_45542;
(statearr_45698[(29)] = inst_45521);

return statearr_45698;
})();
if(inst_45522){
var statearr_45699_47563 = state_45542__$1;
(statearr_45699_47563[(1)] = (42));

} else {
var statearr_45701_47564 = state_45542__$1;
(statearr_45701_47564[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (16))){
var inst_45424 = (state_45542[(7)]);
var inst_45428 = cljs.core.chunked_seq_QMARK_(inst_45424);
var state_45542__$1 = state_45542;
if(inst_45428){
var statearr_45702_47566 = state_45542__$1;
(statearr_45702_47566[(1)] = (19));

} else {
var statearr_45703_47571 = state_45542__$1;
(statearr_45703_47571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (38))){
var inst_45514 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45705_47575 = state_45542__$1;
(statearr_45705_47575[(2)] = inst_45514);

(statearr_45705_47575[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (30))){
var state_45542__$1 = state_45542;
var statearr_45708_47580 = state_45542__$1;
(statearr_45708_47580[(2)] = null);

(statearr_45708_47580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (10))){
var inst_45403 = (state_45542[(13)]);
var inst_45405 = (state_45542[(14)]);
var inst_45413 = cljs.core._nth(inst_45403,inst_45405);
var inst_45414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45413,(0),null);
var inst_45415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45413,(1),null);
var state_45542__$1 = (function (){var statearr_45710 = state_45542;
(statearr_45710[(24)] = inst_45414);

return statearr_45710;
})();
if(cljs.core.truth_(inst_45415)){
var statearr_45712_47591 = state_45542__$1;
(statearr_45712_47591[(1)] = (13));

} else {
var statearr_45713_47593 = state_45542__$1;
(statearr_45713_47593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (18))){
var inst_45460 = (state_45542[(2)]);
var state_45542__$1 = state_45542;
var statearr_45714_47594 = state_45542__$1;
(statearr_45714_47594[(2)] = inst_45460);

(statearr_45714_47594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (42))){
var state_45542__$1 = state_45542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45542__$1,(45),dchan);
} else {
if((state_val_45543 === (37))){
var inst_45495 = (state_45542[(23)]);
var inst_45387 = (state_45542[(10)]);
var inst_45504 = (state_45542[(22)]);
var inst_45504__$1 = cljs.core.first(inst_45495);
var inst_45505 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45504__$1,inst_45387,done);
var state_45542__$1 = (function (){var statearr_45727 = state_45542;
(statearr_45727[(22)] = inst_45504__$1);

return statearr_45727;
})();
if(cljs.core.truth_(inst_45505)){
var statearr_45728_47604 = state_45542__$1;
(statearr_45728_47604[(1)] = (39));

} else {
var statearr_45729_47605 = state_45542__$1;
(statearr_45729_47605[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45543 === (8))){
var inst_45405 = (state_45542[(14)]);
var inst_45404 = (state_45542[(15)]);
var inst_45407 = (inst_45405 < inst_45404);
var inst_45408 = inst_45407;
var state_45542__$1 = state_45542;
if(cljs.core.truth_(inst_45408)){
var statearr_45730_47610 = state_45542__$1;
(statearr_45730_47610[(1)] = (10));

} else {
var statearr_45731_47611 = state_45542__$1;
(statearr_45731_47611[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__43749__auto__ = null;
var cljs$core$async$mult_$_state_machine__43749__auto____0 = (function (){
var statearr_45732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45732[(0)] = cljs$core$async$mult_$_state_machine__43749__auto__);

(statearr_45732[(1)] = (1));

return statearr_45732;
});
var cljs$core$async$mult_$_state_machine__43749__auto____1 = (function (state_45542){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_45542);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e45733){var ex__43752__auto__ = e45733;
var statearr_45734_47612 = state_45542;
(statearr_45734_47612[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_45542[(4)]))){
var statearr_45735_47613 = state_45542;
(statearr_45735_47613[(1)] = cljs.core.first((state_45542[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47614 = state_45542;
state_45542 = G__47614;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43749__auto__ = function(state_45542){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43749__auto____1.call(this,state_45542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43749__auto____0;
cljs$core$async$mult_$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43749__auto____1;
return cljs$core$async$mult_$_state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_45736 = f__44083__auto__();
(statearr_45736[(6)] = c__44082__auto___47473);

return statearr_45736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
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
var G__45738 = arguments.length;
switch (G__45738) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_47619 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_47619(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47632 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_47632(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47633 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47633(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47635 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_47635(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47636 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47636(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47637 = arguments.length;
var i__5770__auto___47638 = (0);
while(true){
if((i__5770__auto___47638 < len__5769__auto___47637)){
args__5775__auto__.push((arguments[i__5770__auto___47638]));

var G__47639 = (i__5770__auto___47638 + (1));
i__5770__auto___47638 = G__47639;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45761){
var map__45762 = p__45761;
var map__45762__$1 = cljs.core.__destructure_map(map__45762);
var opts = map__45762__$1;
var statearr_45763_47650 = state;
(statearr_45763_47650[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45764_47651 = state;
(statearr_45764_47651[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45765_47652 = state;
(statearr_45765_47652[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45753){
var G__45754 = cljs.core.first(seq45753);
var seq45753__$1 = cljs.core.next(seq45753);
var G__45755 = cljs.core.first(seq45753__$1);
var seq45753__$2 = cljs.core.next(seq45753__$1);
var G__45756 = cljs.core.first(seq45753__$2);
var seq45753__$3 = cljs.core.next(seq45753__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45754,G__45755,G__45756,seq45753__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45782 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45783){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45783 = meta45783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45784,meta45783__$1){
var self__ = this;
var _45784__$1 = this;
return (new cljs.core.async.t_cljs$core$async45782(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45783__$1));
}));

(cljs.core.async.t_cljs$core$async45782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45784){
var self__ = this;
var _45784__$1 = this;
return self__.meta45783;
}));

(cljs.core.async.t_cljs$core$async45782.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45782.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45782.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45782.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45782.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45782.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45782.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45782.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45783","meta45783",807431133,null)], null);
}));

(cljs.core.async.t_cljs$core$async45782.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45782");

(cljs.core.async.t_cljs$core$async45782.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45782");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45782.
 */
cljs.core.async.__GT_t_cljs$core$async45782 = (function cljs$core$async$__GT_t_cljs$core$async45782(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45783){
return (new cljs.core.async.t_cljs$core$async45782(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45783));
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
var m = (new cljs.core.async.t_cljs$core$async45782(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__44082__auto___47676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_45888){
var state_val_45889 = (state_45888[(1)]);
if((state_val_45889 === (7))){
var inst_45843 = (state_45888[(2)]);
var state_45888__$1 = state_45888;
if(cljs.core.truth_(inst_45843)){
var statearr_45892_47679 = state_45888__$1;
(statearr_45892_47679[(1)] = (8));

} else {
var statearr_45894_47680 = state_45888__$1;
(statearr_45894_47680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (20))){
var inst_45836 = (state_45888[(7)]);
var state_45888__$1 = state_45888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45888__$1,(23),out,inst_45836);
} else {
if((state_val_45889 === (1))){
var inst_45811 = calc_state();
var inst_45812 = cljs.core.__destructure_map(inst_45811);
var inst_45814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45812,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45812,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45812,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45818 = inst_45811;
var state_45888__$1 = (function (){var statearr_45895 = state_45888;
(statearr_45895[(8)] = inst_45818);

(statearr_45895[(9)] = inst_45815);

(statearr_45895[(10)] = inst_45814);

(statearr_45895[(11)] = inst_45817);

return statearr_45895;
})();
var statearr_45896_47684 = state_45888__$1;
(statearr_45896_47684[(2)] = null);

(statearr_45896_47684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (24))){
var inst_45824 = (state_45888[(12)]);
var inst_45818 = inst_45824;
var state_45888__$1 = (function (){var statearr_45901 = state_45888;
(statearr_45901[(8)] = inst_45818);

return statearr_45901;
})();
var statearr_45902_47685 = state_45888__$1;
(statearr_45902_47685[(2)] = null);

(statearr_45902_47685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (4))){
var inst_45838 = (state_45888[(13)]);
var inst_45836 = (state_45888[(7)]);
var inst_45835 = (state_45888[(2)]);
var inst_45836__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45835,(0),null);
var inst_45837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45835,(1),null);
var inst_45838__$1 = (inst_45836__$1 == null);
var state_45888__$1 = (function (){var statearr_45903 = state_45888;
(statearr_45903[(13)] = inst_45838__$1);

(statearr_45903[(7)] = inst_45836__$1);

(statearr_45903[(14)] = inst_45837);

return statearr_45903;
})();
if(cljs.core.truth_(inst_45838__$1)){
var statearr_45904_47686 = state_45888__$1;
(statearr_45904_47686[(1)] = (5));

} else {
var statearr_45905_47687 = state_45888__$1;
(statearr_45905_47687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (15))){
var inst_45861 = (state_45888[(15)]);
var inst_45825 = (state_45888[(16)]);
var inst_45861__$1 = cljs.core.empty_QMARK_(inst_45825);
var state_45888__$1 = (function (){var statearr_45910 = state_45888;
(statearr_45910[(15)] = inst_45861__$1);

return statearr_45910;
})();
if(inst_45861__$1){
var statearr_45911_47694 = state_45888__$1;
(statearr_45911_47694[(1)] = (17));

} else {
var statearr_45912_47695 = state_45888__$1;
(statearr_45912_47695[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (21))){
var inst_45824 = (state_45888[(12)]);
var inst_45818 = inst_45824;
var state_45888__$1 = (function (){var statearr_45913 = state_45888;
(statearr_45913[(8)] = inst_45818);

return statearr_45913;
})();
var statearr_45915_47696 = state_45888__$1;
(statearr_45915_47696[(2)] = null);

(statearr_45915_47696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (13))){
var inst_45850 = (state_45888[(2)]);
var inst_45851 = calc_state();
var inst_45818 = inst_45851;
var state_45888__$1 = (function (){var statearr_45919 = state_45888;
(statearr_45919[(17)] = inst_45850);

(statearr_45919[(8)] = inst_45818);

return statearr_45919;
})();
var statearr_45920_47697 = state_45888__$1;
(statearr_45920_47697[(2)] = null);

(statearr_45920_47697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (22))){
var inst_45882 = (state_45888[(2)]);
var state_45888__$1 = state_45888;
var statearr_45921_47698 = state_45888__$1;
(statearr_45921_47698[(2)] = inst_45882);

(statearr_45921_47698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (6))){
var inst_45837 = (state_45888[(14)]);
var inst_45841 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45837,change);
var state_45888__$1 = state_45888;
var statearr_45922_47703 = state_45888__$1;
(statearr_45922_47703[(2)] = inst_45841);

(statearr_45922_47703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (25))){
var state_45888__$1 = state_45888;
var statearr_45923_47705 = state_45888__$1;
(statearr_45923_47705[(2)] = null);

(statearr_45923_47705[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (17))){
var inst_45826 = (state_45888[(18)]);
var inst_45837 = (state_45888[(14)]);
var inst_45863 = (inst_45826.cljs$core$IFn$_invoke$arity$1 ? inst_45826.cljs$core$IFn$_invoke$arity$1(inst_45837) : inst_45826.call(null,inst_45837));
var inst_45864 = cljs.core.not(inst_45863);
var state_45888__$1 = state_45888;
var statearr_45924_47711 = state_45888__$1;
(statearr_45924_47711[(2)] = inst_45864);

(statearr_45924_47711[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (3))){
var inst_45886 = (state_45888[(2)]);
var state_45888__$1 = state_45888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45888__$1,inst_45886);
} else {
if((state_val_45889 === (12))){
var state_45888__$1 = state_45888;
var statearr_45925_47712 = state_45888__$1;
(statearr_45925_47712[(2)] = null);

(statearr_45925_47712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (2))){
var inst_45818 = (state_45888[(8)]);
var inst_45824 = (state_45888[(12)]);
var inst_45824__$1 = cljs.core.__destructure_map(inst_45818);
var inst_45825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45824__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45824__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45824__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45888__$1 = (function (){var statearr_45926 = state_45888;
(statearr_45926[(16)] = inst_45825);

(statearr_45926[(18)] = inst_45826);

(statearr_45926[(12)] = inst_45824__$1);

return statearr_45926;
})();
return cljs.core.async.ioc_alts_BANG_(state_45888__$1,(4),inst_45827);
} else {
if((state_val_45889 === (23))){
var inst_45872 = (state_45888[(2)]);
var state_45888__$1 = state_45888;
if(cljs.core.truth_(inst_45872)){
var statearr_45927_47716 = state_45888__$1;
(statearr_45927_47716[(1)] = (24));

} else {
var statearr_45928_47717 = state_45888__$1;
(statearr_45928_47717[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (19))){
var inst_45867 = (state_45888[(2)]);
var state_45888__$1 = state_45888;
var statearr_45929_47718 = state_45888__$1;
(statearr_45929_47718[(2)] = inst_45867);

(statearr_45929_47718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (11))){
var inst_45837 = (state_45888[(14)]);
var inst_45847 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45837);
var state_45888__$1 = state_45888;
var statearr_45933_47719 = state_45888__$1;
(statearr_45933_47719[(2)] = inst_45847);

(statearr_45933_47719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (9))){
var inst_45858 = (state_45888[(19)]);
var inst_45825 = (state_45888[(16)]);
var inst_45837 = (state_45888[(14)]);
var inst_45858__$1 = (inst_45825.cljs$core$IFn$_invoke$arity$1 ? inst_45825.cljs$core$IFn$_invoke$arity$1(inst_45837) : inst_45825.call(null,inst_45837));
var state_45888__$1 = (function (){var statearr_45936 = state_45888;
(statearr_45936[(19)] = inst_45858__$1);

return statearr_45936;
})();
if(cljs.core.truth_(inst_45858__$1)){
var statearr_45938_47722 = state_45888__$1;
(statearr_45938_47722[(1)] = (14));

} else {
var statearr_45939_47723 = state_45888__$1;
(statearr_45939_47723[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (5))){
var inst_45838 = (state_45888[(13)]);
var state_45888__$1 = state_45888;
var statearr_45941_47729 = state_45888__$1;
(statearr_45941_47729[(2)] = inst_45838);

(statearr_45941_47729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (14))){
var inst_45858 = (state_45888[(19)]);
var state_45888__$1 = state_45888;
var statearr_45942_47730 = state_45888__$1;
(statearr_45942_47730[(2)] = inst_45858);

(statearr_45942_47730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (26))){
var inst_45878 = (state_45888[(2)]);
var state_45888__$1 = state_45888;
var statearr_45943_47731 = state_45888__$1;
(statearr_45943_47731[(2)] = inst_45878);

(statearr_45943_47731[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (16))){
var inst_45869 = (state_45888[(2)]);
var state_45888__$1 = state_45888;
if(cljs.core.truth_(inst_45869)){
var statearr_45944_47732 = state_45888__$1;
(statearr_45944_47732[(1)] = (20));

} else {
var statearr_45945_47734 = state_45888__$1;
(statearr_45945_47734[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (10))){
var inst_45884 = (state_45888[(2)]);
var state_45888__$1 = state_45888;
var statearr_45946_47735 = state_45888__$1;
(statearr_45946_47735[(2)] = inst_45884);

(statearr_45946_47735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (18))){
var inst_45861 = (state_45888[(15)]);
var state_45888__$1 = state_45888;
var statearr_45948_47736 = state_45888__$1;
(statearr_45948_47736[(2)] = inst_45861);

(statearr_45948_47736[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45889 === (8))){
var inst_45836 = (state_45888[(7)]);
var inst_45845 = (inst_45836 == null);
var state_45888__$1 = state_45888;
if(cljs.core.truth_(inst_45845)){
var statearr_45949_47739 = state_45888__$1;
(statearr_45949_47739[(1)] = (11));

} else {
var statearr_45951_47740 = state_45888__$1;
(statearr_45951_47740[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__43749__auto__ = null;
var cljs$core$async$mix_$_state_machine__43749__auto____0 = (function (){
var statearr_45952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45952[(0)] = cljs$core$async$mix_$_state_machine__43749__auto__);

(statearr_45952[(1)] = (1));

return statearr_45952;
});
var cljs$core$async$mix_$_state_machine__43749__auto____1 = (function (state_45888){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_45888);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e45953){var ex__43752__auto__ = e45953;
var statearr_45954_47745 = state_45888;
(statearr_45954_47745[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_45888[(4)]))){
var statearr_45955_47746 = state_45888;
(statearr_45955_47746[(1)] = cljs.core.first((state_45888[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47747 = state_45888;
state_45888 = G__47747;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43749__auto__ = function(state_45888){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43749__auto____1.call(this,state_45888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43749__auto____0;
cljs$core$async$mix_$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43749__auto____1;
return cljs$core$async$mix_$_state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_45961 = f__44083__auto__();
(statearr_45961[(6)] = c__44082__auto___47676);

return statearr_45961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_47750 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_47750(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47754 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_47754(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47758 = (function() {
var G__47759 = null;
var G__47759__1 = (function (p){
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
var G__47759__2 = (function (p,v){
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
G__47759 = function(p,v){
switch(arguments.length){
case 1:
return G__47759__1.call(this,p);
case 2:
return G__47759__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47759.cljs$core$IFn$_invoke$arity$1 = G__47759__1;
G__47759.cljs$core$IFn$_invoke$arity$2 = G__47759__2;
return G__47759;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45980 = arguments.length;
switch (G__45980) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47758(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47758(p,v);
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
cljs.core.async.t_cljs$core$async45997 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45998){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45998 = meta45998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45999,meta45998__$1){
var self__ = this;
var _45999__$1 = this;
return (new cljs.core.async.t_cljs$core$async45997(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45998__$1));
}));

(cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45999){
var self__ = this;
var _45999__$1 = this;
return self__.meta45998;
}));

(cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45998","meta45998",-957999311,null)], null);
}));

(cljs.core.async.t_cljs$core$async45997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45997");

(cljs.core.async.t_cljs$core$async45997.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45997.
 */
cljs.core.async.__GT_t_cljs$core$async45997 = (function cljs$core$async$__GT_t_cljs$core$async45997(ch,topic_fn,buf_fn,mults,ensure_mult,meta45998){
return (new cljs.core.async.t_cljs$core$async45997(ch,topic_fn,buf_fn,mults,ensure_mult,meta45998));
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
var G__45994 = arguments.length;
switch (G__45994) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45990_SHARP_){
if(cljs.core.truth_((p1__45990_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45990_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45990_SHARP_.call(null,topic)))){
return p1__45990_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45990_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async45997(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__44082__auto___47771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_46092){
var state_val_46093 = (state_46092[(1)]);
if((state_val_46093 === (7))){
var inst_46088 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
var statearr_46097_47773 = state_46092__$1;
(statearr_46097_47773[(2)] = inst_46088);

(statearr_46097_47773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (20))){
var state_46092__$1 = state_46092;
var statearr_46098_47774 = state_46092__$1;
(statearr_46098_47774[(2)] = null);

(statearr_46098_47774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (1))){
var state_46092__$1 = state_46092;
var statearr_46099_47775 = state_46092__$1;
(statearr_46099_47775[(2)] = null);

(statearr_46099_47775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (24))){
var inst_46071 = (state_46092[(7)]);
var inst_46080 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46071);
var state_46092__$1 = state_46092;
var statearr_46115_47776 = state_46092__$1;
(statearr_46115_47776[(2)] = inst_46080);

(statearr_46115_47776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (4))){
var inst_46014 = (state_46092[(8)]);
var inst_46014__$1 = (state_46092[(2)]);
var inst_46015 = (inst_46014__$1 == null);
var state_46092__$1 = (function (){var statearr_46116 = state_46092;
(statearr_46116[(8)] = inst_46014__$1);

return statearr_46116;
})();
if(cljs.core.truth_(inst_46015)){
var statearr_46117_47779 = state_46092__$1;
(statearr_46117_47779[(1)] = (5));

} else {
var statearr_46118_47780 = state_46092__$1;
(statearr_46118_47780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (15))){
var inst_46065 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
var statearr_46119_47781 = state_46092__$1;
(statearr_46119_47781[(2)] = inst_46065);

(statearr_46119_47781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (21))){
var inst_46085 = (state_46092[(2)]);
var state_46092__$1 = (function (){var statearr_46120 = state_46092;
(statearr_46120[(9)] = inst_46085);

return statearr_46120;
})();
var statearr_46122_47782 = state_46092__$1;
(statearr_46122_47782[(2)] = null);

(statearr_46122_47782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (13))){
var inst_46046 = (state_46092[(10)]);
var inst_46048 = cljs.core.chunked_seq_QMARK_(inst_46046);
var state_46092__$1 = state_46092;
if(inst_46048){
var statearr_46123_47783 = state_46092__$1;
(statearr_46123_47783[(1)] = (16));

} else {
var statearr_46124_47785 = state_46092__$1;
(statearr_46124_47785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (22))){
var inst_46077 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
if(cljs.core.truth_(inst_46077)){
var statearr_46125_47787 = state_46092__$1;
(statearr_46125_47787[(1)] = (23));

} else {
var statearr_46126_47791 = state_46092__$1;
(statearr_46126_47791[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (6))){
var inst_46071 = (state_46092[(7)]);
var inst_46014 = (state_46092[(8)]);
var inst_46073 = (state_46092[(11)]);
var inst_46071__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46014) : topic_fn.call(null,inst_46014));
var inst_46072 = cljs.core.deref(mults);
var inst_46073__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46072,inst_46071__$1);
var state_46092__$1 = (function (){var statearr_46128 = state_46092;
(statearr_46128[(7)] = inst_46071__$1);

(statearr_46128[(11)] = inst_46073__$1);

return statearr_46128;
})();
if(cljs.core.truth_(inst_46073__$1)){
var statearr_46129_47796 = state_46092__$1;
(statearr_46129_47796[(1)] = (19));

} else {
var statearr_46130_47797 = state_46092__$1;
(statearr_46130_47797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (25))){
var inst_46082 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
var statearr_46131_47798 = state_46092__$1;
(statearr_46131_47798[(2)] = inst_46082);

(statearr_46131_47798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (17))){
var inst_46046 = (state_46092[(10)]);
var inst_46056 = cljs.core.first(inst_46046);
var inst_46057 = cljs.core.async.muxch_STAR_(inst_46056);
var inst_46058 = cljs.core.async.close_BANG_(inst_46057);
var inst_46059 = cljs.core.next(inst_46046);
var inst_46024 = inst_46059;
var inst_46025 = null;
var inst_46026 = (0);
var inst_46027 = (0);
var state_46092__$1 = (function (){var statearr_46132 = state_46092;
(statearr_46132[(12)] = inst_46025);

(statearr_46132[(13)] = inst_46024);

(statearr_46132[(14)] = inst_46026);

(statearr_46132[(15)] = inst_46058);

(statearr_46132[(16)] = inst_46027);

return statearr_46132;
})();
var statearr_46133_47799 = state_46092__$1;
(statearr_46133_47799[(2)] = null);

(statearr_46133_47799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (3))){
var inst_46090 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46092__$1,inst_46090);
} else {
if((state_val_46093 === (12))){
var inst_46067 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
var statearr_46135_47800 = state_46092__$1;
(statearr_46135_47800[(2)] = inst_46067);

(statearr_46135_47800[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (2))){
var state_46092__$1 = state_46092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46092__$1,(4),ch);
} else {
if((state_val_46093 === (23))){
var state_46092__$1 = state_46092;
var statearr_46136_47801 = state_46092__$1;
(statearr_46136_47801[(2)] = null);

(statearr_46136_47801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (19))){
var inst_46014 = (state_46092[(8)]);
var inst_46073 = (state_46092[(11)]);
var inst_46075 = cljs.core.async.muxch_STAR_(inst_46073);
var state_46092__$1 = state_46092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46092__$1,(22),inst_46075,inst_46014);
} else {
if((state_val_46093 === (11))){
var inst_46024 = (state_46092[(13)]);
var inst_46046 = (state_46092[(10)]);
var inst_46046__$1 = cljs.core.seq(inst_46024);
var state_46092__$1 = (function (){var statearr_46137 = state_46092;
(statearr_46137[(10)] = inst_46046__$1);

return statearr_46137;
})();
if(inst_46046__$1){
var statearr_46138_47803 = state_46092__$1;
(statearr_46138_47803[(1)] = (13));

} else {
var statearr_46139_47804 = state_46092__$1;
(statearr_46139_47804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (9))){
var inst_46069 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
var statearr_46140_47805 = state_46092__$1;
(statearr_46140_47805[(2)] = inst_46069);

(statearr_46140_47805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (5))){
var inst_46021 = cljs.core.deref(mults);
var inst_46022 = cljs.core.vals(inst_46021);
var inst_46023 = cljs.core.seq(inst_46022);
var inst_46024 = inst_46023;
var inst_46025 = null;
var inst_46026 = (0);
var inst_46027 = (0);
var state_46092__$1 = (function (){var statearr_46142 = state_46092;
(statearr_46142[(12)] = inst_46025);

(statearr_46142[(13)] = inst_46024);

(statearr_46142[(14)] = inst_46026);

(statearr_46142[(16)] = inst_46027);

return statearr_46142;
})();
var statearr_46143_47806 = state_46092__$1;
(statearr_46143_47806[(2)] = null);

(statearr_46143_47806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (14))){
var state_46092__$1 = state_46092;
var statearr_46147_47807 = state_46092__$1;
(statearr_46147_47807[(2)] = null);

(statearr_46147_47807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (16))){
var inst_46046 = (state_46092[(10)]);
var inst_46050 = cljs.core.chunk_first(inst_46046);
var inst_46051 = cljs.core.chunk_rest(inst_46046);
var inst_46053 = cljs.core.count(inst_46050);
var inst_46024 = inst_46051;
var inst_46025 = inst_46050;
var inst_46026 = inst_46053;
var inst_46027 = (0);
var state_46092__$1 = (function (){var statearr_46148 = state_46092;
(statearr_46148[(12)] = inst_46025);

(statearr_46148[(13)] = inst_46024);

(statearr_46148[(14)] = inst_46026);

(statearr_46148[(16)] = inst_46027);

return statearr_46148;
})();
var statearr_46149_47812 = state_46092__$1;
(statearr_46149_47812[(2)] = null);

(statearr_46149_47812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (10))){
var inst_46025 = (state_46092[(12)]);
var inst_46024 = (state_46092[(13)]);
var inst_46026 = (state_46092[(14)]);
var inst_46027 = (state_46092[(16)]);
var inst_46032 = cljs.core._nth(inst_46025,inst_46027);
var inst_46034 = cljs.core.async.muxch_STAR_(inst_46032);
var inst_46035 = cljs.core.async.close_BANG_(inst_46034);
var inst_46038 = (inst_46027 + (1));
var tmp46144 = inst_46025;
var tmp46145 = inst_46024;
var tmp46146 = inst_46026;
var inst_46024__$1 = tmp46145;
var inst_46025__$1 = tmp46144;
var inst_46026__$1 = tmp46146;
var inst_46027__$1 = inst_46038;
var state_46092__$1 = (function (){var statearr_46157 = state_46092;
(statearr_46157[(12)] = inst_46025__$1);

(statearr_46157[(13)] = inst_46024__$1);

(statearr_46157[(14)] = inst_46026__$1);

(statearr_46157[(17)] = inst_46035);

(statearr_46157[(16)] = inst_46027__$1);

return statearr_46157;
})();
var statearr_46159_47817 = state_46092__$1;
(statearr_46159_47817[(2)] = null);

(statearr_46159_47817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (18))){
var inst_46062 = (state_46092[(2)]);
var state_46092__$1 = state_46092;
var statearr_46163_47818 = state_46092__$1;
(statearr_46163_47818[(2)] = inst_46062);

(statearr_46163_47818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46093 === (8))){
var inst_46026 = (state_46092[(14)]);
var inst_46027 = (state_46092[(16)]);
var inst_46029 = (inst_46027 < inst_46026);
var inst_46030 = inst_46029;
var state_46092__$1 = state_46092;
if(cljs.core.truth_(inst_46030)){
var statearr_46167_47819 = state_46092__$1;
(statearr_46167_47819[(1)] = (10));

} else {
var statearr_46168_47820 = state_46092__$1;
(statearr_46168_47820[(1)] = (11));

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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_46169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46169[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_46169[(1)] = (1));

return statearr_46169;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_46092){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_46092);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e46170){var ex__43752__auto__ = e46170;
var statearr_46171_47821 = state_46092;
(statearr_46171_47821[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_46092[(4)]))){
var statearr_46172_47822 = state_46092;
(statearr_46172_47822[(1)] = cljs.core.first((state_46092[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47823 = state_46092;
state_46092 = G__47823;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_46092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_46092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_46179 = f__44083__auto__();
(statearr_46179[(6)] = c__44082__auto___47771);

return statearr_46179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
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
var G__46184 = arguments.length;
switch (G__46184) {
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
var G__46193 = arguments.length;
switch (G__46193) {
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
var G__46206 = arguments.length;
switch (G__46206) {
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
var c__44082__auto___47852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_46279){
var state_val_46280 = (state_46279[(1)]);
if((state_val_46280 === (7))){
var state_46279__$1 = state_46279;
var statearr_46281_47853 = state_46279__$1;
(statearr_46281_47853[(2)] = null);

(statearr_46281_47853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (1))){
var state_46279__$1 = state_46279;
var statearr_46282_47863 = state_46279__$1;
(statearr_46282_47863[(2)] = null);

(statearr_46282_47863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (4))){
var inst_46223 = (state_46279[(7)]);
var inst_46224 = (state_46279[(8)]);
var inst_46226 = (inst_46224 < inst_46223);
var state_46279__$1 = state_46279;
if(cljs.core.truth_(inst_46226)){
var statearr_46283_47864 = state_46279__$1;
(statearr_46283_47864[(1)] = (6));

} else {
var statearr_46284_47865 = state_46279__$1;
(statearr_46284_47865[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (15))){
var inst_46262 = (state_46279[(9)]);
var inst_46270 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46262);
var state_46279__$1 = state_46279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46279__$1,(17),out,inst_46270);
} else {
if((state_val_46280 === (13))){
var inst_46262 = (state_46279[(9)]);
var inst_46262__$1 = (state_46279[(2)]);
var inst_46263 = cljs.core.some(cljs.core.nil_QMARK_,inst_46262__$1);
var state_46279__$1 = (function (){var statearr_46285 = state_46279;
(statearr_46285[(9)] = inst_46262__$1);

return statearr_46285;
})();
if(cljs.core.truth_(inst_46263)){
var statearr_46286_47869 = state_46279__$1;
(statearr_46286_47869[(1)] = (14));

} else {
var statearr_46287_47870 = state_46279__$1;
(statearr_46287_47870[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (6))){
var state_46279__$1 = state_46279;
var statearr_46290_47871 = state_46279__$1;
(statearr_46290_47871[(2)] = null);

(statearr_46290_47871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (17))){
var inst_46272 = (state_46279[(2)]);
var state_46279__$1 = (function (){var statearr_46292 = state_46279;
(statearr_46292[(10)] = inst_46272);

return statearr_46292;
})();
var statearr_46293_47872 = state_46279__$1;
(statearr_46293_47872[(2)] = null);

(statearr_46293_47872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (3))){
var inst_46277 = (state_46279[(2)]);
var state_46279__$1 = state_46279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46279__$1,inst_46277);
} else {
if((state_val_46280 === (12))){
var _ = (function (){var statearr_46297 = state_46279;
(statearr_46297[(4)] = cljs.core.rest((state_46279[(4)])));

return statearr_46297;
})();
var state_46279__$1 = state_46279;
var ex46291 = (state_46279__$1[(2)]);
var statearr_46298_47873 = state_46279__$1;
(statearr_46298_47873[(5)] = ex46291);


if((ex46291 instanceof Object)){
var statearr_46299_47874 = state_46279__$1;
(statearr_46299_47874[(1)] = (11));

(statearr_46299_47874[(5)] = null);

} else {
throw ex46291;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (2))){
var inst_46222 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46223 = cnt;
var inst_46224 = (0);
var state_46279__$1 = (function (){var statearr_46303 = state_46279;
(statearr_46303[(11)] = inst_46222);

(statearr_46303[(7)] = inst_46223);

(statearr_46303[(8)] = inst_46224);

return statearr_46303;
})();
var statearr_46304_47875 = state_46279__$1;
(statearr_46304_47875[(2)] = null);

(statearr_46304_47875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (11))){
var inst_46238 = (state_46279[(2)]);
var inst_46242 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46279__$1 = (function (){var statearr_46305 = state_46279;
(statearr_46305[(12)] = inst_46238);

return statearr_46305;
})();
var statearr_46306_47876 = state_46279__$1;
(statearr_46306_47876[(2)] = inst_46242);

(statearr_46306_47876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (9))){
var inst_46224 = (state_46279[(8)]);
var _ = (function (){var statearr_46307 = state_46279;
(statearr_46307[(4)] = cljs.core.cons((12),(state_46279[(4)])));

return statearr_46307;
})();
var inst_46248 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46224) : chs__$1.call(null,inst_46224));
var inst_46249 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46224) : done.call(null,inst_46224));
var inst_46250 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46248,inst_46249);
var ___$1 = (function (){var statearr_46308 = state_46279;
(statearr_46308[(4)] = cljs.core.rest((state_46279[(4)])));

return statearr_46308;
})();
var state_46279__$1 = state_46279;
var statearr_46309_47885 = state_46279__$1;
(statearr_46309_47885[(2)] = inst_46250);

(statearr_46309_47885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (5))){
var inst_46260 = (state_46279[(2)]);
var state_46279__$1 = (function (){var statearr_46310 = state_46279;
(statearr_46310[(13)] = inst_46260);

return statearr_46310;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46279__$1,(13),dchan);
} else {
if((state_val_46280 === (14))){
var inst_46268 = cljs.core.async.close_BANG_(out);
var state_46279__$1 = state_46279;
var statearr_46311_47886 = state_46279__$1;
(statearr_46311_47886[(2)] = inst_46268);

(statearr_46311_47886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (16))){
var inst_46275 = (state_46279[(2)]);
var state_46279__$1 = state_46279;
var statearr_46312_47888 = state_46279__$1;
(statearr_46312_47888[(2)] = inst_46275);

(statearr_46312_47888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (10))){
var inst_46224 = (state_46279[(8)]);
var inst_46253 = (state_46279[(2)]);
var inst_46254 = (inst_46224 + (1));
var inst_46224__$1 = inst_46254;
var state_46279__$1 = (function (){var statearr_46313 = state_46279;
(statearr_46313[(14)] = inst_46253);

(statearr_46313[(8)] = inst_46224__$1);

return statearr_46313;
})();
var statearr_46314_47889 = state_46279__$1;
(statearr_46314_47889[(2)] = null);

(statearr_46314_47889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (8))){
var inst_46258 = (state_46279[(2)]);
var state_46279__$1 = state_46279;
var statearr_46315_47890 = state_46279__$1;
(statearr_46315_47890[(2)] = inst_46258);

(statearr_46315_47890[(1)] = (5));


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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_46319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46319[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_46319[(1)] = (1));

return statearr_46319;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_46279){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_46279);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e46320){var ex__43752__auto__ = e46320;
var statearr_46321_47901 = state_46279;
(statearr_46321_47901[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_46279[(4)]))){
var statearr_46322_47902 = state_46279;
(statearr_46322_47902[(1)] = cljs.core.first((state_46279[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47903 = state_46279;
state_46279 = G__47903;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_46279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_46279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_46323 = f__44083__auto__();
(statearr_46323[(6)] = c__44082__auto___47852);

return statearr_46323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
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
var G__46326 = arguments.length;
switch (G__46326) {
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
var c__44082__auto___47906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_46361){
var state_val_46362 = (state_46361[(1)]);
if((state_val_46362 === (7))){
var inst_46338 = (state_46361[(7)]);
var inst_46339 = (state_46361[(8)]);
var inst_46338__$1 = (state_46361[(2)]);
var inst_46339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46338__$1,(0),null);
var inst_46340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46338__$1,(1),null);
var inst_46341 = (inst_46339__$1 == null);
var state_46361__$1 = (function (){var statearr_46363 = state_46361;
(statearr_46363[(9)] = inst_46340);

(statearr_46363[(7)] = inst_46338__$1);

(statearr_46363[(8)] = inst_46339__$1);

return statearr_46363;
})();
if(cljs.core.truth_(inst_46341)){
var statearr_46364_47911 = state_46361__$1;
(statearr_46364_47911[(1)] = (8));

} else {
var statearr_46365_47912 = state_46361__$1;
(statearr_46365_47912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46362 === (1))){
var inst_46327 = cljs.core.vec(chs);
var inst_46328 = inst_46327;
var state_46361__$1 = (function (){var statearr_46366 = state_46361;
(statearr_46366[(10)] = inst_46328);

return statearr_46366;
})();
var statearr_46367_47914 = state_46361__$1;
(statearr_46367_47914[(2)] = null);

(statearr_46367_47914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46362 === (4))){
var inst_46328 = (state_46361[(10)]);
var state_46361__$1 = state_46361;
return cljs.core.async.ioc_alts_BANG_(state_46361__$1,(7),inst_46328);
} else {
if((state_val_46362 === (6))){
var inst_46357 = (state_46361[(2)]);
var state_46361__$1 = state_46361;
var statearr_46370_47915 = state_46361__$1;
(statearr_46370_47915[(2)] = inst_46357);

(statearr_46370_47915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46362 === (3))){
var inst_46359 = (state_46361[(2)]);
var state_46361__$1 = state_46361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46361__$1,inst_46359);
} else {
if((state_val_46362 === (2))){
var inst_46328 = (state_46361[(10)]);
var inst_46330 = cljs.core.count(inst_46328);
var inst_46331 = (inst_46330 > (0));
var state_46361__$1 = state_46361;
if(cljs.core.truth_(inst_46331)){
var statearr_46377_47917 = state_46361__$1;
(statearr_46377_47917[(1)] = (4));

} else {
var statearr_46378_47918 = state_46361__$1;
(statearr_46378_47918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46362 === (11))){
var inst_46328 = (state_46361[(10)]);
var inst_46350 = (state_46361[(2)]);
var tmp46372 = inst_46328;
var inst_46328__$1 = tmp46372;
var state_46361__$1 = (function (){var statearr_46379 = state_46361;
(statearr_46379[(10)] = inst_46328__$1);

(statearr_46379[(11)] = inst_46350);

return statearr_46379;
})();
var statearr_46380_47922 = state_46361__$1;
(statearr_46380_47922[(2)] = null);

(statearr_46380_47922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46362 === (9))){
var inst_46339 = (state_46361[(8)]);
var state_46361__$1 = state_46361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46361__$1,(11),out,inst_46339);
} else {
if((state_val_46362 === (5))){
var inst_46355 = cljs.core.async.close_BANG_(out);
var state_46361__$1 = state_46361;
var statearr_46384_47924 = state_46361__$1;
(statearr_46384_47924[(2)] = inst_46355);

(statearr_46384_47924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46362 === (10))){
var inst_46353 = (state_46361[(2)]);
var state_46361__$1 = state_46361;
var statearr_46385_47926 = state_46361__$1;
(statearr_46385_47926[(2)] = inst_46353);

(statearr_46385_47926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46362 === (8))){
var inst_46340 = (state_46361[(9)]);
var inst_46328 = (state_46361[(10)]);
var inst_46338 = (state_46361[(7)]);
var inst_46339 = (state_46361[(8)]);
var inst_46344 = (function (){var cs = inst_46328;
var vec__46333 = inst_46338;
var v = inst_46339;
var c = inst_46340;
return (function (p1__46324_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46324_SHARP_);
});
})();
var inst_46345 = cljs.core.filterv(inst_46344,inst_46328);
var inst_46328__$1 = inst_46345;
var state_46361__$1 = (function (){var statearr_46386 = state_46361;
(statearr_46386[(10)] = inst_46328__$1);

return statearr_46386;
})();
var statearr_46387_47932 = state_46361__$1;
(statearr_46387_47932[(2)] = null);

(statearr_46387_47932[(1)] = (2));


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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_46400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46400[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_46400[(1)] = (1));

return statearr_46400;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_46361){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_46361);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e46404){var ex__43752__auto__ = e46404;
var statearr_46406_47941 = state_46361;
(statearr_46406_47941[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_46361[(4)]))){
var statearr_46407_47942 = state_46361;
(statearr_46407_47942[(1)] = cljs.core.first((state_46361[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47943 = state_46361;
state_46361 = G__47943;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_46361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_46361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_46411 = f__44083__auto__();
(statearr_46411[(6)] = c__44082__auto___47906);

return statearr_46411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
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
var G__46417 = arguments.length;
switch (G__46417) {
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
var c__44082__auto___47945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_46444){
var state_val_46445 = (state_46444[(1)]);
if((state_val_46445 === (7))){
var inst_46426 = (state_46444[(7)]);
var inst_46426__$1 = (state_46444[(2)]);
var inst_46427 = (inst_46426__$1 == null);
var inst_46428 = cljs.core.not(inst_46427);
var state_46444__$1 = (function (){var statearr_46446 = state_46444;
(statearr_46446[(7)] = inst_46426__$1);

return statearr_46446;
})();
if(inst_46428){
var statearr_46447_47946 = state_46444__$1;
(statearr_46447_47946[(1)] = (8));

} else {
var statearr_46449_47947 = state_46444__$1;
(statearr_46449_47947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (1))){
var inst_46421 = (0);
var state_46444__$1 = (function (){var statearr_46450 = state_46444;
(statearr_46450[(8)] = inst_46421);

return statearr_46450;
})();
var statearr_46451_47948 = state_46444__$1;
(statearr_46451_47948[(2)] = null);

(statearr_46451_47948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (4))){
var state_46444__$1 = state_46444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46444__$1,(7),ch);
} else {
if((state_val_46445 === (6))){
var inst_46439 = (state_46444[(2)]);
var state_46444__$1 = state_46444;
var statearr_46453_47949 = state_46444__$1;
(statearr_46453_47949[(2)] = inst_46439);

(statearr_46453_47949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (3))){
var inst_46441 = (state_46444[(2)]);
var inst_46442 = cljs.core.async.close_BANG_(out);
var state_46444__$1 = (function (){var statearr_46458 = state_46444;
(statearr_46458[(9)] = inst_46441);

return statearr_46458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46444__$1,inst_46442);
} else {
if((state_val_46445 === (2))){
var inst_46421 = (state_46444[(8)]);
var inst_46423 = (inst_46421 < n);
var state_46444__$1 = state_46444;
if(cljs.core.truth_(inst_46423)){
var statearr_46459_47953 = state_46444__$1;
(statearr_46459_47953[(1)] = (4));

} else {
var statearr_46460_47954 = state_46444__$1;
(statearr_46460_47954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (11))){
var inst_46421 = (state_46444[(8)]);
var inst_46431 = (state_46444[(2)]);
var inst_46432 = (inst_46421 + (1));
var inst_46421__$1 = inst_46432;
var state_46444__$1 = (function (){var statearr_46461 = state_46444;
(statearr_46461[(10)] = inst_46431);

(statearr_46461[(8)] = inst_46421__$1);

return statearr_46461;
})();
var statearr_46462_47955 = state_46444__$1;
(statearr_46462_47955[(2)] = null);

(statearr_46462_47955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (9))){
var state_46444__$1 = state_46444;
var statearr_46464_47957 = state_46444__$1;
(statearr_46464_47957[(2)] = null);

(statearr_46464_47957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (5))){
var state_46444__$1 = state_46444;
var statearr_46465_47962 = state_46444__$1;
(statearr_46465_47962[(2)] = null);

(statearr_46465_47962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (10))){
var inst_46436 = (state_46444[(2)]);
var state_46444__$1 = state_46444;
var statearr_46467_47964 = state_46444__$1;
(statearr_46467_47964[(2)] = inst_46436);

(statearr_46467_47964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46445 === (8))){
var inst_46426 = (state_46444[(7)]);
var state_46444__$1 = state_46444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46444__$1,(11),out,inst_46426);
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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_46470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46470[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_46470[(1)] = (1));

return statearr_46470;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_46444){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_46444);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e46472){var ex__43752__auto__ = e46472;
var statearr_46474_47965 = state_46444;
(statearr_46474_47965[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_46444[(4)]))){
var statearr_46476_47966 = state_46444;
(statearr_46476_47966[(1)] = cljs.core.first((state_46444[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47967 = state_46444;
state_46444 = G__47967;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_46444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_46444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_46479 = f__44083__auto__();
(statearr_46479[(6)] = c__44082__auto___47945);

return statearr_46479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
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
cljs.core.async.t_cljs$core$async46498 = (function (f,ch,meta46483,_,fn1,meta46499){
this.f = f;
this.ch = ch;
this.meta46483 = meta46483;
this._ = _;
this.fn1 = fn1;
this.meta46499 = meta46499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46500,meta46499__$1){
var self__ = this;
var _46500__$1 = this;
return (new cljs.core.async.t_cljs$core$async46498(self__.f,self__.ch,self__.meta46483,self__._,self__.fn1,meta46499__$1));
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46500){
var self__ = this;
var _46500__$1 = this;
return self__.meta46499;
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46481_SHARP_){
var G__46531 = (((p1__46481_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46481_SHARP_) : self__.f.call(null,p1__46481_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46531) : f1.call(null,G__46531));
});
}));

(cljs.core.async.t_cljs$core$async46498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46483","meta46483",-127553495,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46482","cljs.core.async/t_cljs$core$async46482",459341758,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46499","meta46499",1931458690,null)], null);
}));

(cljs.core.async.t_cljs$core$async46498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46498");

(cljs.core.async.t_cljs$core$async46498.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46498.
 */
cljs.core.async.__GT_t_cljs$core$async46498 = (function cljs$core$async$__GT_t_cljs$core$async46498(f,ch,meta46483,_,fn1,meta46499){
return (new cljs.core.async.t_cljs$core$async46498(f,ch,meta46483,_,fn1,meta46499));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46482 = (function (f,ch,meta46483){
this.f = f;
this.ch = ch;
this.meta46483 = meta46483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46484,meta46483__$1){
var self__ = this;
var _46484__$1 = this;
return (new cljs.core.async.t_cljs$core$async46482(self__.f,self__.ch,meta46483__$1));
}));

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46484){
var self__ = this;
var _46484__$1 = this;
return self__.meta46483;
}));

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async46498(self__.f,self__.ch,self__.meta46483,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46540 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46540) : self__.f.call(null,G__46540));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46483","meta46483",-127553495,null)], null);
}));

(cljs.core.async.t_cljs$core$async46482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46482");

(cljs.core.async.t_cljs$core$async46482.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46482.
 */
cljs.core.async.__GT_t_cljs$core$async46482 = (function cljs$core$async$__GT_t_cljs$core$async46482(f,ch,meta46483){
return (new cljs.core.async.t_cljs$core$async46482(f,ch,meta46483));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async46482(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46558 = (function (f,ch,meta46559){
this.f = f;
this.ch = ch;
this.meta46559 = meta46559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46560,meta46559__$1){
var self__ = this;
var _46560__$1 = this;
return (new cljs.core.async.t_cljs$core$async46558(self__.f,self__.ch,meta46559__$1));
}));

(cljs.core.async.t_cljs$core$async46558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46560){
var self__ = this;
var _46560__$1 = this;
return self__.meta46559;
}));

(cljs.core.async.t_cljs$core$async46558.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46558.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46558.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46559","meta46559",1564687078,null)], null);
}));

(cljs.core.async.t_cljs$core$async46558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46558");

(cljs.core.async.t_cljs$core$async46558.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46558.
 */
cljs.core.async.__GT_t_cljs$core$async46558 = (function cljs$core$async$__GT_t_cljs$core$async46558(f,ch,meta46559){
return (new cljs.core.async.t_cljs$core$async46558(f,ch,meta46559));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async46558(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46596 = (function (p,ch,meta46597){
this.p = p;
this.ch = ch;
this.meta46597 = meta46597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46598,meta46597__$1){
var self__ = this;
var _46598__$1 = this;
return (new cljs.core.async.t_cljs$core$async46596(self__.p,self__.ch,meta46597__$1));
}));

(cljs.core.async.t_cljs$core$async46596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46598){
var self__ = this;
var _46598__$1 = this;
return self__.meta46597;
}));

(cljs.core.async.t_cljs$core$async46596.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46596.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46596.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46596.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46597","meta46597",-704894001,null)], null);
}));

(cljs.core.async.t_cljs$core$async46596.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46596");

(cljs.core.async.t_cljs$core$async46596.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46596");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46596.
 */
cljs.core.async.__GT_t_cljs$core$async46596 = (function cljs$core$async$__GT_t_cljs$core$async46596(p,ch,meta46597){
return (new cljs.core.async.t_cljs$core$async46596(p,ch,meta46597));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async46596(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46627 = arguments.length;
switch (G__46627) {
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
var c__44082__auto___47991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_46661){
var state_val_46662 = (state_46661[(1)]);
if((state_val_46662 === (7))){
var inst_46657 = (state_46661[(2)]);
var state_46661__$1 = state_46661;
var statearr_46663_47992 = state_46661__$1;
(statearr_46663_47992[(2)] = inst_46657);

(statearr_46663_47992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (1))){
var state_46661__$1 = state_46661;
var statearr_46664_47993 = state_46661__$1;
(statearr_46664_47993[(2)] = null);

(statearr_46664_47993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (4))){
var inst_46642 = (state_46661[(7)]);
var inst_46642__$1 = (state_46661[(2)]);
var inst_46643 = (inst_46642__$1 == null);
var state_46661__$1 = (function (){var statearr_46665 = state_46661;
(statearr_46665[(7)] = inst_46642__$1);

return statearr_46665;
})();
if(cljs.core.truth_(inst_46643)){
var statearr_46666_47994 = state_46661__$1;
(statearr_46666_47994[(1)] = (5));

} else {
var statearr_46667_47995 = state_46661__$1;
(statearr_46667_47995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (6))){
var inst_46642 = (state_46661[(7)]);
var inst_46648 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46642) : p.call(null,inst_46642));
var state_46661__$1 = state_46661;
if(cljs.core.truth_(inst_46648)){
var statearr_46668_47997 = state_46661__$1;
(statearr_46668_47997[(1)] = (8));

} else {
var statearr_46669_47998 = state_46661__$1;
(statearr_46669_47998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (3))){
var inst_46659 = (state_46661[(2)]);
var state_46661__$1 = state_46661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46661__$1,inst_46659);
} else {
if((state_val_46662 === (2))){
var state_46661__$1 = state_46661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46661__$1,(4),ch);
} else {
if((state_val_46662 === (11))){
var inst_46651 = (state_46661[(2)]);
var state_46661__$1 = state_46661;
var statearr_46671_48002 = state_46661__$1;
(statearr_46671_48002[(2)] = inst_46651);

(statearr_46671_48002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (9))){
var state_46661__$1 = state_46661;
var statearr_46674_48003 = state_46661__$1;
(statearr_46674_48003[(2)] = null);

(statearr_46674_48003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (5))){
var inst_46646 = cljs.core.async.close_BANG_(out);
var state_46661__$1 = state_46661;
var statearr_46675_48004 = state_46661__$1;
(statearr_46675_48004[(2)] = inst_46646);

(statearr_46675_48004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (10))){
var inst_46654 = (state_46661[(2)]);
var state_46661__$1 = (function (){var statearr_46676 = state_46661;
(statearr_46676[(8)] = inst_46654);

return statearr_46676;
})();
var statearr_46677_48013 = state_46661__$1;
(statearr_46677_48013[(2)] = null);

(statearr_46677_48013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46662 === (8))){
var inst_46642 = (state_46661[(7)]);
var state_46661__$1 = state_46661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46661__$1,(11),out,inst_46642);
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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_46681 = [null,null,null,null,null,null,null,null,null];
(statearr_46681[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_46681[(1)] = (1));

return statearr_46681;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_46661){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_46661);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e46682){var ex__43752__auto__ = e46682;
var statearr_46683_48018 = state_46661;
(statearr_46683_48018[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_46661[(4)]))){
var statearr_46684_48019 = state_46661;
(statearr_46684_48019[(1)] = cljs.core.first((state_46661[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48020 = state_46661;
state_46661 = G__48020;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_46661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_46661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_46693 = f__44083__auto__();
(statearr_46693[(6)] = c__44082__auto___47991);

return statearr_46693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46698 = arguments.length;
switch (G__46698) {
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
var c__44082__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_46767){
var state_val_46769 = (state_46767[(1)]);
if((state_val_46769 === (7))){
var inst_46763 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46775_48023 = state_46767__$1;
(statearr_46775_48023[(2)] = inst_46763);

(statearr_46775_48023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (20))){
var inst_46732 = (state_46767[(7)]);
var inst_46743 = (state_46767[(2)]);
var inst_46745 = cljs.core.next(inst_46732);
var inst_46718 = inst_46745;
var inst_46719 = null;
var inst_46720 = (0);
var inst_46721 = (0);
var state_46767__$1 = (function (){var statearr_46776 = state_46767;
(statearr_46776[(8)] = inst_46721);

(statearr_46776[(9)] = inst_46718);

(statearr_46776[(10)] = inst_46719);

(statearr_46776[(11)] = inst_46743);

(statearr_46776[(12)] = inst_46720);

return statearr_46776;
})();
var statearr_46777_48027 = state_46767__$1;
(statearr_46777_48027[(2)] = null);

(statearr_46777_48027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (1))){
var state_46767__$1 = state_46767;
var statearr_46778_48028 = state_46767__$1;
(statearr_46778_48028[(2)] = null);

(statearr_46778_48028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (4))){
var inst_46707 = (state_46767[(13)]);
var inst_46707__$1 = (state_46767[(2)]);
var inst_46708 = (inst_46707__$1 == null);
var state_46767__$1 = (function (){var statearr_46779 = state_46767;
(statearr_46779[(13)] = inst_46707__$1);

return statearr_46779;
})();
if(cljs.core.truth_(inst_46708)){
var statearr_46780_48033 = state_46767__$1;
(statearr_46780_48033[(1)] = (5));

} else {
var statearr_46781_48034 = state_46767__$1;
(statearr_46781_48034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (15))){
var state_46767__$1 = state_46767;
var statearr_46786_48035 = state_46767__$1;
(statearr_46786_48035[(2)] = null);

(statearr_46786_48035[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (21))){
var state_46767__$1 = state_46767;
var statearr_46788_48036 = state_46767__$1;
(statearr_46788_48036[(2)] = null);

(statearr_46788_48036[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (13))){
var inst_46721 = (state_46767[(8)]);
var inst_46718 = (state_46767[(9)]);
var inst_46719 = (state_46767[(10)]);
var inst_46720 = (state_46767[(12)]);
var inst_46728 = (state_46767[(2)]);
var inst_46729 = (inst_46721 + (1));
var tmp46782 = inst_46718;
var tmp46783 = inst_46719;
var tmp46784 = inst_46720;
var inst_46718__$1 = tmp46782;
var inst_46719__$1 = tmp46783;
var inst_46720__$1 = tmp46784;
var inst_46721__$1 = inst_46729;
var state_46767__$1 = (function (){var statearr_46789 = state_46767;
(statearr_46789[(8)] = inst_46721__$1);

(statearr_46789[(14)] = inst_46728);

(statearr_46789[(9)] = inst_46718__$1);

(statearr_46789[(10)] = inst_46719__$1);

(statearr_46789[(12)] = inst_46720__$1);

return statearr_46789;
})();
var statearr_46790_48037 = state_46767__$1;
(statearr_46790_48037[(2)] = null);

(statearr_46790_48037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (22))){
var state_46767__$1 = state_46767;
var statearr_46791_48038 = state_46767__$1;
(statearr_46791_48038[(2)] = null);

(statearr_46791_48038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (6))){
var inst_46707 = (state_46767[(13)]);
var inst_46716 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46707) : f.call(null,inst_46707));
var inst_46717 = cljs.core.seq(inst_46716);
var inst_46718 = inst_46717;
var inst_46719 = null;
var inst_46720 = (0);
var inst_46721 = (0);
var state_46767__$1 = (function (){var statearr_46792 = state_46767;
(statearr_46792[(8)] = inst_46721);

(statearr_46792[(9)] = inst_46718);

(statearr_46792[(10)] = inst_46719);

(statearr_46792[(12)] = inst_46720);

return statearr_46792;
})();
var statearr_46793_48039 = state_46767__$1;
(statearr_46793_48039[(2)] = null);

(statearr_46793_48039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (17))){
var inst_46732 = (state_46767[(7)]);
var inst_46736 = cljs.core.chunk_first(inst_46732);
var inst_46737 = cljs.core.chunk_rest(inst_46732);
var inst_46738 = cljs.core.count(inst_46736);
var inst_46718 = inst_46737;
var inst_46719 = inst_46736;
var inst_46720 = inst_46738;
var inst_46721 = (0);
var state_46767__$1 = (function (){var statearr_46794 = state_46767;
(statearr_46794[(8)] = inst_46721);

(statearr_46794[(9)] = inst_46718);

(statearr_46794[(10)] = inst_46719);

(statearr_46794[(12)] = inst_46720);

return statearr_46794;
})();
var statearr_46795_48047 = state_46767__$1;
(statearr_46795_48047[(2)] = null);

(statearr_46795_48047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (3))){
var inst_46765 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46767__$1,inst_46765);
} else {
if((state_val_46769 === (12))){
var inst_46753 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46798_48049 = state_46767__$1;
(statearr_46798_48049[(2)] = inst_46753);

(statearr_46798_48049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (2))){
var state_46767__$1 = state_46767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46767__$1,(4),in$);
} else {
if((state_val_46769 === (23))){
var inst_46761 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46805_48053 = state_46767__$1;
(statearr_46805_48053[(2)] = inst_46761);

(statearr_46805_48053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (19))){
var inst_46748 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46806_48056 = state_46767__$1;
(statearr_46806_48056[(2)] = inst_46748);

(statearr_46806_48056[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (11))){
var inst_46732 = (state_46767[(7)]);
var inst_46718 = (state_46767[(9)]);
var inst_46732__$1 = cljs.core.seq(inst_46718);
var state_46767__$1 = (function (){var statearr_46807 = state_46767;
(statearr_46807[(7)] = inst_46732__$1);

return statearr_46807;
})();
if(inst_46732__$1){
var statearr_46808_48061 = state_46767__$1;
(statearr_46808_48061[(1)] = (14));

} else {
var statearr_46809_48062 = state_46767__$1;
(statearr_46809_48062[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (9))){
var inst_46755 = (state_46767[(2)]);
var inst_46756 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46767__$1 = (function (){var statearr_46810 = state_46767;
(statearr_46810[(15)] = inst_46755);

return statearr_46810;
})();
if(cljs.core.truth_(inst_46756)){
var statearr_46811_48067 = state_46767__$1;
(statearr_46811_48067[(1)] = (21));

} else {
var statearr_46812_48068 = state_46767__$1;
(statearr_46812_48068[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (5))){
var inst_46710 = cljs.core.async.close_BANG_(out);
var state_46767__$1 = state_46767;
var statearr_46813_48069 = state_46767__$1;
(statearr_46813_48069[(2)] = inst_46710);

(statearr_46813_48069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (14))){
var inst_46732 = (state_46767[(7)]);
var inst_46734 = cljs.core.chunked_seq_QMARK_(inst_46732);
var state_46767__$1 = state_46767;
if(inst_46734){
var statearr_46814_48071 = state_46767__$1;
(statearr_46814_48071[(1)] = (17));

} else {
var statearr_46815_48072 = state_46767__$1;
(statearr_46815_48072[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (16))){
var inst_46751 = (state_46767[(2)]);
var state_46767__$1 = state_46767;
var statearr_46816_48078 = state_46767__$1;
(statearr_46816_48078[(2)] = inst_46751);

(statearr_46816_48078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (10))){
var inst_46721 = (state_46767[(8)]);
var inst_46719 = (state_46767[(10)]);
var inst_46726 = cljs.core._nth(inst_46719,inst_46721);
var state_46767__$1 = state_46767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46767__$1,(13),out,inst_46726);
} else {
if((state_val_46769 === (18))){
var inst_46732 = (state_46767[(7)]);
var inst_46741 = cljs.core.first(inst_46732);
var state_46767__$1 = state_46767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46767__$1,(20),out,inst_46741);
} else {
if((state_val_46769 === (8))){
var inst_46721 = (state_46767[(8)]);
var inst_46720 = (state_46767[(12)]);
var inst_46723 = (inst_46721 < inst_46720);
var inst_46724 = inst_46723;
var state_46767__$1 = state_46767;
if(cljs.core.truth_(inst_46724)){
var statearr_46817_48085 = state_46767__$1;
(statearr_46817_48085[(1)] = (10));

} else {
var statearr_46818_48086 = state_46767__$1;
(statearr_46818_48086[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__43749__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43749__auto____0 = (function (){
var statearr_46819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46819[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43749__auto__);

(statearr_46819[(1)] = (1));

return statearr_46819;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43749__auto____1 = (function (state_46767){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_46767);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e46820){var ex__43752__auto__ = e46820;
var statearr_46821_48092 = state_46767;
(statearr_46821_48092[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_46767[(4)]))){
var statearr_46822_48094 = state_46767;
(statearr_46822_48094[(1)] = cljs.core.first((state_46767[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48095 = state_46767;
state_46767 = G__48095;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43749__auto__ = function(state_46767){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43749__auto____1.call(this,state_46767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43749__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43749__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_46823 = f__44083__auto__();
(statearr_46823[(6)] = c__44082__auto__);

return statearr_46823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));

return c__44082__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46826 = arguments.length;
switch (G__46826) {
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
var G__46832 = arguments.length;
switch (G__46832) {
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
var G__46840 = arguments.length;
switch (G__46840) {
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
var c__44082__auto___48102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_46867){
var state_val_46868 = (state_46867[(1)]);
if((state_val_46868 === (7))){
var inst_46861 = (state_46867[(2)]);
var state_46867__$1 = state_46867;
var statearr_46869_48109 = state_46867__$1;
(statearr_46869_48109[(2)] = inst_46861);

(statearr_46869_48109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (1))){
var inst_46843 = null;
var state_46867__$1 = (function (){var statearr_46870 = state_46867;
(statearr_46870[(7)] = inst_46843);

return statearr_46870;
})();
var statearr_46871_48112 = state_46867__$1;
(statearr_46871_48112[(2)] = null);

(statearr_46871_48112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (4))){
var inst_46846 = (state_46867[(8)]);
var inst_46846__$1 = (state_46867[(2)]);
var inst_46847 = (inst_46846__$1 == null);
var inst_46848 = cljs.core.not(inst_46847);
var state_46867__$1 = (function (){var statearr_46872 = state_46867;
(statearr_46872[(8)] = inst_46846__$1);

return statearr_46872;
})();
if(inst_46848){
var statearr_46873_48113 = state_46867__$1;
(statearr_46873_48113[(1)] = (5));

} else {
var statearr_46874_48114 = state_46867__$1;
(statearr_46874_48114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (6))){
var state_46867__$1 = state_46867;
var statearr_46875_48115 = state_46867__$1;
(statearr_46875_48115[(2)] = null);

(statearr_46875_48115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (3))){
var inst_46863 = (state_46867[(2)]);
var inst_46864 = cljs.core.async.close_BANG_(out);
var state_46867__$1 = (function (){var statearr_46876 = state_46867;
(statearr_46876[(9)] = inst_46863);

return statearr_46876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46867__$1,inst_46864);
} else {
if((state_val_46868 === (2))){
var state_46867__$1 = state_46867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46867__$1,(4),ch);
} else {
if((state_val_46868 === (11))){
var inst_46846 = (state_46867[(8)]);
var inst_46855 = (state_46867[(2)]);
var inst_46843 = inst_46846;
var state_46867__$1 = (function (){var statearr_46877 = state_46867;
(statearr_46877[(7)] = inst_46843);

(statearr_46877[(10)] = inst_46855);

return statearr_46877;
})();
var statearr_46878_48120 = state_46867__$1;
(statearr_46878_48120[(2)] = null);

(statearr_46878_48120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (9))){
var inst_46846 = (state_46867[(8)]);
var state_46867__$1 = state_46867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46867__$1,(11),out,inst_46846);
} else {
if((state_val_46868 === (5))){
var inst_46846 = (state_46867[(8)]);
var inst_46843 = (state_46867[(7)]);
var inst_46850 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46846,inst_46843);
var state_46867__$1 = state_46867;
if(inst_46850){
var statearr_46880_48122 = state_46867__$1;
(statearr_46880_48122[(1)] = (8));

} else {
var statearr_46881_48124 = state_46867__$1;
(statearr_46881_48124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (10))){
var inst_46858 = (state_46867[(2)]);
var state_46867__$1 = state_46867;
var statearr_46882_48125 = state_46867__$1;
(statearr_46882_48125[(2)] = inst_46858);

(statearr_46882_48125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46868 === (8))){
var inst_46843 = (state_46867[(7)]);
var tmp46879 = inst_46843;
var inst_46843__$1 = tmp46879;
var state_46867__$1 = (function (){var statearr_46883 = state_46867;
(statearr_46883[(7)] = inst_46843__$1);

return statearr_46883;
})();
var statearr_46884_48132 = state_46867__$1;
(statearr_46884_48132[(2)] = null);

(statearr_46884_48132[(1)] = (2));


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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_46885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46885[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_46885[(1)] = (1));

return statearr_46885;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_46867){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_46867);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e46886){var ex__43752__auto__ = e46886;
var statearr_46887_48142 = state_46867;
(statearr_46887_48142[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_46867[(4)]))){
var statearr_46888_48143 = state_46867;
(statearr_46888_48143[(1)] = cljs.core.first((state_46867[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48147 = state_46867;
state_46867 = G__48147;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_46867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_46867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_46889 = f__44083__auto__();
(statearr_46889[(6)] = c__44082__auto___48102);

return statearr_46889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46900 = arguments.length;
switch (G__46900) {
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
var c__44082__auto___48164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_46938){
var state_val_46939 = (state_46938[(1)]);
if((state_val_46939 === (7))){
var inst_46934 = (state_46938[(2)]);
var state_46938__$1 = state_46938;
var statearr_46940_48168 = state_46938__$1;
(statearr_46940_48168[(2)] = inst_46934);

(statearr_46940_48168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (1))){
var inst_46901 = (new Array(n));
var inst_46902 = inst_46901;
var inst_46903 = (0);
var state_46938__$1 = (function (){var statearr_46941 = state_46938;
(statearr_46941[(7)] = inst_46902);

(statearr_46941[(8)] = inst_46903);

return statearr_46941;
})();
var statearr_46942_48170 = state_46938__$1;
(statearr_46942_48170[(2)] = null);

(statearr_46942_48170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (4))){
var inst_46906 = (state_46938[(9)]);
var inst_46906__$1 = (state_46938[(2)]);
var inst_46907 = (inst_46906__$1 == null);
var inst_46908 = cljs.core.not(inst_46907);
var state_46938__$1 = (function (){var statearr_46947 = state_46938;
(statearr_46947[(9)] = inst_46906__$1);

return statearr_46947;
})();
if(inst_46908){
var statearr_46948_48175 = state_46938__$1;
(statearr_46948_48175[(1)] = (5));

} else {
var statearr_46949_48177 = state_46938__$1;
(statearr_46949_48177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (15))){
var inst_46928 = (state_46938[(2)]);
var state_46938__$1 = state_46938;
var statearr_46950_48179 = state_46938__$1;
(statearr_46950_48179[(2)] = inst_46928);

(statearr_46950_48179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (13))){
var state_46938__$1 = state_46938;
var statearr_46952_48181 = state_46938__$1;
(statearr_46952_48181[(2)] = null);

(statearr_46952_48181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (6))){
var inst_46903 = (state_46938[(8)]);
var inst_46924 = (inst_46903 > (0));
var state_46938__$1 = state_46938;
if(cljs.core.truth_(inst_46924)){
var statearr_46953_48182 = state_46938__$1;
(statearr_46953_48182[(1)] = (12));

} else {
var statearr_46955_48183 = state_46938__$1;
(statearr_46955_48183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (3))){
var inst_46936 = (state_46938[(2)]);
var state_46938__$1 = state_46938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46938__$1,inst_46936);
} else {
if((state_val_46939 === (12))){
var inst_46902 = (state_46938[(7)]);
var inst_46926 = cljs.core.vec(inst_46902);
var state_46938__$1 = state_46938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46938__$1,(15),out,inst_46926);
} else {
if((state_val_46939 === (2))){
var state_46938__$1 = state_46938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46938__$1,(4),ch);
} else {
if((state_val_46939 === (11))){
var inst_46918 = (state_46938[(2)]);
var inst_46919 = (new Array(n));
var inst_46902 = inst_46919;
var inst_46903 = (0);
var state_46938__$1 = (function (){var statearr_46959 = state_46938;
(statearr_46959[(7)] = inst_46902);

(statearr_46959[(8)] = inst_46903);

(statearr_46959[(10)] = inst_46918);

return statearr_46959;
})();
var statearr_46960_48190 = state_46938__$1;
(statearr_46960_48190[(2)] = null);

(statearr_46960_48190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (9))){
var inst_46902 = (state_46938[(7)]);
var inst_46916 = cljs.core.vec(inst_46902);
var state_46938__$1 = state_46938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46938__$1,(11),out,inst_46916);
} else {
if((state_val_46939 === (5))){
var inst_46902 = (state_46938[(7)]);
var inst_46911 = (state_46938[(11)]);
var inst_46906 = (state_46938[(9)]);
var inst_46903 = (state_46938[(8)]);
var inst_46910 = (inst_46902[inst_46903] = inst_46906);
var inst_46911__$1 = (inst_46903 + (1));
var inst_46912 = (inst_46911__$1 < n);
var state_46938__$1 = (function (){var statearr_46961 = state_46938;
(statearr_46961[(11)] = inst_46911__$1);

(statearr_46961[(12)] = inst_46910);

return statearr_46961;
})();
if(cljs.core.truth_(inst_46912)){
var statearr_46962_48192 = state_46938__$1;
(statearr_46962_48192[(1)] = (8));

} else {
var statearr_46963_48193 = state_46938__$1;
(statearr_46963_48193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (14))){
var inst_46931 = (state_46938[(2)]);
var inst_46932 = cljs.core.async.close_BANG_(out);
var state_46938__$1 = (function (){var statearr_46965 = state_46938;
(statearr_46965[(13)] = inst_46931);

return statearr_46965;
})();
var statearr_46966_48194 = state_46938__$1;
(statearr_46966_48194[(2)] = inst_46932);

(statearr_46966_48194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (10))){
var inst_46922 = (state_46938[(2)]);
var state_46938__$1 = state_46938;
var statearr_46967_48195 = state_46938__$1;
(statearr_46967_48195[(2)] = inst_46922);

(statearr_46967_48195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (8))){
var inst_46902 = (state_46938[(7)]);
var inst_46911 = (state_46938[(11)]);
var tmp46964 = inst_46902;
var inst_46902__$1 = tmp46964;
var inst_46903 = inst_46911;
var state_46938__$1 = (function (){var statearr_46971 = state_46938;
(statearr_46971[(7)] = inst_46902__$1);

(statearr_46971[(8)] = inst_46903);

return statearr_46971;
})();
var statearr_46972_48198 = state_46938__$1;
(statearr_46972_48198[(2)] = null);

(statearr_46972_48198[(1)] = (2));


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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_46973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46973[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_46973[(1)] = (1));

return statearr_46973;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_46938){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_46938);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e46974){var ex__43752__auto__ = e46974;
var statearr_46975_48199 = state_46938;
(statearr_46975_48199[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_46938[(4)]))){
var statearr_46976_48202 = state_46938;
(statearr_46976_48202[(1)] = cljs.core.first((state_46938[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48203 = state_46938;
state_46938 = G__48203;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_46938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_46938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_46978 = f__44083__auto__();
(statearr_46978[(6)] = c__44082__auto___48164);

return statearr_46978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46980 = arguments.length;
switch (G__46980) {
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
var c__44082__auto___48209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44083__auto__ = (function (){var switch__43748__auto__ = (function (state_47025){
var state_val_47026 = (state_47025[(1)]);
if((state_val_47026 === (7))){
var inst_47021 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
var statearr_47029_48210 = state_47025__$1;
(statearr_47029_48210[(2)] = inst_47021);

(statearr_47029_48210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (1))){
var inst_46981 = [];
var inst_46982 = inst_46981;
var inst_46983 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47025__$1 = (function (){var statearr_47030 = state_47025;
(statearr_47030[(7)] = inst_46982);

(statearr_47030[(8)] = inst_46983);

return statearr_47030;
})();
var statearr_47031_48211 = state_47025__$1;
(statearr_47031_48211[(2)] = null);

(statearr_47031_48211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (4))){
var inst_46986 = (state_47025[(9)]);
var inst_46986__$1 = (state_47025[(2)]);
var inst_46987 = (inst_46986__$1 == null);
var inst_46988 = cljs.core.not(inst_46987);
var state_47025__$1 = (function (){var statearr_47032 = state_47025;
(statearr_47032[(9)] = inst_46986__$1);

return statearr_47032;
})();
if(inst_46988){
var statearr_47035_48215 = state_47025__$1;
(statearr_47035_48215[(1)] = (5));

} else {
var statearr_47036_48216 = state_47025__$1;
(statearr_47036_48216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (15))){
var inst_46982 = (state_47025[(7)]);
var inst_47013 = cljs.core.vec(inst_46982);
var state_47025__$1 = state_47025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47025__$1,(18),out,inst_47013);
} else {
if((state_val_47026 === (13))){
var inst_47008 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
var statearr_47037_48217 = state_47025__$1;
(statearr_47037_48217[(2)] = inst_47008);

(statearr_47037_48217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (6))){
var inst_46982 = (state_47025[(7)]);
var inst_47010 = inst_46982.length;
var inst_47011 = (inst_47010 > (0));
var state_47025__$1 = state_47025;
if(cljs.core.truth_(inst_47011)){
var statearr_47039_48221 = state_47025__$1;
(statearr_47039_48221[(1)] = (15));

} else {
var statearr_47041_48222 = state_47025__$1;
(statearr_47041_48222[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (17))){
var inst_47018 = (state_47025[(2)]);
var inst_47019 = cljs.core.async.close_BANG_(out);
var state_47025__$1 = (function (){var statearr_47042 = state_47025;
(statearr_47042[(10)] = inst_47018);

return statearr_47042;
})();
var statearr_47043_48223 = state_47025__$1;
(statearr_47043_48223[(2)] = inst_47019);

(statearr_47043_48223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (3))){
var inst_47023 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47025__$1,inst_47023);
} else {
if((state_val_47026 === (12))){
var inst_46982 = (state_47025[(7)]);
var inst_47001 = cljs.core.vec(inst_46982);
var state_47025__$1 = state_47025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47025__$1,(14),out,inst_47001);
} else {
if((state_val_47026 === (2))){
var state_47025__$1 = state_47025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47025__$1,(4),ch);
} else {
if((state_val_47026 === (11))){
var inst_46990 = (state_47025[(11)]);
var inst_46982 = (state_47025[(7)]);
var inst_46986 = (state_47025[(9)]);
var inst_46998 = inst_46982.push(inst_46986);
var tmp47044 = inst_46982;
var inst_46982__$1 = tmp47044;
var inst_46983 = inst_46990;
var state_47025__$1 = (function (){var statearr_47045 = state_47025;
(statearr_47045[(7)] = inst_46982__$1);

(statearr_47045[(12)] = inst_46998);

(statearr_47045[(8)] = inst_46983);

return statearr_47045;
})();
var statearr_47046_48235 = state_47025__$1;
(statearr_47046_48235[(2)] = null);

(statearr_47046_48235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (9))){
var inst_46983 = (state_47025[(8)]);
var inst_46994 = cljs.core.keyword_identical_QMARK_(inst_46983,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47025__$1 = state_47025;
var statearr_47047_48242 = state_47025__$1;
(statearr_47047_48242[(2)] = inst_46994);

(statearr_47047_48242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (5))){
var inst_46991 = (state_47025[(13)]);
var inst_46990 = (state_47025[(11)]);
var inst_46986 = (state_47025[(9)]);
var inst_46983 = (state_47025[(8)]);
var inst_46990__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46986) : f.call(null,inst_46986));
var inst_46991__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46990__$1,inst_46983);
var state_47025__$1 = (function (){var statearr_47048 = state_47025;
(statearr_47048[(13)] = inst_46991__$1);

(statearr_47048[(11)] = inst_46990__$1);

return statearr_47048;
})();
if(inst_46991__$1){
var statearr_47049_48247 = state_47025__$1;
(statearr_47049_48247[(1)] = (8));

} else {
var statearr_47050_48248 = state_47025__$1;
(statearr_47050_48248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (14))){
var inst_46990 = (state_47025[(11)]);
var inst_46986 = (state_47025[(9)]);
var inst_47003 = (state_47025[(2)]);
var inst_47004 = [];
var inst_47005 = inst_47004.push(inst_46986);
var inst_46982 = inst_47004;
var inst_46983 = inst_46990;
var state_47025__$1 = (function (){var statearr_47051 = state_47025;
(statearr_47051[(14)] = inst_47005);

(statearr_47051[(15)] = inst_47003);

(statearr_47051[(7)] = inst_46982);

(statearr_47051[(8)] = inst_46983);

return statearr_47051;
})();
var statearr_47052_48253 = state_47025__$1;
(statearr_47052_48253[(2)] = null);

(statearr_47052_48253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (16))){
var state_47025__$1 = state_47025;
var statearr_47054_48254 = state_47025__$1;
(statearr_47054_48254[(2)] = null);

(statearr_47054_48254[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (10))){
var inst_46996 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
if(cljs.core.truth_(inst_46996)){
var statearr_47056_48255 = state_47025__$1;
(statearr_47056_48255[(1)] = (11));

} else {
var statearr_47057_48256 = state_47025__$1;
(statearr_47057_48256[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (18))){
var inst_47015 = (state_47025[(2)]);
var state_47025__$1 = state_47025;
var statearr_47058_48260 = state_47025__$1;
(statearr_47058_48260[(2)] = inst_47015);

(statearr_47058_48260[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47026 === (8))){
var inst_46991 = (state_47025[(13)]);
var state_47025__$1 = state_47025;
var statearr_47060_48261 = state_47025__$1;
(statearr_47060_48261[(2)] = inst_46991);

(statearr_47060_48261[(1)] = (10));


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
var cljs$core$async$state_machine__43749__auto__ = null;
var cljs$core$async$state_machine__43749__auto____0 = (function (){
var statearr_47062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47062[(0)] = cljs$core$async$state_machine__43749__auto__);

(statearr_47062[(1)] = (1));

return statearr_47062;
});
var cljs$core$async$state_machine__43749__auto____1 = (function (state_47025){
while(true){
var ret_value__43750__auto__ = (function (){try{while(true){
var result__43751__auto__ = switch__43748__auto__(state_47025);
if(cljs.core.keyword_identical_QMARK_(result__43751__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43751__auto__;
}
break;
}
}catch (e47063){var ex__43752__auto__ = e47063;
var statearr_47064_48266 = state_47025;
(statearr_47064_48266[(2)] = ex__43752__auto__);


if(cljs.core.seq((state_47025[(4)]))){
var statearr_47065_48269 = state_47025;
(statearr_47065_48269[(1)] = cljs.core.first((state_47025[(4)])));

} else {
throw ex__43752__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43750__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48273 = state_47025;
state_47025 = G__48273;
continue;
} else {
return ret_value__43750__auto__;
}
break;
}
});
cljs$core$async$state_machine__43749__auto__ = function(state_47025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43749__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43749__auto____1.call(this,state_47025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43749__auto____0;
cljs$core$async$state_machine__43749__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43749__auto____1;
return cljs$core$async$state_machine__43749__auto__;
})()
})();
var state__44084__auto__ = (function (){var statearr_47066 = f__44083__auto__();
(statearr_47066[(6)] = c__44082__auto___48209);

return statearr_47066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44084__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
