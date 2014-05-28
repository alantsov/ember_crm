export default DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.hasMany('note', {async: true}),
  events: DS.hasMany('event', {async: true}),
  position: function(){
    if(this.get('events.length') === 0)
      return new Date(3333, 1, 1); //max date
    return this.get('events.firstObject.date');
  }.property("events.firstObject.date")
});
