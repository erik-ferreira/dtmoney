import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

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

      transition: background-color 0.2s;

      &:not(:disabled):hover {
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

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme["gray-300"]};
  background-color: ${(props) => props.theme["gray-700"]};

  border: 0;
  cursor: pointer;
  padding: 1rem;
  border-radius: 6px;

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme["gray-600"]};
  }
`;
