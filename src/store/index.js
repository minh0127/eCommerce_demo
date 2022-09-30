import { createStore } from "vuex";

import foodsModule from "./foods";
import productsModule from "./products";
import cartModule from "./cart";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    foods: foodsModule,
    products: productsModule,
    cart: cartModule,
  },
});
