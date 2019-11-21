<template>
  <section>
    <header>
      <h2>開設しているチャンネル</h2>
    </header>
    <div class="channel-list">
      <ul v-for="(channelChunk, chinkIndex) in channelChunks" :key="chinkIndex">
        <li v-for="channel in channelChunk" :key="channel">
          {{ channel }}
        </li>
      </ul>
    </div>
    <footer>and more...</footer>
  </section>
</template>

<script>
import { chunk } from 'lodash'

const chunkCount = 9

export default {
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  computed: {
    channelChunks() {
      return chunk(this.channels, chunkCount)
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  color: #fff;
  background-color: #0310a8;
  padding: 1.5rem 0;

  header {
    h2 {
      text-align: center;
    }
  }

  .channel-list {
    ul {
      list-style: none;
      margin: auto 10%;
    }
  }

  @media screen and (min-width: $sp-break-point + 1) {
    .channel-list {
      display: flex;
      justify-content: space-around;

      ul {
        margin: 5%;
      }
    }
  }

  footer {
    text-align: right;
    padding-right: 5%;
  }
}
</style>
