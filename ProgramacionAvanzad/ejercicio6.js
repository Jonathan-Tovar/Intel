const plataforma = {
    nombre: "IntelFlix",
    plan: "Premiun",
    usuario: {
        nombre: "Stili Stahlstrum",
        edad: 22,
    },
    perfiles: [
        {
            nombre: "Stili Stahlstrum",
            favoritos: ["Dark", "The Great War"],
            historial: ["Dark"],
        },
        {
            nombre: "Styku Stahlstrum",
            favoritos: ["Tiger II", "The Panzer"],
            historial: [""],
        },
    ]
};

console.log("Nombre:", plataforma.usuario.nombre);

if(plataforma.plan === "Premiun"){
    plataforma.plan = "Pro"
} else {
    plataforma.plan = "Premiun"
}
console.log("Nuevo Plan:",plataforma.plan);

let nuevoS = "Los Fundadores"
let existe = false;

for(let i = 0; i < plataforma.perfiles[0].favoritos.length; i++){
    if(plataforma.perfiles[0].favoritos[i] === nuevoS){
        existe = true;
        break;
    }
}
if(!existe){
    plataforma.perfiles[0].favoritos.push(nuevoS);
    console.log("Nueva serie:", nuevoS);
}

if(plataforma.perfiles[0].historial.length > 0){
    console.log("Historial:");
    for(let y = 0; y < plataforma.perfiles[0].historial.length; y++){
    console.log("-",plataforma.perfiles[0].historial[y]);
    }
}
if(plataforma.usuario.edad >= 18){
    console.log("El usuario es mayor de edad");
} else {
    console.log("El Usuario es menor de edad");
}
