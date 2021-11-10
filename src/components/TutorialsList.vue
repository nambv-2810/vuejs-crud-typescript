<template>
  
 <div class="grid grid-cols-1">
    <div id="my-text" class="w-full grid  p-3">
      <div class="grid grid-cols-4 mb-3">
        <input style=" border:1px solid #ccc"
          type="text"
          class="p-1 border-current"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append grid-cols-4">
          <button
            class="bg-green-500 rounded-r-lg p-2"
            type="button"
            @click="searchTitle()"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  <div class="grid grid-cols-4">
      <div class="p-2 bg-gray-300 rounded-md border-gray-100  p-2 m-3"   
      v-for="(tutorial, index) in tutorials"
      :key="index">
    <img  class="rounded-md w-18 shadow-md" src="https://storage.googleapis.com/afs-prod/media/5c71ea0f221148c8baa90e1be953f03d/472.jpeg" alt="">
    <a class="text-2xl text-left text-black tracking-wider py-2" :href="'/tutorials/' + tutorial.id">{{tutorial.title}}</a>
      <h5 class="text-left text-base text-black font-semibold pb-2">{{tutorial.sub_title}}</h5>
  <div class="flex justify-between">
    <span></span>
    <img class="float-right" src="../assets/icon.png" alt="">
  </div>
    <div class="grid grid-cols-4 bg-gray-100 p-2 my-2">
      <span class="flex justify-center">{{tutorial.date}}</span>
      <span class="flex justify-center">15h</span>
      <span class="flex justify-center"> 59m</span>
      <span class="flex justify-center">7s</span>
    </div>
    <div class="flex justify-between items-center pt-2 border-gradient">
      <button class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-2" @click="removeAllTutorials(tutorial.id)">delete</button>
      <span >{{tutorial.dep}}</span>
    </div>
    <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-1"></div>
  </div>
    </div>
 </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TutorialDataService from "@/services/TutorialDataService";
import Tutorial from "@/types/Tutorial";

@Component
export default class TutorialsList extends Vue {
  private tutorials: Tutorial[] = [];
  private currentTutorial = {} as Tutorial;
  private currentIndex: number = -1;
  private title: string = "";

  
  retrieveTutorials() {
    TutorialDataService.getAll()
      .then((response) => {
        this.tutorials = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
 
  refreshList() {
    this.retrieveTutorials();
    this.currentTutorial = {} as Tutorial;
    this.currentIndex = -1;
  }

  removeAllTutorials(id :number) {
    TutorialDataService.delete(id)
      .then((response) => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchTitle() {
    TutorialDataService.findByTitle(this.title)
      .then((response) => {
        this.tutorials = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  mounted() {
     let element = document.querySelector('#my-text');
   console.log(element);
    this.retrieveTutorials();
  }
  created() {
   let element = document.querySelector('#my-text');
   console.log(element);
   
       
      console.log(this.tutorials ,'1')
    this.retrieveTutorials();
  }
}
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
