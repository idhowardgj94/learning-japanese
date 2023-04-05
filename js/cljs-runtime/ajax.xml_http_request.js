goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__58656 = e.target.readyState;
var fexpr__58654 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__58654.cljs$core$IFn$_invoke$arity$1 ? fexpr__58654.cljs$core$IFn$_invoke$arity$1(G__58656) : fexpr__58654.call(null,G__58656));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__58667,handler){
var map__58668 = p__58667;
var map__58668__$1 = cljs.core.__destructure_map(map__58668);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58668__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58668__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__58664_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__58664_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___58708 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___58708)){
var response_type_58709 = temp__5753__auto___58708;
(this$__$1.responseType = cljs.core.name(response_type_58709));
} else {
}

var seq__58669_58713 = cljs.core.seq(headers);
var chunk__58670_58714 = null;
var count__58671_58715 = (0);
var i__58672_58716 = (0);
while(true){
if((i__58672_58716 < count__58671_58715)){
var vec__58682_58718 = chunk__58670_58714.cljs$core$IIndexed$_nth$arity$2(null,i__58672_58716);
var k_58719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58682_58718,(0),null);
var v_58720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58682_58718,(1),null);
this$__$1.setRequestHeader(k_58719,v_58720);


var G__58721 = seq__58669_58713;
var G__58722 = chunk__58670_58714;
var G__58723 = count__58671_58715;
var G__58724 = (i__58672_58716 + (1));
seq__58669_58713 = G__58721;
chunk__58670_58714 = G__58722;
count__58671_58715 = G__58723;
i__58672_58716 = G__58724;
continue;
} else {
var temp__5753__auto___58725 = cljs.core.seq(seq__58669_58713);
if(temp__5753__auto___58725){
var seq__58669_58726__$1 = temp__5753__auto___58725;
if(cljs.core.chunked_seq_QMARK_(seq__58669_58726__$1)){
var c__5568__auto___58727 = cljs.core.chunk_first(seq__58669_58726__$1);
var G__58729 = cljs.core.chunk_rest(seq__58669_58726__$1);
var G__58730 = c__5568__auto___58727;
var G__58731 = cljs.core.count(c__5568__auto___58727);
var G__58732 = (0);
seq__58669_58713 = G__58729;
chunk__58670_58714 = G__58730;
count__58671_58715 = G__58731;
i__58672_58716 = G__58732;
continue;
} else {
var vec__58687_58733 = cljs.core.first(seq__58669_58726__$1);
var k_58734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58687_58733,(0),null);
var v_58735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58687_58733,(1),null);
this$__$1.setRequestHeader(k_58734,v_58735);


var G__58736 = cljs.core.next(seq__58669_58726__$1);
var G__58737 = null;
var G__58738 = (0);
var G__58739 = (0);
seq__58669_58713 = G__58736;
chunk__58670_58714 = G__58737;
count__58671_58715 = G__58738;
i__58672_58716 = G__58739;
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
