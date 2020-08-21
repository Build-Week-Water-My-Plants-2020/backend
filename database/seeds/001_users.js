
const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Quame', password: bcrypt.hashSync('pass', 8), phoneNumber: "7185502785"},
        {username: 'Destinee', password: bcrypt.hashSync('youshallnotpass', 8), phoneNumber: "7578731125"},
        {username: 'Tyler', password: bcrypt.hashSync('myprecious', 8), phoneNumber: "7573459843"}
      ]);
    });
};