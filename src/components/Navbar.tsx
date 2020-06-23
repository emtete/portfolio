import React from "react";

require("../style/navbar.css");

interface NavProps {}

interface NavState {}

class Navbar extends React.Component<NavProps, NavState> {
  constructor(props: NavProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <nav id='navbar' className='notFixed'>
        <div className='navbar__menu'>
          <ul>
            <li id='nav__home' className='navbar__home nav__btn active'>
              Home
            </li>
            <li id='nav__about' className='navbar__about nav__btn'>
              About
            </li>
            <li id='nav__skills' className='navbar__skills nav__btn'>
              Skills
            </li>
            <li id='nav__work' className='navbar__work nav__btn'>
              My Work
            </li>
            <li id='nav__contact' className='navbar__contact nav__btn'>
              Contact
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
