<template>
   <div id="home">
      <div class="intro">
         <h1 class="grabber">Hey, I'm a burgeoning
            <br>
            <span class="highlight">Software Engineer!</span>
         </h1>

         <h3>Check out my 
            <a href="#">skillset</a>, 
            <a href="#">projects</a>, 
            <a href="#">pdf resume</a>, 
            or just navigate using the menu.
         </h3>

         <h3 class="highlight mt-5">&mdash; Al-John Sakasamo</h3>
      </div>
   </div>
</template>

<style lang="scss" scoped>
#home {
   text-align: center;
   min-height: 80vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-weight: 900;
}

.grabber {
   font-size: 4em;
   line-height: 1.3;
}

span.highlight {
   background-color: #660000;
   color: white;
   padding: 5px;
}
</style>
