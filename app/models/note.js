export default DS.Model.extend({
  message: DS.attr('string'),
  agent: DS.belongsTo('agent')
});
