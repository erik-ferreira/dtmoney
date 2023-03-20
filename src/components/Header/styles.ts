import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["background-header"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    img {
      width: 117px;
      height: 25px;
    }
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${(props) => props.theme["secondary-400"]};
  color: ${(props) => props.theme.white};

  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["secondary-500"]};
  }

  @media screen and (max-width: 375px) {
    height: 38px;
    padding: 0.5rem 1rem;
  }
`;

export const RightComponentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
