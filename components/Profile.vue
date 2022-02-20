<template lang="pug">
figure.profile
  .profile-image
    img(
      src="/img/icon.webp",
      alt="icon"
    )
  figcaption
    h3
      b 市井
    h5 メディア代表・Web開発者
    p
      | アニメ&IT特化個人メディア「オタク総研」運営代表・記者・Web開発者・大学1年
    p
      | "オタク×IT"をテーマに何でもやります!
    .icons
      a(v-for="link in links" target="_blank" rel="noopener noreferrer" :href="link.url")
        img(
          :src="link.src",
          :alt="link.name",
          :width="24",
          :height="24"
        )
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      links: [
        {
          name: "twitter",
          url: "https://twitter.com/ichii731",
          src: require("@/assets/svg/twitter.svg"),
        },
        {
          name: "instagram",
          url: "https://www.instagram.com/ichii731/",
          src: require("@/assets/svg/instagram.svg"),
        },
        {
          name: "gitHub",
          url: "https://github.com/ichii731",
          src: require("@/assets/svg/github.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
  display: inline-block;
  overflow: hidden;
  min-width: 250px;
  max-width: 410px;
  width: 100%;
  background-color: #ffffff;
  color: #2b2b2b;
  text-align: center;
  font-size: 16px;
  //box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

.profile .profile-image {
  padding: 15% 10% 0;
}

.profile .profile-image img {
  vertical-align: top;
  border-radius: 50%;
  max-width: 40%;
  // 中央に表示
  margin: 0 auto;
}

.profile figcaption {
  padding: 5% 10% 15%;
}

.profile h3 {
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  margin: 3px 0;
}

.profile h5 {
  margin: 0;
  padding-bottom: 10px;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 1px;
}

.profile .icons img {
  display: inline-block;
  margin-top: 5px;
  margin-right: 8px;
}
</style>
