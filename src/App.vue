<template>
  <v-app class="app">
    <navigation></navigation>

    <v-main class="background">
      <div class="mt-14 px-lg-14 px-md-14 px-4">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: 'App',
  components: {
    // Countries,
    Navigation,
    // Countries
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  .app{
    font-family: "Nunito Sans";
  }
</style>
