<template lang="pug">
.page
  TopHead(color="#65318e")
    h1 CONTACT
  .contact
    iframe(src="https://docs.google.com/forms/d/e/1FAIpQLSfPzOZ1iXekcknbV3Q4aUPG0KMrZOAUU8WJ0AUA8II_dhR0qQ/viewform?embedded=true",
    width="100%", height="1650", frameborder="0",
    marginheight="0",marginwidth="0") 読み込んでいます…
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
