goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49478 = arguments.length;
var i__5770__auto___49479 = (0);
while(true){
if((i__5770__auto___49479 < len__5769__auto___49478)){
args__5775__auto__.push((arguments[i__5770__auto___49479]));

var G__49480 = (i__5770__auto___49479 + (1));
i__5770__auto___49479 = G__49480;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49189){
var G__49190 = cljs.core.first(seq49189);
var seq49189__$1 = cljs.core.next(seq49189);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49190,seq49189__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49193 = cljs.core.seq(sources);
var chunk__49194 = null;
var count__49195 = (0);
var i__49196 = (0);
while(true){
if((i__49196 < count__49195)){
var map__49205 = chunk__49194.cljs$core$IIndexed$_nth$arity$2(null,i__49196);
var map__49205__$1 = cljs.core.__destructure_map(map__49205);
var src = map__49205__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49205__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49205__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49205__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49205__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49207){var e_49481 = e49207;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49481);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49481.message)].join('')));
}

var G__49482 = seq__49193;
var G__49483 = chunk__49194;
var G__49484 = count__49195;
var G__49485 = (i__49196 + (1));
seq__49193 = G__49482;
chunk__49194 = G__49483;
count__49195 = G__49484;
i__49196 = G__49485;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49193);
if(temp__5753__auto__){
var seq__49193__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49193__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49193__$1);
var G__49486 = cljs.core.chunk_rest(seq__49193__$1);
var G__49487 = c__5568__auto__;
var G__49488 = cljs.core.count(c__5568__auto__);
var G__49489 = (0);
seq__49193 = G__49486;
chunk__49194 = G__49487;
count__49195 = G__49488;
i__49196 = G__49489;
continue;
} else {
var map__49208 = cljs.core.first(seq__49193__$1);
var map__49208__$1 = cljs.core.__destructure_map(map__49208);
var src = map__49208__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49208__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49208__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49208__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49208__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49209){var e_49490 = e49209;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49490);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49490.message)].join('')));
}

var G__49491 = cljs.core.next(seq__49193__$1);
var G__49492 = null;
var G__49493 = (0);
var G__49494 = (0);
seq__49193 = G__49491;
chunk__49194 = G__49492;
count__49195 = G__49493;
i__49196 = G__49494;
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
var seq__49210 = cljs.core.seq(js_requires);
var chunk__49211 = null;
var count__49212 = (0);
var i__49213 = (0);
while(true){
if((i__49213 < count__49212)){
var js_ns = chunk__49211.cljs$core$IIndexed$_nth$arity$2(null,i__49213);
var require_str_49495 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49495);


var G__49496 = seq__49210;
var G__49497 = chunk__49211;
var G__49498 = count__49212;
var G__49499 = (i__49213 + (1));
seq__49210 = G__49496;
chunk__49211 = G__49497;
count__49212 = G__49498;
i__49213 = G__49499;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49210);
if(temp__5753__auto__){
var seq__49210__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49210__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49210__$1);
var G__49500 = cljs.core.chunk_rest(seq__49210__$1);
var G__49501 = c__5568__auto__;
var G__49502 = cljs.core.count(c__5568__auto__);
var G__49503 = (0);
seq__49210 = G__49500;
chunk__49211 = G__49501;
count__49212 = G__49502;
i__49213 = G__49503;
continue;
} else {
var js_ns = cljs.core.first(seq__49210__$1);
var require_str_49504 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49504);


