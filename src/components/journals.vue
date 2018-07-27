<template>
  <div id="view-journal">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/new" class="link">New Post</router-link>
    <h1>My Posts</h1>
    <div id="search">
      <p>Search for post:</p>
      <input type="text" v-model="search" placeholder="search">
    </div>
    <div v-for="journal in findJournal" class="one">
      <router-link id="heading" v-bind:to="'/journal/' + journal.id">
        <h2>{{ journal.title }}</h2>
      </router-link>
      <section>{{ journal.content | portion }}</section>
    </div>
  </div>
</template>

<script>
import findJournal from '../mixins/findJournal';

export default {
  data() {
    return {
      journals: [],
      search: '',
    };
  },
  created() {
    this.$http.get('https://vue-js-practice-b5437.firebaseio.com/posts.json')
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        let myJournals = [];
        for (let key in data) {
          data[key].id = key;
          myJournals.push(data[key]);
        };
        this.journals = myJournals;
      });
  },
  filters: {
    portion(val) {
      return val.slice(0, 100) + '...';
    },
  },
  mixins: [findJournal],
};
</script>

<style lang="scss">
$palePink: #f1ab86;
$spaceGray: #d8dcff;

#view-journal {
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
  #heading {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      text-decoration: none;
    }
  }

  #search {
    display: flex;
    p {
      font-weight: 600;
    }
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
