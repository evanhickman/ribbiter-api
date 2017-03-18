'use strict'
const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * store(request, response) {
    const { username, password, email } = request.only('username', 'password', 'email');
    const user = yield User.create({ username, password: yield Hash.make(password), email });

    response.send(user);
  }

  * index(request, response) {
    const users = yield Users.fetch();
    response.json(users);
  }

  * login(request, response) {
    const { username, password } = request.only('username', 'password');

    const user = yield User.query().where({ username }).firstOrFail();

    const isValid = yield Hash.verify(password, user.password);

    if (!isValid) {
      return response.status(401).json({
        message: 'Invalid username/password'
      });
    }

    // here
  }
}

module.exports = UserController
