import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Button from "../components/button/button";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
  }

  &:focus {
    outline: none;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;
