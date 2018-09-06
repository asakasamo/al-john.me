import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Sidebar from "./components/Sidebar.vue";

Vue.config.productionTip = false;

Vue.component("sidebar", Sidebar);

new Vue({
   router,
   render: (h) => h(App)
}).$mount("#app");
