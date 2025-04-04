Primer entrega del curso de JavaScript flex (Comision 75785) de Rodrigo Mesa.

Lo que intente recrear aca es una tienda o una app que pueda crear facturas para una tienda o un tecnico de aire acondicionado,
ya que mi proyecto final esta relacionado con esto.

En el trabajo presenté lo siguiente: 
- Un array que permite guardar el pedido que el usuario esta sumando.
- Un array que guarda los usuarios registrados .

- Los objetos que se guardaran en el array de los pedidos (aire acondicionado, mensulas, etc).

- Funciones que hacen lo siguiente:
 - sumarPedido(): Suma el precio de cada objeto y lo va sumando a un total.
 - agregarProducto(): Agrega los productos que seleccione el usuario a el parametro "producto" y este se guarda en el array "pedido".
 - crearUsuario(): Mediante un prompt pide ingresar "usuario" y "contraseña", el objeto "cuentas". 
		   toma el valor de lo que ingresó el usuario y se guarda en "usuarios" mediante .push.
 - mostrarUsuario(): Muestra los usuarios que hay guardados en el array "usuarios" y agregue un if para que nos de un mensaje si no hay usuarios registrados.
 - mostrarPedido(): Muestra el pedido que se haya hecho, como si fuera una factura, también agregue que si no hay ningun pedido nos de un mensaje. 

Para el menu usé switch case, el cual funciona de la siguiente manera: 

Cree la variable "menuPrincipal" la cual alberga el bucle do while, que lo uso para que se repita el menu hasta que el usuario seleccione "5"
para salir.

Case 1: Llama a la funcion crearUsuario().
Case 2: Nuevamente uso switch case para que el usuario pueda elegir que productos quiere agregar
	con el bucle do while para que se repita hasta que quiera salir.
Case 3: Llama a la funcion mostrarUsuarios().
Case 4: Llama a la funcion mostrarPedido().
Case 5: Sale del programa
Default: En caso de que no ingrese ninguna de las anteriores





