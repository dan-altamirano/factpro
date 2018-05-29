if(Cookies.getJSON('session') == null) {
  console.log('No hay usuario');
} else {
  html = `<div class="options">`;
  html += `<a href="../general/menu.html" class="item" id="menu">Menu</a>`;
  html += `<a href="../general/admin.html" class="item" id="user-name">${Cookies.getJSON('session').username}</a>`;
  html += `<a href="#" class="item" id="log-out">Cerrar sesion</a>`;
  html += `</div>`;
  $('#session').append(html);
  $('#sign-up').remove();
  $('#sign-in').remove();
}

let logout = $('a[id=log-out]');
logout.on('click', function() {
  console.log("all cool");
  Cookies.remove('session');
  location.reload();
});
