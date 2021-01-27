<template>
  <div class="home">
    <header><h1>Welcome To Twooter!</h1></header>
    <main>
      <section>
        <div class="panel">
          <div class="col-6">
            <div class="pad-sm">
              <h3>About</h3>
              Twooter is an Awesome Web App built by Festus using Vue 3.
            </div>
          </div>
          <div class="col-6">
            <img
              src="../assets/about.jpg"
              alt="About Image"
              class="img-responsive"
            />
          </div>
        </div>
        <div class="panel">
          <div class="col-6">
            <img
              src="../assets/features.jpg"
              alt="About Image"
              class="img-responsive"
            />
          </div>
          <div class="col-6">
            <div class="pad-sm">
              <h3>Features</h3>
              View Twoots, Create Twoots, Share and Do a lot more with Twooter!
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="col-6">
            <div class="pad-sm">
              <h3>Get Started</h3>
              Ready to get started, <a>Sign Up</a> now! or <a>Login</a> to
              existing account.
            </div>
          </div>
          <div class="col-6">
            <img
              src="../assets/get_started.jpg"
              alt="About Image"
              class="img-responsive"
            />
          </div>
        </div>
        <div class="panel">
          <div class="col-6">
            <img
              src="../assets/users.jpg"
              alt="About Image"
              class="img-responsive"
            />
          </div>
          <div class="col-6">
            <div class="pad-sm">
              <h3>Users</h3>
              Better still, take a look at some of our Awesome users.
              <div class="profiles">
                <router-link
                  v-for="user in users"
                  :key="user.id"
                  :to="{ name: 'UserProfile', params: { userId: user.id } }"
                >
                  {{ `${user.firstName} ${user.lastName}` }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { users } from "@/assets/users";

export default {
  name: "Home",

  setup() {
    return { users };
  },
};
</script>

<style lang="scss" scoped>
header h1 {
  text-align: center;
}

section .panel {
  padding: 40px 15px;
  border-bottom: 1px solid azure;

  .profiles a {
    display: inline-block;
    margin: 10px 30px;
    padding: 3px 10px;
    color: #aac4df;

    &:hover {
      color: #f38616;
    }
  }

  .pad-sm {
    padding: 10px;
  }

  .img-responsive {
    max-width: 100%;
  }
}

@media (min-width: 576px) {
  .panel {
    display: -webkit-flex;
    -webkit-align-items: center;
    align-items: center;
    display: flex;

    .col-6 {
      width: 50%;
    }
  }
}
</style>