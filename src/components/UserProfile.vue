<template>
  <div class="user-profile">
    <div class="user-details">
      <span>@{{ state.user.username }}</span>
    </div>
    <span class="admin-badge" v-if="state.user.isAdmin">
      Admin
    </span>
    <div class="user-followers">
      <strong>Followers:</strong> {{ followers }}
      <button class="follow-user" title="Follow" @click="followUser">+</button>
    </div>

    <post-twoot @createTwoot="createNewTwoot"></post-twoot>
  </div>

  <div class="twoots-wrapper">
    <h3 class="section-title">{{ fullName }} Twoots</h3>
    <twoot-item 
      v-for="twoot in state.twoots" :key="twoot.id"
      :fullName="fullName"
      :twoot="twoot"
      @favorite="toggleFavorite"
    ></twoot-item>
  </div>
</template>

<script>
import TwootItem from './TwootItem';
import PostTwoot from './PostTwoot';
import { computed, onMounted, reactive, ref, watch } from 'vue';

export default {
  name: 'UserProfile',

  components: {
    TwootItem,
    PostTwoot
  },

  setup() {
    let followers = ref(0)
    const state = reactive({
      followers: 0,
      user: {
        id: 1,
        username: 'festus',
        firstName: 'Festus',
        lastName: 'Ali',
        email: 'festusali@gmail.com',
        isAdmin: true
      },
      twoots: [
        {
          id: 1,
          content: "First twoot by Festus.",
          date: "12/01/2021",
          favorites: [
            {id: 1, user: "festus1", date: "13/01/2021"},
            {id: 2, user: "festus_1", date: "15/01/2021"},
            {id: 3, user: "festus_11", date: "14/01/2021"},
            {id: 4, user: "festus11", date: "12/01/2021"}
          ]
        },
        {
          id: 2,
          content: "Second twoot by Festus.",
          date: "13/01/2021",
          favorites: [
            {id: 2, user: "festus", date: "12/01/2021"}
          ]
        },
        {
          id: 3,
          content: "Third twoot by Festus.",
          date: "14/01/2021",
          favorites: [
            {id: 5, user: "festus_1", date: "14/01/2021"},
            {id: 7, user: "festus1", date: "14/01/2021"}
          ]
        },
        {
          id: 4,
          content: "Fourth twoot by Festus.",
          date: "15/01/2021",
          favorites: [
            {id: 3, user: "festus1", date: "14/01/2021"},
            {id: 9, user: "festus", date: "14/01/2021"}
          ]
        }
      ]
    })

    const fullName = computed(() => {
      return `${state.user.firstName} ${state.user.lastName}`
    })

    function followUser() {
      followers.value += 1
    }

    function toggleFavorite(id, username) {
      for (let i=0; i < state.twoots.length; i++) {
        if (state.twoots[i].id === id) {
          for (let index=0; index < state.twoots[i].favorites.length; index++) {
            if (state.twoots[i].favorites[index].user === username) {
              state.twoots[i].favorites.splice(index, 1);
              return;
            }
          }
          state.twoots[i].favorites.push(
            {
              id: state.twoots[i].favorites.length + 1,
              user: username,
              date: Date()
            }
          );
        }
      }
    }

    function createNewTwoot(content) {
      const twoot = {
        id: state.twoots.length + 1,
        content,
        date: Date(),
        favorites: []
      };
      state.twoots.unshift(twoot);
    }

    onMounted(followUser)

    watch(followers, (newFollowerCount, oldFollowerCount) => {
      if (newFollowerCount > oldFollowerCount) {
        alert(`
          You are gaining followers!
          It used to be: ${oldFollowerCount}, it's now: ${ newFollowerCount}
        `)
      }
    })

    return {
      state,
      fullName,
      followers,
      followUser,
      toggleFavorite,
      createNewTwoot
    }
  }
}
</script>

<style lang="scss" scoped>
.user-profile {
  padding: 10px 15px;
  background-color: #2c3e50;

  .user-details span {
    font-size: 28px;
    font-weight: bold;
  }
  
  .admin-badge {
    background-color: rebeccapurple;
    color: white;
    font-weight: bold;
    font-size: initial;
    margin-right: auto;
    padding: 5px;
    border-radius: .5em;
  }

  .user-followers .follow-user {
    width: 30px;
    height: 30px;
    font-size: 25px;
    font-weight: bolder;
    background-color: white;
    color: blue;
    border-radius: 50%;
    border: 1px solid blue;
    margin-left: 15px;

    &:hover {
      background-color: blue;
      color: white;
      border: 1px solid white;
    }
  }
}

.twoots-wrapper {
  background-color: #2c3e50;
  margin: 15px 0;
  padding: 20px 0px;

  .section-title {
    text-align: center;
  }
}

@media (min-width:576px) {
  .user-profile {
    position: sticky;
    top: 5px;
    width: 200px;
    min-height: 300px;
    float: left;
  }

  .twoots-wrapper {
    margin-left: 240px;
    min-height: 600px;
  }
}
</style>