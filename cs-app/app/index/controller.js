'use strict';
import Ember from 'ember';

export default Ember.ArrayController.extend({
  name: 'Dmytro',
  productCount: Ember.computed.alias('length')
});
