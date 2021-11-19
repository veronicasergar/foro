"use strict";

class Mensaje
{
  constructor(autor, texto, fecha) {
    this.autor = autor
    this.texto = texto
    this.fecha = fecha
    fecha = new Date()
    fecha = fecha.toUTCString()
  }
}

class ListaMensajes
{

}

let boton = document.getElementById("enviar");
boton.addEventListener("click", function() {
  let autor = document.getElementById("txtNombreUsuario").value
  let texto = document.getElementById("chat").value
  let fecha = new Date
  let mensaje = new Mensaje(autor, texto, fecha)
  document.getElementById("listaMensajes").innerHTML += mensaje.autor + ": " + mensaje.texto + " - " + mensaje.fecha.toLocaleDateString() + "<br>"
  document.getElementById("txtNombreUsuario").value = ""
  document.getElementById("chat").value = ""
});
