goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__45544,p__45545){
var map__45548 = p__45544;
var map__45548__$1 = cljs.core.__destructure_map(map__45548);
var svc = map__45548__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45548__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45548__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45548__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45549 = p__45545;
var map__45549__$1 = cljs.core.__destructure_map(map__45549);
var msg = map__45549__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45549__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45549__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45549__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45549__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__45568,p__45569){
var map__45575 = p__45568;
var map__45575__$1 = cljs.core.__destructure_map(map__45575);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45575__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__45576 = p__45569;
var map__45576__$1 = cljs.core.__destructure_map(map__45576);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45576__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__45585,p__45586){
var map__45588 = p__45585;
var map__45588__$1 = cljs.core.__destructure_map(map__45588);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45588__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45588__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45590 = p__45586;
var map__45590__$1 = cljs.core.__destructure_map(map__45590);
var msg = map__45590__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45590__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__45603,tid){
var map__45606 = p__45603;
var map__45606__$1 = cljs.core.__destructure_map(map__45606);
var svc = map__45606__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45606__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__45621 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__45622 = null;
var count__45623 = (0);
var i__45624 = (0);
while(true){
if((i__45624 < count__45623)){
var vec__45639 = chunk__45622.cljs$core$IIndexed$_nth$arity$2(null,i__45624);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45639,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45639,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45680 = seq__45621;
var G__45681 = chunk__45622;
var G__45682 = count__45623;
var G__45683 = (i__45624 + (1));
seq__45621 = G__45680;
chunk__45622 = G__45681;
count__45623 = G__45682;
i__45624 = G__45683;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45621);
if(temp__5753__auto__){
var seq__45621__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45621__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__45621__$1);
var G__45685 = cljs.core.chunk_rest(seq__45621__$1);
var G__45686 = c__5568__auto__;
var G__45687 = cljs.core.count(c__5568__auto__);
var G__45688 = (0);
seq__45621 = G__45685;
chunk__45622 = G__45686;
count__45623 = G__45687;
i__45624 = G__45688;
continue;
} else {
var vec__45647 = cljs.core.first(seq__45621__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45647,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45647,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45690 = cljs.core.next(seq__45621__$1);
var G__45691 = null;
var G__45692 = (0);
var G__45693 = (0);
seq__45621 = G__45690;
chunk__45622 = G__45691;
count__45623 = G__45692;
i__45624 = G__45693;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__45609_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__45609_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__45610_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__45610_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__45611_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__45611_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__45612_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__45612_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__45660){
var map__45661 = p__45660;
var map__45661__$1 = cljs.core.__destructure_map(map__45661);
var svc = map__45661__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45661__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45661__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
