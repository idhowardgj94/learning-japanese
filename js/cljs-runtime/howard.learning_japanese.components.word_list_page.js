goog.provide('howard.learning_japanese.components.word_list_page');
/**
 * mobile view of word-list-page
 */
howard.learning_japanese.components.word_list_page.word_list_page_mobile = (function howard$learning_japanese$components$word_list_page$word_list_page_mobile(){
var size = howard.learning_japanese.datascript.query.get_page_size_by_number((10));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.list,(function (){var iter__5523__auto__ = (function howard$learning_japanese$components$word_list_page$word_list_page_mobile_$_iter__53666(s__53667){
return (new cljs.core.LazySeq(null,(function (){
var s__53667__$1 = s__53667;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53667__$1);
if(temp__5753__auto__){
var s__53667__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53667__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53667__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53669 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53668 = (0);
while(true){
if((i__53668 < size__5522__auto__)){
var n = cljs.core._nth(c__5521__auto__,i__53668);
cljs.core.chunk_append(b__53669,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.list_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53668,n,c__5521__auto__,size__5522__auto__,b__53669,s__53667__$2,temp__5753__auto__,size){
return (function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"words-page","words-page",1262064268),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(n - (1))], null));
});})(i__53668,n,c__5521__auto__,size__5522__auto__,b__53669,s__53667__$2,temp__5753__auto__,size))
,new cljs.core.Keyword(null,"secondaryAction","secondaryAction",1740067390),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edge","edge",919909153),"end",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"finish"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.check.check], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.list_item_text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary","primary",817773892),["Week ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.divider], null)], null));

var G__53670 = (i__53668 + (1));
i__53668 = G__53670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53669),howard$learning_japanese$components$word_list_page$word_list_page_mobile_$_iter__53666(cljs.core.chunk_rest(s__53667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53669),null);
}
} else {
var n = cljs.core.first(s__53667__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),n], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.list_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button","button",1456579943),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (n,s__53667__$2,temp__5753__auto__,size){
return (function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"words-page","words-page",1262064268),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(n - (1))], null));
});})(n,s__53667__$2,temp__5753__auto__,size))
,new cljs.core.Keyword(null,"secondaryAction","secondaryAction",1740067390),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edge","edge",919909153),"end",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"finish"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.check.check], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.list_item_text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary","primary",817773892),["Week ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.divider], null)], null),howard$learning_japanese$components$word_list_page$word_list_page_mobile_$_iter__53666(cljs.core.rest(s__53667__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(size + (1))));
})()], null);
});
howard.learning_japanese.components.word_list_page.word_list_page = (function howard$learning_japanese$components$word_list_page$word_list_page(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs","xs",649443341),"block"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.components.toolbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [howard.learning_japanese.components.word_list_page.word_list_page_mobile], null)], null)], null);
});

//# sourceMappingURL=howard.learning_japanese.components.word_list_page.js.map