import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Page } from "./Page";

export default {
  title: "Example/Page",
  component: Page,
  argTypes: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = () => <Page />;

export const Primary = Template.bind({});
Primary.args = {};
