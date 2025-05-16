import { IoClose } from "react-icons/io5";

interface NavMobileProps {
  setNavMobile: (value: boolean) => void;
}

const NavMobile = ({ setNavMobile }: NavMobileProps) => {
  return (
    <nav className="lg:hidden bg-gradient-to-b from-[#a944e7]/70 to-[#f80063]/20 w-full h-full backdrop-blur-md   shadow-lg">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute left-4 top-6 cursor-pointer"
      />
      <ul className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
        <li className="text-lg">
          <a href="#">Inicio</a>
        </li>
        <li className="text-lg">
          <a href="#">Nosotros</a>
        </li>
        <li className="text-lg">
          <a href="#">Servicios</a>
        </li>
        <li className="btn">
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
