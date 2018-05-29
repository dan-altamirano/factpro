$('document').ready(function() {
  $.get( "https://factpro-api.herokuapp.com/factura", function( data ) {

    console.log(data);
    var html = ``;

    $.each(data, function(index, value) {
      html += `<tr>`;
      html += `<th>${value.id}</th>`;
      html += `<td class="general"><span>${value.clientname}</span></td>`;
      html += `<td class="general"><span>${value.street}</span></td>`;
      html += `<td class="general"><span>${value.community}</span></td>`;
      html += `<td class="general"><span>${value.state}</span></td>`;
      html += `<td class="general"><span>${value.zipcode}</span></td>`;
      html += `<td class="general"><span>${value.rfc}</span></td>`;
      html += `<td class="general"><span>${value.ordernum}</span></td>`;
      html += `<td class="general"><span>${value.invoicedate}</span></td>`;
      html += `<td class="general"><span>${value.concept}</span></td>`;
      html += `<td class="general"><span>${value.payment}</span></td>`;
      html += `<td class="general"><span>${value.iva}</span></td>`;
      html += `<td class="general"><span>${value.totalprice}</span></td>`;
      html += `<td class="general"><a href="./factura.html?id=${value.id}" id="dd" class="colorlink">Ver factura</a></td>`;
      html += `</tr>`;
    });
    $('#content').append(html);
  });
});
