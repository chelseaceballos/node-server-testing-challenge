const db = require('../../data/db-config')
 
function getAll(){
     return db('friends')
}

 function getFriendById(id){
    return db('friends').where('friend_id', id).first()
 }

 async function insert(friend) {
    const [id] = await db('friends').insert(friend)
    return db('friends').where('friend_id', id).first()
  }


  const remove = async (id) => {
    const friendName = await db('friends').where('friend_id', id).first()
    await db('friends').where('friend_id', id).del()
    return friendName
 }

 module.exports = {
     getFriendById,
     getAll,
     insert,
     remove,
 }