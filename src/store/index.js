import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    sumCount() {
      return this.count + 1;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});

