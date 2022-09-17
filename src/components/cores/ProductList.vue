<template>
  <div>
    <!-- card -->
    <div class="flex gap-10">
      <router-link
        to="/products/"
        v-for="card in 3"
        :key="card"
        class="group bg-white p-5 rounded-2xl h-[750px] hover:-translate-y-2 hover:shadow-lg transition-transform duration-300"
      >
        <!-- img -->
        <div class="relative h-[458px]">
          <img
            class="absolute bg-background-color h-[458px] rounded-2xl object-contain"
            src="//cdn.shopify.com/s/files/1/0635/2964/8350/products/Group98928_x2048.png?v=1661369736"
            alt=""
          />
          <img
            class="absolute h-[458px] top-0 right-0 left-0 bottom-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            src="https://cdn.accentuate.io/7641075712222/1657660410188/Image_hover-1.png?v=1661191382291"
            alt=""
          />
          <base-button
            class="bg-primary-color text-white rounded-md font-semibold text-sm h-12 text-center leading-[3rem] absolute w-[calc(100%_-_30px)] mx-[15px] -bottom-1 group-hover:bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
            title="shop now - $15"
          ></base-button>
        </div>
        <!-- content -->
        <div class="tracking-wide">
          <h3 class="font-semibold text-sm my-8">
            Zesty Sansho Peppercorn Miso
          </h3>
          <p class="text-xs">
            Sasho Peppercorn is bold yet subtle, a real sensory experience!
            We’ve mixed some zesty sansho peppercorn with some sweet miso which
            gives a nice and unexpected balance. It’s an easy-to-achieve
            culinary experience from the comfort of your home.
          </p>
          <div
            class="text-xs bg-background-color px-4 py-2 rounded-lg font-semibold mt-16"
          >
            <span class="text-primary-color">Flavor notes</span>
            Refreshing & Bright
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
};
</script>
<style lang=""></style>
