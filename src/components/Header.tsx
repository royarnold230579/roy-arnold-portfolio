import logo from "../assets/roy-arnold-logo.png";

function Header() {
  return (
    <header className="header">
      <a href="#home" className="header-logo">
        <img src={logo} alt="Roy Arnold" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
