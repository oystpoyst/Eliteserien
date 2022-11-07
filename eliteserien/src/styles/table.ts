import styled from "styled-components";

export const HeaderCell = styled.th`
  font-weight: 600;
  text-align: left;
  padding: 0.5rem;
  text-transform: uppercase;
`;

export const BodyCell = styled.td`
  text-align: left;
  padding: 10px;
  font-weight: 300;
`;

export const Row = styled.tr`
  border-radius: 30px;
  cursor: pointer;
  height: 4rem;
  &:nth-child(odd) {
    background-color: #cecdcd;
  }
  td:first-child {
    border-radius: 30px 0 0 30px;
  }
  td:last-child {
    border-radius: 0px 30px 30px 0px;
  }
  :hover {
    color: white !important;
    background: #15243c;
  }
  :focus {
    background: #15243c;
  }
`;
