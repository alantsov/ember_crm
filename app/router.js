var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('agents', function(){
    this.route('show', {path: ':agent_id'});
  });
});

export default Router;
