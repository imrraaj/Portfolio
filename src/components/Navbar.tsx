import { StyledNavbar, Logo, Nav, List, NavLink } from "./styled/navbar.styled";
import { Link } from "react-router-dom";
/*  
width: 250px;
  height: 100px;
  background: transparent;
  border: 5px solid transparent;
  -moz-border-image: -moz-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);
  -webkit-border-image: -webkit-linear-gradient(top, #3acfd5 0%, #3a4ed5 100%);
  border-image: linear-gradient(to bottom, #3acfd5 0%, #3a4ed5 100%);
  border-image-slice: 1;
  color: white;
  */
interface navData {
  url: string;
  name: string;
}
const navDataArray: navData[] = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/projects",
    name: "Projects",
  },
  {
    url: "/resume",
    name: "Resume",
  },
  {
    url: "/contact",
    name: "Contact",
  },
];
const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <Logo>Raj Patel</Logo>
      <button className="mobile-nav-toggle" style={{ display: "none" }}>
        <i className="bx bx-menu-alt-right"></i>
      </button>
      <Nav>
        <List>
          {navDataArray.map((navitem) => (
            <NavLink key={navitem.url}>
              <Link to={navitem.url}>
                <>{navitem.name}</>
              </Link>
            </NavLink>
          ))}
        </List>
      </Nav>
    </StyledNavbar>
  );
};

export default Navbar;
