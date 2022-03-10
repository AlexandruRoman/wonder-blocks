import styled, { css } from "styled-components";
import { Button } from "../..";
import { Color, Theme } from "../../theme/theme";
import { useTheme } from "../../theme/ThemeContext";
import { IconType } from "react-icons";

type MenuItem = {
  key: string;
  onClick?: () => void;
  isActive?: boolean;
  icon?: IconType;
  label?: string;
};

type SidebarMenuProps = {
  color?: Color;
  fontSize?: number;
  menuItems: MenuItem[];
};

export function SidebarMenu({
  color = "primary",
  fontSize,
  menuItems,
}: SidebarMenuProps) {
  const theme = useTheme();
  return (
    <Container t={theme} color={color}>
      {menuItems.map((item) => (
        <Button {...item} fontSize={fontSize} color={color} isRound style={{margin: theme.space[2]}}/>
      ))}
    </Container>
  );
}

const Container = styled.div<{ t: Theme; color: Color }>`
  ${({ t, color }) => {
    return css`
      background-color: ${t.colors[color].default};
      height: 100%;
      padding: ${t.space[2]};
      width: fit-content;
      display: flex;
      flex-direction: column;
    `;
  }}
`;
