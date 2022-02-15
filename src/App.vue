<template>
  <div id="app">
    <div id="nav" class="px-4 pt-12 pb-8 text-center">
      <router-link class="px-2 md:px-10" to="/">Utama</router-link>
      <router-link class="px-2 md:px-10" to="/jokes">Semua Jokes</router-link>
      <router-link class="px-2 md:px-10" to="/add-jokes">Mau Ngejokes?</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  mounted() {
    this.setCurrentJoke();
  },
  methods: {
    ...mapActions([
      'setCurrentJoke',
    ]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #7c3aed;
  text-decoration: underline;
}
</style>
