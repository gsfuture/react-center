<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">

import {HelloB} from "@lerna-good/lerna-module-b";
// import {HelloA} from "@lerna-good/lerna-module-a";

import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


import * as _ from 'lodash'

// const {HelloA,helloConstA} = window.LernaModuleA || {}; //from "@lerna-good/lerna-module-a";


// 转换字符串string为驼峰写法。
let res = _.camelCase('get_username')

// 在控制台输出运行结果，证明lodash 库被正确引入
console.log("--------- lodash",res);  // getUsername


// let helloA = new HelloA();
// helloA.print();
let helloB = new window.MyBoy.HelloB();
helloB.print();


console.log("--------- work now ?????");


let helloB2 = new HelloB();
helloB2.print();

// console.log("--------- vue3 module constA",window.LernaModuleConstA)


// console.log("--------- vue3 constA",helloConstA)

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
