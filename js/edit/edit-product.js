$('document').ready(function() {
  $.get('https://factpro-api.herokuapp.com/producto/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#sku').val(data[0].sku);
    $('#name').val(data[0].name);
    $('#price').val(data[0].price);
    $('#quantity').val(data[0].quantity);
  });

  $('#submit').on('click', function() {
    $('.errorMessage').remove();
    var status = 0;
    status += validar($('#sku'));
    status += validar($('#name'));
    status += validar($('#price'));
    status += validar($('#quantity'));

    if(status > 0) return 0;

    var producto = {
      id: $.urlParam('id'),
      sku: $('#sku').val().toUpperCase(),
      name: $('#name').val(),
      price: $('#price').val(),
      quantity: $('#quantity').val()
    }
    console.log(producto);

    $.ajax({url: 'https://factpro-api.herokuapp.com/producto', method: 'put', data: producto})
    .always(function() {
      swal({
      title: "¡Modificado!",
      text: "Producto modificado exitosamente!",
      icon: "success",
      button: "ok!",
      })
      .then((value) => {
        window.location.replace('../general/menu.html');
      });
    });

  });
});
