import logoImg from "../../assets/logo.svg";

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionButton type="button">
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
