var AgentsShowController = Ember.ObjectController.extend({
  message: "",
  actions: {
    createNote: function(){
      var record = this.store.createRecord('note',
      {message: this.get('message'), agent: this.get('model') });
      this.get('model.notes').addObject(record);
      record.save();
      this.set('message','');
    }
  }
});

export default AgentsShowController;
