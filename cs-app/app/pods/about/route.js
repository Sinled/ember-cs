'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    // Set the IndexController's `title`
    controller.set('name', 'Dmytro');
  }
});
