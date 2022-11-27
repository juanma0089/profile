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

  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

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

  //! evento al hacer scroll 

  // esta funcion comprueba si un elemento esta visible en pantalla
  function isVisible(elm) {
    let rect = elm.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)/1.3;
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  
  // cuando se carga la página...
  window.addEventListener('DOMContentLoaded', (ev0) => {
          // asignamos un evento scroll...
    window.addEventListener('scroll', (ev1) => {
                  // y a todos los elementos con la clase paused...
      document.querySelectorAll(".paused").forEach(elm => {
        if (isVisible(elm)){ // que sean visibles...
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