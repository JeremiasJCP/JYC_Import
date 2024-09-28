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


estadoPaqueteUNO = 'Procesando Orden';
// estadoPaqueteUNO = 'En Espera de envío';
// estadoPaqueteUNO = 'Pedido Enviado';
// estadoPaqueteUNO = 'Paquete llegó al aeropuerto, a la espera del vuelo';
// estadoPaqueteUNO = 'El vuelo despegó';
// estadoPaqueteUNO = 'Paquete en aduanas';
// estadoPaqueteUNO = 'Paquete ha llegado a nuestro almacén en EE.UU.';
// estadoPaqueteUNO = 'Salida a Venezuela Programada';
// estadoPaqueteUNO = 'El paquete llegó a Venezuela';
// estadoPaqueteUNO = 'Paquete entró en Aduana';
// estadoPaqueteUNO = 'Paquete Procesado por aduanas';
// estadoPaqueteUNO = 'Paquete salió de aduanas';
// estadoPaqueteUNO = 'Paquete salió a destino';
// estadoPaqueteUNO = 'Paquete en Puerto Cabello. Se le notificará vía WhatsApp para su retirada';


// Variables de estado de Pedido DOS


// estadoPaqueteDOS = 'Procesando Orden';
// estadoPaqueteDOS = 'En Espera de envío';
// estadoPaqueteDOS = 'Pedido Enviado';
// estadoPaqueteDOS = 'Paquete llegó al aeropuerto, a la espera del vuelo';
estadoPaqueteDOS = 'El vuelo despegó';
// estadoPaqueteDOS = 'Paquete en aduanas';
// estadoPaqueteDOS = 'Paquete ha llegado a nuestro almacén en EE.UU.';
// estadoPaqueteDOS = 'Salida a Venezuela Programada';
// estadoPaqueteDOS = 'El paquete llegó a Venezuela';
// estadoPaqueteDOS = 'Paquete entró en Aduana';
// estadoPaqueteDOS = 'Paquete Procesado por aduanas';
// estadoPaqueteDOS = 'Paquete salió de aduanas';
// estadoPaqueteDOS = 'Paquete salió a destino';
// estadoPaqueteDOS = 'Paquete en Puerto Cabello. Se le notificará vía WhatsApp para su retirada';


function datosPedido(nuevoEstado, fechaInicioPedido, nuevaFecha, ID) {

    // Obtener los elementos por su ID
    const idPedido = document.getElementById('numeroPedido');
    const fechaInicialP = document.getElementById('fechaInicialPedido');
    const elementoEstado = document.getElementById('textEstadoEnvio');
    const elementoFecha = document.getElementById('fechaActualizacion');

    // Actualizar el contenido de los elementos
    idPedido.textContent = ID;
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