import ResumeOrder from "./ResumeOrder";
import ClientForm from "./ClientForm";
import MenuOrder from "./MenuOrder";
import Header from "../Header";

const Waiter = () => {

  return (
    <div className="w-full container-lg">
      <Header />
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-start">
          <ClientForm />
          <div className="w-full">
            <MenuOrder />
          </div>
        </div>
        <div className="flex justify-start m-8 border-solid">
          <ResumeOrder />
        </div>
      </div>
    </div>
  )
};

export default Waiter;
