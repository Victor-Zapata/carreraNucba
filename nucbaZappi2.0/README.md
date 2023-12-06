## Clase 4 - Carrito & Checkout 🍕

En la clase 4 del Nucba Zappi, las siguientes funcionalidades son:

- Lógica del carrito (persistida en Redux Persist)
- Checkout con sus validaciones en Formik
- Renderizado dinámico del pedido en el Checkout

<br>

## Archivos modificados

| Archivo                                                  | Descripción                                                                                                                                 |
| :------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `redux/cart/cartSlice.js`                                | Reducers del carrito en Redux                                                                                                               |
| `redux/cart/cart-utils.js`                               | Utilidades para el reducer del carrito en Redux                                                                                             |
| `redux/store.js`                                         | Agregar reducer del carrito y la whitelist que persita el mismo                                                                             |
| `components/Productos/CardProducto.jsx`                  | Acción de agregar un producto                                                                                                               |
| `components/Recomendados/CardRecomendacion.jsx`          | Acción de agregar un producto                                                                                                               |
| `components/Navbar/Navbar.jsx`                           | Cambio de lógica para la apertura del carrito ( useState a Redux )                                                                          |
| `components/Navbar/CartIcon/CartIcon.jsx`                | Manejo de la apertura y cierre del carrito + total de productos                                                                             |
| `components/Navbar/ModalCart/ModalCart.jsx`              | Manejo de la apertura y cierre del carrito + acción para limpiar + lógica de precios + renderizado de las cards según los items del carrito |
| `components/Navbar/ModalCart/ModalCartCard.jsx`          | Control de la cantidad de items de un mismo producto en el carrito + renderizado dinámico                                                   |
| `pages/Checkout/Checkout.jsx`                            | Paso de estados como props a sus componentes                                                                                                |
| `components/Checkout/Products/ProductsCheckout.jsx`      | Renderizado dinámico de las cards del carrito en la pagína del checkout                                                                     |
| `components/CardProductCheckout/CardProductCheckout.jsx` | Control de la cantidad de items de un mismo producto en el checkout + renderizado dinámico                                                  |
| `components/Checkout/Form/CheckoutForm.jsx`              | Se incluye la lógica de Formik + deshabilitación del botón submit si no hay items en el carrito                                             |
| `components/UI/Input/Input.jsx`                          | Lógica del Field de Formik para el Checkout                                                                                                 |
| `formik/index.js`                                        | Exportaciones de Formik                                                                                                                     |
| `formik/initialValues.js`                                | Valores iniciales de Formik para el Checkout                                                                                                |
| `formik/validationSchema.js`                             | Validación de Yup para el Checkout                                                                                                          |

<br>

## Siguientes pasos

Al iniciar la clase 5, debemos movernos a la siguiente rama:

```bash
  git checkout feature/login

```

- https://github.com/Nucba-React/nucbaZappi2.0/tree/feature/login
