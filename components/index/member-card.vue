<template>
  <section class="member-card">
    <header>
      <img :src="memberInfo.icon" />
      <h3>{{ memberInfo.name }}</h3>
    </header>
    <dl>
      <template v-for="detail in Object.keys(memberInfo.details)">
        <div :key="detail" class="member-detail">
          <dt>{{ detail }}</dt>
          <dd>{{ memberInfo.details[detail] }}</dd>
        </div>
      </template>
    </dl>
  </section>
</template>

<script>
import testMember from '@/static/test/default-member.json'

export default {
  porps: {
    member: {
      type: Object,
      default: null
    }
  },
  computed: {
    memberInfo() {
      return this.member || testMember
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  color: #fff;

  header {
    img {
      position: absolute;
      top: -1.5rem;
      left: -1.5rem;
      height: 10rem;
      width: 10rem;
      border-radius: 5rem;
    }

    h3 {
      border-bottom: 5px solid #fff;
      margin: 5%;
      padding-right: 1rem;
      line-height: 3rem;
      text-align: right;
    }
  }
  .member-detail {
    display: flex;
    margin: 10%;

    dd {
      white-space: pre-wrap;
    }
  }
}

.member-card {
  padding-top: 6rem;
  position: relative;
  background-color: #86b2f8;
  border-radius: 2rem;
  margin: 1.5rem;
  margin-top: 2rem;
  min-width: 20rem;
}
</style>
