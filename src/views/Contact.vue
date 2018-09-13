<template>
   <div id="contact">
      <page-header text="Contact"/>

      <div class="page-content">

         <div class="flex-container">
            <p class="contact-msg">
               If you have any inquiries or hiring requests, please
               <br> contact me via any of the following 
               methods:
            </p>

            <div class="contact-links">
               <p>
                  <img class="icon" src="@/assets/email-icon.png" alt="email">
                  <a href="mailto:contact@al-john.me">contact@al-john.me</a>
               </p>

               <p>
                  <img class="icon" src="@/assets/skype.png" alt="skype">
                  <a href="https://join.skype.com/QplK0tZhcXzg">Al-John Sakasamo</a>
               </p>

               <p>
                  <img class="icon" src="@/assets/github-icon.png" alt="email">
                  <a href="github.com/asakasamo">github.com/asakasamo</a>
               </p>

               <p>
                  <img class="icon" src="@/assets/linkedin.png" alt="linkedin">
                  <a href="linkedin.com/in/asakasamo">linkedin.com/in/asakasamo</a>
               </p>
            </div>
         </div>
         

      </div>
   </div>
</template>

<style lang="scss" scoped>
.page-content {
   padding: 2.1429em 2.85714em;
   justify-content: center;
   align-items: center;
   // height: 100vh;
   // padding-bottom: 90px;
   // padding-bottom: 170px;
   // padding-right: 620px;
}

.flex-container {
   display: flex;
   flex-direction: column;
}

.contact-msg {
   font-size: 1.635em;
   text-align: left;
   margin-bottom: 0.8em;
}

.contact-links {
   display: flex;
   flex-direction: column;
   font-size: 1.3em;
}

.underline {
   text-decoration: underline;
}

#contact .icon {
   width: 2.0408em;
   height: 2.0408em;
   margin-right: 0.5em;
}

a[href] {
   color: black;
   font-weight: bold;
}
a:hover {
   color: #999;
}
</style>

