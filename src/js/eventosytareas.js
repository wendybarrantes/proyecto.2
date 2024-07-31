alert("holaa")
let btnAgg = document.getElementById("btn-agregar")
let btnActualizar = document.getElementById("bnt-actualizar")
let listaDeTareas= JSON.parse(localStorage.getItem("tareas")) || [] //variable global//

////////////////////////////////////////////////////////////////////////////////////
 function agregarTareas(){
    let nombreTarea = document.getElementById("inp-agg-tarea").value
    let prioridadTarea = document.getElementById("inp-agg-prioridad").value

    //creo un objeto para guardar los valores de los objetos//
    let tarea = {
        nombre:nombreTarea,
        prioridad:prioridadTarea
    }
    //le hago un push (enviar datos) a la lista global, la cual contiene todas las tareas.
    listaDeTareas.push(tarea)

    //guardo en el Local Storage la tarea//
    localStorage.setItem("tareas",JSON.stringify(listaDeTareas))
    mostrarTareas()
}

    ////////////////////////////////////////////////////////////////////////////////////

function mostrarTareas() {
    //Referencio el ul del HTML en el que se iran guardando visualmente las tareas.
    let contenedorDeTareas = document.getElementById("contenedorDeTareas")
        contenedorDeTareas.innerHTML = ""
    //Recorro la lista global para iterar cada una de las tareas.
    listaDeTareas.forEach((tarea, indice)=>{
    let li = document.createElement("li")
        li.textContent = `La tarea es: ${tarea.nombre} prioridad:${tarea.prioridad}`
        
    let botonEditar = document.createElement("button")
        botonEditar.textContent = "EditarS"
        botonEditar.addEventListener("click",()=>{
            editarTarea(indice)
        })

    let botonEliminar = document.createElement("button")
        botonEliminar.textContent = "Eliminar"
        botonEliminar.addEventListener("click",()=> eliminarTarea(indice))

        li.appendChild(botonEditar)
        li.appendChild(botonEliminar)
        contenedorDeTareas.appendChild(li)
    })
}

//////////////////////////////////////////////////////////////////////////////////////

function eliminarTarea(indice) {
    listaDeTareas.splice(indice,1)
    localStorage.setItem("tareas",JSON.stringify(listaDeTareas))
    mostrarTareas() 
}

///////////////////////////////////////////////////////////////////////////////////////

let tareaEnEdicion = null;

function editarTarea(indice) {
    tareaEnEdicion = indice;
    
    let editarInput = document.getElementById("inp-editar-tarea");
    let editarPrioridad = document.getElementById("inp-editar-prioridad");
    let btnActualizar = document.getElementById("bnt-actualizar");

    editarInput.style.display = "block";
    editarPrioridad.style.display = "block";
    btnActualizar.style.display = "block";

    editarInput.value = listaDeTareas[indice].nombre;
    editarPrioridad.value = listaDeTareas[indice].prioridad;

    btnActualizar.removeEventListener("click", actualizarHandler);
    
    function actualizarHandler() {
        ConfirmarEdicion();
    }
    
    btnActualizar.addEventListener("click", actualizarHandler);
}

function ConfirmarEdicion() {
    let editarInput = document.getElementById("inp-editar-tarea").value;
    let editarPrioridad = document.getElementById("inp-editar-prioridad").value;

    listaDeTareas[tareaEnEdicion] = {
        nombre: editarInput,
        prioridad: editarPrioridad
    };

    localStorage.setItem("tareas", JSON.stringify(listaDeTareas));

    let editarInputElemento = document.getElementById("inp-editar-tarea");
    let editarPrioridadElemento = document.getElementById("inp-editar-prioridad");
    let btnActualizar = document.getElementById("bnt-actualizar");

    editarInputElemento.style.display = "none";
    editarPrioridadElemento.style.display = "none";
    btnActualizar.style.display = "none";

    mostrarTareas();
}

mostrarTareas()
btnAgg.addEventListener("click", agregarTareas)







    


