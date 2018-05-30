export default {
  computed: {
    findBlog: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    },
  },
};
