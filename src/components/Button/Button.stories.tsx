import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { FaArrowUp, FaSave } from "react-icons/fa";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  color: "primary",
};

export const Icon = Template.bind({});
Icon.args = {
  icon: FaArrowUp,
  isRound: true,
};

export const IconText = Template.bind({});
IconText.args = {
  label: "save",
  icon: FaSave,
  isRound: true,
  fontSize: 2,
};
