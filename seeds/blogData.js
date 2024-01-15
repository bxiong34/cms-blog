const { Blog } = require('../models');

const blogData = [
    {   
        user_id: '0',
        title: 'Advantages of Using MVC in Application Development',
        author: 'fireup.pro',
        date: '01/18/2022',
        content: 'The main benefit of implementing the MVC pattern is that it makes it easier to locate certain code sections and add new functionality quickly.', 
    },
    {
        user_id: '1',
        title: 'What is the difference between authentication and authorization?',
        author: 'SailPoint',
        date: '03/03/2023',
        content: 'Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.',
    },
    {   
        user_id: '2',
        title: 'What is an ORM – The Meaning of Object Relational Mapping Database Tools',
        author: 'Ihechikara Vincent Abba',
        date: '10/21/2022',
        content: "When interacting with a database using OOP languages, you'll have to perform different operations like creating, reading, updating, and deleting (CRUD) data from a database. [...] The ORM and ORM tools help simplify the interaction between relational databases and different OOP languages."
    }
]

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;