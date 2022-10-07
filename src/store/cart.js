export default {
  namespaced: true,
  state() {
    return {
      cart: [],
    };
  },
  getters: {
    cart(state) {
      return state.cart;
    },
  },
  mutations: {
    setCart(state, payload) {
      state.cart = payload;
    },
    addCart(state, payload) {
      state.cart.push(payload);
    },
    removeCart(state, payload) {
      state.cart = state.cart.filter(
        (item) => item.productID !== payload.productID
      );
    },
  },
  actions: {
    setCart(context, payload) {
      const existingItem = context.state.cart.find(
        (item) => item.productID === payload.productID
      );

      if (existingItem) {
        existingItem.quantity += payload.quantity;
      } else {
        context.commit("addCart", payload);
      }
    },
    removeCart(context, payload) {
      context.commit("removeCart", payload);
    },
  },
};
