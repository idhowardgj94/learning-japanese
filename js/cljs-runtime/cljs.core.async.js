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
cljs.core.async.t_cljs$core$async45382 = (function (f,blockable,meta45383){
this.f = f;
this.blockable = blockable;
this.meta45383 = meta45383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45384,meta45383__$1){
var self__ = this;
var _45384__$1 = this;
return (new cljs.core.async.t_cljs$core$async45382(self__.f,self__.blockable,meta45383__$1));
}));

(cljs.core.async.t_cljs$core$async45382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45384){
var self__ = this;
var _45384__$1 = this;
return self__.meta45383;
}));

(cljs.core.async.t_cljs$core$async45382.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45382.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45383","meta45383",1131909547,null)], null);
}));

(cljs.core.async.t_cljs$core$async45382.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45382");

(cljs.core.async.t_cljs$core$async45382.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45382");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45382.
 */
cljs.core.async.__GT_t_cljs$core$async45382 = (function cljs$core$async$__GT_t_cljs$core$async45382(f,blockable,meta45383){
return (new cljs.core.async.t_cljs$core$async45382(f,blockable,meta45383));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45381 = arguments.length;
switch (G__45381) {
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
return (new cljs.core.async.t_cljs$core$async45382(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45391 = arguments.length;
switch (G__45391) {
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
var G__45406 = arguments.length;
switch (G__45406) {
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
var G__45419 = arguments.length;
switch (G__45419) {
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
var val_47517 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47517) : fn1.call(null,val_47517));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47517) : fn1.call(null,val_47517));
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
var G__45426 = arguments.length;
switch (G__45426) {
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
var n__5636__auto___47521 = n;
var x_47522 = (0);
while(true){
if((x_47522 < n__5636__auto___47521)){
(a[x_47522] = x_47522);

var G__47523 = (x_47522 + (1));
x_47522 = G__47523;
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
cljs.core.async.t_cljs$core$async45430 = (function (flag,meta45431){
this.flag = flag;
this.meta45431 = meta45431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45432,meta45431__$1){
var self__ = this;
var _45432__$1 = this;
return (new cljs.core.async.t_cljs$core$async45430(self__.flag,meta45431__$1));
}));

(cljs.core.async.t_cljs$core$async45430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45432){
var self__ = this;
var _45432__$1 = this;
return self__.meta45431;
}));

(cljs.core.async.t_cljs$core$async45430.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45430.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45431","meta45431",-29959438,null)], null);
}));

(cljs.core.async.t_cljs$core$async45430.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45430");

(cljs.core.async.t_cljs$core$async45430.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45430");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45430.
 */
cljs.core.async.__GT_t_cljs$core$async45430 = (function cljs$core$async$__GT_t_cljs$core$async45430(flag,meta45431){
return (new cljs.core.async.t_cljs$core$async45430(flag,meta45431));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async45430(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45434 = (function (flag,cb,meta45435){
this.flag = flag;
this.cb = cb;
this.meta45435 = meta45435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45436,meta45435__$1){
var self__ = this;
var _45436__$1 = this;
return (new cljs.core.async.t_cljs$core$async45434(self__.flag,self__.cb,meta45435__$1));
}));

(cljs.core.async.t_cljs$core$async45434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45436){
var self__ = this;
var _45436__$1 = this;
return self__.meta45435;
}));

(cljs.core.async.t_cljs$core$async45434.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45434.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45435","meta45435",747730994,null)], null);
}));

(cljs.core.async.t_cljs$core$async45434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45434");

(cljs.core.async.t_cljs$core$async45434.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45434.
 */
cljs.core.async.__GT_t_cljs$core$async45434 = (function cljs$core$async$__GT_t_cljs$core$async45434(flag,cb,meta45435){
return (new cljs.core.async.t_cljs$core$async45434(flag,cb,meta45435));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async45434(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__45437_SHARP_){
var G__45440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45437_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45440) : fret.call(null,G__45440));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45438_SHARP_){
var G__45443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45438_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45443) : fret.call(null,G__45443));
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
var G__47524 = (i + (1));
i = G__47524;
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
var len__5769__auto___47525 = arguments.length;
var i__5770__auto___47526 = (0);
while(true){
if((i__5770__auto___47526 < len__5769__auto___47525)){
args__5775__auto__.push((arguments[i__5770__auto___47526]));

var G__47527 = (i__5770__auto___47526 + (1));
i__5770__auto___47526 = G__47527;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45454){
var map__45455 = p__45454;
var map__45455__$1 = cljs.core.__destructure_map(map__45455);
var opts = map__45455__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45449){
var G__45450 = cljs.core.first(seq45449);
var seq45449__$1 = cljs.core.next(seq45449);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45450,seq45449__$1);
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
var G__45490 = arguments.length;
switch (G__45490) {
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
var c__45315__auto___47530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_45596){
var state_val_45599 = (state_45596[(1)]);
if((state_val_45599 === (7))){
var inst_45555 = (state_45596[(2)]);
var state_45596__$1 = state_45596;
var statearr_45622_47531 = state_45596__$1;
(statearr_45622_47531[(2)] = inst_45555);

(statearr_45622_47531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (1))){
var state_45596__$1 = state_45596;
var statearr_45623_47532 = state_45596__$1;
(statearr_45623_47532[(2)] = null);

(statearr_45623_47532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (4))){
var inst_45508 = (state_45596[(7)]);
var inst_45508__$1 = (state_45596[(2)]);
var inst_45519 = (inst_45508__$1 == null);
var state_45596__$1 = (function (){var statearr_45628 = state_45596;
(statearr_45628[(7)] = inst_45508__$1);

return statearr_45628;
})();
if(cljs.core.truth_(inst_45519)){
var statearr_45629_47534 = state_45596__$1;
(statearr_45629_47534[(1)] = (5));

} else {
var statearr_45630_47535 = state_45596__$1;
(statearr_45630_47535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (13))){
var state_45596__$1 = state_45596;
var statearr_45645_47537 = state_45596__$1;
(statearr_45645_47537[(2)] = null);

(statearr_45645_47537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (6))){
var inst_45508 = (state_45596[(7)]);
var state_45596__$1 = state_45596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45596__$1,(11),to,inst_45508);
} else {
if((state_val_45599 === (3))){
var inst_45573 = (state_45596[(2)]);
var state_45596__$1 = state_45596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45596__$1,inst_45573);
} else {
if((state_val_45599 === (12))){
var state_45596__$1 = state_45596;
var statearr_45656_47538 = state_45596__$1;
(statearr_45656_47538[(2)] = null);

(statearr_45656_47538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (2))){
var state_45596__$1 = state_45596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45596__$1,(4),from);
} else {
if((state_val_45599 === (11))){
var inst_45543 = (state_45596[(2)]);
var state_45596__$1 = state_45596;
if(cljs.core.truth_(inst_45543)){
var statearr_45657_47539 = state_45596__$1;
(statearr_45657_47539[(1)] = (12));

} else {
var statearr_45658_47540 = state_45596__$1;
(statearr_45658_47540[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (9))){
var state_45596__$1 = state_45596;
var statearr_45664_47541 = state_45596__$1;
(statearr_45664_47541[(2)] = null);

(statearr_45664_47541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (5))){
var state_45596__$1 = state_45596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45665_47542 = state_45596__$1;
(statearr_45665_47542[(1)] = (8));

} else {
var statearr_45666_47543 = state_45596__$1;
(statearr_45666_47543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (14))){
var inst_45552 = (state_45596[(2)]);
var state_45596__$1 = state_45596;
var statearr_45667_47544 = state_45596__$1;
(statearr_45667_47544[(2)] = inst_45552);

(statearr_45667_47544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (10))){
var inst_45540 = (state_45596[(2)]);
var state_45596__$1 = state_45596;
var statearr_45668_47546 = state_45596__$1;
(statearr_45668_47546[(2)] = inst_45540);

(statearr_45668_47546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (8))){
var inst_45535 = cljs.core.async.close_BANG_(to);
var state_45596__$1 = state_45596;
var statearr_45669_47548 = state_45596__$1;
(statearr_45669_47548[(2)] = inst_45535);

(statearr_45669_47548[(1)] = (10));


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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_45677 = [null,null,null,null,null,null,null,null];
(statearr_45677[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_45677[(1)] = (1));

return statearr_45677;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_45596){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_45596);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e45678){var ex__45170__auto__ = e45678;
var statearr_45679_47549 = state_45596;
(statearr_45679_47549[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_45596[(4)]))){
var statearr_45680_47550 = state_45596;
(statearr_45680_47550[(1)] = cljs.core.first((state_45596[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47551 = state_45596;
state_45596 = G__47551;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_45596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_45596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_45682 = f__45316__auto__();
(statearr_45682[(6)] = c__45315__auto___47530);

return statearr_45682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
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
var process__$1 = (function (p__45685){
var vec__45686 = p__45685;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45686,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45686,(1),null);
var job = vec__45686;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45315__auto___47554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_45696){
var state_val_45697 = (state_45696[(1)]);
if((state_val_45697 === (1))){
var state_45696__$1 = state_45696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45696__$1,(2),res,v);
} else {
if((state_val_45697 === (2))){
var inst_45693 = (state_45696[(2)]);
var inst_45694 = cljs.core.async.close_BANG_(res);
var state_45696__$1 = (function (){var statearr_45703 = state_45696;
(statearr_45703[(7)] = inst_45693);

return statearr_45703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45696__$1,inst_45694);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0 = (function (){
var statearr_45708 = [null,null,null,null,null,null,null,null];
(statearr_45708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__);

(statearr_45708[(1)] = (1));

return statearr_45708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1 = (function (state_45696){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_45696);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e45710){var ex__45170__auto__ = e45710;
var statearr_45711_47555 = state_45696;
(statearr_45711_47555[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_45696[(4)]))){
var statearr_45712_47556 = state_45696;
(statearr_45712_47556[(1)] = cljs.core.first((state_45696[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47557 = state_45696;
state_45696 = G__47557;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__ = function(state_45696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1.call(this,state_45696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_45726 = f__45316__auto__();
(statearr_45726[(6)] = c__45315__auto___47554);

return statearr_45726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45737){
var vec__45738 = p__45737;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45738,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45738,(1),null);
var job = vec__45738;
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
var n__5636__auto___47559 = n;
var __47560 = (0);
while(true){
if((__47560 < n__5636__auto___47559)){
var G__45744_47562 = type;
var G__45744_47563__$1 = (((G__45744_47562 instanceof cljs.core.Keyword))?G__45744_47562.fqn:null);
switch (G__45744_47563__$1) {
case "compute":
var c__45315__auto___47565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47560,c__45315__auto___47565,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async){
return (function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = ((function (__47560,c__45315__auto___47565,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async){
return (function (state_45758){
var state_val_45759 = (state_45758[(1)]);
if((state_val_45759 === (1))){
var state_45758__$1 = state_45758;
var statearr_45763_47566 = state_45758__$1;
(statearr_45763_47566[(2)] = null);

(statearr_45763_47566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (2))){
var state_45758__$1 = state_45758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45758__$1,(4),jobs);
} else {
if((state_val_45759 === (3))){
var inst_45756 = (state_45758[(2)]);
var state_45758__$1 = state_45758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45758__$1,inst_45756);
} else {
if((state_val_45759 === (4))){
var inst_45748 = (state_45758[(2)]);
var inst_45749 = process__$1(inst_45748);
var state_45758__$1 = state_45758;
if(cljs.core.truth_(inst_45749)){
var statearr_45766_47567 = state_45758__$1;
(statearr_45766_47567[(1)] = (5));

} else {
var statearr_45767_47568 = state_45758__$1;
(statearr_45767_47568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (5))){
var state_45758__$1 = state_45758;
var statearr_45768_47569 = state_45758__$1;
(statearr_45768_47569[(2)] = null);

(statearr_45768_47569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (6))){
var state_45758__$1 = state_45758;
var statearr_45769_47570 = state_45758__$1;
(statearr_45769_47570[(2)] = null);

(statearr_45769_47570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (7))){
var inst_45754 = (state_45758[(2)]);
var state_45758__$1 = state_45758;
var statearr_45770_47571 = state_45758__$1;
(statearr_45770_47571[(2)] = inst_45754);

(statearr_45770_47571[(1)] = (3));


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
});})(__47560,c__45315__auto___47565,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async))
;
return ((function (__47560,switch__45166__auto__,c__45315__auto___47565,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0 = (function (){
var statearr_45771 = [null,null,null,null,null,null,null];
(statearr_45771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__);

(statearr_45771[(1)] = (1));

return statearr_45771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1 = (function (state_45758){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_45758);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e45772){var ex__45170__auto__ = e45772;
var statearr_45774_47572 = state_45758;
(statearr_45774_47572[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_45758[(4)]))){
var statearr_45775_47574 = state_45758;
(statearr_45775_47574[(1)] = cljs.core.first((state_45758[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47575 = state_45758;
state_45758 = G__47575;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__ = function(state_45758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1.call(this,state_45758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__;
})()
;})(__47560,switch__45166__auto__,c__45315__auto___47565,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async))
})();
var state__45317__auto__ = (function (){var statearr_45779 = f__45316__auto__();
(statearr_45779[(6)] = c__45315__auto___47565);

return statearr_45779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
});})(__47560,c__45315__auto___47565,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async))
);


break;
case "async":
var c__45315__auto___47577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47560,c__45315__auto___47577,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async){
return (function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = ((function (__47560,c__45315__auto___47577,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async){
return (function (state_45812){
var state_val_45813 = (state_45812[(1)]);
if((state_val_45813 === (1))){
var state_45812__$1 = state_45812;
var statearr_45814_47578 = state_45812__$1;
(statearr_45814_47578[(2)] = null);

(statearr_45814_47578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45813 === (2))){
var state_45812__$1 = state_45812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45812__$1,(4),jobs);
} else {
if((state_val_45813 === (3))){
var inst_45810 = (state_45812[(2)]);
var state_45812__$1 = state_45812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45812__$1,inst_45810);
} else {
if((state_val_45813 === (4))){
var inst_45794 = (state_45812[(2)]);
var inst_45795 = async(inst_45794);
var state_45812__$1 = state_45812;
if(cljs.core.truth_(inst_45795)){
var statearr_45816_47579 = state_45812__$1;
(statearr_45816_47579[(1)] = (5));

} else {
var statearr_45821_47580 = state_45812__$1;
(statearr_45821_47580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45813 === (5))){
var state_45812__$1 = state_45812;
var statearr_45822_47581 = state_45812__$1;
(statearr_45822_47581[(2)] = null);

(statearr_45822_47581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45813 === (6))){
var state_45812__$1 = state_45812;
var statearr_45827_47582 = state_45812__$1;
(statearr_45827_47582[(2)] = null);

(statearr_45827_47582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45813 === (7))){
var inst_45808 = (state_45812[(2)]);
var state_45812__$1 = state_45812;
var statearr_45828_47583 = state_45812__$1;
(statearr_45828_47583[(2)] = inst_45808);

(statearr_45828_47583[(1)] = (3));


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
});})(__47560,c__45315__auto___47577,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async))
;
return ((function (__47560,switch__45166__auto__,c__45315__auto___47577,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0 = (function (){
var statearr_45829 = [null,null,null,null,null,null,null];
(statearr_45829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__);

(statearr_45829[(1)] = (1));

return statearr_45829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1 = (function (state_45812){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_45812);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e45830){var ex__45170__auto__ = e45830;
var statearr_45831_47584 = state_45812;
(statearr_45831_47584[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_45812[(4)]))){
var statearr_45832_47585 = state_45812;
(statearr_45832_47585[(1)] = cljs.core.first((state_45812[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47586 = state_45812;
state_45812 = G__47586;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__ = function(state_45812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1.call(this,state_45812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__;
})()
;})(__47560,switch__45166__auto__,c__45315__auto___47577,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async))
})();
var state__45317__auto__ = (function (){var statearr_45843 = f__45316__auto__();
(statearr_45843[(6)] = c__45315__auto___47577);

return statearr_45843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
});})(__47560,c__45315__auto___47577,G__45744_47562,G__45744_47563__$1,n__5636__auto___47559,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45744_47563__$1)].join('')));

}

var G__47587 = (__47560 + (1));
__47560 = G__47587;
continue;
} else {
}
break;
}

var c__45315__auto___47588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_45878){
var state_val_45879 = (state_45878[(1)]);
if((state_val_45879 === (7))){
var inst_45874 = (state_45878[(2)]);
var state_45878__$1 = state_45878;
var statearr_45885_47590 = state_45878__$1;
(statearr_45885_47590[(2)] = inst_45874);

(statearr_45885_47590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (1))){
var state_45878__$1 = state_45878;
var statearr_45886_47592 = state_45878__$1;
(statearr_45886_47592[(2)] = null);

(statearr_45886_47592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (4))){
var inst_45851 = (state_45878[(7)]);
var inst_45851__$1 = (state_45878[(2)]);
var inst_45852 = (inst_45851__$1 == null);
var state_45878__$1 = (function (){var statearr_45887 = state_45878;
(statearr_45887[(7)] = inst_45851__$1);

return statearr_45887;
})();
if(cljs.core.truth_(inst_45852)){
var statearr_45888_47593 = state_45878__$1;
(statearr_45888_47593[(1)] = (5));

} else {
var statearr_45889_47594 = state_45878__$1;
(statearr_45889_47594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (6))){
var inst_45860 = (state_45878[(8)]);
var inst_45851 = (state_45878[(7)]);
var inst_45860__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45866 = [inst_45851,inst_45860__$1];
var inst_45867 = (new cljs.core.PersistentVector(null,2,(5),inst_45864,inst_45866,null));
var state_45878__$1 = (function (){var statearr_45899 = state_45878;
(statearr_45899[(8)] = inst_45860__$1);

return statearr_45899;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45878__$1,(8),jobs,inst_45867);
} else {
if((state_val_45879 === (3))){
var inst_45876 = (state_45878[(2)]);
var state_45878__$1 = state_45878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45878__$1,inst_45876);
} else {
if((state_val_45879 === (2))){
var state_45878__$1 = state_45878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45878__$1,(4),from);
} else {
if((state_val_45879 === (9))){
var inst_45871 = (state_45878[(2)]);
var state_45878__$1 = (function (){var statearr_45913 = state_45878;
(statearr_45913[(9)] = inst_45871);

return statearr_45913;
})();
var statearr_45914_47595 = state_45878__$1;
(statearr_45914_47595[(2)] = null);

(statearr_45914_47595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (5))){
var inst_45854 = cljs.core.async.close_BANG_(jobs);
var state_45878__$1 = state_45878;
var statearr_45919_47596 = state_45878__$1;
(statearr_45919_47596[(2)] = inst_45854);

(statearr_45919_47596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (8))){
var inst_45860 = (state_45878[(8)]);
var inst_45869 = (state_45878[(2)]);
var state_45878__$1 = (function (){var statearr_45931 = state_45878;
(statearr_45931[(10)] = inst_45869);

return statearr_45931;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45878__$1,(9),results,inst_45860);
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
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0 = (function (){
var statearr_45943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45943[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__);

(statearr_45943[(1)] = (1));

return statearr_45943;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1 = (function (state_45878){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_45878);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e45951){var ex__45170__auto__ = e45951;
var statearr_45952_47597 = state_45878;
(statearr_45952_47597[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_45878[(4)]))){
var statearr_45957_47598 = state_45878;
(statearr_45957_47598[(1)] = cljs.core.first((state_45878[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47600 = state_45878;
state_45878 = G__47600;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__ = function(state_45878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1.call(this,state_45878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_45968 = f__45316__auto__();
(statearr_45968[(6)] = c__45315__auto___47588);

return statearr_45968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));


var c__45315__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_46018){
var state_val_46019 = (state_46018[(1)]);
if((state_val_46019 === (7))){
var inst_46014 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46020_47601 = state_46018__$1;
(statearr_46020_47601[(2)] = inst_46014);

(statearr_46020_47601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (20))){
var state_46018__$1 = state_46018;
var statearr_46021_47602 = state_46018__$1;
(statearr_46021_47602[(2)] = null);

(statearr_46021_47602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (1))){
var state_46018__$1 = state_46018;
var statearr_46022_47603 = state_46018__$1;
(statearr_46022_47603[(2)] = null);

(statearr_46022_47603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (4))){
var inst_45981 = (state_46018[(7)]);
var inst_45981__$1 = (state_46018[(2)]);
var inst_45982 = (inst_45981__$1 == null);
var state_46018__$1 = (function (){var statearr_46024 = state_46018;
(statearr_46024[(7)] = inst_45981__$1);

return statearr_46024;
})();
if(cljs.core.truth_(inst_45982)){
var statearr_46025_47604 = state_46018__$1;
(statearr_46025_47604[(1)] = (5));

} else {
var statearr_46026_47605 = state_46018__$1;
(statearr_46026_47605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (15))){
var inst_45994 = (state_46018[(8)]);
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46018__$1,(18),to,inst_45994);
} else {
if((state_val_46019 === (21))){
var inst_46009 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46028_47606 = state_46018__$1;
(statearr_46028_47606[(2)] = inst_46009);

(statearr_46028_47606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (13))){
var inst_46011 = (state_46018[(2)]);
var state_46018__$1 = (function (){var statearr_46032 = state_46018;
(statearr_46032[(9)] = inst_46011);

return statearr_46032;
})();
var statearr_46033_47607 = state_46018__$1;
(statearr_46033_47607[(2)] = null);

(statearr_46033_47607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (6))){
var inst_45981 = (state_46018[(7)]);
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46018__$1,(11),inst_45981);
} else {
if((state_val_46019 === (17))){
var inst_46004 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
if(cljs.core.truth_(inst_46004)){
var statearr_46034_47608 = state_46018__$1;
(statearr_46034_47608[(1)] = (19));

} else {
var statearr_46035_47609 = state_46018__$1;
(statearr_46035_47609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (3))){
var inst_46016 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46018__$1,inst_46016);
} else {
if((state_val_46019 === (12))){
var inst_45991 = (state_46018[(10)]);
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46018__$1,(14),inst_45991);
} else {
if((state_val_46019 === (2))){
var state_46018__$1 = state_46018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46018__$1,(4),results);
} else {
if((state_val_46019 === (19))){
var state_46018__$1 = state_46018;
var statearr_46036_47614 = state_46018__$1;
(statearr_46036_47614[(2)] = null);

(statearr_46036_47614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (11))){
var inst_45991 = (state_46018[(2)]);
var state_46018__$1 = (function (){var statearr_46037 = state_46018;
(statearr_46037[(10)] = inst_45991);

return statearr_46037;
})();
var statearr_46038_47615 = state_46018__$1;
(statearr_46038_47615[(2)] = null);

(statearr_46038_47615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (9))){
var state_46018__$1 = state_46018;
var statearr_46039_47616 = state_46018__$1;
(statearr_46039_47616[(2)] = null);

(statearr_46039_47616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (5))){
var state_46018__$1 = state_46018;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46041_47617 = state_46018__$1;
(statearr_46041_47617[(1)] = (8));

} else {
var statearr_46042_47618 = state_46018__$1;
(statearr_46042_47618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (14))){
var inst_45994 = (state_46018[(8)]);
var inst_45996 = (state_46018[(11)]);
var inst_45994__$1 = (state_46018[(2)]);
var inst_45995 = (inst_45994__$1 == null);
var inst_45996__$1 = cljs.core.not(inst_45995);
var state_46018__$1 = (function (){var statearr_46048 = state_46018;
(statearr_46048[(8)] = inst_45994__$1);

(statearr_46048[(11)] = inst_45996__$1);

return statearr_46048;
})();
if(inst_45996__$1){
var statearr_46049_47619 = state_46018__$1;
(statearr_46049_47619[(1)] = (15));

} else {
var statearr_46050_47620 = state_46018__$1;
(statearr_46050_47620[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (16))){
var inst_45996 = (state_46018[(11)]);
var state_46018__$1 = state_46018;
var statearr_46051_47621 = state_46018__$1;
(statearr_46051_47621[(2)] = inst_45996);

(statearr_46051_47621[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (10))){
var inst_45988 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46056_47622 = state_46018__$1;
(statearr_46056_47622[(2)] = inst_45988);

(statearr_46056_47622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (18))){
var inst_46001 = (state_46018[(2)]);
var state_46018__$1 = state_46018;
var statearr_46057_47623 = state_46018__$1;
(statearr_46057_47623[(2)] = inst_46001);

(statearr_46057_47623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46019 === (8))){
var inst_45985 = cljs.core.async.close_BANG_(to);
var state_46018__$1 = state_46018;
var statearr_46058_47624 = state_46018__$1;
(statearr_46058_47624[(2)] = inst_45985);

(statearr_46058_47624[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0 = (function (){
var statearr_46061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__);

(statearr_46061[(1)] = (1));

return statearr_46061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1 = (function (state_46018){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_46018);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e46063){var ex__45170__auto__ = e46063;
var statearr_46064_47625 = state_46018;
(statearr_46064_47625[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_46018[(4)]))){
var statearr_46065_47626 = state_46018;
(statearr_46065_47626[(1)] = cljs.core.first((state_46018[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47627 = state_46018;
state_46018 = G__47627;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__ = function(state_46018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1.call(this,state_46018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_46068 = f__45316__auto__();
(statearr_46068[(6)] = c__45315__auto__);

return statearr_46068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));

return c__45315__auto__;
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
var G__46072 = arguments.length;
switch (G__46072) {
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
var G__46076 = arguments.length;
switch (G__46076) {
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
var G__46079 = arguments.length;
switch (G__46079) {
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
var c__45315__auto___47633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_46106){
var state_val_46107 = (state_46106[(1)]);
if((state_val_46107 === (7))){
var inst_46102 = (state_46106[(2)]);
var state_46106__$1 = state_46106;
var statearr_46110_47634 = state_46106__$1;
(statearr_46110_47634[(2)] = inst_46102);

(statearr_46110_47634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (1))){
var state_46106__$1 = state_46106;
var statearr_46111_47635 = state_46106__$1;
(statearr_46111_47635[(2)] = null);

(statearr_46111_47635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (4))){
var inst_46083 = (state_46106[(7)]);
var inst_46083__$1 = (state_46106[(2)]);
var inst_46084 = (inst_46083__$1 == null);
var state_46106__$1 = (function (){var statearr_46114 = state_46106;
(statearr_46114[(7)] = inst_46083__$1);

return statearr_46114;
})();
if(cljs.core.truth_(inst_46084)){
var statearr_46115_47636 = state_46106__$1;
(statearr_46115_47636[(1)] = (5));

} else {
var statearr_46116_47637 = state_46106__$1;
(statearr_46116_47637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (13))){
var state_46106__$1 = state_46106;
var statearr_46117_47638 = state_46106__$1;
(statearr_46117_47638[(2)] = null);

(statearr_46117_47638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (6))){
var inst_46083 = (state_46106[(7)]);
var inst_46089 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46083) : p.call(null,inst_46083));
var state_46106__$1 = state_46106;
if(cljs.core.truth_(inst_46089)){
var statearr_46119_47639 = state_46106__$1;
(statearr_46119_47639[(1)] = (9));

} else {
var statearr_46121_47640 = state_46106__$1;
(statearr_46121_47640[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (3))){
var inst_46104 = (state_46106[(2)]);
var state_46106__$1 = state_46106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46106__$1,inst_46104);
} else {
if((state_val_46107 === (12))){
var state_46106__$1 = state_46106;
var statearr_46122_47641 = state_46106__$1;
(statearr_46122_47641[(2)] = null);

(statearr_46122_47641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (2))){
var state_46106__$1 = state_46106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46106__$1,(4),ch);
} else {
if((state_val_46107 === (11))){
var inst_46083 = (state_46106[(7)]);
var inst_46093 = (state_46106[(2)]);
var state_46106__$1 = state_46106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46106__$1,(8),inst_46093,inst_46083);
} else {
if((state_val_46107 === (9))){
var state_46106__$1 = state_46106;
var statearr_46125_47646 = state_46106__$1;
(statearr_46125_47646[(2)] = tc);

(statearr_46125_47646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (5))){
var inst_46086 = cljs.core.async.close_BANG_(tc);
var inst_46087 = cljs.core.async.close_BANG_(fc);
var state_46106__$1 = (function (){var statearr_46126 = state_46106;
(statearr_46126[(8)] = inst_46086);

return statearr_46126;
})();
var statearr_46128_47650 = state_46106__$1;
(statearr_46128_47650[(2)] = inst_46087);

(statearr_46128_47650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (14))){
var inst_46100 = (state_46106[(2)]);
var state_46106__$1 = state_46106;
var statearr_46130_47651 = state_46106__$1;
(statearr_46130_47651[(2)] = inst_46100);

(statearr_46130_47651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (10))){
var state_46106__$1 = state_46106;
var statearr_46133_47652 = state_46106__$1;
(statearr_46133_47652[(2)] = fc);

(statearr_46133_47652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46107 === (8))){
var inst_46095 = (state_46106[(2)]);
var state_46106__$1 = state_46106;
if(cljs.core.truth_(inst_46095)){
var statearr_46134_47653 = state_46106__$1;
(statearr_46134_47653[(1)] = (12));

} else {
var statearr_46136_47654 = state_46106__$1;
(statearr_46136_47654[(1)] = (13));

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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_46138 = [null,null,null,null,null,null,null,null,null];
(statearr_46138[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_46138[(1)] = (1));

return statearr_46138;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_46106){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_46106);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e46139){var ex__45170__auto__ = e46139;
var statearr_46140_47658 = state_46106;
(statearr_46140_47658[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_46106[(4)]))){
var statearr_46141_47659 = state_46106;
(statearr_46141_47659[(1)] = cljs.core.first((state_46106[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47663 = state_46106;
state_46106 = G__47663;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_46106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_46106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_46143 = f__45316__auto__();
(statearr_46143[(6)] = c__45315__auto___47633);

return statearr_46143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
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
var c__45315__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_46170){
var state_val_46171 = (state_46170[(1)]);
if((state_val_46171 === (7))){
var inst_46166 = (state_46170[(2)]);
var state_46170__$1 = state_46170;
var statearr_46172_47664 = state_46170__$1;
(statearr_46172_47664[(2)] = inst_46166);

(statearr_46172_47664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (1))){
var inst_46148 = init;
var inst_46150 = inst_46148;
var state_46170__$1 = (function (){var statearr_46173 = state_46170;
(statearr_46173[(7)] = inst_46150);

return statearr_46173;
})();
var statearr_46176_47668 = state_46170__$1;
(statearr_46176_47668[(2)] = null);

(statearr_46176_47668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (4))){
var inst_46153 = (state_46170[(8)]);
var inst_46153__$1 = (state_46170[(2)]);
var inst_46154 = (inst_46153__$1 == null);
var state_46170__$1 = (function (){var statearr_46177 = state_46170;
(statearr_46177[(8)] = inst_46153__$1);

return statearr_46177;
})();
if(cljs.core.truth_(inst_46154)){
var statearr_46179_47669 = state_46170__$1;
(statearr_46179_47669[(1)] = (5));

} else {
var statearr_46181_47670 = state_46170__$1;
(statearr_46181_47670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (6))){
var inst_46153 = (state_46170[(8)]);
var inst_46150 = (state_46170[(7)]);
var inst_46157 = (state_46170[(9)]);
var inst_46157__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46150,inst_46153) : f.call(null,inst_46150,inst_46153));
var inst_46158 = cljs.core.reduced_QMARK_(inst_46157__$1);
var state_46170__$1 = (function (){var statearr_46182 = state_46170;
(statearr_46182[(9)] = inst_46157__$1);

return statearr_46182;
})();
if(inst_46158){
var statearr_46184_47671 = state_46170__$1;
(statearr_46184_47671[(1)] = (8));

} else {
var statearr_46186_47672 = state_46170__$1;
(statearr_46186_47672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (3))){
var inst_46168 = (state_46170[(2)]);
var state_46170__$1 = state_46170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46170__$1,inst_46168);
} else {
if((state_val_46171 === (2))){
var state_46170__$1 = state_46170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46170__$1,(4),ch);
} else {
if((state_val_46171 === (9))){
var inst_46157 = (state_46170[(9)]);
var inst_46150 = inst_46157;
var state_46170__$1 = (function (){var statearr_46191 = state_46170;
(statearr_46191[(7)] = inst_46150);

return statearr_46191;
})();
var statearr_46192_47680 = state_46170__$1;
(statearr_46192_47680[(2)] = null);

(statearr_46192_47680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (5))){
var inst_46150 = (state_46170[(7)]);
var state_46170__$1 = state_46170;
var statearr_46193_47681 = state_46170__$1;
(statearr_46193_47681[(2)] = inst_46150);

(statearr_46193_47681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (10))){
var inst_46164 = (state_46170[(2)]);
var state_46170__$1 = state_46170;
var statearr_46194_47682 = state_46170__$1;
(statearr_46194_47682[(2)] = inst_46164);

(statearr_46194_47682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46171 === (8))){
var inst_46157 = (state_46170[(9)]);
var inst_46160 = cljs.core.deref(inst_46157);
var state_46170__$1 = state_46170;
var statearr_46195_47683 = state_46170__$1;
(statearr_46195_47683[(2)] = inst_46160);

(statearr_46195_47683[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__45167__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45167__auto____0 = (function (){
var statearr_46196 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46196[(0)] = cljs$core$async$reduce_$_state_machine__45167__auto__);

(statearr_46196[(1)] = (1));

return statearr_46196;
});
var cljs$core$async$reduce_$_state_machine__45167__auto____1 = (function (state_46170){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_46170);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e46197){var ex__45170__auto__ = e46197;
var statearr_46198_47687 = state_46170;
(statearr_46198_47687[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_46170[(4)]))){
var statearr_46199_47688 = state_46170;
(statearr_46199_47688[(1)] = cljs.core.first((state_46170[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47689 = state_46170;
state_46170 = G__47689;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45167__auto__ = function(state_46170){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45167__auto____1.call(this,state_46170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45167__auto____0;
cljs$core$async$reduce_$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45167__auto____1;
return cljs$core$async$reduce_$_state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_46200 = f__45316__auto__();
(statearr_46200[(6)] = c__45315__auto__);

return statearr_46200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));

return c__45315__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45315__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_46209){
var state_val_46210 = (state_46209[(1)]);
if((state_val_46210 === (1))){
var inst_46204 = cljs.core.async.reduce(f__$1,init,ch);
var state_46209__$1 = state_46209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46209__$1,(2),inst_46204);
} else {
if((state_val_46210 === (2))){
var inst_46206 = (state_46209[(2)]);
var inst_46207 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46206) : f__$1.call(null,inst_46206));
var state_46209__$1 = state_46209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46209__$1,inst_46207);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45167__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45167__auto____0 = (function (){
var statearr_46211 = [null,null,null,null,null,null,null];
(statearr_46211[(0)] = cljs$core$async$transduce_$_state_machine__45167__auto__);

(statearr_46211[(1)] = (1));

return statearr_46211;
});
var cljs$core$async$transduce_$_state_machine__45167__auto____1 = (function (state_46209){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_46209);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e46212){var ex__45170__auto__ = e46212;
var statearr_46213_47696 = state_46209;
(statearr_46213_47696[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_46209[(4)]))){
var statearr_46214_47697 = state_46209;
(statearr_46214_47697[(1)] = cljs.core.first((state_46209[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47698 = state_46209;
state_46209 = G__47698;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45167__auto__ = function(state_46209){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45167__auto____1.call(this,state_46209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45167__auto____0;
cljs$core$async$transduce_$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45167__auto____1;
return cljs$core$async$transduce_$_state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_46215 = f__45316__auto__();
(statearr_46215[(6)] = c__45315__auto__);

return statearr_46215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));

return c__45315__auto__;
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
var G__46217 = arguments.length;
switch (G__46217) {
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
var c__45315__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_46249){
var state_val_46250 = (state_46249[(1)]);
if((state_val_46250 === (7))){
var inst_46226 = (state_46249[(2)]);
var state_46249__$1 = state_46249;
var statearr_46252_47701 = state_46249__$1;
(statearr_46252_47701[(2)] = inst_46226);

(statearr_46252_47701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (1))){
var inst_46220 = cljs.core.seq(coll);
var inst_46221 = inst_46220;
var state_46249__$1 = (function (){var statearr_46253 = state_46249;
(statearr_46253[(7)] = inst_46221);

return statearr_46253;
})();
var statearr_46254_47702 = state_46249__$1;
(statearr_46254_47702[(2)] = null);

(statearr_46254_47702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (4))){
var inst_46221 = (state_46249[(7)]);
var inst_46224 = cljs.core.first(inst_46221);
var state_46249__$1 = state_46249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46249__$1,(7),ch,inst_46224);
} else {
if((state_val_46250 === (13))){
var inst_46241 = (state_46249[(2)]);
var state_46249__$1 = state_46249;
var statearr_46255_47703 = state_46249__$1;
(statearr_46255_47703[(2)] = inst_46241);

(statearr_46255_47703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (6))){
var inst_46229 = (state_46249[(2)]);
var state_46249__$1 = state_46249;
if(cljs.core.truth_(inst_46229)){
var statearr_46256_47704 = state_46249__$1;
(statearr_46256_47704[(1)] = (8));

} else {
var statearr_46257_47705 = state_46249__$1;
(statearr_46257_47705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (3))){
var inst_46246 = (state_46249[(2)]);
var state_46249__$1 = state_46249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46249__$1,inst_46246);
} else {
if((state_val_46250 === (12))){
var state_46249__$1 = state_46249;
var statearr_46260_47706 = state_46249__$1;
(statearr_46260_47706[(2)] = null);

(statearr_46260_47706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (2))){
var inst_46221 = (state_46249[(7)]);
var state_46249__$1 = state_46249;
if(cljs.core.truth_(inst_46221)){
var statearr_46261_47707 = state_46249__$1;
(statearr_46261_47707[(1)] = (4));

} else {
var statearr_46262_47708 = state_46249__$1;
(statearr_46262_47708[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (11))){
var inst_46238 = cljs.core.async.close_BANG_(ch);
var state_46249__$1 = state_46249;
var statearr_46265_47709 = state_46249__$1;
(statearr_46265_47709[(2)] = inst_46238);

(statearr_46265_47709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (9))){
var state_46249__$1 = state_46249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46266_47710 = state_46249__$1;
(statearr_46266_47710[(1)] = (11));

} else {
var statearr_46267_47711 = state_46249__$1;
(statearr_46267_47711[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (5))){
var inst_46221 = (state_46249[(7)]);
var state_46249__$1 = state_46249;
var statearr_46270_47712 = state_46249__$1;
(statearr_46270_47712[(2)] = inst_46221);

(statearr_46270_47712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (10))){
var inst_46244 = (state_46249[(2)]);
var state_46249__$1 = state_46249;
var statearr_46273_47713 = state_46249__$1;
(statearr_46273_47713[(2)] = inst_46244);

(statearr_46273_47713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46250 === (8))){
var inst_46221 = (state_46249[(7)]);
var inst_46231 = cljs.core.next(inst_46221);
var inst_46221__$1 = inst_46231;
var state_46249__$1 = (function (){var statearr_46274 = state_46249;
(statearr_46274[(7)] = inst_46221__$1);

return statearr_46274;
})();
var statearr_46275_47714 = state_46249__$1;
(statearr_46275_47714[(2)] = null);

(statearr_46275_47714[(1)] = (2));


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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_46276 = [null,null,null,null,null,null,null,null];
(statearr_46276[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_46276[(1)] = (1));

return statearr_46276;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_46249){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_46249);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e46279){var ex__45170__auto__ = e46279;
var statearr_46280_47715 = state_46249;
(statearr_46280_47715[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_46249[(4)]))){
var statearr_46281_47716 = state_46249;
(statearr_46281_47716[(1)] = cljs.core.first((state_46249[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47717 = state_46249;
state_46249 = G__47717;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_46249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_46249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_46282 = f__45316__auto__();
(statearr_46282[(6)] = c__45315__auto__);

return statearr_46282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));

return c__45315__auto__;
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
var G__46288 = arguments.length;
switch (G__46288) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_47719 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_47719(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47720 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_47720(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47721 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_47721(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47724 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_47724(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46310 = (function (ch,cs,meta46311){
this.ch = ch;
this.cs = cs;
this.meta46311 = meta46311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46312,meta46311__$1){
var self__ = this;
var _46312__$1 = this;
return (new cljs.core.async.t_cljs$core$async46310(self__.ch,self__.cs,meta46311__$1));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46312){
var self__ = this;
var _46312__$1 = this;
return self__.meta46311;
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46311","meta46311",-159915992,null)], null);
}));

(cljs.core.async.t_cljs$core$async46310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46310");

(cljs.core.async.t_cljs$core$async46310.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46310.
 */
cljs.core.async.__GT_t_cljs$core$async46310 = (function cljs$core$async$__GT_t_cljs$core$async46310(ch,cs,meta46311){
return (new cljs.core.async.t_cljs$core$async46310(ch,cs,meta46311));
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
var m = (new cljs.core.async.t_cljs$core$async46310(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45315__auto___47731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_46462){
var state_val_46465 = (state_46462[(1)]);
if((state_val_46465 === (7))){
var inst_46455 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46470_47732 = state_46462__$1;
(statearr_46470_47732[(2)] = inst_46455);

(statearr_46470_47732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (20))){
var inst_46351 = (state_46462[(7)]);
var inst_46364 = cljs.core.first(inst_46351);
var inst_46365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46364,(0),null);
var inst_46366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46364,(1),null);
var state_46462__$1 = (function (){var statearr_46474 = state_46462;
(statearr_46474[(8)] = inst_46365);

return statearr_46474;
})();
if(cljs.core.truth_(inst_46366)){
var statearr_46477_47733 = state_46462__$1;
(statearr_46477_47733[(1)] = (22));

} else {
var statearr_46478_47734 = state_46462__$1;
(statearr_46478_47734[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (27))){
var inst_46405 = (state_46462[(9)]);
var inst_46400 = (state_46462[(10)]);
var inst_46398 = (state_46462[(11)]);
var inst_46320 = (state_46462[(12)]);
var inst_46405__$1 = cljs.core._nth(inst_46398,inst_46400);
var inst_46406 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46405__$1,inst_46320,done);
var state_46462__$1 = (function (){var statearr_46480 = state_46462;
(statearr_46480[(9)] = inst_46405__$1);

return statearr_46480;
})();
if(cljs.core.truth_(inst_46406)){
var statearr_46483_47735 = state_46462__$1;
(statearr_46483_47735[(1)] = (30));

} else {
var statearr_46484_47736 = state_46462__$1;
(statearr_46484_47736[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (1))){
var state_46462__$1 = state_46462;
var statearr_46485_47737 = state_46462__$1;
(statearr_46485_47737[(2)] = null);

(statearr_46485_47737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (24))){
var inst_46351 = (state_46462[(7)]);
var inst_46371 = (state_46462[(2)]);
var inst_46372 = cljs.core.next(inst_46351);
var inst_46329 = inst_46372;
var inst_46330 = null;
var inst_46331 = (0);
var inst_46332 = (0);
var state_46462__$1 = (function (){var statearr_46494 = state_46462;
(statearr_46494[(13)] = inst_46371);

(statearr_46494[(14)] = inst_46331);

(statearr_46494[(15)] = inst_46330);

(statearr_46494[(16)] = inst_46332);

(statearr_46494[(17)] = inst_46329);

return statearr_46494;
})();
var statearr_46496_47738 = state_46462__$1;
(statearr_46496_47738[(2)] = null);

(statearr_46496_47738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (39))){
var state_46462__$1 = state_46462;
var statearr_46509_47739 = state_46462__$1;
(statearr_46509_47739[(2)] = null);

(statearr_46509_47739[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (4))){
var inst_46320 = (state_46462[(12)]);
var inst_46320__$1 = (state_46462[(2)]);
var inst_46321 = (inst_46320__$1 == null);
var state_46462__$1 = (function (){var statearr_46510 = state_46462;
(statearr_46510[(12)] = inst_46320__$1);

return statearr_46510;
})();
if(cljs.core.truth_(inst_46321)){
var statearr_46511_47744 = state_46462__$1;
(statearr_46511_47744[(1)] = (5));

} else {
var statearr_46515_47745 = state_46462__$1;
(statearr_46515_47745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (15))){
var inst_46331 = (state_46462[(14)]);
var inst_46330 = (state_46462[(15)]);
var inst_46332 = (state_46462[(16)]);
var inst_46329 = (state_46462[(17)]);
var inst_46347 = (state_46462[(2)]);
var inst_46348 = (inst_46332 + (1));
var tmp46501 = inst_46331;
var tmp46502 = inst_46330;
var tmp46503 = inst_46329;
var inst_46329__$1 = tmp46503;
var inst_46330__$1 = tmp46502;
var inst_46331__$1 = tmp46501;
var inst_46332__$1 = inst_46348;
var state_46462__$1 = (function (){var statearr_46521 = state_46462;
(statearr_46521[(14)] = inst_46331__$1);

(statearr_46521[(15)] = inst_46330__$1);

(statearr_46521[(18)] = inst_46347);

(statearr_46521[(16)] = inst_46332__$1);

(statearr_46521[(17)] = inst_46329__$1);

return statearr_46521;
})();
var statearr_46522_47746 = state_46462__$1;
(statearr_46522_47746[(2)] = null);

(statearr_46522_47746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (21))){
var inst_46375 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46526_47749 = state_46462__$1;
(statearr_46526_47749[(2)] = inst_46375);

(statearr_46526_47749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (31))){
var inst_46405 = (state_46462[(9)]);
var inst_46409 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46405);
var state_46462__$1 = state_46462;
var statearr_46531_47752 = state_46462__$1;
(statearr_46531_47752[(2)] = inst_46409);

(statearr_46531_47752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (32))){
var inst_46399 = (state_46462[(19)]);
var inst_46400 = (state_46462[(10)]);
var inst_46398 = (state_46462[(11)]);
var inst_46397 = (state_46462[(20)]);
var inst_46411 = (state_46462[(2)]);
var inst_46412 = (inst_46400 + (1));
var tmp46523 = inst_46399;
var tmp46524 = inst_46398;
var tmp46525 = inst_46397;
var inst_46397__$1 = tmp46525;
var inst_46398__$1 = tmp46524;
var inst_46399__$1 = tmp46523;
var inst_46400__$1 = inst_46412;
var state_46462__$1 = (function (){var statearr_46532 = state_46462;
(statearr_46532[(19)] = inst_46399__$1);

(statearr_46532[(10)] = inst_46400__$1);

(statearr_46532[(11)] = inst_46398__$1);

(statearr_46532[(21)] = inst_46411);

(statearr_46532[(20)] = inst_46397__$1);

return statearr_46532;
})();
var statearr_46533_47753 = state_46462__$1;
(statearr_46533_47753[(2)] = null);

(statearr_46533_47753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (40))){
var inst_46428 = (state_46462[(22)]);
var inst_46432 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46428);
var state_46462__$1 = state_46462;
var statearr_46536_47757 = state_46462__$1;
(statearr_46536_47757[(2)] = inst_46432);

(statearr_46536_47757[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (33))){
var inst_46415 = (state_46462[(23)]);
var inst_46419 = cljs.core.chunked_seq_QMARK_(inst_46415);
var state_46462__$1 = state_46462;
if(inst_46419){
var statearr_46537_47762 = state_46462__$1;
(statearr_46537_47762[(1)] = (36));

} else {
var statearr_46538_47763 = state_46462__$1;
(statearr_46538_47763[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (13))){
var inst_46341 = (state_46462[(24)]);
var inst_46344 = cljs.core.async.close_BANG_(inst_46341);
var state_46462__$1 = state_46462;
var statearr_46539_47764 = state_46462__$1;
(statearr_46539_47764[(2)] = inst_46344);

(statearr_46539_47764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (22))){
var inst_46365 = (state_46462[(8)]);
var inst_46368 = cljs.core.async.close_BANG_(inst_46365);
var state_46462__$1 = state_46462;
var statearr_46543_47765 = state_46462__$1;
(statearr_46543_47765[(2)] = inst_46368);

(statearr_46543_47765[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (36))){
var inst_46415 = (state_46462[(23)]);
var inst_46423 = cljs.core.chunk_first(inst_46415);
var inst_46424 = cljs.core.chunk_rest(inst_46415);
var inst_46425 = cljs.core.count(inst_46423);
var inst_46397 = inst_46424;
var inst_46398 = inst_46423;
var inst_46399 = inst_46425;
var inst_46400 = (0);
var state_46462__$1 = (function (){var statearr_46544 = state_46462;
(statearr_46544[(19)] = inst_46399);

(statearr_46544[(10)] = inst_46400);

(statearr_46544[(11)] = inst_46398);

(statearr_46544[(20)] = inst_46397);

return statearr_46544;
})();
var statearr_46545_47766 = state_46462__$1;
(statearr_46545_47766[(2)] = null);

(statearr_46545_47766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (41))){
var inst_46415 = (state_46462[(23)]);
var inst_46434 = (state_46462[(2)]);
var inst_46435 = cljs.core.next(inst_46415);
var inst_46397 = inst_46435;
var inst_46398 = null;
var inst_46399 = (0);
var inst_46400 = (0);
var state_46462__$1 = (function (){var statearr_46546 = state_46462;
(statearr_46546[(19)] = inst_46399);

(statearr_46546[(10)] = inst_46400);

(statearr_46546[(11)] = inst_46398);

(statearr_46546[(25)] = inst_46434);

(statearr_46546[(20)] = inst_46397);

return statearr_46546;
})();
var statearr_46555_47773 = state_46462__$1;
(statearr_46555_47773[(2)] = null);

(statearr_46555_47773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (43))){
var state_46462__$1 = state_46462;
var statearr_46560_47774 = state_46462__$1;
(statearr_46560_47774[(2)] = null);

(statearr_46560_47774[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (29))){
var inst_46443 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46561_47775 = state_46462__$1;
(statearr_46561_47775[(2)] = inst_46443);

(statearr_46561_47775[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (44))){
var inst_46452 = (state_46462[(2)]);
var state_46462__$1 = (function (){var statearr_46562 = state_46462;
(statearr_46562[(26)] = inst_46452);

return statearr_46562;
})();
var statearr_46563_47776 = state_46462__$1;
(statearr_46563_47776[(2)] = null);

(statearr_46563_47776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (6))){
var inst_46387 = (state_46462[(27)]);
var inst_46386 = cljs.core.deref(cs);
var inst_46387__$1 = cljs.core.keys(inst_46386);
var inst_46388 = cljs.core.count(inst_46387__$1);
var inst_46389 = cljs.core.reset_BANG_(dctr,inst_46388);
var inst_46394 = cljs.core.seq(inst_46387__$1);
var inst_46397 = inst_46394;
var inst_46398 = null;
var inst_46399 = (0);
var inst_46400 = (0);
var state_46462__$1 = (function (){var statearr_46564 = state_46462;
(statearr_46564[(19)] = inst_46399);

(statearr_46564[(27)] = inst_46387__$1);

(statearr_46564[(10)] = inst_46400);

(statearr_46564[(11)] = inst_46398);

(statearr_46564[(28)] = inst_46389);

(statearr_46564[(20)] = inst_46397);

return statearr_46564;
})();
var statearr_46565_47777 = state_46462__$1;
(statearr_46565_47777[(2)] = null);

(statearr_46565_47777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (28))){
var inst_46397 = (state_46462[(20)]);
var inst_46415 = (state_46462[(23)]);
var inst_46415__$1 = cljs.core.seq(inst_46397);
var state_46462__$1 = (function (){var statearr_46566 = state_46462;
(statearr_46566[(23)] = inst_46415__$1);

return statearr_46566;
})();
if(inst_46415__$1){
var statearr_46567_47778 = state_46462__$1;
(statearr_46567_47778[(1)] = (33));

} else {
var statearr_46568_47779 = state_46462__$1;
(statearr_46568_47779[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (25))){
var inst_46399 = (state_46462[(19)]);
var inst_46400 = (state_46462[(10)]);
var inst_46402 = (inst_46400 < inst_46399);
var inst_46403 = inst_46402;
var state_46462__$1 = state_46462;
if(cljs.core.truth_(inst_46403)){
var statearr_46569_47780 = state_46462__$1;
(statearr_46569_47780[(1)] = (27));

} else {
var statearr_46570_47781 = state_46462__$1;
(statearr_46570_47781[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (34))){
var state_46462__$1 = state_46462;
var statearr_46571_47782 = state_46462__$1;
(statearr_46571_47782[(2)] = null);

(statearr_46571_47782[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (17))){
var state_46462__$1 = state_46462;
var statearr_46572_47783 = state_46462__$1;
(statearr_46572_47783[(2)] = null);

(statearr_46572_47783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (3))){
var inst_46457 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46462__$1,inst_46457);
} else {
if((state_val_46465 === (12))){
var inst_46380 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46573_47784 = state_46462__$1;
(statearr_46573_47784[(2)] = inst_46380);

(statearr_46573_47784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (2))){
var state_46462__$1 = state_46462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46462__$1,(4),ch);
} else {
if((state_val_46465 === (23))){
var state_46462__$1 = state_46462;
var statearr_46574_47785 = state_46462__$1;
(statearr_46574_47785[(2)] = null);

(statearr_46574_47785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (35))){
var inst_46441 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46575_47786 = state_46462__$1;
(statearr_46575_47786[(2)] = inst_46441);

(statearr_46575_47786[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (19))){
var inst_46351 = (state_46462[(7)]);
var inst_46355 = cljs.core.chunk_first(inst_46351);
var inst_46356 = cljs.core.chunk_rest(inst_46351);
var inst_46357 = cljs.core.count(inst_46355);
var inst_46329 = inst_46356;
var inst_46330 = inst_46355;
var inst_46331 = inst_46357;
var inst_46332 = (0);
var state_46462__$1 = (function (){var statearr_46576 = state_46462;
(statearr_46576[(14)] = inst_46331);

(statearr_46576[(15)] = inst_46330);

(statearr_46576[(16)] = inst_46332);

(statearr_46576[(17)] = inst_46329);

return statearr_46576;
})();
var statearr_46577_47793 = state_46462__$1;
(statearr_46577_47793[(2)] = null);

(statearr_46577_47793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (11))){
var inst_46329 = (state_46462[(17)]);
var inst_46351 = (state_46462[(7)]);
var inst_46351__$1 = cljs.core.seq(inst_46329);
var state_46462__$1 = (function (){var statearr_46578 = state_46462;
(statearr_46578[(7)] = inst_46351__$1);

return statearr_46578;
})();
if(inst_46351__$1){
var statearr_46579_47794 = state_46462__$1;
(statearr_46579_47794[(1)] = (16));

} else {
var statearr_46580_47795 = state_46462__$1;
(statearr_46580_47795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (9))){
var inst_46382 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46581_47796 = state_46462__$1;
(statearr_46581_47796[(2)] = inst_46382);

(statearr_46581_47796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (5))){
var inst_46327 = cljs.core.deref(cs);
var inst_46328 = cljs.core.seq(inst_46327);
var inst_46329 = inst_46328;
var inst_46330 = null;
var inst_46331 = (0);
var inst_46332 = (0);
var state_46462__$1 = (function (){var statearr_46582 = state_46462;
(statearr_46582[(14)] = inst_46331);

(statearr_46582[(15)] = inst_46330);

(statearr_46582[(16)] = inst_46332);

(statearr_46582[(17)] = inst_46329);

return statearr_46582;
})();
var statearr_46583_47797 = state_46462__$1;
(statearr_46583_47797[(2)] = null);

(statearr_46583_47797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (14))){
var state_46462__$1 = state_46462;
var statearr_46584_47798 = state_46462__$1;
(statearr_46584_47798[(2)] = null);

(statearr_46584_47798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (45))){
var inst_46449 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46585_47799 = state_46462__$1;
(statearr_46585_47799[(2)] = inst_46449);

(statearr_46585_47799[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (26))){
var inst_46387 = (state_46462[(27)]);
var inst_46445 = (state_46462[(2)]);
var inst_46446 = cljs.core.seq(inst_46387);
var state_46462__$1 = (function (){var statearr_46586 = state_46462;
(statearr_46586[(29)] = inst_46445);

return statearr_46586;
})();
if(inst_46446){
var statearr_46587_47800 = state_46462__$1;
(statearr_46587_47800[(1)] = (42));

} else {
var statearr_46588_47801 = state_46462__$1;
(statearr_46588_47801[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (16))){
var inst_46351 = (state_46462[(7)]);
var inst_46353 = cljs.core.chunked_seq_QMARK_(inst_46351);
var state_46462__$1 = state_46462;
if(inst_46353){
var statearr_46589_47802 = state_46462__$1;
(statearr_46589_47802[(1)] = (19));

} else {
var statearr_46590_47803 = state_46462__$1;
(statearr_46590_47803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (38))){
var inst_46438 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46591_47804 = state_46462__$1;
(statearr_46591_47804[(2)] = inst_46438);

(statearr_46591_47804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (30))){
var state_46462__$1 = state_46462;
var statearr_46592_47805 = state_46462__$1;
(statearr_46592_47805[(2)] = null);

(statearr_46592_47805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (10))){
var inst_46330 = (state_46462[(15)]);
var inst_46332 = (state_46462[(16)]);
var inst_46340 = cljs.core._nth(inst_46330,inst_46332);
var inst_46341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46340,(0),null);
var inst_46342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46340,(1),null);
var state_46462__$1 = (function (){var statearr_46593 = state_46462;
(statearr_46593[(24)] = inst_46341);

return statearr_46593;
})();
if(cljs.core.truth_(inst_46342)){
var statearr_46594_47806 = state_46462__$1;
(statearr_46594_47806[(1)] = (13));

} else {
var statearr_46595_47807 = state_46462__$1;
(statearr_46595_47807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (18))){
var inst_46378 = (state_46462[(2)]);
var state_46462__$1 = state_46462;
var statearr_46596_47808 = state_46462__$1;
(statearr_46596_47808[(2)] = inst_46378);

(statearr_46596_47808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (42))){
var state_46462__$1 = state_46462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46462__$1,(45),dchan);
} else {
if((state_val_46465 === (37))){
var inst_46428 = (state_46462[(22)]);
var inst_46320 = (state_46462[(12)]);
var inst_46415 = (state_46462[(23)]);
var inst_46428__$1 = cljs.core.first(inst_46415);
var inst_46429 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46428__$1,inst_46320,done);
var state_46462__$1 = (function (){var statearr_46599 = state_46462;
(statearr_46599[(22)] = inst_46428__$1);

return statearr_46599;
})();
if(cljs.core.truth_(inst_46429)){
var statearr_46600_47815 = state_46462__$1;
(statearr_46600_47815[(1)] = (39));

} else {
var statearr_46601_47816 = state_46462__$1;
(statearr_46601_47816[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (8))){
var inst_46331 = (state_46462[(14)]);
var inst_46332 = (state_46462[(16)]);
var inst_46334 = (inst_46332 < inst_46331);
var inst_46335 = inst_46334;
var state_46462__$1 = state_46462;
if(cljs.core.truth_(inst_46335)){
var statearr_46602_47817 = state_46462__$1;
(statearr_46602_47817[(1)] = (10));

} else {
var statearr_46603_47818 = state_46462__$1;
(statearr_46603_47818[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__45167__auto__ = null;
var cljs$core$async$mult_$_state_machine__45167__auto____0 = (function (){
var statearr_46606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46606[(0)] = cljs$core$async$mult_$_state_machine__45167__auto__);

(statearr_46606[(1)] = (1));

return statearr_46606;
});
var cljs$core$async$mult_$_state_machine__45167__auto____1 = (function (state_46462){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_46462);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e46607){var ex__45170__auto__ = e46607;
var statearr_46608_47819 = state_46462;
(statearr_46608_47819[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_46462[(4)]))){
var statearr_46610_47820 = state_46462;
(statearr_46610_47820[(1)] = cljs.core.first((state_46462[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47821 = state_46462;
state_46462 = G__47821;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45167__auto__ = function(state_46462){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45167__auto____1.call(this,state_46462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45167__auto____0;
cljs$core$async$mult_$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45167__auto____1;
return cljs$core$async$mult_$_state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_46611 = f__45316__auto__();
(statearr_46611[(6)] = c__45315__auto___47731);

return statearr_46611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
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
var G__46614 = arguments.length;
switch (G__46614) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_47823 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_47823(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47824 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_47824(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47831 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47831(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47832 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_47832(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47833 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47833(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47834 = arguments.length;
var i__5770__auto___47835 = (0);
while(true){
if((i__5770__auto___47835 < len__5769__auto___47834)){
args__5775__auto__.push((arguments[i__5770__auto___47835]));

var G__47836 = (i__5770__auto___47835 + (1));
i__5770__auto___47835 = G__47836;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46634){
var map__46635 = p__46634;
var map__46635__$1 = cljs.core.__destructure_map(map__46635);
var opts = map__46635__$1;
var statearr_46636_47837 = state;
(statearr_46636_47837[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46637_47838 = state;
(statearr_46637_47838[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_46638_47839 = state;
(statearr_46638_47839[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46628){
var G__46629 = cljs.core.first(seq46628);
var seq46628__$1 = cljs.core.next(seq46628);
var G__46630 = cljs.core.first(seq46628__$1);
var seq46628__$2 = cljs.core.next(seq46628__$1);
var G__46631 = cljs.core.first(seq46628__$2);
var seq46628__$3 = cljs.core.next(seq46628__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46629,G__46630,G__46631,seq46628__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46651 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46652){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46652 = meta46652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46653,meta46652__$1){
var self__ = this;
var _46653__$1 = this;
return (new cljs.core.async.t_cljs$core$async46651(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46652__$1));
}));

(cljs.core.async.t_cljs$core$async46651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46653){
var self__ = this;
var _46653__$1 = this;
return self__.meta46652;
}));

(cljs.core.async.t_cljs$core$async46651.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46651.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46651.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46651.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46651.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46651.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46651.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46652","meta46652",1133700904,null)], null);
}));

(cljs.core.async.t_cljs$core$async46651.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46651");

(cljs.core.async.t_cljs$core$async46651.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46651");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46651.
 */
cljs.core.async.__GT_t_cljs$core$async46651 = (function cljs$core$async$__GT_t_cljs$core$async46651(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46652){
return (new cljs.core.async.t_cljs$core$async46651(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46652));
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
var m = (new cljs.core.async.t_cljs$core$async46651(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__45315__auto___47845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_46729){
var state_val_46730 = (state_46729[(1)]);
if((state_val_46730 === (7))){
var inst_46689 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
if(cljs.core.truth_(inst_46689)){
var statearr_46731_47846 = state_46729__$1;
(statearr_46731_47846[(1)] = (8));

} else {
var statearr_46732_47847 = state_46729__$1;
(statearr_46732_47847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (20))){
var inst_46682 = (state_46729[(7)]);
var state_46729__$1 = state_46729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46729__$1,(23),out,inst_46682);
} else {
if((state_val_46730 === (1))){
var inst_46665 = calc_state();
var inst_46666 = cljs.core.__destructure_map(inst_46665);
var inst_46667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46666,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46666,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46666,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46670 = inst_46665;
var state_46729__$1 = (function (){var statearr_46733 = state_46729;
(statearr_46733[(8)] = inst_46670);

(statearr_46733[(9)] = inst_46669);

(statearr_46733[(10)] = inst_46667);

(statearr_46733[(11)] = inst_46668);

return statearr_46733;
})();
var statearr_46734_47848 = state_46729__$1;
(statearr_46734_47848[(2)] = null);

(statearr_46734_47848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (24))){
var inst_46673 = (state_46729[(12)]);
var inst_46670 = inst_46673;
var state_46729__$1 = (function (){var statearr_46736 = state_46729;
(statearr_46736[(8)] = inst_46670);

return statearr_46736;
})();
var statearr_46738_47849 = state_46729__$1;
(statearr_46738_47849[(2)] = null);

(statearr_46738_47849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (4))){
var inst_46682 = (state_46729[(7)]);
var inst_46684 = (state_46729[(13)]);
var inst_46681 = (state_46729[(2)]);
var inst_46682__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46681,(0),null);
var inst_46683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46681,(1),null);
var inst_46684__$1 = (inst_46682__$1 == null);
var state_46729__$1 = (function (){var statearr_46740 = state_46729;
(statearr_46740[(7)] = inst_46682__$1);

(statearr_46740[(13)] = inst_46684__$1);

(statearr_46740[(14)] = inst_46683);

return statearr_46740;
})();
if(cljs.core.truth_(inst_46684__$1)){
var statearr_46742_47850 = state_46729__$1;
(statearr_46742_47850[(1)] = (5));

} else {
var statearr_46743_47851 = state_46729__$1;
(statearr_46743_47851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (15))){
var inst_46674 = (state_46729[(15)]);
var inst_46703 = (state_46729[(16)]);
var inst_46703__$1 = cljs.core.empty_QMARK_(inst_46674);
var state_46729__$1 = (function (){var statearr_46744 = state_46729;
(statearr_46744[(16)] = inst_46703__$1);

return statearr_46744;
})();
if(inst_46703__$1){
var statearr_46745_47852 = state_46729__$1;
(statearr_46745_47852[(1)] = (17));

} else {
var statearr_46746_47853 = state_46729__$1;
(statearr_46746_47853[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (21))){
var inst_46673 = (state_46729[(12)]);
var inst_46670 = inst_46673;
var state_46729__$1 = (function (){var statearr_46747 = state_46729;
(statearr_46747[(8)] = inst_46670);

return statearr_46747;
})();
var statearr_46748_47854 = state_46729__$1;
(statearr_46748_47854[(2)] = null);

(statearr_46748_47854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (13))){
var inst_46696 = (state_46729[(2)]);
var inst_46697 = calc_state();
var inst_46670 = inst_46697;
var state_46729__$1 = (function (){var statearr_46749 = state_46729;
(statearr_46749[(17)] = inst_46696);

(statearr_46749[(8)] = inst_46670);

return statearr_46749;
})();
var statearr_46750_47856 = state_46729__$1;
(statearr_46750_47856[(2)] = null);

(statearr_46750_47856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (22))){
var inst_46723 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46751_47858 = state_46729__$1;
(statearr_46751_47858[(2)] = inst_46723);

(statearr_46751_47858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (6))){
var inst_46683 = (state_46729[(14)]);
var inst_46687 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46683,change);
var state_46729__$1 = state_46729;
var statearr_46752_47859 = state_46729__$1;
(statearr_46752_47859[(2)] = inst_46687);

(statearr_46752_47859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (25))){
var state_46729__$1 = state_46729;
var statearr_46754_47860 = state_46729__$1;
(statearr_46754_47860[(2)] = null);

(statearr_46754_47860[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (17))){
var inst_46675 = (state_46729[(18)]);
var inst_46683 = (state_46729[(14)]);
var inst_46705 = (inst_46675.cljs$core$IFn$_invoke$arity$1 ? inst_46675.cljs$core$IFn$_invoke$arity$1(inst_46683) : inst_46675.call(null,inst_46683));
var inst_46706 = cljs.core.not(inst_46705);
var state_46729__$1 = state_46729;
var statearr_46756_47861 = state_46729__$1;
(statearr_46756_47861[(2)] = inst_46706);

(statearr_46756_47861[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (3))){
var inst_46727 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46729__$1,inst_46727);
} else {
if((state_val_46730 === (12))){
var state_46729__$1 = state_46729;
var statearr_46757_47862 = state_46729__$1;
(statearr_46757_47862[(2)] = null);

(statearr_46757_47862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (2))){
var inst_46670 = (state_46729[(8)]);
var inst_46673 = (state_46729[(12)]);
var inst_46673__$1 = cljs.core.__destructure_map(inst_46670);
var inst_46674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46673__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46673__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46673__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46729__$1 = (function (){var statearr_46758 = state_46729;
(statearr_46758[(15)] = inst_46674);

(statearr_46758[(12)] = inst_46673__$1);

(statearr_46758[(18)] = inst_46675);

return statearr_46758;
})();
return cljs.core.async.ioc_alts_BANG_(state_46729__$1,(4),inst_46676);
} else {
if((state_val_46730 === (23))){
var inst_46714 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
if(cljs.core.truth_(inst_46714)){
var statearr_46760_47865 = state_46729__$1;
(statearr_46760_47865[(1)] = (24));

} else {
var statearr_46761_47866 = state_46729__$1;
(statearr_46761_47866[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (19))){
var inst_46709 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46762_47867 = state_46729__$1;
(statearr_46762_47867[(2)] = inst_46709);

(statearr_46762_47867[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (11))){
var inst_46683 = (state_46729[(14)]);
var inst_46693 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46683);
var state_46729__$1 = state_46729;
var statearr_46766_47868 = state_46729__$1;
(statearr_46766_47868[(2)] = inst_46693);

(statearr_46766_47868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (9))){
var inst_46674 = (state_46729[(15)]);
var inst_46700 = (state_46729[(19)]);
var inst_46683 = (state_46729[(14)]);
var inst_46700__$1 = (inst_46674.cljs$core$IFn$_invoke$arity$1 ? inst_46674.cljs$core$IFn$_invoke$arity$1(inst_46683) : inst_46674.call(null,inst_46683));
var state_46729__$1 = (function (){var statearr_46767 = state_46729;
(statearr_46767[(19)] = inst_46700__$1);

return statearr_46767;
})();
if(cljs.core.truth_(inst_46700__$1)){
var statearr_46768_47869 = state_46729__$1;
(statearr_46768_47869[(1)] = (14));

} else {
var statearr_46769_47870 = state_46729__$1;
(statearr_46769_47870[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (5))){
var inst_46684 = (state_46729[(13)]);
var state_46729__$1 = state_46729;
var statearr_46770_47871 = state_46729__$1;
(statearr_46770_47871[(2)] = inst_46684);

(statearr_46770_47871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (14))){
var inst_46700 = (state_46729[(19)]);
var state_46729__$1 = state_46729;
var statearr_46771_47872 = state_46729__$1;
(statearr_46771_47872[(2)] = inst_46700);

(statearr_46771_47872[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (26))){
var inst_46719 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46772_47873 = state_46729__$1;
(statearr_46772_47873[(2)] = inst_46719);

(statearr_46772_47873[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (16))){
var inst_46711 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
if(cljs.core.truth_(inst_46711)){
var statearr_46773_47874 = state_46729__$1;
(statearr_46773_47874[(1)] = (20));

} else {
var statearr_46774_47875 = state_46729__$1;
(statearr_46774_47875[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (10))){
var inst_46725 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46775_47876 = state_46729__$1;
(statearr_46775_47876[(2)] = inst_46725);

(statearr_46775_47876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (18))){
var inst_46703 = (state_46729[(16)]);
var state_46729__$1 = state_46729;
var statearr_46776_47877 = state_46729__$1;
(statearr_46776_47877[(2)] = inst_46703);

(statearr_46776_47877[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (8))){
var inst_46682 = (state_46729[(7)]);
var inst_46691 = (inst_46682 == null);
var state_46729__$1 = state_46729;
if(cljs.core.truth_(inst_46691)){
var statearr_46778_47878 = state_46729__$1;
(statearr_46778_47878[(1)] = (11));

} else {
var statearr_46779_47879 = state_46729__$1;
(statearr_46779_47879[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__45167__auto__ = null;
var cljs$core$async$mix_$_state_machine__45167__auto____0 = (function (){
var statearr_46780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46780[(0)] = cljs$core$async$mix_$_state_machine__45167__auto__);

(statearr_46780[(1)] = (1));

return statearr_46780;
});
var cljs$core$async$mix_$_state_machine__45167__auto____1 = (function (state_46729){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_46729);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e46782){var ex__45170__auto__ = e46782;
var statearr_46784_47880 = state_46729;
(statearr_46784_47880[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_46729[(4)]))){
var statearr_46786_47881 = state_46729;
(statearr_46786_47881[(1)] = cljs.core.first((state_46729[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47883 = state_46729;
state_46729 = G__47883;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45167__auto__ = function(state_46729){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45167__auto____1.call(this,state_46729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45167__auto____0;
cljs$core$async$mix_$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45167__auto____1;
return cljs$core$async$mix_$_state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_46787 = f__45316__auto__();
(statearr_46787[(6)] = c__45315__auto___47845);

return statearr_46787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_47885 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_47885(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47886 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_47886(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47887 = (function() {
var G__47888 = null;
var G__47888__1 = (function (p){
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
var G__47888__2 = (function (p,v){
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
G__47888 = function(p,v){
switch(arguments.length){
case 1:
return G__47888__1.call(this,p);
case 2:
return G__47888__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47888.cljs$core$IFn$_invoke$arity$1 = G__47888__1;
G__47888.cljs$core$IFn$_invoke$arity$2 = G__47888__2;
return G__47888;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46801 = arguments.length;
switch (G__46801) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47887(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47887(p,v);
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
cljs.core.async.t_cljs$core$async46812 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46813){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46813 = meta46813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46814,meta46813__$1){
var self__ = this;
var _46814__$1 = this;
return (new cljs.core.async.t_cljs$core$async46812(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46813__$1));
}));

(cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46814){
var self__ = this;
var _46814__$1 = this;
return self__.meta46813;
}));

(cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46813","meta46813",-1788035536,null)], null);
}));

(cljs.core.async.t_cljs$core$async46812.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46812");

(cljs.core.async.t_cljs$core$async46812.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46812");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46812.
 */
cljs.core.async.__GT_t_cljs$core$async46812 = (function cljs$core$async$__GT_t_cljs$core$async46812(ch,topic_fn,buf_fn,mults,ensure_mult,meta46813){
return (new cljs.core.async.t_cljs$core$async46812(ch,topic_fn,buf_fn,mults,ensure_mult,meta46813));
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
var G__46811 = arguments.length;
switch (G__46811) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46809_SHARP_){
if(cljs.core.truth_((p1__46809_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46809_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46809_SHARP_.call(null,topic)))){
return p1__46809_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46809_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async46812(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__45315__auto___47896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_46894){
var state_val_46895 = (state_46894[(1)]);
if((state_val_46895 === (7))){
var inst_46890 = (state_46894[(2)]);
var state_46894__$1 = state_46894;
var statearr_46904_47897 = state_46894__$1;
(statearr_46904_47897[(2)] = inst_46890);

(statearr_46904_47897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (20))){
var state_46894__$1 = state_46894;
var statearr_46905_47898 = state_46894__$1;
(statearr_46905_47898[(2)] = null);

(statearr_46905_47898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (1))){
var state_46894__$1 = state_46894;
var statearr_46906_47899 = state_46894__$1;
(statearr_46906_47899[(2)] = null);

(statearr_46906_47899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (24))){
var inst_46873 = (state_46894[(7)]);
var inst_46882 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46873);
var state_46894__$1 = state_46894;
var statearr_46907_47900 = state_46894__$1;
(statearr_46907_47900[(2)] = inst_46882);

(statearr_46907_47900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (4))){
var inst_46824 = (state_46894[(8)]);
var inst_46824__$1 = (state_46894[(2)]);
var inst_46825 = (inst_46824__$1 == null);
var state_46894__$1 = (function (){var statearr_46908 = state_46894;
(statearr_46908[(8)] = inst_46824__$1);

return statearr_46908;
})();
if(cljs.core.truth_(inst_46825)){
var statearr_46909_47901 = state_46894__$1;
(statearr_46909_47901[(1)] = (5));

} else {
var statearr_46910_47902 = state_46894__$1;
(statearr_46910_47902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (15))){
var inst_46867 = (state_46894[(2)]);
var state_46894__$1 = state_46894;
var statearr_46912_47903 = state_46894__$1;
(statearr_46912_47903[(2)] = inst_46867);

(statearr_46912_47903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (21))){
var inst_46887 = (state_46894[(2)]);
var state_46894__$1 = (function (){var statearr_46913 = state_46894;
(statearr_46913[(9)] = inst_46887);

return statearr_46913;
})();
var statearr_46914_47904 = state_46894__$1;
(statearr_46914_47904[(2)] = null);

(statearr_46914_47904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (13))){
var inst_46848 = (state_46894[(10)]);
var inst_46850 = cljs.core.chunked_seq_QMARK_(inst_46848);
var state_46894__$1 = state_46894;
if(inst_46850){
var statearr_46915_47905 = state_46894__$1;
(statearr_46915_47905[(1)] = (16));

} else {
var statearr_46916_47906 = state_46894__$1;
(statearr_46916_47906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (22))){
var inst_46879 = (state_46894[(2)]);
var state_46894__$1 = state_46894;
if(cljs.core.truth_(inst_46879)){
var statearr_46917_47907 = state_46894__$1;
(statearr_46917_47907[(1)] = (23));

} else {
var statearr_46918_47908 = state_46894__$1;
(statearr_46918_47908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (6))){
var inst_46824 = (state_46894[(8)]);
var inst_46875 = (state_46894[(11)]);
var inst_46873 = (state_46894[(7)]);
var inst_46873__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46824) : topic_fn.call(null,inst_46824));
var inst_46874 = cljs.core.deref(mults);
var inst_46875__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46874,inst_46873__$1);
var state_46894__$1 = (function (){var statearr_46919 = state_46894;
(statearr_46919[(11)] = inst_46875__$1);

(statearr_46919[(7)] = inst_46873__$1);

return statearr_46919;
})();
if(cljs.core.truth_(inst_46875__$1)){
var statearr_46920_47909 = state_46894__$1;
(statearr_46920_47909[(1)] = (19));

} else {
var statearr_46921_47914 = state_46894__$1;
(statearr_46921_47914[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (25))){
var inst_46884 = (state_46894[(2)]);
var state_46894__$1 = state_46894;
var statearr_46922_47915 = state_46894__$1;
(statearr_46922_47915[(2)] = inst_46884);

(statearr_46922_47915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (17))){
var inst_46848 = (state_46894[(10)]);
var inst_46857 = cljs.core.first(inst_46848);
var inst_46858 = cljs.core.async.muxch_STAR_(inst_46857);
var inst_46860 = cljs.core.async.close_BANG_(inst_46858);
var inst_46861 = cljs.core.next(inst_46848);
var inst_46834 = inst_46861;
var inst_46835 = null;
var inst_46836 = (0);
var inst_46837 = (0);
var state_46894__$1 = (function (){var statearr_46923 = state_46894;
(statearr_46923[(12)] = inst_46836);

(statearr_46923[(13)] = inst_46860);

(statearr_46923[(14)] = inst_46837);

(statearr_46923[(15)] = inst_46835);

(statearr_46923[(16)] = inst_46834);

return statearr_46923;
})();
var statearr_46924_47919 = state_46894__$1;
(statearr_46924_47919[(2)] = null);

(statearr_46924_47919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (3))){
var inst_46892 = (state_46894[(2)]);
var state_46894__$1 = state_46894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46894__$1,inst_46892);
} else {
if((state_val_46895 === (12))){
var inst_46869 = (state_46894[(2)]);
var state_46894__$1 = state_46894;
var statearr_46925_47920 = state_46894__$1;
(statearr_46925_47920[(2)] = inst_46869);

(statearr_46925_47920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (2))){
var state_46894__$1 = state_46894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46894__$1,(4),ch);
} else {
if((state_val_46895 === (23))){
var state_46894__$1 = state_46894;
var statearr_46926_47924 = state_46894__$1;
(statearr_46926_47924[(2)] = null);

(statearr_46926_47924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (19))){
var inst_46824 = (state_46894[(8)]);
var inst_46875 = (state_46894[(11)]);
var inst_46877 = cljs.core.async.muxch_STAR_(inst_46875);
var state_46894__$1 = state_46894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46894__$1,(22),inst_46877,inst_46824);
} else {
if((state_val_46895 === (11))){
var inst_46848 = (state_46894[(10)]);
var inst_46834 = (state_46894[(16)]);
var inst_46848__$1 = cljs.core.seq(inst_46834);
var state_46894__$1 = (function (){var statearr_46928 = state_46894;
(statearr_46928[(10)] = inst_46848__$1);

return statearr_46928;
})();
if(inst_46848__$1){
var statearr_46929_47925 = state_46894__$1;
(statearr_46929_47925[(1)] = (13));

} else {
var statearr_46930_47929 = state_46894__$1;
(statearr_46930_47929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (9))){
var inst_46871 = (state_46894[(2)]);
var state_46894__$1 = state_46894;
var statearr_46931_47930 = state_46894__$1;
(statearr_46931_47930[(2)] = inst_46871);

(statearr_46931_47930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (5))){
var inst_46831 = cljs.core.deref(mults);
var inst_46832 = cljs.core.vals(inst_46831);
var inst_46833 = cljs.core.seq(inst_46832);
var inst_46834 = inst_46833;
var inst_46835 = null;
var inst_46836 = (0);
var inst_46837 = (0);
var state_46894__$1 = (function (){var statearr_46932 = state_46894;
(statearr_46932[(12)] = inst_46836);

(statearr_46932[(14)] = inst_46837);

(statearr_46932[(15)] = inst_46835);

(statearr_46932[(16)] = inst_46834);

return statearr_46932;
})();
var statearr_46933_47931 = state_46894__$1;
(statearr_46933_47931[(2)] = null);

(statearr_46933_47931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (14))){
var state_46894__$1 = state_46894;
var statearr_46937_47932 = state_46894__$1;
(statearr_46937_47932[(2)] = null);

(statearr_46937_47932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (16))){
var inst_46848 = (state_46894[(10)]);
var inst_46852 = cljs.core.chunk_first(inst_46848);
var inst_46853 = cljs.core.chunk_rest(inst_46848);
var inst_46854 = cljs.core.count(inst_46852);
var inst_46834 = inst_46853;
var inst_46835 = inst_46852;
var inst_46836 = inst_46854;
var inst_46837 = (0);
var state_46894__$1 = (function (){var statearr_46938 = state_46894;
(statearr_46938[(12)] = inst_46836);

(statearr_46938[(14)] = inst_46837);

(statearr_46938[(15)] = inst_46835);

(statearr_46938[(16)] = inst_46834);

return statearr_46938;
})();
var statearr_46939_47936 = state_46894__$1;
(statearr_46939_47936[(2)] = null);

(statearr_46939_47936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (10))){
var inst_46836 = (state_46894[(12)]);
var inst_46837 = (state_46894[(14)]);
var inst_46835 = (state_46894[(15)]);
var inst_46834 = (state_46894[(16)]);
var inst_46842 = cljs.core._nth(inst_46835,inst_46837);
var inst_46843 = cljs.core.async.muxch_STAR_(inst_46842);
var inst_46844 = cljs.core.async.close_BANG_(inst_46843);
var inst_46845 = (inst_46837 + (1));
var tmp46934 = inst_46836;
var tmp46935 = inst_46835;
var tmp46936 = inst_46834;
var inst_46834__$1 = tmp46936;
var inst_46835__$1 = tmp46935;
var inst_46836__$1 = tmp46934;
var inst_46837__$1 = inst_46845;
var state_46894__$1 = (function (){var statearr_46940 = state_46894;
(statearr_46940[(17)] = inst_46844);

(statearr_46940[(12)] = inst_46836__$1);

(statearr_46940[(14)] = inst_46837__$1);

(statearr_46940[(15)] = inst_46835__$1);

(statearr_46940[(16)] = inst_46834__$1);

return statearr_46940;
})();
var statearr_46941_47941 = state_46894__$1;
(statearr_46941_47941[(2)] = null);

(statearr_46941_47941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (18))){
var inst_46864 = (state_46894[(2)]);
var state_46894__$1 = state_46894;
var statearr_46942_47942 = state_46894__$1;
(statearr_46942_47942[(2)] = inst_46864);

(statearr_46942_47942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46895 === (8))){
var inst_46836 = (state_46894[(12)]);
var inst_46837 = (state_46894[(14)]);
var inst_46839 = (inst_46837 < inst_46836);
var inst_46840 = inst_46839;
var state_46894__$1 = state_46894;
if(cljs.core.truth_(inst_46840)){
var statearr_46943_47943 = state_46894__$1;
(statearr_46943_47943[(1)] = (10));

} else {
var statearr_46944_47944 = state_46894__$1;
(statearr_46944_47944[(1)] = (11));

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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_46945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46945[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_46945[(1)] = (1));

return statearr_46945;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_46894){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_46894);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e46947){var ex__45170__auto__ = e46947;
var statearr_46948_47945 = state_46894;
(statearr_46948_47945[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_46894[(4)]))){
var statearr_46949_47946 = state_46894;
(statearr_46949_47946[(1)] = cljs.core.first((state_46894[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47947 = state_46894;
state_46894 = G__47947;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_46894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_46894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_46950 = f__45316__auto__();
(statearr_46950[(6)] = c__45315__auto___47896);

return statearr_46950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
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
var G__46952 = arguments.length;
switch (G__46952) {
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
var G__46956 = arguments.length;
switch (G__46956) {
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
var G__46958 = arguments.length;
switch (G__46958) {
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
var c__45315__auto___47953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_47001){
var state_val_47002 = (state_47001[(1)]);
if((state_val_47002 === (7))){
var state_47001__$1 = state_47001;
var statearr_47003_47954 = state_47001__$1;
(statearr_47003_47954[(2)] = null);

(statearr_47003_47954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (1))){
var state_47001__$1 = state_47001;
var statearr_47004_47955 = state_47001__$1;
(statearr_47004_47955[(2)] = null);

(statearr_47004_47955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (4))){
var inst_46961 = (state_47001[(7)]);
var inst_46962 = (state_47001[(8)]);
var inst_46964 = (inst_46962 < inst_46961);
var state_47001__$1 = state_47001;
if(cljs.core.truth_(inst_46964)){
var statearr_47005_47956 = state_47001__$1;
(statearr_47005_47956[(1)] = (6));

} else {
var statearr_47006_47957 = state_47001__$1;
(statearr_47006_47957[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (15))){
var inst_46987 = (state_47001[(9)]);
var inst_46992 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46987);
var state_47001__$1 = state_47001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47001__$1,(17),out,inst_46992);
} else {
if((state_val_47002 === (13))){
var inst_46987 = (state_47001[(9)]);
var inst_46987__$1 = (state_47001[(2)]);
var inst_46988 = cljs.core.some(cljs.core.nil_QMARK_,inst_46987__$1);
var state_47001__$1 = (function (){var statearr_47007 = state_47001;
(statearr_47007[(9)] = inst_46987__$1);

return statearr_47007;
})();
if(cljs.core.truth_(inst_46988)){
var statearr_47008_47958 = state_47001__$1;
(statearr_47008_47958[(1)] = (14));

} else {
var statearr_47009_47959 = state_47001__$1;
(statearr_47009_47959[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (6))){
var state_47001__$1 = state_47001;
var statearr_47010_47960 = state_47001__$1;
(statearr_47010_47960[(2)] = null);

(statearr_47010_47960[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (17))){
var inst_46994 = (state_47001[(2)]);
var state_47001__$1 = (function (){var statearr_47012 = state_47001;
(statearr_47012[(10)] = inst_46994);

return statearr_47012;
})();
var statearr_47013_47961 = state_47001__$1;
(statearr_47013_47961[(2)] = null);

(statearr_47013_47961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (3))){
var inst_46999 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47001__$1,inst_46999);
} else {
if((state_val_47002 === (12))){
var _ = (function (){var statearr_47014 = state_47001;
(statearr_47014[(4)] = cljs.core.rest((state_47001[(4)])));

return statearr_47014;
})();
var state_47001__$1 = state_47001;
var ex47011 = (state_47001__$1[(2)]);
var statearr_47015_47962 = state_47001__$1;
(statearr_47015_47962[(5)] = ex47011);


if((ex47011 instanceof Object)){
var statearr_47016_47963 = state_47001__$1;
(statearr_47016_47963[(1)] = (11));

(statearr_47016_47963[(5)] = null);

} else {
throw ex47011;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (2))){
var inst_46960 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46961 = cnt;
var inst_46962 = (0);
var state_47001__$1 = (function (){var statearr_47017 = state_47001;
(statearr_47017[(11)] = inst_46960);

(statearr_47017[(7)] = inst_46961);

(statearr_47017[(8)] = inst_46962);

return statearr_47017;
})();
var statearr_47018_47964 = state_47001__$1;
(statearr_47018_47964[(2)] = null);

(statearr_47018_47964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (11))){
var inst_46966 = (state_47001[(2)]);
var inst_46967 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47001__$1 = (function (){var statearr_47019 = state_47001;
(statearr_47019[(12)] = inst_46966);

return statearr_47019;
})();
var statearr_47020_47965 = state_47001__$1;
(statearr_47020_47965[(2)] = inst_46967);

(statearr_47020_47965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (9))){
var inst_46962 = (state_47001[(8)]);
var _ = (function (){var statearr_47021 = state_47001;
(statearr_47021[(4)] = cljs.core.cons((12),(state_47001[(4)])));

return statearr_47021;
})();
var inst_46973 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46962) : chs__$1.call(null,inst_46962));
var inst_46974 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46962) : done.call(null,inst_46962));
var inst_46975 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46973,inst_46974);
var ___$1 = (function (){var statearr_47022 = state_47001;
(statearr_47022[(4)] = cljs.core.rest((state_47001[(4)])));

return statearr_47022;
})();
var state_47001__$1 = state_47001;
var statearr_47023_47970 = state_47001__$1;
(statearr_47023_47970[(2)] = inst_46975);

(statearr_47023_47970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (5))){
var inst_46985 = (state_47001[(2)]);
var state_47001__$1 = (function (){var statearr_47024 = state_47001;
(statearr_47024[(13)] = inst_46985);

return statearr_47024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47001__$1,(13),dchan);
} else {
if((state_val_47002 === (14))){
var inst_46990 = cljs.core.async.close_BANG_(out);
var state_47001__$1 = state_47001;
var statearr_47025_47971 = state_47001__$1;
(statearr_47025_47971[(2)] = inst_46990);

(statearr_47025_47971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (16))){
var inst_46997 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47026_47972 = state_47001__$1;
(statearr_47026_47972[(2)] = inst_46997);

(statearr_47026_47972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (10))){
var inst_46962 = (state_47001[(8)]);
var inst_46978 = (state_47001[(2)]);
var inst_46979 = (inst_46962 + (1));
var inst_46962__$1 = inst_46979;
var state_47001__$1 = (function (){var statearr_47027 = state_47001;
(statearr_47027[(14)] = inst_46978);

(statearr_47027[(8)] = inst_46962__$1);

return statearr_47027;
})();
var statearr_47028_47973 = state_47001__$1;
(statearr_47028_47973[(2)] = null);

(statearr_47028_47973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47002 === (8))){
var inst_46983 = (state_47001[(2)]);
var state_47001__$1 = state_47001;
var statearr_47029_47974 = state_47001__$1;
(statearr_47029_47974[(2)] = inst_46983);

(statearr_47029_47974[(1)] = (5));


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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_47030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47030[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_47030[(1)] = (1));

return statearr_47030;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_47001){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_47001);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e47031){var ex__45170__auto__ = e47031;
var statearr_47032_47975 = state_47001;
(statearr_47032_47975[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_47001[(4)]))){
var statearr_47033_47976 = state_47001;
(statearr_47033_47976[(1)] = cljs.core.first((state_47001[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47977 = state_47001;
state_47001 = G__47977;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_47001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_47001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_47034 = f__45316__auto__();
(statearr_47034[(6)] = c__45315__auto___47953);

return statearr_47034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
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
var G__47037 = arguments.length;
switch (G__47037) {
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
var c__45315__auto___47984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_47069){
var state_val_47070 = (state_47069[(1)]);
if((state_val_47070 === (7))){
var inst_47049 = (state_47069[(7)]);
var inst_47048 = (state_47069[(8)]);
var inst_47048__$1 = (state_47069[(2)]);
var inst_47049__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47048__$1,(0),null);
var inst_47050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47048__$1,(1),null);
var inst_47051 = (inst_47049__$1 == null);
var state_47069__$1 = (function (){var statearr_47071 = state_47069;
(statearr_47071[(7)] = inst_47049__$1);

(statearr_47071[(8)] = inst_47048__$1);

(statearr_47071[(9)] = inst_47050);

return statearr_47071;
})();
if(cljs.core.truth_(inst_47051)){
var statearr_47072_47985 = state_47069__$1;
(statearr_47072_47985[(1)] = (8));

} else {
var statearr_47073_47986 = state_47069__$1;
(statearr_47073_47986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (1))){
var inst_47038 = cljs.core.vec(chs);
var inst_47039 = inst_47038;
var state_47069__$1 = (function (){var statearr_47074 = state_47069;
(statearr_47074[(10)] = inst_47039);

return statearr_47074;
})();
var statearr_47075_47987 = state_47069__$1;
(statearr_47075_47987[(2)] = null);

(statearr_47075_47987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (4))){
var inst_47039 = (state_47069[(10)]);
var state_47069__$1 = state_47069;
return cljs.core.async.ioc_alts_BANG_(state_47069__$1,(7),inst_47039);
} else {
if((state_val_47070 === (6))){
var inst_47065 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
var statearr_47076_47989 = state_47069__$1;
(statearr_47076_47989[(2)] = inst_47065);

(statearr_47076_47989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (3))){
var inst_47067 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47069__$1,inst_47067);
} else {
if((state_val_47070 === (2))){
var inst_47039 = (state_47069[(10)]);
var inst_47041 = cljs.core.count(inst_47039);
var inst_47042 = (inst_47041 > (0));
var state_47069__$1 = state_47069;
if(cljs.core.truth_(inst_47042)){
var statearr_47078_47990 = state_47069__$1;
(statearr_47078_47990[(1)] = (4));

} else {
var statearr_47079_47991 = state_47069__$1;
(statearr_47079_47991[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (11))){
var inst_47039 = (state_47069[(10)]);
var inst_47058 = (state_47069[(2)]);
var tmp47077 = inst_47039;
var inst_47039__$1 = tmp47077;
var state_47069__$1 = (function (){var statearr_47080 = state_47069;
(statearr_47080[(11)] = inst_47058);

(statearr_47080[(10)] = inst_47039__$1);

return statearr_47080;
})();
var statearr_47081_47992 = state_47069__$1;
(statearr_47081_47992[(2)] = null);

(statearr_47081_47992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (9))){
var inst_47049 = (state_47069[(7)]);
var state_47069__$1 = state_47069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47069__$1,(11),out,inst_47049);
} else {
if((state_val_47070 === (5))){
var inst_47063 = cljs.core.async.close_BANG_(out);
var state_47069__$1 = state_47069;
var statearr_47082_47997 = state_47069__$1;
(statearr_47082_47997[(2)] = inst_47063);

(statearr_47082_47997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (10))){
var inst_47061 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
var statearr_47083_47998 = state_47069__$1;
(statearr_47083_47998[(2)] = inst_47061);

(statearr_47083_47998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (8))){
var inst_47049 = (state_47069[(7)]);
var inst_47048 = (state_47069[(8)]);
var inst_47039 = (state_47069[(10)]);
var inst_47050 = (state_47069[(9)]);
var inst_47053 = (function (){var cs = inst_47039;
var vec__47044 = inst_47048;
var v = inst_47049;
var c = inst_47050;
return (function (p1__47035_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47035_SHARP_);
});
})();
var inst_47054 = cljs.core.filterv(inst_47053,inst_47039);
var inst_47039__$1 = inst_47054;
var state_47069__$1 = (function (){var statearr_47084 = state_47069;
(statearr_47084[(10)] = inst_47039__$1);

return statearr_47084;
})();
var statearr_47085_47999 = state_47069__$1;
(statearr_47085_47999[(2)] = null);

(statearr_47085_47999[(1)] = (2));


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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_47086 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47086[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_47086[(1)] = (1));

return statearr_47086;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_47069){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_47069);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e47087){var ex__45170__auto__ = e47087;
var statearr_47088_48000 = state_47069;
(statearr_47088_48000[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_47069[(4)]))){
var statearr_47089_48001 = state_47069;
(statearr_47089_48001[(1)] = cljs.core.first((state_47069[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48002 = state_47069;
state_47069 = G__48002;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_47069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_47069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_47090 = f__45316__auto__();
(statearr_47090[(6)] = c__45315__auto___47984);

return statearr_47090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
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
var G__47092 = arguments.length;
switch (G__47092) {
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
var c__45315__auto___48004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_47116){
var state_val_47117 = (state_47116[(1)]);
if((state_val_47117 === (7))){
var inst_47098 = (state_47116[(7)]);
var inst_47098__$1 = (state_47116[(2)]);
var inst_47099 = (inst_47098__$1 == null);
var inst_47100 = cljs.core.not(inst_47099);
var state_47116__$1 = (function (){var statearr_47118 = state_47116;
(statearr_47118[(7)] = inst_47098__$1);

return statearr_47118;
})();
if(inst_47100){
var statearr_47119_48005 = state_47116__$1;
(statearr_47119_48005[(1)] = (8));

} else {
var statearr_47120_48006 = state_47116__$1;
(statearr_47120_48006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47117 === (1))){
var inst_47093 = (0);
var state_47116__$1 = (function (){var statearr_47121 = state_47116;
(statearr_47121[(8)] = inst_47093);

return statearr_47121;
})();
var statearr_47122_48007 = state_47116__$1;
(statearr_47122_48007[(2)] = null);

(statearr_47122_48007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47117 === (4))){
var state_47116__$1 = state_47116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47116__$1,(7),ch);
} else {
if((state_val_47117 === (6))){
var inst_47111 = (state_47116[(2)]);
var state_47116__$1 = state_47116;
var statearr_47123_48008 = state_47116__$1;
(statearr_47123_48008[(2)] = inst_47111);

(statearr_47123_48008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47117 === (3))){
var inst_47113 = (state_47116[(2)]);
var inst_47114 = cljs.core.async.close_BANG_(out);
var state_47116__$1 = (function (){var statearr_47124 = state_47116;
(statearr_47124[(9)] = inst_47113);

return statearr_47124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47116__$1,inst_47114);
} else {
if((state_val_47117 === (2))){
var inst_47093 = (state_47116[(8)]);
var inst_47095 = (inst_47093 < n);
var state_47116__$1 = state_47116;
if(cljs.core.truth_(inst_47095)){
var statearr_47125_48009 = state_47116__$1;
(statearr_47125_48009[(1)] = (4));

} else {
var statearr_47126_48010 = state_47116__$1;
(statearr_47126_48010[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47117 === (11))){
var inst_47093 = (state_47116[(8)]);
var inst_47103 = (state_47116[(2)]);
var inst_47104 = (inst_47093 + (1));
var inst_47093__$1 = inst_47104;
var state_47116__$1 = (function (){var statearr_47127 = state_47116;
(statearr_47127[(8)] = inst_47093__$1);

(statearr_47127[(10)] = inst_47103);

return statearr_47127;
})();
var statearr_47128_48011 = state_47116__$1;
(statearr_47128_48011[(2)] = null);

(statearr_47128_48011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47117 === (9))){
var state_47116__$1 = state_47116;
var statearr_47129_48012 = state_47116__$1;
(statearr_47129_48012[(2)] = null);

(statearr_47129_48012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47117 === (5))){
var state_47116__$1 = state_47116;
var statearr_47130_48013 = state_47116__$1;
(statearr_47130_48013[(2)] = null);

(statearr_47130_48013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47117 === (10))){
var inst_47108 = (state_47116[(2)]);
var state_47116__$1 = state_47116;
var statearr_47131_48014 = state_47116__$1;
(statearr_47131_48014[(2)] = inst_47108);

(statearr_47131_48014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47117 === (8))){
var inst_47098 = (state_47116[(7)]);
var state_47116__$1 = state_47116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47116__$1,(11),out,inst_47098);
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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_47132 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47132[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_47132[(1)] = (1));

return statearr_47132;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_47116){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_47116);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e47133){var ex__45170__auto__ = e47133;
var statearr_47134_48016 = state_47116;
(statearr_47134_48016[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_47116[(4)]))){
var statearr_47135_48017 = state_47116;
(statearr_47135_48017[(1)] = cljs.core.first((state_47116[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48018 = state_47116;
state_47116 = G__48018;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_47116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_47116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_47136 = f__45316__auto__();
(statearr_47136[(6)] = c__45315__auto___48004);

return statearr_47136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
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
cljs.core.async.t_cljs$core$async47141 = (function (f,ch,meta47139,_,fn1,meta47142){
this.f = f;
this.ch = ch;
this.meta47139 = meta47139;
this._ = _;
this.fn1 = fn1;
this.meta47142 = meta47142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47143,meta47142__$1){
var self__ = this;
var _47143__$1 = this;
return (new cljs.core.async.t_cljs$core$async47141(self__.f,self__.ch,self__.meta47139,self__._,self__.fn1,meta47142__$1));
}));

(cljs.core.async.t_cljs$core$async47141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47143){
var self__ = this;
var _47143__$1 = this;
return self__.meta47142;
}));

(cljs.core.async.t_cljs$core$async47141.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47137_SHARP_){
var G__47144 = (((p1__47137_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47137_SHARP_) : self__.f.call(null,p1__47137_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47144) : f1.call(null,G__47144));
});
}));

(cljs.core.async.t_cljs$core$async47141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47139","meta47139",-2134362494,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47138","cljs.core.async/t_cljs$core$async47138",1596506583,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47142","meta47142",1911752005,null)], null);
}));

(cljs.core.async.t_cljs$core$async47141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47141");

(cljs.core.async.t_cljs$core$async47141.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47141.
 */
cljs.core.async.__GT_t_cljs$core$async47141 = (function cljs$core$async$__GT_t_cljs$core$async47141(f,ch,meta47139,_,fn1,meta47142){
return (new cljs.core.async.t_cljs$core$async47141(f,ch,meta47139,_,fn1,meta47142));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47138 = (function (f,ch,meta47139){
this.f = f;
this.ch = ch;
this.meta47139 = meta47139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47140,meta47139__$1){
var self__ = this;
var _47140__$1 = this;
return (new cljs.core.async.t_cljs$core$async47138(self__.f,self__.ch,meta47139__$1));
}));

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47140){
var self__ = this;
var _47140__$1 = this;
return self__.meta47139;
}));

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async47141(self__.f,self__.ch,self__.meta47139,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47145 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47145) : self__.f.call(null,G__47145));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47139","meta47139",-2134362494,null)], null);
}));

(cljs.core.async.t_cljs$core$async47138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47138");

(cljs.core.async.t_cljs$core$async47138.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47138.
 */
cljs.core.async.__GT_t_cljs$core$async47138 = (function cljs$core$async$__GT_t_cljs$core$async47138(f,ch,meta47139){
return (new cljs.core.async.t_cljs$core$async47138(f,ch,meta47139));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async47138(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47146 = (function (f,ch,meta47147){
this.f = f;
this.ch = ch;
this.meta47147 = meta47147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47148,meta47147__$1){
var self__ = this;
var _47148__$1 = this;
return (new cljs.core.async.t_cljs$core$async47146(self__.f,self__.ch,meta47147__$1));
}));

(cljs.core.async.t_cljs$core$async47146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47148){
var self__ = this;
var _47148__$1 = this;
return self__.meta47147;
}));

(cljs.core.async.t_cljs$core$async47146.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47146.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47146.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47147","meta47147",1962289100,null)], null);
}));

(cljs.core.async.t_cljs$core$async47146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47146");

(cljs.core.async.t_cljs$core$async47146.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47146.
 */
cljs.core.async.__GT_t_cljs$core$async47146 = (function cljs$core$async$__GT_t_cljs$core$async47146(f,ch,meta47147){
return (new cljs.core.async.t_cljs$core$async47146(f,ch,meta47147));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async47146(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47149 = (function (p,ch,meta47150){
this.p = p;
this.ch = ch;
this.meta47150 = meta47150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47151,meta47150__$1){
var self__ = this;
var _47151__$1 = this;
return (new cljs.core.async.t_cljs$core$async47149(self__.p,self__.ch,meta47150__$1));
}));

(cljs.core.async.t_cljs$core$async47149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47151){
var self__ = this;
var _47151__$1 = this;
return self__.meta47150;
}));

(cljs.core.async.t_cljs$core$async47149.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47149.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47149.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47150","meta47150",1265858105,null)], null);
}));

(cljs.core.async.t_cljs$core$async47149.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47149");

(cljs.core.async.t_cljs$core$async47149.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async47149");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47149.
 */
cljs.core.async.__GT_t_cljs$core$async47149 = (function cljs$core$async$__GT_t_cljs$core$async47149(p,ch,meta47150){
return (new cljs.core.async.t_cljs$core$async47149(p,ch,meta47150));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async47149(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47153 = arguments.length;
switch (G__47153) {
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
var c__45315__auto___48024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_47174){
var state_val_47175 = (state_47174[(1)]);
if((state_val_47175 === (7))){
var inst_47170 = (state_47174[(2)]);
var state_47174__$1 = state_47174;
var statearr_47176_48025 = state_47174__$1;
(statearr_47176_48025[(2)] = inst_47170);

(statearr_47176_48025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (1))){
var state_47174__$1 = state_47174;
var statearr_47177_48026 = state_47174__$1;
(statearr_47177_48026[(2)] = null);

(statearr_47177_48026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (4))){
var inst_47156 = (state_47174[(7)]);
var inst_47156__$1 = (state_47174[(2)]);
var inst_47157 = (inst_47156__$1 == null);
var state_47174__$1 = (function (){var statearr_47178 = state_47174;
(statearr_47178[(7)] = inst_47156__$1);

return statearr_47178;
})();
if(cljs.core.truth_(inst_47157)){
var statearr_47179_48031 = state_47174__$1;
(statearr_47179_48031[(1)] = (5));

} else {
var statearr_47180_48032 = state_47174__$1;
(statearr_47180_48032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (6))){
var inst_47156 = (state_47174[(7)]);
var inst_47161 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47156) : p.call(null,inst_47156));
var state_47174__$1 = state_47174;
if(cljs.core.truth_(inst_47161)){
var statearr_47181_48034 = state_47174__$1;
(statearr_47181_48034[(1)] = (8));

} else {
var statearr_47182_48035 = state_47174__$1;
(statearr_47182_48035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (3))){
var inst_47172 = (state_47174[(2)]);
var state_47174__$1 = state_47174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47174__$1,inst_47172);
} else {
if((state_val_47175 === (2))){
var state_47174__$1 = state_47174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47174__$1,(4),ch);
} else {
if((state_val_47175 === (11))){
var inst_47164 = (state_47174[(2)]);
var state_47174__$1 = state_47174;
var statearr_47183_48036 = state_47174__$1;
(statearr_47183_48036[(2)] = inst_47164);

(statearr_47183_48036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (9))){
var state_47174__$1 = state_47174;
var statearr_47184_48037 = state_47174__$1;
(statearr_47184_48037[(2)] = null);

(statearr_47184_48037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (5))){
var inst_47159 = cljs.core.async.close_BANG_(out);
var state_47174__$1 = state_47174;
var statearr_47185_48038 = state_47174__$1;
(statearr_47185_48038[(2)] = inst_47159);

(statearr_47185_48038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (10))){
var inst_47167 = (state_47174[(2)]);
var state_47174__$1 = (function (){var statearr_47186 = state_47174;
(statearr_47186[(8)] = inst_47167);

return statearr_47186;
})();
var statearr_47187_48039 = state_47174__$1;
(statearr_47187_48039[(2)] = null);

(statearr_47187_48039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (8))){
var inst_47156 = (state_47174[(7)]);
var state_47174__$1 = state_47174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47174__$1,(11),out,inst_47156);
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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_47188 = [null,null,null,null,null,null,null,null,null];
(statearr_47188[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_47188[(1)] = (1));

return statearr_47188;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_47174){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_47174);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e47189){var ex__45170__auto__ = e47189;
var statearr_47190_48041 = state_47174;
(statearr_47190_48041[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_47174[(4)]))){
var statearr_47191_48042 = state_47174;
(statearr_47191_48042[(1)] = cljs.core.first((state_47174[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48043 = state_47174;
state_47174 = G__48043;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_47174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_47174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_47192 = f__45316__auto__();
(statearr_47192[(6)] = c__45315__auto___48024);

return statearr_47192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47194 = arguments.length;
switch (G__47194) {
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
var c__45315__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_47256){
var state_val_47257 = (state_47256[(1)]);
if((state_val_47257 === (7))){
var inst_47252 = (state_47256[(2)]);
var state_47256__$1 = state_47256;
var statearr_47258_48049 = state_47256__$1;
(statearr_47258_48049[(2)] = inst_47252);

(statearr_47258_48049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (20))){
var inst_47222 = (state_47256[(7)]);
var inst_47233 = (state_47256[(2)]);
var inst_47234 = cljs.core.next(inst_47222);
var inst_47208 = inst_47234;
var inst_47209 = null;
var inst_47210 = (0);
var inst_47211 = (0);
var state_47256__$1 = (function (){var statearr_47259 = state_47256;
(statearr_47259[(8)] = inst_47210);

(statearr_47259[(9)] = inst_47211);

(statearr_47259[(10)] = inst_47208);

(statearr_47259[(11)] = inst_47209);

(statearr_47259[(12)] = inst_47233);

return statearr_47259;
})();
var statearr_47260_48050 = state_47256__$1;
(statearr_47260_48050[(2)] = null);

(statearr_47260_48050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (1))){
var state_47256__$1 = state_47256;
var statearr_47261_48051 = state_47256__$1;
(statearr_47261_48051[(2)] = null);

(statearr_47261_48051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (4))){
var inst_47197 = (state_47256[(13)]);
var inst_47197__$1 = (state_47256[(2)]);
var inst_47198 = (inst_47197__$1 == null);
var state_47256__$1 = (function (){var statearr_47262 = state_47256;
(statearr_47262[(13)] = inst_47197__$1);

return statearr_47262;
})();
if(cljs.core.truth_(inst_47198)){
var statearr_47263_48052 = state_47256__$1;
(statearr_47263_48052[(1)] = (5));

} else {
var statearr_47264_48053 = state_47256__$1;
(statearr_47264_48053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (15))){
var state_47256__$1 = state_47256;
var statearr_47268_48054 = state_47256__$1;
(statearr_47268_48054[(2)] = null);

(statearr_47268_48054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (21))){
var state_47256__$1 = state_47256;
var statearr_47269_48055 = state_47256__$1;
(statearr_47269_48055[(2)] = null);

(statearr_47269_48055[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (13))){
var inst_47210 = (state_47256[(8)]);
var inst_47211 = (state_47256[(9)]);
var inst_47208 = (state_47256[(10)]);
var inst_47209 = (state_47256[(11)]);
var inst_47218 = (state_47256[(2)]);
var inst_47219 = (inst_47211 + (1));
var tmp47265 = inst_47210;
var tmp47266 = inst_47208;
var tmp47267 = inst_47209;
var inst_47208__$1 = tmp47266;
var inst_47209__$1 = tmp47267;
var inst_47210__$1 = tmp47265;
var inst_47211__$1 = inst_47219;
var state_47256__$1 = (function (){var statearr_47270 = state_47256;
(statearr_47270[(8)] = inst_47210__$1);

(statearr_47270[(14)] = inst_47218);

(statearr_47270[(9)] = inst_47211__$1);

(statearr_47270[(10)] = inst_47208__$1);

(statearr_47270[(11)] = inst_47209__$1);

return statearr_47270;
})();
var statearr_47271_48056 = state_47256__$1;
(statearr_47271_48056[(2)] = null);

(statearr_47271_48056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (22))){
var state_47256__$1 = state_47256;
var statearr_47272_48057 = state_47256__$1;
(statearr_47272_48057[(2)] = null);

(statearr_47272_48057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (6))){
var inst_47197 = (state_47256[(13)]);
var inst_47206 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47197) : f.call(null,inst_47197));
var inst_47207 = cljs.core.seq(inst_47206);
var inst_47208 = inst_47207;
var inst_47209 = null;
var inst_47210 = (0);
var inst_47211 = (0);
var state_47256__$1 = (function (){var statearr_47273 = state_47256;
(statearr_47273[(8)] = inst_47210);

(statearr_47273[(9)] = inst_47211);

(statearr_47273[(10)] = inst_47208);

(statearr_47273[(11)] = inst_47209);

return statearr_47273;
})();
var statearr_47274_48058 = state_47256__$1;
(statearr_47274_48058[(2)] = null);

(statearr_47274_48058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (17))){
var inst_47222 = (state_47256[(7)]);
var inst_47226 = cljs.core.chunk_first(inst_47222);
var inst_47227 = cljs.core.chunk_rest(inst_47222);
var inst_47228 = cljs.core.count(inst_47226);
var inst_47208 = inst_47227;
var inst_47209 = inst_47226;
var inst_47210 = inst_47228;
var inst_47211 = (0);
var state_47256__$1 = (function (){var statearr_47275 = state_47256;
(statearr_47275[(8)] = inst_47210);

(statearr_47275[(9)] = inst_47211);

(statearr_47275[(10)] = inst_47208);

(statearr_47275[(11)] = inst_47209);

return statearr_47275;
})();
var statearr_47276_48059 = state_47256__$1;
(statearr_47276_48059[(2)] = null);

(statearr_47276_48059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (3))){
var inst_47254 = (state_47256[(2)]);
var state_47256__$1 = state_47256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47256__$1,inst_47254);
} else {
if((state_val_47257 === (12))){
var inst_47242 = (state_47256[(2)]);
var state_47256__$1 = state_47256;
var statearr_47277_48060 = state_47256__$1;
(statearr_47277_48060[(2)] = inst_47242);

(statearr_47277_48060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (2))){
var state_47256__$1 = state_47256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47256__$1,(4),in$);
} else {
if((state_val_47257 === (23))){
var inst_47250 = (state_47256[(2)]);
var state_47256__$1 = state_47256;
var statearr_47278_48061 = state_47256__$1;
(statearr_47278_48061[(2)] = inst_47250);

(statearr_47278_48061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (19))){
var inst_47237 = (state_47256[(2)]);
var state_47256__$1 = state_47256;
var statearr_47279_48062 = state_47256__$1;
(statearr_47279_48062[(2)] = inst_47237);

(statearr_47279_48062[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (11))){
var inst_47208 = (state_47256[(10)]);
var inst_47222 = (state_47256[(7)]);
var inst_47222__$1 = cljs.core.seq(inst_47208);
var state_47256__$1 = (function (){var statearr_47280 = state_47256;
(statearr_47280[(7)] = inst_47222__$1);

return statearr_47280;
})();
if(inst_47222__$1){
var statearr_47281_48064 = state_47256__$1;
(statearr_47281_48064[(1)] = (14));

} else {
var statearr_47282_48065 = state_47256__$1;
(statearr_47282_48065[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (9))){
var inst_47244 = (state_47256[(2)]);
var inst_47245 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47256__$1 = (function (){var statearr_47283 = state_47256;
(statearr_47283[(15)] = inst_47244);

return statearr_47283;
})();
if(cljs.core.truth_(inst_47245)){
var statearr_47284_48069 = state_47256__$1;
(statearr_47284_48069[(1)] = (21));

} else {
var statearr_47285_48070 = state_47256__$1;
(statearr_47285_48070[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (5))){
var inst_47200 = cljs.core.async.close_BANG_(out);
var state_47256__$1 = state_47256;
var statearr_47286_48071 = state_47256__$1;
(statearr_47286_48071[(2)] = inst_47200);

(statearr_47286_48071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (14))){
var inst_47222 = (state_47256[(7)]);
var inst_47224 = cljs.core.chunked_seq_QMARK_(inst_47222);
var state_47256__$1 = state_47256;
if(inst_47224){
var statearr_47287_48072 = state_47256__$1;
(statearr_47287_48072[(1)] = (17));

} else {
var statearr_47288_48073 = state_47256__$1;
(statearr_47288_48073[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (16))){
var inst_47240 = (state_47256[(2)]);
var state_47256__$1 = state_47256;
var statearr_47289_48074 = state_47256__$1;
(statearr_47289_48074[(2)] = inst_47240);

(statearr_47289_48074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (10))){
var inst_47211 = (state_47256[(9)]);
var inst_47209 = (state_47256[(11)]);
var inst_47216 = cljs.core._nth(inst_47209,inst_47211);
var state_47256__$1 = state_47256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47256__$1,(13),out,inst_47216);
} else {
if((state_val_47257 === (18))){
var inst_47222 = (state_47256[(7)]);
var inst_47231 = cljs.core.first(inst_47222);
var state_47256__$1 = state_47256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47256__$1,(20),out,inst_47231);
} else {
if((state_val_47257 === (8))){
var inst_47210 = (state_47256[(8)]);
var inst_47211 = (state_47256[(9)]);
var inst_47213 = (inst_47211 < inst_47210);
var inst_47214 = inst_47213;
var state_47256__$1 = state_47256;
if(cljs.core.truth_(inst_47214)){
var statearr_47290_48075 = state_47256__$1;
(statearr_47290_48075[(1)] = (10));

} else {
var statearr_47291_48076 = state_47256__$1;
(statearr_47291_48076[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__45167__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45167__auto____0 = (function (){
var statearr_47292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47292[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45167__auto__);

(statearr_47292[(1)] = (1));

return statearr_47292;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45167__auto____1 = (function (state_47256){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_47256);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e47293){var ex__45170__auto__ = e47293;
var statearr_47294_48077 = state_47256;
(statearr_47294_48077[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_47256[(4)]))){
var statearr_47295_48078 = state_47256;
(statearr_47295_48078[(1)] = cljs.core.first((state_47256[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48079 = state_47256;
state_47256 = G__48079;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45167__auto__ = function(state_47256){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45167__auto____1.call(this,state_47256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45167__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45167__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_47296 = f__45316__auto__();
(statearr_47296[(6)] = c__45315__auto__);

return statearr_47296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));

return c__45315__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47298 = arguments.length;
switch (G__47298) {
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
var G__47300 = arguments.length;
switch (G__47300) {
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
var G__47302 = arguments.length;
switch (G__47302) {
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
var c__45315__auto___48084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_47326){
var state_val_47327 = (state_47326[(1)]);
if((state_val_47327 === (7))){
var inst_47321 = (state_47326[(2)]);
var state_47326__$1 = state_47326;
var statearr_47328_48085 = state_47326__$1;
(statearr_47328_48085[(2)] = inst_47321);

(statearr_47328_48085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (1))){
var inst_47303 = null;
var state_47326__$1 = (function (){var statearr_47329 = state_47326;
(statearr_47329[(7)] = inst_47303);

return statearr_47329;
})();
var statearr_47330_48086 = state_47326__$1;
(statearr_47330_48086[(2)] = null);

(statearr_47330_48086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (4))){
var inst_47306 = (state_47326[(8)]);
var inst_47306__$1 = (state_47326[(2)]);
var inst_47307 = (inst_47306__$1 == null);
var inst_47308 = cljs.core.not(inst_47307);
var state_47326__$1 = (function (){var statearr_47331 = state_47326;
(statearr_47331[(8)] = inst_47306__$1);

return statearr_47331;
})();
if(inst_47308){
var statearr_47332_48087 = state_47326__$1;
(statearr_47332_48087[(1)] = (5));

} else {
var statearr_47333_48088 = state_47326__$1;
(statearr_47333_48088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (6))){
var state_47326__$1 = state_47326;
var statearr_47334_48089 = state_47326__$1;
(statearr_47334_48089[(2)] = null);

(statearr_47334_48089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (3))){
var inst_47323 = (state_47326[(2)]);
var inst_47324 = cljs.core.async.close_BANG_(out);
var state_47326__$1 = (function (){var statearr_47335 = state_47326;
(statearr_47335[(9)] = inst_47323);

return statearr_47335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47326__$1,inst_47324);
} else {
if((state_val_47327 === (2))){
var state_47326__$1 = state_47326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47326__$1,(4),ch);
} else {
if((state_val_47327 === (11))){
var inst_47306 = (state_47326[(8)]);
var inst_47315 = (state_47326[(2)]);
var inst_47303 = inst_47306;
var state_47326__$1 = (function (){var statearr_47336 = state_47326;
(statearr_47336[(7)] = inst_47303);

(statearr_47336[(10)] = inst_47315);

return statearr_47336;
})();
var statearr_47337_48090 = state_47326__$1;
(statearr_47337_48090[(2)] = null);

(statearr_47337_48090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (9))){
var inst_47306 = (state_47326[(8)]);
var state_47326__$1 = state_47326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47326__$1,(11),out,inst_47306);
} else {
if((state_val_47327 === (5))){
var inst_47303 = (state_47326[(7)]);
var inst_47306 = (state_47326[(8)]);
var inst_47310 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47306,inst_47303);
var state_47326__$1 = state_47326;
if(inst_47310){
var statearr_47339_48091 = state_47326__$1;
(statearr_47339_48091[(1)] = (8));

} else {
var statearr_47340_48092 = state_47326__$1;
(statearr_47340_48092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (10))){
var inst_47318 = (state_47326[(2)]);
var state_47326__$1 = state_47326;
var statearr_47341_48093 = state_47326__$1;
(statearr_47341_48093[(2)] = inst_47318);

(statearr_47341_48093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (8))){
var inst_47303 = (state_47326[(7)]);
var tmp47338 = inst_47303;
var inst_47303__$1 = tmp47338;
var state_47326__$1 = (function (){var statearr_47342 = state_47326;
(statearr_47342[(7)] = inst_47303__$1);

return statearr_47342;
})();
var statearr_47343_48094 = state_47326__$1;
(statearr_47343_48094[(2)] = null);

(statearr_47343_48094[(1)] = (2));


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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_47344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47344[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_47344[(1)] = (1));

return statearr_47344;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_47326){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_47326);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e47345){var ex__45170__auto__ = e47345;
var statearr_47346_48095 = state_47326;
(statearr_47346_48095[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_47326[(4)]))){
var statearr_47347_48096 = state_47326;
(statearr_47347_48096[(1)] = cljs.core.first((state_47326[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48097 = state_47326;
state_47326 = G__48097;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_47326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_47326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_47348 = f__45316__auto__();
(statearr_47348[(6)] = c__45315__auto___48084);

return statearr_47348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47350 = arguments.length;
switch (G__47350) {
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
var c__45315__auto___48100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_47388){
var state_val_47389 = (state_47388[(1)]);
if((state_val_47389 === (7))){
var inst_47384 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
var statearr_47390_48104 = state_47388__$1;
(statearr_47390_48104[(2)] = inst_47384);

(statearr_47390_48104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (1))){
var inst_47351 = (new Array(n));
var inst_47352 = inst_47351;
var inst_47353 = (0);
var state_47388__$1 = (function (){var statearr_47391 = state_47388;
(statearr_47391[(7)] = inst_47353);

(statearr_47391[(8)] = inst_47352);

return statearr_47391;
})();
var statearr_47392_48105 = state_47388__$1;
(statearr_47392_48105[(2)] = null);

(statearr_47392_48105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (4))){
var inst_47356 = (state_47388[(9)]);
var inst_47356__$1 = (state_47388[(2)]);
var inst_47357 = (inst_47356__$1 == null);
var inst_47358 = cljs.core.not(inst_47357);
var state_47388__$1 = (function (){var statearr_47393 = state_47388;
(statearr_47393[(9)] = inst_47356__$1);

return statearr_47393;
})();
if(inst_47358){
var statearr_47394_48107 = state_47388__$1;
(statearr_47394_48107[(1)] = (5));

} else {
var statearr_47395_48111 = state_47388__$1;
(statearr_47395_48111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (15))){
var inst_47378 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
var statearr_47396_48112 = state_47388__$1;
(statearr_47396_48112[(2)] = inst_47378);

(statearr_47396_48112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (13))){
var state_47388__$1 = state_47388;
var statearr_47397_48113 = state_47388__$1;
(statearr_47397_48113[(2)] = null);

(statearr_47397_48113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (6))){
var inst_47353 = (state_47388[(7)]);
var inst_47374 = (inst_47353 > (0));
var state_47388__$1 = state_47388;
if(cljs.core.truth_(inst_47374)){
var statearr_47398_48114 = state_47388__$1;
(statearr_47398_48114[(1)] = (12));

} else {
var statearr_47399_48115 = state_47388__$1;
(statearr_47399_48115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (3))){
var inst_47386 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47388__$1,inst_47386);
} else {
if((state_val_47389 === (12))){
var inst_47352 = (state_47388[(8)]);
var inst_47376 = cljs.core.vec(inst_47352);
var state_47388__$1 = state_47388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47388__$1,(15),out,inst_47376);
} else {
if((state_val_47389 === (2))){
var state_47388__$1 = state_47388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47388__$1,(4),ch);
} else {
if((state_val_47389 === (11))){
var inst_47368 = (state_47388[(2)]);
var inst_47369 = (new Array(n));
var inst_47352 = inst_47369;
var inst_47353 = (0);
var state_47388__$1 = (function (){var statearr_47400 = state_47388;
(statearr_47400[(10)] = inst_47368);

(statearr_47400[(7)] = inst_47353);

(statearr_47400[(8)] = inst_47352);

return statearr_47400;
})();
var statearr_47401_48118 = state_47388__$1;
(statearr_47401_48118[(2)] = null);

(statearr_47401_48118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (9))){
var inst_47352 = (state_47388[(8)]);
var inst_47366 = cljs.core.vec(inst_47352);
var state_47388__$1 = state_47388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47388__$1,(11),out,inst_47366);
} else {
if((state_val_47389 === (5))){
var inst_47353 = (state_47388[(7)]);
var inst_47356 = (state_47388[(9)]);
var inst_47352 = (state_47388[(8)]);
var inst_47361 = (state_47388[(11)]);
var inst_47360 = (inst_47352[inst_47353] = inst_47356);
var inst_47361__$1 = (inst_47353 + (1));
var inst_47362 = (inst_47361__$1 < n);
var state_47388__$1 = (function (){var statearr_47402 = state_47388;
(statearr_47402[(12)] = inst_47360);

(statearr_47402[(11)] = inst_47361__$1);

return statearr_47402;
})();
if(cljs.core.truth_(inst_47362)){
var statearr_47403_48119 = state_47388__$1;
(statearr_47403_48119[(1)] = (8));

} else {
var statearr_47404_48120 = state_47388__$1;
(statearr_47404_48120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (14))){
var inst_47381 = (state_47388[(2)]);
var inst_47382 = cljs.core.async.close_BANG_(out);
var state_47388__$1 = (function (){var statearr_47406 = state_47388;
(statearr_47406[(13)] = inst_47381);

return statearr_47406;
})();
var statearr_47407_48121 = state_47388__$1;
(statearr_47407_48121[(2)] = inst_47382);

(statearr_47407_48121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (10))){
var inst_47372 = (state_47388[(2)]);
var state_47388__$1 = state_47388;
var statearr_47408_48122 = state_47388__$1;
(statearr_47408_48122[(2)] = inst_47372);

(statearr_47408_48122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47389 === (8))){
var inst_47352 = (state_47388[(8)]);
var inst_47361 = (state_47388[(11)]);
var tmp47405 = inst_47352;
var inst_47352__$1 = tmp47405;
var inst_47353 = inst_47361;
var state_47388__$1 = (function (){var statearr_47409 = state_47388;
(statearr_47409[(7)] = inst_47353);

(statearr_47409[(8)] = inst_47352__$1);

return statearr_47409;
})();
var statearr_47410_48123 = state_47388__$1;
(statearr_47410_48123[(2)] = null);

(statearr_47410_48123[(1)] = (2));


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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_47411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47411[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_47411[(1)] = (1));

return statearr_47411;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_47388){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_47388);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e47412){var ex__45170__auto__ = e47412;
var statearr_47413_48124 = state_47388;
(statearr_47413_48124[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_47388[(4)]))){
var statearr_47414_48125 = state_47388;
(statearr_47414_48125[(1)] = cljs.core.first((state_47388[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48126 = state_47388;
state_47388 = G__48126;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_47388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_47388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_47415 = f__45316__auto__();
(statearr_47415[(6)] = c__45315__auto___48100);

return statearr_47415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47417 = arguments.length;
switch (G__47417) {
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
var c__45315__auto___48128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45316__auto__ = (function (){var switch__45166__auto__ = (function (state_47462){
var state_val_47463 = (state_47462[(1)]);
if((state_val_47463 === (7))){
var inst_47458 = (state_47462[(2)]);
var state_47462__$1 = state_47462;
var statearr_47464_48129 = state_47462__$1;
(statearr_47464_48129[(2)] = inst_47458);

(statearr_47464_48129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (1))){
var inst_47418 = [];
var inst_47419 = inst_47418;
var inst_47420 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47462__$1 = (function (){var statearr_47465 = state_47462;
(statearr_47465[(7)] = inst_47420);

(statearr_47465[(8)] = inst_47419);

return statearr_47465;
})();
var statearr_47466_48130 = state_47462__$1;
(statearr_47466_48130[(2)] = null);

(statearr_47466_48130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (4))){
var inst_47423 = (state_47462[(9)]);
var inst_47423__$1 = (state_47462[(2)]);
var inst_47424 = (inst_47423__$1 == null);
var inst_47425 = cljs.core.not(inst_47424);
var state_47462__$1 = (function (){var statearr_47467 = state_47462;
(statearr_47467[(9)] = inst_47423__$1);

return statearr_47467;
})();
if(inst_47425){
var statearr_47468_48131 = state_47462__$1;
(statearr_47468_48131[(1)] = (5));

} else {
var statearr_47469_48132 = state_47462__$1;
(statearr_47469_48132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (15))){
var inst_47419 = (state_47462[(8)]);
var inst_47450 = cljs.core.vec(inst_47419);
var state_47462__$1 = state_47462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47462__$1,(18),out,inst_47450);
} else {
if((state_val_47463 === (13))){
var inst_47445 = (state_47462[(2)]);
var state_47462__$1 = state_47462;
var statearr_47470_48133 = state_47462__$1;
(statearr_47470_48133[(2)] = inst_47445);

(statearr_47470_48133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (6))){
var inst_47419 = (state_47462[(8)]);
var inst_47447 = inst_47419.length;
var inst_47448 = (inst_47447 > (0));
var state_47462__$1 = state_47462;
if(cljs.core.truth_(inst_47448)){
var statearr_47471_48134 = state_47462__$1;
(statearr_47471_48134[(1)] = (15));

} else {
var statearr_47472_48135 = state_47462__$1;
(statearr_47472_48135[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (17))){
var inst_47455 = (state_47462[(2)]);
var inst_47456 = cljs.core.async.close_BANG_(out);
var state_47462__$1 = (function (){var statearr_47473 = state_47462;
(statearr_47473[(10)] = inst_47455);

return statearr_47473;
})();
var statearr_47474_48136 = state_47462__$1;
(statearr_47474_48136[(2)] = inst_47456);

(statearr_47474_48136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (3))){
var inst_47460 = (state_47462[(2)]);
var state_47462__$1 = state_47462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47462__$1,inst_47460);
} else {
if((state_val_47463 === (12))){
var inst_47419 = (state_47462[(8)]);
var inst_47438 = cljs.core.vec(inst_47419);
var state_47462__$1 = state_47462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47462__$1,(14),out,inst_47438);
} else {
if((state_val_47463 === (2))){
var state_47462__$1 = state_47462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47462__$1,(4),ch);
} else {
if((state_val_47463 === (11))){
var inst_47427 = (state_47462[(11)]);
var inst_47419 = (state_47462[(8)]);
var inst_47423 = (state_47462[(9)]);
var inst_47435 = inst_47419.push(inst_47423);
var tmp47475 = inst_47419;
var inst_47419__$1 = tmp47475;
var inst_47420 = inst_47427;
var state_47462__$1 = (function (){var statearr_47476 = state_47462;
(statearr_47476[(7)] = inst_47420);

(statearr_47476[(12)] = inst_47435);

(statearr_47476[(8)] = inst_47419__$1);

return statearr_47476;
})();
var statearr_47477_48137 = state_47462__$1;
(statearr_47477_48137[(2)] = null);

(statearr_47477_48137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (9))){
var inst_47420 = (state_47462[(7)]);
var inst_47431 = cljs.core.keyword_identical_QMARK_(inst_47420,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47462__$1 = state_47462;
var statearr_47478_48138 = state_47462__$1;
(statearr_47478_48138[(2)] = inst_47431);

(statearr_47478_48138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (5))){
var inst_47428 = (state_47462[(13)]);
var inst_47420 = (state_47462[(7)]);
var inst_47427 = (state_47462[(11)]);
var inst_47423 = (state_47462[(9)]);
var inst_47427__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47423) : f.call(null,inst_47423));
var inst_47428__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47427__$1,inst_47420);
var state_47462__$1 = (function (){var statearr_47479 = state_47462;
(statearr_47479[(13)] = inst_47428__$1);

(statearr_47479[(11)] = inst_47427__$1);

return statearr_47479;
})();
if(inst_47428__$1){
var statearr_47480_48139 = state_47462__$1;
(statearr_47480_48139[(1)] = (8));

} else {
var statearr_47481_48140 = state_47462__$1;
(statearr_47481_48140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (14))){
var inst_47427 = (state_47462[(11)]);
var inst_47423 = (state_47462[(9)]);
var inst_47440 = (state_47462[(2)]);
var inst_47441 = [];
var inst_47442 = inst_47441.push(inst_47423);
var inst_47419 = inst_47441;
var inst_47420 = inst_47427;
var state_47462__$1 = (function (){var statearr_47482 = state_47462;
(statearr_47482[(14)] = inst_47440);

(statearr_47482[(7)] = inst_47420);

(statearr_47482[(8)] = inst_47419);

(statearr_47482[(15)] = inst_47442);

return statearr_47482;
})();
var statearr_47483_48141 = state_47462__$1;
(statearr_47483_48141[(2)] = null);

(statearr_47483_48141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (16))){
var state_47462__$1 = state_47462;
var statearr_47484_48142 = state_47462__$1;
(statearr_47484_48142[(2)] = null);

(statearr_47484_48142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (10))){
var inst_47433 = (state_47462[(2)]);
var state_47462__$1 = state_47462;
if(cljs.core.truth_(inst_47433)){
var statearr_47485_48143 = state_47462__$1;
(statearr_47485_48143[(1)] = (11));

} else {
var statearr_47486_48144 = state_47462__$1;
(statearr_47486_48144[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (18))){
var inst_47452 = (state_47462[(2)]);
var state_47462__$1 = state_47462;
var statearr_47487_48145 = state_47462__$1;
(statearr_47487_48145[(2)] = inst_47452);

(statearr_47487_48145[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47463 === (8))){
var inst_47428 = (state_47462[(13)]);
var state_47462__$1 = state_47462;
var statearr_47488_48146 = state_47462__$1;
(statearr_47488_48146[(2)] = inst_47428);

(statearr_47488_48146[(1)] = (10));


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
var cljs$core$async$state_machine__45167__auto__ = null;
var cljs$core$async$state_machine__45167__auto____0 = (function (){
var statearr_47489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47489[(0)] = cljs$core$async$state_machine__45167__auto__);

(statearr_47489[(1)] = (1));

return statearr_47489;
});
var cljs$core$async$state_machine__45167__auto____1 = (function (state_47462){
while(true){
var ret_value__45168__auto__ = (function (){try{while(true){
var result__45169__auto__ = switch__45166__auto__(state_47462);
if(cljs.core.keyword_identical_QMARK_(result__45169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45169__auto__;
}
break;
}
}catch (e47490){var ex__45170__auto__ = e47490;
var statearr_47491_48147 = state_47462;
(statearr_47491_48147[(2)] = ex__45170__auto__);


if(cljs.core.seq((state_47462[(4)]))){
var statearr_47492_48148 = state_47462;
(statearr_47492_48148[(1)] = cljs.core.first((state_47462[(4)])));

} else {
throw ex__45170__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48152 = state_47462;
state_47462 = G__48152;
continue;
} else {
return ret_value__45168__auto__;
}
break;
}
});
cljs$core$async$state_machine__45167__auto__ = function(state_47462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45167__auto____1.call(this,state_47462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45167__auto____0;
cljs$core$async$state_machine__45167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45167__auto____1;
return cljs$core$async$state_machine__45167__auto__;
})()
})();
var state__45317__auto__ = (function (){var statearr_47493 = f__45316__auto__();
(statearr_47493[(6)] = c__45315__auto___48128);

return statearr_47493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45317__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
