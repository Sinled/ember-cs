'use strict';
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.route('products', function() {
    this.route('product', {path: '/:id'});
    this.route('onSale');
  });
});

export default Router;
