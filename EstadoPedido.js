// Variables globales
let input;
let valorInput;
let botonBuscar = document.getElementById("botonEnviarID");
let contenedorPrincipalDatosEnvio = document.getElementById('contenedorDatosEnvio');
let idNoexiste = document.getElementById('contendorIDIncorrecto');

// Variable del Pedido UNO
let estadoPaqueteUNO;
let fechaPedidoUNO = '12/10/2024';
let ActualizacionfechaUNO = '30/12/2025 2:00pm';

// Variables Pedido Dos
let estadoPaqueteDOS;
let fechaPedidoDOS = '4/12/2024';
let ActualizacionfechaDOS = '3/12/2025 4:00pm';

// Variables de estado de Pedido UNO

// estadoPaqueteUNO = 'Orden en proceso';
estadoPaqueteUNO = 'Esperando envío';
// estadoPaqueteUNO = 'Pedido enviado';
// estadoPaqueteUNO = 'Paquete en aeropuerto, esperando vuelo (CHN - E.E.U.U.)';
// estadoPaqueteUNO = 'Vuelo despegado';
// estadoPaqueteUNO = 'Paquete en aduanas';
// estadoPaqueteUNO = 'Paquete en almacén de EE.UU.';
// estadoPaqueteUNO = 'Salida a Venezuela programada';
// estadoPaqueteUNO = 'Paquete llegó a Venezuela';
// estadoPaqueteUNO = 'Paquete en aduana';
// estadoPaqueteUNO = 'Paquete procesado por aduanas';
// estadoPaqueteUNO = 'Paquete liberado de aduanas';
// estadoPaqueteUNO = 'Paquete en camino a destino';
// estadoPaqueteUNO = 'Paquete en Puerto Cabello.';


// Variables de estado de Pedido DOS

// estadoPaqueteDOS = 'Orden en proceso';
// estadoPaqueteDOS = 'Esperando envío';
// estadoPaqueteDOS = 'Pedido enviado';
estadoPaqueteDOS = 'Paquete en aeropuerto, esperando vuelo (CHN - E.E.U.U.)';
// estadoPaqueteDOS = 'Vuelo despegado';
// estadoPaqueteDOS = 'Paquete en aduanas';
// estadoPaqueteDOS = 'Paquete en almacén de EE.UU.';
// estadoPaqueteDOS = 'Salida a Venezuela programada';
// estadoPaqueteDOS = 'Paquete llegó a Venezuela';
// estadoPaqueteDOS = 'Paquete en aduana';
// estadoPaqueteDOS = 'Paquete procesado por aduanas';
// estadoPaqueteDOS = 'Paquete liberado de aduanas';
// estadoPaqueteDOS = 'Paquete en camino a destino';
// estadoPaqueteDOS = 'Paquete en Puerto Cabello.';


function datosPedido(nuevoEstado, fechaInicioPedido, nuevaFecha, ID) {

    // Obtener los elementos por su ID
    const idPedido = document.getElementById('numeroPedido');
    const fechaInicialP = document.getElementById('fechaInicialPedido');
    const elementoEstado = document.getElementById('textEstadoEnvio');
    const elementoFecha = document.getElementById('fechaActualizacion');

    // Actualizar el contenido de los elementos
    idPedido.textContent = '#' + ID;
    fechaInicialP.textContent = fechaInicioPedido;
    elementoEstado.textContent = nuevoEstado;
    elementoFecha.textContent = nuevaFecha;
}

function entradaDeDatos() {

    input = document.getElementById('buscadorID');
    valorInput = input.value;

    if (valorInput === '321') {
        idNoexiste.style.display = 'none';
        contenedorPrincipalDatosEnvio.style.display = 'flex'
        datosPedido(estadoPaqueteUNO, fechaPedidoUNO, ActualizacionfechaUNO, valorInput)

    } else if (valorInput === '123') {
        idNoexiste.style.display = 'none';
        contenedorPrincipalDatosEnvio.style.display = 'flex'
        datosPedido(estadoPaqueteDOS, fechaPedidoDOS, ActualizacionfechaDOS, valorInput)
    } else {
        contenedorPrincipalDatosEnvio.style.display = 'none'
        idNoexiste.style.display = 'flex';
    }
}

botonBuscar.addEventListener("click", function() {
    entradaDeDatos()
});

window.onload = function() {
    contenedorPrincipalDatosEnvio.style.display = 'none'
};