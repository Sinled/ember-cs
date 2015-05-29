import DS from 'ember-data';

let Review = DS.Model.extend({
  text: DS.attr('string'),
  reviewedAt: DS.attr('date'),
  rating: DS.attr('number'),
  product: DS.belongsTo('products.product')
});

Review.reopenClass({
  FIXTURES: [
    {
      id: 100,
      reviewedAt: new Date('12/10/2013').getTime(),
      text: 'Started a fire in no time!',
      rating: 4
    },
    {
      id: 101,
      reviewedAt: new Date('12/12/2013').getTime(),
      text: 'Not the brightest flame, but warm!',
      rating: 5
    },
    {
      id: 102,
      reviewedAt: new Date('12/30/2013').getTime(),
      text: 'This is some amazing Flint! It lasts **forever** and works even when damp! I still ' +
      'remember the first day when I was only a little fire sprite and got one of these in my flame' +
      ' stalking for treemas. My eyes lit up the moment I tried it! Here\'s just a few uses for it:\n\n*' +
      ' Create a fire using just a knife and kindling!\n* Works even after jumping in a lake (although,' +
      ' that\'s suicide for me)\n* Small enough to fit in a pocket -- if you happen to wear pants\n\n\nYears' +
      ' later I\'m still using the _same one_. That\'s the biggest advantage of this -- it doesn\'t run out ' +
      'easily like matches. As long as you have something to strike it against, **you can start a fire anywhere**' +
      ' you have something to burn!',
      rating: 5
    }
  ]
});

export default Review;
