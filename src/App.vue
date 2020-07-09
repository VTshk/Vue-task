<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="sass">
body
  min-height: 100vh
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
hr
  border: 0
  margin: 0
  height: 1px
  background-color: #E9EDF2

</style>
