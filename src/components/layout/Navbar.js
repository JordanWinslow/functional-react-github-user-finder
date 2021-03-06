import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Theme from "../../context/ThemeProvider" // for demonstration purposes only

const gitHubLogo = (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <a href="https://github.com/JordanWinslow">
      <path
        d="M29.9405 10C18.3769 10 9 19.3752 9 30.9405C9 40.1925 15.0001 48.0419 23.3204 50.8108C24.3669 51.0047 24.7511 50.3566 24.7511 49.8035C24.7511 49.3041 24.7317 47.6546 24.7227 45.9048C18.897 47.1715 17.6678 43.4341 17.6678 43.4341C16.7152 41.0137 15.3427 40.3701 15.3427 40.3701C13.4428 39.0704 15.4859 39.0971 15.4859 39.0971C17.5887 39.2448 18.6959 41.255 18.6959 41.255C20.5636 44.4564 23.5947 43.5308 24.7896 42.9958C24.9776 41.6424 25.5203 40.7186 26.1191 40.1957C21.468 39.6661 16.5786 37.8706 16.5786 29.8468C16.5786 27.5606 17.3966 25.6925 18.7361 24.2261C18.5187 23.6986 17.802 21.5688 18.939 18.6844C18.939 18.6844 20.6974 18.1216 24.6991 20.8309C26.3695 20.3669 28.1609 20.1342 29.9405 20.1262C31.7201 20.1342 33.5129 20.3669 35.1864 20.8309C39.1832 18.1216 40.9392 18.6844 40.9392 18.6844C42.079 21.5688 41.3619 23.6986 41.1445 24.2261C42.4872 25.6925 43.2996 27.5606 43.2996 29.8468C43.2996 37.8897 38.4009 39.6606 33.7379 40.179C34.489 40.8289 35.1583 42.1032 35.1583 44.0569C35.1583 46.8588 35.134 49.1138 35.134 49.8035C35.134 50.3607 35.5109 51.0137 36.5724 50.8081C44.8882 48.036 50.8806 40.1894 50.8806 30.9405C50.8806 19.3752 41.5051 10 29.9405 10ZM16.8429 39.8302C16.7968 39.9342 16.6331 39.9654 16.484 39.894C16.3321 39.8257 16.2468 39.6838 16.296 39.5794C16.3411 39.4723 16.5051 39.4425 16.6567 39.5143C16.8089 39.5826 16.8956 39.7258 16.8429 39.8302ZM17.8729 40.7492C17.7731 40.8418 17.5778 40.7988 17.4454 40.6525C17.3084 40.5065 17.2827 40.3113 17.384 40.2173C17.487 40.1247 17.6763 40.1681 17.8136 40.3141C17.9506 40.4618 17.9773 40.6556 17.8729 40.7492ZM18.5796 41.9252C18.4513 42.0143 18.2415 41.9307 18.1118 41.7445C17.9835 41.5583 17.9835 41.335 18.1146 41.2455C18.2446 41.1561 18.4513 41.2365 18.5827 41.4213C18.7107 41.6107 18.7107 41.834 18.5796 41.9252ZM19.7747 43.2871C19.6599 43.4137 19.4154 43.3797 19.2365 43.207C19.0534 43.0381 19.0024 42.7985 19.1175 42.6719C19.2337 42.545 19.4796 42.5807 19.6599 42.752C19.8416 42.9206 19.8971 43.1619 19.7747 43.2871ZM21.3192 43.7469C21.2686 43.9109 21.0331 43.9854 20.7959 43.9157C20.5591 43.844 20.4041 43.6519 20.4519 43.4861C20.5012 43.321 20.7377 43.2434 20.9766 43.3179C21.2131 43.3894 21.3684 43.5801 21.3192 43.7469ZM23.077 43.9419C23.0828 44.1146 22.8817 44.2578 22.6327 44.2609C22.3824 44.2665 22.1799 44.1267 22.1771 43.9568C22.1771 43.7824 22.3737 43.6406 22.6241 43.6364C22.8731 43.6315 23.077 43.7702 23.077 43.9419ZM24.8037 43.8757C24.8336 44.0442 24.6605 44.2173 24.4133 44.2634C24.1702 44.3078 23.9451 44.2037 23.9143 44.0366C23.8841 43.8639 24.0603 43.6909 24.303 43.6461C24.5506 43.6031 24.7722 43.7044 24.8037 43.8757Z"
        fill="#fff1e9"
      />
    </a>
  </svg>
)
const NavigationHeader = styled.nav`
  background: ${props => props.background};
  height: 70px;
  width: 100vw;
  display: grid;
  grid-template-columns: 0.25fr 1fr 3fr;
  svg {
    align-self: center;
  }
  path {
    cursor: pointer;
    transition-duration: 0.3s;
  }
  path:hover {
    fill: #00291c;
  }
  #logo {
    color: #fff1e9;
    padding-left: 6px;
    justify-self: start;
    align-self: center;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
    cursor: default;
    transition: 0.3s ease-in;
    :hover {
      transform: translateY(-2px);
      text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.5);
    }
  }
  #navItems {
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
    margin-right: 2vw;
    justify-self: end;
    align-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
  }
  ul {
    font-style: none;
    list-style-type: none;
  }
  a {
    color: #fff1e9;
    padding: 0px 20px;
    transition-duration: 0.3s;
  }
  a:hover {
    text-shadow: none;
    color: #00291c;
  }
  @media (max-width: 450px) {
    a {
      padding: 0 10px;
      font-size: 1rem;
    }
    svg {
      width: 15vw;
    }
    #logo {
      font-size: 6vw;
    }
  }
`

const Navbar = () => {
  return (
    <Theme.Consumer>
      {theme => {
        return (
          <NavigationHeader background={theme.background}>
            {gitHubLogo}
            <h1 id="logo">GitFinder</h1>
            <ul id="navItems">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </NavigationHeader>
        )
      }}
    </Theme.Consumer>
  )
}

export default Navbar
