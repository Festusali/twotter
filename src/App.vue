<template>
  <div>
    <user-profile></user-profile>
  </div>
</template>

<script>
import UserProfile from './components/UserProfile'

export default {
  name: 'App',
  components: {
    UserProfile
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
