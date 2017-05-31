'use strict'

const ajax = require('./ajax')

function getUser () {
  return {
    type: 'GET',
    route: '/api/v1/users'
  }
}

module.exports = () => {
  return ajax(getUser())
  .then(users => users)
}
