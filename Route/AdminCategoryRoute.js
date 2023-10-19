const express = require('express')
const admincategory_route = express.Router()

const { addcategory, viewcategory, updatecategory, findcategory} = require('../Controller/AdminCategory')

admincategory_route.post('/api/admin/category/addcategory', addcategory)
admincategory_route.get('/api/admin/category/viewcategory', viewcategory)
admincategory_route.get('/api/admin/category/findcategory/:pCategoryname', findcategory)
admincategory_route.put('/api/admin/category/updatecategory/:id', updatecategory)

module.exports = admincategory_route;