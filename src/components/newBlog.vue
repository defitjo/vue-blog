<template>
  <div id="new-blog">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/new" class="link">New Post</router-link>
    <h2 v-if="!added">Create New Post</h2>
    <form>
      <label>Title:</label>
      <input type="text" v-model="blog.title" required>
      <label>Author:</label>
      <input type="text" v-model="blog.author" required>
      <div id="categories">
        <p>Categories:</p>
        <label>Family</label>
        <input type="checkbox" value="Family" v-model="blog.categories">
        <label>Food</label>
        <input type="checkbox" value="Food" v-model="blog.categories">
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
        categories: [],
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
$palePink: #f1ab86;
#new-blog * {
  box-sizing: border-box;
}

#new-blog {
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
  form {
    display: grid;
    label {
      padding: 10px 0 10px 0;
    }
    input[type=text] {
      width: 50%;
    }
    #categories input {
      cursor: pointer;
    }
    textarea {
      width: 100%;
      height: 150px;
      padding: 12px 20px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 5px;
      resize: none;
    }
    button {
      width: 20%;
      margin-top: 10px;
      padding: 10px;
      color: #fff;
      font-weight: 600;
      background: #28a745;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }
  }
}
</style>

