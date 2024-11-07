import styled from "styled-components";

export const Button = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px 100px;
  border-radius: 10px;
  border: 2px solid #727a77;
  background-color: #ced7d2;
  color: hsl(235, 16%, 15%);
  cursor: pointer;
  font-weight: bold;
  font-size: 1.25rem;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #cec6e3;
    transition: background-color 0.5s ease;
  }

  @media (max-width: 768px) {
    padding: 10px 80px;
    font-size: 1rem;
  }
`;
