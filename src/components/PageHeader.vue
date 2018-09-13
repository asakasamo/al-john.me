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
   padding: 12px 40px;
   font-size: 3em;
   font-weight: bold;

   display: flex;
   align-items: center;
   justify-content: space-between;
}

@media screen and (max-width: 900px) {
   #page-header {
      padding-left: 74px !important;
   }
}
</style>
