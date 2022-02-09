import ResumeOrder from "./ResumeOrder";
import ClientForm from "./ClientForm";
import MenuOrder from "./MenuOrder";
import Header from "../Header";

const Waiter = () => {

  return (
    <section className="w-full container-lg">
      <Header />
      <main className="flex flex-row justify-evenly">
        <section className="flex flex-col justify-start">
          <ClientForm />
          <div className="w-full">
            <MenuOrder />
          </div>
        </section>
        <section className="flex justify-start m-8 border-solid">
          <ResumeOrder />
        </section>
      </main>
    </section>
  )
};

export default Waiter;
