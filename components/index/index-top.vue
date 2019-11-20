<template>
  <section>
    <img :src="require('@/assets/img/logo_ver.png')" />
    <h1>
      エンジニア・デザイナーのためのコミュニティ
    </h1>
    <p>分野も変われば、熟練者も初学者</p>
    <p>
      わからなくて当たり前<br />
      目まぐるしく変化していくこの業界で、手を取り合って強かに生きていきましょう
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

section {
  width: 100%;
  background-image: url('~assets/img/ismet_top_header.png');
  background-size: cover;
  padding: 4em 0 6em;
  text-align: center;
  color: #fff;

  img {
    width: 20%;
  }

  h1 {
    font-size: 2.3em;
    letter-spacing: 0.08em;
  }

  p:nth-of-type(1)::before {
    content: '';
    border-bottom: 2px solid #fff;
    position: absolute;
    left: 20rem;
    right: 20rem;
    top: 2.5em;
  }

  p:nth-of-type(2) {
    font-size: 1.3em;
    line-height: 1.7em;
  }

  /* タブレット用のブレークポイントは要検討 */
  @media screen and (max-width: 768px) {
    h1 {
      line-height: 1.2em;
      margin-bottom: 0.5em;
    }
    p:nth-of-type(1)::before {
      left: 15rem;
      right: 15rem;
    }
  }

  @media screen and (max-width: $sp-break-point) {
    img {
      width: 45%;
    }
    h1 {
      font-size: 1.5em;
    }
    p:nth-of-type(1) {
      font-size: 1.2em;
      margin-bottom: 3.5em;
    }
    p:nth-of-type(1)::before {
      left: 5rem;
      right: 5rem;
    }
    p:nth-of-type(2) {
      font-size: 1em;
    }
  }
}
</style>
