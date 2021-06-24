const express = require('express');
const router = express.Router();
const gigRoutes = require('./mans.route');

router.use('/mans', gigRoutes);
module.exports = router;