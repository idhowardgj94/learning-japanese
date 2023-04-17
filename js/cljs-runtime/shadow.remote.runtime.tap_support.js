goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50095,p__50096){
var map__50098 = p__50095;
var map__50098__$1 = cljs.core.__destructure_map(map__50098);
var svc = map__50098__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50098__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50098__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50098__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50099 = p__50096;
var map__50099__$1 = cljs.core.__destructure_map(map__50099);
var msg = map__50099__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50099__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50099__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50099__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50099__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50117,p__50118){
var map__50120 = p__50117;
var map__50120__$1 = cljs.core.__destructure_map(map__50120);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50120__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50121 = p__50118;
var map__50121__$1 = cljs.core.__destructure_map(map__50121);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50121__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50134,p__50135){
var map__50139 = p__50134;
var map__50139__$1 = cljs.core.__destructure_map(map__50139);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50139__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50139__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50140 = p__50135;
var map__50140__$1 = cljs.core.__destructure_map(map__50140);
var msg = map__50140__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50140__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50144,tid){
var map__50148 = p__50144;
var map__50148__$1 = cljs.core.__destructure_map(map__50148);
var svc = map__50148__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50148__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50164 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50165 = null;
var count__50166 = (0);
var i__50167 = (0);
while(true){
if((i__50167 < count__50166)){
var vec__50185 = chunk__50165.cljs$core$IIndexed$_nth$arity$2(null,i__50167);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50185,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50185,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50208 = seq__50164;
var G__50209 = chunk__50165;
var G__50210 = count__50166;
var G__50211 = (i__50167 + (1));
seq__50164 = G__50208;
chunk__50165 = G__50209;
count__50166 = G__50210;
i__50167 = G__50211;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50164);
if(temp__5753__auto__){
var seq__50164__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50164__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50164__$1);
var G__50212 = cljs.core.chunk_rest(seq__50164__$1);
var G__50213 = c__5568__auto__;
var G__50214 = cljs.core.count(c__5568__auto__);
var G__50215 = (0);
seq__50164 = G__50212;
chunk__50165 = G__50213;
count__50166 = G__50214;
i__50167 = G__50215;
continue;
} else {
var vec__50190 = cljs.core.first(seq__50164__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50190,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50190,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50218 = cljs.core.next(seq__50164__$1);
var G__50219 = null;
var G__50220 = (0);
var G__50221 = (0);
seq__50164 = G__50218;
chunk__50165 = G__50219;
count__50166 = G__50220;
i__50167 = G__50221;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50155_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50155_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50156_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50156_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50157_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50157_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50158_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50158_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50193){
var map__50194 = p__50193;
var map__50194__$1 = cljs.core.__destructure_map(map__50194);
var svc = map__50194__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
