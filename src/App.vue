<template>
  <div class="relative">
    <TheNavigation :subColor="subColor"></TheNavigation>
    <div class="pl-10 pr-24">
      <!-- header -->
      <TheHeader :subColor="subColor" class="pt-8"></TheHeader>

      <router-view></router-view>

      <!-- footer -->
      <TheFooter :subColor="subColor" class="mt-16"></TheFooter>
      <div></div>
    </div>
  </div>
</template>

<script>
import TheNavigation from "./components/cores/TheNavigation.vue";
import TheHeader from "./components/cores/TheHeader.vue";
import TheFooter from "./components/cores/TheFooter.vue";
export default {
  components: { TheNavigation, TheHeader, TheFooter },
  data() {
    return {
      subColor: false,
    };
  },
  methods: {},
  watch: {
    "$route.path"(newVal) {
      if (newVal === "/recipes") {
        this.subColor = true;
      } else {
        this.subColor = false;
      }
    },
  },
};
</script>

<style></style>
