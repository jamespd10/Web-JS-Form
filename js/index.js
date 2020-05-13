let contactoBtn = document.getElementById("contactoBtn");

contactoBtn.onclick = function (e) {
  //const url = '../php/models/contactoBtn.php';
  let form = new FormData();

  let nombre = document.querySelector('#nombre');
  let correo = document.querySelector('#correo');
  let contacto = document.querySelector('#contacto');
  email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  /*Inputs para nombre*/
  if (nombre.value !== '')
    form.append('nombre', nombre.value);
  else
    form.append('nombre', nombre.placeholder);
    /*Inputs para correo*/
  if (correo.value !== '')
    form.append('correo', correo.value);
  else
    form.append('correo', correo.placeholder);
    /*Inputs para contacto*/
  if (contacto.value !== '')
    form.append('contacto', contacto.value);
  else
    form.append('contacto', contacto.placeholder);

  //validarEmail(correo.value);
  if (email.test(correo.value)){
    alert('¡Su mensaje ha sido enviado!');
    fetch(/*url*/null, { method: 'POST', body: form })
    .then(function (response) {
      location.reload()
      //location.href="https://www.w3schools.com/jsref/prop_loc_href.asp"
    })
    .then(function (body) {
      location.reload()
      //location.href="https://www.w3schools.com/jsref/prop_loc_href.asp"
    });
  } 
  else
    alert("La dirección de correo es incorrecta.");
}
/*function validarEmail(correo) {
    email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email.test(correo)){
        alert('¡Su mensaje ha sido enviado!');
    } else {
     alert("La dirección de correo es incorrecta.");
    }
  }*/