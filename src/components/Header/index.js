import logosvg from "../../svg/logo.svg";

const Header = () => {
  const descLogo = "Logo do Blog.";

  return (
    <>
      <header className="flex-space-between">
        <div className="logo ">
          <img src={logosvg} alt={descLogo}></img>
        </div>
        <div className="search">
          <input type="text" className="input-search" name="search" />
        </div>
        <ul className="menu">
          <li>
            <a href="#" className="nav-link">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="menu"></div>
      </header>
    </>
  );
};

export default Header;
