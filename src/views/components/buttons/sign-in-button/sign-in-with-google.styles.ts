import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #357ae8;
  }

  &:focus {
    outline: none;
  }

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;
