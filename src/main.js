import Vue from "vue";
import VueRouter from "vue-router";
import app from "./app.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "./router.js";

Vue.use(VueRouter);





var vm=new Vue({
    el:"#app",
    /*
        render会把el指定的容器中所有的内容都清空覆盖,所以不要把路由的router-view和router-link直接写到el所控制的元素中
     */
    render:c=>c(app),
    router
})

/*
    注意:App这个组件是通过vm实例的render函数渲染出来的,render函数如果要渲染组件,渲染出来的组件只能放到el:"#app"所指定的
    元素中;
    Account和Goods组件是通过路由匹配监听到的,所以这2个组件只能展示到属于路由的<router-view></router-view>中去
 */