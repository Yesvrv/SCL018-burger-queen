import { useState } from "react";
import Food from "./Food";
import Drinks from "./Drinks";

const MenuOrder = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="flex flex-row">
        <ul className="m-0 list-none flex-wrap pb-4 ">
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <span className={
                "text-sm font-bold uppercase px-16 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg-teal-600"
                  : "text-teal-600 bg-opacity-50")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}
            >
              <i className="fas fa-glass-whiskey text-base mr-1"></i> Bebidas
            </span>
          </li>
          </ul>
          <ul className="m-0 list-none flex-wrap pb-4 ">
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <span className={
                "text-sm font-bold uppercase px-16 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 2
                  ? "text-white bg-teal-600"
                  : "text-teal-600 bg-opacity-50")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}
            >
              <i className="fas fa-hamburger text-base mr-1"></i>  Comidas
            </span>
          </li>
          </ul>
          </div>
        
        <div className="relative flex flex-col max-h-screen min-w-0 break-words bg-opacity-50 w-full shadow-lg rounded">
          <div className="px-4 flex justify-center md:overflow-y-auto  h-80 mb-10">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <Drinks />
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <Food />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOrder;
