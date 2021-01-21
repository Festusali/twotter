<template>
  <div class="home">
    <header><h1>Welcome To Twooter!</h1></header>
    <main>
      <section>
        <div class="panel">Twooter is an Awesome Web App build by Festus using Vue3.js</div>
        <div class="panel">
          View Twoots, Create Twoots, Share and Do a lot more with Twooter!
        </div>
        <div class="panel">
          Ready to get started, Sign Up now! or Login to existing account.
        </div>
        <div class="panel">
          Better still, take a look at some of our Awesome users.
          <div class="profiles">
            <router-link v-for="user in users" :key="user.id" :to="{ name: 'UserProfile', params: { userId: user.id } }">
              {{ `${user.firstName} ${user.lastName}` }}
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { users } from '@/assets/users';

export default {
  name: 'Home',

  setup() {
    return { users }
  }
}
</script>

<style lang="scss" scoped>
header h1 {
  text-align: center;
}

section .panel {
  padding: 40px 15px;
  border: 2px solid azure;

  .profiles a {
    display: inline-block;
    margin: 10px 30px;
    padding: 3px 10px;
    color: #aac4df;
  }
}
</style>