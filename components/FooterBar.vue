<template lang="pug">
footer
  p © 2021 ichii731
  b
    nuxt-link(to="/terms") 共通利用規約
    |  /&nbsp;
    a(href="https://stats.uptimerobot.com/WKWREf60Qp", target="_blank", rel="noopener noreferrer") サービス稼働状況
    |  /&nbsp;
    nuxt-link(to="/contact") Contact
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style lang="scss" scoped>
footer {
  a {
    color: #fff;
    text-decoration: none;
  }
  /* just for demo */
  background-color: #2c2c2c;
  color: #ffffff;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  text-align: center;
  width: 100%;
}
</style>
