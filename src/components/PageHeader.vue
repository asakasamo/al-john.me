<template>
   <header id="page-header">
      {{ text }}
   </header>   
</template>

<script>
export default {
   props: ["text"]
};
</script>

<style lang="scss" scoped>
#page-header {
   color: #eee;
   background-color: #660000;
   padding: 15px 40px;
   font-size: 3em;
   font-weight: bold;
}
</style>
