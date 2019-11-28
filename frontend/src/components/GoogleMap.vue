<template>
  <gmap-map
    :options="{
   zoomControl: true,
   mapTypeControl: true,
   scaleControl: true,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false
 }"
    :center="center"
    :zoom="17"
    style="width:100%;  height: 600px;"
  >
    <gmap-marker
      :key="index"
      :shape="shape"
      v-for="(m, index) in markers"
      :position="m.position"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
import { store, mutations } from "@/store.js";
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 32.07358, lng: 34.788052 },
      markers: store.markers,
      places: [],
      currentPlace: null,
      shape: {
        coords: [1, 1, 1, 15, 15, 15, 15, 1],
        type: "circle"
      }
    };
  },

  mounted() {
    this.geoLocate();
  },

  methods: {
    geoLocate: mutations.geoLocate
  }
};
</script>
<style scoped>
.choose-location {
  max-width: 300px;
}
</style>