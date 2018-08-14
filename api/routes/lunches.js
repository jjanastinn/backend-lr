const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Lunches were fetched'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Lunch was created!'
  });
});

router.get('/:lunchId', (req, res, next) => {
  res.status(200).json({
    message: 'Lunch details!',
    orderId: req.params.orderId
  });
});

router.patch('/:lunchId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated lunch!'
  });
});

router.delete('/:lunchId', (req, res, next) => {
  res.status(200).json({
    message: 'Lunch deleted!'
  });
});

module.exports = router;