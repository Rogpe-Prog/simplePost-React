const express = require('express')
const router = express.Router()
const controllerUser = require('../controllers/controller')

router.get('/getUser', controllerUser.getUser)
router.post('/postUser', controllerUser.postUser)


module.exports = router