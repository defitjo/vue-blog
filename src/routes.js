import journals from './components/journals.vue';
import newJournal from './components/newJournal.vue';
import journalOne from './components/journalOne.vue';

export default [
  { path: '/', component: journals },
  { path: '/new', component: newJournal },
  { path: '/journal/:id', component: journalOne },
];
