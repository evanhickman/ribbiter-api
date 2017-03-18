'use strict'
const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * store(request, response) {
    const { username, password, email } = request.only('username', 'password', 'email');
    const user = yield User.create({ username, password: yield Hash.make(password), email });

    response.send(user);
  }


}

module.exports = UserController
