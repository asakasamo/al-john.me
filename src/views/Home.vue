<template>
   <div id="home">
      <div class="intro">
         <h1 class="grabber">Hey, I'm a budding
            <br>
            <span class="highlight">Software Engineer!</span>
            <br>
         </h1>

         <h2 class="intro-caption">
            I'm currently focused on building clean, awesome
            <span class="emph">web applications</span>
            and
            <span class="emph">websites</span>.
         </h2>

         <h3>Check out my 
            <a href="#">skillset</a> and
            <a href="#">projects</a>! 
            <br>Or, just navigate the site using the 
            <span class="small-screen">popout menu</span>
            <span class="large-screen">sidebar</span>.
         </h3>

         <h3 class="highlight sig">&mdash; Al-John</h3>
      </div>
   </div>
</template>

<style lang="scss" scoped>
$main: #592500;
$emph: #6e5644;

#home {
   text-align: center;
   margin-top: 12em;
}

.grabber {
   font-size: 3.15em;
   line-height: 1.3;
   margin-bottom: 40px;
}

.grabber .highlight {
   font-size: 1.18em;
   padding: 5px;
   color: $main;
}

.intro-caption {
   margin-bottom: 40px;
}

@media (min-width: 900px) {
   .small-screen {
      display: none;
   }
}

@media (max-width: 900px) {
   .large-screen {
      display: none;
   }
}

.emph {
   // display: inline-block;
   // transform: skew(-8deg);
   // font-size: 0.995em;
   color: $emph;
}

.highlight.sig {
   color: $main;
}
</style>
