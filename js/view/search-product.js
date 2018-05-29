let submitButton = $('button[id=submit]');

submitButton.on('click', function() {
  $.get('https://factpro-api.herokuapp.com/producto/'+$('#id').val(), function(data) {
    console.log(data);
    if (data != 0) {
      $('#getcontent').remove();
      var html = ``;
      html += `<table id="getcontent">`;
      html += `<caption>Facturas</caption>`;
      html += `<thead>`;
      html += `<tr>`;
      html += `<th class="titulo">ID</th>`;
      html += `<th class="titulo">SKU</th>`;
      html += `<th class="titulo">NOMBRE</th>`;
      html += `<th class="titulo">PRECIO</th>`;
      html += `<th class="titulo">CANTIDAD</th>`;
      html += `<th class="titulo">VER</th>`;
      html += `</tr>`;
      html += `</thead>`;
      html += `<tbody>`;
      html += `<tr>`;
      html += `<th>${data[0].id}</th>`;
      html += `<td class="general"><span>${data[0].sku}</span></td>`;
      html += `<td class="general"><span>${data[0].name}</span></td>`;
      html += `<td class="general"><span>${data[0].price}</span></td>`;
      html += `<td class="general"><span>${data[0].quantity}</span></td>`;
      html += `<td class="general"><a href="./product.html?id=${data[0].id}" id="dd" class="colorlink">Ver producto</a></td>`;
      html += `</tr>`;
      html += `</tbody>`;
      html += `</table>`;
      $('#content').append(html);
    }
    else {
      swal ( "Error" ,  "ID no encontrado!" ,  "error" );
    }
  });
});
