const express = require('express')
const roleassignRoute = express.Router()

const { roleassignView, roleassignPost } = require('../Controller/RoleAssign')

roleassignRoute.get('/roleassignView', roleassignView)
roleassignRoute.post('/roleassignPost', roleassignPost)

module.exports = roleassignRoute