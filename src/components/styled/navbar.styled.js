import styled from "styled-components";

export const StyledNavbar = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;

export const Logo = styled.div`
  font-size: 2rem;
`;

export const Nav = styled.div``;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 3rem;
  list-style-type: none;
`;

export const NavLink = styled.li`
list-style-type: none;
  a {
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: red;
    &::before {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0%;
      height: 3px;
      background-color: black;
      width: 100%;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 200ms ease;
    }
    &:hover::before,
    &:focus::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;
