// hora local

let elementoHora = document.getElementById("hora");

function actualizarReloj() {
    let ahora = new Date();

    let horas = String(ahora.getHours()).padStart(2, "0");
    let minutos = String(ahora.getMinutes()).padStart(2, "0");
    let segundos = String(ahora.getSeconds()).padStart(2, "0");

    console.log(horas + ":" + minutos + ":" + segundos);

    elementoHora.textContent = horas + ":" + minutos + ":" + segundos;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);


//ventana 1 cuadro texto

let ventana1 = document.getElementById("ventana1");
let informacionVentana1 = document.getElementById("informacion-ventana1");
let visible1 = false;

ventana1.onclick = function () {
    if(visible1 == true){
        visible1 = false;
    }
    else{
        visible1 = true;
    }

    if(visible1 == true){
        informacionVentana1.style.opacity = "1";
    }
    else{
        informacionVentana1.style.opacity = "0";
    }
   
};




// cuadro de texto ventana 2

let ventana2 = document.getElementById("ventana2");
let informacionVentana2 = document.getElementById("informacion-ventana2");
let visible2 = false;

ventana2.onclick = function () {
    if(visible2 == true){
        visible2 = false;
    }
    else{
        visible2 = true;
    }

    if(visible2 == true){
        informacionVentana2.style.opacity = "1";
    }
    else{
        informacionVentana2.style.opacity = "0";
    }
   
};





// cuadro de texto ventana 3

let ventana3 = document.getElementById("ventana3");
let informacionVentana3 = document.getElementById("informacion-ventana3");
let visible3 = false;

ventana3.onclick = function () {
    if(visible3 == true){
        visible3 = false;
    }
    else{
        visible3 = true;
    }

    if(visible3 == true){
        informacionVentana3.style.opacity = "1";
    }
    else{
        informacionVentana3.style.opacity = "0";
    }
   
};





// cuadro de texto ventana 6

let ventana6 = document.getElementById("ventana6");
let informacionVentana6= document.getElementById("informacion-ventana6");
let visible6 = false;

ventana6.onclick = function () {
    if(visible6 == true){
        visible6 = false;
    }
    else{
        visible6 = true;
    }

    if(visible6 == true){
        informacionVentana6.style.opacity = "1";
    }
    else{
        informacionVentana6.style.opacity = "0";
    }
   
};



// CARGAR DATOS Y ASIGNAR A LOS CONTENEDORES

let datos;

async function cargarDatos() {
  let respuesta = await fetch("datos.json");
  datos = await respuesta.json();

  actualizarContenido();
}

// Cargar los datos al iniciar
cargarDatos();

let textoVentana1 = document.getElementById("texto-ventana1");
let textoVentana2 = document.getElementById("texto-ventana2");
let textoVentana3 = document.getElementById("texto-ventana3");
let textoVentana6 = document.getElementById("texto-ventana6");

// actualizar contenido

function actualizarContenido() {
  let ahora = new Date();
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();

  // Convertir la hora actual a minutos
  let horaActual = horas * 60 + minutos;

  // Buscar la franja horaria correspondiente
  let franja = datos.find(function (item) {
    let inicio = convertirAMinutos(item.hora_inicio);
    let fin = convertirAMinutos(item.hora_fin);

    if (inicio < fin) {
      return horaActual >= inicio && horaActual < fin;
    }

    // Franja que cruza la medianoche
    return horaActual >= inicio || horaActual < fin;
  });

  if (!franja) return;

  // Actualizar las cuatro ventanas
  textoVentana1.textContent = franja.ventana_1;
  textoVentana2.textContent = franja.ventana_2;
  textoVentana3.textContent = franja.ventana_3;
  textoVentana6.textContent = franja.ventana_6;

  // Actualizar y cargar archivos de audio
  audioVentana1.src = franja.audio_ventana_1;
  audioVentana1.load();
  audioVentana2.src = franja.audio_ventana_2;
  audioVentana2.load();
  audioVentana3.src = franja.audio_ventana_3;
  audioVentana3.load();
  audio_ventana_6.src = franja.audio_ventana_6;
  audio_ventana_6.load();
}

// Convertir "5:00" en 300 minutos
function convertirAMinutos(hora) {
  let partes = hora.split(":");
  return Number(partes[0]) * 60 + Number(partes[1]);
}

// Actualizar las ventanas cada minuto
setInterval(actualizarContenido, 60000);
