<template>
  <div>
    <div>
      <v-card class="choose-location">
        <!-- <v-card-title>בחר מקום</v-card-title>
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
        <v-btn v-on:click="geoLocate">מצא את המקום שלי</v-btn>
        <v-btn v-on:click="getPoints">עדכן נקודות מחזור</v-btn>-->
      </v-card>
      <br />
    </div>
    <br />
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
  </div>
</template>

<script>
// import { store, mutations } from "@/store.js";
import { MglMap } from "vue-mapbox";
import Mapbox from "mapbox-gl";
export default {
  name: "MapBox",
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  components: {
    MglMap
  },
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      accessToken:
        "pk.eyJ1IjoidW5zYXR1IiwiYSI6ImNrM2o4anptejBmNGgzZm5yazg3c2wzMXIifQ.1PKurd39LES52Mrx8rcwUg",
      mapStyle: {
        version: 8,
        name: "Mapbox Streets",
        sprite: "mapbox://sprites/mapbox/streets-v8",
        glyphs: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
        sources: {
          "mapbox-streets": {
            type: "vector",
            url: "mapbox://mapbox.mapbox-streets-v6"
          }
        },
        layers: [
          {
            id: "water",
            source: "mapbox-streets",
            "source-layer": "water",
            type: "fill",
            paint: {
              "fill-color": "#00ffff"
            }
          }
        ]
      }
      // center: { lat: 32.07358, lng: 34.788052 },
      // markers: store.markers,
      // places: [],
      // currentPlace: null,
      // shape: {
      //   coords: [1, 1, 1, 15, 15, 15, 15, 1],
      //   type: "circle"
      // }
    };
  },

  mounted() {
    // this.geoLocate();
  },

  methods: {
    // getPoints: mutations.getPoints,
    // // receives a place object via the autocomplete component
    // addPlace(place) {
    //   this.currentPlace = place;
    // },
    // setPlace(place) {
    //   const marker = {
    //     lat: place.geometry.location.lat(),
    //     lng: place.geometry.location.lng()
    //   };
    //   this.center = marker;
    // },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng()
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
    // geoLocate() {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //   });
    // }
  }
};
</script>
<style scoped>
.choose-location {
  max-width: 300px;
}
</style>