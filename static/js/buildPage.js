'use strict'

const users = require('users')
const {
  DASHBOARD,
  USERS,
  SETTINGS,
  PROFILE,
  ID,
  FIRST_NAME,
  LAST_NAME,
  GENDER,
  EMAIL
} = require('./constants')

function buildTable () {
  const addUserForm = `
<div class="users-area">
  <table class="users-area-table">
    <thead>
      <tr>
        <td>${ID}</td>
        <td>${FIRST_NAME}</td>
        <td>${LAST_NAME}</td>
        <td>${GENDER}</td>
        <td>${EMAIL}</td>
      </tr>
    </thead>
    <tbody id="usersTable">
    </tbody>
  </table>
</div>`
  const usersContainer = document.querySelector('.users-container')
  usersContainer.innerHTML = addUserForm
}

function addUser () {
  const addUserComponent = `
  <button id="addUserBtn" class="btn btn-default add-user-btn">Add User</button>
    <form id="addUserForm" class="hide">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" class="form-control" id="firstName" placeholder="First Name">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Last Name">
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <input type="text" class="form-control" id="gender" placeholder="Gender">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Email">
      </div>
      <button id="addUserFieldBtn" type="submit" class="btn btn-default add-new-user">Submit</button>
    </form>
  `
  const addUser = document.querySelector('.add-user-container')
  addUser.innerHTML = addUserComponent
}

function buildNavigation () {
  const navigationComponent = `
    <div class="navbar-component">
    <div class="navbar area">
      <a href="#" class="dashboard">${DASHBOARD}</a>
      <nav role="navigation" id="navigation" class="list">
        <a href="#" class="item -link">${USERS}</a>
        <a href="#" class="item -link">${SETTINGS}</a>
        <a href="#" class="item -link">${PROFILE}</a>
        <span class="item"><i class="fa fa-search"></i></span>
      </nav>
      <button data-collapse data-target="#navigation" class="toggle">
        <span class="icon"></span>
      </button>
    </div>
  </div>
  `
  const navComponent = document.querySelector('.navigation-container')
  navComponent.innerHTML = navigationComponent
}


function buildUsers () {
  const usersTable = document.getElementById('usersTable')
  for (let i = 0; i < users.length; i++) {
    const tr = document.createElement('tr')
    const id = document.createElement('td')
    id.textContent = users[i].id
    const firstName = document.createElement('td')
    firstName.textContent = users[i].first_name
    const lastName = document.createElement('td')
    lastName.textContent = users[i].last_name
    const gender = document.createElement('td')
    gender.textContent = users[i].gender
    const email = document.createElement('td')
    email.textContent = users[i].email
    tr.appendChild(id)
    tr.appendChild(firstName)
    tr.appendChild(lastName)
    tr.appendChild(gender)
    tr.appendChild(email)
    usersTable.appendChild(tr)
  }
  window.localStorage.setItem('users:table', JSON.stringify(users))
}

module.exports = {
  buildTable,
  addUser,
  buildNavigation,
  buildUsers
}
