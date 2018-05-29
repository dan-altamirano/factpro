$('document').ready(function() {
  let submitButton = $('button[type=button]');
  submitButton.on('click', function() {
    $('.errorMessage').remove();
    var status = 0;
    status += validar($('#sku'));
    status += validar($('#description'));

    let date = $('#dateinventory').val();
    var newDate = date.split("-")[2];
    if (newDate.length == 2 )
    {
      newDate += '/' + date.split("-")[1];
      newDate += '/' + date.split("-")[0];
    }
    status += validar($('#status'));
    status += validar($('#balance'));

    if(status > 0) return 0;

    var inventario = {
      sku: $('#sku').val(),
      description: $('#description').val(),
      dateinventory: newDate,
      status: $('#status').val(),
      balance:$('#balance').val()
    }

    $.get( "https://factpro-api.herokuapp.com/producto", function( data ) {
      $.each(data, function(index, value) {
        var stock = {
          id: $('#sku').val(),
          id_prod: value.id,
          disp: value.quantity,
          exist: 0
        }
        $.post('https://factpro-api.herokuapp.com/stock',stock, function(result){
        });

      });
    });

    $.post('https://factpro-api.herokuapp.com/inventario', inventario, function(result){
      swal({
      title: "¡Creado!",
      text: "Inventario creado exitosamente!",
      icon: "success",
      button: "ok!",
      })
      .then((value) => {
        window.location.replace('../general/menu.html');
      });
    });

  });
});
