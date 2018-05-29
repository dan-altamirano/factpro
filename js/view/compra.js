$('document').ready(function() {
  var productID = 0;
  $.get('https://factpro-api.herokuapp.com/compra/'+$.urlParam('id'), function(data) {
    console.log(data);
     $('#id').val(data[0].id);
     $('#department').val(data[0].department);
     $('#productname').val(data[0].productname);
     $('#orderdate').val(data[0].orderdate);
     $('#deliverydate').val(data[0].deliverydate);
     $('#quantity').val(data[0].quantity);
     $('#unitprice').val(data[0].unitprice);
     $('#totalprice').val(data[0].totalprice);
     productID = data[0].id;
  });

  let submitButton = $('button[id=modificar]');
  submitButton.on('click', function() {
    //console.log('all ok');
    window.location.replace('modificar-compra.html?id='+productID);
  });

  let deleteButton = $('button[id=eliminar]');
  deleteButton.on('click', function() {
    $.ajax({url: 'https://factpro-api.herokuapp.com/compra', method: 'delete', data: {id: productID}})
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
