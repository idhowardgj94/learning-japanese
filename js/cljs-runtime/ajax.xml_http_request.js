goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__38625 = e.target.readyState;
var fexpr__38624 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__38624.cljs$core$IFn$_invoke$arity$1 ? fexpr__38624.cljs$core$IFn$_invoke$arity$1(G__38625) : fexpr__38624.call(null,G__38625));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__38630,handler){
var map__38631 = p__38630;
var map__38631__$1 = cljs.core.__destructure_map(map__38631);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38631__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38631__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38631__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__38626_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__38626_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___38662 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___38662)){
var response_type_38666 = temp__5753__auto___38662;
(this$__$1.responseType = cljs.core.name(response_type_38666));
} else {
}

var seq__38632_38667 = cljs.core.seq(headers);
var chunk__38633_38668 = null;
var count__38634_38669 = (0);
var i__38635_38670 = (0);
while(true){
if((i__38635_38670 < count__38634_38669)){
var vec__38645_38671 = chunk__38633_38668.cljs$core$IIndexed$_nth$arity$2(null,i__38635_38670);
var k_38672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38645_38671,(0),null);
var v_38673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38645_38671,(1),null);
this$__$1.setRequestHeader(k_38672,v_38673);


var G__38674 = seq__38632_38667;
var G__38675 = chunk__38633_38668;
var G__38676 = count__38634_38669;
var G__38677 = (i__38635_38670 + (1));
seq__38632_38667 = G__38674;
chunk__38633_38668 = G__38675;
count__38634_38669 = G__38676;
i__38635_38670 = G__38677;
continue;
} else {
var temp__5753__auto___38678 = cljs.core.seq(seq__38632_38667);
if(temp__5753__auto___38678){
var seq__38632_38680__$1 = temp__5753__auto___38678;
if(cljs.core.chunked_seq_QMARK_(seq__38632_38680__$1)){
var c__5568__auto___38681 = cljs.core.chunk_first(seq__38632_38680__$1);
var G__38683 = cljs.core.chunk_rest(seq__38632_38680__$1);
var G__38684 = c__5568__auto___38681;
var G__38685 = cljs.core.count(c__5568__auto___38681);
var G__38686 = (0);
seq__38632_38667 = G__38683;
chunk__38633_38668 = G__38684;
count__38634_38669 = G__38685;
i__38635_38670 = G__38686;
continue;
} else {
var vec__38650_38687 = cljs.core.first(seq__38632_38680__$1);
var k_38688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38650_38687,(0),null);
var v_38689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38650_38687,(1),null);
this$__$1.setRequestHeader(k_38688,v_38689);


var G__38690 = cljs.core.next(seq__38632_38680__$1);
var G__38691 = null;
var G__38692 = (0);
var G__38693 = (0);
seq__38632_38667 = G__38690;
chunk__38633_38668 = G__38691;
count__38634_38669 = G__38692;
i__38635_38670 = G__38693;
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
