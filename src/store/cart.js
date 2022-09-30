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
      // gán bằng thằng cart fetch từ API
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
      // if 1. fetch từ api use

      // else 1. set từ browser -> nếu có rồi thì replace, chưa có thì add
      const existingItem = context.state.cart.find(
        (item) => item.productID === payload.productID
      );

      if (existingItem) {
        existingItem.quantity += payload.quantity;
      } else {
        context.commit("addCart", payload);
      }
      // 2. set
    },
    removeCart(context, payload) {
      context.commit("removeCart", payload);
    },
  },
};
