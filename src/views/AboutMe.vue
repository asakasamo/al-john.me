<template>
   <div id="about">
      <page-header text="About Me" />
      
      <div class="page-table">
         <div class="page-row">
            <div class="row-content">
               <div 
                  v-for="(skill,i) in skillset" 
                  :key="i" 
                  class="skillset"
                  >
                  <div class="skill-header-wrap">
                     <h3 class="skill-header">
                        {{ skill.title }}
                     </h3>
                     <h3 class="skill-header space">
                        &nbsp;
                     </h3>
                     <h3 class="skill-header dash">
                        -
                     </h3>
                  </div>
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
   padding: 28px 20px 5px 18px;
   font-size: 13.35px;
}

.page-row {
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 0px 20px;
}

.skills {
   display: flex;
   flex-wrap: wrap;
}

.skill-header-wrap {
   display: flex;
   flex-direction: row;
   align-items: center;
}

.skill-header {
   margin: 0 0 5px 0;
   font-weight: bold;
   color: black;
   font-size: 1.94em;

   line-height: 0.9;
   border-bottom: 2px solid black;
   &.dash,
   &.space {
      border-bottom: 2px solid transparent;
   }
   &.space {
      font-size: 0.5em;
   }
}

.skillset {
   margin-bottom: 29.5px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: flex-start;
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
      justify-content: space-between;
   }
   .dash {
      display: none;
   }
}
</style>
