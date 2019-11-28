<template>
  <div>
    <h1>נקודות מחזור מסביבי</h1>
    <v-btn small @click="closePaper" v-bind:class="{ active: isPaperOpen }">נייר</v-btn>
    <v-btn small>קרטון</v-btn>
    <v-btn small>זכוכית</v-btn>
    <v-btn small>פלסטיק</v-btn>
    <google-map />
  </div>
</template>

<script>
import GoogleMap from "./GoogleMap";
import { store, mutations } from "@/store.js";

export default {
  computed: {
    isPaperOpen() {
      return !store.isPaperOpen;
    }
  },
  methods: {
    closePaper: mutations.togglePaper
  },
  name: "NearMe",
  components: {
    GoogleMap
  }
};
</script>

<style>
.active {
  background-color: cadetblue !important;
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