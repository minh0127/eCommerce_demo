<template lang="">
  <section class="py-8">
    <div class="bg-white px-8 py-10 rounded-2xl flex gap-8">
      <div class="w-2/3">
        <Splide
          :options="mainOption"
          :has-track="false"
          aria-label="thumbnail-carousel"
        >
          <div class="absolute z-[5] opacity-0 w-full h-full">
            <div class="splide__arrows h-full">
              <button
                class="splide__arrow splide__arrow--prev w-1/2 h-full"
              ></button>
              <button
                class="splide__arrow splide__arrow--next w-1/2 h-full"
              ></button>
            </div>
          </div>
          <SplideTrack>
            <SplideSlide
              v-for="(image, index) in selectedProduct.imgs"
              :key="index"
              class="opacity-60"
            >
              <img :src="image" alt="" />
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>

      <div class="w-1/3 flex flex-col justify-between">
        <div>
          <div v-if="!showIngredient">
            <div class="font-semibold text-xl my-8">
              {{ selectedProduct.name }}
            </div>
            <div class="text-sm">{{ selectedProduct.description }}</div>
            <div
              class="text-primary-color cursor-pointer hover:opacity-50 mt-8"
              @click="toggleShowIngredient"
            >
              Show ingredient & nutrition
            </div>
          </div>
          <div v-else>
            <img
              :src="selectedProduct.ingredient"
              alt=""
              class="mx-auto max-w-[65%]"
            />
            <div
              class="text-primary-color cursor-pointer hover:opacity-50 mt-8"
              @click="toggleShowIngredient"
            >
              Show information
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="relative w-1/3">
            <input
              type="text"
              name=""
              id=""
              class="border outline-none py-2 px-4 rounded-lg w-full"
              v-model="quantityProduct"
            />
            <div class="absolute top-2 right-4">
              <div @click="quantityProduct++" class="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                  />
                </svg>
              </div>
              <div @click="quantityProduct--" class="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <base-button
            title="add to cart"
            class="bg-primary-color text-white rounded-md w-full"
            @click="setCart"
          ></base-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

export default {
  components: { Splide, SplideSlide, SplideTrack },
  props: ["productID"],

  data() {
    return {
      showIngredient: false,
      quantityProduct: 1,

      mainOption: {
        type: "fade",
        rewind: true,
        pagination: false,
      },
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
    toggleShowIngredient() {
      this.showIngredient = !this.showIngredient;
    },

    setCart() {
      this.$store.dispatch("cart/setCart", {
        productID: this.productID,
        quantity: this.quantityProduct,
      });

      this.quantityProduct = 1;
    },
  },
  computed: {
    products() {
      return this.$store.getters["products/products"];
    },

    selectedProduct() {
      return this.products.find(
        (_, index) => index + 1 === parseInt(this.productID)
      );
    },
  },
  watch: {
    quantityProduct(newVal) {
      newVal = parseInt(newVal);
      if (/[1-9]/.test(newVal)) {
        if (newVal < 100) {
          this.quantityProduct = newVal;
        } else {
          this.quantityProduct = 99;
        }
      } else {
        this.quantityProduct = 1;
      }
    },
  },
  async created() {
    await this.loadProducts();
  },
};
</script>
<style scoped>
.is-active {
  @apply opacity-100;
}
</style>
