<template lang="pug">
.page
  TopHead(color="#a50052")
    h1 ABOUT
  .about
    .profile
      Profile
    NuxtContent(:document="post")
</template>

<script>
import TopHead from "~/components/TopHead.vue";
import Profile from "~/components/Profile.vue";

export default {
  name: "contact",
  components: {
    TopHead,
    Profile,
  },
  async asyncData({ $content }) {
    return {
      post: await $content("page/about").fetch(),
    };
  },
  head() {
    return {
      title: "ABOUT | @ichii731 Portfolio",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/md.scss";

.about {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 900px;
  .profile {
    text-align: center;
  }
}
</style>
