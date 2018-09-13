<template>
   <div id="my-work">
      <page-header text="My Work" left-padding="23px"/>

      <div class="flex-cards">
         <div 
            v-for="(project, idx) in projects" 
            :key="idx"
            :class="['card', idx === selectedIdx ? 'selected' : '']"
            :id="`project-${idx}`"
            @mouseover="selectCard(idx)"
            >
            <a :href="project.demoLink || '#'" class="card-content">
               <img 
                  v-if="project.image"
                  class="card-img-top" 
                  :src="project.image" 
                  :alt="project.name" />

               <div
                  v-if="project.video" 
                  class="card-img-top"
                  style="background-color: black"
                  >
                  <video 
                     height="100%"
                     width="100%"
                     autoplay
                     >
                     <source :src="project.video" type="video/mp4">
                  </video>
               </div>

               <div class="card-body bg-light p-3">
                  <h4 class="card-title">
                     {{ project.title }}
                  </h4>
                  <div v-html="project.desc"></div>
               </div>
            </a>
            <div class="space"></div>
            <div class="flex-btns">
               <a 
                  class="btn btn-primary" 
                  :href="project.demoLink">
                  {{ project.demoText || 'Demo' }}
               </a>
               <a 
                  class="btn btn-secondary" 
                  :href="project.srcLink">
                     Source
               </a>
            </div>

         </div>
      </div>

   </div>
</template>

<script>
export default {
   data() {
      return {
         selectedIdx: 0,
         projects: [
            {
               image: require("@/assets/projects/devmeetup.png"),
               title: "DevMeetup",
               desc: `<p class="card-text">A Meetup clone that lets users organize, register for, and browse meetups</p>
                  <ul>
                     <li><strong>Vue</strong>-based web application written in <strong>ES6</strong></li>
                     <li><strong>Firebase</strong> used for database &amp; user authentication</li>
                     <li><strong>Vuex</strong> store used for state management</li>
                     <li><strong>Responsive</strong> web design using <strong>Vuetify</strong> and <strong>Bootstrap</strong>
                        <strong>4</strong></li>
                  </ul>`,
               demoLink: "",
               srcLink: "https://github.com/asakasamo/DevMeetup"
            },
            {
               image: require("@/assets/projects/catchoftheday.png"),
               title: "Catch of the Day",
               desc: `<p class="card-text">A web store simulator, providing inventory management for authorized users</p>
               <ul>
                  <li><strong>React</strong>-based web application written in <strong>ES6/JSX</strong></li>
                  <li><strong>Firebase</strong> used for database &amp; user authentication</li>
                  <li><strong>Re-base</strong> used for realtime database synchronization</li>
                  <li>Animations using <strong>CSS3</strong> and <strong>React-transition-group</strong></li>
                  <li>Local data storage using <strong>HTML5 Web Storage</strong></li>
               </ul>`,
               demoLink: "",
               srcLink: "https://github.com/asakasamo/Catch-of-the-Day"
            },
            {
               image: require("@/assets/projects/prisoner.png"),
               title: "Prisoner's Game of Life",
               desc: `<p class="card-text">A 0-player game applying game theory (The Prisoner's Dilemma) to cellular automata (The
                  Game of Life)</p>
               <ul>
                  <li><strong>Vue</strong>-based game/web application written in <strong>ES6</strong></li>
                  <li>Material design using <strong>Vue-bootstrap</strong></li>
                  <li>User input validation using <strong>Vee-validate</strong></li>
                  <li><strong>SCSS</strong> styling with extensive use of <strong>CSS Flexbox</strong></li>
               </ul>`,
               demoLink: "",
               srcLink: "https://github.com/asakasamo/prisoners-game-of-life"
            },
            {
               video: require("@/assets/planAmity-demo.mp4"),
               title: "planAmity",
               desc: `
               <p class="card-text">A project planning &amp; management application</p>
               <ul>
                  <li><strong>Java</strong>-based desktop application built using <strong>JavaFX</strong></li>
                  <li><strong>Model-View-Controller</strong> (<strong>MVC</strong>) design pattern</li>
                  <li><strong>Unit testing/TDD</strong> using <strong>Groovy</strong></li>
                  <li>Detailed Javadoc documentation!</li>
               </ul>
               `,
               demoLink: require("@/assets/planAmity-demo.mp4"),
               srcLink: "https://github.com/asakasamo/PlanAmity"
            },
            {
               image: require("@/assets/projects/codewars.png"),
               title: "CodeWars",
               desc: `<p class="card-text">Completing programming challenges to achieve code mastery through challenge!</p>
               <ul>
                  <li><strong>Overall Ranking:</strong> 5 kyu</li>
                  <li><strong>Languages Trained:</strong> Javascript, Java</li>
                  <li><strong>Completed Kata:</strong> 26</li>
               </ul>`,
               demoLink: "https://www.codewars.com/users/asakasamo",
               demoText: "Profile",
               srcLink: "https://github.com/asakasamo/Coding-Practice"
            },
            {
               image: require("@/assets/projects/recursion.png"),
               title: "Al-John.me",
               desc: `<p class="card-text">The website you're currently viewing</p>
               <ul>
                  <li><strong>Custom Website</strong> built in <strong>Vue</strong></li>
                  <li>
                     <strong>Responsive design</strong> using <strong>HTML5</strong>, <strong>CSS3</strong>, 
                     <strong>Bootstrap</strong>, and <strong>Javascript (ES6)</strong>
                  </li>
                  <li>Straightforward &amp; effective UI</li>
               </ul>`,
               demoLink: "",
               srcLink: "https://github.com/asakasamo/al-john.me.github.io"
            }
         ]
      };
   },
   methods: {
      selectCard(idx) {
         this.selectedIdx = idx;
      }
   },
   mounted() {
      window.addEventListener("keyup", (e) => {
         if (e.key === "ArrowLeft") {
            this.selectedIdx--;
         }
         if (e.key === "ArrowRight") {
            this.selectedIdx++;
         }
         if (e.key === "Enter") {
            let win = window.open(this.projects[this.selectedIdx].srcLink);
            win.focus();
         }
      });
   },
   watch: {
      selectedIdx() {
         if (this.selectedIdx < 0) this.selectedIdx = 0;
         if (this.selectedIdx > this.projects.length - 1)
            this.selectedIdx = this.projects.length - 1;
      }
   }
};
</script>

