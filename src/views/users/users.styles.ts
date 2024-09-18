import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: calc(33.333% - 20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1200px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

export const UserName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const UserEmail = styled.p`
  margin: 0;
  color: #666;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 21px;
  margin-top: 4rem;
  box-sizing: border-box;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-left: 8px;
  padding-top: 8px;
  cursor: pointer;
`;
