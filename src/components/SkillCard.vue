<template>
   <div class="skill-card">
      <img :src="image" :alt="text">
      <p>{{ text }}</p>
   </div>
</template>

<script>
export default {
   props: ["image", "text"]
};
</script>

<style lang="scss" scoped>
.skill-card {
   text-align: center;

   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 10px 20px 0 0;

   img {
      width: 100px;
      height: 100px;
   }
   p {
      font-size: 18px;
      font-weight: bold;
   }
}
</style>
