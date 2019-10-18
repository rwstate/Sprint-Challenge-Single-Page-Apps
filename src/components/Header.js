import React from "react";
import {NavLink} from "react-router-dom";
import {Navbar, NavItem} from "reactstrap";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <Navbar color="light">
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/characters">Characters</NavLink>
        </NavItem>
      </Navbar>
    </header>
  );
}
