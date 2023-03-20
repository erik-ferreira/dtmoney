import styled from "styled-components";

interface SwitchButtonThemeContainerProps {
  isThemeLight: boolean;
}

export const SwitchButtonThemeContainer = styled.button<SwitchButtonThemeContainerProps>`
  border: 0;
  background-color: ${(props) =>
    props.isThemeLight
      ? props.theme["secondary-400"]
      : props.theme["background-card"]};
  line-height: 0;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.isThemeLight
        ? props.theme["secondary-500"]
        : props.theme["background-700"]};
  }

  svg {
    color: ${(props) =>
      props.isThemeLight ? props.theme.white : props.theme["text-100"]};
  }
`;
