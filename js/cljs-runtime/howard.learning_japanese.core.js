goog.provide('howard.learning_japanese.core');
howard.learning_japanese.core.functional_compiler = reagent.core.create_compiler(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function-components","function-components",1492814963),true], null));
reagent.core.set_default_compiler_BANG_(howard.learning_japanese.core.functional_compiler);
/**
 * init route use rfe.
 */
howard.learning_japanese.core.init_route = (function howard$learning_japanese$core$init_route(){
return reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(howard.learning_japanese.route.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null)),(function (m){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","navigate","howard.learning-japanese.events/navigate",913092563),m], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});
/**
 * mount re-frame root to web.
 */
howard.learning_japanese.core.mount_root = (function howard$learning_japanese$core$mount_root(){
cljss.core.remove_styles_BANG_();

cljss.core.css("html","html{height:100%;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css("body","body{height:100%;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css("#root","#root{height:100%;}",cljs.core.PersistentVector.EMPTY);

re_frame.core.clear_subscription_cache_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.events","initialise-db","howard.learning-japanese.events/initialise-db",-195350516)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("howard.learning-japanese.api","load-data","howard.learning-japanese.api/load-data",-1496194911)], null));

howard.learning_japanese.core.init_route();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [howard.learning_japanese.view.app], null),document.getElementById("root"));
});
/**
 * initialise cljs re-frame project
 */
howard.learning_japanese.core.init = (function howard$learning_japanese$core$init(){
console.log("hello, world");

return howard.learning_japanese.core.mount_root();
});

//# sourceMappingURL=howard.learning_japanese.core.js.map
