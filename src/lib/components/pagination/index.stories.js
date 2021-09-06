import React from "react";
import Pagination from ".";

export default {
  title: "Navigation/Pagination",
  component: Pagination,
  args: {
    items: [
      { label: "Previous", link: "https://github.com" },
      { label: 1, link: "https://github.com" },
      { label: 2, link: "https://github.com", active: true },
      { label: 3, link: "https://github.com" },
      { label: 4, link: "https://github.com" },
      { label: 5, link: "https://github.com" },
      { label: 6, link: "https://github.com" },
      { label: 7, link: "https://github.com" },
      { label: "Next", link: "https://github.com" },
    ],
  },
  argTypes: {
    color: {
      options: ["info", "danger", "primary", "success", "warning", "secondary"],
      control: "select",
    },
    items: {
      control: "array",
    },
    justify: {
      type: "string",
      options: ["end", "start", "center", "around", "evenly", "between"],
      control: "select",
      description: "Flex justify content",
    },
    background: {
      options: ["info", "danger", "primary", "success", "warning", "secondary"],
      control: "select",
    },
  },
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Info = Template.bind({});
Info.args = {
  color: "info",
  background: "info",
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
  background: "danger",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  background: "primary",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
  background: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
  background: "warning",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  background: "secondary",
};
