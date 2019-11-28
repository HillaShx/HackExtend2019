<template>
  <div>
    <p>נקודות מחזור מסביבי</p>
    <v-btn small>Normal</v-btn>
    <google-map />
  </div>
</template>

<script>
import GoogleMap from "./GoogleMap";
export default {
  name: "NearMe",
  components: {
    GoogleMap
  }
};
</script>

<style>
p {
  color: "#dedede";
  font-weight: 600;
}
</style>