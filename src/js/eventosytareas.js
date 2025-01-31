
let btnAgg = document.getElementById("btn-agregar")
let btnActualizar = document.getElementById("bnt-actualizar")
let listaDeTareas= JSON.parse(localStorage.getItem("tareas")) || [] //variable global//

////////////////////////////////////////////////////////////////////////////////////
 function agregarTareas(){
    let nombreTarea = document.getElementById("inp-agg-tarea").value
    let prioridadTarea = document.getElementById("inp-agg-prioridad").value

    let nombreTareaElemento = document.getElementById("inp-agg-tarea")
    let prioridadTareaElemento = document.getElementById("inp-agg-prioridad")

    //creo un objeto para guardar los valores de los tareas//
    let tarea = {
        nombre:nombreTarea,
        prioridad:prioridadTarea
    }
    //le hago un push (enviar datos) a la lista global, la cual contiene todas las tareas.
    listaDeTareas.push(tarea)

    //guardo en el Local Storage la tarea//
    localStorage.setItem("tareas",JSON.stringify(listaDeTareas))
    nombreTareaElemento.value = ""
    prioridadTareaElemento.value = ""
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
        botonEditar.textContent = "Editar"
        botonEditar.addEventListener("click",()=>{
            editarTarea(indice)
        })
botonEditar.style.marginLeft="200px"
botonEditar.style.marginRight="20px"
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

    editarInput.style.display = "inline";
    editarPrioridad.style.display = "inline";
    btnActualizar.style.display = "inline";

    editarInput.value = listaDeTareas[indice].nombre;
    editarPrioridad.value = listaDeTareas[indice].prioridad;

    btnActualizar.removeEventListener("click", manejoActualizacion)
    
    function manejoActualizacion() {
        ConfirmarEdicion()
    }
    
    btnActualizar.addEventListener("click", manejoActualizacion)
}

//////////////////////////////////////////////////////////////////////////

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


//EVENTOS//

let btnAggEvento = document.getElementById("btn-agregar-evento")
let btnActualizarEvento = document.getElementById("bnt-actualizar-evento")
let listaDeEventos= JSON.parse(localStorage.getItem("eventos")) || [] //variable global//

//////////////////////////////////////////////////////////////////////////////////

function agregarEventos(){
    let nombreEvento= document.getElementById("inp-agg-evento").value
    let FechaEvento = document.getElementById("inp-agg-fecha").value

    let nombreEventoElemento= document.getElementById("inp-agg-evento")
    let FechaEventoElemento = document.getElementById("inp-agg-fecha")

    let evento = {
        nombre:nombreEvento,
        fecha:FechaEvento
    }
    listaDeEventos.push(evento)

    localStorage.setItem("eventos",JSON.stringify(listaDeEventos))
    nombreEventoElemento.value=""
    FechaEventoElemento.value=""
    mostrarEventos()
}

///////////////////////////////////////////////////////////////////////////////////////

function mostrarEventos() {
    let contenedorDeEventos = document.getElementById("contenedorDeEventos")
        contenedorDeEventos.innerHTML = ""

        listaDeEventos.forEach((evento, indice)=>{
    let li = document.createElement("li")
        li.textContent = `El evento es:${evento.nombre} fecha:${evento.fecha}`
                
    let botonEditarEvento = document.createElement("button")
        botonEditarEvento.textContent = "Editar"
        botonEditarEvento.addEventListener("click",()=>{
        editarEvento(indice)
        })
        botonEditarEvento.style.marginLeft="200px"
        botonEditarEvento.style.marginRight="20px"
    let botonEliminarEvento = document.createElement("button")
        botonEliminarEvento.textContent = "Eliminar"
        botonEliminarEvento.addEventListener("click",()=> eliminarEvento(indice))
        
        li.appendChild(botonEditarEvento)
        li.appendChild(botonEliminarEvento)
        contenedorDeEventos.appendChild(li)
        })
        }

     /////////////////////////////////////////////////////////////////////////////////      
        
function eliminarEvento(indice) {
    listaDeEventos.splice(indice,1)
    localStorage.setItem("eventos",JSON.stringify(listaDeEventos))
    mostrarEventos() 
    }
    
    ///////////////////////////////////////////////////////////////////////////////
        
    let eventoEnEdicion = null;

function editarEvento(indice) {
    eventoEnEdicion = indice;
        
    let editarInputEvento = document.getElementById("inp-editar-evento");
    let editarFecha = document.getElementById("inp-editar-fecha");
    let btnActualizarEvento = document.getElementById("bnt-actualizar-evento");
    
    editarInputEvento.style.display = "inline";
    editarFecha.style.display = "inline";
    btnActualizarEvento.style.display = "inline";
    
    editarInputEvento.value = listaDeEventos[indice].nombre;
    editarFecha.value = listaDeEventos[indice].fecha;
    
    btnActualizarEvento.removeEventListener("click", manejoActualizacion)
        
function manejoActualizacion() {
    ConfirmarEdicionEvento()
    }
        
    btnActualizarEvento.addEventListener("click", manejoActualizacion)
    }

    ////////////////////////////////////////////////////////////////////////

function ConfirmarEdicionEvento() {
    let editarInputEvento = document.getElementById("inp-editar-evento").value;
    let editarFecha = document.getElementById("inp-editar-fecha").value;
    
    listaDeEventos[eventoEnEdicion] = {
        nombre: editarInputEvento,
        fecha: editarFecha
    };
    
    localStorage.setItem("eventos", JSON.stringify(listaDeEventos));
    
    let editarInputEventoElemento = document.getElementById("inp-editar-evento");
    let editarFechaElemento = document.getElementById("inp-editar-fecha");
    let btnActualizarEvento = document.getElementById("bnt-actualizar-evento");
    
        editarInputEventoElemento.style.display = "none";
        editarFechaElemento.style.display = "none";
        btnActualizarEvento.style.display = "none";
    
        mostrarEventos();
    }
    mostrarEventos()
    btnAggEvento.addEventListener("click", agregarEventos)
    
     
    




    








    


