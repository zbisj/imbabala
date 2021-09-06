import React from "react";
import Breadcrumb from ".";

export default {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    items: { controls: "array" },
    variant: {
      options: ["info", "danger", "primary", "success", "warning", "secondary"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const Info = Template.bind({});
Info.args = {
  items: [
    { link: "https://youtube.com/", label: "YouTube" },
    { link: "https://youtube.com/", label: "YouTube" },
  ],
  variant: "info",
};

export const Danger = Template.bind({});
Danger.args = {
  items: [
    { link: "https://youtube.com/", label: "YouTube" },
    { link: "https://youtube.com/", label: "YouTube" },
  ],
  variant: "Danger",
};

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { link: "https://youtube.com/", label: "YouTube" },
    { link: "https://youtube.com/", label: "YouTube" },
  ],
  variant: "primary",
};

export const Success = Template.bind({});
Success.args = {
  items: [
    { link: "https://youtube.com/", label: "YouTube" },
    { link: "https://youtube.com/", label: "YouTube" },
  ],
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  items: [
    { link: "https://youtube.com/", label: "YouTube" },
    { link: "https://youtube.com/", label: "YouTube" },
  ],
  variant: "warning",
};

export const Secondary = Template.bind({});
Secondary.args = {
  items: [
    { link: "https://youtube.com/", label: "YouTube" },
    { link: "https://youtube.com/", label: "YouTube" },
  ],
  variant: "secondary",
};
