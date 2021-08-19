const db = require('../../data/db-config')
 
function getAll(){
     return db('friends')
}

 function getFriendById(friend_id){
    return db('friends').where('friend_id', friend_id).first()
 }

 async function insert(friend) {
    return db('friends')
    .insert(friend)
    .then(([friend_id]) => {
      return getFriendById(friend_id)
    })
  }

  function remove(friend_id) {
    return null
  }

 module.exports = {
     getFriendById,
     getAll,
     insert,
     remove,
 }