import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 0.7rem;
  font-style: italic;
  padding-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 0.5rem;
  }
`;
