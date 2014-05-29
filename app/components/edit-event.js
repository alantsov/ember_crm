var EditEventComponent = Ember.Component.extend({
  directions: [
     {value:'', label: 'Nothing to do'},
     {value: '>>', label: 'I am going to do smth'},
     {value: '<<', label: 'I wait for smth'},
     {value: '><', label: 'We will meet'}],
  event: function(){
    var currentEvent = this.get("agent.events.firstObject");
    if(currentEvent == null){
      currentEvent = this.get('targetObject.store').createRecord('event',
      {agent_id: this.get("agent.id")});
    }
    return currentEvent;
  }.property("agent.events.firstObject"),
  actions: {
    saveEvent: function(){
      if(this.get('event.direction')){
        var persisted = this.get('event.id') != null;
        this.get('event').save();
        if(!persisted){
          this.get('agent.events').addObject(this.get('event'));
        }
      }else{
        var record = this.get('event');
        record.deleteRecord();
        record.save();
      }
      return false;
    },
    removeEvent: function(){
      var record = this.get('event');
      record.deleteRecord();
      record.save();
      return false;
    }
  }
});

export default EditEventComponent;
