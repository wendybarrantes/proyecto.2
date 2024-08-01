let btnInicio = document.getElementById("btnInicio")
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
let inspeccion = false 

function iniciarSesion(evento) {
    evento.preventDefault()

    let inputCorreo =document.getElementById("inp-email").value 
    let inputClave =document.getElementById("inp-contrasena").value

    if (inputCorreo && inputClave) {
      for (let index = 0; index < usuarios.length; index++) {
    if (usuarios[index].correo === inputCorreo && usuarios[index].contrasena === inputClave){
        inspeccion = true
        break
    }       
      }
    }
    if (inspeccion) {
        window.location.href="eventosytareas.html"   
    }
    else{
        alert(" Datos incorrectos")
    }
}
btnInicio.addEventListener("click", iniciarSesion)
