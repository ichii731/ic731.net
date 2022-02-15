<template lang="pug">
.page
  TopHead(color="#000")
    h1 NEWS
  .news
    h2 {{ article.title }}
    p 更新日: {{ formatDate(article.createdAt) }}
    hr
    article
      nuxt-content(:document="article")
    .return
      nuxt-link(to="/news")
        p Return to the News Top
</template>

<script>
import TopHead from '~/components/TopHead.vue';
export default {
  name: 'News',
  components: {
    TopHead,
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
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/md.scss';
.news {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 900px;
}
</style>
