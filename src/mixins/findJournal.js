export default {
  computed: {
    findJournal: function() {
      return this.journals.filter(journal => {
        return journal.title.toLowerCase().match(this.search);
      });
    },
  },
};
