<template>
   <div id="contact">
      <page-header text="Contact"/>

      <div class="page-content">
         <p>
            <img class="icon" src="@/assets/email-icon.png" alt="email">
            <strong class="highlight">a.sakasamo 
               <span class="underline">at</span> gmail <span class="underline">dot</span> com</strong>
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
</template>

<style lang="scss" scoped>
p {
   display: flex;
   align-items: center;
}

.page-content {
   padding: 30px 0 0 40px;
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

