export default DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.hasMany('note', {async: true})
//  event: DS.hasOne('event')
});
