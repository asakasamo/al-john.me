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
   margin: 0.7143em 1.43em 0 0;

   img {
      width: 7.143em;
      height: 7.143em;
   }
   p {
      font-size: 1.2857em;
      font-weight: bold;
   }
}
</style>
