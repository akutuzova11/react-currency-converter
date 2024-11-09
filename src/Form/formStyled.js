import styled from "styled-components";

export const Template = styled.form`
  border: 10px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 30px 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: center;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 30px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const LabelText = styled.span`
  margin: auto;
`;

const SharedStyles = `
  display: flex;
  width: 100%;
  max-width: 300px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f9f9f9;
  font-size: ${({ theme }) => theme.fontSize.medium};
  box-sizing: border-box;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    max-width: 100%;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const Input = styled.input`
  ${SharedStyles}
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    transition: background-color 0.5s ease;
  }
`;

export const Select = styled.select`
  ${SharedStyles}
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    transition: background-color 0.5s ease;
  }
`;

export const Legend = styled.legend`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSize.large};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export const Field = styled.fieldset`
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 0 auto;
    padding: 20px;
  }
`;
