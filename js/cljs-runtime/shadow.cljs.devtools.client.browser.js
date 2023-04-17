goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55252 = arguments.length;
var i__5770__auto___55253 = (0);
while(true){
if((i__5770__auto___55253 < len__5769__auto___55252)){
args__5775__auto__.push((arguments[i__5770__auto___55253]));

var G__55254 = (i__5770__auto___55253 + (1));
i__5770__auto___55253 = G__55254;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq54499){
var G__54500 = cljs.core.first(seq54499);
var seq54499__$1 = cljs.core.next(seq54499);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54500,seq54499__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__54505 = cljs.core.seq(sources);
var chunk__54506 = null;
var count__54507 = (0);
var i__54508 = (0);
while(true){
if((i__54508 < count__54507)){
var map__54517 = chunk__54506.cljs$core$IIndexed$_nth$arity$2(null,i__54508);
var map__54517__$1 = cljs.core.__destructure_map(map__54517);
var src = map__54517__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54517__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54517__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54517__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54517__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54518){var e_55258 = e54518;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55258);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55258.message)].join('')));
}

var G__55262 = seq__54505;
var G__55263 = chunk__54506;
var G__55264 = count__54507;
var G__55265 = (i__54508 + (1));
seq__54505 = G__55262;
chunk__54506 = G__55263;
count__54507 = G__55264;
i__54508 = G__55265;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54505);
if(temp__5753__auto__){
var seq__54505__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54505__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54505__$1);
var G__55266 = cljs.core.chunk_rest(seq__54505__$1);
var G__55267 = c__5568__auto__;
var G__55268 = cljs.core.count(c__5568__auto__);
var G__55269 = (0);
seq__54505 = G__55266;
chunk__54506 = G__55267;
count__54507 = G__55268;
i__54508 = G__55269;
continue;
} else {
var map__54519 = cljs.core.first(seq__54505__$1);
var map__54519__$1 = cljs.core.__destructure_map(map__54519);
var src = map__54519__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54519__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54519__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54519__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54519__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54524){var e_55272 = e54524;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55272);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55272.message)].join('')));
}

var G__55273 = cljs.core.next(seq__54505__$1);
var G__55274 = null;
var G__55275 = (0);
var G__55276 = (0);
seq__54505 = G__55273;
chunk__54506 = G__55274;
count__54507 = G__55275;
i__54508 = G__55276;
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
var seq__54525 = cljs.core.seq(js_requires);
var chunk__54526 = null;
var count__54527 = (0);
var i__54528 = (0);
while(true){
if((i__54528 < count__54527)){
var js_ns = chunk__54526.cljs$core$IIndexed$_nth$arity$2(null,i__54528);
var require_str_55277 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55277);


var G__55278 = seq__54525;
var G__55279 = chunk__54526;
var G__55280 = count__54527;
var G__55281 = (i__54528 + (1));
seq__54525 = G__55278;
chunk__54526 = G__55279;
count__54527 = G__55280;
i__54528 = G__55281;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54525);
if(temp__5753__auto__){
var seq__54525__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54525__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54525__$1);
var G__55285 = cljs.core.chunk_rest(seq__54525__$1);
var G__55286 = c__5568__auto__;
var G__55287 = cljs.core.count(c__5568__auto__);
var G__55288 = (0);
seq__54525 = G__55285;
chunk__54526 = G__55286;
count__54527 = G__55287;
i__54528 = G__55288;
continue;
} else {
var js_ns = cljs.core.first(seq__54525__$1);
var require_str_55289 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55289);


