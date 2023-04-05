goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51249 = arguments.length;
var i__5770__auto___51250 = (0);
while(true){
if((i__5770__auto___51250 < len__5769__auto___51249)){
args__5775__auto__.push((arguments[i__5770__auto___51250]));

var G__51253 = (i__5770__auto___51250 + (1));
i__5770__auto___51250 = G__51253;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50401){
var G__50402 = cljs.core.first(seq50401);
var seq50401__$1 = cljs.core.next(seq50401);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50402,seq50401__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50411 = cljs.core.seq(sources);
var chunk__50412 = null;
var count__50413 = (0);
var i__50414 = (0);
while(true){
if((i__50414 < count__50413)){
var map__50429 = chunk__50412.cljs$core$IIndexed$_nth$arity$2(null,i__50414);
var map__50429__$1 = cljs.core.__destructure_map(map__50429);
var src = map__50429__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50429__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50429__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50429__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50429__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50432){var e_51256 = e50432;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51256);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51256.message)].join('')));
}

var G__51257 = seq__50411;
var G__51258 = chunk__50412;
var G__51259 = count__50413;
var G__51260 = (i__50414 + (1));
seq__50411 = G__51257;
chunk__50412 = G__51258;
count__50413 = G__51259;
i__50414 = G__51260;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50411);
if(temp__5753__auto__){
var seq__50411__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50411__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50411__$1);
var G__51261 = cljs.core.chunk_rest(seq__50411__$1);
var G__51262 = c__5568__auto__;
var G__51263 = cljs.core.count(c__5568__auto__);
var G__51264 = (0);
seq__50411 = G__51261;
chunk__50412 = G__51262;
count__50413 = G__51263;
i__50414 = G__51264;
continue;
} else {
var map__50438 = cljs.core.first(seq__50411__$1);
var map__50438__$1 = cljs.core.__destructure_map(map__50438);
var src = map__50438__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50438__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50438__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50438__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50438__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50442){var e_51266 = e50442;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51266);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51266.message)].join('')));
}

var G__51267 = cljs.core.next(seq__50411__$1);
var G__51268 = null;
var G__51269 = (0);
var G__51270 = (0);
seq__50411 = G__51267;
chunk__50412 = G__51268;
count__50413 = G__51269;
i__50414 = G__51270;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50455 = cljs.core.seq(js_requires);
var chunk__50456 = null;
var count__50457 = (0);
var i__50458 = (0);
while(true){
if((i__50458 < count__50457)){
var js_ns = chunk__50456.cljs$core$IIndexed$_nth$arity$2(null,i__50458);
var require_str_51273 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51273);


var G__51277 = seq__50455;
var G__51278 = chunk__50456;
var G__51279 = count__50457;
var G__51280 = (i__50458 + (1));
seq__50455 = G__51277;
chunk__50456 = G__51278;
count__50457 = G__51279;
i__50458 = G__51280;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50455);
if(temp__5753__auto__){
var seq__50455__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50455__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50455__$1);
var G__51283 = cljs.core.chunk_rest(seq__50455__$1);
var G__51284 = c__5568__auto__;
var G__51285 = cljs.core.count(c__5568__auto__);
var G__51286 = (0);
seq__50455 = G__51283;
chunk__50456 = G__51284;
count__50457 = G__51285;
i__50458 = G__51286;
continue;
} else {
var js_ns = cljs.core.first(seq__50455__$1);
var require_str_51287 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51287);


