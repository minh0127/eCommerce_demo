import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/tailwind.css";

import BaseButton from "./components/bases/BaseButton.vue";

const app = createApp(App);
app.use(store);
app.use(router);

app.component("BaseButton", BaseButton);

app.mount("#app");
