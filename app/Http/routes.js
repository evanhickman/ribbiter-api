'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');
const fetch = require('node-fetch');


Route.post('/users', 'UserController.store');
Route.get('/users', 'UserController.index');

Route.post('/login', 'UserController.login');
Route.post('/posts', 'PostController.store').middleware('auth');
