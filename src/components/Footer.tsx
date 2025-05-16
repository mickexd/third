import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <img
              className="h-[64px] bg-white p-2 rounded-md mx-auto"
              src={Logo}
              alt=""
            />
            <p className="text-sm opacity-80 mt-2">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="flex justify-center w-full mb-6">
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white hover:text-accent transition text-xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-accent transition text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-accent transition text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-accent transition text-xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
              <a
                href="#"
                className="text-white hover:text-accent transition font-medium"
              >
                Términos y condiciones
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition font-medium"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-white hover:text-accent transition font-medium"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
