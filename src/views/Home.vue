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
            <a href="/about">skillset</a> and
            <a href="/my-work">projects</a>! 
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
$emph: #705543;
$sig: #542300;

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
   font-size: 2.143em;
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
   #home {
      margin-top: 0;
      padding: 10px;
      font-size: 10.4px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 95vh;
   }
}

.emph {
   color: $emph;
}

.highlight.sig {
   color: $sig;
   font-weight: 900;
   font-size: 1.65em;
}

h3 {
   font-size: 1.65em;
}
</style>