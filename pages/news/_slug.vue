<template lang="pug">
.page
  TopHead(color="#000")
    h1 NEWS
  .news
    h2.title {{ article.title }}
    p 更新日: {{ formatDate(article.createdAt) }}
    article
      nuxt-content(:document="article")
    .return
      MultiplexAd
      hr
      nuxt-link(to="/news")
        p 一覧に戻る>>
</template>

<script>
import TopHead from "~/components/TopHead.vue";
import MultiplexAd from "~/components/MultiplexAd.vue";
export default {
  name: "News",
  components: {
    TopHead,
    MultiplexAd,
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("ja", options);
    },
  },
  async asyncData({ $content, params }) {
    // Sort & Get
    const article = await $content("articles", params.slug).fetch();
    return { article };
  },
  head() {
    return {
      title: this.article.title + " | @ichii731 Portfolio",
      description: this.article.description,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/md.scss";
.news {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 900px;
}
.return {
  padding-top: 2rem;
}
.title {
  font-weight: bold;
}
</style>
