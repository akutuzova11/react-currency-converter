import styled from "styled-components";

export const LoadingStatus = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  text-align: center;
  width: 500px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  padding-top: 20px;
  border-top: 10px solid white;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 300px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const LoadingImageStyled = styled.img`
  width: 100px;
  height: auto;
  margin: 20px 0;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100px;
  }
`;
