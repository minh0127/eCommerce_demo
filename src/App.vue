<template>
  <TheNavigation></TheNavigation>
  <div class="pl-10 pr-24">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from "./components/cores/TheNavigation.vue";
export default {
  components: { TheNavigation },
};
</script>

<style></style>
