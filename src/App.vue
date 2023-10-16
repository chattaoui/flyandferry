<template>
  <navbar v-if="!this.$route.meta.hideNavbar" />
  <router-view/>
</template>

<script>
  import navbar from "./components/navbar.vue"
  
  export default {

        components: {navbar}
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(25, 51, 84);
}

nav {
  a {
    font-weight: bold;
    color: rgb(25, 51, 84);

    &.router-link-exact-active {
      color: rgb(25, 51, 84);
    }
  }
}
</style>
