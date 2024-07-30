let btn1 = document.getElementById("btn-agregar")
let bnt2 = document.getElementById("bnt-editar")

let lista = JSON.parse(localStorage.getItem("tareas")) || [] //variable global//


function agregarTareas(){
    let nombreTarea = document.getElementById("inp-tarea").value
    let prioridadTarea = document.getElementById("inp-prioridad").value

    //objeto//
    let tarea = {
        nombre: nombreTarea,
        prioridad: prioridadTarea
    }
    lista.push(tarea)
    localStorage.setItem("tareas",JSON.stringify(lista))
}
function mostrarTareas() {
    let contenedorDeTareas = document.getElementById("contenedor")
    contenedorDeTareas.innerHTML= "" 
    lista.forEach((tarea,indice)=>{
    let li = document.createElement("li")    
                       //interpolacion//                          
    li.textContent = `La tarea es: ${tarea.nombre}         
     la prioridad es: ${tarea.prioridad}`

    let botonEditar = document.createElement("button")
        botonEditar.textContent = "Editar"
        botonEditar.addEventListener("click", ()=>editarTarea(indice))

    let botonEliminar = document.createElement("button")
        botonEliminar.textContent = "Eliminar"
        botonEliminar.addEventListener("click",()=>eliminarTarea(indice))

    li.appendChild(botonEditar)
    li.appendChild(botonEliminar)
    contenedorDeTareas.appendChild(li)
    })
}
mostrarTareas()
btn1.addEventListener("click",agregarTareas)



