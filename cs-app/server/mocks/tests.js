module.exports = function(app) {
  var express = require('express');
  var testsRouter = express.Router();

  testsRouter.get('/', function(req, res) {
    res.send({
      'tests': [
        {
          id: 1,
          title: 'some title',
          text: 'lorem ipsum'
        }
      ]
    });
  });

  testsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  testsRouter.get('/:id', function(req, res) {
    res.send({
      'tests': {
        id: req.params.id
      }
    });
  });

  testsRouter.put('/:id', function(req, res) {
    res.send({
      'tests': {
        id: req.params.id
      }
    });
  });

  testsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tests', testsRouter);
};
