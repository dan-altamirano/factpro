$('document').ready(function() {
  $.get( "https://factpro-api.herokuapp.com/producto", function( data ) {

    console.log(data);
    var html = ``;

    $.each(data, function(index, value) {
      html += `<tr>`;
      html += `<th>${value.id}</th>`;
      html += `<td class="general"><span>${value.sku}</span></td>`;
      html += `<td class="general"><span>${value.name}</span></td>`;
      html += `<td class="general"><span>${value.price}</span></td>`;
      html += `<td class="general"><span>${value.quantity}</span></td>`;
      html += `<td class="general"><a href="./product.html?id=${value.id}" id="dd" class="colorlink">Ver producto</a></td>`;
      html += `</tr>`;
    });
    $('#content').append(html);
  });
});
