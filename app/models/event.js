export default DS.Model.extend({
  direction: DS.attr('string'),
  action: DS.attr('string'),
  date: DS.attr('date',{defaultValue: new Date()}),
  agent: DS.belongsTo('agent'),
  humanDate: function(){
    return this.get("date").toLocaleDateString();
  }.property('date')
});
