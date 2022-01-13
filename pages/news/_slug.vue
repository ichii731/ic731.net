<template lang="pug">
.news
  article.content
      h2 {{ article.title }}
      p {{ article.description }}
      p last update: {{ formatDate(article.createdAt) }}
      nuxt-content(:document="article")
  .return
    nuxt-link(to='/news')
      p Return to the News Top
</template>

<script>
export default {
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ja', options)
    }
 },
  async asyncData({ $content, params }) {
    // Sort & Get
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
};
</script>
