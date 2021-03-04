const Tune = require('../data/songModel');
const Key = require('../data/songModel');

const tuneController = {};

tuneController.getTunes = (req, res, next) => {
  Tune.find()
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      next({
        message: 'There was error',
        error: err,
      });
    });
};

tuneController.createTune = (req, res, next) => {

  Tune.create({
    title: req.body.title,
    composer: req.body.composer,
    keys: [...Object.keys(req.body.keys)],
  })
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      next({
        message: 'There was error',
        error: err,
      });   
    });
};

tuneController.removeTune = (req, res, next) => {
  
  Tune.deleteOne({
    _id: req.body.id,
  })
    .then(data=> {
      return next();
    })
    .catch(err => {
      next({
        message: 'Could not delete',
        err: err,
      });
    });
};

tuneController.updateKeys = (req, res, next) => {

  Tune.findOneAndUpdate(
    { _id: req.body.id },
    { keys: [...Object.keys(req.body.keys)] }
  )
    .then(data => {
      return next();
    })
    .catch(err => {
      next({
        message: 'Could not update',
        err: err,
      });
    });

};

module.exports = tuneController;