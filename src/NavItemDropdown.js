import React from 'react';
import NavItem from './NavItem';

export default function NavItemDropdown(props) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.text}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {props.children.map((item) => (
          <NavItem key={item.id} {...item} />
        ))}
      </div>
    </li>
  );
}
