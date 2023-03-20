import * as Dialog from "@radix-ui/react-dialog";

import { NewTransactionModal } from "../NewTransactionModal";
import { SwitchButtonTheme } from "../SwitchButtonTheme";

import logoImg from "../../assets/logo.svg";

import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
  RightComponentHeader,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <RightComponentHeader>
            <Dialog.Trigger asChild>
              <NewTransactionButton type="button">
                Nova transação
              </NewTransactionButton>
            </Dialog.Trigger>

            <SwitchButtonTheme />
          </RightComponentHeader>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
