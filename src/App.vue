<template>
   <div id="app">
      <div class="sidebar" id="sidebar">
         <sidebar />
         <button class="btn btn-primary menu-toggle-2" @click="toggleMenu">
            <div class="left-half"></div>
            <div class="right-half">
               <img src="@/assets/left-toggle.svg" alt="left toggle">
            </div>
         </button>
      </div>
      
      <button :class="[
            'btn', 
            'btn-primary', 
            'menu-toggle', 
            $route.name === 'home' ? 'home' : ''
         ]" 
         @click="toggleMenu"
         >
            <img 
               v-if="$route.name !== 'home'"  
               src="https://mdbootstrap.com/img/svg/hamburger7.svg?color=FFFFFF" 
               alt="menu">
            <img v-else
               src="https://mdbootstrap.com/img/svg/hamburger7.svg?color=5c2600" 
               alt="menu">
      </button>

      <div class="main-content">
         <router-view/>
      </div>
   </div>
</template>

<script>
export default {
   methods: {
      toggleMenu() {
         document.querySelector("#sidebar").classList.toggle("sidebar-show");
      }
   },
   watch: {
      $route() {
         this.toggleMenu();
      }
   }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto|Ubuntu|Nunito");

#app {
   overflow: auto;
   font-family: "Roboto";
   background-color: #fafffd;
   -webkit-font-smoothing: antialiased;
}

$main: #5c2600;
$background: #fafffd;
$sidebar-width: 270px;
$toggle-width: 60px;

#sidebar {
   position: fixed;
   min-width: $sidebar-width;
   background-color: $background;
   z-index: 999;
}

.main-content {
   margin-left: $sidebar-width;
   // margin-bottom: 7.143em;
}

@media (max-width: 900px) {
   #sidebar {
      transition: all 0.5s;
      left: -$sidebar-width - $toggle-width;

      &.sidebar-show {
         left: 0;

         // menu toggle animation
         .menu-toggle-2 img {
            opacity: 1;
         }

         + .menu-toggle {
            opacity: 0;
         }
      }
   }
   .main-content {
      margin-left: 0;
   }
}

a {
   transition: all 0.2s;
   color: #999;
}
a[href] {
   text-decoration: none;
}
a:hover,
a:focus {
   color: #f1e8a8;
}

.highlight,
.highlight *,
.highlight a[href],
a.highlight[href] {
   color: $main;
}

.btn {
   border-radius: 0;
}

.btn-primary {
   color: #fff;
   background-color: $main;
   border-color: $main;
   border-radius: 0;
   &:hover,
   &:focus,
   &:active:hover {
      border-color: $main;
      background-color: $main;
   }
}

.btn-secondary {
   color: #222831;
   background-color: #fff;
   border-color: #ccc;
   &:hover {
      background-color: #eee;
   }
}

$primary: #502302;
.menu-toggle {
   /* position relative to sidebar */
   /*
   position: absolute;
   top: 20px;
   right: -70px;
   */

   /* position relative to top header */
   position: absolute;
   left: 10px;
   top: 20px;
   background-color: $primary;
   border-color: $primary;
   transition: all 0.1s;

   &.home {
      background: none;
      border: 1px solid transparent;
      &:focus {
         background: none;
         border: 1px solid transparent;
      }
      &:active:hover {
         border-color: $primary;
      }
   }

   &:hover,
   &:active:hover {
      border-color: $primary;
   }
}

.menu-toggle-2 {
   width: $toggle-width;
   height: $toggle-width;
   z-index: -100;
   background: none;
   border: none;
   padding: 0;
   transition: all 0.5s;

   position: absolute;
   right: -$toggle-width / 2;
   top: 50%;
   margin: -$toggle-width/2 0 0 0;

   border-radius: 50%;
   overflow: hidden;
   display: flex;
   > * {
      flex: 1;
   }
   .right-half {
      background-color: $main;
      height: $toggle-width;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
         width: 50%;
         height: 50%;
         color: white;
         opacity: 0;
         margin-left: -10px;

         transition: all ease-in 0.5s;
      }
   }
   &:hover,
   &:focus,
   &:active:hover {
      border: none;
      background: none;
      box-shadow: none;
      outline: none;
   }
}

@media (min-width: 900px) {
   .menu-toggle,
   .menu-toggle-2 {
      opacity: 0;
      right: 0;
      width: 0;
   }
}

.menu-toggle {
}

.menu-toggle-2 {
}
</style>
