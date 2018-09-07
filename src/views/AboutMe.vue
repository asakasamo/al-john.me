<template>
   <div class="about">
      <page-header text="About Me" />
      
      <div class="page-table">
         <div class="page-row">
            <div class="row-content">
               <div v-for="(skill,i) in skillset" :key="i" class="skillset">
                  <h3 class="skill-header highlight">{{ skill.title }}</h3>
                  <div class="skills">
                     <skill-card 
                        v-for="(subskill, n) in skill.skills" 
                        :key="n" 
                        :image="require(`@/assets/${subskill.img}`)" 
                        :text="subskill.name"
                        />
                  </div>
               </div>
            </div>
         </div>

      </div>
      
   </div>
</template>

<script>
import SkillCard from "../components/SkillCard.vue";
export default {
   components: { SkillCard },
   data() {
      return {
         skillset: [
            {
               title: "Languages",
               skills: [
                  { name: "Javascript", img: "javascript.png" },
                  { name: "PHP", img: "php.png" },
                  { name: "Java", img: "java.png" },
                  { name: "C++", img: "cpp.png" },
                  { name: "C", img: "c.png" },
                  { name: "SQL", img: "sql.png" },
                  { name: "HTML5", img: "html5.png" },
                  { name: "CSS3", img: "css3.png" },
                  { name: "Groovy", img: "groovy.png" }
               ]
            },

            {
               title: "Libraries & Frameworks",
               skills: [
                  { name: "Vue", img: "vue.png" },
                  { name: "React", img: "react.png" },
                  { name: "Bootstrap", img: "bootstrap.png" },
                  { name: "jQuery", img: "jquery.png" },
                  { name: "SASS/SCSS", img: "sass.png" },
                  { name: "Wordpress", img: "wordpress.png" },
                  { name: "AngularJS", img: "angular.png" },
                  { name: "JavaFX", img: "javafx.png" }
               ]
            },

            {
               title: "Databases",
               skills: [
                  { name: "Firebase", img: "firebase.png" },
                  { name: "MySQL", img: "mysql.png" },
                  { name: "MSSQL", img: "mssql.png" }
               ]
            },

            {
               title: "Software",
               skills: [
                  { name: "VS Code", img: "vscode.png" },
                  { name: "IntelliJ IDEA", img: "intellij.png" },
                  { name: "Photoshop", img: "photoshop.png" }
               ]
            }
         ]
      };
   }
};
</script>

<style lang="scss" scoped>
.page-table {
   display: flex;
   flex-direction: column;
   padding: 20px;
   overflow: hidden;
}

.page-row {
   display: flex;
   flex-direction: row;
   .row-title {
      min-width: 150px;
      border-right: 3px solid #666;
      font-size: 30px;
      font-weight: bold;
   }

   .row-content {
      padding: 0px 20px;
   }
}
.empty {
   margin: 15px 0;

   .row-title {
      border: none !important;
   }
   .row-content {
      border-bottom: 1px solid #ccc;
      flex: 1;
      padding: 0;
   }
}

.skills {
   display: flex;
   flex-wrap: wrap;
}

.skill-header {
   margin: 0 0 10px 0;
   font-weight: bold;
}

.skillset {
   margin-bottom: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
}

@media (max-width: 900px) {
   .page-row {
      flex-direction: column;
      .row-title {
         border-right: none;
         border-bottom: 3px solid #666;
         margin-bottom: 10px;
      }
   }
   .skill-header {
      text-align: center;
   }
   .skills {
      justify-content: space-around;
   }
}
</style>
