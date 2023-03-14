import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      border-radius: 6px;
      padding: 1rem;
      color: ${(props) => props.theme["gray-300"]};
      background-color: ${(props) => props.theme["gray-900"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme["green-500"]};

      border: 0;
      border-radius: 6px;
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      font-weight: bold;
      cursor: pointer;

      transition: background-color 0.2s;

      &:hover {
        background-color: ${(props) => props.theme["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  line-height: 0;
  color: ${(props) => props.theme["gray-500"]};
`;
