'use strict';
import DS from 'ember-data';

let Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string'),
  isOnSale: DS.attr('string'),
  image: DS.attr('string'),
  reviews: DS.hasMany('products.product.reviews.review', {async: true})
});

export default Product;
