<template lang="pug">
.index
  section#top
    TopAnimation
  .newslist(data-trigger)
    h2 NEWS
    ul
      li(v-for="article in article", :key="article.slug")
        nuxt-link(:to="'/news/' + article.slug")
          p {{ article.title }}
  section#home(data-trigger)
    .l-content
      h2 ABOUT
      p 自己紹介
      a.btn.btn-border(href="#about") MORE
  section#about(data-trigger)
    .r-content
      h2 WORKS
      p 作品紹介
      a.btn.btn-border(href="#about") MORE
  section#portfolio(data-trigger)
    .l-content
      h2 Link/SNS
      p 活動メディア
      a.btn.btn-border(href="#about") MORE
  section#contact(data-trigger)
    .c-content
      h2 CONTACT
      p お問い合わせ
      a.btn.btn-border(href="#about") MORE

  .scroll
    a.scroll(href="#home")
      span
</template>

<script>
import TopAnimation from "~/components/TopAnimation.vue";
//import ScrollTrigger from "@terwanerik/scrolltrigger";
//const trigger = new ScrollTrigger();
//trigger.add("[data-trigger]");

export default {
  components: {
    TopAnimation,
  },
  async asyncData({ $content }) {
    // 記事を全て取得（作成日で降順にソート）
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

.newslist {
  max-width: 500px;
  margin: auto;
  margin-top: 20px;
  h2 {
    text-align: center;
  }
}

@include mq(ssm) {
  .newslist {
    font-size: 14px;
    padding: 0 10px;
  }
}

.newslist li {
  padding: 15px 15px;
  line-height: 1.5;
  list-style: none;
  margin-left: -40px;
}

.newslist li a {
  color: rgb(47, 120, 255);
  text-decoration: none;
}

.btn,
a.btn,
button.btn {
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
}
a.btn-border {
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  -webkit-box-shadow: 4px 4px 0 #000;
  box-shadow: 4px 4px 0 #000;
}

a.btn-border:hover {
  -webkit-box-shadow: -4px -4px 0 #000;
  box-shadow: -4px -4px 0 #000;
}

/**
 * スクロール矢印
 */

.scroll {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 2em;
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
  height: 100vh;
  position: relative;
  .l-content {
    // div要素内で左下に文字配置
    position: absolute;
    left: 10vw;
    bottom: 200px;
  }
  .r-content {
    text-align: right;
    // div要素内で右下に文字配置
    position: absolute;
    right: 10vw;
    top: 200px;
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
  &:before {
    /* 透過させた黒を重ねる */
    background-color: rgba(201, 201, 201, 0.8);
    /* どの範囲に重ねるかを指定 */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    content: " ";
  }
  background-image: url("https://0115765.com/wp-content/uploads/2021/09/%E7%94%BB%E5%83%8F_2021-09-19_203031.png");
}

#home {
  background-image: -webkit-linear-gradient(
      30deg,
      #013a6b 50%,
      rgba(255, 255, 255, 0) 50%
    ),
    url("https://res.cloudinary.com/kokkieh/image/upload/v1441711699/building-925757_1920_e7zlcl.jpg");
}
#about {
  background-image: -webkit-linear-gradient(
      30deg,
      rgba(255, 255, 255, 0) 50%,
      #4cbfff 50%
    ),
    url("https://res.cloudinary.com/kokkieh/image/upload/v1441711721/glass-909264_1920_kj77yx.jpg");
}
#portfolio {
  background-image: -webkit-linear-gradient(
      30deg,
      #006421 50%,
      rgba(255, 255, 255, 0) 50%
    ),
    url("https://res.cloudinary.com/kokkieh/image/upload/v1441711717/building-922529_1920_icicwy.jpg");
}
#contact {
  &:before {
    /* 透過させた黒を重ねる */
    background-color: rgba(75, 75, 75, 0.5);
    /* どの範囲に重ねるかを指定 */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    content: " ";
  }
  background-image: url("https://res.cloudinary.com/kokkieh/image/upload/v1441711695/window-855371_1920_mkw8de.jpg");
}

#top-anime {
  // center podition
  position: absolute;
  top: 50%;
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
