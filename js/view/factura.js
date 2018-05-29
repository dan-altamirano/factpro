$('document').ready(function() {
  var productID = 0;
  $.get('https://factpro-api.herokuapp.com/factura/'+$.urlParam('id'), function(data) {
    console.log(data);
     $('#id').val(data[0].id);
     $('#clientname').val(data[0].clientname);
     $('#street').val(data[0].street);
     $('#community').val(data[0].community);
     $('#state').val(data[0].state);
     $('#zipcode').val(data[0].zipcode);
     $('#rfc').val(data[0].rfc);
     $('#ordernum').val(data[0].ordernum);
     $('#invoicedate').val(data[0].invoicedate);
     $('#concept').val(data[0].concept);
     $('#payment').val(data[0].payment);
     $('#iva').val(data[0].iva);
     $('#totalprice').val(data[0].totalprice);
     productID = data[0].id;
  });

  let deleteButton = $('button[id=eliminar]');
  deleteButton.on('click', function() {
    $.ajax({url: 'https://factpro-api.herokuapp.com/factura', method: 'delete', data: {id: productID}})
    .done(function(data) {
      console.log('Elemento eliminado: ' + productID);
    });
    swal({
    title: "¡Eliminado!",
    text: "Factura cancelada exitosamente!",
    icon: "success",
    button: "ok!",
    })
    .then((value) => {
      window.location.replace('../general/menu.html');
    });
  });

});
