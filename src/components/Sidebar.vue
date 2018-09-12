<template>
   <div class="sidebar">
      <div id="logo">
         <span class="highlight">Al-John Sakasamo</span>
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
         if (route === this.$route.name) {
            return "highlight active-page";
         }
         return "";
      }
   }
};
</script>

<style scoped lang="scss">
$space: 1.429em;

.sidebar {
   text-align: center;
   border-right: 1px solid #ddd;
   min-height: 100vh;
   // padding-top: 39px;
   padding-top: 3.786em;
}
.active-page {
   font-weight: bold;
}

#logo {
   padding: 1.607em 0.714em 0.00714em 0.714em;
   h4 {
      font-size: 1.357em;
   }
   span {
      font-size: 2em;
      font-weight: bold;
   }
}

ul {
   list-style: none;
   border-top: 1px solid #ddd;
   border-bottom: 1px solid #ddd;
   margin: 0;
   padding: 0.429em 0;
}

nav {
   margin: 1.429em 2.5em 6.071em 2.5em;
   padding: $space 0;
   a {
      font-size: 1.94em;
      line-height: 2.6;
   }
}

.social {
   justify-self: flex-end;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 0.71428em;
   font-size: 1.2857em;
   div {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      background-size: 20px 20px;
      transition: all 0.2s;
   }
}

a[href].social {
   color: #666;
   .lin {
      background-image: url("../assets/l-in.png");
   }
   div.git {
      background-image: url("../assets/github.png");
   }
   &:hover {
      .lin {
         background-image: url("../assets/l-in-2.png");
      }
      .git {
         background-image: url("../assets/github-2.png");
      }
      color: black;
   }
}
@media screen and (max-width: 900px), (max-height: 700px) {
   .sidebar {
      padding-top: 3.3em;
      font-size: 12px;
   }
}
</style>
