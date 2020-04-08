<template>
    <div>
        <h1>这是Account组件</h1>
        <router-link to="/account/login">login子组件</router-link>
        <router-link to="/account/register">register子组件</router-link>
        <router-view></router-view>
    </div>
</template>