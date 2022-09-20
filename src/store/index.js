import { createStore } from "vuex";

import foodsModule from "./foods";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    foods: foodsModule,
  },
});
