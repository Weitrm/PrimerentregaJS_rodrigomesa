

// Array de oedidos hechos 
const pedido = [];

//Array de usuarios
const usuarios = [];

// Objetos de aire acondicionado
const aire9 = {
    tipo: "9000 BTU",
    precio: 300
};

const aire12 = {
    tipo: "12000 BTU",  
    precio: 400
};

const aire18 = {
    tipo: "18000 BTU",
    precio: 500
};

const aire24 = {
    tipo: "24000 BTU",
    precio: 600
};


// Objeto mensulas 
const mensulas = {
    tipo: "Mensula",
    precio: 25
};

// Objeto tuberias
const tuberias = {
    tipo: "Tuberias",
    precio: 20
};


// Funcion para sumar los pedidos
function sumarPedido() {
    let total = 0;
    for (let i = 0; i < pedido.length; i++) {
        total += (pedido[i].precio);
    }
    return total;
}

//Funcion para agregar productos
function agregarProducto(producto) {
    pedido.push(producto);
    console.log("Producto agregado:", producto.tipo, "Precio:", producto.precio + " USD");
}


// Funcion para crear usuario
function crearUsuario() {
    const usuario = prompt("Ingrese su usuario:");
    const password = prompt("Ingrese su constraseña:");
    const cuentas = {
        nombre: usuario,
        contraseña: password,
    };
    usuarios.push(cuentas);
    console.log("Usuario creado:", cuentas);
}

// Funcion para mostrar los usuarios
function mostrarUsuarios() {
    if (usuarios.length === 0) {
        console.log("No hay usuarios registrados.");
    } else {
        console.log("Usuarios registrados:");
        for (let i = 0; i < usuarios.length; i++) {
            console.log(usuarios);
    }}

}

// Funcion para mostrar el pedido actual
function mostrarPedido() {
    if (pedido.length === 0) {
        console.log("No hay productos en el pedido.");
        return;
    } else {
        console.log("Pedido actual:");
        for (let i = 0; i < pedido.length; i++) {
            console.log(pedido[i].tipo, "Precio:", pedido[i].precio);
        }
        console.log("Total a pagar:", sumarPedido(), "USD");
    }
}


let menuPrincipal;
do {
    menuPrincipal = prompt("Bienvenido a la tienda de Refrigeración, ¿Qué desea hacer? \n 1. Crear usuario \n 2. Hacer pedido \n 3. Mostrar usuarios Registrados \n 4. Mostrar pedido actual \n 5. Salir");
    switch (menuPrincipal) {

        case "1":
            crearUsuario();
            break;

        case "2":
            let opcionProducto;
            do {
                opcionProducto = prompt("¿Qué producto desea agregar? \n 1. Aire acondicionado 9000 BTU \n 2. Aire acondicionado 12000 BTU \n 3. Aire acondicionado 18000 BTU \n 4. Aire acondicionado 24000 BTU \n 5. Mensula \n 6. Tuberias \n 7. Mostrar pedido \n 8. Volver al menú principal");
                switch (opcionProducto) {
                    case "1":
                        agregarProducto(aire9);
                        break;
                    case "2":
                        agregarProducto(aire12);
                        break;
                    case "3":
                        agregarProducto(aire18);
                        break;
                    case "4":
                        agregarProducto(aire24);
                        break;
                    case "5":
                        agregarProducto(mensulas);
                        break;
                    case "6":
                        agregarProducto(tuberias);
                        break;
                    case "7":
                        mostrarPedido();
                        break;
                    case "8":
                        console.log("Volviendo al menú principal...");
                        break;
                    default:
                        console.log("Error. Intente de nuevo.");
                }
            } while (opcionProducto !== "8");
            break;

        case "3":
            mostrarUsuarios();
            break;

        case "4":
            mostrarPedido();    
            break;

        case "5":
            console.log("Saliendo del programa");
            break;
        default:
            console.log("Error. Intente de nuevo.");
    }
} while (menuPrincipal !== "5");