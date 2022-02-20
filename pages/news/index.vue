<template lang="pug">
.news-top
  TopHead(color="#000")
    h1 NEWS
  .news-list
    p 更新情報などを掲載しています.（最新10件を表示）
    ul
      li(v-for="article in article", :key="article.slug")
        nuxt-link(:to="'/news/' + article.slug")
          p {{ article.title }} / {{ formatDate(article.createdAt) }}
    hr
    nuxt-link(to="/")
      p トップに戻る>>
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
      .limit(10)
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      article,
    };
  },
  head() {
    return {
      title: "NEWS",
    };
  },
};
</script>

<style lang="scss" scoped>
.news-list {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 500px;
  li {
    padding: 15px 0 0;
    line-height: 1.5;
    list-style: none;
    margin-left: -40px;
    a {
      color: rgb(47, 120, 255);
      text-decoration: none;
    }
  }
}
</style>
