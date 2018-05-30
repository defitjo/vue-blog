<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from './components/header.vue';
import footer from './components/footer.vue';
import blogs from './components/blogs.vue';
import newBlog from './components/newBlog.vue';

export default {
  components: {
    'app-header': header,
    'app-footer': footer,
    'new-blog': newBlog,
    'main-blogs': blogs,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
