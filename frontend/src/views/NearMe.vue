<template>
  <div>
    <h1>נקודות מחזור מסביבי</h1>
    <h2>אל תתן למחזור להיערם, מצא פח קרוב עבור כל סוג אשפה</h2>
    <v-btn small @click="closePaper" class="matBtn" v-bind:class="{ active: isPaperOpen }">נייר</v-btn>
    <v-btn small @click="closeGlass" class="matBtn" v-bind:class="{ active: isGlassOpen }">זכוכית</v-btn>
    <v-btn
      small
      @click="closePlastic"
      class="matBtn"
      v-bind:class="{ active: isPlasticOpen }"
    >פלסטיק</v-btn>
    <div>
      <div class="search-label">?איפה תרצה לחפש</div>
      <gmap-autocomplete class="search-input" @place_changed="setPlace"></gmap-autocomplete>
      <v-btn v-on:click="geoLocate">מצא את המקום שלי</v-btn>
    </div>
    <br />

    <google-maps />
    <mini-types-view />
  </div>
</template>

<script>
import GoogleMaps from "../components/GoogleMap";
import MiniTypesView from "../components/MiniTypesView";
import { store, mutations } from "@/store.js";
// import axios from 'axios';
export default {
  name: "NearMe",
  components: {
    GoogleMaps,
    MiniTypesView
  },
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

    closeGlass: () => {
      mutations.toggleMaterial("glass");
    },
    closePlastic: () => {
      mutations.toggleMaterial("plastic");
    },
    getPoints: mutations.getPoints,
    addPlace(place) {
      this.currentPlace = place;
    },
    setPlace(place) {
      const marker = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      store.center = marker;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geoLocate: mutations.geoLocate
  }
};
</script>

<style >
.active {
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.75);
}

.search-label {
  color: green;
}
.search-input {
  background-color: #dedede;
}
.v-btn.matBtn.active {
  background-color: #cbcbcb;
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