<template>
  <div id="new-journal">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/new" class="link">New Post</router-link>
    <form v-if="!added">
      <h2>Create New Post</h2>
      <label>Title:</label>
      <input type="text" v-model="journal.title" required>
      <label>Author:</label>
      <input type="text" v-model="journal.author" required>
      <div id="categories">
        <p>Categories:</p>
        <label>Family</label>
        <input type="checkbox" value="Family" v-model="journal.categories">
        <label>Food</label>
        <input type="checkbox" value="Food" v-model="journal.categories">
        <label>Travel</label>
        <input type="checkbox" value="Travel" v-model="journal.categories">
      </div>
      <label>Content:</label>
      <textarea v-model.trim="journal.content"></textarea>
      <button v-on:click.prevent="post">Add Post</button>
    </form>
    <div v-if="added">
      <h2>Post Added!</h2>
    </div>
    <div id="view">
      <h2>Post Preview</h2>
      <p>Title: {{ journal.title }}</p>
      <p>Author: {{ journal.author }}</p>
      <p>Categories:</p>
      <ul>
        <li v-for="category in journal.categories">{{ category }}</li>
      </ul>
      <p>Content:</p>
      <p>{{ journal.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      journal: {
        title: '',
        author: '',
        categories: [],
        content: '',
      },
      added: false,
    };
  },
  methods: {
    post() {
      this.$http.post('https://vue-js-practice-b5437.firebaseio.com/posts.json', this.journal).then(function(data) {
        this.added = true;
      });
    },
  },
};
</script>

<style lang="scss">
$palePink: #f1ab86;
#new-journal * {
  box-sizing: border-box;
}

#new-journal {
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
