import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MyWork from "./views/MyWork.vue";
import AboutMe from "./views/AboutMe.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

export default new Router({
   mode: "history",
   base: process.env.BASE_URL,
   routes: [
      {
         path: "/",
         name: "home",
         component: Home
      },
      {
         path: "/about",
         name: "about",
         component: AboutMe
      },
      {
         path: "/my-work",
         name: "my-work",
         component: MyWork
      },
      {
         path: "/contact",
         name: "contact",
         component: Contact
      }
   ],
   scrollBehavior() {
      return { x: 0, y: 0 };
   }
});
