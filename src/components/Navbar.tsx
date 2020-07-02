import React from "react";
import "../style/navbar.scss";

interface NavProps {}
interface NavState {
  [key: string]: boolean;
  isResize: boolean;
}

class Navbar extends React.Component<NavProps, NavState> {
  constructor(props: NavProps) {
    super(props);
    this.state = {
      isResize: false,
    };
  }

  /**
   * * setResizeEvent
   * * : 화면크기 변경시 state값을 변경한다.
   * @return void
   */
  setResizeEvent = (): void => {
    window.addEventListener("resize", () => {
      this.setState({ isResize: true });
    });
  };

  componentDidMount() {
    changeLiText();
    this.setResizeEvent();
  }

  componentDidUpdate() {
    changeLiText();
  }

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

/**
 * * changeLiText
 * * : 브라우저 사이즈가 변경되면 li text를 수정한다.
 * @return void
 */
export const changeLiText = (): void => {
  const mq = window.matchMedia("(max-width: 620px)").matches;
  const ul = document.querySelector(".navbar__menu ul") as HTMLUListElement;
  const lis = Array.from(ul.children);

  lis.forEach((li) => {
    switch (li.id) {
      case "nav__home":
        li.textContent = mq ? "H" : "Home";
        break;
      case "nav__about":
        li.textContent = mq ? "A" : "About";
        break;
      case "nav__skills":
        li.textContent = mq ? "S" : "Skills";
        break;
      case "nav__work":
        li.textContent = mq ? "W" : "Work";
        break;
      case "nav__contact":
        li.textContent = mq ? "C" : "Contact";
        break;
    }
  });
};

export default Navbar;
