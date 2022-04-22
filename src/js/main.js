'use strict';

const userList = document.querySelector('.js_list');
const saveBtn = document.querySelector('.js_saveBtn');
const recoverBtn = document.querySelector('.js_recoverBtn');
let user = []; //info array user

//pintar info de user
function paintuser() {
  let html = '';
  for (const userItem of user) {
    html += `<li class = "js_listUser " id= "${userItem.login.uuid}">`;
    html += `<img src = "${userItem.picture.medium}" alt="Imagen user" class ="user"/>`;
    html += `<h2 class = "js_firstNameUser">  ${userItem.name.first} ${userItem.name.last}</h2>`;
    html += `<h2 class = "js_cityUser">  ${userItem.location.city}</h2>`;
    html += `<h2 class = "js_userNameUser">  ${userItem.login.username}</h2>`;
    html += `</li>`;
  }
  userList.innerHTML = html;
  listenerUser();
}
//hacer fetch y guardar en variable let
fetch(`https://randomuser.me/api/?results=10`)
  .then((response) => response.json())
  .then((data) => {
    user = data.results;

    paintuser(); //llamo a la funcion de pintar user
  });

//escuchar click asociado a cada usuario
function listenerUser() {
  const listAllUser = document.querySelectorAll('.js_listUser');
  for (const item of listAllUser) {
    item.addEventListener('click', handleClickUser);
  }
}

function handleClickUser(event) {
  event.preventDefault();
  const idUserSelected = event.currentTarget.id;
}
