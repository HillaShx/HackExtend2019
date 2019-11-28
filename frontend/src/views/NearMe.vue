<template>
  <div>
    <h1>נקודות מחזור מסביבי</h1>
    <v-btn small @click="closePaper" class="matBtn" v-bind:class="{ active: isPaperOpen }">נייר</v-btn>
    <v-btn small @click="closeGlass" class="matBtn" v-bind:class="{ active: isGlassOpen }">זכוכית</v-btn>
    <v-btn
      small
      @click="closePlastic"
      class="matBtn"
      v-bind:class="{ active: isPlasticOpen }"
    >פלסטיק</v-btn>
    <google-map />
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap";
import { store, mutations } from "@/store.js";
// import axios from 'axios';
export default {
  computed: {
    isPaperOpen() {
      return store.materials["paper"];
    },
    isGlassOpen() {
      return store.materials["glass"];
    },
    isPlasticOpen() {
      return store.materials["plastic"];
    }
  },
  methods: {
    closePaper: () => {
      mutations.toggleMaterial("paper");
    },
<<<<<<< HEAD
  //   created(){
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //   .then(res=> this.todos = res.data)
  //   .catch(err=>alert(err));
  // }
=======
    closeGlass: () => {
      mutations.toggleMaterial("glass");
    },
    closePlastic: () => {
      mutations.toggleMaterial("plastic");
    }
>>>>>>> 49ccd4019c2802dbec225d92c6464f86367dd1a3
  },
  name: "NearMe",
  components: {
    GoogleMap
  }
};
</script>

<style >
.v-btn.matBtn.active {
  border: 2px solid black;
}
div {
  text-align: center;
}
h1 {
  font-weight: 550;
  font-size: 60px;
}
p {
  color: "#dedede";
  font-weight: 600;
}
</style>