cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]

//inicio cuentas

cargarCuentas=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas();
}
cargarMovimientos=function(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
}
cargarTransacciones=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    deshabilitarComponente("txtValor");
    deshabilitarComponente("botonDepositar");
    deshabilitarComponente("botonRetirar");
    mostrarTexto('lblValor', "");
    mostrarTextoEnCaja("txtValor", "");
    mostrarTexto('lblCuenta', "");
    mostrarTextoEnCaja("txtCuenta", "");
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
    let elementoCuentas;
    for(i=0;i<cuentas.length;i++){
        elementoCuentas=cuentas[i];
        if(numeroCuenta == elementoCuentas.numeroCuenta){
            return elementoCuentas;
        }
    }
    return null
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta=function(cuenta){
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
    let persona=buscarCuenta(cuenta.numeroCuenta);
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
// fin cuentas

//inicio movimientos

consultarMovimientos = function () {
    let numeroCuenta = recuperarTexto("txtNumeroCuenta");
    filtrarMovimientos(numeroCuenta);
}


filtrarMovimientos = function (numeroCuenta) {
    let movimientosCuenta = [];
    //Se barre el arreglo de movimientos
    for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i].numeroCuenta == numeroCuenta) {
            movimientosCuenta.push(movimientos[i]);
        }
    }
    mostrarMovimientos(movimientosCuenta);
    //En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
    //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
    //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos = function (misMovimientos) {
    let movimientosM;
    let cmpTabla = document.getElementById("tablaMovimientos");
    let tabla = ` 
    <table>
        <thead>
            <tr><td>NUMERO CUENTA</td>
            <td>MONTO</td>
            <td>TIPO</td></tr>
        </thead>
        <tbody>
    `;
    for (let i = 0; i < misMovimientos.length; i++) {

        movimientosM = misMovimientos[i];

        let montonMostrar = movimientosM.monto

        if (movimientosM.tipo == "D") {
            montonMostrar = movimientosM.monto * (-1);
        }
        if (movimientosM.tipo == "C") {
            montonMostrar = movimientosM.monto
        }
        tabla += "<tr><td>" + movimientosM.numeroCuenta + "</td>";
        tabla += "<td>" + montonMostrar + "</td>";
        tabla += "<td>" + movimientosM.tipo + "</td></tr>";
    }
    tabla += `
        </tbody>
    </table>
    `;
    cmpTabla.innerHTML = tabla;


    //Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
    //Columnas: NUMERO CUENTA, MONTO, TIPO
    //Si ya pinta correctamente la tabla, hacer el siguiente cambio:
    //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
    //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)
}
//fin movimientos

//inicio transacciones

ejecutarBusqueda=function(){
    let cuentaRecuperada = recuperarTexto("txtCuenta"); //toma el numero de cuenta de la caja de texto
    let resultado = buscarCuenta(cuentaRecuperada); //invoca a buscarCuenta y guarda el resultado en una variable
    if(resultado != null){  //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
        mostrarTexto("lblCuenta", resultado.nombre +" "+resultado.apellido+"\nC.I: "+ resultado.cedula + '\nCuenta: '+resultado.numeroCuenta+"\nSaldo: "+resultado.saldo);
        habilitarComponente("botonDepositar");
        habilitarComponente("botonRetirar");  
        habilitarComponente("txtValor");      
    }else{
        alert("Cuenta Inexistente");
    }
}

depositar=function(numeroCuenta,monto){
    let cuentaAfectada = buscarCuenta(numeroCuenta); //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    cuentaAfectada.saldo+=monto;//Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
    return cuentaAfectada.saldo;
}

ejecutarDeposito=function(){
    let numeroCuenta = recuperarTexto('txtCuenta'); //Toma el numero de cuenta ingresado en la caja de texto
    let monto = recuperarFloat('txtValor'); //Toma el monto ingresado en la caja de texto
    let saldoFinal = depositar(numeroCuenta, monto); //invoca a depositar
    mostrarTexto('lblValor', "TRANSACCION EXITOSA\n"+"Saldo actual: "+saldoFinal+" $"); //Muestra un mensaje TRANSACCION EXITOSA  //Muestra en pantalla el nuevo saldo de la cuenta
}

retirar=function(numeroCuenta,monto){
    let cuentaAfectada = buscarCuenta(numeroCuenta); //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    if(monto <= cuentaAfectada.saldo){ //Valida si la cuenta tiene el saldo suficiente para retirar el monto
        cuentaAfectada.saldo-=monto; //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
        mostrarTexto('lblValor', "TRANSACCION EXITOSA\n"+"Saldo actual: "+cuentaAfectada.saldo+" $");  //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
    }else{ //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
        alert("SALDO INSUFICIENTE!");
    }
}
ejecutarRetiro=function(){
    let numeroCuenta = recuperarTexto('txtCuenta'); //Toma el numero de cuenta ingresado en la caja de texto
    let monto = recuperarFloat('txtValor'); //Toma el monto ingresado en la caja de texto
    retirar(numeroCuenta, monto); //invoca a retirar
}

//fin transacciones


/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte


//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos


