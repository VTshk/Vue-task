<template>
  <div id="app">
    <AppHeader msg="Welcome to Your Vue.js App"/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'Home',
  components: {
    AppHeader,
  },
};
</script>

<style lang="sass">
body
  height: 100vh
  background: #f7f7f7
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 30px

p
  word-wrap: break-word
  white-space: pre-wrap
hr
  border: 0
  margin: 0
  height: 1px
  background-color: #E9EDF2

</style>
