import React from "react";
import { Button } from ".";

export default {
  title: "Controls/Button",
  component: Button,
  argTypes: {
    label: { controls: "text" },
    variant: {
      options: ["info", "danger", "primary", "success", "warning", "secondary"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Info = Template.bind({});
Info.args = {
  variant: "info",
  label: "Click Me",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  label: "Click Me",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Click Me",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  label: "Click Me",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  label: "Click Me",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Click Me",
};
