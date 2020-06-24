import React from "react";
import "../style/navbar.scss";

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
            <li id='nav__home' className='nav__btn active'>
              Home
            </li>
            <li id='nav__about' className='nav__btn'>
              About
            </li>
            <li id='nav__skills' className='nav__btn'>
              Skills
            </li>
            <li id='nav__work' className='nav__btn'>
              My Work
            </li>
            <li id='nav__contact' className='nav__btn'>
              Contact
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