var G__49505 = cljs.core.next(seq__49210__$1);
var G__49506 = null;
var G__49507 = (0);
var G__49508 = (0);
seq__49210 = G__49505;
chunk__49211 = G__49506;
count__49212 = G__49507;
i__49213 = G__49508;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__49217){
var map__49218 = p__49217;
var map__49218__$1 = cljs.core.__destructure_map(map__49218);
var msg = map__49218__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49218__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49218__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49219(s__49220){
return (new cljs.core.LazySeq(null,(function (){
var s__49220__$1 = s__49220;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49220__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__49225 = cljs.core.first(xs__6308__auto__);
var map__49225__$1 = cljs.core.__destructure_map(map__49225);
var src = map__49225__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49225__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49225__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__49220__$1,map__49225,map__49225__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__49218,map__49218__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49219_$_iter__49221(s__49222){
return (new cljs.core.LazySeq(null,((function (s__49220__$1,map__49225,map__49225__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__49218,map__49218__$1,msg,info,reload_info){
return (function (){
var s__49222__$1 = s__49222;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__49222__$1);
if(temp__5753__auto____$1){
var s__49222__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49222__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49222__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49224 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49223 = (0);
while(true){
if((i__49223 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__49223);
cljs.core.chunk_append(b__49224,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49509 = (i__49223 + (1));
i__49223 = G__49509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49224),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49219_$_iter__49221(cljs.core.chunk_rest(s__49222__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49224),null);
}
} else {
var warning = cljs.core.first(s__49222__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49219_$_iter__49221(cljs.core.rest(s__49222__$2)));
}
} else {
return null;
}
break;
}
});})(s__49220__$1,map__49225,map__49225__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__49218,map__49218__$1,msg,info,reload_info))
,null,null));
});})(s__49220__$1,map__49225,map__49225__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__49218,map__49218__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49219(cljs.core.rest(s__49220__$1)));
} else {
var G__49510 = cljs.core.rest(s__49220__$1);
s__49220__$1 = G__49510;
continue;
}
} else {
var G__49511 = cljs.core.rest(s__49220__$1);
s__49220__$1 = G__49511;
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
var seq__49226_49512 = cljs.core.seq(warnings);
var chunk__49227_49513 = null;
var count__49228_49514 = (0);
var i__49229_49515 = (0);
while(true){
if((i__49229_49515 < count__49228_49514)){
var map__49232_49516 = chunk__49227_49513.cljs$core$IIndexed$_nth$arity$2(null,i__49229_49515);
var map__49232_49517__$1 = cljs.core.__destructure_map(map__49232_49516);
var w_49518 = map__49232_49517__$1;
var msg_49519__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49232_49517__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49232_49517__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49232_49517__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49232_49517__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49522)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49520),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49521),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49519__$1)].join(''));


var G__49523 = seq__49226_49512;
var G__49524 = chunk__49227_49513;
var G__49525 = count__49228_49514;
var G__49526 = (i__49229_49515 + (1));
seq__49226_49512 = G__49523;
chunk__49227_49513 = G__49524;
count__49228_49514 = G__49525;
i__49229_49515 = G__49526;
continue;
} else {
var temp__5753__auto___49527 = cljs.core.seq(seq__49226_49512);
if(temp__5753__auto___49527){
var seq__49226_49528__$1 = temp__5753__auto___49527;
if(cljs.core.chunked_seq_QMARK_(seq__49226_49528__$1)){
var c__5568__auto___49529 = cljs.core.chunk_first(seq__49226_49528__$1);
var G__49530 = cljs.core.chunk_rest(seq__49226_49528__$1);
var G__49531 = c__5568__auto___49529;
var G__49532 = cljs.core.count(c__5568__auto___49529);
var G__49533 = (0);
seq__49226_49512 = G__49530;
chunk__49227_49513 = G__49531;
count__49228_49514 = G__49532;
i__49229_49515 = G__49533;
continue;
} else {
var map__49233_49534 = cljs.core.first(seq__49226_49528__$1);
var map__49233_49535__$1 = cljs.core.__destructure_map(map__49233_49534);
var w_49536 = map__49233_49535__$1;
var msg_49537__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49233_49535__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49233_49535__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49233_49535__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49233_49535__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49540)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49538),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49539),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49537__$1)].join(''));


