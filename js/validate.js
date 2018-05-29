var regex = {
  "usuario": /^[a-z0-9_-]{3,20}$/,
  "pass": /^[a-zA-Z0-9_-]{6,40}$/,
  "correo": /\S+@\S+\.\S+/,
  "nombre": /^[a-zA-Z., ]{3,80}$/,
  "departamento": /^[a-zA-Z., ]{3,50}$/,
  "producto": /^[a-zA-Z., ]{3,50}$/,
  "numero": /^[0-9]{1,20}$/,
  "cpostal": /^[0-9]{5}$/,
  "direccion": /^[a-zA-Z0-9,. #-]{1,40}$/,
  "colonia": /^[a-zA-Z., ]{1,20}$/,
  "concepto": /^[a-zA-Z., ]{4,20}$/,
  "fechaS": /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
  "valrfc": /^([a-zA-Z,ñ,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[a-zA-Z|\d]{3})$/
};

var regexErrors = {
  "usuario": "El nombre usuario puede tener solo letras, numeros, - y _ (3, 16).",
  "pass": "La contraseña puede tener solo letras y numeros (6, 20).",
  "correo": "El formato del correo es invalido.",
  "nombre": "El campo debe tener entre 3 y 80 caracteres.",
  "departamento": "El campo debe tener entre 3 y 50 caracteres.",
  "producto": "El campo debe tener entre 3 y 50 caracteres.",
  "numero": "Formato de numero incorrecto.",
  "cpostal": "Codigo postal incorrecto.",
  "direccion": "La direccion tiene un formato no valido",
  "colonia": "El campo debe tener entre 1 y 20 caracteres.",
  "concepto": "El campo debe tener entre 4 y 20 caracteres.",
  "fechaS": "Fecha incorrecta.",
  "valrfc": "RFC no valido."
};

function error(element, errorMsg) {
  element.addClass('error');
  var html = `<span class="errorMessage">${errorMsg}</span>`;
  $(html).insertAfter(element);
}

let date = new Date();
let getAge = function getAge(date, birth) {
    var birthday = new Date(birth);
    var age = date.getFullYear() - birthday.getFullYear();
    var m = date.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && date.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

function validar(element) {
  var dataType = element.data('type');
  var reg = new RegExp(regex[dataType]);
  var val = element.val();

  if(element.is('input')) {
    element.removeClass('error');
    if(!reg.test(val)) {
      error(element, regexErrors[dataType]);
      return 1;
    }
    if(element.attr("type") == "date" && element.attr("id") == "birthdate")
      {
        let age = getAge(date, element.val());
        if(age < 18)
        {
          swal({
            title: "¡Atención!",
            text: "¡Para poder pertenecer a FactPro debes ser mayor de edad!",
            icon: "warning",
          });
          error(element, regexErrors[dataType]);
          return 1;
        }
        return 0;
      }
  }
  else if (element.is('select')){
    if(val === '0') {
      error(element, 'Seleccione una opcion.');
      return 1;
    }
  }
  return 0;
}
