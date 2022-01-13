<template lang="pug">
// https://dev.ore-shika.com/post/nuxtjs-release-hamburger/#i-6
nav
  input#menu-toggler.toggler(
    type="checkbox",
    ref="menu",
    v-on:change="show = !show"
  )
  .hamburger(:class="{ open: show }")
    div(:class="{ open: show }")
  .menu(:class="{ open: show }")
    ul
      li(v-for="content in contents")
        nuxt-link(:to="content.to", v-on:click.native="to") {{content.title}}
</template>

<style lang="scss" scoped>
/* MENU */
.toggler {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
}

.hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  background: rgba(0, 128, 128, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Hamburger Line */

.hamburger > div {
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
}

/* Top and Bottom Lines */

.hamburger > div::before,
.hamburger > div::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: inherit;
}

/* Move Lines Down */
.hamburger > div::after {
  top: 10px;
}

/* Toggler animate */

.toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}

/* Transform lines to X */

.toggler:checked + .hamburger > div::before,
.toggler:checked + .hamburger > div::after {
  top: 0;
  transform: rotate(90deg);
  transition: transform 0.25s ease;
}

.menu {
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: none;
  opacity: 0;
  &.open {
    visibility: visible;
    opacity: 1;
    transition: opacity 1s ease;
  }
}

.menu > ul > li {
  list-style: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem;
  a {
    text-decoration: none;
    color: #ffffff;
  }
}
</style>

<script>
export default {
  data() {
    return {
      show: false,
      contents: [
        { to: '/', title: 'Home' },
        { to: '/news/', title: 'News' },
        { to: '/services/', title: 'Services' },
        { to: '/contact/', title: 'Contact' }
      ],
    };
  },
  methods: {
    to() {
      this.show = false;
      this.$refs.menu.checked = false;
    },
  },
};
</script>
