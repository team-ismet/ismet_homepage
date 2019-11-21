<template>
  <div class="top-page-box">
    <caption-image />
    <main-contents />
    <open-channels :channels="openChannels" />
    <inquiry-contacts :contancts="inquiryContacts" />
    <footer>
      <img :src="require('@/assets/img/logo_side.png')" />
      <p>©︎ Ismet community 2019</p>
    </footer>
  </div>
</template>

<script>
import captionImage from '@/components/index/caption-image.vue'
import mainContents from '@/components/index/main-contents.vue'
import openChannels from '@/components/index/open-channels.vue'
import inquiryContacts from '@/components/index/inquiry-contacts.vue'

import openChannelArray from '@/assets/js/opne-channel.js'
import contactArray from '@/assets/js/inquriy-contacts.js'

export default {
  components: { captionImage, mainContents, openChannels, inquiryContacts },
  computed: {
    openChannels() {
      return openChannelArray
    },
    inquiryContacts() {
      return contactArray
    }
  }
}
</script>

<style lang="scss" scoped>
.top-page-box {
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #6d6767;

    img {
      height: 5rem;
    }
  }
}
</style>
