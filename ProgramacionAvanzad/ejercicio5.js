const ticket = {
    id: "TCK-001",
    titulo: "Error en impresora",
    estado: "abierto",
    prioridad: "alta",
    area: "2024-06-15-10:30:30",
    creador: {
        nombre: "jacob",
        email: "jaco@gmail.com"
    },
    asignados: ["Andres", "Ana"],
    comentarios: [
        {usuario: "Ana", mensaje: "Revisando el equipo"},
        {usuario: "Andres", mensaje: "Falta Toner"},
    ],
};

console.log("Titulo: ",ticket.titulo);
console.log("Estado: ",ticket.estado);

if (ticket.estado === "abierto"){
    ticket.estado = "cerrado"
} else {
    ticket.estado = "abierto"
}
console.log("Nuevo Estado: ",ticket.estado);

let nuevoCom = {
    usuario: "Luis", mensaje: "Problema Solucionado"
}
if(nuevoCom.comentarios !== ""){
    ticket.comentarios.push(nuevoCom);
}

if(ticket.asignados.length > 0){
    console.log("Personas Asignadas");
    for(let i = 0; i < ticket.asignados.length; i ++){
        console.log("-", ticket.asignados[i]);
    }
}

let nuevaP = "baja";

if(nuevaP === "alta" || nuevaP === "media" || nuevaP === "baja"){
    ticket.prioridad = nuevaP;
}
console.log("Nueva Prioridad:",ticket.prioridad);

let anaC = false;

for(let y = 0; y < ticket.comentarios.length; y++){
    if(ticket.comentarios[y].usuario === "Ana"){
        anaC = true;
        break;
    }
}
if(anaC){
    console.log("Ana ya dejo un comentario");
} else {
    console.log("Ana no ah dejado un comentario");
}