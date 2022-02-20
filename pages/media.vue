<template lang="pug">
.page
  TopHead(color="#006421")
    h1 MEDIA
  .media
    NuxtContent(:document="post")
</template>

<script>
import TopHead from "~/components/TopHead.vue";
export default {
  name: "media",
  components: {
    TopHead,
  },
  async asyncData({ $content }) {
    return {
      post: await $content("page/media").fetch(),
    };
  },
  head() {
    return {
      title: "SNS&MEDIA | @ichii731 Portfolio",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/md.scss";
.media {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 900px;
}
</style>
