<template lang="pug">
.page
  TopHead(title="NEWS", color="#000")
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
.news {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 900px;
}

::v-deep .nuxt-content {
  a {
    color: #0645ad;
    text-decoration: none;
  }

  a:visited {
    color: #0b0080;
  }

  a:hover {
    color: #06e;
  }

  a:active {
    color: #faa700;
  }

  a:focus {
    outline: thin dotted;
  }

  a:hover,
  a:active {
    outline: 0;
  }

  p {
    margin: 1em 0;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    color: #111;
    line-height: 1em;
  }

  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.2em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.9em;
  }

  blockquote {
    color: #666666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em #eee solid;
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #eee;
    margin: 1em 0;
    padding: 0;
  }

  pre,
  code,
  kbd,
  samp {
    color: #000;
    font-family: monospace, monospace;
    _font-family: "courier new", monospace;
    font-size: 0.98em;
  }

  pre {
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  b,
  strong {
    font-weight: bold;
  }

  ul,
  ol {
    margin: 1em 0;
    padding: 0 0 0 2em;
  }

  li p:last-child {
    margin: 0;
  }

  dd {
    margin: 0 0 0 2em;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td {
    vertical-align: top;
  }
}
</style>
