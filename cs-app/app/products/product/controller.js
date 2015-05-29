'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  isOnSale: Ember.computed.alias('model.isOnSale'),
  review: function() {
    return this.store.createRecord('products.product.reviews.review', {
      product: this.get('model')
    });
  }.property('model'),

  isNotReviewed: function() {
    let isNew = this.get('review').get('isNew');
    console.log('isNew', isNew);
    return isNew;
  }.property('review'),

  //isSaveDisabled: function() {
  //  return !this.get('review.text').length;
  //}.property('review'),

  actions: {
    createReview: function() {
      this.get('review').set('reviewedAt', new Date().getTime()).save();
    }
  }
});
