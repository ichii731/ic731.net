<template lang="pug">
.news-top
  h1 NEWS Topics
  .news-list
    ul
      li(v-for="article in article", :key="article.slug")
        nuxt-link(:to="'/news/' + article.slug")
          p {{ article.title }} / {{ formatDate(article.createdAt) }}
  .return
    nuxt-link(to="/")
      p Return to the top
</template>

<script>
export default {
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("ja", options);
    },
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
.news-top {
  h1 {
    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
    // underline
    border-bottom: 1px solid #ccc;
    // 斜体
    font-style: italic;

  }
  width: 80%;
  margin: 0 auto;
  max-width: 500px;
}
</style>
