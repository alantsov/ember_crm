var AgentsIndexController = Ember.ArrayController.extend({
  agentName: "",
  actions: {
    createAgent: function(){
      var record = this.store.createRecord('agent', {name: this.get('agentName')});
      record.save();
      this.set('agentName','');
    }
  }
});

export default AgentsIndexController;
