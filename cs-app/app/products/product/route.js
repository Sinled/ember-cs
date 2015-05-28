import Ember from 'ember';

export default Ember.Route.extend({
  model: function (options) {
    let product = this.store.find('product', options.id);
    return product;
  }
});
