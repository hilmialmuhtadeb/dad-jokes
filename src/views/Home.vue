<template>
<div>
  <div class="text-center w-3/5 mx-auto my-16">
    <h1 class="font-bold text-3xl">👋🏻 Halo Warga!</h1>
    <p class="my-4">di aplikasi jokes bapak-bapak, warga bisa baca jokes receh khas bapak-bapak komplek. kalo mau nimbrung, warga juga bisa tambahin jokes di menu paling kanan yaa warga. Oiya, jangan lupa protokol kesehatan ya, biar pada sehat semua. salam garing, kriukk....</p>
  </div>
  <div class="mx-auto w-4/5 bg-violet-50 rounded-xl shadow-xl text-center px-8">
    <h1 class="pt-12 text-2xl font-bold">Kasih <span class="text-violet-600 font-serif">jokes bapak-bapak</span> dong 😁</h1>
    <p class="mt-8 mb-16 font-serif text-xl text-gray-500">{{ joke }}</p>
    <button class="px-8 py-2 rounded-full bg-violet-700 text-violet-50 mb-12" @click="setCurrentJoke">Lagi Dong</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    joke() {
      return this.$store.getters.getCurrentJoke;
    },
  },
  methods: {
    setCurrentJoke() {
      this.$store.dispatch('setCurrentJoke');
    },
  },
};
</script>
