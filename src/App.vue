<template>
  <TheNavigation></TheNavigation>
  <div class="pl-10 pr-24">
    <!-- header -->
    <TheHeader class="mt-8"></TheHeader>

    <router-view></router-view>

    <!-- footer -->
    <TheFooter class="mt-16"></TheFooter>
  </div>
</template>

<script>
import TheNavigation from "./components/cores/TheNavigation.vue";
import TheHeader from "./components/cores/TheHeader.vue";
import TheFooter from "./components/cores/TheFooter.vue";
export default {
  components: { TheNavigation, TheHeader, TheFooter },
};
</script>

<style></style>
