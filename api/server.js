const express = require('express');
const friendsRouter = require('./friends/friends-router');
const server = express()


server.use(express.json())

server.use('/api/friends', friendsRouter)

server.use('*', (req, res, ) => {
    res.json({api: "up"})
})

module.exports = server