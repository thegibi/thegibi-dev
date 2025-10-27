import { Infos } from "../Infos";
import Links from "../Links";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
         <Links />
         <Infos />
      </div>
      
      <div className="mt-8 text-sm md:text-base text-center text-gray-500">
        ©{new Date().getFullYear()} The Gibi Official
      </div>
    </footer>
  );
};

export default Footer;
