<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <span class="text-right" v-if="user">
      <router-link :to="profileUrl">@{{ user.user.username }}</router-link>
    </span>
    <span v-else>
      @Anonymous
    </span>
  </div>
  <router-view/>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',

  setup() {
    const store = useStore();
    const user = computed(() => {
      console.log('user: ', store.state.user);
      console.log('User: ', store.state.User.user);
      return store.state.User.user
    });

    let profileUrl = computed(() => `/user/${user.value.user.id}`)

    return {
      user,
      profileUrl
    }
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #aac4df;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
