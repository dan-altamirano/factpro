if(Cookies.getJSON('session') != null) window.location.replace("../../index.html");

$('document').ready(function() {

  $('#submit').on('click', function() {
    $('.errorMessage').remove();
    var status = 0;

    status += validar($('#username'));
    status += validar($('#password'));

    if(status > 0) return 0;

    $.get('https://factpro-api.herokuapp.com/usuario/'+$('#username').val()+"/"+md5($('#password').val()), function(data) {
      if(data.length === 0) {
        swal({
          title: "Error!",
          text: "El nombre de usuario o la contraseña son incorrectos",
          icon: "error",
        });
      } else {
        swal({
        title: "¡Bienvenido a FactPro!",
        text: "Conexion exitosa",
        icon: "success",
        button: "ok!",
        })
        .then((value) => {
          console.log("All good");
          Cookies.set('session', {username: $('#username').val(), password: md5($('#password').val())});
          location.reload();
        });
      }
    });
  });
});
