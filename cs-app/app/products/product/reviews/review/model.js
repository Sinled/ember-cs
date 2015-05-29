import DS from 'ember-data';

let Review = DS.Model.extend({
  text: DS.attr('string'),
  reviewedAt: DS.attr('date'),
  rating: DS.attr('number'),
  product: DS.belongsTo('products.product')
});

export default Review;
