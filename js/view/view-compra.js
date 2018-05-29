$('document').ready(function() {
  $.get( "https://factpro-api.herokuapp.com/compra", function( data ) {

    console.log(data);
    var html = ``;

    $.each(data, function(index, value) {
      html += `<tr>`;
      html += `<th>${value.id}</th>`;
      html += `<td class="general"><span>${value.department}</span></td>`;
      html += `<td class="general"><span>${value.productname}</span></td>`;
      html += `<td class="general"><span>${value.orderdate}</span></td>`;
      html += `<td class="general"><span>${value.deliverydate}</span></td>`;
      html += `<td class="general"><span>${value.quantity}</span></td>`;
      html += `<td class="general"><span>${value.unitprice}</span></td>`;
      html += `<td class="general"><span>${value.totalprice}</span></td>`;
      html += `<td class="general"><a href="./compra.html?id=${value.id}" id="dd" class="colorlink">Ver producto</a></td>`;
      html += `</tr>`;
    });
    $('#content').append(html);
    
  });
});
