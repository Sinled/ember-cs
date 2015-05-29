import Ember from 'ember';

export default Ember.Controller.extend({
  isOnSale: Ember.computed.alias('model.isOnSale')
});
