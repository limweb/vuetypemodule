import { createRouter, createWebHistory } from 'vue-router'
export default  createRouter({
        history: createWebHistory(),
        routes: [
            {path:'/home',name:'Home',component: () => import('./home.js')},
            {path:'/foo',name:'Foo',component: ()=>import('./foo.js')},
            {path:'/foo/:id',name:'Fooinfo',component:()=>import('./foo.js')},
            {path:'/bar',name:'Bar',component: ()=>import('./bar.js')},
        ]
    });