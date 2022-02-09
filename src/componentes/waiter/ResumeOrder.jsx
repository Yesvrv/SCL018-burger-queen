import { useContext } from "react";
import { ContextProducts } from "../../App";
import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Button from "@material-tailwind/react/Button";
import InputIcon from "@material-tailwind/react/InputIcon";
import Swal from 'sweetalert2'

const ResumeOrder = () => {
  const globalContext = useContext(ContextProducts);
  const totalOrder = globalContext.totalOrderAmount;

  const onSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    if (globalContext.name === "" || globalContext.table === 0 || 
        globalContext.products.resumeOrder.length === 0 ) {

          Swal.fire({
            icon: 'warning',
            title: '¡Error!',
            text: 'Completa todos los campos',
            showConfirmButton: false,
            allowOutsideClick: true,
          })
    }
    else {
      try {
        await addDoc(collection(db, "pedidos"), {
          orderTime: time,
          clientName: globalContext.name,
          clientTable: globalContext.table,
          clientOrder: globalContext.products.resumeOrder,
          totalAmount: globalContext.totalOrderAmount,
          status: globalContext.statusReady
          // status: "Pendiente",
        });

        globalContext.changeName("");
        globalContext.changeTable("");
        globalContext.clearProductsFromOrder();

      } catch (error) {
        console.log("Error al enviar pedido");
        console.log(error);
      }
    }
  }
  return (
    <form action="" onSubmit={onSubmit}>
      <h2 className="font-bold text-gray-600">RESUMEN ORDEN</h2>
      <div className="flex justify-center">
        <div className="w-64 m-3 mt-6">
          <label>
            <InputIcon
              type="text"
              readOnly
              name={globalContext.name}
              color="teal"
              outline={true}
              value={globalContext.name}
              onChange={(e) => globalContext.changeName(e.target.value)}
              placeholder="Nombre cliente"
              iconFamily="material-icons"
              iconName="person"
            />
          </label>
        </div>
        <div className="w-24 m-3 mt-6">
          <label>
            <InputIcon
              type="number"
              readOnly
              min="1"
              max="15"
              name={globalContext.table}
              color="teal"
              outline={true}
              value={globalContext.table}
              onChange={(e) => globalContext.changeTable(e.target.value)}
              placeholder="N° Mesa"
              iconName=""
            />
          </label>
        </div>
      </div>
      <div className="md:overflow-y-auto min-h-96 max-h-96 relative flex flex-col min-w-0 break-words bg-opacity-50 w-full shadow-lg rounded">
        {globalContext.products.resumeOrder.map((dish) => (
          <div key={dish.id} className="flex justify-center">
            <div className="w-80 h-11 flex justify-center border-solid border-2 border-teal-500 rounded-md m-2 font-semibold text-gray-500 bg-none">
              <div className="flex items-center whitespace-pre px-2 text-xs uppercase w-64">
                <span className="flex item w-48 h-8 items-center">{dish.name}</span>
                <span className="flex item w-8 h-8 items-center">${dish.price}</span>
              </div>
              <div className="flex w-20">
                <button
                  type="button"
                  className="flex focus:outline-none space-x-4 items-center text-amber-500 bg-none"
                  onClick={() => globalContext.decrease(dish.id)}>
                  <i className="fas fa-minus-circle fa-lg"></i>
                </button>
                <p className="flex items-center px-2 pr-2 text-sm">{dish.count}</p>
                <button
                  type="button"
                  className="flex focus:outline-none items-center text-amber-500 bg-none"
                  onClick={() => globalContext.increase(dish.id)}>
                  <i className="fas fa-plus-circle fa-lg"></i>
                </button>
              </div>
            </div>
            <button className="flex items-center focus:outline-none font-semibold text-red-500 bg-none mr-5"
              onClick={() => globalContext.removeFromOrder(dish.id)}>
              <i className="fas fa-window-close fa-2x"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center relative my-2 min-w-0 break-words bg-opacity-50 w-full shadow-lg rounded">
        <h3 className="font-bold my-4 text-gray-600 item w-48">Total ${totalOrder}   </h3>
        <div className="flex justify-center my-4 ">
          <Button
            type='submit'
            color="teal"
            buttonType="filled"
            size="md"
            rounded={false}
            block={false}
            ripple="light">
            Enviar a cocina
          </Button>
        </div>
      </div>
    </form>
  );
};


export default ResumeOrder;

