import React from "react";
import Badge from ".";

export default {
  title: "Messaging/Badge",
  component: Badge,
  argTypes: {
    pill: { controls: "boolean" },
    label: { controls: "text" },
    variant: {
      options: ["info", "danger", "primary", "success", "warning", "secondary"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const Info = Template.bind({});
Info.args = {
  variant: "info",
  label: "2",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  label: "2",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "2",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  label: "2",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  label: "2",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "2",
};
