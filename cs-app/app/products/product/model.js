'use strict';
import DS from 'ember-data';

let Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('string'),
  description: DS.attr('string'),
  isOnSale: DS.attr('string'),
  image: DS.attr('string'),
  reviews: DS.hasMany('products.product.review', {async: true})
});

Product.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Flint',
      price: 99,
      description: 'Flint is...',
      isOnSale: true,
      image: 'flint.png',
      reviews: [100, 101]
    },
    {
      id: 2,
      title: 'Kindling',
      price: 249,
      description: 'Easily...',
      isOnSale: false,
      image: 'kindling.png',
      reviews: []
    }
  ]
});

export default Product;
