import styled from "styled-components";

export const LabelText = styled.span`
  margin: auto;
`;

export const Output = styled.span`
  color: rgb(8, 213, 213);
  font-size: 2.5rem;
  display: block;
  min-width: 100px;
  text-align: center;
  margin-top: 10px;
  min-height: 50px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    min-height: 40px;
  }
`;
