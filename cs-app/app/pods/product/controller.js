'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  //isOnSale: Ember.computed.alias('model.isOnSale'),
  //review: function() {
  //  return this.store.createRecord('product.review', {
  //    product: this.get('model')
  //  });
  //}.property('model'),
  //
  //isNotReviewed: Ember.computed.alias('review.isNew'),

  actions: {
    createReview: function() {
      this.get('review').set('reviewedAt', new Date().getTime());
    }
  }
});
