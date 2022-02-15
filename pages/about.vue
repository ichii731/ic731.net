<template lang="pug">
.page
  TopHead(color="#a50052")
    h1 ABOUT
  .about
    NuxtContent(:document="post")
</template>

<script>
import TopHead from "~/components/TopHead.vue";
export default {
  name: "contact",
  components: {
    TopHead,
  },
  async asyncData({ $content }) {
    return {
      post: await $content("page/about").fetch(),
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
}
</style>
