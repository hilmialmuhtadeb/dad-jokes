import Vue from 'vue';
import Vuex from 'vuex';
import Toasted from 'vue-toasted';

Vue.use(Vuex);
Vue.use(Toasted);

export default new Vuex.Store({
  state: {
    currentJoke: '',
    allJokes: [],
  },
  mutations: {
    setCurrentJoke(state, payload) {
      state.currentJoke = payload.joke;
      state.allJokes = state.allJokes.filter((j) => j._id !== payload._id);
      state.allJokes.push(payload);
    },
  },
  actions: {
    async setCurrentJoke(state) {
      let joke = await fetch('https://api-dad-jokes.herokuapp.com/v1/joke');
      joke = await joke.json();
      state.commit('setCurrentJoke', joke.joke);
    },
    async addNewJoke(state, payload) {
      // console.log(payload);
      let joke = await fetch('https://api-dad-jokes.herokuapp.com/v1/joke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          joke: payload,
        }),
      });
      joke = await joke.json();

      if (joke.status === 201) {
        Vue.toasted.show(joke.message, {
          type: 'success',
          duration: 1000,
        });
      } else {
        Vue.toasted.show(joke.message, {
          type: 'error',
          duration: 1000,
        });
      }
    },
  },
  modules: {
  },
  getters: {
    getCurrentJoke: (state) => state.currentJoke,
    getAllJokes: (state) => state.allJokes,
  },
});
