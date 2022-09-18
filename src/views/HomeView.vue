<template>
  <!-- main -->
  <section class="py-8">
    <!-- header -->
    <TheHeader class="mb-4"></TheHeader>

    <!-- thumbnail -->
    <div class="flex justify-between">
      <div class="flex justify-between flex-col max-w-sm">
        <div class="mt-12">
          <h1
            class="text-primary-color font-semibold text-2xl tracking-wide leading-8"
          >
            Easy-to-use Japanese flavors.<br />
            It’s all you need. No cooking required, unless desired.
          </h1>
          <p class="text-sm mt-4">Elevate your dishes with Cabi Trio.</p>
        </div>
        <div>
          <img
            src="//cdn.shopify.com/s/files/1/0635/2964/8350/files/Group_79_x100.png?v=1661257209"
            alt=""
            loading="lazy"
            class="max-w-[113px] mb-8"
          />
          <base-button
            to="/products"
            class="bg-primary-color text-white rounded-md max-w-[280px] block h-12 text-center leading-[3rem] font-semibold text-sm hover:-translate-y-2 transition-transform duration-300"
            title="shop now"
          ></base-button>
        </div>
      </div>

      <picture class="">
        <source
          srcset="
            //cdn.shopify.com/s/files/1/0635/2964/8350/files/06102022_Cabi__321_5_1_df75d894-b843-4c13-88cf-1198b3f89dd0_x2048.png?v=1661257178
          "
          media="(min-width: 720px)"
        />
        <img
          class="max-w-4xl rounded-2xl"
          src="//cdn.shopify.com/s/files/1/0635/2964/8350/files/Hero_Image_e05c948a-99e6-44db-9712-1f28ffb6594c_x2048.png?v=1661135465"
          alt=""
        />
      </picture>
    </div>
  </section>

  <!-- products -->
  <section class="py-8">
    <ProductList></ProductList>
    <div class="flex justify-center mt-12">
      <base-button
        class="bg-primary-color text-white rounded-md text-center font-semibold text-sm hover:-translate-y-2 transition-transform duration-300 h-12 w-[460px]"
        title="add cabi trio to cart - $45"
      ></base-button>
    </div>
  </section>

  <!-- carousel -->
  <section class="py-8">
    <Splide
      :options="options"
      :extensions="extensions"
      :has-track="false"
      aria-label="My Favorite Images"
    >
      <SplideTrack>
        <SplideSlide v-for="item in 10" :key="item">
          <img
            src="https://cdn.accentuate.io/588027723998/1659623540352/Niku-Miso.jpg?v=1661201335436"
            alt="Sample 1"
          />
        </SplideSlide>
      </SplideTrack>
    </Splide>
  </section>

  <!-- vision and mission -->
  <section class="py-8">
    <div class="bg-white w-full h-fit flex p-8 gap-10 rounded-2xl">
      <div class="w-1/3 flex justify-between flex-col">
        <div>
          <div class="mt-[20%]">
            <p class="text-2xl">From our</p>
            <p class="text-2xl text-primary-color">Fermentation partners</p>
          </div>
          <p class="mt-10 text-sm">
            Our name Cabi (カビ) means mold in Japanese. Don’t not fret, we are
            talking about really, really good mold and fermentation. We want to
            share with the world traditional Japanese fermentation and all its
            goodness! All our products have been created with Japanese
            fermentation techniques.
          </p>
        </div>
        <div class="bg-background-color p-3 rounded-lg">
          <p class="text-primary-color text-xs font-semibold">KOJI BENEFITS</p>
          <div class="flex items-center gap-5">
            <img
              class="h-12 w-12"
              src="//cdn.shopify.com/s/files/1/0635/2964/8350/files/Gut_health_efa9e522-3a7b-4b48-b281-5f9df9e81df7_x1024.png?v=1661345094"
              alt=""
            />
            <span class="text-sm">Better your gut health</span>
          </div>
        </div>
      </div>

      <div class="w-1/3">
        <img
          class="rounded-xl"
          src="//cdn.shopify.com/s/files/1/0635/2964/8350/files/Portraight_1_copy_1_1_da5c9977-69d4-4533-ae7d-4f2226729373_x1024.png?v=1657660606"
          alt=""
        />
      </div>

      <div class="w-1/3"></div>
    </div>
  </section>

  <!-- footer -->
  <section class="mt-16">
    <TheFooter></TheFooter>
  </section>
</template>

<script>
import TheHeader from "@/components/cores/TheHeader.vue";
import ProductList from "../components/cores/ProductList.vue";
import TheFooter from "@/components/cores/TheFooter.vue";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    TheHeader,
    ProductList,
    Splide,
    SplideSlide,
    SplideTrack,
    TheFooter,
  },
  data() {
    return {
      options: {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 7,
        pagination: false,
        arrows: false,
        autoScroll: {
          speed: 0.5,
        },
      },
      extensions: {
        AutoScroll,
      },
    };
  },
};
</script>

<style>
/* import global và không ghi đè */
@import url("../../node_modules/@splidejs/vue-splide/dist/css/splide-core.min.css");
</style>
