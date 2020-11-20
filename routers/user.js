const express = require('express');
const routers = express.Router();
const userServices = require('../services/user')

routers.post('/newUser', (req,res) => {
    userServices.create(req,res)
})
routers.put('/editUser/:id', (req,res) => {
    userServices.updatePass(req,res)
})
routers.delete('/deleteUser/:id', (req,res) => {
    userServices.delete(req,res)
})
routers.post('/getUsers', (req,res) => {
    userServices.getAll(req,res)
})
module.exports = routers