import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #f8f8f8;
  color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 1000;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li``;

export const SignedInUserLabel = styled.p`
  margin-top: 8px;
`;

export const Logo = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
