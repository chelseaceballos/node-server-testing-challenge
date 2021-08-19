const router = require("express").Router()
const Friend = require('./friends-model')

router.get('/:friends_id', (req, res, next) => {
    Friend.getFriendById(req.params.friends_id)
        .then(found => {
            res.status(200).json(found)
        })
        .catch(next)
})



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: "something went wrong in the friends router",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router