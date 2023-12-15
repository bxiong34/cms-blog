const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogRoutes = require('./blogs-routes');
// const dashboardRoutes = require('./dashboard-routes');

router.use('/users', userRoutes);
router.use('/dashboard', blogRoutes);
// router.use('/dashboard', dashboardRoutes);


module.exports = router;
