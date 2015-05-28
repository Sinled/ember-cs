'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(options) {
    return this.store.find('products.product', options.id);
  }
});
