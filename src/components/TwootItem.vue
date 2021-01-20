<template>
  <div class="twoot">
    <div class="meta-description">
      <strong>{{ fullName }}</strong> — {{ twoot.date }}
    </div>
    <div class="twoot-details">
      {{ twoot.content }}
    </div>
    <div class="twoot-actions">
      <strong title="Total Favorites">{{ twoot.favorites.length }}</strong> <button title="Add Favorite" @click="favoriteTwoot(twoot.id, 'festus')">Favorite</button>

      <strong title="Total Retweets">7</strong> <button title="Retweet Twoot" @click="retweetTwoot(twoot.id)">Retweet</button>

      <strong title="Total Shares">2</strong> <button title="Share Twoot" @click="shareTwoot(twoot.id)">Share</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwootItem",
  props: {
    fullName: { type: String, required: true },
    twoot: { type: Object, required: true }
  },

  setup(props, ctx) {
    function favoriteTwoot(id, username) {
      ctx.emit('favorite', id, username)
    }

    function retweetTwoot(id) {
      console.log("Retweeted: ", id)
    }

    function shareTwoot(id) {
      console.log("Shared: ", id)
    }

    return {
      favoriteTwoot,
      retweetTwoot,
      shareTwoot
    }
  }
}
</script>

<style lang="scss" scoped>
.twoot {
  background-color: #1d2935;
  margin: 10px;
  padding: 25px 10px;
  border-radius: 5px;

  &:hover {
    padding: 25px 12px;
    outline: 1px solid white;
  }

  .meta-description {
    color: gray
  }

  .twoot-details {
    text-align: justify;
  }

  .twoot-actions {
    margin-top: 10px;

    button {
      padding: 3px 10px;
      margin-right: 15px;
      border-radius: 0.5em;

      &:hover {
        background-color: #42b983;
        color: white;
      }
    }
  }
}
</style>