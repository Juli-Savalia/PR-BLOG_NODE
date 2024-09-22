const express = require('express')

const routes = express.Router();

routes.use('/',require('../routes/authRoutes'))
routes.use('/',require('../routes/crudRouter'))


module.exports = routes;