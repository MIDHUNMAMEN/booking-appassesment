const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const auth = require('../middlewares/authMiddleware');

router.post('/book/:id', auth, bookActivity);
router.get('/my', auth, getMyBookings);

module.exports = router;
