import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3,
    currency: "",
  },

  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
