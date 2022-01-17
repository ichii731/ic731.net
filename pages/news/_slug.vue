<template lang="pug">
.news
  h1 ARTICLE
  article.content
    h2 {{ article.title }}
    p {{ article.description }}
    p last update: {{ formatDate(article.createdAt) }}
    nuxt-content(:document="article")
  .return
    nuxt-link(to="/news")
      p Return to the News Top
</template>

<script>
export default {
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
};
</script>

<style lang="scss" scoped>
.news {
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
