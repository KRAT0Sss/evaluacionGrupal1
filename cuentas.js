cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    
}

mostrarCuentas=function(){
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
    let cmpTabla=document.getElementById("mostrarTabla");
    let tabla="<table>";
    for(let i=0; i<cuentas.length; i++){
        tabla+="<tr><td>"+cuentas[i].numeroCuenta+"</td><td>"+cuentas[i].cedula+"</td><td>"
        +cuentas[i].nombre+"</td><td>"+cuentas[i].apellido+"</td><td>"+cuentas[i].saldo+"</td></tr>";
    }
    tabla+="</table>";
    cmpTabla.innerHTML=tabla;
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta=function(numeroCuenta){
    let persona;
    let personaEncontrada=null;
    for(let i=0; i<cuentas.length; i++){
        persona=cuentas[i];
        if (persona.numeroCuenta == numeroCuenta.numeroCuenta) {
            personaEncontrada = persona;
            break;
        }
    }
    return personaEncontrada;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
    let persona=buscarCuenta(cuenta);
    if(persona==null){
        cuentas.push(cuenta);
        alert("CUENTA AGREGADA");
    }else{
        alert("CUENTA EXISTENTE");
    }
}

agregar=function(){
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
    let nuevaCuenta={};
    
    let numeroCuenta=recuperarTexto("txtNumero");
    let cedula=recuperarTexto("txtCedula");
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    nuevaCuenta.numeroCuenta=numeroCuenta;
    nuevaCuenta.cedula=cedula;
    nuevaCuenta.nombre=nombre;
    nuevaCuenta.apellido=apellido;
    nuevaCuenta.saldo=0.0;
    agregarCuenta(nuevaCuenta);
    mostrarCuentas();
}
