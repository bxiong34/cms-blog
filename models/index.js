const User = require('./User');
const Blogs = require('./Blogs');
const Dashboard = require('./Dashboard');

//dashboard can have many blogs
Dashboard.hasMany(Blogs, {
    foreignKey: 'blogs_id',
});

//a user can have many blogs
User.hasMany(Blogs, {
    foreignKey: 'blogs_id',
});

//a blog belongs to a single user
Blogs.belongsTo(User, {
  foreignKey: 'blogs_id',
});

Blogs.belongsTo(Dashboard, {
    foreignKey:'blogs_id',
});

Dashboard.belongsTo(User, {
    foreignKey:'blogs_id',
});

module.exports = { User, Blogs, Dashboard };