const friends = [
    {friend_name: "Chandler"},
    {friend_name: "Joey"},
    {friend_name: "Monica"},
    {friend_name: "Phoebe"},
    {friend_name: "Rachel"},
    {friend_name: "Ross"},
]

  
  
exports.seed = async function (knex) { // tables with FKeys go last
await knex('friends').insert(friends)
  }