var G__51289 = cljs.core.next(seq__50455__$1);
var G__51290 = null;
var G__51291 = (0);
var G__51292 = (0);
seq__50455 = G__51289;
chunk__50456 = G__51290;
count__50457 = G__51291;
i__50458 = G__51292;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50474){
var map__50475 = p__50474;
var map__50475__$1 = cljs.core.__destructure_map(map__50475);
var msg = map__50475__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50475__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50475__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50476(s__50477){
return (new cljs.core.LazySeq(null,(function (){
var s__50477__$1 = s__50477;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50477__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50487 = cljs.core.first(xs__6308__auto__);
var map__50487__$1 = cljs.core.__destructure_map(map__50487);
var src = map__50487__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50487__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50487__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__50477__$1,map__50487,map__50487__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50475,map__50475__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50476_$_iter__50478(s__50479){
return (new cljs.core.LazySeq(null,((function (s__50477__$1,map__50487,map__50487__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50475,map__50475__$1,msg,info,reload_info){
return (function (){
var s__50479__$1 = s__50479;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50479__$1);
if(temp__5753__auto____$1){
var s__50479__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50479__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50479__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50481 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50480 = (0);
while(true){
if((i__50480 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__50480);
cljs.core.chunk_append(b__50481,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51300 = (i__50480 + (1));
i__50480 = G__51300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50481),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50476_$_iter__50478(cljs.core.chunk_rest(s__50479__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50481),null);
}
} else {
var warning = cljs.core.first(s__50479__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50476_$_iter__50478(cljs.core.rest(s__50479__$2)));
}
} else {
return null;
}
break;
}
});})(s__50477__$1,map__50487,map__50487__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50475,map__50475__$1,msg,info,reload_info))
,null,null));
});})(s__50477__$1,map__50487,map__50487__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50475,map__50475__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50476(cljs.core.rest(s__50477__$1)));
} else {
var G__51301 = cljs.core.rest(s__50477__$1);
s__50477__$1 = G__51301;
continue;
}
} else {
var G__51302 = cljs.core.rest(s__50477__$1);
s__50477__$1 = G__51302;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50494_51303 = cljs.core.seq(warnings);
var chunk__50495_51304 = null;
var count__50496_51305 = (0);
var i__50497_51306 = (0);
while(true){
if((i__50497_51306 < count__50496_51305)){
var map__50505_51309 = chunk__50495_51304.cljs$core$IIndexed$_nth$arity$2(null,i__50497_51306);
var map__50505_51310__$1 = cljs.core.__destructure_map(map__50505_51309);
var w_51311 = map__50505_51310__$1;
var msg_51312__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50505_51310__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50505_51310__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50505_51310__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50505_51310__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51315)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51313),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51314),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51312__$1)].join(''));


var G__51317 = seq__50494_51303;
var G__51318 = chunk__50495_51304;
var G__51319 = count__50496_51305;
var G__51320 = (i__50497_51306 + (1));
seq__50494_51303 = G__51317;
chunk__50495_51304 = G__51318;
count__50496_51305 = G__51319;
i__50497_51306 = G__51320;
continue;
} else {
var temp__5753__auto___51321 = cljs.core.seq(seq__50494_51303);
if(temp__5753__auto___51321){
var seq__50494_51324__$1 = temp__5753__auto___51321;
if(cljs.core.chunked_seq_QMARK_(seq__50494_51324__$1)){
var c__5568__auto___51326 = cljs.core.chunk_first(seq__50494_51324__$1);
var G__51329 = cljs.core.chunk_rest(seq__50494_51324__$1);
var G__51330 = c__5568__auto___51326;
var G__51331 = cljs.core.count(c__5568__auto___51326);
var G__51332 = (0);
seq__50494_51303 = G__51329;
chunk__50495_51304 = G__51330;
count__50496_51305 = G__51331;
i__50497_51306 = G__51332;
continue;
} else {
var map__50506_51334 = cljs.core.first(seq__50494_51324__$1);
var map__50506_51335__$1 = cljs.core.__destructure_map(map__50506_51334);
var w_51336 = map__50506_51335__$1;
var msg_51337__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50506_51335__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50506_51335__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50506_51335__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50506_51335__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51340)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51338),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51339),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51337__$1)].join(''));


