function SlideRight() {
    // Checks to see if the slider is to the left of the div
    if (document.getElementById("slider").style.float !== "right") {
      // If it is we will float the sliderBtn to the right and change the background of the housing to green
      document.getElementById("slider").style.float = "right";
      document.getElementById("slideHousing").style.backgroundColor = "#00ff00";
  
      // Toggle dark mode on
      document.body.style.backgroundColor = "#595959";
      document.getElementById("header").style.color = "#e6e6e6";
      document.getElementById("press").style.color = "#e6e6e6";
    } else {
      // If clicked again the btn will move back to the left side and change the color back to original
      document.getElementById("slider").style.float = "left";
      document.getElementById("slideHousing").style.backgroundColor = "#e6e6e6";
  
      // Toggle dark mode off
      document.body.style.backgroundColor = "white";
      document.getElementById("header").style.color = "#000";
      document.getElementById("press").style.color = "#000";
    }
  }
//* necesario para popovers de bootstrap
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

//* necesario para alert bootstrap
// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// const alert = (message) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-danger mt-3 alert-dismissible" role="alert">`,
//     `<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     alert('El formulario no está activo actualmente')
//   })
// }

  //! evento al cargar

  function moverTexto(){

    let idTexto = document.getElementById('presentacion');
    let idFoto = document.getElementById('foto');
 

    if(idTexto.classList.contains('noMostrar')){

      idTexto.classList.remove('noMostrar');
      idTexto.classList.add('mostrar');

    }
    if(idFoto.classList.contains('noMostrar')){

      idFoto.classList.remove('noMostrar');
      idFoto.classList.add('mostrar');

    }
  }

  //! evento al hacer scroll y el elemento esté visible

  // esta función comprueba si un elemento esta visible en pantalla
  function isVisible(elm) {
    let rect = elm.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)/1.3;
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  
  // cuando se carga la página
  window.addEventListener('DOMContentLoaded', (ev0) => {
  // asignamos un evento scroll
    window.addEventListener('scroll', (ev1) => {
  // y a todos los elementos con la clase paused
      document.querySelectorAll(".paused").forEach(elm => {
        if (isVisible(elm)){ // que sean visibles
          elm.classList.remove("paused"); // les quitamos la clase paused
        }
      })
    });
  });  

  // ! evento onmouseover + onmouseout letras e iconos intereses

  function colorChange(x){

    if(x.classList.contains('text-success')){
      
      x.classList.remove('text-success');
      x.classList.add('text-light');
    }

  }

  function colorReset(x){

    if(x.classList.contains('text-light')){
      
      x.classList.remove('text-light');
      x.classList.add('text-success');
    }

  }

  function colorResetText(x){

    if(x.classList.contains('text-success')){
      
      x.classList.remove('text-success');
      x.classList.add('text-light');
    }

  }

  function colorChangeText(x){

    if(x.classList.contains('text-light')){
      
      x.classList.remove('text-light');
      x.classList.add('text-success');
    }

  }

  //! evento clic girar foto 

   
document.getElementById('foto').onclick = function() {rotar()};

function rotar(){

  document.getElementById('foto').classList.add('rotar');
  
}

//*He ido haciendo los eventos básicos y alguno un poco más complejo 
//*aún me queda practicar

//! validar formulario

// function valida_envia(){
//   //valido el nombre
//   if (document.fvalida.nombre.value.length==0){
//        alert("Tiene que escribir su nombre")
//        document.fvalida.nombre.focus()
//        return 0;
//   }

  
//   //el formulario se envia
//   alert("Muchas gracias por enviar el formulario");
//   document.fvalida.submit();
// }

function validacion() { 

  let nombre = document.getElementById("nameForm").value;
  let asunto = document.getElementById("textareaForm").value;
  let email = document.getElementById("emailForm").value;
  let tlf = document.getElementById("telForm").value;

  alert ("hola");

  let expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let expRegEmail = /^\w+@(\w+\.)+\w{2,4}$/; 
  let expRegTlf = /^\d{9}$/;
  

  if(!nombre)
  {
   alert("El campo nombre es requerido");
  
   return false;
  }
  if (!expRegNombre.exec(nombre))
  {
     alert("El campo nombre admite letras y espacios.")
   
     return false;
  }
    // campo asunto
  if(!asunto)
  {
  alert("El campo asunto es requerido");
  
  return false;
  }
  
  if(!email)
  {
   alert("El campo email es requerido");
   
   return false;
  }
  if(!expRegEmail.exec(email))
  {
    alert("El campo email no tiene el formato correcto.")
  
    return false;
  }

  if(!tlf)
  {
   alert("El campo teléfono es requerido");

   return false;
  }

  if(!expRegTlf.exec(tlf))
  {
    alert("El campo teléfono no es válido")
   
    return false;
  }

    return true;

}

window.onload = function(){

    let formulario = document.getElementById("contacto-frm");

    formulario.onsubmit = validacion;
  }