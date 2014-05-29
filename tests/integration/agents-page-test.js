import startApp from '../helpers/start-app';
var App, server;

module('Integration - Agent Page', {
  setup: function() {
    App = startApp();
    var agents = [
      {
        id: 1,
        name: 'John Galt'
      },
      {
        id: 2,
        name: 'Degni Taggart'
      },
      {
        id: 3,
        name: 'Henry Rearden'
      }
    ];

    server = new Pretender(function() {
      this.get('/api/agents', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({agents: agents})];
      });

      this.get('/api/agents/:id', function(request) {
        var agent = agents.find(function(agent) {
          if (agent.id === parseInt(request.params.id, 10)) {
            return agent;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({agent: agent})];
      });
    });

  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should welcome me to rmforme', function() {
  visit('/').then(function() {
    equal(find('a.navbar-brand').text(), 'rmfor.me');
  });
});

test('Should navigate to about page', function() {
  visit('/').then(function() {
    click("a:contains('About')").then(function() {
      equal(find('h3').text(), 'About');
    });
  });
});

test('Should allow navigating back to root from another page', function() {
  visit('/about').then(function() {
    click('a:contains("Agents")').then(function() {
      notEqual(find('h3').text(), 'About');
    });
  });
});

test('Should allow navigation to the agents page from the landing page', function() {
  visit('/').then(function() {
    click('a:contains("Agents")').then(function() {
      equal(find('h3').text(), 'Agents');
    });
  });
});

test('Should list all agents', function() {
  visit('/agents').then(function() {
    equal(find('a:contains("John Galt")').length, 1);
    equal(find('a:contains("Degni Taggart")').length, 1);
    equal(find('a:contains("Henry Rearden")').length, 1);
  });
});

test('Should be able to navigate to a agent page', function() {
  visit('/agents').then(function() {
    click('a:contains("John Galt")').then(function() {
      equal(find('h4').text(), 'John Galt');
    });
  });
});

test('Should be able visit a agent page', function() {
  visit('/agents/1').then(function() {
    equal(find('h4').text(), 'John Galt');
  });
});
