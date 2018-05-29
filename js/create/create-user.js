$('document').ready(function() {
  let submitButton = $('button[type=button]');
  submitButton.on('click', function() {
    $('.errorMessage').remove();
    var status = 0;
    status += validar($('#name'));
    status += validar($('#birthdate'));
    status += validar($('#email'));
    status += validar($('#username'));
    status += validar($('#password'));

    if(status > 0) return 0;

    var usuario = {
      name: $('#name').val(),
      birthdate: $('#birthdate').val(),
      email: $('#email').val().toLowerCase(),
      username: $('#username').val().toLowerCase(),
      password: md5($('#password').val())
    }
    console.log(usuario);

    $.get('https://factpro-api.herokuapp.com/usuario/'+usuario.username, function(data) {
      console.log(data);
      if(data.length === 0) {
        $.post('https://factpro-api.herokuapp.com/usuario', usuario, function(result){
          console.log(result);
          swal({
          title: "¡Ahora eres miembro de FactPro!",
          text: "Usuario registrado exitosamente!",
          icon: "success",
          button: "ok!",
          })
          .then((value) => {
            window.location.replace('../../index.html');
          });
        });
      } else {
        swal({
          title: "¡Atención!",
          text: "El nombre de usuario "+usuario.username+" ya existe",
          icon: "warning",
        });
      }
    });

  });
});
