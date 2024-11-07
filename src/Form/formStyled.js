import styled from "styled-components";

export const Template = styled.form`
  border: 10px solid #727a77;
  border-radius: 10px;
  padding: 30px 60px;
  background-color: #727a77;
  color: #f9f9f9;
  font-size: 1.25rem;
  text-align: center;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 30px;
    font-size: 1rem;
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
  font-size: 1.25rem;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    background-color: #cec6e3;
    transition: background-color 0.5s ease;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  ${SharedStyles}
`;

export const Select = styled.select`
  ${SharedStyles}
`;

export const Legend = styled.legend`
  color: #f9f9f9;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Field = styled.fieldset`
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 20px;
  }
`;
