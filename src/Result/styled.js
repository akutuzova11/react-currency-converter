import styled from "styled-components";

export const LabelText = styled.span`
  margin: auto;
`;

export const Output = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.large};
  display: block;
  min-width: 100px;
  text-align: center;
  margin-top: 10px;
  min-height: 50px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    min-height: 40px;
  }
`;
