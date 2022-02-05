<template lang="pug">
.head(:style="SetColor")
  .top
    slot
</template>

<script>
export default {
  name: "TopHead",
  props: ["color"],
  computed: {
    SetColor() {
      return {
        "--color": this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/media_query.scss";

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
    @include mq(ssm) {
      left: 40%;
    }
    transform: translate(-50%, -50%);
    h1 {
      font-size: 3rem;
      padding-bottom: 1rem;
    }
  }
}
</style>
