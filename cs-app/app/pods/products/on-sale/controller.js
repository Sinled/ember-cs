'use strict';
import Ember from 'ember';

export default Ember.ArrayController.extend({
  onSale: function() {
    debugger;
    return this.filterBy('isOnSale');
  }.property('@each.isOnSale')
});
