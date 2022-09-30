import axios from "axios";

export default {
  namespaced: true,
  state() {
    return { foodImgs: [] };
  },
  getters: {
    foodImgs(state) {
      return state.foodImgs;
    },
  },
  mutations: {
    setFoodImgs(state, payload) {
      state.foodImgs = payload;
    },
  },
  actions: {
    async fetchImgs(context) {
      let data = [];

      await axios
        .get(
          `https://ecommerce-cabi-1cd08-default-rtdb.asia-southeast1.firebasedatabase.app/food-img.json`
        )
        .then((res) => {
          data = res.data;
        })
        .catch((err) => console.log(err));

      context.commit("setFoodImgs", data);
    },
  },
};
