    import { createApp } from 'vue'
    import router  from "./router.js";
    import store from "./store.js"
    import App from "./app.js";
    import Test from "./test.js";
    const app = createApp(App)
    app.component('Test',Test);
    app.use(router);
    app.use(store);
    router.isReady().then(() => {
        app.mount('#app')
    })
    //---add instance to global for test----
    window.router = router;
    window.app = app;
    window.store = store;

    //--- Log test ----------
    console.log('router--->',router);
    console.log('store--->',store);
    console.log('app--->',app);
    // router.push('/foo/1');
    console.log('router-->',router.currentRoute.value);