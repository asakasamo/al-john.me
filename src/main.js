import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Sidebar from "./components/Sidebar.vue";
import PageHeader from "./components/PageHeader.vue";

Vue.config.productionTip = false;

Vue.component("sidebar", Sidebar);
Vue.component("page-header", PageHeader);

new Vue({
   router,
   render: (h) => h(App)
}).$mount("#app");
