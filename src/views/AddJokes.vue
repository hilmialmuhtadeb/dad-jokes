<template>
  <div class="mx-auto my-16 py-12 px-8 w-4/5 bg-violet-50 rounded-xl shadow-xl text-center">
    <page-title>Coba, warga mau nge-<text-violet>jokes</text-violet> apa sih?</page-title>
    <p class="my-2 text-gray-400 font-serif">Gausah takut garing Pak, rengginang aja makin garing makin enak 😄</p>
    <div class="my-8">
      <textarea class="w-3/5 text-center rounded-full resize-none font-serif p-4" v-model="joke" placeholder="Coba tulisin jokes warga di sini" @keyup.enter="createJoke"></textarea>
    </div>
    <button class="px-8 py-2 rounded-full bg-violet-700 text-violet-50" @click="createJoke">Kirim Jokes</button>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
import TextViolet from '../components/TextViolet.vue';

export default {
  data() {
    return {
      joke: '',
    };
  },
  methods: {
    createJoke() {
      // console.log(this.joke);
      this.$store.dispatch('addNewJoke', this.joke);
      this.joke = '';
    },
  },
  components: {
    'page-title': PageTitle,
    'text-violet': TextViolet,
  },
};
</script>