var G__51343 = cljs.core.next(seq__50494_51324__$1);
var G__51344 = null;
var G__51345 = (0);
var G__51346 = (0);
seq__50494_51303 = G__51343;
chunk__50495_51304 = G__51344;
count__50496_51305 = G__51345;
i__50497_51306 = G__51346;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50472_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50472_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50517){
var map__50518 = p__50517;
var map__50518__$1 = cljs.core.__destructure_map(map__50518);
var msg = map__50518__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50518__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50518__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__50519 = cljs.core.seq(updates);
var chunk__50521 = null;
var count__50522 = (0);
var i__50523 = (0);
while(true){
if((i__50523 < count__50522)){
var path = chunk__50521.cljs$core$IIndexed$_nth$arity$2(null,i__50523);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50907_51352 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50911_51354 = null;
var count__50912_51355 = (0);
var i__50913_51356 = (0);
while(true){
if((i__50913_51356 < count__50912_51355)){
var node_51359 = chunk__50911_51354.cljs$core$IIndexed$_nth$arity$2(null,i__50913_51356);
if(cljs.core.not(node_51359.shadow$old)){
var path_match_51360 = shadow.cljs.devtools.client.browser.match_paths(node_51359.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51360)){
var new_link_51361 = (function (){var G__50996 = node_51359.cloneNode(true);
G__50996.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51360),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50996;
})();
(node_51359.shadow$old = true);

(new_link_51361.onload = ((function (seq__50907_51352,chunk__50911_51354,count__50912_51355,i__50913_51356,seq__50519,chunk__50521,count__50522,i__50523,new_link_51361,path_match_51360,node_51359,path,map__50518,map__50518__$1,msg,updates,reload_info){
return (function (e){
var seq__51000_51365 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51002_51366 = null;
var count__51003_51367 = (0);
var i__51004_51368 = (0);
while(true){
if((i__51004_51368 < count__51003_51367)){
var map__51027_51371 = chunk__51002_51366.cljs$core$IIndexed$_nth$arity$2(null,i__51004_51368);
var map__51027_51372__$1 = cljs.core.__destructure_map(map__51027_51371);
var task_51373 = map__51027_51372__$1;
var fn_str_51374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51027_51372__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51027_51372__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51377 = goog.getObjectByName(fn_str_51374,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51375)].join(''));

(fn_obj_51377.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51377.cljs$core$IFn$_invoke$arity$2(path,new_link_51361) : fn_obj_51377.call(null,path,new_link_51361));


var G__51379 = seq__51000_51365;
var G__51380 = chunk__51002_51366;
var G__51381 = count__51003_51367;
var G__51382 = (i__51004_51368 + (1));
seq__51000_51365 = G__51379;
chunk__51002_51366 = G__51380;
count__51003_51367 = G__51381;
i__51004_51368 = G__51382;
continue;
} else {
var temp__5753__auto___51383 = cljs.core.seq(seq__51000_51365);
if(temp__5753__auto___51383){
var seq__51000_51384__$1 = temp__5753__auto___51383;
if(cljs.core.chunked_seq_QMARK_(seq__51000_51384__$1)){
var c__5568__auto___51385 = cljs.core.chunk_first(seq__51000_51384__$1);
var G__51386 = cljs.core.chunk_rest(seq__51000_51384__$1);
var G__51387 = c__5568__auto___51385;
var G__51388 = cljs.core.count(c__5568__auto___51385);
var G__51389 = (0);
seq__51000_51365 = G__51386;
chunk__51002_51366 = G__51387;
count__51003_51367 = G__51388;
i__51004_51368 = G__51389;
continue;
} else {
var map__51029_51391 = cljs.core.first(seq__51000_51384__$1);
var map__51029_51392__$1 = cljs.core.__destructure_map(map__51029_51391);
var task_51393 = map__51029_51392__$1;
var fn_str_51394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51029_51392__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51029_51392__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51399 = goog.getObjectByName(fn_str_51394,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51395)].join(''));

(fn_obj_51399.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51399.cljs$core$IFn$_invoke$arity$2(path,new_link_51361) : fn_obj_51399.call(null,path,new_link_51361));


var G__51401 = cljs.core.next(seq__51000_51384__$1);
var G__51402 = null;
var G__51403 = (0);
var G__51405 = (0);
seq__51000_51365 = G__51401;
chunk__51002_51366 = G__51402;
count__51003_51367 = G__51403;
i__51004_51368 = G__51405;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51359);
});})(seq__50907_51352,chunk__50911_51354,count__50912_51355,i__50913_51356,seq__50519,chunk__50521,count__50522,i__50523,new_link_51361,path_match_51360,node_51359,path,map__50518,map__50518__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51360], 0));

goog.dom.insertSiblingAfter(new_link_51361,node_51359);


var G__51408 = seq__50907_51352;
var G__51409 = chunk__50911_51354;
var G__51410 = count__50912_51355;
var G__51411 = (i__50913_51356 + (1));
seq__50907_51352 = G__51408;
chunk__50911_51354 = G__51409;
count__50912_51355 = G__51410;
i__50913_51356 = G__51411;
continue;
} else {
var G__51414 = seq__50907_51352;
var G__51415 = chunk__50911_51354;
var G__51416 = count__50912_51355;
var G__51417 = (i__50913_51356 + (1));
seq__50907_51352 = G__51414;
chunk__50911_51354 = G__51415;
count__50912_51355 = G__51416;
i__50913_51356 = G__51417;
continue;
}
} else {
var G__51419 = seq__50907_51352;
var G__51420 = chunk__50911_51354;
var G__51421 = count__50912_51355;
var G__51422 = (i__50913_51356 + (1));
seq__50907_51352 = G__51419;
chunk__50911_51354 = G__51420;
count__50912_51355 = G__51421;
i__50913_51356 = G__51422;
continue;
}
} else {
var temp__5753__auto___51423 = cljs.core.seq(seq__50907_51352);
if(temp__5753__auto___51423){
var seq__50907_51424__$1 = temp__5753__auto___51423;
if(cljs.core.chunked_seq_QMARK_(seq__50907_51424__$1)){
var c__5568__auto___51425 = cljs.core.chunk_first(seq__50907_51424__$1);
var G__51426 = cljs.core.chunk_rest(seq__50907_51424__$1);
var G__51427 = c__5568__auto___51425;
var G__51428 = cljs.core.count(c__5568__auto___51425);
var G__51429 = (0);
seq__50907_51352 = G__51426;
chunk__50911_51354 = G__51427;
count__50912_51355 = G__51428;
i__50913_51356 = G__51429;
continue;
} else {
var node_51431 = cljs.core.first(seq__50907_51424__$1);
if(cljs.core.not(node_51431.shadow$old)){
var path_match_51432 = shadow.cljs.devtools.client.browser.match_paths(node_51431.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51432)){
var new_link_51433 = (function (){var G__51031 = node_51431.cloneNode(true);
G__51031.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51432),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51031;
})();
(node_51431.shadow$old = true);

(new_link_51433.onload = ((function (seq__50907_51352,chunk__50911_51354,count__50912_51355,i__50913_51356,seq__50519,chunk__50521,count__50522,i__50523,new_link_51433,path_match_51432,node_51431,seq__50907_51424__$1,temp__5753__auto___51423,path,map__50518,map__50518__$1,msg,updates,reload_info){
return (function (e){
var seq__51034_51436 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51036_51437 = null;
var count__51037_51438 = (0);
var i__51038_51439 = (0);
while(true){
if((i__51038_51439 < count__51037_51438)){
var map__51052_51442 = chunk__51036_51437.cljs$core$IIndexed$_nth$arity$2(null,i__51038_51439);
var map__51052_51443__$1 = cljs.core.__destructure_map(map__51052_51442);
var task_51444 = map__51052_51443__$1;
var fn_str_51445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51052_51443__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51052_51443__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51449 = goog.getObjectByName(fn_str_51445,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51446)].join(''));

(fn_obj_51449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51449.cljs$core$IFn$_invoke$arity$2(path,new_link_51433) : fn_obj_51449.call(null,path,new_link_51433));


var G__51452 = seq__51034_51436;
var G__51453 = chunk__51036_51437;
var G__51454 = count__51037_51438;
var G__51455 = (i__51038_51439 + (1));
seq__51034_51436 = G__51452;
chunk__51036_51437 = G__51453;
count__51037_51438 = G__51454;
i__51038_51439 = G__51455;
continue;
} else {
var temp__5753__auto___51456__$1 = cljs.core.seq(seq__51034_51436);
if(temp__5753__auto___51456__$1){
var seq__51034_51457__$1 = temp__5753__auto___51456__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51034_51457__$1)){
var c__5568__auto___51458 = cljs.core.chunk_first(seq__51034_51457__$1);
var G__51459 = cljs.core.chunk_rest(seq__51034_51457__$1);
var G__51460 = c__5568__auto___51458;
var G__51461 = cljs.core.count(c__5568__auto___51458);
var G__51462 = (0);
seq__51034_51436 = G__51459;
chunk__51036_51437 = G__51460;
count__51037_51438 = G__51461;
i__51038_51439 = G__51462;
continue;
} else {
var map__51054_51463 = cljs.core.first(seq__51034_51457__$1);
var map__51054_51464__$1 = cljs.core.__destructure_map(map__51054_51463);
var task_51465 = map__51054_51464__$1;
var fn_str_51466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51054_51464__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51054_51464__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51468 = goog.getObjectByName(fn_str_51466,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51467)].join(''));

(fn_obj_51468.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51468.cljs$core$IFn$_invoke$arity$2(path,new_link_51433) : fn_obj_51468.call(null,path,new_link_51433));


var G__51469 = cljs.core.next(seq__51034_51457__$1);
var G__51470 = null;
var G__51471 = (0);
var G__51472 = (0);
seq__51034_51436 = G__51469;
chunk__51036_51437 = G__51470;
count__51037_51438 = G__51471;
i__51038_51439 = G__51472;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51431);
});})(seq__50907_51352,chunk__50911_51354,count__50912_51355,i__50913_51356,seq__50519,chunk__50521,count__50522,i__50523,new_link_51433,path_match_51432,node_51431,seq__50907_51424__$1,temp__5753__auto___51423,path,map__50518,map__50518__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51432], 0));

goog.dom.insertSiblingAfter(new_link_51433,node_51431);


var G__51475 = cljs.core.next(seq__50907_51424__$1);
var G__51476 = null;
var G__51477 = (0);
var G__51478 = (0);
seq__50907_51352 = G__51475;
chunk__50911_51354 = G__51476;
count__50912_51355 = G__51477;
i__50913_51356 = G__51478;
continue;
} else {
var G__51480 = cljs.core.next(seq__50907_51424__$1);
var G__51481 = null;
var G__51482 = (0);
var G__51483 = (0);
seq__50907_51352 = G__51480;
chunk__50911_51354 = G__51481;
count__50912_51355 = G__51482;
i__50913_51356 = G__51483;
continue;
}
} else {
var G__51484 = cljs.core.next(seq__50907_51424__$1);
var G__51485 = null;
var G__51486 = (0);
var G__51487 = (0);
seq__50907_51352 = G__51484;
chunk__50911_51354 = G__51485;
count__50912_51355 = G__51486;
i__50913_51356 = G__51487;
continue;
}
}
} else {
}
}
break;
}


