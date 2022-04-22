'use strict';

const friendList = document.querySelector('.js_list');
const saveBtn = document.querySelector('.js_saveBtn');
const recoverBtn = document.querySelector('.js_recoverBtn');
let friends = []; //info array friends

//pintar info de friends
function paintFriends() {
  let html = '';
  for (const friendItem of friends) {
    html += `<img src = "${friendItem.picture.medium}" alt="Imagen Friend" class ="friend"/>`;
    html += `<h2 class = "js_firstnamefriend" ${friendItem.name.first}</h2>`;
    html += `<h2 class = "js_lastnamefriend" ${friendItem.name.last}</h2>`;
    html += `<h2 class = "js_cityfriend" ${friendItem.location.city}</h2>`;
    html += `<h2 class = "js_usernamefriend" ${friendItem.login.username}</h2>`;
    html += `</li>`;
  }
  friendList.innerHTML = html;
}
//hacer fetch y guardar en variable let
fetch(`https://randomuser.me/api/?results=10`)
  .then((response) => response.json())
  .then((data) => {
    friends = data.results;
    paintFriends(); //llamo a la funcion de pintar friends
  });
