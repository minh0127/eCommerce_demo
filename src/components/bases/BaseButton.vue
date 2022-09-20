<template lang="">
  <router-link v-if="to" :to="to">{{ newTitle }}</router-link>
  <button v-else>{{ newTitle }}</button>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  computed: {
    newTitle() {
      if (!this.title) return;
      return this.title.toUpperCase();
    },
  },
};
</script>
<style lang=""></style>
