$('document').ready(function() {
  let submitButton = $('button[type=button]');
  submitButton.on('click', function() {
    $('.errorMessage').remove();
    var status = 0;
    status += validar($('#clientname'));
    status += validar($('#street'));
    status += validar($('#community'));
    status += validar($('#state'));
    status += validar($('#zipcode'));
    status += validar($('#rfc'));
    status += validar($('#ordernum'));
    status += validar($('#invoicedate'));
    status += validar($('#concept'));
    status += validar($('#totalprice'));

    if(status > 0) return 0;

    var factura = {
      clientname: $('#clientname').val(),
      street: $('#street').val(),
      community: $('#community').val(),
      state: $('#state').val(),
      zipcode:$('#zipcode').val(),
      rfc:$('#rfc').val().toUpperCase(),
      ordernum:$('#ordernum').val(),
      invoicedate:$('#invoicedate').val(),
      concept:$('#concept').val(),
      payment:$('#payment').val(),
      iva:$('#iva').val(),
      totalprice:$('#totalprice').val()
    }
    console.log(factura);

    $.post('https://factpro-api.herokuapp.com/factura', factura, function(result){
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