var G__55290 = cljs.core.next(seq__54525__$1);
var G__55291 = null;
var G__55292 = (0);
var G__55293 = (0);
seq__54525 = G__55290;
chunk__54526 = G__55291;
count__54527 = G__55292;
i__54528 = G__55293;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54530){
var map__54531 = p__54530;
var map__54531__$1 = cljs.core.__destructure_map(map__54531);
var msg = map__54531__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54531__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54531__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54532(s__54533){
return (new cljs.core.LazySeq(null,(function (){
var s__54533__$1 = s__54533;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__54533__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__54538 = cljs.core.first(xs__6308__auto__);
var map__54538__$1 = cljs.core.__destructure_map(map__54538);
var src = map__54538__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54538__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54538__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__54533__$1,map__54538,map__54538__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54531,map__54531__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54532_$_iter__54534(s__54535){
return (new cljs.core.LazySeq(null,((function (s__54533__$1,map__54538,map__54538__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54531,map__54531__$1,msg,info,reload_info){
return (function (){
var s__54535__$1 = s__54535;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__54535__$1);
if(temp__5753__auto____$1){
var s__54535__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54535__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__54535__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__54537 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__54536 = (0);
while(true){
if((i__54536 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__54536);
cljs.core.chunk_append(b__54537,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__55296 = (i__54536 + (1));
i__54536 = G__55296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54537),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54532_$_iter__54534(cljs.core.chunk_rest(s__54535__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54537),null);
}
} else {
var warning = cljs.core.first(s__54535__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54532_$_iter__54534(cljs.core.rest(s__54535__$2)));
}
} else {
return null;
}
break;
}
});})(s__54533__$1,map__54538,map__54538__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54531,map__54531__$1,msg,info,reload_info))
,null,null));
});})(s__54533__$1,map__54538,map__54538__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__54531,map__54531__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54532(cljs.core.rest(s__54533__$1)));
} else {
var G__55299 = cljs.core.rest(s__54533__$1);
s__54533__$1 = G__55299;
continue;
}
} else {
var G__55300 = cljs.core.rest(s__54533__$1);
s__54533__$1 = G__55300;
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
var seq__54539_55301 = cljs.core.seq(warnings);
var chunk__54540_55302 = null;
var count__54541_55303 = (0);
var i__54542_55304 = (0);
while(true){
if((i__54542_55304 < count__54541_55303)){
var map__54545_55305 = chunk__54540_55302.cljs$core$IIndexed$_nth$arity$2(null,i__54542_55304);
var map__54545_55306__$1 = cljs.core.__destructure_map(map__54545_55305);
var w_55307 = map__54545_55306__$1;
var msg_55308__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54545_55306__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54545_55306__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54545_55306__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54545_55306__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55311)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55309),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55310),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55308__$1)].join(''));


var G__55316 = seq__54539_55301;
var G__55317 = chunk__54540_55302;
var G__55318 = count__54541_55303;
var G__55319 = (i__54542_55304 + (1));
seq__54539_55301 = G__55316;
chunk__54540_55302 = G__55317;
count__54541_55303 = G__55318;
i__54542_55304 = G__55319;
continue;
} else {
var temp__5753__auto___55320 = cljs.core.seq(seq__54539_55301);
if(temp__5753__auto___55320){
var seq__54539_55321__$1 = temp__5753__auto___55320;
if(cljs.core.chunked_seq_QMARK_(seq__54539_55321__$1)){
var c__5568__auto___55322 = cljs.core.chunk_first(seq__54539_55321__$1);
var G__55323 = cljs.core.chunk_rest(seq__54539_55321__$1);
var G__55324 = c__5568__auto___55322;
var G__55325 = cljs.core.count(c__5568__auto___55322);
var G__55326 = (0);
seq__54539_55301 = G__55323;
chunk__54540_55302 = G__55324;
count__54541_55303 = G__55325;
i__54542_55304 = G__55326;
continue;
} else {
var map__54548_55327 = cljs.core.first(seq__54539_55321__$1);
var map__54548_55328__$1 = cljs.core.__destructure_map(map__54548_55327);
var w_55329 = map__54548_55328__$1;
var msg_55330__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54548_55328__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54548_55328__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54548_55328__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54548_55328__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55333)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55331),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55332),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55330__$1)].join(''));


