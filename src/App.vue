<template>
   <div id="app">
      <div class="sidebar" id="sidebar">
         <sidebar />
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
      </div>

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
         console.log(document.querySelector("#sidebar"));
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
$offset: 270px;

#sidebar {
   position: fixed;
   min-width: $offset;
   background-color: #fafffd;
   z-index: 999;
}

.main-content {
   margin-left: $offset;
   // margin-bottom: 7.143em;
}

@media (max-width: 900px) {
   #sidebar {
      transition: all 0.5s;
      left: -$offset;

      &.sidebar-show {
         left: 0;
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
   position: absolute;
   top: 20px;
   right: -70px;

   z-index: 999;

   background-color: $primary;
   border-color: $primary;
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

@media (min-width: 900px) {
   .menu-toggle {
      display: none;
   }
}
</style>
