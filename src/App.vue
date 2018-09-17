<template>
   <div id="app">
      <div id="sidebar">
         <sidebar />
         
         <!-- side menu toggle -->
         <button class="btn btn-primary menu-toggle-2" @click="toggleMenu">
            <div class="left-half"></div>
            <div class="right-half">
               <img src="@/assets/left-toggle.svg" alt="menu toggle">
               <img src="@/assets/left-toggle.svg" alt="menu toggle" class="mirror">
            </div>
         </button>
      </div>
      
      <!-- top menu toggle -->
      <button :class="[
            'btn',
            'menu-toggle', 
            $route.name === 'home' ? 'home' : ''
         ]" 
         @click="toggleMenu"
         :disabled="menuIsShowing"
         >
            <img 
               v-if="$route.name !== 'home'"  
               src="https://mdbootstrap.com/img/svg/hamburger7.svg?color=FFFFFF" 
               alt="menu">
            <img v-else
               src="https://mdbootstrap.com/img/svg/hamburger7.svg?color=592500" 
               alt="menu">
      </button>

      <div class="main-content" @click="closeMenu">
         <router-view/>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         menuIsShowing: false
      };
   },
   methods: {
      toggleMenu() {
         document.querySelector("#sidebar").classList.toggle("sidebar-show");
         this.menuIsShowing = !this.menuIsShowing;
      },
      closeMenu() {
         document.querySelector("#sidebar").classList.remove("sidebar-show");
         this.menuIsShowing = false;
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
// @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700,900");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("./assets/fonts/wrexham/font.css");

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
}

.main-content {
   margin-left: $sidebar-width;
}

@media (max-width: 900px) {
   #sidebar {
      // sidebar slide-out animation
      transition: 0.8s cubic-bezier(0.68, 0, 0.85, 0.5);
      left: -$sidebar-width - $toggle-width;

      &.sidebar-show {
         transition: 0.5s;
         transform: translateX($sidebar-width + $toggle-width);

         + .menu-toggle {
            // top menu-toggle fade-out animation
            transition: opacity 0.8s;
            opacity: 0;
         }

         .menu-toggle-2 {
            img {
               transition: 1s;
               opacity: 1;
               &.mirror {
                  opacity: 0;
               }
            }
         }

         // menu toggle arrow animation
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

.btn-primary,
.btn-primary:active,
.btn-primary:active:focus,
.btn-primary:focus,
.btn-primary:hover {
   color: #fff;
   background-color: $main;
   border: 0.5px solid #e6e6e6;
   border-radius: 0;
   border-right: none;
}

.btn-secondary {
   color: #222831;
   background-color: #fff;
   border-color: #e6e6e6;
   &:hover {
      background-color: #eee;
   }
}

$primary: #502302;
.menu-toggle,
.menu-toggle:focus,
.menu-toggle:hover,
.menu-toggle:active:focus {
   background-color: transparent;
   border-color: transparent;
   border: 1px solid transparent;
   outline: none;

   z-index: 999;

   /* position relative to top header */
   position: absolute;
   left: 10px;
   $header-height: 84px;
   $toggle-height: 46px;

   top: ($header-height / 2) - ($toggle-height / 2);

   &.home {
      left: 5px;
      top: 13px;
   }

   &:active {
      border-color: #ddd;
   }

   // menu toggle fade-in
   transition: 0.8s opacity cubic-bezier(0.68, 0, 0.85, 0.5);

   /* position relative to sidebar */
   /*
   position: absolute;
   top: 20px;
   right: -70px;
   */
}

.menu-toggle-2,
.menu-toggle-2:hover,
.menu-toggle-2:focus,
.menu-toggle-2:active,
.menu-toggle-2:active:hover {
   $toggle-height: $toggle-width;

   width: $toggle-width;
   height: $toggle-height;

   z-index: 800;
   padding: 0;
   transition: all 0.5s;
   background-color: $background;

   box-shadow: none;
   outline: none;

   border: 1px solid #ddd;
   border-radius: 50%;

   position: absolute;
   right: -$toggle-width / 2 + 2px;
   margin: -$toggle-height/2 0 0 0;
   top: 50vh;

   overflow: hidden;
   display: flex;
   > * {
      flex: 1;
   }

   .right-half {
      overflow: hidden;
      align-items: center;
      margin-left: 10px;

      img {
         width: 14.4px;
         height: 18.625px;
         transition: 2s ease-in;

         position: absolute;
         top: ($toggle-height / 2) - (18.625px/2);
         left: 60%;

         opacity: 0;
         &.mirror {
            opacity: 1;
         }
      }
   }
}

.mirror {
   transform: rotateY(180deg);
}

@media (min-width: 900px) {
   .menu-toggle,
   .menu-toggle-2 {
      opacity: 0;
      right: 0;
      width: 0;
      display: none;
   }
}
</style>
