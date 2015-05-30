import Ember from 'ember';

export default Ember.Component.extend({
  reviewsCount: Ember.computed.alias('product.reviews.length'),
  tagName: 'li',
  classNames: ['row']
});
