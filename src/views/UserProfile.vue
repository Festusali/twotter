<template>
  <div class="user-profile">
    <div class="user-details">
      <span>@{{ state.user.username }}</span>
    </div>
    <div v-if="state.user.isAdmin" class="admin-badge">
      Admin
    </div>
    <div class="user-followers">
      <strong>Followers:</strong> {{ followers }}
      <button class="follow-user" title="Follow" @click="followUser">+</button>
    </div>

    <post-twoot @createTwoot="createNewTwoot"></post-twoot>
  </div>

  <div class="twoots-wrapper">
    <h3 class="section-title">{{ fullName }} Twoots</h3>
    <twoot-item 
      v-for="twoot in state.user.twoots" :key="twoot.id"
      :fullName="fullName"
      :twoot="twoot"
      @favorite="toggleFavorite"
    ></twoot-item>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router'
import TwootItem from '@/components/TwootItem';
import PostTwoot from '@/components/PostTwoot';
import { users } from '@/assets/users'

export default {
  name: 'UserProfile',

  components: {
    TwootItem,
    PostTwoot
  },

  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId)


    let followers = ref(0)
    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0],
    })

    const fullName = computed(() => {
      return `${state.user.firstName} ${state.user.lastName}`
    })

    function followUser() {
      followers.value += 1
    }

    function toggleFavorite(id, username) {
      for (let i=0; i < state.user.twoots.length; i++) {
        if (state.user.twoots[i].id === id) {
          for (let index=0; index < state.user.twoots[i].favorites.length; index++) {
            if (state.user.twoots[i].favorites[index].user === username) {
              state.user.twoots[i].favorites.splice(index, 1);
              return;
            }
          }
          state.user.twoots[i].favorites.push(
            {
              id: state.user.twoots[i].favorites.length + 1,
              user: username,
              date: Date()
            }
          );
        }
      }
    }

    function createNewTwoot(content) {
      const twoot = {
        id: state.user.twoots.length + 1,
        content,
        date: Date(),
        favorites: []
      };
      state.user.twoots.unshift(twoot);
    }

    onMounted(followUser)

    return {
      state,
      fullName,
      followers,
      followUser,
      toggleFavorite,
      createNewTwoot,
      userId
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
    background-color: #12dc80;
    color: white;
    font-weight: bold;
    font-size: initial;
    display: inline-block;
    margin-top: 10px;
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
    color: #12dc80;
    border-radius: 50%;
    border: 1px solid #12dc80;
    margin-left: 15px;

    &:hover {
      background-color: #12dc80;
      color: white;
      border: 1px solid white;
    }
  }
}

.twoots-wrapper {
  background-color: #2c3e50;
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