<template>
  <div class="w-full h-full bg-[rgba(0,0,0,.3)]" v-if="showModal">
    <div
      class="absolute w-2/5 max-h-[675px] bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-5 z-10"
    >
      <div class="font-semibold text-sub-color text-xl text-center mb-6">
        Your recipe
      </div>
      <div class="grid grid-cols-5 gap-2">
        <span class="col-span-1">Name: </span>
        <input
          class="col-span-4 border p-1"
          type="text"
          name=""
          id=""
          v-model="recipes.name"
        />
        <p class="col-span-5 text-sm text-red">Name cannot be empty!</p>
        <span class="col-span-1">Ingredients: </span>
        <input
          class="col-span-4 border p-1"
          type="text"
          name=""
          id=""
          v-model="recipes.ingredients"
        />
        <span class="col-span-1">Notes: </span>
        <textarea
          id=""
          name=""
          rows="4"
          cols="50"
          maxlength="200"
          class="resize-none border col-span-4 p-1"
          v-model="recipes.notes"
        ></textarea>
        <span class="col-span-1">Image URL: </span>
        <div class="col-span-4 border p-1">
          <input
            type="file"
            name=""
            id=""
            accept="image/png, image/jpeg, image/webp"
            @input="loadPreviewImg"
            class="w-full cursor-pointer"
          />
          <div v-if="recipes.imgURL">
            <img :src="recipes.imgURL" alt="" class="max-h-64" />
          </div>
        </div>
        <p class="col-span-5 text-sm text-red">Image URL cannot be empty!</p>
      </div>
      <div class="flex gap-5 justify-end">
        <base-button
          title="Close"
          class="text-sub-color w-full h-12 rounded-lg font-semibold text-sm text-center leading-[3rem] bg-white mt-6 border border-sub-color"
          @click.stop="this.$emit('closeModal', false)"
        >
        </base-button>
        <base-button
          title="Add"
          class="text-white w-full h-12 rounded-lg font-semibold text-sm text-center leading-[3rem] bg-sub-color mt-6"
          @click.stop="uploadToStorage"
        >
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from "../../../firebase.js";
import { ref, uploadBytes } from "firebase/storage";
export default {
  props: {
    showModal: { type: Boolean },
  },
  data() {
    return {
      // previewImg: null,
      file: null,
      recipes: {
        name: "",
        ingredients: "",
        notes: "",
        imgURL: "",
      },
    };
  },
  methods: {
    validate() {},
    loadPreviewImg(e) {
      this.file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        // this.previewImg = reader.result;
        this.recipes.imgURL = reader.result;
      };
      reader.readAsDataURL(this.file);
    },
    async uploadToStorage() {
      const storageRef = ref(storage, `recipes/${this.file.name}`);
      // const metadata = {
      //   contentType: "image/webp",
      // };

      // có ở storage rồi nó sẽ không up lại
      await uploadBytes(storageRef, this.file);
      alert("uploaded");
    },
    log() {
      console.log("hi");
    },
  },
};
</script>
<style lang=""></style>
