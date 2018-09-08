<template>
   <header id="page-header">
      <span>{{ text }}</span>

      <button class="btn btn-primary menu-toggle">
         <img src="https://mdbootstrap.com/img/svg/hamburger7.svg?color=FFFFFF" alt="">
      </button>
   </header>
</template>

<script>
export default {
   props: ["text"]
};
</script>

<style lang="scss" scoped>
#page-header {
   color: #fafffd;
   background-color: #471e01;
   padding: 15px 40px;
   font-size: 3em;
   font-weight: bold;

   display: flex;
   align-items: center;
   justify-content: space-between;
}

.menu-toggle {
   &:hover {
      border-color: #5c2600;
   }
}

@media (min-width: 900px) {
   .menu-toggle {
      display: none;
   }
}
</style>
