const router = require('express').Router();
const { Dashboard } = require('../../models');
const withAuth = require('../../utils/auth');


//get one blog
router.get('/blogs/:id', withAuth, async (req, res) => {
    //if user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      //if user is logged in, show blog
      try {
        const blogData = await Blogs.findByPk(req.params.id, {
          include: [
            {
              model: Dashboard,
              attributes: ['id', 'title', 'date'],
            },
          ],
        });
        const blogs = blogData.get({ plain: true });
        res.render('blogs', { blogs, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });