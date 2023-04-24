goog.provide('indexed.db');
/**
 * Returns true if the given value satisfies the IDBFactory protocol
 */
indexed.db.factory_QMARK_ = (function indexed$db$factory_QMARK_(x){
return indexed.db.impl.factory.factory_QMARK_(x);
});
/**
 * Return an implementation of the IDBFactory protocol backed by
 * the global indexedDB object
 */
indexed.db.create_factory = (function indexed$db$create_factory(){
return indexed.db.impl.factory.create_factory();
});
/**
 * Return an IDBRequest whose result is a native IDBDatabase object.
 * 
 * The version value is optional.
 * 
 * If the version is not provided and the database exists, then a connection
 * to the database will be opened without changing its version.
 * 
 * If the version is not provided and the database does not exist,
 * then it will be created with version `1`
 * 
 * The indexed.db library makes no assumptions about how consumers want to handle
 * events. In order to use the indexed.db API with the result of an open reqest, it
 * will need to be converted to an implementation of the IDBDatabase protocol:
 * 
 * ```clojure
 * (let [open-request (db/open "my-db")]
 *   (-> open-request
 *       (db/on "upgradeneeded" handle-upgrade)
 *       (db/on "success" #(db/create-database
 *                             (db/result open-request)))))
 * ```
 */
