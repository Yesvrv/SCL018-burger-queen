/* eslint-disable react-hooks/exhaustive-deps */
import OrdersToServe from "./OrdersToServe";
import { useEffect, useContext } from "react";
import { ContextProducts } from "../../App";
import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const ToServe = () => {
  const globalContext = useContext(ContextProducts);
  const ordersToServe = globalContext.ordersToServe;
  const showOrdersToServe = globalContext.showOrdersToServe;
  
  useEffect(() => {
    onSnapshot(
      collection(db, "pedidos"),
      (snapshot) => {
        const arrayOrders = snapshot.docs.map((order) => {
          return { ...order.data(), id: order.id };
        })
        showOrdersToServe(arrayOrders);
      }
    )
  }, [])

  let ordersReady = ordersToServe.filter((order) => {
    return order.status.status === "Listo";
  })

  
  let sortedOrdersReady = ordersReady.sort((a, b) => {
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
    ordersToServe.length > 0 &&
    <div className="flex flex-wrap justify-start mx-5">
      {sortedOrdersReady.map((order) => {
        return <OrdersToServe
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

export default ToServe;