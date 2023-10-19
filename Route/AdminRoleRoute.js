const express = require('express')
const adminroll_route = express.Router()

const { adminrole_view, adminrolePost, adminrole_update} = require('../Controller/AdminRole')

adminroll_route.get('/adminrole_view', adminrole_view)
adminroll_route.post('/adminrolePost', adminrolePost)
adminroll_route.put('/adminrole_update/:id', adminrole_update)

module.exports = adminroll_route