import styled, { css } from "styled-components";
import { Color, Theme } from "../../theme/theme";
import { useTheme } from "../../theme/ThemeContext";

type InputProps = {
  color?: Color;
} & React.ButtonHTMLAttributes<HTMLInputElement>;

export function Input({ color = "primary", ...props }: InputProps) {
  const theme = useTheme();
  return <InputContainer {...props} t={theme} color={color} />;
}

const InputContainer = styled.input<{ t: Theme; color: Color }>`
  ${({ t, color }) => {
    const borderColor = t.colors.tertiary.default;

    return css`
      border: solid 2px;
      border-color: ${borderColor};
      padding: ${t.space[2]};
      font-family: ${t.fontFamilies.body};
      font-weight: ${t.fontWeights[0]};
      font-size: ${t.fontSizes[0]};
      padding-left: ${t.space[3]};
      color: ${borderColor};
      &:focus {
        border-left-width: ${t.space[2]};
        padding-left: calc(${t.space[3]} - ${t.space[2]} + 2px);
        border-radius: 0;
      }
      &::selection {
        background: ${t.colors[color].default};
      }
    `;
  }}
`;
