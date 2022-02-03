/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import { ContextProducts } from "../../App";
import Orders from "./Orders";
import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const OrdersList = () => {
  const globalContext = useContext(ContextProducts);
  const orders = globalContext.orders;
  const showOrders = globalContext.showOrders;

  useEffect(() => {
    onSnapshot(
      collection(db, "pedidos"),
      (snapshot) => {
        const arrayOrders = snapshot.docs.map((order) => {
          return { ...order.data(), id: order.id };
        })
        showOrders(arrayOrders);
      }
    )
  }, [])

  let pendingOrders = orders.filter((order) => {
    return order.status.status === "Pendiente";
  })

  let sortedPendingOrders = pendingOrders.sort((a, b) => {
    if (a.orderTime < b.orderTime) {
      return 1;
    }
    if (a.orderTime > b.orderTime) {
      return -1;
    }
    // a debe ser igual b
    return 0;
  });

  return (
    // si existen órdenes, entonces muestra el contenido (div) || renderizado condicional
    orders.length > 0 &&
    <div className="flex flex-wrap justify-start mx-5">
      {sortedPendingOrders.map((order) => {
        return <Orders
          key={order.id}
          id={order.id}
          time={order.orderTime}
          table={order.clientTable}
          name={order.clientName}
          order={order.clientOrder}
        />
      })}
    </div>
  );
}

export default OrdersList;