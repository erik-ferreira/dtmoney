import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme["text-300"]};
    background-color: ${(props) => props.theme["background-900"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["text-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border: 0;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["secondary-300"]};
    color: ${(props) => props.theme["secondary-300"]};
    background-color: transparent;
    padding: 1rem;
    font-weight: bold;

    transition: background-color 0.2s, border-color 0.2s, color 0.2s;

    &:not(:disabled):hover {
      border-color: ${(props) => props.theme["secondary-500"]};
      background-color: ${(props) => props.theme["secondary-500"]};
      color: ${(props) => props.theme.white};
    }

    &:disabled {
      opacity: 0.7;
    }

    @media screen and (max-width: 425px) {
      span {
        display: none;
      }
    }
  }
`;
