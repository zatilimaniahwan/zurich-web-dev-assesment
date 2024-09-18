import styled from "styled-components";

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
