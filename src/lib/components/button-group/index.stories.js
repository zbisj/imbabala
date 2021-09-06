import React from "react";
import ButtonGroup from ".";

export default {
  title: "Controls/Button-Group",
  component: ButtonGroup,
  argTypes: {
    label: { controls: "array" },
  },
};

const Template = (args) => <ButtonGroup {...args} />;

export const Info = Template.bind({});
Info.args = {
  items: [
    {
      variant: "info",
      label: "Info",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "info",
      label: "Info",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
  ],
};

export const Danger = Template.bind({});
Danger.args = {
  items: [
    {
      variant: "danger",
      label: "Danger",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "danger",
      label: "Danger",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      variant: "primary",
      label: "Primary",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "primary",
      label: "Primary",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
  ],
};

export const Success = Template.bind({});
Success.args = {
  items: [
    {
      variant: "success",
      label: "Success",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "success",
      label: "Success",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
  ],
};

export const Warning = Template.bind({});
Warning.args = {
  items: [
    {
      variant: "warning",
      label: "Warning",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "warning",
      label: "Warning",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  items: [
    {
      variant: "secondary",
      label: "Secondary",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "secondary",
      label: "Secondary",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
  ],
};

export const Mixed = Template.bind({});
Mixed.args = {
  items: [
    {
      variant: "info",
      label: "Info",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "danger",
      label: "Danger",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "primary",
      label: "Primary",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "success",
      label: "Success",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "warning",
      label: "Warning",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
    {
      variant: "secondary",
      label: "Secondary",
      onClick: () => {
        console.log("Button Cliked");
      },
    },
  ],
};
