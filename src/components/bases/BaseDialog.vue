<template>
  <div class="w-full h-full bg-[rgba(0,0,0,.3)] top-0">
    <div
      class="absolute w-2/5 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-5 z-10"
    >
      <div class="font-semibold text-sub-color text-xl text-center mb-6">
        Delete your recipe
      </div>

      <div class="flex gap-5 justify-end">
        <base-button
          title="Close"
          class="text-sub-color w-full h-12 rounded-lg font-semibold text-sm text-center leading-[3rem] bg-white mt-6 border border-sub-color"
          @click.stop="closeDialog"
        >
        </base-button>
        <base-button
          title="Delete"
          class="text-white w-full h-12 rounded-lg font-semibold text-sm text-center leading-[3rem] bg-sub-color mt-6"
          @click.stop="deleteRecipe"
        >
        </base-button>
      </div>
    </div>
  </div>
</template>
<script>
import { storage } from "../../../firebase.js";
import { ref, deleteObject } from "firebase/storage";
export default {
  props: ["deletedRecipe"],
  methods: {
    closeDialog() {
      this.$emit("closeDialog", false);
    },

    async deleteFileStorage() {
      const numberOfTheSamePath = this.$store.getters[
        "recipes/numberOfTheSamePath"
      ](this.deletedRecipe.path);
      if (numberOfTheSamePath <= 1) {
        const deleteRef = ref(storage, this.deletedRecipe.path);
        await deleteObject(deleteRef);
      }
    },

    deleteRecipe() {
      this.deleteFileStorage();

      this.$store.dispatch("recipes/deleteRecipe", {
        id: this.deletedRecipe.id,
      });
      this.closeDialog();
    },
  },
};
</script>
<style lang=""></style>
