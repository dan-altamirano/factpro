let doAnAction =  function doAnAction(e){
  let $button = $(this);

  if($button.attr("name") == "finInventario")
  {
    swal("Inventario Terminado", "¡Información almacenada correctamente!", "success");

          let $tb = $("#inventory tr:first th:last").html();

          if($tb != "EXISTENTES")
          {
            $("#inventory tr:first").append("<th class='titulo' id='exist'>EXISTENTES</th>");

            $("#inventory tr:gt(0)").append("<td id='exists'>0</td>");

            let $tr = $button.parents('tr');
            let $value = $tr.find('input').val();

            if($value == "")
            {
              $value = "0";
            }

            if($value > 0)
            {
              let $th = $tr.find('td#exists').text($value);
              $tr.find('input').val("");
            }

          }
          else {
              let $tr = $button.parents('tr');
              let $value = $tr.find('input').val();
              let $th = $tr.find('td#exists').html();

              if($value == "")
              {
                $value = "0";
              }

              if($value > 0)
              {
                let valor = parseFloat($value) + parseFloat($th);
                $tr.find('td#exists').text(valor);
                $tr.find('input').val("");
              }
            }
      }
    }
