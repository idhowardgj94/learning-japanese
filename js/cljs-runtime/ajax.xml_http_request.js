goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__53391 = e.target.readyState;
var fexpr__53390 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__53390.cljs$core$IFn$_invoke$arity$1 ? fexpr__53390.cljs$core$IFn$_invoke$arity$1(G__53391) : fexpr__53390.call(null,G__53391));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
ajax.xml_http_request.goog$module$goog$object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__53418,handler){
var map__53419 = p__53418;
var map__53419__$1 = cljs.core.__destructure_map(map__53419);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53419__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53419__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__53415_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__53415_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___53539 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___53539)){
var response_type_53540 = temp__5753__auto___53539;
(this$__$1.responseType = cljs.core.name(response_type_53540));
} else {
}

var seq__53435_53541 = cljs.core.seq(headers);
var chunk__53436_53542 = null;
var count__53437_53543 = (0);
var i__53438_53544 = (0);
while(true){
if((i__53438_53544 < count__53437_53543)){
var vec__53498_53545 = chunk__53436_53542.cljs$core$IIndexed$_nth$arity$2(null,i__53438_53544);
var k_53546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53498_53545,(0),null);
var v_53547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53498_53545,(1),null);
this$__$1.setRequestHeader(k_53546,v_53547);


var G__53549 = seq__53435_53541;
var G__53550 = chunk__53436_53542;
var G__53551 = count__53437_53543;
var G__53552 = (i__53438_53544 + (1));
seq__53435_53541 = G__53549;
chunk__53436_53542 = G__53550;
count__53437_53543 = G__53551;
i__53438_53544 = G__53552;
continue;
} else {
var temp__5753__auto___53553 = cljs.core.seq(seq__53435_53541);
if(temp__5753__auto___53553){
var seq__53435_53554__$1 = temp__5753__auto___53553;
if(cljs.core.chunked_seq_QMARK_(seq__53435_53554__$1)){
var c__5568__auto___53555 = cljs.core.chunk_first(seq__53435_53554__$1);
var G__53556 = cljs.core.chunk_rest(seq__53435_53554__$1);
var G__53557 = c__5568__auto___53555;
var G__53558 = cljs.core.count(c__5568__auto___53555);
var G__53559 = (0);
seq__53435_53541 = G__53556;
chunk__53436_53542 = G__53557;
count__53437_53543 = G__53558;
i__53438_53544 = G__53559;
continue;
} else {
var vec__53510_53560 = cljs.core.first(seq__53435_53554__$1);
var k_53561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53510_53560,(0),null);
var v_53562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53510_53560,(1),null);
this$__$1.setRequestHeader(k_53561,v_53562);


var G__53563 = cljs.core.next(seq__53435_53554__$1);
var G__53564 = null;
var G__53565 = (0);
var G__53566 = (0);
seq__53435_53541 = G__53563;
chunk__53436_53542 = G__53564;
count__53437_53543 = G__53565;
i__53438_53544 = G__53566;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
