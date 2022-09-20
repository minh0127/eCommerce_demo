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
      console.log(payload);
      state.foodImgs = payload;
    },
  },
  actions: {
    async fetchImgs(context) {
      let data = [];

      // Phải dùng await vì promise.then() chỉ xử lý thằng bên trong axios -> data = []
      await axios
        .get(
          `https://ecommerce-cabi-1cd08-default-rtdb.asia-southeast1.firebasedatabase.app/food-img.json`
        )
        .then((res) => {
          data = res.data;
        })
        .catch((err) => console.log(err));

      console.log(data);
      context.commit("setFoodImgs", data);
    },
  },
};
