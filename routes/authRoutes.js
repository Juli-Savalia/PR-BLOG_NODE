const express = require('express');
const { LoginPage, RegisterPage, registerUser, DashboardPage, loginUser, Logout } = require('../controllers/AuthController');

const routes = express.Router();


routes.get('/',LoginPage);
routes.get('/register',RegisterPage)
routes.get('/dash',DashboardPage);

routes.post('/registerUser',registerUser);
routes.post('/loginUser',loginUser);
routes.get('/logout',Logout)
module.exports = routes


