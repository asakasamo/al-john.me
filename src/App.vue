<template>
   <div id="app">
      <div class="sidebar">
         <sidebar />
      </div>
      <div class="main-content">
         <router-view/>
      </div>
   </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto|Ubuntu|Nunito");
#app {
   overflow: hidden;
   font-family: "Roboto";
}

.sidebar {
   position: fixed;
   width: 250px;
}

.main-content {
   margin-left: 250px;
   margin-bottom: 100px;
}

@media (max-width: 900px) {
   .sidebar {
      left: -250px;
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
   color: darkblue;
}

.highlight,
.highlight *,
.highlight a[href],
a.highlight[href] {
   color: #660000;
}

.btn {
   border-radius: 0;
}

.btn-primary {
   color: #fff;
   background-color: #660000;
   border-color: #660000;
   border-radius: 0;
   &:hover,
   &:focus,
   &:active:hover {
      border-color: #660000;
      background-color: #880000;
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
</style>
