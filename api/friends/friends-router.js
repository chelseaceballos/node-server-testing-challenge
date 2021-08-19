const router = require("express").Router()
const Friend = require('./friends-model')


router.get('/', async (req, res, next) => {
  try{
    const friends = await Friend.getAll()
    res.json(friends)
  } catch (err) {
      res.status(500).json(err)
  }
})

router.get('/:friends_id', (req, res, next) => {
    Friend.getFriendById(req.params.friends_id)
        .then(found => {
            res.status(200).json(found)
        })
        .catch(next)
})

function validateName(req, res, next) {
    if (!req.body.friend_name || !req.body.friend_name.trim()){
      res.status(422).end()
    } else {
      next()
    }
  }

router.post('/', validateName, async (req, res, next) => {
    try {
        const newFriend = await Friend.insert(req.body)
           res.status(201).json(newFriend)
        } catch(err) {
            next(err)
        }
    //201 OK new friend
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params
       const remove = await remove.deleteChar(id)
       res.status(200).json(remove)
       next()
    })

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: "something went wrong in the friends router",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router