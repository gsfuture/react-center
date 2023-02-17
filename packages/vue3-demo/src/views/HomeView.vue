<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">


import {HelloA,helloConstA} from "@lerna-good/lerna-module-a";
import {HelloB} from "@lerna-good/lerna-module-b";

import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

console.log("--------- vue3 constA",helloConstA)

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
