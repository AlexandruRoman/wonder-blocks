import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SidebarMenu } from "./SidebarMenu";
import { FiMusic, FiSettings } from "react-icons/fi";

export default {
  title: "Example/SidebarMenu",
  component: SidebarMenu,
  argTypes: {
    color: { type: "string" },
  },
} as ComponentMeta<typeof SidebarMenu>;

const Template: ComponentStory<typeof SidebarMenu> = (args) => (
  <SidebarMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "tertiary",
  fontSize: 1,
  menuItems: [
    {
      key: "settings",
      // label: "Settings",
      icon: FiSettings,
      isActive: true,
    },
    {
      key: "songs",
      // label: "Songs",
      icon: FiMusic,
    },
  ],
};