var G__55338 = cljs.core.next(seq__54539_55321__$1);
var G__55339 = null;
var G__55340 = (0);
var G__55341 = (0);
seq__54539_55301 = G__55338;
chunk__54540_55302 = G__55339;
count__54541_55303 = G__55340;
i__54542_55304 = G__55341;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54529_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54529_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54556){
var map__54557 = p__54556;
var map__54557__$1 = cljs.core.__destructure_map(map__54557);
var msg = map__54557__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54557__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__54558 = cljs.core.seq(updates);
var chunk__54560 = null;
var count__54561 = (0);
var i__54562 = (0);
while(true){
if((i__54562 < count__54561)){
var path = chunk__54560.cljs$core$IIndexed$_nth$arity$2(null,i__54562);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54827_55348 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54831_55349 = null;
var count__54832_55350 = (0);
var i__54833_55351 = (0);
while(true){
if((i__54833_55351 < count__54832_55350)){
var node_55352 = chunk__54831_55349.cljs$core$IIndexed$_nth$arity$2(null,i__54833_55351);
if(cljs.core.not(node_55352.shadow$old)){
var path_match_55353 = shadow.cljs.devtools.client.browser.match_paths(node_55352.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55353)){
var new_link_55357 = (function (){var G__54921 = node_55352.cloneNode(true);
G__54921.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55353),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54921;
})();
(node_55352.shadow$old = true);

(new_link_55357.onload = ((function (seq__54827_55348,chunk__54831_55349,count__54832_55350,i__54833_55351,seq__54558,chunk__54560,count__54561,i__54562,new_link_55357,path_match_55353,node_55352,path,map__54557,map__54557__$1,msg,updates,reload_info){
return (function (e){
var seq__54925_55358 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54927_55359 = null;
var count__54928_55360 = (0);
var i__54929_55361 = (0);
while(true){
if((i__54929_55361 < count__54928_55360)){
var map__54935_55366 = chunk__54927_55359.cljs$core$IIndexed$_nth$arity$2(null,i__54929_55361);
var map__54935_55367__$1 = cljs.core.__destructure_map(map__54935_55366);
var task_55368 = map__54935_55367__$1;
var fn_str_55369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54935_55367__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54935_55367__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55371 = goog.getObjectByName(fn_str_55369,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55370)].join(''));

(fn_obj_55371.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55371.cljs$core$IFn$_invoke$arity$2(path,new_link_55357) : fn_obj_55371.call(null,path,new_link_55357));


var G__55373 = seq__54925_55358;
var G__55374 = chunk__54927_55359;
var G__55375 = count__54928_55360;
var G__55376 = (i__54929_55361 + (1));
seq__54925_55358 = G__55373;
chunk__54927_55359 = G__55374;
count__54928_55360 = G__55375;
i__54929_55361 = G__55376;
continue;
} else {
var temp__5753__auto___55377 = cljs.core.seq(seq__54925_55358);
if(temp__5753__auto___55377){
var seq__54925_55380__$1 = temp__5753__auto___55377;
if(cljs.core.chunked_seq_QMARK_(seq__54925_55380__$1)){
var c__5568__auto___55381 = cljs.core.chunk_first(seq__54925_55380__$1);
var G__55382 = cljs.core.chunk_rest(seq__54925_55380__$1);
var G__55383 = c__5568__auto___55381;
var G__55384 = cljs.core.count(c__5568__auto___55381);
var G__55385 = (0);
seq__54925_55358 = G__55382;
chunk__54927_55359 = G__55383;
count__54928_55360 = G__55384;
i__54929_55361 = G__55385;
continue;
} else {
var map__54941_55386 = cljs.core.first(seq__54925_55380__$1);
var map__54941_55387__$1 = cljs.core.__destructure_map(map__54941_55386);
var task_55388 = map__54941_55387__$1;
var fn_str_55389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54941_55387__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54941_55387__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55391 = goog.getObjectByName(fn_str_55389,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55390)].join(''));

(fn_obj_55391.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55391.cljs$core$IFn$_invoke$arity$2(path,new_link_55357) : fn_obj_55391.call(null,path,new_link_55357));


var G__55392 = cljs.core.next(seq__54925_55380__$1);
var G__55393 = null;
var G__55394 = (0);
var G__55395 = (0);
seq__54925_55358 = G__55392;
chunk__54927_55359 = G__55393;
count__54928_55360 = G__55394;
i__54929_55361 = G__55395;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55352);
});})(seq__54827_55348,chunk__54831_55349,count__54832_55350,i__54833_55351,seq__54558,chunk__54560,count__54561,i__54562,new_link_55357,path_match_55353,node_55352,path,map__54557,map__54557__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55353], 0));

goog.dom.insertSiblingAfter(new_link_55357,node_55352);


var G__55396 = seq__54827_55348;
var G__55397 = chunk__54831_55349;
var G__55398 = count__54832_55350;
var G__55399 = (i__54833_55351 + (1));
seq__54827_55348 = G__55396;
chunk__54831_55349 = G__55397;
count__54832_55350 = G__55398;
i__54833_55351 = G__55399;
continue;
} else {
var G__55400 = seq__54827_55348;
var G__55401 = chunk__54831_55349;
var G__55402 = count__54832_55350;
var G__55403 = (i__54833_55351 + (1));
seq__54827_55348 = G__55400;
chunk__54831_55349 = G__55401;
count__54832_55350 = G__55402;
i__54833_55351 = G__55403;
continue;
}
} else {
var G__55404 = seq__54827_55348;
var G__55405 = chunk__54831_55349;
var G__55406 = count__54832_55350;
var G__55407 = (i__54833_55351 + (1));
seq__54827_55348 = G__55404;
chunk__54831_55349 = G__55405;
count__54832_55350 = G__55406;
i__54833_55351 = G__55407;
continue;
}
} else {
var temp__5753__auto___55408 = cljs.core.seq(seq__54827_55348);
if(temp__5753__auto___55408){
var seq__54827_55411__$1 = temp__5753__auto___55408;
if(cljs.core.chunked_seq_QMARK_(seq__54827_55411__$1)){
var c__5568__auto___55412 = cljs.core.chunk_first(seq__54827_55411__$1);
var G__55413 = cljs.core.chunk_rest(seq__54827_55411__$1);
var G__55414 = c__5568__auto___55412;
var G__55415 = cljs.core.count(c__5568__auto___55412);
var G__55416 = (0);
seq__54827_55348 = G__55413;
chunk__54831_55349 = G__55414;
count__54832_55350 = G__55415;
i__54833_55351 = G__55416;
continue;
} else {
var node_55417 = cljs.core.first(seq__54827_55411__$1);
if(cljs.core.not(node_55417.shadow$old)){
var path_match_55418 = shadow.cljs.devtools.client.browser.match_paths(node_55417.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55418)){
var new_link_55419 = (function (){var G__54951 = node_55417.cloneNode(true);
G__54951.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55418),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54951;
})();
(node_55417.shadow$old = true);

(new_link_55419.onload = ((function (seq__54827_55348,chunk__54831_55349,count__54832_55350,i__54833_55351,seq__54558,chunk__54560,count__54561,i__54562,new_link_55419,path_match_55418,node_55417,seq__54827_55411__$1,temp__5753__auto___55408,path,map__54557,map__54557__$1,msg,updates,reload_info){
return (function (e){
var seq__54952_55421 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54954_55422 = null;
var count__54955_55423 = (0);
var i__54956_55424 = (0);
while(true){
if((i__54956_55424 < count__54955_55423)){
var map__54968_55426 = chunk__54954_55422.cljs$core$IIndexed$_nth$arity$2(null,i__54956_55424);
var map__54968_55427__$1 = cljs.core.__destructure_map(map__54968_55426);
var task_55428 = map__54968_55427__$1;
var fn_str_55429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54968_55427__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54968_55427__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55431 = goog.getObjectByName(fn_str_55429,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55430)].join(''));

(fn_obj_55431.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55431.cljs$core$IFn$_invoke$arity$2(path,new_link_55419) : fn_obj_55431.call(null,path,new_link_55419));


var G__55432 = seq__54952_55421;
var G__55433 = chunk__54954_55422;
var G__55434 = count__54955_55423;
var G__55435 = (i__54956_55424 + (1));
seq__54952_55421 = G__55432;
chunk__54954_55422 = G__55433;
count__54955_55423 = G__55434;
i__54956_55424 = G__55435;
continue;
} else {
var temp__5753__auto___55436__$1 = cljs.core.seq(seq__54952_55421);
if(temp__5753__auto___55436__$1){
var seq__54952_55437__$1 = temp__5753__auto___55436__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54952_55437__$1)){
var c__5568__auto___55438 = cljs.core.chunk_first(seq__54952_55437__$1);
var G__55439 = cljs.core.chunk_rest(seq__54952_55437__$1);
var G__55440 = c__5568__auto___55438;
var G__55441 = cljs.core.count(c__5568__auto___55438);
var G__55442 = (0);
seq__54952_55421 = G__55439;
chunk__54954_55422 = G__55440;
count__54955_55423 = G__55441;
i__54956_55424 = G__55442;
continue;
} else {
var map__54974_55443 = cljs.core.first(seq__54952_55437__$1);
var map__54974_55444__$1 = cljs.core.__destructure_map(map__54974_55443);
var task_55445 = map__54974_55444__$1;
var fn_str_55446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54974_55444__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54974_55444__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55448 = goog.getObjectByName(fn_str_55446,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55447)].join(''));

(fn_obj_55448.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55448.cljs$core$IFn$_invoke$arity$2(path,new_link_55419) : fn_obj_55448.call(null,path,new_link_55419));


var G__55449 = cljs.core.next(seq__54952_55437__$1);
var G__55450 = null;
var G__55451 = (0);
var G__55452 = (0);
seq__54952_55421 = G__55449;
chunk__54954_55422 = G__55450;
count__54955_55423 = G__55451;
i__54956_55424 = G__55452;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55417);
});})(seq__54827_55348,chunk__54831_55349,count__54832_55350,i__54833_55351,seq__54558,chunk__54560,count__54561,i__54562,new_link_55419,path_match_55418,node_55417,seq__54827_55411__$1,temp__5753__auto___55408,path,map__54557,map__54557__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55418], 0));

goog.dom.insertSiblingAfter(new_link_55419,node_55417);


var G__55453 = cljs.core.next(seq__54827_55411__$1);
var G__55454 = null;
var G__55455 = (0);
var G__55456 = (0);
seq__54827_55348 = G__55453;
chunk__54831_55349 = G__55454;
count__54832_55350 = G__55455;
i__54833_55351 = G__55456;
continue;
} else {
var G__55458 = cljs.core.next(seq__54827_55411__$1);
var G__55459 = null;
var G__55460 = (0);
var G__55461 = (0);
seq__54827_55348 = G__55458;
chunk__54831_55349 = G__55459;
count__54832_55350 = G__55460;
i__54833_55351 = G__55461;
continue;
}
} else {
var G__55462 = cljs.core.next(seq__54827_55411__$1);
var G__55463 = null;
var G__55464 = (0);
var G__55465 = (0);
seq__54827_55348 = G__55462;
chunk__54831_55349 = G__55463;
count__54832_55350 = G__55464;
i__54833_55351 = G__55465;
continue;
}
}
} else {
}
}
break;
}


