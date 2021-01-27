<template>
  <div id="nav">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <span class="text-right" v-if="user">
        <router-link :to="profileUrl">@{{ user.user.username }}</router-link>
      </span>
      <span v-else>
        @Anonymous
      </span> |
      <router-link to="/admin">Admin</router-link>
    </div>
  </div>
  <router-view/>
  <footer>
    <div class="about">
      <div>
        <h3>About Developer</h3>
        <div>
          Festus is a passionate Django Web Developer who is currently learning Vue 3.
        </div>
      </div>
    </div>
    <div class="social">
      <div>
        <h3>Let's Connect</h3>
        <div>
          <a href="https://simpleportfolio.pythonanywhere.com/user/festus/" target="_blank" rel="noopener noreferrer" title="Festus' Portfolio">Portfolio</a>
          <a href="https://github.com/festusali" target="_blank" rel="noopener noreferrer" title="Festus' Github Profile">Github Profile</a>
          <a href="https://linkedin.com/in/festus-ali" target="_blank" rel="noopener noreferrer" title="Festus' LinkedIn Profile">LinkedIn Profile</a>
          <a href="https://twitter.com/alifestus" target="_blank" rel="noopener noreferrer" title="Festus' Twitter Profile">Twitter Profile</a>
          <a href="https://www.facebook.com/festus.ali.560/" target="_blank" rel="noopener noreferrer" title="Festus' Facebook Profile">Facebook Profile</a>
        </div>
      </div>
    </div>
    <div class="copywrite">
      &copy; {{ new Date().getFullYear() }} Festus Ali. Some Rights Reserved.
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',

  setup() {
    const store = useStore();
    const user = computed(() => {
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
  padding: 10px 30px;
  background-color: #0861bb;
  font-size: 1.0em;

  a {
    font-weight: bold;
    color: #aac4df;
    padding: 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #12dc80;
    }

    &:hover {
      color: #f38616;
    }
  }
}

footer {
  padding: 30px;

  a {
    color: #aac4df;
    padding-right: 15px;

    &:hover {
      color: #f38616;
    }
  }

  .copywrite {
    margin-top: 30px;
    padding: 10px;
    text-align: center;
    border-top: 1px solid azure;
    border-bottom: 1px solid azure;
  }
}

@media (min-width: 576px) {
  .about, .social {
    display: inline-block;
    width: 50%;
  }

  .about > div, .social > div {
    padding: 0 15px;
  }
}
</style>
