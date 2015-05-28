'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  logoUrl: '//placekitten.com/g/50/50',
  time: function() {
    return new Date();
  }.property()
});
