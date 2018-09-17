<template>
   <header id="page-header" :style="{ paddingLeft: leftPadding }">
      <span>{{ text }}</span>
   </header>
</template>

<script>
export default {
   props: ["text", "leftPadding"]
};
</script>

<style lang="scss" scoped>
$primary: #502302;

#page-header {
   color: #fafffd;
   background-color: $primary;
   padding: 13.5px 34px;
   font-size: 3em;
   font-weight: bold;

   display: flex;
   align-items: center;
   justify-content: space-between;
}

@media screen and (max-width: 900px) {
   #page-header {
      padding: 13.5px 0 !important;
      justify-content: center;
   }

   #contact #page-header {
      justify-content: space-between;
      padding-left: 76px !important;
   }
}
</style>
