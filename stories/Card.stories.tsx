import React from "react";
import { OutlinedCard } from "../components/Card";
import { Story, Meta } from "@storybook/react";

export default {
  title: "OutlinedCard",
  component: OutlinedCard,
} as Meta;

const Template: Story = (args) => <OutlinedCard {...args} />

export const NewCard = Template.bind({});
NewCard.args = {}
