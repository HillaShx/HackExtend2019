<template>
  <div>
    <div>
      <v-card class="choose-location">
        <v-card-title>בחר מקום</v-card-title>
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
        <v-btn v-on:click="geoLocate">מצא את המקום שלי</v-btn>
      </v-card>
      <br />
    </div>
    <br />
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
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 32.07358, lng: 34.788052 },
      markers: [
        { position: { lat: 32.07358, lng: 34.788052 } },
        { position: { lat: 32.08358, lng: 34.788052 } }
      ],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geoLocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    addPlace(place) {
      this.currentPlace = place;
    },
    setPlace(place) {
      const marker = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      this.center = marker;
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
    geoLocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>
<style scoped>
.choose-location {
  max-width: 300px;
}
</style>