var G__49541 = cljs.core.next(seq__49226_49528__$1);
var G__49542 = null;
var G__49543 = (0);
var G__49544 = (0);
seq__49226_49512 = G__49541;
chunk__49227_49513 = G__49542;
count__49228_49514 = G__49543;
i__49229_49515 = G__49544;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__49216_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49216_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__49234){
var map__49235 = p__49234;
var map__49235__$1 = cljs.core.__destructure_map(map__49235);
var msg = map__49235__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49235__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49235__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__49236 = cljs.core.seq(updates);
var chunk__49238 = null;
var count__49239 = (0);
var i__49240 = (0);
while(true){
if((i__49240 < count__49239)){
var path = chunk__49238.cljs$core$IIndexed$_nth$arity$2(null,i__49240);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49350_49545 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49354_49546 = null;
var count__49355_49547 = (0);
var i__49356_49548 = (0);
while(true){
if((i__49356_49548 < count__49355_49547)){
var node_49549 = chunk__49354_49546.cljs$core$IIndexed$_nth$arity$2(null,i__49356_49548);
if(cljs.core.not(node_49549.shadow$old)){
var path_match_49550 = shadow.cljs.devtools.client.browser.match_paths(node_49549.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49550)){
var new_link_49551 = (function (){var G__49382 = node_49549.cloneNode(true);
G__49382.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49550),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49382;
})();
(node_49549.shadow$old = true);

(new_link_49551.onload = ((function (seq__49350_49545,chunk__49354_49546,count__49355_49547,i__49356_49548,seq__49236,chunk__49238,count__49239,i__49240,new_link_49551,path_match_49550,node_49549,path,map__49235,map__49235__$1,msg,updates,reload_info){
return (function (e){
var seq__49383_49552 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49385_49553 = null;
var count__49386_49554 = (0);
var i__49387_49555 = (0);
while(true){
if((i__49387_49555 < count__49386_49554)){
var map__49391_49556 = chunk__49385_49553.cljs$core$IIndexed$_nth$arity$2(null,i__49387_49555);
var map__49391_49557__$1 = cljs.core.__destructure_map(map__49391_49556);
var task_49558 = map__49391_49557__$1;
var fn_str_49559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49391_49557__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49391_49557__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49561 = goog.getObjectByName(fn_str_49559,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49560)].join(''));

(fn_obj_49561.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49561.cljs$core$IFn$_invoke$arity$2(path,new_link_49551) : fn_obj_49561.call(null,path,new_link_49551));


var G__49562 = seq__49383_49552;
var G__49563 = chunk__49385_49553;
var G__49564 = count__49386_49554;
var G__49565 = (i__49387_49555 + (1));
seq__49383_49552 = G__49562;
chunk__49385_49553 = G__49563;
count__49386_49554 = G__49564;
i__49387_49555 = G__49565;
continue;
} else {
var temp__5753__auto___49566 = cljs.core.seq(seq__49383_49552);
if(temp__5753__auto___49566){
var seq__49383_49567__$1 = temp__5753__auto___49566;
if(cljs.core.chunked_seq_QMARK_(seq__49383_49567__$1)){
var c__5568__auto___49568 = cljs.core.chunk_first(seq__49383_49567__$1);
var G__49569 = cljs.core.chunk_rest(seq__49383_49567__$1);
var G__49570 = c__5568__auto___49568;
var G__49571 = cljs.core.count(c__5568__auto___49568);
var G__49572 = (0);
seq__49383_49552 = G__49569;
chunk__49385_49553 = G__49570;
count__49386_49554 = G__49571;
i__49387_49555 = G__49572;
continue;
} else {
var map__49392_49573 = cljs.core.first(seq__49383_49567__$1);
var map__49392_49574__$1 = cljs.core.__destructure_map(map__49392_49573);
var task_49575 = map__49392_49574__$1;
var fn_str_49576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49392_49574__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49392_49574__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49578 = goog.getObjectByName(fn_str_49576,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49577)].join(''));

(fn_obj_49578.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49578.cljs$core$IFn$_invoke$arity$2(path,new_link_49551) : fn_obj_49578.call(null,path,new_link_49551));


var G__49579 = cljs.core.next(seq__49383_49567__$1);
var G__49580 = null;
var G__49581 = (0);
var G__49582 = (0);
seq__49383_49552 = G__49579;
chunk__49385_49553 = G__49580;
count__49386_49554 = G__49581;
i__49387_49555 = G__49582;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49549);
});})(seq__49350_49545,chunk__49354_49546,count__49355_49547,i__49356_49548,seq__49236,chunk__49238,count__49239,i__49240,new_link_49551,path_match_49550,node_49549,path,map__49235,map__49235__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49550], 0));

goog.dom.insertSiblingAfter(new_link_49551,node_49549);


var G__49583 = seq__49350_49545;
var G__49584 = chunk__49354_49546;
var G__49585 = count__49355_49547;
var G__49586 = (i__49356_49548 + (1));
seq__49350_49545 = G__49583;
chunk__49354_49546 = G__49584;
count__49355_49547 = G__49585;
i__49356_49548 = G__49586;
continue;
} else {
var G__49587 = seq__49350_49545;
var G__49588 = chunk__49354_49546;
var G__49589 = count__49355_49547;
var G__49590 = (i__49356_49548 + (1));
seq__49350_49545 = G__49587;
chunk__49354_49546 = G__49588;
count__49355_49547 = G__49589;
i__49356_49548 = G__49590;
continue;
}
} else {
var G__49591 = seq__49350_49545;
var G__49592 = chunk__49354_49546;
var G__49593 = count__49355_49547;
var G__49594 = (i__49356_49548 + (1));
seq__49350_49545 = G__49591;
chunk__49354_49546 = G__49592;
count__49355_49547 = G__49593;
i__49356_49548 = G__49594;
continue;
}
} else {
var temp__5753__auto___49595 = cljs.core.seq(seq__49350_49545);
if(temp__5753__auto___49595){
var seq__49350_49596__$1 = temp__5753__auto___49595;
if(cljs.core.chunked_seq_QMARK_(seq__49350_49596__$1)){
var c__5568__auto___49597 = cljs.core.chunk_first(seq__49350_49596__$1);
var G__49598 = cljs.core.chunk_rest(seq__49350_49596__$1);
var G__49599 = c__5568__auto___49597;
var G__49600 = cljs.core.count(c__5568__auto___49597);
var G__49601 = (0);
seq__49350_49545 = G__49598;
chunk__49354_49546 = G__49599;
count__49355_49547 = G__49600;
i__49356_49548 = G__49601;
continue;
} else {
var node_49602 = cljs.core.first(seq__49350_49596__$1);
if(cljs.core.not(node_49602.shadow$old)){
var path_match_49603 = shadow.cljs.devtools.client.browser.match_paths(node_49602.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49603)){
var new_link_49604 = (function (){var G__49393 = node_49602.cloneNode(true);
G__49393.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49603),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49393;
})();
(node_49602.shadow$old = true);

(new_link_49604.onload = ((function (seq__49350_49545,chunk__49354_49546,count__49355_49547,i__49356_49548,seq__49236,chunk__49238,count__49239,i__49240,new_link_49604,path_match_49603,node_49602,seq__49350_49596__$1,temp__5753__auto___49595,path,map__49235,map__49235__$1,msg,updates,reload_info){
return (function (e){
var seq__49394_49605 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49396_49606 = null;
var count__49397_49607 = (0);
var i__49398_49608 = (0);
while(true){
if((i__49398_49608 < count__49397_49607)){
var map__49402_49609 = chunk__49396_49606.cljs$core$IIndexed$_nth$arity$2(null,i__49398_49608);
var map__49402_49610__$1 = cljs.core.__destructure_map(map__49402_49609);
var task_49611 = map__49402_49610__$1;
var fn_str_49612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49402_49610__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49402_49610__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49614 = goog.getObjectByName(fn_str_49612,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49613)].join(''));

(fn_obj_49614.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49614.cljs$core$IFn$_invoke$arity$2(path,new_link_49604) : fn_obj_49614.call(null,path,new_link_49604));


var G__49615 = seq__49394_49605;
var G__49616 = chunk__49396_49606;
var G__49617 = count__49397_49607;
var G__49618 = (i__49398_49608 + (1));
seq__49394_49605 = G__49615;
chunk__49396_49606 = G__49616;
count__49397_49607 = G__49617;
i__49398_49608 = G__49618;
continue;
} else {
var temp__5753__auto___49619__$1 = cljs.core.seq(seq__49394_49605);
if(temp__5753__auto___49619__$1){
var seq__49394_49620__$1 = temp__5753__auto___49619__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49394_49620__$1)){
var c__5568__auto___49621 = cljs.core.chunk_first(seq__49394_49620__$1);
var G__49622 = cljs.core.chunk_rest(seq__49394_49620__$1);
var G__49623 = c__5568__auto___49621;
var G__49624 = cljs.core.count(c__5568__auto___49621);
var G__49625 = (0);
seq__49394_49605 = G__49622;
chunk__49396_49606 = G__49623;
count__49397_49607 = G__49624;
i__49398_49608 = G__49625;
continue;
} else {
var map__49403_49626 = cljs.core.first(seq__49394_49620__$1);
var map__49403_49627__$1 = cljs.core.__destructure_map(map__49403_49626);
var task_49628 = map__49403_49627__$1;
var fn_str_49629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49403_49627__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49403_49627__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49631 = goog.getObjectByName(fn_str_49629,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49630)].join(''));

(fn_obj_49631.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49631.cljs$core$IFn$_invoke$arity$2(path,new_link_49604) : fn_obj_49631.call(null,path,new_link_49604));


var G__49632 = cljs.core.next(seq__49394_49620__$1);
var G__49633 = null;
var G__49634 = (0);
var G__49635 = (0);
seq__49394_49605 = G__49632;
chunk__49396_49606 = G__49633;
count__49397_49607 = G__49634;
i__49398_49608 = G__49635;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49602);
});})(seq__49350_49545,chunk__49354_49546,count__49355_49547,i__49356_49548,seq__49236,chunk__49238,count__49239,i__49240,new_link_49604,path_match_49603,node_49602,seq__49350_49596__$1,temp__5753__auto___49595,path,map__49235,map__49235__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49603], 0));

goog.dom.insertSiblingAfter(new_link_49604,node_49602);


var G__49636 = cljs.core.next(seq__49350_49596__$1);
var G__49637 = null;
var G__49638 = (0);
var G__49639 = (0);
seq__49350_49545 = G__49636;
chunk__49354_49546 = G__49637;
count__49355_49547 = G__49638;
i__49356_49548 = G__49639;
continue;
} else {
var G__49640 = cljs.core.next(seq__49350_49596__$1);
var G__49641 = null;
var G__49642 = (0);
var G__49643 = (0);
seq__49350_49545 = G__49640;
chunk__49354_49546 = G__49641;
count__49355_49547 = G__49642;
i__49356_49548 = G__49643;
continue;
}
} else {
var G__49644 = cljs.core.next(seq__49350_49596__$1);
var G__49645 = null;
var G__49646 = (0);
var G__49647 = (0);
seq__49350_49545 = G__49644;
chunk__49354_49546 = G__49645;
count__49355_49547 = G__49646;
i__49356_49548 = G__49647;
continue;
}
}
} else {
}
}
break;
}


