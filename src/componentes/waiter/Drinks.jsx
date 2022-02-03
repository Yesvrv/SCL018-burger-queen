import { useContext } from "react";
import { ContextProducts } from "../../App.jsx";
import Button from "@material-tailwind/react/Button";


const Drinks = () => {
  const globalContext = useContext(ContextProducts);
  const menuDrinks = globalContext.products.menuArrays.drinks
  return (
    <>
      <h2 className="font-bold m-5 text-gray-600">Calientes y frías</h2>
      {menuDrinks.map((drink) => {
        return (
          <Button
            className="m-2 ml-5 mb-3 p-2"
            onClick={() => globalContext.addProducts(drink)}
            key={drink.id}
            color="teal"
            buttonType="filled"
            size="sm"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light">
            <div className="flex justify-around items-center">
              <div className="flex item w-64 h-8 items-center">{drink.name}</div>
              <div className="flex item w-8 h-8 items-center">${drink.price}</div>
            </div>
          </Button>
        );
      })}
    </>
  );
};

export default Drinks;