<template>
   <div class="sidebar">
      <div id="logo">
         <a href="/" class="highlight">Al-John Sakasamo</a>
         <h4>Software Engineer</h4>
      </div>

      <nav>
         <ul>
            <li :class="activeNavClass('home')"><router-link to="/">Home</router-link></li>
            <li :class="activeNavClass('my-work')"><router-link to="/my-work">My Work</router-link></li>
            <li :class="activeNavClass('about')"><router-link to="/about">About Me</router-link></li>
            <li :class="activeNavClass('contact')"><router-link to="/contact">Contact</router-link></li>
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

<script>
export default {
   methods: {
      activeNavClass(route) {
         console.log(this.$route);
         console.log(route);
         if (route === this.$route.name) {
            return "highlight";
         }
         return "";
      }
   }
};
</script>


<style scoped lang="scss">
* {
   text-align: center;
}

.social div {
   transition: all 0.2s;
}

#logo {
   padding: 20px 20px 0 20px;
}

#logo a {
   font-size: 2em;
}

ul {
   list-style: none;
   padding: 10px 0;
   border-top: 1px solid #ddd;
   border-bottom: 1px solid #ddd;
}

nav a {
   font-size: 2em;
   line-height: 2.5;
}

nav {
   margin: 20px 40px;
}

.social {
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 10px;
   font-size: 18px;
}

.social div {
   width: 20px;
   height: 20px;
   margin-right: 5px;
   background-size: 20px 20px;
}

.social div.lin {
   background-image: url("../assets/l-in.png");
}

.social div.git {
   background-image: url("../assets/github.png");
}

.social:hover div.lin {
   background-image: url("../assets/l-in-2.png");
}

.social:hover div.git {
   background-image: url("../assets/github-2.png");
}
</style>
