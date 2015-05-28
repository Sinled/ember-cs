'use strict';
import DS from 'ember-data';

let Product = DS.Model.extend({
  title: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  isOnSale: DS.attr(),
  image: DS.attr()
});

Product.reopenClass({
  FIXTURES: [
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
  ]
});

export default Product;
