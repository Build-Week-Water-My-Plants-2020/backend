exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { 
          username: 'Quame', 
          password: 'password', 
          phoneNumber: '7185551212' 
        },

        {  
          username: 'Destinee', 
          password: 'password', 
          phoneNumber: '7575551212' 
        },

        {  
          username: 'Tyler', 
          password: 'password', 
          phoneNumber: '7575551234' 
        },

        {  
          username: 'Julia', 
          password: 'password', 
          phoneNumber: '255551212' 
        },
      ]);
    });
};
