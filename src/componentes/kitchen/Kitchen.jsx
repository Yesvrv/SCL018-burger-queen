import Header from "../Header";
import OrdersList from "./OrdersList";

const Kitchen = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col mt-10 ml-10 mb-5">
        <h2 className="font-bold text-gray-600">ÓRDENES</h2>
      </div>
        <OrdersList />
    </div>
  );
};

export default Kitchen;
