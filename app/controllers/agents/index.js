var AgentsIndexController = Ember.ArrayController.extend({
  agentName: "",
  sortProperties: ['position'],
  sortAscending: true,
  actions: {
    createAgent: function(){
      var record = this.store.createRecord('agent', {name: this.get('agentName')});
      record.save();
      this.set('agentName','');
    },
    removeEvent: function(e){
      e.deleteRecord();
      e.save();
      return false;
    }
  }
});

export default AgentsIndexController;
