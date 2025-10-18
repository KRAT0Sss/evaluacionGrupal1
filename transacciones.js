cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    deshabilitarComponente("botonMovimientos");
    deshabilitarComponente("botonTransacciones");
    deshabilitarComponente("botonCuentas");
    deshabilitarComponente("txtValor");
    deshabilitarComponente("botonDepositar");
    deshabilitarComponente("botonRetirar");
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
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
}

ejecutarDeposito=function(){
    //Toma el numero de cuenta ingresado en la caja de texto
    //Toma el monto ingresado en la caja de texto
    //invoca a depositar
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta
}

depositar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
}

retirar=function(numeroCuenta,monto){
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
}