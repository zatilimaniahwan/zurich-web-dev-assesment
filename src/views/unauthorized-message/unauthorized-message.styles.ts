import styled from "styled-components";
import Button from "../components/button/button";

export const UnauthorizedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: #721c24;
  text-align: center;
`;

export const UnauthorizedTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const BackButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #e53935;
  }
  &:focus {
    outline: none;
  }
`;

export const UnauthorizedMessage = styled.p``;
