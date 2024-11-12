import styled from "styled-components";

export const Container = styled.span`
  margin: 0px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.small};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 0.7rem;
  }
`;
