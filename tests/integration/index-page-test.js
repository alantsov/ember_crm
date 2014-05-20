import startApp from '../helpers/start-app';

var App;

module('Integration - Landing Page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should welcome me to rmforme', function() {
  visit('/').then(function() {
    equal(find('h2#title').text(), 'rmforme');
  });
});
