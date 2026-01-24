let saldo = 1000;

function cajero(opcion,monto){
switch (opcion){
    case "consultar":
        console.log(saldo);
    break;
    case "deposito":
    if (monto > 0){
        saldo += monto;
        console.log("Deposito Exitoso ", saldo);

    }else{
        console.log("saldo invalido")
    }
    break;
    case "retirar":
        if (monto > 0 && monto <= saldo){
        saldo -= monto;
        console.log("Retiro Exitoso ", saldo);

    }else{
        console.log("saldo invalido")
    }
    break;
    default:
        console.log("seleccione una opcion");
        break;
    }

}
cajero("consultar");
cajero("depositar", 500);
cajero("retirar", 300);
