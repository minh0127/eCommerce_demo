<template>
  <div>
    <!-- card -->
    <div class="flex gap-10" v-if="hasData">
      <router-link
        v-for="index in 3"
        :key="index"
        :to="`/products/${index}`"
        class="group bg-white p-5 rounded-2xl h-[750px] hover:-translate-y-2 hover:shadow-lg transition-transform duration-300"
      >
        <!-- img -->
        <div class="relative h-[458px]">
          <img
            class="absolute bg-background-color h-[458px] rounded-2xl object-contain"
            :src="products[index - 1].imgs[2]"
            alt=""
          />
          <img
            class="absolute h-[458px] top-0 right-0 left-0 bottom-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :src="products[index - 1].imgs[0]"
            alt=""
          />
          <base-button
            class="bg-primary-color text-white rounded-md font-semibold text-sm h-12 text-center leading-[3rem] absolute w-[calc(100%_-_30px)] mx-[15px] -bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
            :title="`shop now - $${products[index - 1].price}`"
          ></base-button>
        </div>
        <!-- content -->
        <div class="tracking-wide">
          <h3 class="font-semibold text-sm my-8">
            {{ products[index - 1].name }}
          </h3>
          <p class="text-xs max-w-[394px]">
            {{ products[index - 1].description }}
          </p>
          <div
            class="text-xs bg-background-color px-4 py-2 rounded-lg font-semibold mt-16"
          >
            <span class="text-primary-color">Flavor notes</span>
            {{ products[index - 1].flavor }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import BaseButton from "../bases/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      hasData: false,
    };
  },
  methods: {
    async loadProducts() {
      try {
        await this.$store.dispatch("products/fetchProducts");
      } catch (error) {
        console.log(error.message || "Something went wrong");
      }
    },
  },
  computed: {
    products() {
      return this.$store.getters["products/products"];
    },
  },

  // reactivity vue đối với products -> async/await nó load xong hết mới mounted/render
  // và vì chỉ render template 1 lần nên chỉ render khi đã có dữ liệu
  // nếu không nó render ra null rồi thì products reactive nó cx k render lại!
  async created() {
    await this.loadProducts();
    this.hasData = true;
  },
};
</script>
<style lang=""></style>
