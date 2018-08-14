const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Users were fetched!'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'User was created!'
  });
});

router.get('/:userId', (req, res, next) => {
  res.status(200).json({
    message: 'User details!',
    orderId: req.params.userId
  });
});


module.exports = router;