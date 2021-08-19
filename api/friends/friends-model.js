 function getFriendById(friend_id){
     return Promise.resolve(`friend id: ${friend_id} has been found`)
 }

 module.exports = {
     getFriendById,
 }