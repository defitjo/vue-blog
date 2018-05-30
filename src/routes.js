import blogs from './components/blogs.vue';
import newBlog from './components/newBlog.vue';
import blogOne from './components/blogOne.vue';

export default [
  { path: '/', component: blogs },
  { path: '/new', component: newBlog },
  { path: '/blog/:id', component: blogOne },
];
