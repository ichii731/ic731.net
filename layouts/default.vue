<template lang="pug">
.site
  NavBar
  .siteContent
    nuxt
  FooterBar
</template>

<script>
import FooterBar from "~/components/FooterBar.vue";
import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    FooterBar,
    NavBar,
  },
};
</script>

<style>
@import "~/assets/icons/style.css";
</style>
