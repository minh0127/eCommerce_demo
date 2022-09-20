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
      :options="autoScrollOptions"
      :extensions="extensions"
      :has-track="false"
      aria-label="My Favorite Images"
    >
      <SplideTrack>
        <SplideSlide v-for="(image, index) in images" :key="index">
          <img :src="image.imgUrl" alt="sample" />
        </SplideSlide>
        <!-- <SplideSlide v-for="item in 10" :key="item">
          <span>Love</span>
        </SplideSlide> -->
      </SplideTrack>
    </Splide>
  </section>

  <!-- vision and mission -->
  <section class="py-8">
    <Splide
      :options="sliderOptions"
      :has-track="false"
      aria-label="Visions"
      class="relative"
    >
      <div class="absolute right-0 p-8 z-10">
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 320 512"
            >
              <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
          </button>
          <button class="splide__arrow splide__arrow--next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 320 512"
            >
              <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
              />
            </svg>
          </button>
        </div>
      </div>

      <SplideTrack>
        <SplideSlide>
          <div class="bg-white w-full h-fit flex p-8 gap-10 rounded-2xl">
            <div class="w-1/3 flex justify-between flex-col">
              <div>
                <div class="mt-[20%]">
                  <p class="text-2xl">From our</p>
                  <p class="text-2xl text-primary-color">
                    Fermentation partners
                  </p>
                </div>
                <p class="mt-10 text-sm">
                  Our name Cabi (カビ) means mold in Japanese. Don’t not fret,
                  we are talking about really, really good mold and
                  fermentation. We want to share with the world traditional
                  Japanese fermentation and all its goodness! All our products
                  have been created with Japanese fermentation techniques.
                </p>
              </div>
              <div class="bg-background-color p-3 rounded-lg">
                <p class="text-primary-color text-xs font-semibold">
                  KOJI BENEFITS
                </p>
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
        </SplideSlide>

        <SplideSlide>
          <div class="bg-white w-full h-fit flex p-8 gap-10 rounded-2xl">
            <div class="w-1/3 flex justify-between flex-col">
              <div>
                <div class="mt-[20%]">
                  <p class="text-2xl">From our</p>
                  <p class="text-2xl text-primary-color">
                    Fermentation partners
                  </p>
                </div>
                <p class="mt-10 text-sm">
                  To honor this, we have carefully selected partners who are
                  specialists of each technique to work with depending on the
                  nature of each product.
                </p>
              </div>
              <div class="bg-background-color p-3 rounded-lg">
                <p class="text-primary-color text-xs font-semibold">
                  KOJI BENEFITS
                </p>
                <div class="flex items-center gap-5">
                  <img
                    class="h-12 w-12"
                    src="//cdn.shopify.com/s/files/1/0635/2964/8350/files/Eating_774e6846-8142-423d-9ae2-286a356bdf77_x1024.png?v=1661345094"
                    alt=""
                  />
                  <span class="text-sm">Inprove your metabolism</span>
                </div>
              </div>
            </div>

            <div class="w-1/3">
              <img
                class="rounded-xl"
                src="//cdn.shopify.com/s/files/1/0635/2964/8350/files/Image-2_x1024.png?v=1661203960"
                alt=""
              />
            </div>

            <div class="w-1/3"></div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div class="bg-white w-full h-fit flex p-8 gap-10 rounded-2xl">
            <div class="w-1/3 flex justify-between flex-col">
              <div>
                <div class="mt-[20%]">
                  <p class="text-2xl">From our</p>
                  <p class="text-2xl text-primary-color">
                    Fermentation partners
                  </p>
                </div>
                <p class="mt-10 text-sm">
                  Koji mold is used in almost every single Japanese condiment
                  from soy sauce, miso, vinegar to even sake. You’ve had it
                  without knowing it. It’s definitely not an overstatment to say
                  that Koji has inspired and defined Japan’s culinary world. As
                  with everything, it all starts with a little organism. Also
                  it’s not a stretch to say: the definition of our culture is in
                  these live cultures. Long live fermentation!
                </p>
              </div>
              <div class="bg-background-color p-3 rounded-lg">
                <p class="text-primary-color text-xs font-semibold">
                  KOJI BENEFITS
                </p>
                <div class="flex items-center gap-5">
                  <img
                    class="h-12 w-12"
                    src="//cdn.shopify.com/s/files/1/0635/2964/8350/files/anti_435b95c0-38e4-4f77-849f-8751b013ebad_x1024.png?v=1661345094"
                    alt=""
                  />
                  <span class="text-sm">Immunity enhancer</span>
                </div>
              </div>
            </div>

            <div class="w-1/3">
              <img
                class="rounded-xl"
                src="//cdn.shopify.com/s/files/1/0635/2964/8350/files/Image-3_x1024.png?v=1661204111"
                alt=""
              />
            </div>

            <div class="w-1/3"></div>
          </div>
        </SplideSlide>
      </SplideTrack>
    </Splide>
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
      autoScrollOptions: {
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
      sliderOptions: {
        type: "loop",
        perPage: 1,
      },
    };
  },
  methods: {
    async loadFoodImgs() {
      try {
        await this.$store.dispatch("foods/fetchImgs");
      } catch (error) {
        console.log(error.message || "Something went wrong");
      }
    },
    log() {
      console.log(this.images);
    },
  },

  computed: {
    images() {
      return this.$store.getters["foods/foodImgs"];
    },
  },
  mounted() {
    this.loadFoodImgs();
    this.log();
  },
};
</script>

<style>
/* import global và không ghi đè */
@import url("../../node_modules/@splidejs/vue-splide/dist/css/splide-core.min.css");
</style>
