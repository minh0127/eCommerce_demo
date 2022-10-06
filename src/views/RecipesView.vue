<template>
  <section class="py-8">
    <div
      class="bg-white h-[750px] rounded-2xl overflow-hidden shadow-2xl relative"
    >
      <TheModal
        class="absolute"
        :showModal="showModal"
        @closeModal="(closeModal) => (showModal = closeModal)"
        :editMode="editMode"
      ></TheModal>

      <!-- add icon -->
      <div
        class="flex justify-center items-center gap-5 p-10 border-b cursor-pointer"
        @click="changeToAddMode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="56"
          height="56"
          class="fill-sub-color"
        >
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>

        <span class="text-sub-color text-3xl font-semibold"
          >Add your recipes</span
        >
      </div>

      <!-- cụm bên dưới -->
      <div
        class="max-h-[calc(750px_-_137px)]"
        :class="{ 'overflow-y-scroll': recipes.length > 1 }"
      >
        <!-- 1 thẻ công thức -->

        <div
          class="flex p-10 gap-20 items-center max-h-80 my-4"
          v-for="(recipe, index) in recipes"
          :key="index"
        >
          <div class="w-1/3">
            <img class="rounded-xl max-h-80" :src="recipe.imgURL" alt="" />
          </div>
          <div class="w-1/2">
            <div class="text-sub-color text-3xl font-semibold">
              {{ recipe.name }}
            </div>
            <div class="text-sm">#cabi</div>
            <div class="text-sub-color font-semibold text-lg mt-5">
              Ingredients:
              <span class="text-black font-medium">
                {{ recipe.ingredients }}</span
              >
            </div>
            <div class="text-sub-color font-semibold text-lg">
              Notes:
              <span class="text-black font-medium"> {{ recipe.notes }}</span>
            </div>
          </div>
          <div>
            <div
              class="cursor-pointer transition-all hover:-translate-y-2"
              title="Sửa"
              @click="changeToEditMode(recipe.id)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                class="fill-sub-color"
              >
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                />
              </svg>
            </div>
            <div
              class="mt-10 cursor-pointer transition-all hover:-translate-y-2"
              title="Xoá"
              @click="
                {
                  showDialog = true;
                  deletedRecipe = recipe;
                }
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="fill-sub-color"
                width="24"
                height="24"
              >
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          v-if="recipes.length < 1"
          class="flex justify-center items-center flex-col gap-5 h-[500px]"
        >
          <div class="text-3xl">You have no recipes</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 512 512"
            class="fill-sub-color"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M352 493.4c-29.6 12-62.1 18.6-96 18.6s-66.4-6.6-96-18.6V288c0-8.8-7.2-16-16-16s-16 7.2-16 16V477.8C51.5 433.5 0 350.8 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256c0 94.8-51.5 177.5-128 221.8V288c0-8.8-7.2-16-16-16s-16 7.2-16 16V493.4zM195.2 233.6c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0c-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2c17.6-23.5 52.8-23.5 70.4 0zm121.6 0c17.6-23.5 52.8-23.5 70.4 0c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0c-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2zM208 336v32c0 26.5 21.5 48 48 48s48-21.5 48-48V336c0-26.5-21.5-48-48-48s-48 21.5-48 48z"
            />
          </svg>
        </div>
      </div>

      <!-- basedialog -->
      <BaseDialog
        @closeDialog="(closeDialog) => (showDialog = closeDialog)"
        v-if="showDialog"
        class="absolute"
        :deletedRecipe="deletedRecipe"
      ></BaseDialog>
    </div>
  </section>
</template>
<script>
import TheModal from "../components/cores/TheModal.vue";
import BaseDialog from "@/components/bases/BaseDialog.vue";
export default {
  components: { TheModal, BaseDialog },
  data() {
    return {
      showModal: false,
      editMode: {
        state: false,
        id: 0,
      },
      showDialog: false,
      deletedRecipe: null,
    };
  },
  methods: {
    changeToEditMode(id) {
      this.editMode = {
        state: true,
        id: id,
      };
      this.showModal = true;
    },
    changeToAddMode() {
      this.editMode = {
        state: false,
        id: 0,
      };
      this.showModal = true;
    },
  },
  computed: {
    recipes() {
      return this.$store.getters["recipes/recipes"];
    },
  },
  created() {
    this.$store.dispatch("recipes/loadRecipes");
  },
};
</script>
<style lang=""></style>
