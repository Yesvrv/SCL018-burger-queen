import { useContext } from "react";
import { ContextProducts } from "../App.js";
import InputIcon from "@material-tailwind/react/InputIcon";

const ClientForm = () => {
  const globalContext = useContext(ContextProducts);

  return (

    <div className="mt-8">
      <h2 className="font-bold text-gray-600">MENU</h2>
      <div className="flex flex-row">
        <div className="w-64 m-3 mt-6">
          <InputIcon
            type="text"
            name="name"
            color="teal"
            outline={true}
            value={globalContext.name}
            // cuando haya un cambio en el input se ejecutará la función changeName
            onChange={(e) => globalContext.changeName(e.target.value)}
            placeholder="Nombre cliente"
            iconFamily="material-icons"
            iconName="person"
          />
        </div>
        <div className="w-24 m-3 mt-6">
          <InputIcon
            type="number"
            min="1"
            max="15"
            name="table"
            color="teal"
            outline={true}
            value={globalContext.table}
            onChange={(e) => globalContext.changeTable(e.target.value)}
            placeholder="N° Mesa"
            iconName=""
          />
        </div>
      </div>
    </div>
  );
};

export default ClientForm;