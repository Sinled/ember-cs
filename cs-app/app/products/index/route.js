'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    let data = [
      {
        id: 1,
        title: 'Flint',
        price: 99,
        description: 'Flint is...',
        isOnSale: true,
        image: 'flint.png'
      },
      {
        id: 2,
        title: 'Kindling',
        price: 249,
        description: 'Easily...',
        isOnSale: false,
        image: 'kindling.png'
      }
    ];

    //return this.store.findAll('product');

    return data;
  }
});
