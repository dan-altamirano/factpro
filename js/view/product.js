$('document').ready(function() {
  var productID = 0;
  $.get('https://factpro-api.herokuapp.com/producto/'+$.urlParam('id'), function(data) {
    console.log(data);
     $('#id').val(data[0].id);
     $('#sku').val(data[0].sku);
     $('#name').val(data[0].name);
     $('#price').val(data[0].price);
     $('#quantity').val(data[0].quantity);
     productID = data[0].id;
  });

  let submitButton = $('button[id=modificar]');
  submitButton.on('click', function() {
    //console.log('all ok');
    window.location.replace('edit-product.html?id='+productID);
  });

  let deleteButton = $('button[id=eliminar]');
  deleteButton.on('click', function() {
    $.ajax({url: 'https://factpro-api.herokuapp.com/producto', method: 'delete', data: {id: productID}})
    .done(function(data) {
      console.log('Elemento eliminado: ' + productID);
    });
    swal({
    title: "¡Eliminado!",
    text: "Producto eliminado exitosamente!",
    icon: "success",
    button: "ok!",
    })
    .then((value) => {
      window.location.replace('../general/menu.html');
    });
  });

});
