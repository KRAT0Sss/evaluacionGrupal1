movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]

cargar = function () {
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");

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
            <tr><td>N° CUENTA</td>
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




