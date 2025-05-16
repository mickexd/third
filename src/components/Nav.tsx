const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center space-x-12 font-secondary">
        <li className="nav-link">
          <a href="#">Inicio</a>
        </li>
        <li className="nav-link">
          <a href="#">Nosotros</a>
        </li>
        <li className="nav-link">
          <a href="#">Servicios</a>
        </li>
        <li className="btn">
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
