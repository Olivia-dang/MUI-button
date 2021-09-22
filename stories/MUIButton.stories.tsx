import React from "react";
import { MUIButton, MUIButtonProps } from "../components/MUIButton";
import { Story, Meta } from "@storybook/react";

// export default {
//   title: "Button",
//   component: MUIButton,
//   argTypes: { onClick: { action: 'click' } },
// } as ComponentMeta<typeof MUIButton>;

export default {
  title: "MUIButton",
  component: MUIButton,
} as Meta;

const Template: Story<MUIButtonProps> = (args) => (
  <>
    <MUIButton {...args} />
  </>
);

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const Contained = Template.bind({});
Text.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Text.args = {
  variant: "outlined",
};

export const Red = Template.bind({});
Text.args = {
  color: "red",
};
