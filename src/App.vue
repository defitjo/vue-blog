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
import journals from './components/journals.vue';
import newJournal from './components/newJournal.vue';
import journalOne from './components/journalOne.vue';

export default {
  components: {
    'app-header': header,
    'app-footer': footer,
    'new-journal': newJournal,
    'view-journal': journals,
    'journal-one': journalOne,
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