var G__51488 = seq__50519;
var G__51489 = chunk__50521;
var G__51490 = count__50522;
var G__51491 = (i__50523 + (1));
seq__50519 = G__51488;
chunk__50521 = G__51489;
count__50522 = G__51490;
i__50523 = G__51491;
continue;
} else {
var G__51492 = seq__50519;
var G__51493 = chunk__50521;
var G__51494 = count__50522;
var G__51495 = (i__50523 + (1));
seq__50519 = G__51492;
chunk__50521 = G__51493;
count__50522 = G__51494;
i__50523 = G__51495;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50519);
if(temp__5753__auto__){
var seq__50519__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50519__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__50519__$1);
var G__51497 = cljs.core.chunk_rest(seq__50519__$1);
var G__51498 = c__5568__auto__;
var G__51499 = cljs.core.count(c__5568__auto__);
var G__51500 = (0);
seq__50519 = G__51497;
chunk__50521 = G__51498;
count__50522 = G__51499;
i__50523 = G__51500;
continue;
} else {
var path = cljs.core.first(seq__50519__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51056_51502 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51060_51503 = null;
var count__51061_51504 = (0);
var i__51062_51505 = (0);
while(true){
if((i__51062_51505 < count__51061_51504)){
var node_51506 = chunk__51060_51503.cljs$core$IIndexed$_nth$arity$2(null,i__51062_51505);
if(cljs.core.not(node_51506.shadow$old)){
var path_match_51507 = shadow.cljs.devtools.client.browser.match_paths(node_51506.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51507)){
var new_link_51508 = (function (){var G__51126 = node_51506.cloneNode(true);
G__51126.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51507),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51126;
})();
(node_51506.shadow$old = true);

(new_link_51508.onload = ((function (seq__51056_51502,chunk__51060_51503,count__51061_51504,i__51062_51505,seq__50519,chunk__50521,count__50522,i__50523,new_link_51508,path_match_51507,node_51506,path,seq__50519__$1,temp__5753__auto__,map__50518,map__50518__$1,msg,updates,reload_info){
return (function (e){
var seq__51131_51511 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51133_51512 = null;
var count__51134_51513 = (0);
var i__51135_51514 = (0);
while(true){
if((i__51135_51514 < count__51134_51513)){
var map__51143_51515 = chunk__51133_51512.cljs$core$IIndexed$_nth$arity$2(null,i__51135_51514);
var map__51143_51516__$1 = cljs.core.__destructure_map(map__51143_51515);
var task_51517 = map__51143_51516__$1;
var fn_str_51518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51143_51516__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51143_51516__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51520 = goog.getObjectByName(fn_str_51518,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51519)].join(''));

(fn_obj_51520.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51520.cljs$core$IFn$_invoke$arity$2(path,new_link_51508) : fn_obj_51520.call(null,path,new_link_51508));


var G__51522 = seq__51131_51511;
var G__51523 = chunk__51133_51512;
var G__51524 = count__51134_51513;
var G__51525 = (i__51135_51514 + (1));
seq__51131_51511 = G__51522;
chunk__51133_51512 = G__51523;
count__51134_51513 = G__51524;
i__51135_51514 = G__51525;
continue;
} else {
var temp__5753__auto___51526__$1 = cljs.core.seq(seq__51131_51511);
if(temp__5753__auto___51526__$1){
var seq__51131_51527__$1 = temp__5753__auto___51526__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51131_51527__$1)){
var c__5568__auto___51528 = cljs.core.chunk_first(seq__51131_51527__$1);
var G__51529 = cljs.core.chunk_rest(seq__51131_51527__$1);
var G__51530 = c__5568__auto___51528;
var G__51531 = cljs.core.count(c__5568__auto___51528);
var G__51532 = (0);
seq__51131_51511 = G__51529;
chunk__51133_51512 = G__51530;
count__51134_51513 = G__51531;
i__51135_51514 = G__51532;
continue;
} else {
var map__51145_51534 = cljs.core.first(seq__51131_51527__$1);
var map__51145_51535__$1 = cljs.core.__destructure_map(map__51145_51534);
var task_51536 = map__51145_51535__$1;
var fn_str_51537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51145_51535__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51145_51535__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51539 = goog.getObjectByName(fn_str_51537,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51538)].join(''));

(fn_obj_51539.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51539.cljs$core$IFn$_invoke$arity$2(path,new_link_51508) : fn_obj_51539.call(null,path,new_link_51508));


var G__51542 = cljs.core.next(seq__51131_51527__$1);
var G__51543 = null;
var G__51544 = (0);
var G__51545 = (0);
seq__51131_51511 = G__51542;
chunk__51133_51512 = G__51543;
count__51134_51513 = G__51544;
i__51135_51514 = G__51545;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51506);
});})(seq__51056_51502,chunk__51060_51503,count__51061_51504,i__51062_51505,seq__50519,chunk__50521,count__50522,i__50523,new_link_51508,path_match_51507,node_51506,path,seq__50519__$1,temp__5753__auto__,map__50518,map__50518__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51507], 0));

goog.dom.insertSiblingAfter(new_link_51508,node_51506);


var G__51548 = seq__51056_51502;
var G__51549 = chunk__51060_51503;
var G__51550 = count__51061_51504;
var G__51551 = (i__51062_51505 + (1));
seq__51056_51502 = G__51548;
chunk__51060_51503 = G__51549;
count__51061_51504 = G__51550;
i__51062_51505 = G__51551;
continue;
} else {
var G__51552 = seq__51056_51502;
var G__51553 = chunk__51060_51503;
var G__51554 = count__51061_51504;
var G__51555 = (i__51062_51505 + (1));
seq__51056_51502 = G__51552;
chunk__51060_51503 = G__51553;
count__51061_51504 = G__51554;
i__51062_51505 = G__51555;
continue;
}
} else {
var G__51556 = seq__51056_51502;
var G__51557 = chunk__51060_51503;
var G__51558 = count__51061_51504;
var G__51559 = (i__51062_51505 + (1));
seq__51056_51502 = G__51556;
chunk__51060_51503 = G__51557;
count__51061_51504 = G__51558;
i__51062_51505 = G__51559;
continue;
}
} else {
var temp__5753__auto___51560__$1 = cljs.core.seq(seq__51056_51502);
if(temp__5753__auto___51560__$1){
var seq__51056_51562__$1 = temp__5753__auto___51560__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51056_51562__$1)){
var c__5568__auto___51563 = cljs.core.chunk_first(seq__51056_51562__$1);
var G__51564 = cljs.core.chunk_rest(seq__51056_51562__$1);
var G__51565 = c__5568__auto___51563;
var G__51566 = cljs.core.count(c__5568__auto___51563);
var G__51567 = (0);
seq__51056_51502 = G__51564;
chunk__51060_51503 = G__51565;
count__51061_51504 = G__51566;
i__51062_51505 = G__51567;
continue;
} else {
var node_51568 = cljs.core.first(seq__51056_51562__$1);
if(cljs.core.not(node_51568.shadow$old)){
var path_match_51569 = shadow.cljs.devtools.client.browser.match_paths(node_51568.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51569)){
var new_link_51570 = (function (){var G__51152 = node_51568.cloneNode(true);
G__51152.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51569),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51152;
})();
(node_51568.shadow$old = true);

(new_link_51570.onload = ((function (seq__51056_51502,chunk__51060_51503,count__51061_51504,i__51062_51505,seq__50519,chunk__50521,count__50522,i__50523,new_link_51570,path_match_51569,node_51568,seq__51056_51562__$1,temp__5753__auto___51560__$1,path,seq__50519__$1,temp__5753__auto__,map__50518,map__50518__$1,msg,updates,reload_info){
return (function (e){
var seq__51154_51572 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__51156_51573 = null;
var count__51157_51574 = (0);
var i__51158_51575 = (0);
while(true){
if((i__51158_51575 < count__51157_51574)){
var map__51170_51577 = chunk__51156_51573.cljs$core$IIndexed$_nth$arity$2(null,i__51158_51575);
var map__51170_51578__$1 = cljs.core.__destructure_map(map__51170_51577);
var task_51579 = map__51170_51578__$1;
var fn_str_51580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51170_51578__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51170_51578__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51582 = goog.getObjectByName(fn_str_51580,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51581)].join(''));

(fn_obj_51582.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51582.cljs$core$IFn$_invoke$arity$2(path,new_link_51570) : fn_obj_51582.call(null,path,new_link_51570));


var G__51585 = seq__51154_51572;
var G__51586 = chunk__51156_51573;
var G__51587 = count__51157_51574;
var G__51588 = (i__51158_51575 + (1));
seq__51154_51572 = G__51585;
chunk__51156_51573 = G__51586;
count__51157_51574 = G__51587;
i__51158_51575 = G__51588;
continue;
} else {
var temp__5753__auto___51590__$2 = cljs.core.seq(seq__51154_51572);
if(temp__5753__auto___51590__$2){
var seq__51154_51592__$1 = temp__5753__auto___51590__$2;
if(cljs.core.chunked_seq_QMARK_(seq__51154_51592__$1)){
var c__5568__auto___51593 = cljs.core.chunk_first(seq__51154_51592__$1);
var G__51594 = cljs.core.chunk_rest(seq__51154_51592__$1);
var G__51595 = c__5568__auto___51593;
var G__51596 = cljs.core.count(c__5568__auto___51593);
var G__51597 = (0);
seq__51154_51572 = G__51594;
chunk__51156_51573 = G__51595;
count__51157_51574 = G__51596;
i__51158_51575 = G__51597;
continue;
} else {
var map__51171_51598 = cljs.core.first(seq__51154_51592__$1);
var map__51171_51599__$1 = cljs.core.__destructure_map(map__51171_51598);
var task_51600 = map__51171_51599__$1;
var fn_str_51601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51171_51599__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_51602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51171_51599__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_51604 = goog.getObjectByName(fn_str_51601,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_51602)].join(''));

(fn_obj_51604.cljs$core$IFn$_invoke$arity$2 ? fn_obj_51604.cljs$core$IFn$_invoke$arity$2(path,new_link_51570) : fn_obj_51604.call(null,path,new_link_51570));


var G__51605 = cljs.core.next(seq__51154_51592__$1);
var G__51606 = null;
var G__51607 = (0);
var G__51608 = (0);
seq__51154_51572 = G__51605;
chunk__51156_51573 = G__51606;
count__51157_51574 = G__51607;
i__51158_51575 = G__51608;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_51568);
});})(seq__51056_51502,chunk__51060_51503,count__51061_51504,i__51062_51505,seq__50519,chunk__50521,count__50522,i__50523,new_link_51570,path_match_51569,node_51568,seq__51056_51562__$1,temp__5753__auto___51560__$1,path,seq__50519__$1,temp__5753__auto__,map__50518,map__50518__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51569], 0));

