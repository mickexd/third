import Logo from "/logo.png";
import { HiMenu } from "react-icons/hi";
import Nav from "./Nav";

interface HeaderProps {
  setNavMobile: (value: boolean) => void;
}

const Header = ({ setNavMobile }: HeaderProps) => {
  return (
    <header
      className="py-6"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="9000"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between mr-4">
          {/* logo */}
          <a href="/">
            <img
              className="h-[64px] bg-white p-2 rounded-md items-center ml-4 lg:ml-0"
              src={Logo}
              alt=""
            />
          </a>
          {/* nav */}
          <Nav />
          {/* nav mobile btn  */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl text-white cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
