<template lang="pug">
.index
  section#top
    TopAnimation
  section#home
  section#about
  section#portfolio
  section#contact

  .scroll
    a.scroll(href="#home")
      span
  //.one
    .buttom
      p test
  //.two
    .buttom
      p test
  //.three
  //.four
  //.five
  //.six
  //.seven
</template>

<script>
import TopAnimation from "~/components/TopAnimation.vue";
export default {
  components: {
    TopAnimation,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/media_query.scss";
* {
  text-align: center;
}

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
    content: " ";
  }
  background-image: url("https://pbs.twimg.com/media/FJJv2_UaUAY2nbj?format=jpg&name=large");
}

#home {
  background-image: url("https://res.cloudinary.com/kokkieh/image/upload/v1441711699/building-925757_1920_e7zlcl.jpg");
}
#about {
  background-image: url("https://res.cloudinary.com/kokkieh/image/upload/v1441711721/glass-909264_1920_kj77yx.jpg");
}
#portfolio {
  background-image: url("https://res.cloudinary.com/kokkieh/image/upload/v1441711717/building-922529_1920_icicwy.jpg");
}
#contact {
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

/*
.one {
  background-color: #013a6b;
  background-image: -webkit-linear-gradient(
      30deg,
      #013a6b 50%,
      rgba(255, 255, 255, 0.5) 50%
    ),
    url("https://0115765.com/wp-content/uploads/2021/09/%E7%94%BB%E5%83%8F_2021-09-19_203031.png");
  background-position: inherit;
  min-height: 100vh;

  .buttom {
    p {
      color: darkblue;
      text-align: right;
    }
  }
}
.two {
  background-color: #34adff;
  background-image: -webkit-linear-gradient(150deg, #34adff 35%, #4cbfff 35%);
  min-height: 100vh;
}

.three {
  background-color: #efeeef;
  min-height: 260px;
}
.four {
  background-color: #e0e0e0;
  min-height: 260px;
}
.five {
  background-color: #efeeef;
  min-height: 260px;
}

.six {
  background-color: #34adff;
  background-image: -webkit-linear-gradient(30deg, #34adff 45%, #4cbfff 45%);
  min-height: 400px;
}
.seven {
  background-color: #013a6b;
  background-image: -webkit-linear-gradient(150deg, #013a6b 35%, #004e95 35%);
  min-height: 200px;
}
*/
</style>
