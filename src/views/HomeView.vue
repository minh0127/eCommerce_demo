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
  </section>
</template>

<script>
import TheHeader from "@/components/cores/TheHeader.vue";
import ProductList from "../components/cores/ProductList.vue";
import BaseButton from "@/components/bases/BaseButton.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { TheHeader, ProductList, BaseButton },
};
</script>
