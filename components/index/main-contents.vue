<template>
  <div>
    <section>
      <h2>どんな目的で加入するの？</h2>
      <p>
        わからないことを質問する場に<br />
        日々の勉強や仕事で得た知識のアウトプットに<br />
        オンラインの勉強部屋で視野を広げたい
      </p>
    </section>
    <hr />
    <section>
      <h2>使用ツール</h2>
      <ul class="tool-list">
        <li class="image-icon slack-icon">Slack</li>
        <li class="image-icon whereby-icon">Wheareby</li>
        <li class="image-icon harigami-icon">Harigami</li>
        <li class="image-icon hangout-icon">Google ハングアウト</li>
      </ul>
    </section>
    <hr />
    <section>
      <h2>
        Ismet メンバー<br />
        <span>一部のメンバーを抜粋しております</span>
      </h2>
      <div class="member-list">
        <member-card
          v-for="(member, index) in members"
          :key="index"
          :hoge="member"
        />
      </div>
    </section>
  </div>
</template>

<script>
import memberCard from '@/components/index/member-card.vue'

export default {
  components: { memberCard },
  computed: {
    members() {
      return Array.from(new Array(3))
    }
  }
}
</script>

<style lang="scss" scoped>
div,
p {
  text-align: center;
  font-size: 1rem;
  color: $main-font-color;
}

p {
  line-height: 2rem;
}

hr {
  margin: 5%;
  color: $main-border-color;
}

section {
  margin: 1%;

  h2 {
    font-size: 1.2rem;

    span::before {
      content: '※';
    }
    span {
      font-size: 0.5rem;
    }
  }

  ul {
    list-style: none;
    padding-left: 30%;

    .slack-icon {
      background: url('~assets/img/slack.png') left 0px top 3px no-repeat;
    }

    .whereby-icon {
      background: url('~assets/img/whereby.png') left 0px top 3px no-repeat;
    }

    .harigami-icon {
      background: url('~assets/img/harigami.gif') left 0px top 3px no-repeat;
    }

    .hangout-icon {
      background: url('~assets/img/hangout.png') left 0px top 3px no-repeat;
    }

    .image-icon {
      background-size: 1rem auto;
      line-height: 1rem;
      text-align: left;
      padding-left: 1.5rem;
    }

    @media screen and (min-width: $sp-break-point + 1) {
      padding-left: 45%;
    }
  }
}

.member-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>