var G__49648 = seq__49236;
var G__49649 = chunk__49238;
var G__49650 = count__49239;
var G__49651 = (i__49240 + (1));
seq__49236 = G__49648;
chunk__49238 = G__49649;
count__49239 = G__49650;
i__49240 = G__49651;
continue;
} else {
var G__49652 = seq__49236;
var G__49653 = chunk__49238;
var G__49654 = count__49239;
var G__49655 = (i__49240 + (1));
seq__49236 = G__49652;
chunk__49238 = G__49653;
count__49239 = G__49654;
i__49240 = G__49655;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49236);
if(temp__5753__auto__){
var seq__49236__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49236__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__49236__$1);
var G__49656 = cljs.core.chunk_rest(seq__49236__$1);
var G__49657 = c__5568__auto__;
var G__49658 = cljs.core.count(c__5568__auto__);
var G__49659 = (0);
seq__49236 = G__49656;
chunk__49238 = G__49657;
count__49239 = G__49658;
i__49240 = G__49659;
continue;
} else {
var path = cljs.core.first(seq__49236__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49404_49660 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49408_49661 = null;
var count__49409_49662 = (0);
var i__49410_49663 = (0);
while(true){
if((i__49410_49663 < count__49409_49662)){
var node_49664 = chunk__49408_49661.cljs$core$IIndexed$_nth$arity$2(null,i__49410_49663);
if(cljs.core.not(node_49664.shadow$old)){
var path_match_49665 = shadow.cljs.devtools.client.browser.match_paths(node_49664.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49665)){
var new_link_49666 = (function (){var G__49436 = node_49664.cloneNode(true);
G__49436.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49665),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49436;
})();
(node_49664.shadow$old = true);

(new_link_49666.onload = ((function (seq__49404_49660,chunk__49408_49661,count__49409_49662,i__49410_49663,seq__49236,chunk__49238,count__49239,i__49240,new_link_49666,path_match_49665,node_49664,path,seq__49236__$1,temp__5753__auto__,map__49235,map__49235__$1,msg,updates,reload_info){
return (function (e){
var seq__49437_49667 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49439_49668 = null;
var count__49440_49669 = (0);
var i__49441_49670 = (0);
while(true){
if((i__49441_49670 < count__49440_49669)){
var map__49445_49671 = chunk__49439_49668.cljs$core$IIndexed$_nth$arity$2(null,i__49441_49670);
var map__49445_49672__$1 = cljs.core.__destructure_map(map__49445_49671);
var task_49673 = map__49445_49672__$1;
var fn_str_49674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49445_49672__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49445_49672__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49676 = goog.getObjectByName(fn_str_49674,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49675)].join(''));

(fn_obj_49676.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49676.cljs$core$IFn$_invoke$arity$2(path,new_link_49666) : fn_obj_49676.call(null,path,new_link_49666));


var G__49677 = seq__49437_49667;
var G__49678 = chunk__49439_49668;
var G__49679 = count__49440_49669;
var G__49680 = (i__49441_49670 + (1));
seq__49437_49667 = G__49677;
chunk__49439_49668 = G__49678;
count__49440_49669 = G__49679;
i__49441_49670 = G__49680;
continue;
} else {
var temp__5753__auto___49681__$1 = cljs.core.seq(seq__49437_49667);
if(temp__5753__auto___49681__$1){
var seq__49437_49682__$1 = temp__5753__auto___49681__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49437_49682__$1)){
var c__5568__auto___49683 = cljs.core.chunk_first(seq__49437_49682__$1);
var G__49684 = cljs.core.chunk_rest(seq__49437_49682__$1);
var G__49685 = c__5568__auto___49683;
var G__49686 = cljs.core.count(c__5568__auto___49683);
var G__49687 = (0);
seq__49437_49667 = G__49684;
chunk__49439_49668 = G__49685;
count__49440_49669 = G__49686;
i__49441_49670 = G__49687;
continue;
} else {
var map__49446_49688 = cljs.core.first(seq__49437_49682__$1);
var map__49446_49689__$1 = cljs.core.__destructure_map(map__49446_49688);
var task_49690 = map__49446_49689__$1;
var fn_str_49691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49446_49689__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49446_49689__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49693 = goog.getObjectByName(fn_str_49691,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49692)].join(''));

(fn_obj_49693.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49693.cljs$core$IFn$_invoke$arity$2(path,new_link_49666) : fn_obj_49693.call(null,path,new_link_49666));


var G__49694 = cljs.core.next(seq__49437_49682__$1);
var G__49695 = null;
var G__49696 = (0);
var G__49697 = (0);
seq__49437_49667 = G__49694;
chunk__49439_49668 = G__49695;
count__49440_49669 = G__49696;
i__49441_49670 = G__49697;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49664);
});})(seq__49404_49660,chunk__49408_49661,count__49409_49662,i__49410_49663,seq__49236,chunk__49238,count__49239,i__49240,new_link_49666,path_match_49665,node_49664,path,seq__49236__$1,temp__5753__auto__,map__49235,map__49235__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49665], 0));

goog.dom.insertSiblingAfter(new_link_49666,node_49664);


var G__49698 = seq__49404_49660;
var G__49699 = chunk__49408_49661;
var G__49700 = count__49409_49662;
var G__49701 = (i__49410_49663 + (1));
seq__49404_49660 = G__49698;
chunk__49408_49661 = G__49699;
count__49409_49662 = G__49700;
i__49410_49663 = G__49701;
continue;
} else {
var G__49702 = seq__49404_49660;
var G__49703 = chunk__49408_49661;
var G__49704 = count__49409_49662;
var G__49705 = (i__49410_49663 + (1));
seq__49404_49660 = G__49702;
chunk__49408_49661 = G__49703;
count__49409_49662 = G__49704;
i__49410_49663 = G__49705;
continue;
}
} else {
var G__49706 = seq__49404_49660;
var G__49707 = chunk__49408_49661;
var G__49708 = count__49409_49662;
var G__49709 = (i__49410_49663 + (1));
seq__49404_49660 = G__49706;
chunk__49408_49661 = G__49707;
count__49409_49662 = G__49708;
i__49410_49663 = G__49709;
continue;
}
} else {
var temp__5753__auto___49710__$1 = cljs.core.seq(seq__49404_49660);
if(temp__5753__auto___49710__$1){
var seq__49404_49711__$1 = temp__5753__auto___49710__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49404_49711__$1)){
var c__5568__auto___49712 = cljs.core.chunk_first(seq__49404_49711__$1);
var G__49713 = cljs.core.chunk_rest(seq__49404_49711__$1);
var G__49714 = c__5568__auto___49712;
var G__49715 = cljs.core.count(c__5568__auto___49712);
var G__49716 = (0);
seq__49404_49660 = G__49713;
chunk__49408_49661 = G__49714;
count__49409_49662 = G__49715;
i__49410_49663 = G__49716;
continue;
} else {
var node_49717 = cljs.core.first(seq__49404_49711__$1);
if(cljs.core.not(node_49717.shadow$old)){
var path_match_49718 = shadow.cljs.devtools.client.browser.match_paths(node_49717.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49718)){
var new_link_49719 = (function (){var G__49447 = node_49717.cloneNode(true);
G__49447.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49718),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49447;
})();
(node_49717.shadow$old = true);

(new_link_49719.onload = ((function (seq__49404_49660,chunk__49408_49661,count__49409_49662,i__49410_49663,seq__49236,chunk__49238,count__49239,i__49240,new_link_49719,path_match_49718,node_49717,seq__49404_49711__$1,temp__5753__auto___49710__$1,path,seq__49236__$1,temp__5753__auto__,map__49235,map__49235__$1,msg,updates,reload_info){
return (function (e){
var seq__49448_49720 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__49450_49721 = null;
var count__49451_49722 = (0);
var i__49452_49723 = (0);
while(true){
if((i__49452_49723 < count__49451_49722)){
var map__49456_49724 = chunk__49450_49721.cljs$core$IIndexed$_nth$arity$2(null,i__49452_49723);
var map__49456_49725__$1 = cljs.core.__destructure_map(map__49456_49724);
var task_49726 = map__49456_49725__$1;
var fn_str_49727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49456_49725__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49456_49725__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49729 = goog.getObjectByName(fn_str_49727,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49728)].join(''));

(fn_obj_49729.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49729.cljs$core$IFn$_invoke$arity$2(path,new_link_49719) : fn_obj_49729.call(null,path,new_link_49719));


var G__49730 = seq__49448_49720;
var G__49731 = chunk__49450_49721;
var G__49732 = count__49451_49722;
var G__49733 = (i__49452_49723 + (1));
seq__49448_49720 = G__49730;
chunk__49450_49721 = G__49731;
count__49451_49722 = G__49732;
i__49452_49723 = G__49733;
continue;
} else {
var temp__5753__auto___49734__$2 = cljs.core.seq(seq__49448_49720);
if(temp__5753__auto___49734__$2){
var seq__49448_49735__$1 = temp__5753__auto___49734__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49448_49735__$1)){
var c__5568__auto___49736 = cljs.core.chunk_first(seq__49448_49735__$1);
var G__49737 = cljs.core.chunk_rest(seq__49448_49735__$1);
var G__49738 = c__5568__auto___49736;
var G__49739 = cljs.core.count(c__5568__auto___49736);
var G__49740 = (0);
seq__49448_49720 = G__49737;
chunk__49450_49721 = G__49738;
count__49451_49722 = G__49739;
i__49452_49723 = G__49740;
continue;
} else {
var map__49457_49741 = cljs.core.first(seq__49448_49735__$1);
var map__49457_49742__$1 = cljs.core.__destructure_map(map__49457_49741);
var task_49743 = map__49457_49742__$1;
var fn_str_49744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49457_49742__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_49745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49457_49742__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_49746 = goog.getObjectByName(fn_str_49744,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_49745)].join(''));

(fn_obj_49746.cljs$core$IFn$_invoke$arity$2 ? fn_obj_49746.cljs$core$IFn$_invoke$arity$2(path,new_link_49719) : fn_obj_49746.call(null,path,new_link_49719));


var G__49747 = cljs.core.next(seq__49448_49735__$1);
var G__49748 = null;
var G__49749 = (0);
var G__49750 = (0);
seq__49448_49720 = G__49747;
chunk__49450_49721 = G__49748;
count__49451_49722 = G__49749;
i__49452_49723 = G__49750;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_49717);
});})(seq__49404_49660,chunk__49408_49661,count__49409_49662,i__49410_49663,seq__49236,chunk__49238,count__49239,i__49240,new_link_49719,path_match_49718,node_49717,seq__49404_49711__$1,temp__5753__auto___49710__$1,path,seq__49236__$1,temp__5753__auto__,map__49235,map__49235__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49718], 0));

