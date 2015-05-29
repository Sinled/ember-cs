'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  isOnSale: Ember.computed.alias('model.isOnSale'),
  reviewText: '',

  isSaveDisabled: function() {
    return !this.get('reviewText').length;
  }.property('reviewText'),

  actions: {
    createReview: function() {
      if (this.get('reviewText')) {
        this.store.createRecord('products.product.reviews.review', {
          reviewedAt: new Date().getTime(),
          text: this.get('reviewText'),
          product: this.model
        });

        this.set('reviewText', '');
      }
    }
  }
});
