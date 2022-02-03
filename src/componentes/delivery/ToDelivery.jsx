import Header from "../Header";
import ToServe from "./ToServe";

const ToDelivery = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col mt-10 ml-10 mb-5">
        <h2 className="font-bold text-gray-600">ÓRDENES PARA ENTREGAR</h2>
      </div>
      <ToServe />
    </div>
  );
};

export default ToDelivery;
