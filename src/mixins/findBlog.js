export default {
  computed: {
    findBlog: function() {
      return this.blogs.filter(blog => {
        return blog.title.toLowerCase().match(this.search);
      });
    },
  },
};
