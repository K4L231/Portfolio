<template>
  <body>
    
    <div class="container">
      <isHeader />
      <isBody />
      <projects />
      <contacts />
    </div>
  </body>
</template>

<script>
import isHeader from './components/isHeader.vue'
import projects from './components/projects.vue'
import IsBody from './components/IsBody.vue'
import contacts from './components/contacts.vue'
export default {
  name: 'App',
  components: {
    isHeader,
    IsBody,
    projects,
    contacts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-image: url('./assets/bg.jpeg');
  background-size: cover;
  height: 2000px;
}
</style>
