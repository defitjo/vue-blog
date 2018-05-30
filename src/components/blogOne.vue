<template>
  <div id="blog-one">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/new" class="link">New Post</router-link>
    <h1>{{ blog.title }}</h1>
    <p>Author: {{ blog.author }}</p>
    <ul>
      <li v-for="category in blog.categories">{{ category }}</li>
    </ul>
    <section>{{ blog.content }}</section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http.get('https://vue-js-practice-b5437.firebaseio.com/posts/' + this.id + '.json')
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  },
};
</script>

<style lang="scss">
$palePink: #f1ab86;

#blog-one {
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
