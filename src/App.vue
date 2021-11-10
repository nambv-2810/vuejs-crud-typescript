<template>
  <div id="app">
    <nav class="w-full bg-gray-500 flex justify-between">
      <a href="#" class="text-2xl text-left text-black ">Demo</a>
      <div class="flex mr-3">
        <li class="nav-item mx-2" style="list-style:none">
          <a href="/tutorials" class="nav-link">Tutorials</a>
        </li>
        <li class="nav-item" style="list-style:none">
          <a href="/add" class="nav-link">Add</a>
        </li>
      </div>
    </nav>
    <div class="max-w-screen-lg m-auto ">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>
