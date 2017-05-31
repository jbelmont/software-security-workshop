'use strict'

const {
  buildTable,
  buildNavigation,
  addUserForm,
  buildUsers
} = require('./buildPage')

function toggleForm () {
  document.getElementById('addUserForm').classList.toggle('hide')
}

function prepareForm () {
  toggleForm()
  clearFormValues()
}

function clearFormValues () {
  document.getElementById('firstName').value = ''
  document.getElementById('lastName').value = ''
  document.getElementById('gender').value = ''
  document.getElementById('email').value = ''
}

function getUserFields () {
  return {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    gender: document.getElementById('gender').value,
    email: document.getElementById('email').value
  }
}

function addNewUser (users) {
  const {
    firstName,
    lastName,
    gender,
    email
  } = users
  const usersStorage = JSON.parse(window.localStorage.getItem('users:table'))
  const nextUserId = users[`${users.length}+1`]
  const tr = document.createElement('tr')
  const id = document.createElement('td')
  id.textContent = nextUserId
  const fName = document.createElement('td')
  fName.textContent = firstName
  const lName = document.createElement('td')
  lName.textContent = lastName
  const gnd = document.createElement('td')
  gnd.textContent = gender
  const eml = document.createElement('td')
  eml.textContent = email
  tr.appendChild(id)
  tr.appendChild(fName)
  tr.appendChild(lName)
  tr.appendChild(gnd)
  tr.appendChild(eml)
  const usersTable = document.getElementById('usersTable')
  usersTable.appendChild(tr)
  usersStorage.push({
    id: nextUserId,
    first_name: fName,
    last_name: lName,
    email: eml,
    gender: gnd
  })
  window.localStorage.setItem('users:table', JSON.stringify(usersStorage))
}

function setUpPage () {
  buildTable()
  buildNavigation()
  addUserForm()
  buildUsers()
}

document.addEventListener('DOMContentLoaded', () => {
  require('./users')().then(users => {
    window.localStorage.setItem('users', JSON.stringify(users))
    setUpPage()
    document.getElementById('addUserBtn').addEventListener('click', e => {
      prepareForm()
    })

    document.getElementById('addUserFieldBtn').addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      const newUser = getUserFields()
      addNewUser(newUser)
      prepareForm()
    })
  })
}, false)
