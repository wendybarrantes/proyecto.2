let btn1 = document.getElementById("btn-agregar")
let bnt2 = document.getElementById("bnt-editar")

let tareas = JSON.parse(localStorage.getItem("tareas")) || []

function AgredarTareas(){
    let nombreTarea = document.getElementById("inp-tarea").value
    let prioridadTarea= document.getElementById(inp-prioridad).value

    //objeto//


    let tarea = {
        nombre: nombreTarea;
        prioridad: prioridadTarea;
    }

        listaTareas.push(tareas)

}