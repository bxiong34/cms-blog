const { User } = require("../models");

const userData = [
  {
    name: "User One",
    email: "userone@example.com",
    password: "password1",
  },
  {
    name: "User Two",
    email: "usertwo@example.com",
    password: "password2",
  },
  {
    name: "User Three",
    email: "userthree@example.com",
    password: "password3",
  },
  {
    name: "User Four",
    email: "userfour@example.com",
    password: "password4",
  },
  {
    name: "User Five",
    email: "userfive@example.com",
    password: "password5",
  },
  {
    name: "boba",
    email: "boba@gmail.com",
    password: "boba1234",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, { individualHooks: true, returning: true });

module.exports = seedUsers;
