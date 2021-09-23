import React from "react";
import { MUIButton, MUIButtonProps } from "../components/MUIButton";
import { Story, Meta } from "@storybook/react";

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
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
};
