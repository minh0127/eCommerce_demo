<template>
  <TheNavigation></TheNavigation>
  <div class="px-10">
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
