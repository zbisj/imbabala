import React from "react";
import NavBar from ".";

export default {
  title: "Navigation/NavBar",
  component: NavBar,
  argTypes: {
    brand: {
      controls: "object",
      description:
        "Branding information, like logo, home link and company name",
    },
    justify: {
      type: "string",
      options: ["end", "start", "center", "around", "evenly", "between"],
      control: "select",
      description: "Flex justify content",
    },
    color: {
      options: ["info", "danger", "primary", "success", "warning", "secondary"],
      control: "select",
      description: "Text color for each NavBar item",
    },
    background: {
      options: ["info", "danger", "primary", "success", "warning", "secondary"],
      control: "select",
      description: "Background color for the entire NavBar",
    },
    items: {
      control: "array",
      description: "An array of navigation items or links",
    },
  },
  parameters: {
    docs: {
      description: { component: "Website navigation header." },
    },
  },
  args: {
    brand: {
      name: "Company",
      link: "https://github.com",
      image: "https://bit.ly/3yNsToa",
    },
    items: [
      { label: "Link" },
      { label: "Link" },
      { label: "Link", disabled: true },
    ],
  },
};

const Template = (args) => <NavBar {...args} />;

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
