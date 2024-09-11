import css, { styled } from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead``;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  color: #333333;
`;

export const TableBody = styled.tbody`
  padding: 10px;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  border-bottom: 1px solid #ddd;
  color: #333333;
  padding: 10px;
`;

export const LoadingMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;
