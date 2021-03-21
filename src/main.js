import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArgonDashboard from "./plugins/argon-dashboard";
import "element-plus/lib/theme-chalk/index.css";
// import { ClientTable, ServerTable } from "vue-tables-2";

const appInstance = createApp(App);
// appInstance.use(ClientTable);
// appInstance.use(ServerTable);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
