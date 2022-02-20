<template lang="pug">
.page
  TopHead(color="#4cbfff")
    h1 WORKS
  .works
    NuxtContent(:document="post")
</template>

<script>
import TopHead from "~/components/TopHead.vue";
export default {
  name: "works",
  components: {
    TopHead,
  },
  async asyncData({ $content }) {
    return {
      post: await $content("page/works").fetch(),
    };
  },
  head() {
    return {
      meta: [{ name: "robots", content: "noindex" }],
      title: "WORKS | @ichii731 Portfolio",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/md.scss";
.works {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 900px;
}
</style>
