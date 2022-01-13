<template lang="pug">
.news-top
  .news-list
    ul
      li(v-for="article in article" :key="article.slug")
        nuxt-link(:to="'/news/' + article.slug")
          p {{ article.title }} / {{ formatDate(article.createdAt)}}
  .return
    nuxt-link(to='/')
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
