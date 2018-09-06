<template>
   <div id="sidebar">
      <div id="logo">
         <h3>Al-John Sakasamo</h3>
         <h5>Software Engineer</h5>
      </div>

      <nav>
         <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/my-work">My Work</router-link></li>
            <li><router-link to="/about">About Me</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
         </ul>
      </nav>

      <div class="socs">
         <a href="https://www.linkedin.com/in/asakasamo/" class="social">
            <div class="lin"></div>
            <span>asakasamo</span>
         </a>
         <a href="https://github.com/asakasamo" class="social">
            <div class="git"></div>
            <span>asakasamo</span>
         </a>
      </div>
   </div>
</template>

<style scoped lang="scss">
#sidebar {
   width: 250px;
   flex-basis: 250px;
}
</style>
