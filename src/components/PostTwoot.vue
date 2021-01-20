<template>
  <div class="new-twoot">
    <form method="POST" @submit.prevent="newTwoot" :class="{ 'long-twoot': getTwootLength > 260 }">
      <div class="pos-rel">
        <textarea name="new-twoot" id="newTwoot" rows="7" placeholder="New Twoot!" v-model="state.newTwootContent"></textarea>
        <div class="pos-abs">
          <span>({{ getTwootLength }}/260)</span>
          <button type="submit" title="Post New Twoot">Twoot!</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  name: "PostTwoot",

  setup(props, ctx) {
    const state = reactive({
      newTwootContent: ""
    })

    const getTwootLength = computed(() => {
      return state.newTwootContent.trim().length;
    })

    function newTwoot() {
      if (getTwootLength.value) {
        ctx.emit('createTwoot', state.newTwootContent.trim());
        state.newTwootContent = "";
      } else {
        alert("Twoot cannot be empty!")
      }
    }

    return {
      state,
      getTwootLength,
      newTwoot
    }
  }
}
</script>

<style lang="scss" scoped>
.new-twoot {
  margin-top: 25px;

  .long-twoot {
    textarea {
      outline: 1px solid red;
    }

    .pos-abs span, .pos-abs button {
      background-color: white;
      color: red;
    }
  }
  
  .pos-rel {
    position: relative;

    textarea {
      width: 100%;
      border-radius: .5em;
      padding: 3px 5px;
    }

    .pos-abs {
      position: absolute;
      right: 0px;

      span {
        margin-right: 10px;
        padding: 2px 5px;
      }

      button {
        padding: 3px 7px;

        &:hover {
          background-color: #42b983;
          color: white;
        }
      }
    }
  }
}
</style>