const User = require('./User');
const Blog = require('./Blog');
const Dashboard = require('./Dashboard');

//dashboard can have many blogs
Dashboard.hasMany(Blog, {
    foreignKey: 'blog_id',
});

//a user can have many blogs
User.hasMany(Blog, {
    foreignKey: 'blog_id',
});

//a blog belongs to a single user
Blog.belongsTo(User, {
  foreignKey: 'blog_id',
});

Blog.belongsTo(Dashboard, {
    foreignKey:'blog_id',
});

Dashboard.belongsTo(User, {
    foreignKey:'blog_id',
});

module.exports = { User, Blog, Dashboard };