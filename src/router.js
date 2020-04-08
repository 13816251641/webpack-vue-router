import VueRouter from "vue-router";
import account from "./main/Account.vue";
import login from "./subcom/login.vue";
import register from "./subcom/register.vue";
import goods from "./main/Goods.vue";


var router= new VueRouter({
    routes:[
        {
            path:"/account",
            component:account,
            children:[
                /* 子路由不要加"/" */
                {path:"login",component:login},
                {path:"register",component:register}
            ]
        },
        {path: "/goods",component: goods}
    ]
});

export default router;