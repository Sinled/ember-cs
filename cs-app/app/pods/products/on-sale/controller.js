'use strict';
import Ember from 'ember';

export default Ember.ArrayController.extend({
  onSale: function() {
    return this.filterBy('isOnSale');
  }.property('@each.isOnSale')
});
