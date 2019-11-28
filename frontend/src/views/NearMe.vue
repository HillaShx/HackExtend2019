<template>
  <div>
    <h1>נקודות מחזור מסביבי</h1>
    <v-btn small @click="closePaper" class="matBtn" v-bind:class="{ active: isPaperOpen }">נייר</v-btn>
    <v-btn small class="matBtn">קרטון</v-btn>
    <v-btn small class="matBtn">זכוכית</v-btn>
    <v-btn small class="matBtn">פלסטיק</v-btn>
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
      return !store.materials["paper"];
    }
  },
  methods: {
    closePaper: () => {
      mutations.toggleMaterial("paper");
    },
  //   created(){
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //   .then(res=> this.todos = res.data)
  //   .catch(err=>alert(err));
  // }
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