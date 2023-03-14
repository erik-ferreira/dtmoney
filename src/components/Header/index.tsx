import * as Dialog from "@radix-ui/react-dialog";

import { NewTransactionModal } from "../NewTransactionModal";

import logoImg from "../../assets/logo.svg";

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton type="button">
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
