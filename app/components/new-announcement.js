import Ember from 'ember';

export default Ember.Component.extend({
  addAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addAnnouncement', true);
    },

    save() {
      var params = {
        title: this.get('title'),
        content: this.get('content')
      };
      this.addNewRental = false;
      this.sendAction('saveSecond', params);
    }
  }
});
