import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { onClick: { action: 'click' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mainType: "Primary",
  label: "Hello Kat",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  onClick: function() {
    console.log('du ma')
  }
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
  onClick: function() {
    console.log('hihi')
  }
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
  onClick: function() {
    console.log('lol')
  }
};
