import styled from "styled-components";

export const Button = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px 100px;
  border-radius: 10px;
  border: 2px solid ${({theme})=> theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.medium};
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    transition: background-color 0.5s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
