$('document').ready(function() {
  let submitButton = $('button[type=button]');
  submitButton.on('click', function() {
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
      department: $('#department').val(),
      productname: $('#productname').val(),
      orderdate: $('#orderdate').val(),
      deliverydate: $('#deliverydate').val(),
      quantity:$('#quantity').val(),
      unitprice:$('#unitprice').val(),
      totalprice:$('#quantity').val()*$('#unitprice').val()
    }
    console.log(compra);

    $.post('https://factpro-api.herokuapp.com/compra', compra, function(result){
      swal({
      title: "¡Agregado!",
      text: "Factura registrada exitosamente!",
      icon: "success",
      button: "ok!",
      })
      .then((value) => {
        window.location.replace('../general/menu.html');
      });
    });

  });
});