var G__55466 = seq__54558;
var G__55467 = chunk__54560;
var G__55468 = count__54561;
var G__55469 = (i__54562 + (1));
seq__54558 = G__55466;
chunk__54560 = G__55467;
count__54561 = G__55468;
i__54562 = G__55469;
continue;
} else {
var G__55471 = seq__54558;
var G__55472 = chunk__54560;
var G__55473 = count__54561;
var G__55474 = (i__54562 + (1));
seq__54558 = G__55471;
chunk__54560 = G__55472;
count__54561 = G__55473;
i__54562 = G__55474;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__54558);
if(temp__5753__auto__){
var seq__54558__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54558__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__54558__$1);
var G__55477 = cljs.core.chunk_rest(seq__54558__$1);
var G__55478 = c__5568__auto__;
var G__55479 = cljs.core.count(c__5568__auto__);
var G__55480 = (0);
seq__54558 = G__55477;
chunk__54560 = G__55478;
count__54561 = G__55479;
i__54562 = G__55480;
continue;
} else {
var path = cljs.core.first(seq__54558__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54986_55484 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54990_55485 = null;
var count__54991_55486 = (0);
var i__54992_55487 = (0);
while(true){
if((i__54992_55487 < count__54991_55486)){
var node_55488 = chunk__54990_55485.cljs$core$IIndexed$_nth$arity$2(null,i__54992_55487);
if(cljs.core.not(node_55488.shadow$old)){
var path_match_55489 = shadow.cljs.devtools.client.browser.match_paths(node_55488.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55489)){
var new_link_55490 = (function (){var G__55074 = node_55488.cloneNode(true);
G__55074.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55489),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55074;
})();
(node_55488.shadow$old = true);

(new_link_55490.onload = ((function (seq__54986_55484,chunk__54990_55485,count__54991_55486,i__54992_55487,seq__54558,chunk__54560,count__54561,i__54562,new_link_55490,path_match_55489,node_55488,path,seq__54558__$1,temp__5753__auto__,map__54557,map__54557__$1,msg,updates,reload_info){
return (function (e){
var seq__55079_55494 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__55081_55495 = null;
var count__55082_55496 = (0);
var i__55083_55497 = (0);
while(true){
if((i__55083_55497 < count__55082_55496)){
var map__55099_55498 = chunk__55081_55495.cljs$core$IIndexed$_nth$arity$2(null,i__55083_55497);
var map__55099_55499__$1 = cljs.core.__destructure_map(map__55099_55498);
var task_55500 = map__55099_55499__$1;
var fn_str_55501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55099_55499__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55099_55499__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55505 = goog.getObjectByName(fn_str_55501,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55502)].join(''));

(fn_obj_55505.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55505.cljs$core$IFn$_invoke$arity$2(path,new_link_55490) : fn_obj_55505.call(null,path,new_link_55490));


var G__55508 = seq__55079_55494;
var G__55509 = chunk__55081_55495;
var G__55510 = count__55082_55496;
var G__55511 = (i__55083_55497 + (1));
seq__55079_55494 = G__55508;
chunk__55081_55495 = G__55509;
count__55082_55496 = G__55510;
i__55083_55497 = G__55511;
continue;
} else {
var temp__5753__auto___55512__$1 = cljs.core.seq(seq__55079_55494);
if(temp__5753__auto___55512__$1){
var seq__55079_55513__$1 = temp__5753__auto___55512__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55079_55513__$1)){
var c__5568__auto___55514 = cljs.core.chunk_first(seq__55079_55513__$1);
var G__55515 = cljs.core.chunk_rest(seq__55079_55513__$1);
var G__55516 = c__5568__auto___55514;
var G__55517 = cljs.core.count(c__5568__auto___55514);
var G__55518 = (0);
seq__55079_55494 = G__55515;
chunk__55081_55495 = G__55516;
count__55082_55496 = G__55517;
i__55083_55497 = G__55518;
continue;
} else {
var map__55102_55519 = cljs.core.first(seq__55079_55513__$1);
var map__55102_55520__$1 = cljs.core.__destructure_map(map__55102_55519);
var task_55521 = map__55102_55520__$1;
var fn_str_55522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55102_55520__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55102_55520__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55524 = goog.getObjectByName(fn_str_55522,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55523)].join(''));

(fn_obj_55524.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55524.cljs$core$IFn$_invoke$arity$2(path,new_link_55490) : fn_obj_55524.call(null,path,new_link_55490));


var G__55525 = cljs.core.next(seq__55079_55513__$1);
var G__55526 = null;
var G__55527 = (0);
var G__55528 = (0);
seq__55079_55494 = G__55525;
chunk__55081_55495 = G__55526;
count__55082_55496 = G__55527;
i__55083_55497 = G__55528;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55488);
});})(seq__54986_55484,chunk__54990_55485,count__54991_55486,i__54992_55487,seq__54558,chunk__54560,count__54561,i__54562,new_link_55490,path_match_55489,node_55488,path,seq__54558__$1,temp__5753__auto__,map__54557,map__54557__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55489], 0));

goog.dom.insertSiblingAfter(new_link_55490,node_55488);


var G__55529 = seq__54986_55484;
var G__55530 = chunk__54990_55485;
var G__55531 = count__54991_55486;
var G__55532 = (i__54992_55487 + (1));
seq__54986_55484 = G__55529;
chunk__54990_55485 = G__55530;
count__54991_55486 = G__55531;
i__54992_55487 = G__55532;
continue;
} else {
var G__55533 = seq__54986_55484;
var G__55534 = chunk__54990_55485;
var G__55535 = count__54991_55486;
var G__55536 = (i__54992_55487 + (1));
seq__54986_55484 = G__55533;
chunk__54990_55485 = G__55534;
count__54991_55486 = G__55535;
i__54992_55487 = G__55536;
continue;
}
} else {
var G__55537 = seq__54986_55484;
var G__55538 = chunk__54990_55485;
var G__55539 = count__54991_55486;
var G__55540 = (i__54992_55487 + (1));
seq__54986_55484 = G__55537;
chunk__54990_55485 = G__55538;
count__54991_55486 = G__55539;
i__54992_55487 = G__55540;
continue;
}
} else {
var temp__5753__auto___55541__$1 = cljs.core.seq(seq__54986_55484);
if(temp__5753__auto___55541__$1){
var seq__54986_55542__$1 = temp__5753__auto___55541__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54986_55542__$1)){
var c__5568__auto___55543 = cljs.core.chunk_first(seq__54986_55542__$1);
var G__55544 = cljs.core.chunk_rest(seq__54986_55542__$1);
var G__55545 = c__5568__auto___55543;
var G__55546 = cljs.core.count(c__5568__auto___55543);
var G__55547 = (0);
seq__54986_55484 = G__55544;
chunk__54990_55485 = G__55545;
count__54991_55486 = G__55546;
i__54992_55487 = G__55547;
continue;
} else {
var node_55548 = cljs.core.first(seq__54986_55542__$1);
if(cljs.core.not(node_55548.shadow$old)){
var path_match_55552 = shadow.cljs.devtools.client.browser.match_paths(node_55548.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55552)){
var new_link_55555 = (function (){var G__55110 = node_55548.cloneNode(true);
G__55110.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55552),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55110;
})();
(node_55548.shadow$old = true);

(new_link_55555.onload = ((function (seq__54986_55484,chunk__54990_55485,count__54991_55486,i__54992_55487,seq__54558,chunk__54560,count__54561,i__54562,new_link_55555,path_match_55552,node_55548,seq__54986_55542__$1,temp__5753__auto___55541__$1,path,seq__54558__$1,temp__5753__auto__,map__54557,map__54557__$1,msg,updates,reload_info){
return (function (e){
var seq__55116_55556 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__55118_55557 = null;
var count__55119_55558 = (0);
var i__55120_55559 = (0);
while(true){
if((i__55120_55559 < count__55119_55558)){
var map__55133_55560 = chunk__55118_55557.cljs$core$IIndexed$_nth$arity$2(null,i__55120_55559);
var map__55133_55561__$1 = cljs.core.__destructure_map(map__55133_55560);
var task_55562 = map__55133_55561__$1;
var fn_str_55563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55133_55561__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55133_55561__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55566 = goog.getObjectByName(fn_str_55563,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55564)].join(''));

(fn_obj_55566.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55566.cljs$core$IFn$_invoke$arity$2(path,new_link_55555) : fn_obj_55566.call(null,path,new_link_55555));


var G__55570 = seq__55116_55556;
var G__55571 = chunk__55118_55557;
var G__55572 = count__55119_55558;
var G__55573 = (i__55120_55559 + (1));
seq__55116_55556 = G__55570;
chunk__55118_55557 = G__55571;
count__55119_55558 = G__55572;
i__55120_55559 = G__55573;
continue;
} else {
var temp__5753__auto___55574__$2 = cljs.core.seq(seq__55116_55556);
if(temp__5753__auto___55574__$2){
var seq__55116_55575__$1 = temp__5753__auto___55574__$2;
if(cljs.core.chunked_seq_QMARK_(seq__55116_55575__$1)){
var c__5568__auto___55576 = cljs.core.chunk_first(seq__55116_55575__$1);
var G__55577 = cljs.core.chunk_rest(seq__55116_55575__$1);
var G__55578 = c__5568__auto___55576;
var G__55579 = cljs.core.count(c__5568__auto___55576);
var G__55580 = (0);
seq__55116_55556 = G__55577;
chunk__55118_55557 = G__55578;
count__55119_55558 = G__55579;
i__55120_55559 = G__55580;
continue;
} else {
var map__55135_55581 = cljs.core.first(seq__55116_55575__$1);
var map__55135_55582__$1 = cljs.core.__destructure_map(map__55135_55581);
var task_55583 = map__55135_55582__$1;
var fn_str_55584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55135_55582__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55135_55582__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55588 = goog.getObjectByName(fn_str_55584,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55585)].join(''));

(fn_obj_55588.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55588.cljs$core$IFn$_invoke$arity$2(path,new_link_55555) : fn_obj_55588.call(null,path,new_link_55555));


var G__55589 = cljs.core.next(seq__55116_55575__$1);
var G__55590 = null;
var G__55591 = (0);
var G__55592 = (0);
seq__55116_55556 = G__55589;
chunk__55118_55557 = G__55590;
count__55119_55558 = G__55591;
i__55120_55559 = G__55592;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55548);
});})(seq__54986_55484,chunk__54990_55485,count__54991_55486,i__54992_55487,seq__54558,chunk__54560,count__54561,i__54562,new_link_55555,path_match_55552,node_55548,seq__54986_55542__$1,temp__5753__auto___55541__$1,path,seq__54558__$1,temp__5753__auto__,map__54557,map__54557__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55552], 0));

