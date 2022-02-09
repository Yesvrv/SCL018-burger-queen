import { Link } from "react-router-dom";
import logo_burger_home from "../assets/img/logo_burger_home.png";
import Button from "@material-tailwind/react/Button";

const Home = () => {
  return (
    <section className="m-20">
      <figure className="flex justify-center">
        <img src={logo_burger_home} width="320" height="320" alt="logo principal de la interfaz web" />
      </figure>
      <nav className="flex justify-center space-x-10">
        <Link to="/waiter">
          <Button
            color="teal"
            buttonType="filled"
            ripple="light"
            className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline "
          >
            Mesero
          </Button>
        </Link>

        <Link to="/ToDelivery">
          <Button
            color="teal"
            buttonType="filled"
            ripple="light"
            className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline "
          >
            Para servir
          </Button>
        </Link>

        <Link to="/kitchen">
          <Button
            color="teal"
            buttonType="filled"
            ripple="light"
            className="h-20 px-10 font-semibold text-lg text-teal-50 transition-colors duration-150 bg-teal-500 rounded-lg focus:shadow-outline "
          >
            Cocina
          </Button>
        </Link>
      </nav>
    </section>
  );
};

export default Home;
