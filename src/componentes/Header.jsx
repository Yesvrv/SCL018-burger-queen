import { Link } from "react-router-dom";
import header_burger_logo from "../assets/img/header_burger_logo.png";


const Header = () => {

  return (
    <header className="flex flex-wrap">
      <div className="w-full">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500">
          <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <img width="55" height="50.5" src={header_burger_logo} alt="logo principal del encabezado" />
            </div>
            <div className="flex space-x-6 mr-6">
              <Link to="/"
                className="px-3 py-2 flex items-center"
                alt="Acceso a vista principal"
              >
                <i className="fas fa-home fa-2x text-white opacity-75"></i>
              </Link>
              <Link to="/kitchen"
                className="px-3 py-2 flex items-center"
                alt="Acceso a vista del cocinero"
              >
                <i className="fas fa-hamburger fa-2x text-white opacity-75"></i>
              </Link>
              <Link to="/waiter"
                className="px-3 py-2 flex items-center"
                alt="Acceso a vista del mesero"
              >
                <i className="fas fa-utensils fa-2x text-white opacity-75"></i>
              </Link>
              <Link to="/toDelivery"
                className="px-3 py-2 flex items-center"
                alt="Acceso a lista de entrega"
              >
                <i className="fas fa-clipboard-list fa-2x text-white opacity-75"></i>
              </Link>
              <Link to="#ajustes"
                className="px-3 py-2 flex items-center"
                alt="Acceso a configuración"
              >
                <i className="fas fa-cog fa-2x text-white opacity-75"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;