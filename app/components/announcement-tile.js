import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement){
      if(confirm('want delete?')){
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
