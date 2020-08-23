exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Quame",
          password: "abc123",
          phone: "12125555555"
        },
        {
          username: "Destinee",
          password: "abc123",
          phone: "16465555555"
        }
      ]);
    });
};
