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

.sidebar {
   position: fixed;
   width: 250px;
}

.main-content {
   margin-left: 250px;
}

@media (max-width: 990px) {
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
a:hover,
a:active,
a:focus {
   text-decoration: none;
}

.highlight,
.highlight:hover,
.highlight *,
.highlight *:hover {
   color: #660000;
}
</style>
