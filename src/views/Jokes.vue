<template>
  <div class="mx-auto my-4 md:my-8 py-12 w-5/6 sm:w-4/5 bg-violet-50 rounded-xl shadow-xl text-center px-4 sm:px-8">
    <page-title>Semua <text-violet>jokes</text-violet> yang warga dapetin.</page-title>
    <p class="mt-2 mb-8 text-gray-400 font-serif">Biar warga gausah inget-inget lagi jokes yang tadi, bisa diliat di sini yaa ✏️</p>
    <ol class="lg:w-3/4 mx-auto text-left">
      <li v-for="(joke, index) of allJokes" :key="index" class="font-serif font-normal text-gray-500 mb-2">
        <span class="text-violet-600 font-bold">{{ index+1 }}.</span> {{ joke.joke }}</li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PageTitle from '../components/PageTitle.vue';
import TextViolet from '../components/TextViolet.vue';

export default {
  computed: {
    ...mapGetters({
      allJokes: 'getAllJokes',
    }),
  },
  components: {
    'page-title': PageTitle,
    'text-violet': TextViolet,
  },
};
</script>
