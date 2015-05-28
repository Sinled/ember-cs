import DS from 'ember-data';

let Review = DS.Model.extend({
  text: DS.attr('string'),
  reviewedAt: DS.attr('date'),
  product: DS.belongsTo('products.product')
});

Review.reopenClass({
  FIXTURES: [
    {
      id: 100,
      product: 1,
      text: 'Started a fire in no time!'
    },
    {
      id: 101,
      product: 1,
      text: 'Not the brightest flame, but warm!'
    }]
});

export default Review;
