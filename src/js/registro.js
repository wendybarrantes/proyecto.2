let btnCrearCuenta = document.getElementById("btnCrearCuenta")
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
let inspeccion = false 


function crearUsuario(evento) {
    evento.preventDefault()
   let inpClave = document.getElementById("inp-contrasena-Cuenta").value
   let inpCorreo = document.getElementById("inp-correo-cuenta").value

   if (inpClave && inpCorreo) {
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].correo === inpCorreo) {
            inspeccion = true
            break
        }
    }
   }
   if (inspeccion) {
    alert("El usuarios ya existe")
   }else{
    let usuario ={
        correo: inpCorreo,
        contrasena: inpClave
    }
    usuarios.push(usuario)
    localStorage.setItem("usuarios",JSON.stringify(usuarios))
    alert("usuario creado")
    window.location.href= "iniciosesion.html"
   }
}
btnCrearCuenta.addEventListener("click", crearUsuario)