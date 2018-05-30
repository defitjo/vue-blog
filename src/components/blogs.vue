<template>
  <div id="view-blog">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/new" class="link">New Post</router-link>
    <h1>My Posts</h1>
    <div id="search">
    <p>Search for post:</p>
    <input type="text" v-model="search" placeholder="search">
    </div>
    <div v-for="blog in findBlog" class="one">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2>{{ blog.title }}</h2>
      </router-link>
      <section>{{ blog.content | portion }}</section>
    </div>
  </div>
</template>

<script>
import findBlog from '../mixins/findBlog';

export default {
  data() {
    return {
      blogs: [],
      search: '',
    };
  },
  created() {
    this.$http.get('https://vue-js-practice-b5437.firebaseio.com/posts.json')
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        let myBlogs = [];
        for (let key in data) {
          data[key].id = key;
          myBlogs.push(data[key]);
        };
        this.blogs = myBlogs;
      });
  },
  filters: {
    portion(val) {
      return val.slice(0, 100) + '...';
    },
  },
  mixins: [findBlog],
};
</script>

<style lang="scss">
$palePink: #f1ab86;
$spaceGray: #d8dcff;

#view-blog {
  display: inline-block;
  margin-left: 100px;
  .link {
    text-decoration: none;
    color: white;
    padding: 10px;
    margin: 0;
    background: complement($palePink);
    border-radius: 10px;
    font-weight: 700;
  }
  h1 {
    font-size: 40px;
    text-align: center;
  }
  #search {
    display: flex;
    input {
      width: 50%;
      height: 100%;
      margin-top: 15px;
      margin-left: 15px;
    }
  }
  .one {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: $spaceGray;
    max-width: 800px;
    border-radius: 5px;
    &:nth-child(even) {
      background: lighten($spaceGray, 3);
    }
  }
}
</style>