<style lang="scss" scoped>
$card-bg: #f5fafd;

@media (min-width: 900px) {
   #my-work {
      margin-bottom: 30px;
   }
   .card {
      // fade-out
      opacity: 0.66;
      transition: 0.03s ease-out;
   }
   .card.selected {
      opacity: 1;
      // fade-in
      transition: 0.045s;
   }
}

@media (max-width: 900px) {
   #my-work {
      margin-bottom: 5px;
   }
}

.flex-cards {
   display: flex;
   flex-wrap: wrap;
   // justify-content: space-between;
   // padding: 0 23px;
   justify-content: space-around;
   & > * {
      width: 350px;
      margin-top: 20px;
   }
}

.card-img-top {
   width: 100%;
   height: 215px;
   // border: 1px solid #ddd;
   border-bottom: none;
}

.flex-btns {
   display: flex;
   justify-content: center;
   margin-bottom: 10px;
   margin-top: 5px;
}

.card {
   display: flex;
   flex-direction: column;
   a.card-content {
      color: #333;
   }
}

.card-body {
   padding: 10px;
   // border: 1px solid #ddd;
   border-bottom: none;
   background-color: $card-bg;
   height: 301px;
}

.card-title {
   font-weight: bold;
   color: black;
}

.space {
   flex: 1;
   // border: 1px solid #ddd;
   border-top: none;
   background-color: $card-bg;
}

.card-content {
   border: 1px solid #ddd;
}
</style>

