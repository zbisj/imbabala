import React from "react";
import ListGroup from ".";

export default {
  title: "Content/List Group",
  component: ListGroup,
  argTypes: {
    items: { controls: "array" },
  },
};

const Template = (args) => <ListGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "List Item" },
    { label: "List Item" },
    { label: "List Item" },
  ],
};

export const Active = Template.bind({});
Active.args = {
  items: [
    { label: "List Item", active: true },
    { label: "List Item" },
    { label: "List Item" },
    { label: "List Item" },
  ],
};

export const Info = Template.bind({});
Info.args = {
  items: [
    { label: "List Item", variant: "info" },
    { label: "List Item", variant: "info" },
    { label: "List Item", variant: "info" },
  ],
};

export const Danger = Template.bind({});
Danger.args = {
  items: [
    { label: "List Item", variant: "danger" },
    { label: "List Item", variant: "danger" },
    { label: "List Item", variant: "danger" },
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { label: "List Item", variant: "primary" },
    { label: "List Item", variant: "primary" },
    { label: "List Item", variant: "primary" },
  ],
};

export const Success = Template.bind({});
Success.args = {
  items: [
    { label: "List Item", variant: "success" },
    { label: "List Item", variant: "success" },
    { label: "List Item", variant: "success" },
  ],
};

export const Warning = Template.bind({});
Warning.args = {
  items: [
    { label: "List Item", variant: "warning" },
    { label: "List Item", variant: "warning" },
    { label: "List Item", variant: "warning" },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  items: [
    { label: "List Item", variant: "secondary" },
    { label: "List Item", variant: "secondary" },
    { label: "List Item", variant: "secondary" },
  ],
};
