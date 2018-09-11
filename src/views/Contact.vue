<template>
   <div id="contact">
      <page-header text="Contact"/>

      <div class="page-content">
         <p class="contact-msg">
            If you have any inquiries or hiring requests, please contact me via any of the following 
            methods below.
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
</template>

<style lang="scss" scoped>
.page-content {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0 30px;
}

.contact-msg {
   margin: 30px 0;
   font-size: 1.6em;
   text-align: center;
}

.contact-links {
   display: flex;
   flex-direction: column;
   font-size: 1.4em;
}

.underline {
   text-decoration: underline;
}

#contact .icon {
   width: 40px;
   height: 40px;
   margin-right: 10px;
}

a[href] {
   color: black;
   font-weight: bold;
}
a:hover {
   color: #999;
}
</style>

