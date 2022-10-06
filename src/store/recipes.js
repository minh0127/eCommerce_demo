import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      recipes: [
        {
          id: "0",
          name: "Salmon Miso Rice Bowl",
          ingredients: "Salmon Fillet, Scallions, Sesame Seeds",
          notes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent nulla orci, suscipit sed scelerisque in, molestie sed
        elit. Nullam posuere risus quis congue finibus. Maecenas finibus
        magna et diam egestas blandit. Aliquam at consequat lectus. Cras
        ac scelerisque risus. Suspendisse sed nulla et mi finibus cursus
        non vitae lacus. Suspendisse accumsan condimentum sem lobortis
        fermentum. Ut tempus placerat enim, sed aliquam leo condimentum
        in.`,
          imgURL:
            "https://cdn.accentuate.io/587282809054/1653073413560/Salmon-Miso.jpg?v=1661036969435",
          path: "",
        },
      ],
    };
  },
  getters: {
    recipes(state) {
      return state.recipes;
    },
    recipeByID: (state) => (id) => {
      return state.recipes.find((recipe) => recipe.id === id);
    },
    numberOfTheSamePath: (state) => (path) => {
      let number = 0;
      state.recipes.forEach((recipe) => {
        if (recipe.path === path) {
          number++;
        }
      });
      return number;
    },
  },
  mutations: {
    setRecipes(state, payload) {
      const fetchedData = Object.keys(payload).map((key) => ({
        id: key,
        ...payload[key],
      }));
      console.log(fetchedData);
      state.recipes = fetchedData;
    },

    // addRecipe(state, payload) {
    //   state.recipes.push(payload);
    // },

    updateRecipe(state, payload) {
      let index = state.recipes.findIndex((recipe) => recipe.id === payload.id);
      console.log(index);
      state.recipes[index] = { id: payload.id, ...payload.updateData };
    },

    deleteRecipe(state, payload) {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== payload.id
      );
    },
  },
  actions: {
    async loadRecipes(context) {
      let data = [];

      await axios
        .get(
          `https://ecommerce-cabi-1cd08-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json`
        )
        .then((res) => {
          data = res.data;
          // vì có key nên res.data là object
          console.log(data);
        })
        .catch((err) => console.log(err));

      context.commit("setRecipes", data);
    },

    async addRecipe(context, data) {
      const recipeData = {
        name: data.name,
        ingredients: data.ingredients,
        notes: data.notes,
        imgURL: data.imgURL,
        path: data.path,
      };

      const res = await axios.post(
        `https://ecommerce-cabi-1cd08-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json`,
        recipeData
      );

      console.log(res);
      if (res.status === 200) {
        // context.commit("addRecipe", recipeData);
        await context.dispatch("loadRecipes");
      }
    },

    async updateRecipe(context, data) {
      const recipeID = data.id;
      const recipeData = {
        name: data.name,
        ingredients: data.ingredients,
        notes: data.notes,
        imgURL: data.imgURL,
        path: data.path,
      };

      const res = await axios.put(
        `https://ecommerce-cabi-1cd08-default-rtdb.asia-southeast1.firebasedatabase.app/recipes/${recipeID}.json`,
        recipeData
      );

      if (res.status === 200) {
        context.commit("updateRecipe", {
          id: recipeID,
          updateData: recipeData,
        });
      }
    },

    async deleteRecipe(context, data) {
      const recipeID = data.id;

      const res = await axios.delete(
        `https://ecommerce-cabi-1cd08-default-rtdb.asia-southeast1.firebasedatabase.app/recipes/${recipeID}.json`
      );

      if (res.status === 200) {
        context.commit("deleteRecipe", {
          id: recipeID,
        });
      }
    },
  },
};
