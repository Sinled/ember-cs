'use strict';
import Ember from 'ember';

const ON_SALE_COUNT = 3;

export default Ember.ArrayController.extend({
  name: 'Dmytro',
  productCount: Ember.computed.alias('length'),

  onSaleProductCount: function() {
    return this.filterBy('isOnSale').length;
  }.property('@each.isOnSale'),

  onSale: function() {
    return this.filterBy('isOnSale').slice(0, ON_SALE_COUNT);
  }.property('@each.isOnSale')
});
