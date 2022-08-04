<template>
<div>
  <div class="text-center w-5/6 sm:w-3/5 mx-auto my-8 md:my-16">
    <h1 class="font-bold text-3xl">👋🏻 Halo Warga!</h1>
    <p class="my-4 text-gray-400">di aplikasi jokes bapak-bapak, warga bisa baca jokes receh khas bapak-bapak komplek. kalo mau nimbrung, warga juga bisa tambahin jokes di menu paling kanan yaa warga. Oiya, jangan lupa protokol kesehatan ya, biar pada sehat semua. salam garing, kriukk....</p>
  </div>
  <div class="mx-auto mb-12 w-4/5 bg-violet-50 rounded-xl shadow-xl text-center px-4 sm:px-8">
    <h1 class="pt-12 text-2xl font-bold">Kasih <span class="text-violet-600 font-serif">jokes bapak-bapak</span> dong 😁</h1>
    <div class="mt-8 mb-16">
      <template v-if="isLoading">
        <div class="flex justify-center">
          <img class="animate-spin h-8 w-8 mr-3" viewBox="0 0 24 24" src="../assets/spinner.png" alt="loading-state">
        </div>
      </template>
      <p v-else class="font-serif md:text-xl">{{ joke }}</p>
    </div>
    <button class="px-8 py-2 rounded-full bg-violet-700 text-violet-50 mb-12" @click="getOtherJokes">Lagi Dong</button>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters({
      joke: 'getCurrentJoke',
    }),
  },
  methods: {
    ...mapActions({
      setCurrentJoke: 'setCurrentJoke',
    }),
    getOtherJokes() {
      this.isLoading = true;
      this.setCurrentJoke()
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.setCurrentJoke()
      .then(() => {
        this.isLoading = false;
      });
  },
};
</script>