goog.dom.insertSiblingAfter(new_link_49719,node_49717);


var G__49751 = cljs.core.next(seq__49404_49711__$1);
var G__49752 = null;
var G__49753 = (0);
var G__49754 = (0);
seq__49404_49660 = G__49751;
chunk__49408_49661 = G__49752;
count__49409_49662 = G__49753;
i__49410_49663 = G__49754;
continue;
} else {
var G__49755 = cljs.core.next(seq__49404_49711__$1);
var G__49756 = null;
var G__49757 = (0);
var G__49758 = (0);
seq__49404_49660 = G__49755;
chunk__49408_49661 = G__49756;
count__49409_49662 = G__49757;
i__49410_49663 = G__49758;
continue;
}
} else {
var G__49759 = cljs.core.next(seq__49404_49711__$1);
var G__49760 = null;
var G__49761 = (0);
var G__49762 = (0);
seq__49404_49660 = G__49759;
chunk__49408_49661 = G__49760;
count__49409_49662 = G__49761;
i__49410_49663 = G__49762;
continue;
}
}
} else {
}
}
break;
}


var G__49763 = cljs.core.next(seq__49236__$1);
var G__49764 = null;
var G__49765 = (0);
var G__49766 = (0);
seq__49236 = G__49763;
chunk__49238 = G__49764;
count__49239 = G__49765;
i__49240 = G__49766;
continue;
} else {
var G__49767 = cljs.core.next(seq__49236__$1);
var G__49768 = null;
var G__49769 = (0);
var G__49770 = (0);
seq__49236 = G__49767;
chunk__49238 = G__49768;
count__49239 = G__49769;
i__49240 = G__49770;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__49458){
var map__49459 = p__49458;
var map__49459__$1 = cljs.core.__destructure_map(map__49459);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49459__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__49460){
var map__49461 = p__49460;
var map__49461__$1 = cljs.core.__destructure_map(map__49461);
var _ = map__49461__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49461__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__49462,done,error){
var map__49463 = p__49462;
var map__49463__$1 = cljs.core.__destructure_map(map__49463);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49463__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__49464,done,error){
var map__49465 = p__49464;
var map__49465__$1 = cljs.core.__destructure_map(map__49465);
var msg = map__49465__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49465__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49465__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49465__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49466){
var map__49467 = p__49466;
var map__49467__$1 = cljs.core.__destructure_map(map__49467);
var src = map__49467__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49467__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__49468 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__49468) : done.call(null,G__49468));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__49469){
var map__49470 = p__49469;
var map__49470__$1 = cljs.core.__destructure_map(map__49470);
var msg__$1 = map__49470__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49470__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e49471){var ex = e49471;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__49472){
var map__49473 = p__49472;
var map__49473__$1 = cljs.core.__destructure_map(map__49473);
var env = map__49473__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49473__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__49474){
var map__49475 = p__49474;
var map__49475__$1 = cljs.core.__destructure_map(map__49475);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49475__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49475__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__49476){
var map__49477 = p__49476;
var map__49477__$1 = cljs.core.__destructure_map(map__49477);
var svc = map__49477__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49477__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
