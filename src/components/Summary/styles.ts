import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
  @media screen and (max-width: 890px) {
    padding-bottom: 10px;
    overflow: scroll;
  }
`;

interface SummaryCardProps {
  variant?: "secondary";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  min-width: 17.5rem;
  background: ${(props) => props.theme["primary-600"]};
  padding: 2rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["primary-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: ${props.theme["secondary-700"]};
    `}
`;
