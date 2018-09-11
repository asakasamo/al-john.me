<template>
   <div id="my-work">
      <page-header text="My Work" />

      <div class="flex-cards">

         <div class="card">
            <img class="card-img-top" src="@/assets/projects/wemeetup.png" alt="WeMeetup" />
            <div class="card-body bg-light p-3">
               <h4 class="card-title">WeMeetup</h4>
               <p class="card-text">A Meetup clone that lets users organize, register for, and browse meetups</p>

               <ul>
                  <li><strong>Vue</strong>-based web application written in <strong>ES6</strong></li>
                  <li><strong>Firebase</strong> used for database &amp; user authentication</li>
                  <li><strong>Vuex</strong> store used for state management</li>
                  <li><strong>Responsive</strong> web design using <strong>Vuetify</strong> and <strong>Bootstrap</strong>
                     <strong>4</strong></li>
               </ul>
            </div>
            <div class="space"></div>
            <div class="flex-btns">
               <a class="btn btn-primary" href="https://wemeetup.localhost/al-john.me">Demo</a>
               <a class="btn btn-secondary" href="https://github.com/asakasamo/WeMeetup">Source</a>
            </div>

         </div>

         <div class="card">
            <img class="card-img-top" src="@/assets/projects/catchoftheday.png" alt="Catch of the Day" />
            <div class="card-body bg-light p-3">
               <h4 class="card-title">Catch of the Day</h4>
               <p class="card-text">A web store simulator, providing inventory management for authorized users</p>

               <ul>
                  <li><strong>React</strong>-based web application written in <strong>ES6/JSX</strong></li>
                  <li><strong>Firebase</strong> used for database &amp; user authentication</li>
                  <li><strong>Re-base</strong> used for realtime database synchronization</li>
                  <li>Animations using <strong>CSS3</strong> and <strong>React-transition-group</strong></li>
                  <li>Local data storage using <strong>HTML5 Web Storage</strong></li>
               </ul>
            </div>
            <div class="space"></div>
            <div class="flex-btns">
               <a class="btn btn-primary" href="https://catchoftheday.localhost/al-john.me">Demo</a>
               <a class="btn btn-secondary" href="https://github.com/asakasamo/Catch-of-the-Day">Source</a>
            </div>
         </div>

         <div class="card">
            <img class="card-img-top" src="@/assets/projects/prisoner.png" alt="Prisoner's Game of Life" />
            <div class="card-body bg-light p-3">
               <h4 class="card-title">Prisoner's Game of Life</h4>
               <p class="card-text">A 0-player game applying game theory (The Prisoner's Dilemma) to cellular automata (The
                  Game of Life)</p>

               <ul>
                  <li><strong>Vue</strong>-based game/web application written in <strong>ES6</strong></li>
                  <li>Material design using <strong>Vue-bootstrap</strong></li>
                  <li>User input validation using <strong>Vee-validate</strong></li>
                  <li><strong>SCSS</strong> styling with extensive use of <strong>CSS Flexbox</strong></li>
               </ul>
            </div>
            <div class="space"></div>
            <div class="flex-btns">
               <a class="btn btn-primary" href="https://prisoner.localhost/al-john.me">Demo</a>
               <a class="btn btn-secondary" href="https://github.com/asakasamo/prisoners-game-of-life">Source</a>
            </div>
         </div>

         <div class="card">
            <div class="card-img-top" style="position: relative; padding-bottom: 54%;">
               <iframe style="position: absolute; top: 0; left: 0; z-index: 0;"
                  src="https://gfycat.com/ifr/AmusingDefenselessCoypu" 
                  width="100%" height="100%" frameborder="0" scrolling="no"
                  allowfullscreen="allowfullscreen">
               </iframe>
            </div>
            <div class="card-body bg-light p-3">
               <h4 class="card-title">planAmity</h4>
               <p class="card-text">A project planning &amp; management application</p>

               <ul>
                  <li><strong>Java</strong>-based desktop application built using <strong>JavaFX</strong></li>
                  <li><strong>Model-View-Controller</strong> (<strong>MVC</strong>) design pattern</li>
                  <li><strong>Unit testing/TDD</strong> using <strong>Groovy</strong></li>
                  <li>Detailed Javadoc documentation!</li>
               </ul>
            </div>
            <div class="space"></div>
            <div class="flex-btns">
               <a class="btn btn-primary" href="https://gfycat.com/ifr/AmusingDefenselessCoypu">Demo</a>
               <a class="btn btn-secondary" href="https://github.com/asakasamo/PlanAmity">Source</a>
            </div>
         </div>

         <div class="card">

            <img class="card-img-top" src="@/assets/projects/codewars.png" alt="Codewars" />
            <div class="card-body bg-light p-3">
               <h4 class="card-title">CodeWars</h4>
               <p class="card-text">Completing programming challenges to achieve code mastery through challenge!</p>

               <ul>
                  <li><strong>Overall Ranking:</strong> 5 kyu</li>
                  <li><strong>Languages Trained:</strong> Javascript, Java</li>
                  <li><strong>Completed Kata:</strong> 26</li>
               </ul>
            </div>
            <div class="space"></div>
            <div class="flex-btns">
               <a class="btn btn-primary" href="https://www.codewars.com/users/asakasamo">Profile</a>
               <a class="btn btn-secondary" href="https://github.com/asakasamo/Coding-Practice">Source (Samples)</a>
            </div>
         </div>
         <div class="card">
            <img class="card-img-top" src="@/assets/projects/recursion.png" alt="Al-John.me" />
            <div class="card-body bg-light p-3">
               <h4 class="card-title">Al-John.me</h4>
               <p class="card-text">The website you're currently viewing</p>

               <ul>
                  <li><strong>Custom Website</strong> built in <strong>Vue</strong></li>
                  <li>
                     <strong>Responsive design</strong> using <strong>HTML5</strong>, <strong>CSS3</strong>, 
                     <strong>Bootstrap</strong>, and <strong>Javascript (ES6)</strong>
                  </li>
                  <li>Straightforward &amp; effective UI</li>
               </ul>
            </div>
            <div class="space"></div>
            <div class="flex-btns"><a class="btn btn-primary" href="/">Visit</a></div>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
@media (min-width: 900px) {
   #my-work {
      margin-bottom: 30px;
   }
}

@media (max-width: 900px) {
   #my-work {
      margin-bottom: 5px;
   }
}

.flex-cards {
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   & > * {
      width: 350px;
      margin-top: 20px;
   }
}

.card-img-top {
   width: 100%;
   height: 215px;
}

.flex-btns {
   display: flex;
   justify-content: center;
   margin-bottom: 10px;
}

.card {
   border: 1px solid #ddd;
   display: flex;
   flex-direction: column;
}

.card-body {
   padding: 10px;
   border-top: 1px solid #ddd;
}

.card-title {
   font-weight: bold;
   color: black;
}

.space {
   flex: 1;
}
</style>

