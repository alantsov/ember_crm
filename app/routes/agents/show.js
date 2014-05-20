export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('agent', params.agent_id);
  }
});
