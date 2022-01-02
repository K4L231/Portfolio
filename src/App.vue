<template>
  <isHeader />
  <isBody />
</template>

<script>
import isHeader from './components/isHeader.vue'
import isBody from './components/IsBody.vue'
import IsBody from './components/IsBody.vue'
export default {
  name: 'App',
  components: {
    isHeader,
    IsBody,
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
</style>
