import { moduleForModel, test } from 'ember-qunit';

moduleForModel('products/product/review', 'Unit | Model | products/product/review', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
