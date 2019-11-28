<template>
  <div id="app">
    <!-- <nav class="main-nav">
     
      <div class="name">מחזר אותי</div>

      
    </nav>-->
    <!-- <div class="frame"></div> -->

    <v-app>
      <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <div class="logo">WHERECYCLE.com</div>
        </div>
        <Burger />
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <router-link to="/">מחזור סביבי (חיפוש מתקני מחזור)</router-link>
        </li>
        <li>
          <router-link to="/information">מידע על מחזור</router-link>
        </li>
        <li>
          <router-link to="/about">אודות</router-link>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Burger from "./components/menu/Burger";
import Sidebar from "./components/menu/Sidebar";
export default {
  name: "app",
  components: {
    Burger,
    Sidebar
  }
};
</script>

<style>
html {
  height: 100%;
  overflow: hidden;
}
body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgb(101, 31, 87);
}
.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: "Lato";
  /* margin-right: 50%; */
}
.name {
  align-self: center;
  color: #fff;
  /* font-weight: bold; */
  font-family: "Arial";
  font-size: 200%;
}
.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
  margin-left: 100px;
}
ul.sidebar-panel-nav {
  list-style-type: none;
}
ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
.frame {
  width: 90%;
  height: 500px;
  background-image: url("./assets/children-recycling-tips-cc.jpg");
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: first baseline;
  /* border:20px solid rgb(100, 82, 82); */
}
* {
  direction: rtl;
}
</style>
