<template>
  <div id="new-blog">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/new" class="link">New Post</router-link>
    <h2 v-if="!added">Create New Post</h2>
    <form>
      <label>Title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Author:</label>
      <input type="text" v-model="blog.author" required>
      <div id="categories">
        <p>Categories:</p>
        <label>Family</label>
        <input type="checkbox" value="family" v-model="blog.categories">
        <label>Food</label>
        <input type="checkbox" value="food" v-model="blog.categories">
        <label>Travel</label>
        <input type="checkbox" value="Travel" v-model="blog.categories">
      </div>
      <label>Content:</label>
      <textarea v-model.trim="blog.content"></textarea>
      <button v-on:click.prevent="post">Add Post</button>
    </form>
    <div v-if="added">
      <h2>Your Post has added</h2>
    </div>
    <div id="view">
      <h2>Post Preview</h2>
      <p>Title: {{ blog.title }}</p>
      <p>Author: {{ blog.author }}</p>
      <p>Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Content:</p>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        author: '',
        categories: '',
        content: '',
      },
    };
  },
  methods: {
    post() {
      this.$http.post('https://vue-js-practice-b5437.firebaseio.com/posts.json', this.blog).then(function(data) {
        this.submitted = true;
      });
    },
  },
};
</script>

<style lang="scss">
#new-blog * {
  box-sizing: border-box;
}

#new-blog {
  margin: 20px auto;
}
</style>

