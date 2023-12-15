const router = require('express').Router();
const { Blogs, Dashboard, User } = require('../models');
const withAuth = require('../utils/auth');

//if user is logged in, show all blogs
router.get('/', withAuth, async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [
        {
          model: Dashboard,
          attributes: ['title', 'date'],
        },
      ],
    });

    const blog = blogData.map((blogs) =>
      blogs.get({ plain: true })
    );
    
    res.render('homepage', {
      blog,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//if user is logged in, redirect to homepage
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
