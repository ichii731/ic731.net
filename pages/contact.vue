<template lang="pug">
.page
  TopHead(color="#65318e")
    h1 CONTACT
  .contact
    .content
      p 市井(@ichii731)が管理・開発・運用している全てのサービスとソフトウェアに関するご連絡,並びに当方自身へのご連絡をこちらにてお受け致します.
      p ※「オタク総研」に関するプロモーション・広告・情報提供などのご連絡は極力0115765.com内の問い合わせフォームよりお願いします.
      p ご返信は3日を目安に@outlook.jpから始まるメールアドレスにてお送り致します.ドメイン指定受信設定をご確認下さい.
    .form
      iframe(src="https://docs.google.com/forms/d/e/1FAIpQLSfPzOZ1iXekcknbV3Q4aUPG0KMrZOAUU8WJ0AUA8II_dhR0qQ/viewform?embedded=true",
      width="100%", height="1650", frameborder="0",
      marginheight="0",marginwidth="0") 読み込んでいます…
    p ※確実な問い合わせの担保と静的ホスティングの都合上Googleフォームを利用しております
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
