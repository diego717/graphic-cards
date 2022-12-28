import NavItem from './NavItem';
import NavItemDropdown from './NavItemDropdown';
import NavItemForm from './NavItemForm';
import logo from './img/logo.png';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text=""/> Home
            <NavItemDropdown
              text="Dropdown"
              id="navbarDropdown"
              items={[
                { id: 1, href: '/item1', text: 'Item 1' },
                { id: 2, href: '/item2', text: 'Item 2' },
                { id: 3, href: '/item3', text: 'Item 3' },
              ]}
            />
          </ul>
          <NavItemForm
            placeholder="Search"
            ariaLabel="Search"
            buttonText="Search"
          />
        </div>
      </div>
    </nav>
  );
}

