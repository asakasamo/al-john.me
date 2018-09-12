<template>
   <div id="app">
      <div id="sidebar">
         <sidebar />
         
         <!-- side menu toggle -->
         <button class="btn btn-primary menu-toggle-2" @click="toggleMenu">
            <div class="left-half"></div>
            <div class="right-half">
               <img src="@/assets/left-toggle.svg" alt="left toggle">
            </div>
         </button>
      </div>
      
      <!-- top menu toggle -->
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
               src="https://mdbootstrap.com/img/svg/hamburger7.svg?color=592500" 
               alt="menu">
      </button>

      <div class="main-content">
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
}

.main-content {
   margin-left: $sidebar-width;
}

@media (max-width: 900px) {
   #sidebar {
      transition: all 0.5s;
      left: -$sidebar-width - $toggle-width;

      &.sidebar-show {
         left: 0;

         // menu toggle animation
         .menu-toggle-2 img {
            // transform: rotateZ(0deg);
            // transform: rotateY(180deg);
            margin-left: -9px;
         }

         + .menu-toggle {
            // menu-toggle fade-out animation
            transition: opacity 0.5s;
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
   }

   // &[disabled]:hover {
   //    background-color: inherit;
   //    border-color: transparent;
   // }
   // &[disabled]:focus {
   //    box-shadow: inherit;
   // }
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
   /* position relative to top header */
   position: absolute;
   left: 5px;
   top: 13px;
   background-color: $primary;
   border-color: $primary;
   z-index: 999;

   // menu toggle fade-in
   transition: opacity 1.3s;

   &.home {
      background: none;
      border: 1px solid transparent;
      &:focus {
         background: none;
         border: 1px solid transparent;
         outline: 1px solid transparent;
      }
      &:active:hover {
         background: none;
         border-color: #ddd;
      }
   }

   /* position relative to sidebar */
   /*
   position: absolute;
   top: 20px;
   right: -70px;
   */
}

.menu-toggle-2 {
   $toggle-height: $toggle-width;

   width: $toggle-width;
   height: $toggle-height;

   z-index: 800;
   padding: 0;
   transition: all 0.5s;
   background-color: $background;

   &:hover,
   &:focus,
   &:active:hover {
      border: 1px solid #ddd;
      background: none;
      box-shadow: none;
      outline: none;
   }

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
         width: 60%;
         height: 60%;

         transition: all ease-in 0.5s;
      }
   }
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
