const express = require('express');

const adminoffers_route = express.Router();

const { viewOffers, addOffers, updateOffers, deleteOffers } = require('../Controller/AdminOffers');

adminoffers_route.get('/viewOffers', viewOffers)
adminoffers_route.post('/addOffers', addOffers)
adminoffers_route.put('/updateOffers/:id', updateOffers)
adminoffers_route.delete('/deleteOffers/:id', deleteOffers)

module.exports = adminoffers_route