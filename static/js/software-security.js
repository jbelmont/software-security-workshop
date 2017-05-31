'use strict'

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
  const users = JSON.parse(window.localStorage.getItem('users:table'))
  const nextUserId = users[`${users.length}+1`]
  const tr = document.createElement('tr')
  const id = document.createElement('td')
  id.textContent = nextUserId
  const firstName = document.createElement('td')
  firstName.textContent = firstName
  const lastName = document.createElement('td')
  lastName.textContent = lastName
  const gender = document.createElement('td')
  gender.textContent = gender
  const email = document.createElement('td')
  email.textContent = email
  tr.appendChild(id)
  tr.appendChild(firstName)
  tr.appendChild(lastName)
  tr.appendChild(gender)
  tr.appendChild(email)
  usersTable.appendChild(tr)
  users.push({
    id: nextUserId,
    first_name: first_name,
    last_name: last_name,
    email: email,
    gender: gender
  })
  window.localStorage.setItem('users:table', JSON.stringify(users))
}

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
