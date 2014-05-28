export default DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.hasMany('note', {async: true}),
  events: DS.hasMany('event', {async: true})
});
