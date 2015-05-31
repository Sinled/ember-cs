'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  isOnSale: Ember.computed.alias('model.isOnSale'),
  review: function() {
    return this.store.createRecord('review', {
      product: this.get('model'),
      id: 110
    });
  }.property('model'),

  isNotReviewed: Ember.computed.alias('review.isNew'),

  actions: {
    createReview: function() {
      let review = this.get('review').set('reviewedAt', new Date()).save();
    }
  }
});
