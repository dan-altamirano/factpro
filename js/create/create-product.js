$('document').ready(function() {
  let submitButton = $('button[type=button]');
  submitButton.on('click', function() {
    $('.errorMessage').remove();
    var status = 0;
    status += validar($('#sku'));
    status += validar($('#name'));
    status += validar($('#price'));
    status += validar($('#quantity'));

    if(status > 0) return 0;

    var producto = {
      sku: $('#sku').val().toUpperCase(),
      name: $('#name').val(),
      price: $('#price').val(),
      quantity: $('#quantity').val()
    }
    console.log(producto);

    $.post('https://factpro-api.herokuapp.com/producto', producto, function(result){
      swal({
      title: "¡Agregado!",
      text: "Producto registrado exitosamente!",
      icon: "success",
      button: "ok!",
      })
      .then((value) => {
        window.location.replace('../general/menu.html');
      });
    });

  });
});
