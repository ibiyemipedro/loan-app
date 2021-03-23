import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArgonDashboard from "./plugins/argon-dashboard";
import "element-plus/lib/theme-chalk/index.css";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
};

const appInstance = createApp(App);
appInstance.use(Toast, options);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
