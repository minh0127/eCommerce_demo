import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async fetchProducts(context) {
      let data = [];

      // Phải dùng await vì promise.then() chỉ xử lý thằng bên trong axios -> data = []
      await axios
        .get(
          `https://ecommerce-cabi-1cd08-default-rtdb.asia-southeast1.firebasedatabase.app/products.json`
        )
        .then((res) => {
          data = res.data;
        })
        .catch((err) => console.log(err));

      context.commit("setProducts", data);
    },
  },
};
