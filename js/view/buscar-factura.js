let submitButton = $('button[id=submit]');

submitButton.on('click', function() {
  $.get('https://factpro-api.herokuapp.com/factura/'+$('#id').val(), function(data) {
    console.log(data);
    if (data != 0) {
      $('#getcontent').remove();
      var html = ``;
      html += `<table id="getcontent">`;
      html += `<caption>Facturas</caption>`;
      html += `<thead>`;
      html += `<tr>`;
      html += `<th class="titulo">ID</th>`;
      html += `<th class="titulo">CLIENTE</th>`;
      html += `<th class="titulo">CALLE</th>`;
      html += `<th class="titulo">COLONIA</th>`;
      html += `<th class="titulo">MUNICIPIO</th>`;
      html += `<th class="titulo">CP</th>`;
      html += `<th class="titulo">RFC</th>`;
      html += `<th class="titulo">Nº Orden</th>`;
      html += `<th class="titulo">FECHA</th>`;
      html += `<th class="titulo">CONCEPTO</th>`;
      html += `<th class="titulo">PAGO</th>`;
      html += `<th class="titulo">IVA</th>`;
      html += `<th class="titulo">COSTO TOTAL</th>`;
      html += `<th class="titulo">VER</th>`;
      html += `</tr>`;
      html += `</thead>`;
      html += `<tbody>`;
      html += `<tr>`;
      html += `<th>${data[0].id}</th>`;
      html += `<td class="general"><span>${data[0].clientname}</span></td>`;
      html += `<td class="general"><span>${data[0].street}</span></td>`;
      html += `<td class="general"><span>${data[0].community}</span></td>`;
      html += `<td class="general"><span>${data[0].state}</span></td>`;
      html += `<td class="general"><span>${data[0].zipcode}</span></td>`;
      html += `<td class="general"><span>${data[0].rfc}</span></td>`;
      html += `<td class="general"><span>${data[0].ordernum}</span></td>`;
      html += `<td class="general"><span>${data[0].invoicedate}</span></td>`;
      html += `<td class="general"><span>${data[0].concept}</span></td>`;
      html += `<td class="general"><span>${data[0].payment}</span></td>`;
      html += `<td class="general"><span>${data[0].iva}</span></td>`;
      html += `<td class="general"><span>${data[0].totalprice}</span></td>`;
      html += `<td class="general"><a href="./factura.html?id=${data[0].id}" id="dd" class="colorlink">Ver factura</a></td>`;
      html += `</tr>`;
      html += `</tbody>`;
      html += `</table>`;
      $('#content').append(html);
    }
  });
});
