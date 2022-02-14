<template>
  <div class="mx-auto my-16 py-12 w-4/5 bg-violet-50 rounded-xl shadow-xl text-center px-8">
    <page-title>Semua <text-violet>jokes</text-violet> yang warga dapetin.</page-title>
    <p class="mt-2 mb-8 text-gray-400 font-serif">Biar warga gausah inget-inget lagi jokes yang tadi, bisa diliat di sini yaa ✏️</p>
    <ol v-for="(joke, index) of allJokes" :key="index" class="mb-2 px-8">
      <li class="font-serif font-normal text-gray-500"><span class="text-violet-600 font-bold">{{ index+1 }}.</span> {{ joke.joke }}</li>
    </ol>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import TextViolet from '../components/TextViolet.vue';

export default {
  computed: {
    allJokes() {
      return this.$store.getters.getAllJokes;
    },
  },
  components: {
    'page-title': PageTitle,
    'text-violet': TextViolet,
  },
};
</script>