goog.dom.insertSiblingAfter(new_link_55555,node_55548);


var G__55593 = cljs.core.next(seq__54986_55542__$1);
var G__55594 = null;
var G__55595 = (0);
var G__55596 = (0);
seq__54986_55484 = G__55593;
chunk__54990_55485 = G__55594;
count__54991_55486 = G__55595;
i__54992_55487 = G__55596;
continue;
} else {
var G__55597 = cljs.core.next(seq__54986_55542__$1);
var G__55598 = null;
var G__55599 = (0);
var G__55600 = (0);
seq__54986_55484 = G__55597;
chunk__54990_55485 = G__55598;
count__54991_55486 = G__55599;
i__54992_55487 = G__55600;
continue;
}
} else {
var G__55602 = cljs.core.next(seq__54986_55542__$1);
var G__55603 = null;
var G__55604 = (0);
var G__55605 = (0);
seq__54986_55484 = G__55602;
chunk__54990_55485 = G__55603;
count__54991_55486 = G__55604;
i__54992_55487 = G__55605;
continue;
}
}
} else {
}
}
break;
}


var G__55606 = cljs.core.next(seq__54558__$1);
var G__55607 = null;
var G__55608 = (0);
var G__55609 = (0);
seq__54558 = G__55606;
chunk__54560 = G__55607;
count__54561 = G__55608;
i__54562 = G__55609;
continue;
} else {
var G__55610 = cljs.core.next(seq__54558__$1);
var G__55611 = null;
var G__55612 = (0);
var G__55613 = (0);
seq__54558 = G__55610;
chunk__54560 = G__55611;
count__54561 = G__55612;
i__54562 = G__55613;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__55142){
var map__55143 = p__55142;
var map__55143__$1 = cljs.core.__destructure_map(map__55143);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55143__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__55175){
var map__55178 = p__55175;
var map__55178__$1 = cljs.core.__destructure_map(map__55178);
var _ = map__55178__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55178__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__55179,done,error){
var map__55180 = p__55179;
var map__55180__$1 = cljs.core.__destructure_map(map__55180);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55180__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__55182,done,error){
var map__55183 = p__55182;
var map__55183__$1 = cljs.core.__destructure_map(map__55183);
var msg = map__55183__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55183__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55183__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55183__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__55186){
var map__55189 = p__55186;
var map__55189__$1 = cljs.core.__destructure_map(map__55189);
var src = map__55189__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55189__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__55190 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__55190) : done.call(null,G__55190));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__55192){
var map__55193 = p__55192;
var map__55193__$1 = cljs.core.__destructure_map(map__55193);
var msg__$1 = map__55193__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55193__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e55197){var ex = e55197;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__55204){
var map__55205 = p__55204;
var map__55205__$1 = cljs.core.__destructure_map(map__55205);
var env = map__55205__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55205__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__55231){
var map__55232 = p__55231;
var map__55232__$1 = cljs.core.__destructure_map(map__55232);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55232__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55232__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__55236){
var map__55237 = p__55236;
var map__55237__$1 = cljs.core.__destructure_map(map__55237);
var svc = map__55237__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55237__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
