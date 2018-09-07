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
   background-color: #fafffd;
}

$main: #5c2600;
$offset: 270px;

.sidebar {
   position: fixed;
   width: $offset;
}

.main-content {
   margin-left: $offset;
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
</style>
