import { forwardRef, useMemo } from "react";
import styled, { css } from "styled-components";
import { Theme, Color } from "../../theme/theme";
import { IconType } from "react-icons";
import { useTheme } from "../../theme/ThemeContext";
import { getContrastColor } from "../../theme/utils";

export type ButtonProps = {
  label?: string;
  color?: Color;
  icon?: IconType;
  isRound?: boolean;
  isActive?: boolean;
  fontSize?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      color = "primary",
      icon,
      isRound = false,
      fontSize = 0,
      isActive = false,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const theme = useTheme();
    const isOnlyIcon = useMemo(() => {
      return typeof icon !== "undefined" && typeof label === "undefined";
    }, [icon, label]);
    return (
      <ButtonContainer
        {...props}
        ref={ref}
        color={color}
        isRound={isRound}
        isOnlyIcon={isOnlyIcon}
        fontSize={fontSize}
        isActive={isActive}
        t={theme}
        type="button"
      >
        {icon &&
          icon({ style: { marginRight: isOnlyIcon ? 0 : theme.space[2] } })}
        {label}
      </ButtonContainer>
    );
  }
);

const ButtonContainer = styled.button<{
  t: Theme;
  color: Color;
  isRound: boolean;
  isOnlyIcon: boolean;
  fontSize: number;
  isActive?: boolean;
}>`
  ${({ t, color, isRound, isOnlyIcon, fontSize, isActive }) => {
    const backgroundColor = isActive
      ? t.colors[color].active
      : t.colors[color].default;
    const textColor = getContrastColor(t, backgroundColor);

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${backgroundColor};
      font-family: ${t.fontFamilies.monospace};
      font-weight: ${t.fontWeights[1]};
      font-size: ${t.fontSizes[fontSize]};
      padding: ${isOnlyIcon
        ? `calc(${t.space[2]} + ${t.fontSizes[fontSize]}/4)`
        : `${t.space[2]} ${t.space[4]}`};
      border: none;
      border-radius: ${isRound ? "10px" : 0};
      color: ${textColor};
      cursor: pointer;
      &:hover {
        background-color: ${t.colors[color].hover};
        color: ${getContrastColor(t, t.colors[color].hover)};
      }
      &:active {
        background-color: ${t.colors[color].active};
        color: ${getContrastColor(t, t.colors[color].active)};
      }
    `;
  }}
`;
