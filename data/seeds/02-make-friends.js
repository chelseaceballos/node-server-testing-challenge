

  exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('friends')
      .truncate()
      .then(function() {
        return knex('friends').insert([
          {friend_name: "Chandler"},
          {friend_name: "Joey"},
          {friend_name: "Monica"},
          {friend_name: "Phoebe"},
          {friend_name: "Rachel"},
          {friend_name: "Ross"},
        ]);
      });
  };
  