goog.dom.insertSiblingAfter(new_link_51570,node_51568);


var G__51609 = cljs.core.next(seq__51056_51562__$1);
var G__51610 = null;
var G__51611 = (0);
var G__51612 = (0);
seq__51056_51502 = G__51609;
chunk__51060_51503 = G__51610;
count__51061_51504 = G__51611;
i__51062_51505 = G__51612;
continue;
} else {
var G__51613 = cljs.core.next(seq__51056_51562__$1);
var G__51614 = null;
var G__51615 = (0);
var G__51616 = (0);
seq__51056_51502 = G__51613;
chunk__51060_51503 = G__51614;
count__51061_51504 = G__51615;
i__51062_51505 = G__51616;
continue;
}
} else {
var G__51619 = cljs.core.next(seq__51056_51562__$1);
var G__51620 = null;
var G__51621 = (0);
var G__51622 = (0);
seq__51056_51502 = G__51619;
chunk__51060_51503 = G__51620;
count__51061_51504 = G__51621;
i__51062_51505 = G__51622;
continue;
}
}
} else {
}
}
break;
}


var G__51623 = cljs.core.next(seq__50519__$1);
var G__51624 = null;
var G__51625 = (0);
var G__51626 = (0);
seq__50519 = G__51623;
chunk__50521 = G__51624;
count__50522 = G__51625;
i__50523 = G__51626;
continue;
} else {
var G__51627 = cljs.core.next(seq__50519__$1);
var G__51628 = null;
var G__51630 = (0);
var G__51631 = (0);
seq__50519 = G__51627;
chunk__50521 = G__51628;
count__50522 = G__51630;
i__50523 = G__51631;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51174){
var map__51175 = p__51174;
var map__51175__$1 = cljs.core.__destructure_map(map__51175);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51175__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51177){
var map__51178 = p__51177;
var map__51178__$1 = cljs.core.__destructure_map(map__51178);
var _ = map__51178__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51179,done,error){
var map__51180 = p__51179;
var map__51180__$1 = cljs.core.__destructure_map(map__51180);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51180__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51188,done,error){
var map__51190 = p__51188;
var map__51190__$1 = cljs.core.__destructure_map(map__51190);
var msg = map__51190__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51190__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51190__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51190__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51193){
var map__51194 = p__51193;
var map__51194__$1 = cljs.core.__destructure_map(map__51194);
var src = map__51194__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51194__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51195 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51195) : done.call(null,G__51195));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51196){
var map__51197 = p__51196;
var map__51197__$1 = cljs.core.__destructure_map(map__51197);
var msg__$1 = map__51197__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51197__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51198){var ex = e51198;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51202){
var map__51203 = p__51202;
var map__51203__$1 = cljs.core.__destructure_map(map__51203);
var env = map__51203__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51203__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51239){
var map__51240 = p__51239;
var map__51240__$1 = cljs.core.__destructure_map(map__51240);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51240__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51240__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51244){
var map__51245 = p__51244;
var map__51245__$1 = cljs.core.__destructure_map(map__51245);
var svc = map__51245__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51245__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
