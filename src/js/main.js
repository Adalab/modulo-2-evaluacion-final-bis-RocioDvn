'use strict';

const userList = document.querySelector('.js_list');
const saveBtn = document.querySelector('.js_saveBtn');
const recoverBtn = document.querySelector('.js_recoverBtn');
let user = []; //info array user

//pintar info de user
function paintuser() {
  let html = '';
  for (const userItem of user) {
    const friendClass = user.isFriend ? 'isFriend' : '';
    html += `<li class = "listUser js_listUser ${friendClass}" id= "${userItem.login.uuid}">`;
    html += `<img src = ${userItem.picture.medium} alt="Imagen user" class ="Imagen"/>`;
    html += `<h2 class = "nameFirstUser js_nameFirstUser">  ${userItem.name.first} ${userItem.name.last}</h2>`;
    html += `<h2 class = "info js_cityUser">  ${userItem.location.city}</h2>`;
    html += `<h2 class = "info js_userName">  ${userItem.login.username}</h2>`;
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
//click a cada user
function handleClickUser(event) {
  event.preventDefault();
  const currentTarget = event.currentTarget;
  const idUserSelected = event.currentTarget.id;
  // obetener objeto de user con su id, buscamos el user
  const userSelected = user.find((userItem) => {
    return userItem.login.uuid === idUserSelected;
  });
  //meter propiedad isFriend:true
  userSelected.isFriend = true;
  //meter clase isFriend al elemento(currectTarget)
  currentTarget.classList.add('isFriend');
}
//guardar y recuperar en LS
//set =guardar
function handleClickSave() {
  console.log(user);
  localStorage.setItem('user', JSON.stringify(user));
}

//get = recuperar;
function handleClickRecover() {
  console.log(user);
  const userLocals = localStorage.getItem('user');
  paintuser();
}

saveBtn.addEventListener('click', handleClickSave);
recoverBtn.addEventListener('click', handleClickRecover);
