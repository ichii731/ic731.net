<template lang="pug">
.page
  TopHead(color="#4cbfff")
    h1 WORKS
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
