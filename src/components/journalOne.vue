<template>
  <div id="journal-one">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/new" class="link">New Post</router-link>
    <h1>{{ journal.title }}</h1>
    <p>Author: {{ journal.author }}</p>
    <ul>
      <li v-for="category in journal.categories">{{ category }}</li>
    </ul>
    <section>{{ journal.content }}</section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      journal: {},
    };
  },
  created() {
    this.$http.get('https://vue-js-practice-b5437.firebaseio.com/posts/' + this.id + '.json')
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.journal = data;
      });
  },
};
</script>

<style lang="scss">
$palePink: #f1ab86;

#journal-one {
  margin-left: 100px;
  max-width: 800px;
  .link {
    text-decoration: none;
    color: white;
    padding: 10px;
    margin: 0;
    background: complement($palePink);
    border-radius: 10px;
    font-weight: 700;
  }
}
</style>
