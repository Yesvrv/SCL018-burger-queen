import "@material-tailwind/react/tailwind.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import menu from "./menu.json";
import Home from "./componentes/Home";
import Waiter from "./componentes/waiter/Waiter";
import Kitchen from "./componentes/kitchen/Kitchen";
import ToDelivery from "./componentes/delivery/ToDelivery";

const dataMenu = menu;
export const ContextProducts = React.createContext();

// componente principal de la aplicación
const App = () => {
  //estado data del cliente para pasar a resumeOrder y a clientForm. El input comienza vacío
  const [name, changeName] = useState("");
  const [table, changeTable] = useState("");
  //estado data de menu para pasar a drinks, food y resumeOrder
  const [products, setProducts] = useState({
    menuArrays: dataMenu,
    resumeOrder: []
  });

  const [ordersToServe, showOrdersToServe] = useState([])

  const [orders, showOrders] = useState([])

  const [statusReady, setStatusReady] = useState({
    status: "Pendiente"
  });

  const [statusDelivered, setStatusDelivered] = useState({
    status: "Listo"
  });

  const addProducts = (dish) => {
    return setProducts({
      ...products,
      // find devuelve el valor del primer elemento del arreglo que cumple con la función
      resumeOrder: products.resumeOrder.find((product) => product.id === dish.id)
        ? products.resumeOrder.map((product) =>
          product.id === dish.id
            ? { ...product, count: product.count + 1 }
            : product
        )
        : [...products.resumeOrder, { ...dish, count: 1 }]
    });
  }

  const removeFromOrder = (id) => {
    setProducts({
      ...products,
      resumeOrder: products.resumeOrder.filter((product) => product.id !== id)
    });
  };

  const clearProductsFromOrder = () => {
    setProducts({
      ...products,
      resumeOrder: []
    })
  }

  const increase = (id) => {
    setProducts({
      ...products,
      resumeOrder: products.resumeOrder.map((product) =>
        product.id === id
          ? { ...product, count: product.count + 1 }
          : product
      )
    });
  };

  const decrease = (id) => {
    setProducts({
      ...products,
      resumeOrder: products.resumeOrder.map((product) =>
        product.id === id
          ? { ...product, count: product.count > 1 ? product.count - 1 : 1 }
          : product
      )
    });
  };

  const totalOrderAmount = products.resumeOrder
    // ejecuta una función reductora sobre cada elemento del arreglo, devuelve un único valor
    .reduce((total, dish) => (total = total + dish.price * dish.count), 0)
    // formateamos el monto total para que el valor devuelto contenga 2 dígitos decimales 
    .toFixed(2);

  const resumeProps = {
    name,
    table,
    changeName,
    changeTable,
    products,
    addProducts,
    removeFromOrder,
    clearProductsFromOrder,
    increase,
    decrease,
    totalOrderAmount,
    statusReady,
    setStatusReady,
    statusDelivered,
    setStatusDelivered,
    orders,
    showOrders,
    ordersToServe,
    showOrdersToServe
    
  };

  return (
    <ContextProducts.Provider value={resumeProps}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/toDelivery" element={<ToDelivery />} />
      </Routes>
    </ContextProducts.Provider>
  );
}

export default App;
