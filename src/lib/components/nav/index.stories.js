import React from "react";
import Nav from ".";

export default {
  title: "Navigation/Nav",
  component: Nav,
  argTypes: {
    tabs: { controls: "boolean" },
    pills: { controls: "boolean" },
    color: { controls: "text" },
    items: { controls: "array" },
    vertical: { controls: "boolean" },
    background: { controls: "text" },
    alignItems: {
      options: ["end", "start", "center", "around", "evenly", "between"],
      controls: "select",
    },
  },
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Active" },
    { label: "Link" },
    { label: "Link" },
    { label: "Disabled", link: "https://github.com", disabled: true },
  ],
};

export const Info = Template.bind({});
Info.args = {
  items: [
    { label: "Active" },
    { label: "Link" },
    { label: "Link" },
    { label: "Disabled", link: "https://github.com", disabled: true },
  ],
  color: "info",
  background: "info",
};

export const Danger = Template.bind({});
Danger.args = {
  items: [
    { label: "Active" },
    { label: "Link" },
    { label: "Link" },
    { label: "Disabled", link: "https://github.com", disabled: true },
  ],
  color: "danger",
  background: "danger",
};

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { label: "Active" },
    { label: "Link" },
    { label: "Link" },
    { label: "Disabled", link: "https://github.com", disabled: true },
  ],
  color: "primary",
  background: "primary",
};

export const Success = Template.bind({});
Success.args = {
  items: [
    { label: "Active" },
    { label: "Link" },
    { label: "Link" },
    { label: "Disabled", link: "https://github.com", disabled: true },
  ],
  color: "success",
  background: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  items: [
    { label: "Active" },
    { label: "Link" },
    { label: "Link" },
    { label: "Disabled", link: "https://github.com", disabled: true },
  ],
  color: "warning",
  background: "warning",
};

export const Secondary = Template.bind({});
Secondary.args = {
  items: [
    { label: "Active" },
    { label: "Link" },
    { label: "Link" },
    { label: "Disabled", link: "https://github.com", disabled: true },
  ],
  color: "secondary",
  background: "secondary",
};
