'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  user () {
    return this.hasOne('App/Model/User');
  }
}

module.exports = User
