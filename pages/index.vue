<template lang="pug">
.index
  section#top
    TopAnimation
    .top-text
      h3 ”オタクコンテンツ”と”IT技術”のコラボレーションで生まれる無数の未来を創造します.
  #sub
    .profile
      Profile
    .news
      h2 NEWS
      ul
        li(v-for="article in article", :key="article.slug")
          nuxt-link(:to="'/news/' + article.slug")
            p.news_title {{ article.title }}
  section#about
    .l-content
      FadeInAnimation
        h2 ABOUT
      p 自己紹介
      nuxt-link.top-btn(to="/about") MORE
  section#works
    .r-content
      FadeInAnimation
        h2 WORKS
      p 活動遍歴
      nuxt-link.top-btn(to="/works") MORE
  section#media
    .l-content
      FadeInAnimation
        h2 Link/SNS
      p 活動メディア
      nuxt-link.top-btn(to="/media") MORE
  section#contact
    .c-content
      FadeInAnimation
        h2 CONTACT
      p お問い合わせ
      nuxt-link.top-btn(to="/contact") SEND
  .scroll
    a.scroll(href="#about")
      span
</template>

<script>
import TopAnimation from "~/components/TopAnimation.vue";
import FadeInAnimation from "~/components/FadeInAnimation.vue";
import Profile from "~/components/Profile.vue";

export default {
  components: {
    TopAnimation,
    FadeInAnimation,
    Profile,
  },
  async asyncData({ $content }) {
    const article = await $content("articles")
      .limit(2)
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      article,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/media_query.scss";

#sub {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 200px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 20px;
  .profile {
    text-align: center;
    @include mq(md) {
      grid-area: 1 / 1 / 3 / 2;
    }
    @include mq(mdd) {
      grid-area: 1 / 1 / 2 / 3;
    }
  }
  .news {
    @include mq(md) {
      grid-area: 1 / 2 / 3 / 3;
      padding-top: 40px;
    }
    @include mq(mdd) {
      grid-area: 2 / 1 / 3 / 3;
      padding-left: 40px;
    }
    @include mq(ssm) {
      font-size: 14px;
    }
    li {
      padding: 15px 0 0;
      line-height: 1.5;
      list-style: none;
      margin-left: -40px;
      a {
        color: rgb(47, 120, 255);
        text-decoration: none;
      }
    }
  }
}

/**
 * スクロール矢印
 */

.scroll {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 1em;
  width: 3em;
  height: 3em;
  span {
    width: 1em;
    height: 1em;
    position: absolute;
    top: 25%;
    left: 33%;
    transform: translateY(0) rotate(-45deg);
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    animation: popping-arrow 2s infinite ease-out;
  }
  &:hover span {
    transform: translateY(0.5em) rotate(-45deg);
    animation: paused;
  }
}

@keyframes popping-arrow {
  0% {
    transform: translateY(0) rotate(-45deg);
  }
  30% {
    transform: translateY(0.5em) rotate(-45deg);
  }
  60% {
    transform: translateY(0) rotate(-45deg);
  }
}

section {
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  position: relative;
  .top-btn {
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 1rem 2rem;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: #212529;
    border-radius: 0.5rem;
    border: 2px solid #000;
    border-radius: 0;
    background: #fff;
    -webkit-box-shadow: 4px 4px 0 #000;
    box-shadow: 4px 4px 0 #000;
  }
  .top-btn:hover {
    -webkit-box-shadow: 4px 4px 0 #868686;
    box-shadow: 4px 4px 0 #868686;
    color: #fff;
    background: #000;
  }
  .top-text {
    font-size: 1.15rem;
    color: #000;
    position: absolute;
    top: 60%;
    left: 50%;
    width: 100%;
    padding: 0 10px 0 10px;
    transform: translate(-50%, -50%);
    text-align: center;
    max-width: 500px;
  }
  .l-content {
    // div要素内で左下に文字配置
    position: absolute;
    left: 15vw;
    bottom: 150px;
  }
  .r-content {
    text-align: right;
    // div要素内で右下に文字配置
    position: absolute;
    right: 15vw;
    top: 150px;
  }
  .c-content {
    // div要素内で中央に文字配置
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  h2 {
    font-size: 3em;
    font-weight: bold;
    color: #fff;
  }
  p {
    font-size: 1.5em;
    color: #fff;
  }

  a {
    margin-top: 20px;
  }
}

#top {
  height: 100vh;
  background-image: url("/img/top.webp");
}
#about {
  height: 70vh;
  background-image: -webkit-linear-gradient(
      30deg,
      #a50052 50%,
      rgba(255, 255, 255, 0) 50%
    ),
    url("/img/about.webp");
}
#works {
  height: 70vh;
  background-image: -webkit-linear-gradient(
      30deg,
      rgba(255, 255, 255, 0) 50%,
      #4cbfff 50%
    ),
    url("/img/works.webp");
}
#media {
  height: 70vh;
  background-image: -webkit-linear-gradient(
      30deg,
      #006421 50%,
      rgba(255, 255, 255, 0) 50%
    ),
    url("/img/media.webp");
  // 高さに合わせる
  background-size: auto;
}
#contact {
  height: 70vh;
  &:before {
    /* 透過させた黒を重ねる */
    background-color: rgba(75, 75, 75, 0.5);
    /* どの範囲に重ねるかを指定 */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 70vh;
    content: " ";
  }
  background-image: url("/img/contact.webp");
}

#top-anime {
  // center podition
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  padding: 15px;
  filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.8));
  @include mq(ssm) {
    width: 100%;
  }
  @include mq(sm) {
    width: 90%;
  }
  @include mq(md) {
    width: 80%;
  }
  @include mq(lg) {
    width: 60%;
  }
}
</style>
