import Ember from 'ember';

export default Ember.ArrayController.extend({
  hasReviews: Ember.computed.alias('length')
});
