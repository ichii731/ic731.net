<template lang="pug">
.head(:style="SetColor")
  .top
    h1 {{ title }}
</template>

<script>
export default {
  name: 'TopHead',
  props: [
    'title',
    'color',
  ],
  computed: {
    SetColor() {
      return {
        '--color': this.color,
      };
    },
  },
}
</script>

<style lang="scss" scoped>
.head {
  position: relative;
  color: #fff;
  min-height: 30vh;
  background: var(--color);
  .top {
    // 上下中央・左端に寄せる
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    h1 {
      font-size: 3rem;
      padding-bottom: 1rem;
    }
  }
}
</style>
