const express = require('express');
const routers = express.Router();
const userRouters = require('./user');
const authRouter = require('./auth');
const authMiddleware = require('../middlewares/auth');

routers.use('/user', userRouters);
routers.use('/auth', authRouter);

// . . . Rotas abaixo necessitam de authenticação . . .
// routers.use(authMiddleware);

module.exports = routers