<template>
  <section>
    <header>
      <h2>ご加入をご希望の方やご質問・ご相談は下記まで</h2>
    </header>
    <div class="contact-list">
      <div v-for="contact in contancts" :key="contact.id" class="concant-box">
        <img :src="getIcon(contact.icon)" />
        <div>{{ contact.id }}</div>
        <div>{{ contact.name }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contancts: {
      type: Array,
      required: true
    }
  },
  methods: {
    getIcon(icon) {
      if (icon === 'google') return require('@/assets/img/google.png')
      return require('@/assets/img/twitter.png')
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  header {
    h2 {
      color: $main-font-color;
      text-align: center;
    }
  }

  .contact-list {
    .concant-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 1.5rem auto;

      img {
        height: 1.5rem;
      }

      @media screen and (max-width: $sp-break-point) {
        flex-flow: column wrap;

        img {
          height: 2rem;
        }
      }
    }
  }
}
</style>
