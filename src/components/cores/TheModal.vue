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
          v-model.trim="recipe.name"
        />
        <p v-if="validation.name" class="col-span-5 text-sm text-red">
          {{ validation.name }}
        </p>
        <span class="col-span-1">Ingredients: </span>
        <input
          class="col-span-4 border p-1"
          type="text"
          name=""
          id=""
          v-model.trim="recipe.ingredients"
        />
        <span class="col-span-1">Notes: </span>
        <textarea
          id=""
          name=""
          rows="4"
          cols="50"
          maxlength="200"
          class="resize-none border col-span-4 p-1"
          v-model.trim="recipe.notes"
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
          <div v-if="previewImg">
            <img :src="previewImg" alt="" class="max-h-56" />
          </div>
        </div>
        <p v-if="validation.imgURL" class="col-span-5 text-sm text-red">
          {{ validation.imgURL }}
        </p>
      </div>
      <div class="flex gap-5 justify-end">
        <base-button
          title="Close"
          class="text-sub-color w-full h-12 rounded-lg font-semibold text-sm text-center leading-[3rem] bg-white mt-6 border border-sub-color"
          @click.stop="closeModal"
        >
        </base-button>
        <base-button
          v-if="!editMode.state"
          title="Add"
          class="text-white w-full h-12 rounded-lg font-semibold text-sm text-center leading-[3rem] bg-sub-color mt-6"
          @click.stop="addRecipe"
        >
        </base-button>
        <base-button
          v-else
          title="Update"
          class="text-white w-full h-12 rounded-lg font-semibold text-sm text-center leading-[3rem] bg-sub-color mt-6"
          @click.stop="updateRecipe"
        >
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from "../../../firebase.js";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
export default {
  props: {
    showModal: { type: Boolean },
    editMode: {
      type: Object,
    },
  },
  data() {
    return {
      previewImg: null,
      file: null,
      validation: {
        name: "",
        imgURL: "",
      },
    };
  },
  methods: {
    resetValidation() {
      this.validation = {
        name: "",
        imgURL: "",
      };
    },

    validate() {
      let rs = true;
      this.resetValidation();

      if (this.recipe.name === "") {
        this.validation.name = "Name cannot be empty!";
        rs = false;
      }
      if (!this.previewImg && this.editMode.state === false) {
        this.validation.imgURL = "Image URL cannot be empty!";
        rs = false;
      }
      return rs;
    },

    closeModal() {
      this.$emit("closeModal", false);
      this.previewImg = null;
    },

    loadPreviewImg(e) {
      this.file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImg = reader.result;
      };
      reader.readAsDataURL(this.file);
    },

    async uploadToStorage() {
      const storageRef = ref(storage, `recipes/${this.file.name}`);
      this.recipe.path = storageRef.fullPath;

      await uploadBytes(storageRef, this.file);

      this.recipe.imgURL = await getDownloadURL(storageRef);
    },

    async deleteFileStorage() {
      const numberOfTheSamePath = this.$store.getters[
        "recipes/numberOfTheSamePath"
      ](this.recipe.path);
      if (numberOfTheSamePath <= 1) {
        const deleteRef = ref(storage, this.recipe.path);
        await deleteObject(deleteRef);
      }
    },

    async addRecipe() {
      this.validate();
      if (this.validate()) {
        this.closeModal();

        await this.uploadToStorage();

        await this.$store.dispatch("recipes/addRecipe", this.recipe);
      }
    },

    async updateRecipe() {
      this.validate();
      if (this.validate()) {
        this.closeModal();

        await this.deleteFileStorage();
        await this.uploadToStorage();

        await this.$store.dispatch("recipes/updateRecipe", {
          id: this.editMode.id,
          ...this.recipe,
        });
      }
    },
  },
  computed: {
    recipe() {
      if (!this.editMode.state) {
        return {
          name: "",
          ingredients: "",
          notes: "",
          imgURL: "",
          path: "",
        };
      } else {
        // return thằng recipeByID sẽ bị trỏ đến cùng 1 obj
        const recipeByID = this.$store.getters["recipes/recipeByID"](
          this.editMode.id
        );
        return {
          name: recipeByID.name,
          ingredients: recipeByID.ingredients,
          notes: recipeByID.notes,
          imgURL: recipeByID.imgURL,
          path: recipeByID.path,
        };
      }
    },
  },
};
</script>
<style lang=""></style>
