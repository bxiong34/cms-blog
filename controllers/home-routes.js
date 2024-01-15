const router = require('express').Router();
const { User, Blog, Dashboard } = require('../models');
const withAuth = require('../utils/auth');

//get all blogs for homepage
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    const userId = req.session.user_id;

    // find logged in user's info
    const userData = await User.findByPk(userId, {
      attributes: ["name"],
    });

    if (!userData) {
      return res.redirect("/login");
    }

    res.render('homepage', {
      blogs,
      name: userData.name,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// use withAuth middleware to prevent access to dashboard route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get one blog from dashboard
router.get('dashboard/:id', async (req, res) => {
  //if user is not logged in, redirect the user to the login page
  try {
    const blogData = await Dashboard.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

      const blog = blogData.get({ plain: true });
      res.render('dashboard', {
        ...blog, 
        logged_in: req.session.logged_in });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

//if user is logged in, redirect to homepage
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;