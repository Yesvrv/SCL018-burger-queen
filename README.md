# Burger Queen :hamburger:
ReactJS - Interfaz web SPA - Tablet First

## Índice

- [Burger Queen :hamburger:](#burger-queen-hamburger)
  - [Índice](#índice)
  - [1. Preámbulo](#1-preámbulo)
  - [2. Información del cliente](#2-información-del-cliente)
  - [3. Diseño visual de la aplicación](#3-diseño-visual-de-la-aplicación)
- [Prototipo de alta fidelidad](#prototipo-de-alta-fidelidad)
- [Interfaz desplegada](#interfaz-desplegada)
  - [4. Consideraciones generales](#4-consideraciones-generales)
***

## 1. Preámbulo

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente

## 2. Información del cliente

Esta es la información que tenemos del cliente:

> Somos **Burger Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por $ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
>el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

## 3. Diseño visual de la aplicación

### Prototipo de alta fidelidad


![prototipo-1](src/assets/img/prototipo/prototipo_1.png)

![prototipo_2](src/assets/img/prototipo/prototipo_2.png)


### Interfaz desplegada

![homepage-waiter-view](src/assets/img/interfaz/homepage_waiter_view.png)


![kitchen-serving](src/assets/img/interfaz/kitchenview_to_serve_list.png)

## 4. Consideraciones generales

Este proyecto fue resuelto en duplas y la lógica del proyecto está implementada completamente 
en JavaScript(ES6+), HTML, CSS, ReactJS y empaquetada de manera automatizada.

La aplicación es una _Single Page App_. Los pedidos se toman desde una
_tablet_, en una web app **responsive**.

La aplicación desplegada tiene 80% o más en las puntuaciones de
Performance, Accessibility y Best Practices de Lighthouse.


![performance](src/assets/img/interfaz/performance_burger_queen.png)

