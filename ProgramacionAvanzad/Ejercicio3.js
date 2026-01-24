const alumno = {nombre : "Javier", semestre : "2024B", calificacion1 : 9, calificacion2 : 8, calificacion3 : 7};

const promedio = (alumno.calificacion1 + alumno.calificacion2 + alumno.calificacion3) / 3;
const paso = promedio >= 7;

console.log("Nombre ", alumno.nombre);
console.log("Promedio ", promedio);
console.log("Paso? ", paso);