indexed.db.open = (function indexed$db$open(var_args){
var G__45207 = arguments.length;
switch (G__45207) {
case 3:
return indexed.db.open.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.open.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.open.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.open.cljs$core$IFn$_invoke$arity$3 = (function (factory,name,version){
return indexed.db.impl.factory.open.cljs$core$IFn$_invoke$arity$3(factory,name,version);
}));

(indexed.db.open.cljs$core$IFn$_invoke$arity$2 = (function (name,version){
return indexed.db.impl.factory.open.cljs$core$IFn$_invoke$arity$2(name,version);
}));

(indexed.db.open.cljs$core$IFn$_invoke$arity$1 = (function (name){
return indexed.db.impl.factory.open.cljs$core$IFn$_invoke$arity$1(name);
}));

(indexed.db.open.cljs$lang$maxFixedArity = 3);

/**
 * Request the deletion of a database by name.
 * 
 * Returns an IDBRequest
 */
indexed.db.delete_database = (function indexed$db$delete_database(var_args){
var G__45209 = arguments.length;
switch (G__45209) {
case 2:
return indexed.db.delete_database.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.delete_database.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.delete_database.cljs$core$IFn$_invoke$arity$2 = (function (factory,name){
return indexed.db.impl.factory.delete_database.cljs$core$IFn$_invoke$arity$2(factory,name);
}));

(indexed.db.delete_database.cljs$core$IFn$_invoke$arity$1 = (function (name){
return indexed.db.impl.factory.delete_database.cljs$core$IFn$_invoke$arity$1(name);
}));

(indexed.db.delete_database.cljs$lang$maxFixedArity = 2);

/**
 * Compares two values as keys to determine equality and ordering for IndexedDB operations,
 * such as storing and iterating.
 * 
 * | returned value | description                          |
 * |:---------------|-------------------------------------:|
 * | -1             | 1st key is less than the 2nd key     |
 * | 0              | 1st key is equal to the 2nd key      |
 * | 1              | 1st key is greater than the 2nd key  |
 */
indexed.db.cmp = (function indexed$db$cmp(var_args){
var G__45211 = arguments.length;
switch (G__45211) {
case 3:
return indexed.db.cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.cmp.cljs$core$IFn$_invoke$arity$3 = (function (factory,a,b){
return indexed.db.impl.factory.cmp.cljs$core$IFn$_invoke$arity$3(factory,a,b);
}));

(indexed.db.cmp.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return indexed.db.impl.factory.cmp.cljs$core$IFn$_invoke$arity$2(a,b);
}));

(indexed.db.cmp.cljs$lang$maxFixedArity = 3);

/**
 * Calls the given function with an error or a sequence of all
 * available databases, including their names and versions
 */
indexed.db.databases = (function indexed$db$databases(var_args){
var G__45213 = arguments.length;
switch (G__45213) {
case 2:
return indexed.db.databases.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.databases.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.databases.cljs$core$IFn$_invoke$arity$2 = (function (factory,fn_1){
indexed.db.impl.factory.databases.cljs$core$IFn$_invoke$arity$2(factory,fn_1);

return factory;
}));

(indexed.db.databases.cljs$core$IFn$_invoke$arity$1 = (function (fn_1){
return indexed.db.impl.factory.databases.cljs$core$IFn$_invoke$arity$1(fn_1);
}));

(indexed.db.databases.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the given value satisfies the IDBDatabase protocol
 */
indexed.db.database_QMARK_ = (function indexed$db$database_QMARK_(x){
return indexed.db.impl.database.database_QMARK_(x);
});
/**
 * Returns an implementation of the IDBDatabase protocol that is associated
 * with `belongs-to-database` (presumably an IDBTransaction implementation)
 */
indexed.db.db = (function indexed$db$db(belongs_to_database){
return indexed.db.impl.database.db(belongs_to_database);
});
/**
 * An alias for the [[indexed.db/db]] function
 */
indexed.db.get_database = (function indexed$db$get_database(belongs_to_database){
return indexed.db.db(belongs_to_database);
});
/**
 * A factory function for creating an implementation of the IDBDatabase protocol
 * from a native js/IDBDatabase
 */
indexed.db.create_database = (function indexed$db$create_database(js_idb){
return indexed.db.impl.database.create_database(js_idb);
});
/**
 * Returns immediately and closes the connection in a separate thread.
 * 
 * The connection is not actually closed until all transactions created using this
 * connection are complete. No new transactions can be created for this connection
 * once this method is called. Methods that create transactions throw an exception
 * if a closing operation is pending.
 */
indexed.db.close = (function indexed$db$close(db){
return indexed.db.impl.database.close(db);
});
/**
 * Destroys the object store with the given name in the connected database, along with
 * any indexes that reference it.
 */
indexed.db.delete_object_store = (function indexed$db$delete_object_store(db,name){
return indexed.db.impl.database.delete_object_store(db,name);
});
/**
 * Returns a sequence of object store names from the given database or transaction
 */
indexed.db.object_store_names = (function indexed$db$object_store_names(x){
var G__45214 = x;
var G__45214__$1 = (((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBTransaction$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(indexed.db.impl.protocols.IDBTransaction,x):false)):cljs.core.native_satisfies_QMARK_(indexed.db.impl.protocols.IDBTransaction,x)))?indexed.db.db(G__45214):G__45214);
return indexed.db.impl.database.object_store_names(G__45214__$1);

});
/**
 * Returns an integer version of the connected database
 */
indexed.db.version = (function indexed$db$version(db){
return indexed.db.impl.database.version(db);
});
/**
 * Immediately returns an implementation of the IDBTransaction protocol.
 * The IDBTransaction protocol provides functions that can be used to access
 * object stores.
 */
indexed.db.transaction = (function indexed$db$transaction(var_args){
var G__45217 = arguments.length;
switch (G__45217) {
case 4:
return indexed.db.transaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return indexed.db.transaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.transaction.cljs$core$IFn$_invoke$arity$4 = (function (db,store_names,mode,options){
return indexed.db.impl.database.transaction.cljs$core$IFn$_invoke$arity$4(db,store_names,mode,options);
}));

(indexed.db.transaction.cljs$core$IFn$_invoke$arity$3 = (function (db,store_names,mode){
return indexed.db.impl.database.transaction.cljs$core$IFn$_invoke$arity$3(db,store_names,mode);
}));

(indexed.db.transaction.cljs$core$IFn$_invoke$arity$2 = (function (db,store_names){
return indexed.db.impl.database.transaction.cljs$core$IFn$_invoke$arity$2(db,store_names);
}));

(indexed.db.transaction.cljs$lang$maxFixedArity = 4);

/**
 * Returns true if the given value satisfies the IDBCursor protocol
 */
indexed.db.cursor_QMARK_ = (function indexed$db$cursor_QMARK_(x){
return indexed.db.impl.cursor.cursor_QMARK_(x);
});
/**
 * A factory function for creating an implementation of the IDBCursor protocol
 * from a native js/IDBCursor
 */
indexed.db.create_cursor = (function indexed$db$create_cursor(js_cursor){
return indexed.db.impl.cursor.create_cursor(js_cursor);
});
/**
 * Returns the direction of traversal of the cursor. See [[indexed.db/open-cursor]]
 * for an explanation of possible direction values
 */
indexed.db.direction = (function indexed$db$direction(cursor){
return indexed.db.impl.cursor.direction(cursor);
});
/**
 * Returns the key for the record at the cursor's position
 */
indexed.db.key = (function indexed$db$key(cursor){
return indexed.db.impl.cursor.key(cursor);
});
/**
 * Interface returns the cursor's current effective key. If the cursor is currently being iterated
 * or has iterated outside its range, this is set to undefined. 
 */
indexed.db.primary_key = (function indexed$db$primary_key(cursor){
return indexed.db.impl.cursor.primary_key(cursor);
});
/**
 * Sets the number of times a cursor should move its position forward
 */
indexed.db.advance = (function indexed$db$advance(cursor,count){
return indexed.db.impl.cursor.advance(cursor,count);
});
/**
 * Advances the cursor to the next position along its direction, to the item whose key matches
 * the optional key parameter
 */
indexed.db.continue$ = (function indexed$db$continue(var_args){
var G__45219 = arguments.length;
switch (G__45219) {
case 2:
return indexed.db.continue$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.continue$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.continue$.cljs$core$IFn$_invoke$arity$2 = (function (cursor,k){
return indexed.db.impl.cursor.continue$.cljs$core$IFn$_invoke$arity$2(cursor,k);
}));

(indexed.db.continue$.cljs$core$IFn$_invoke$arity$1 = (function (cursor){
return indexed.db.continue$.cljs$core$IFn$_invoke$arity$2(cursor,null);
}));

(indexed.db.continue$.cljs$lang$maxFixedArity = 2);

/**
 * Advances the cursor to the item whose key matches the key parameter as well as whose primary key
 * matches the primary key parameter.
 * 
 * A typical use case, is to resume the iteration where a previous cursor has been closed, without having to compare the keys one by one.
 */
indexed.db.continue_primary_key = (function indexed$db$continue_primary_key(cursor,k,primary_key){
return indexed.db.impl.cursor.continue_primary_key(cursor,k,primary_key);
});
/**
 * Returns an implementation of the IDBRequest protocol, and, in a separate thread, updates the value
 * at the current position of the cursor in the object store.
 * 
 * If the cursor points to a record that has just been deleted, a new record is created.
 * 
 * Be aware that you can't call update (or delete) on cursors obtained from open-key-cursor.
 * For such needs, you have to use open-cursor instead
 */
indexed.db.update = (function indexed$db$update(cursor,value){
return indexed.db.impl.cursor.update(cursor,value);
});
/**
 * Returns true if the given value satisfies the IDBCursorWithValue protocol
 */
indexed.db.cursor_with_value_QMARK_ = (function indexed$db$cursor_with_value_QMARK_(x){
return indexed.db.impl.cursor.cursor_with_value_QMARK_(x);
});
/**
 * A factory function for creating an implementation of the IDBCursorWithValue protocol
 * from a native js/IDBCursorWithValue
 */
indexed.db.create_cursor_with_value = (function indexed$db$create_cursor_with_value(js_cursor_with_value){
return indexed.db.impl.cursor.create_cursor_with_value(js_cursor_with_value);
});
/**
 * Returns the value of the current cursor, whatever that is
 */
indexed.db.value = (function indexed$db$value(cursor_with_value){
return indexed.db.impl.cursor.value(cursor_with_value);
});
/**
 * Returns true if the given value satisfies the IDBRequest protocol
 */
indexed.db.request_QMARK_ = (function indexed$db$request_QMARK_(x){
return indexed.db.impl.request.request_QMARK_(x);
});
/**
 * A factory function for creating an implementation of the IDBRequest protocol
 * from a native js/IDBRequest
 */
indexed.db.create_request = (function indexed$db$create_request(js_request){
return indexed.db.impl.request.create_request(js_request);
});
/**
 * If a type stores an error for failed operations, this function
 * will return it.
 */
indexed.db.error = (function indexed$db$error(has_errors){
return indexed.db.impl.protocols.error(has_errors);
});
/**
 * Returns the result of the request
 */
indexed.db.result = (function indexed$db$result(db_request){
return indexed.db.impl.request.result(db_request);
});
/**
 * Returns the state of the request
 */
indexed.db.ready_state = (function indexed$db$ready_state(db_request){
return indexed.db.impl.request.ready_state(db_request);
});
/**
 * Returns true if the given value satisfies the IDBVersionChangeEvent protocol
 */
indexed.db.version_change_event_QMARK_ = (function indexed$db$version_change_event_QMARK_(x){
return indexed.db.impl.events.version_change_event_QMARK_(x);
});
/**
 * A factory function for creating an implementation of the IDBVersionChangeEvent protocol
 * from a native js/IDBVersionChangeEvent.
 * 
 * Note: Since this library intends to avoid making assumptions on event handling, this
 * type is not provided automatically. You must construct it manually when handling version
 * change events. An example from the test suite:
 * 
 * ```clojure
 * (defn handle-upgrade
 *   [fn-2]
 *   (fn [e]
 *     (let [event   (db/create-version-change-event e)
 *           request (db/get-request event)]
 *             (fn-2 (db/result request) (db/get-transaction request)))))
 * ```
 */
indexed.db.create_version_change_event = (function indexed$db$create_version_change_event(js_event){
return indexed.db.impl.events.create_version_change_event(js_event);
});
/**
 * Returns the new version number of the database
 */
indexed.db.new_version = (function indexed$db$new_version(version_change_event){
return indexed.db.impl.events.new_version(version_change_event);
});
/**
 * Returns the old version number of the database
 */
indexed.db.old_version = (function indexed$db$old_version(version_change_event){
return indexed.db.impl.events.old_version(version_change_event);
});
/**
 * Return the IDBRequest that `belongs-to-request` belongs to. This is presumably
 * an IDBVersionChangeEvent or IDBVersionChangeEvent implementation
 */
indexed.db.get_request = (function indexed$db$get_request(belongs_to_request){
return indexed.db.create_request(indexed.db.impl.protocols.idb_request(belongs_to_request));
});
/**
 * Returns true if the given value satisfies the EventTarget protocol
 */
indexed.db.event_target_QMARK_ = (function indexed$db$event_target_QMARK_(x){
return indexed.db.impl.events.event_target_QMARK_(x);
});
/**
 * A simple wrapper around the native addEventListener function.
 * 
 * Adds the event listener and returns the given event target
 */
indexed.db.on = (function indexed$db$on(var_args){
var G__45221 = arguments.length;
switch (G__45221) {
case 3:
return indexed.db.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return indexed.db.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.on.cljs$core$IFn$_invoke$arity$3 = (function (event_target,type,listener){
return indexed.db.impl.events.on.cljs$core$IFn$_invoke$arity$3(event_target,type,listener);
}));

(indexed.db.on.cljs$core$IFn$_invoke$arity$4 = (function (event_target,type,listener,options){
return indexed.db.impl.events.on.cljs$core$IFn$_invoke$arity$4(event_target,type,listener,options);
}));

(indexed.db.on.cljs$lang$maxFixedArity = 4);

/**
 * A simple wrapper around the native removeEventListener function.
 * 
 * Removes the event listener and returns the given event target
 */
indexed.db.off = (function indexed$db$off(var_args){
var G__45223 = arguments.length;
switch (G__45223) {
case 3:
return indexed.db.off.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return indexed.db.off.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.off.cljs$core$IFn$_invoke$arity$3 = (function (event_target,type,listener){
return indexed.db.impl.events.off.cljs$core$IFn$_invoke$arity$3(event_target,type,listener);
}));

(indexed.db.off.cljs$core$IFn$_invoke$arity$4 = (function (event_target,type,listener,options){
return indexed.db.impl.events.off.cljs$core$IFn$_invoke$arity$4(event_target,type,listener,options);
}));

(indexed.db.off.cljs$lang$maxFixedArity = 4);

/**
 * Returns true if the given value satisfies the IDBKeyRange protocol
 */
indexed.db.key_range_QMARK_ = (function indexed$db$key_range_QMARK_(x){
return indexed.db.impl.key_range.key_range_QMARK_(x);
});
/**
 * Returns a boolean indicating whether a specified key is inside the key range
 */
indexed.db.includes = (function indexed$db$includes(key_range,k){
return indexed.db.impl.key_range.includes(key_range,k);
});
/**
 * Returns the lower bound of the key range
 */
indexed.db.lower = (function indexed$db$lower(key_range){
return indexed.db.impl.key_range.lower(key_range);
});
/**
 * Returns the upper bound of the key range
 */
indexed.db.upper = (function indexed$db$upper(key_range){
return indexed.db.impl.key_range.upper(key_range);
});
/**
 * Returns false if the lower-bound value is included in the key range
 */
indexed.db.lower_open_QMARK_ = (function indexed$db$lower_open_QMARK_(key_range){
return indexed.db.impl.key_range.lower_open_QMARK_(key_range);
});
/**
 * Returns false if the upper-bound value is included in the key range
 */
indexed.db.upper_open_QMARK_ = (function indexed$db$upper_open_QMARK_(key_range){
return indexed.db.impl.key_range.upper_open_QMARK_(key_range);
});
/**
 * Creates a new key range with the specified upper and lower bounds. The bounds can be open
 * (that is, the bounds exclude the endpoint values) or closed (that is, the bounds include the endpoint values).
 * 
 * By default, the bounds are closed.
 */
indexed.db.bound = (function indexed$db$bound(var_args){
var G__45225 = arguments.length;
switch (G__45225) {
case 4:
return indexed.db.bound.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return indexed.db.bound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.bound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.bound.cljs$core$IFn$_invoke$arity$4 = (function (lower,upper,lower_open_QMARK_,upper_open_QMARK_){
return indexed.db.impl.key_range.bound.cljs$core$IFn$_invoke$arity$4(lower,upper,lower_open_QMARK_,upper_open_QMARK_);
}));

(indexed.db.bound.cljs$core$IFn$_invoke$arity$3 = (function (lower,upper,lower_open_QMARK_){
return indexed.db.impl.key_range.bound.cljs$core$IFn$_invoke$arity$3(lower,upper,lower_open_QMARK_);
}));

(indexed.db.bound.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return indexed.db.impl.key_range.bound.cljs$core$IFn$_invoke$arity$2(lower,upper);
}));

(indexed.db.bound.cljs$lang$maxFixedArity = 4);

/**
 * Creates a new key range containing a single value
 */
indexed.db.only = (function indexed$db$only(value){
return indexed.db.impl.key_range.only(value);
});
/**
 * Creates a new key range with only a lower bound.
 * 
 * By default, it includes the lower endpoint value and is closed
 */
indexed.db.lower_bound = (function indexed$db$lower_bound(var_args){
var G__45227 = arguments.length;
switch (G__45227) {
case 2:
return indexed.db.lower_bound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.lower_bound.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.lower_bound.cljs$core$IFn$_invoke$arity$2 = (function (lower,open_QMARK_){
return indexed.db.impl.key_range.lower_bound.cljs$core$IFn$_invoke$arity$2(lower,open_QMARK_);
}));

(indexed.db.lower_bound.cljs$core$IFn$_invoke$arity$1 = (function (lower){
return indexed.db.impl.key_range.lower_bound.cljs$core$IFn$_invoke$arity$1(lower);
}));

(indexed.db.lower_bound.cljs$lang$maxFixedArity = 2);

/**
 * Creates a new upper-bound key range.
 * 
 * By default, it includes the upper endpoint value and is closed
 */
indexed.db.upper_bound = (function indexed$db$upper_bound(var_args){
var G__45229 = arguments.length;
switch (G__45229) {
case 2:
return indexed.db.upper_bound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.upper_bound.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.upper_bound.cljs$core$IFn$_invoke$arity$2 = (function (upper,open_QMARK_){
return indexed.db.impl.key_range.upper_bound.cljs$core$IFn$_invoke$arity$2(upper,open_QMARK_);
}));

(indexed.db.upper_bound.cljs$core$IFn$_invoke$arity$1 = (function (upper){
return indexed.db.impl.key_range.upper_bound.cljs$core$IFn$_invoke$arity$1(upper);
}));

(indexed.db.upper_bound.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the given value satisfies the IDBTransaction protocol
 */
indexed.db.transaction_QMARK_ = (function indexed$db$transaction_QMARK_(x){
return indexed.db.impl.transaction.transaction_QMARK_(x);
});
/**
 * A factory function for creating an implementation of the IDBTransaction protocol
 * from a native js/IDBTransaction
 */
indexed.db.create_transaction = (function indexed$db$create_transaction(js_idb_transaction){
return indexed.db.impl.transaction.create_transaction(js_idb_transaction);
});
/**
 * Return the IDBTransaction that `belongs-to-txn` belongs to. This is presumably
 * an IDBRequest or IDBObjectStore implementation
 */
indexed.db.get_transaction = (function indexed$db$get_transaction(belongs_to_txn){
return indexed.db.impl.transaction.transaction(belongs_to_txn);
});
/**
 * Returns the durability hint the transaction was created with
 */
indexed.db.durability = (function indexed$db$durability(txn){
return indexed.db.impl.transaction.durability(txn);
});
/**
 * Returns the current mode for accessing the data in the object stores in the scope of the transaction
 */
indexed.db.mode = (function indexed$db$mode(txn){
return indexed.db.impl.transaction.mode(txn);
});
/**
 * Rolls back all the changes to objects in the database associated with this transaction
 */
indexed.db.abort = (function indexed$db$abort(txn){
return indexed.db.impl.transaction.abort(txn);
});
/**
 * Commits the transaction if it is called on an active transaction.
 * 
 * Note that commit doesn't normally have to be called — a transaction will automatically
 * commit when all outstanding requests have been satisfied and no new requests have been made.
 */
indexed.db.commit = (function indexed$db$commit(txn){
return indexed.db.impl.transaction.commit(txn);
});
/**
 * Returns the key path of this object store
 */
indexed.db.key_path = (function indexed$db$key_path(store_or_index){
return indexed.db.impl.store.key_path(store_or_index);
});
/**
 * Returns an implementation of the IDBRequest protocol, and, in a separate thread,
 * returns the total number of records that match the provided key or IDBKeyRange.
 * 
 * If no arguments are provided, it returns the total number of records in the store.
 */
indexed.db.count = (function indexed$db$count(var_args){
var G__45231 = arguments.length;
switch (G__45231) {
case 2:
return indexed.db.count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.count.cljs$core$IFn$_invoke$arity$2 = (function (store_or_index,query){
return indexed.db.impl.store.count.cljs$core$IFn$_invoke$arity$2(store_or_index,query);
}));

(indexed.db.count.cljs$core$IFn$_invoke$arity$1 = (function (store_or_index){
return indexed.db.impl.store.count.cljs$core$IFn$_invoke$arity$1(store_or_index);
}));

(indexed.db.count.cljs$lang$maxFixedArity = 2);

/**
 * Returns an implementation of the IDBRequest protocol, and, in a separate thread, finds either the value in the referenced
 * object store or index that corresponds to the given key or the first corresponding value, if key is set to an IDBKeyRange.
 * 
 * If a value is successfully found, then a structured clone of it is created and set as the result of the request
 */
indexed.db.get = (function indexed$db$get(store_or_index,k){
return indexed.db.impl.store.get(store_or_index,k);
});
/**
 * Returns an implementation of the IDBRequest protocol, and, in a separate thread, finds either the primary key
 * that corresponds to the given key in this index (or object store) or the first corresponding primary key, if key is set to an IDBKeyRange.
 * 
 * If a primary key is found, it is set as the result of the request object. Note that this doesn't return the whole record as get does.
 */
indexed.db.get_key = (function indexed$db$get_key(store_or_index,k){
return indexed.db.impl.store.get_key(store_or_index,k);
});
/**
 * Retrieves all objects that are inside the index or store. Returns an IDBRequest containing
 *   the results
 */
indexed.db.get_all = (function indexed$db$get_all(var_args){
var G__45233 = arguments.length;
switch (G__45233) {
case 3:
return indexed.db.get_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.get_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.get_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.get_all.cljs$core$IFn$_invoke$arity$3 = (function (store_or_index,query,count){
return indexed.db.impl.store.get_all.cljs$core$IFn$_invoke$arity$3(store_or_index,query,count);
}));

(indexed.db.get_all.cljs$core$IFn$_invoke$arity$2 = (function (store_or_index,query){
return indexed.db.impl.store.get_all.cljs$core$IFn$_invoke$arity$2(store_or_index,query);
}));

(indexed.db.get_all.cljs$core$IFn$_invoke$arity$1 = (function (store_or_index){
return indexed.db.impl.store.get_all.cljs$core$IFn$_invoke$arity$1(store_or_index);
}));

(indexed.db.get_all.cljs$lang$maxFixedArity = 3);

/**
 * Asynchronously retrieves the primary keys of all objects inside the index or store,
 * setting them as the result of the request
 */
indexed.db.get_all_keys = (function indexed$db$get_all_keys(var_args){
var G__45235 = arguments.length;
switch (G__45235) {
case 3:
return indexed.db.get_all_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.get_all_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.get_all_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.get_all_keys.cljs$core$IFn$_invoke$arity$3 = (function (store_or_index,query,count){
return indexed.db.impl.store.get_all_keys.cljs$core$IFn$_invoke$arity$3(store_or_index,query,count);
}));

(indexed.db.get_all_keys.cljs$core$IFn$_invoke$arity$2 = (function (store_or_index,query){
return indexed.db.impl.store.get_all_keys.cljs$core$IFn$_invoke$arity$2(store_or_index,query);
}));

(indexed.db.get_all_keys.cljs$core$IFn$_invoke$arity$1 = (function (store_or_index){
return indexed.db.impl.store.get_all_keys.cljs$core$IFn$_invoke$arity$1(store_or_index);
}));

(indexed.db.get_all_keys.cljs$lang$maxFixedArity = 3);

/**
 * Returns an IDBRequest, and, in a separate thread, creates a cursor over the specified key range.
 * 
 * The method sets the position of the cursor to the appropriate record, based on the specified direction.
 * 
 * If the key range is not specified or is null, then the range includes all the records.
 * 
 * The value of direction can be one of "next", "nextunique", "prev", or "prevunique".
 * 
 * "next": The cursor shows all records, including duplicates. It starts at the lower bound of the key range and moves upwards
 * (monotonically increasing in the order of keys).
 * 
 * "nextunique": The cursor shows all records, excluding duplicates. If multiple records exist with the same key,
 * only the first one iterated is retrieved. It starts at the lower bound of the key range and moves upwards.
 * 
 * "prev": The cursor shows all records, including duplicates. It starts at the upper bound of the key range and moves
 * downwards (monotonically decreasing in the order of keys).
 * 
 * "prevunique": The cursor shows all records, excluding duplicates. If multiple records exist with the same key,
 * only the first one iterated is retrieved. It starts at the upper bound of the key range and moves downwards.
 */
indexed.db.open_cursor = (function indexed$db$open_cursor(var_args){
var G__45237 = arguments.length;
switch (G__45237) {
case 3:
return indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$3 = (function (store_or_index,query,direction){
return indexed.db.impl.store.open_cursor.cljs$core$IFn$_invoke$arity$3(store_or_index,query,direction);
}));

(indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$2 = (function (store_or_index,query){
return indexed.db.impl.store.open_cursor.cljs$core$IFn$_invoke$arity$2(store_or_index,query);
}));

(indexed.db.open_cursor.cljs$core$IFn$_invoke$arity$1 = (function (store_or_index){
return indexed.db.impl.store.open_cursor.cljs$core$IFn$_invoke$arity$1(store_or_index);
}));

(indexed.db.open_cursor.cljs$lang$maxFixedArity = 3);

/**
 * Returns an IDBRequest, and, in a separate thread, creates a cursor over the specified key range, as arranged by this index.
 * 
 * The method sets the position of the cursor to the appropriate key, based on the specified direction.
 * 
 * If the key range is not specified or is null, then the range includes all the keys.
 * 
 * See [[indexed.db/open-cursor]] for an explanation of direction.
 */
indexed.db.open_key_cursor = (function indexed$db$open_key_cursor(var_args){
var G__45239 = arguments.length;
switch (G__45239) {
case 3:
return indexed.db.open_key_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.open_key_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.open_key_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.open_key_cursor.cljs$core$IFn$_invoke$arity$3 = (function (store_or_index,query,direction){
return indexed.db.impl.store.open_key_cursor.cljs$core$IFn$_invoke$arity$3(store_or_index,query,direction);
}));

(indexed.db.open_key_cursor.cljs$core$IFn$_invoke$arity$2 = (function (store_or_index,query){
return indexed.db.impl.store.open_key_cursor.cljs$core$IFn$_invoke$arity$2(store_or_index,query);
}));

(indexed.db.open_key_cursor.cljs$core$IFn$_invoke$arity$1 = (function (store_or_index){
return indexed.db.impl.store.open_key_cursor.cljs$core$IFn$_invoke$arity$1(store_or_index);
}));

(indexed.db.open_key_cursor.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if the given value satisfies the IDBIndex protocol
 */
indexed.db.index_QMARK_ = (function indexed$db$index_QMARK_(x){
return indexed.db.impl.store.index_QMARK_(x);
});
/**
 * Returns a boolean value indicating whether the index had a locale value of auto specified upon its creation.
 * 
 * This property is [experimental](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)
 */
indexed.db.auto_locale_QMARK_ = (function indexed$db$auto_locale_QMARK_(index){
return indexed.db.impl.store.auto_locale_QMARK_(index);
});
/**
 * Returns the locale of the index (for example en-US, or pl) if it had a locale value specified upon its creation.
 * 
 * This property is [experimental](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)
 */
indexed.db.locale = (function indexed$db$locale(index){
return indexed.db.impl.store.locale(index);
});
/**
 * Returns the object store the index belongs to
 */
indexed.db.get_object_store = (function indexed$db$get_object_store(index){
return indexed.db.impl.store.get_object_store(index);
});
/**
 * Returns a boolean value that affects how the index behaves when the result of evaluating the index's
 * key path yields an array
 */
indexed.db.multi_entry_QMARK_ = (function indexed$db$multi_entry_QMARK_(index){
return indexed.db.impl.store.multi_entry_QMARK_(index);
});
/**
 * Returns a boolean that states whether the index allows duplicate keys
 */
indexed.db.unique_QMARK_ = (function indexed$db$unique_QMARK_(index){
return indexed.db.impl.store.unique_QMARK_(index);
});
/**
 * Returns true if the given value satisfies the IDBObjectStore protocol
 */
indexed.db.store_QMARK_ = (function indexed$db$store_QMARK_(x){
return indexed.db.impl.store.store_QMARK_(x);
});
/**
 * Returns a sequence of the names of indexes on objects in this object store
 */
indexed.db.index_names = (function indexed$db$index_names(store){
return indexed.db.impl.store.index_names(store);
});
/**
 * Returns the value of the auto increment flag for this object store.
 * 
 * Note that every object store has its own separate auto increment counter
 */
indexed.db.auto_increment_QMARK_ = (function indexed$db$auto_increment_QMARK_(store){
return indexed.db.impl.store.auto_increment_QMARK_(store);
});
/**
 * Returns an implementation of the IDBRequest protocol, and, in a separate thread, creates a
 * structured clone of the value, and stores the cloned value in the object store.
 * 
 * This is for adding new records to an object store.
 * 
 * If k is unspecified, it results to null
 */
indexed.db.add = (function indexed$db$add(var_args){
var G__45241 = arguments.length;
switch (G__45241) {
case 3:
return indexed.db.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.add.cljs$core$IFn$_invoke$arity$3 = (function (store,value,k){
return indexed.db.impl.store.add.cljs$core$IFn$_invoke$arity$3(store,value,k);
}));

(indexed.db.add.cljs$core$IFn$_invoke$arity$2 = (function (store,value){
return indexed.db.impl.store.add.cljs$core$IFn$_invoke$arity$2(store,value);
}));

(indexed.db.add.cljs$lang$maxFixedArity = 3);

/**
 * Creates and immediately returns an IDBRequest, and clears this object store in a separate thread.
 * 
 * This is for deleting all the current data out of an object store
 */
indexed.db.clear = (function indexed$db$clear(store){
return indexed.db.impl.store.clear(store);
});
/**
 * Creates and returns an implementation of the IDBIndex protocol in the connected database.
 * 
 * It creates a new field/column defining a new data point for each database record to contain.
 * 
 * Note that this method must be called only from a VersionChange transaction mode callback
 */
indexed.db.create_index = (function indexed$db$create_index(var_args){
var G__45243 = arguments.length;
switch (G__45243) {
case 4:
return indexed.db.create_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return indexed.db.create_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.create_index.cljs$core$IFn$_invoke$arity$4 = (function (store,index_name,key_path,object_parameters){
return indexed.db.impl.store.create_index.cljs$core$IFn$_invoke$arity$4(store,index_name,key_path,object_parameters);
}));

(indexed.db.create_index.cljs$core$IFn$_invoke$arity$3 = (function (store,index_name,key_path){
return indexed.db.impl.store.create_index.cljs$core$IFn$_invoke$arity$3(store,index_name,key_path);
}));

(indexed.db.create_index.cljs$lang$maxFixedArity = 4);

/**
 * Destroys the index with the specified name in the connected database, used during a version upgrade
 * 
 * Note that this method must be called only from a VersionChange transaction mode callback
 */
indexed.db.delete_index = (function indexed$db$delete_index(store,index_name){
return indexed.db.impl.store.delete_index(store,index_name);
});
/**
 * Opens a named index in the current object store, after which it can be used to, for example,
 * return a series of records sorted by that index using a cursor
 */
indexed.db.index = (function indexed$db$index(store,index_name){
return indexed.db.impl.store.index(store,index_name);
});
/**
 * Updates a given record in a database, or inserts a new record if the given item does not already exist
 */
indexed.db.put = (function indexed$db$put(var_args){
var G__45245 = arguments.length;
switch (G__45245) {
case 2:
return indexed.db.put.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return indexed.db.put.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.put.cljs$core$IFn$_invoke$arity$2 = (function (store,item){
return indexed.db.impl.store.put.cljs$core$IFn$_invoke$arity$2(store,item);
}));

(indexed.db.put.cljs$core$IFn$_invoke$arity$3 = (function (store,item,k){
return indexed.db.impl.store.put.cljs$core$IFn$_invoke$arity$3(store,item,k);
}));

(indexed.db.put.cljs$lang$maxFixedArity = 3);

/**
 * When given an IDBObjectStore and a key, returns an IDBRequest,
 * and, in a separate thread, deletes the specified record or records.
 * 
 * When given a cursor, returns an IDBRequest, and, in a separate thread,
 * deletes the record at the cursor's position, without changing the cursor's position.
 * Once the record is deleted, the cursor's value is set to null
 */
indexed.db.delete$ = (function indexed$db$delete(var_args){
var G__45247 = arguments.length;
switch (G__45247) {
case 1:
return indexed.db.delete$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return indexed.db.delete$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.delete$.cljs$core$IFn$_invoke$arity$1 = (function (cursor){
return indexed.db.impl.cursor.delete$(cursor);
}));

(indexed.db.delete$.cljs$core$IFn$_invoke$arity$2 = (function (store,k){
return indexed.db.impl.store.delete$(store,k);
}));

(indexed.db.delete$.cljs$lang$maxFixedArity = 2);

/**
 * When called with an IDBDatabase, creates and returns a new IDBObjectStore.
 * 
 * When called with a single native js/IDBObjectStore, acts as a factory function for
 * wrapping the js/IDBObjectStore in an implementation of the IDBObjectStore protocol
 */
indexed.db.create_object_store = (function indexed$db$create_object_store(var_args){
var G__45249 = arguments.length;
switch (G__45249) {
case 3:
return indexed.db.create_object_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.create_object_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.create_object_store.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.create_object_store.cljs$core$IFn$_invoke$arity$3 = (function (db,name,options){
return indexed.db.impl.database.create_object_store.cljs$core$IFn$_invoke$arity$3(db,name,options);
}));

(indexed.db.create_object_store.cljs$core$IFn$_invoke$arity$2 = (function (db,name){
return indexed.db.impl.database.create_object_store.cljs$core$IFn$_invoke$arity$2(db,name);
}));

(indexed.db.create_object_store.cljs$core$IFn$_invoke$arity$1 = (function (js_idb_store){
return indexed.db.impl.store.create_object_store(js_idb_store);
}));

(indexed.db.create_object_store.cljs$lang$maxFixedArity = 3);

/**
 * When called with a transaction and object store name, returns an object store that
 * has already been added to the scope of this transaction.
 * 
 * When called with an index, returns the object store the index belongs to
 */
indexed.db.object_store = (function indexed$db$object_store(var_args){
var G__45251 = arguments.length;
switch (G__45251) {
case 2:
return indexed.db.object_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.object_store.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.object_store.cljs$core$IFn$_invoke$arity$2 = (function (txn,name){
return indexed.db.impl.transaction.object_store(txn,name);
}));

(indexed.db.object_store.cljs$core$IFn$_invoke$arity$1 = (function (index){
return indexed.db.get_object_store(index);
}));

(indexed.db.object_store.cljs$lang$maxFixedArity = 2);

/**
 * In the case of a cursor, returns the IDBObjectStore or IDBIndex that the cursor is iterating over.
 *   
 * In the case of a request, returns the source of the request, such as an index or an object store.
 */
indexed.db.source = (function indexed$db$source(x){
var temp__5757__auto__ = indexed.db.impl.protocols.source(x);
if((temp__5757__auto__ == null)){
return null;
} else {
var src = temp__5757__auto__;
if((src instanceof IDBObjectStore)){
return indexed.db.create_object_store.cljs$core$IFn$_invoke$arity$1(src);
} else {
if((src instanceof IDBIndex)){
return indexed.db.impl.store.create_index_STAR_(src);
} else {
return null;

}
}
}
});

//# sourceMappingURL=indexed.db.js.map
