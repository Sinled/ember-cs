'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // receive data from parent route
    return this.modelFor('products').filterBy('isOnSale');
  }
});
