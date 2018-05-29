$('document').ready(function() {
  $.get('https://factpro-api.herokuapp.com/compra/'+$.urlParam('id'), function(data) {
    console.log(data);
    $('#department').val(data[0].department);
    $('#productname').val(data[0].productname);
    $('#orderdate').val(data[0].orderdate);
    $('#deliverydate').val(data[0].deliverydate);
    $('#quantity').val(data[0].quantity);
    $('#unitprice').val(data[0].unitprice);
  });

  $('#submit').on('click', function() {
    $('.errorMessage').remove();
    var status = 0;
    status += validar($('#department'));
    status += validar($('#productname'));
    status += validar($('#orderdate'));
    status += validar($('#deliverydate'));
    status += validar($('#quantity'));
    status += validar($('#unitprice'));

    if(status > 0) return 0;

    var compra = {
      id: $.urlParam('id'),
      department: $('#department').val(),
      productname: $('#productname').val(),
      orderdate: $('#orderdate').val(),
      deliverydate: $('#deliverydate').val()
      quantity: $('#quantity').val(),
      unitprice: $('#unitprice').val(),
      totalprice: $('#quantity').val()*$('#unitprice').val(),
    }
    console.log(compra);

    $.ajax({url: 'https://factpro-api.herokuapp.com/compra', method: 'put', data: compra})
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
