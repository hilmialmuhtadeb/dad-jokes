import Vue from 'vue';
import Vuex from 'vuex';
import Toasted from 'vue-toasted';
import axios from 'axios';

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
      let joke = await axios.get('http://localhost:4000/v1/joke');
      joke = joke.data;
      state.commit('setCurrentJoke', joke.joke);
    },
    async addNewJoke(state, payload) {
      const data = {
        joke: payload,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      let joke = await axios.post('http://localhost:4000/v1/joke', data, config);
      joke = joke.data;

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
