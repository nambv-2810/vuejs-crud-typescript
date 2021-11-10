<template>

 <div class="grid grid-cols-4">
      <div class="p-2 bg-gray-300 rounded-md border-gray-100  p-2 m-3" >
    <img  class="rounded-md w-18 shadow-md" src="https://storage.googleapis.com/afs-prod/media/5c71ea0f221148c8baa90e1be953f03d/472.jpeg" alt="">
    <a class="text-2xl text-left text-black tracking-wider py-2" >{{currentTutorial.title}}</a>
      <h5 class="text-left text-base text-black font-semibold pb-2">{{currentTutorial.sub_title}}</h5>
  <div class="flex justify-between">
    <span></span>
    <img class="float-right" src="../assets/icon.png" alt="">
  </div>
    <div class="grid grid-cols-4 bg-gray-100 p-2 my-2">
      <span class="flex justify-center">{{currentTutorial.date}}</span>
      <span class="flex justify-center">15h</span>
      <span class="flex justify-center"> 59m</span>
      <span class="flex justify-center">7s</span>
    </div>
    <div class="flex justify-between items-center pt-2 border-gradient">
      <button class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-2" @click="deleteTutorial(currentTutorial.id)">delete</button>
      <span >{{currentTutorial.dep}}</span>
    </div>
    <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-1"></div>
  </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TutorialDataService from "@/services/TutorialDataService";
import Tutorial from "@/types/Tutorial";

@Component
export default class TutorialDetails extends Vue {
  private currentTutorial = {} as Tutorial;
  private message: string = "";

  getTutorial(id: string) {
    TutorialDataService.get(id)
      .then((response) => {
        this.currentTutorial = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updatePublished(status: boolean) {
    let data = {
      id: this.currentTutorial.id,
      title: this.currentTutorial.title,
      descriptisub_titleon: this.currentTutorial.sub_title,
      published: status,
    };

    // TutorialDataService.update(this.currentTutorial.id, data)
    //   .then((response) => {
    //     this.currentTutorial.published = status;
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  updateTutorial() {
    TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
      .then((response) => {
        console.log(response.data);
        this.message = "The tutorial was updated successfully!";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    TutorialDataService.delete(this.currentTutorial.id)
      .then((response) => {
        console.log(response.data);
        this.$router.push({ name: "tutorials" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.message = "";
    this.getTutorial(this.$route.params.id);
  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
