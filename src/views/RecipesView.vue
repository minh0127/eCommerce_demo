<template lang="">
  <section class="py-8">
    <div
      class="bg-white h-[750px] rounded-2xl overflow-hidden shadow-2xl relative"
    >
      <TheModal
        class="absolute"
        :showModal="showModal"
        @closeModal="(closeModal) => (showModal = closeModal)"
      ></TheModal>

      <!-- add icon -->
      <div
        class="flex justify-center items-center gap-5 p-10 border-b cursor-pointer"
        @click="showModal = true"
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
      <div class="max-h-full overflow-y-scroll">
        <!-- 1 thẻ công thức -->

        <div
          class="flex p-10 gap-20 items-center"
          v-for="item in 3"
          :key="item"
        >
          <div class="w-1/3">
            <img
              class="rounded-xl"
              src="https://cdn.accentuate.io/587282809054/1653073413560/Salmon-Miso.jpg?v=1661036969435"
              alt=""
            />
          </div>
          <div class="w-1/2">
            <div class="text-sub-color text-3xl font-semibold">
              Salmon Miso Rice Bowl
            </div>
            <div class="text-sm">author/date/hashtag</div>
            <div class="text-sub-color font-semibold text-lg mt-5">
              Ingredients:
              <span class="text-black font-medium">
                Salmon Fillet, Scallions, Sesame Seeds</span
              >
            </div>
            <div class="text-sub-color font-semibold text-lg">
              Notes:
              <span class="text-black font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nulla orci, suscipit sed scelerisque in, molestie sed
                elit. Nullam posuere risus quis congue finibus. Maecenas finibus
                magna et diam egestas blandit. Aliquam at consequat lectus. Cras
                ac scelerisque risus. Suspendisse sed nulla et mi finibus cursus
                non vitae lacus. Suspendisse accumsan condimentum sem lobortis
                fermentum. Ut tempus placerat enim, sed aliquam leo condimentum
                in.</span
              >
            </div>
          </div>
          <div>
            <div
              class="cursor-pointer transition-all hover:-translate-y-2"
              title="Sửa"
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
      </div>
    </div>
  </section>
</template>
<script>
import TheModal from "../components/cores/TheModal.vue";
export default {
  components: { TheModal },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
<style lang=""></style>
