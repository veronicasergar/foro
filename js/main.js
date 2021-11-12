"use strict";

function Mensaje(autor, texto)
{
    this.autor = autor;
    this.texto = texto;
}

let fecha = new Date;
fecha = fecha.toUTCString();
let mensajes = [
      new Mensaje("Vero", "hola - " + fecha + "<br>"),
      new Mensaje("Pedro", "¿que tal? - " + fecha + "<br>"),
      new Mensaje("Lucia", "bien, gracias - " + fecha + "<br>")
  ];

let boton = document.getElementById("enviar");

function pasarAText() {
  let msg = "";

  mensajes.push(new Mensaje(document.getElementById("txtNombreUsuario").innerText.toString(), document.getElementById("listaMensajes").innerText.toString()))

  for (let mens of mensajes){
    msg += mens.autor.toString() + ":" + mens.texto.toString() + fecha + "<br>"
  }

  return msg
}

boton.addEventListener("click", pasarAText);
document.getElementById("listaMensajes").innerHTML += pasarAText();
