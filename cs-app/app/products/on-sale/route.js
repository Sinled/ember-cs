'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let products = this.store.find('products.product');
    return products;
  }
});
