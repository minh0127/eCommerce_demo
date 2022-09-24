<template>
  <router-view></router-view>
  <section class="py-8">
    <ProductList></ProductList>
  </section>
</template>
<script>
import ProductList from "@/components/cores/ProductList.vue";
export default {
  components: { ProductList },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang=""></style>
