<template lang="pug">
.page
  TopHead(color="#006421")
    h1 TERMS
  .contact
</template>

<script>
import TopHead from '~/components/TopHead.vue';
export default {
  name: 'contact',
  components: {
    TopHead,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 900px;
}
</style>
