import React from "react";
import Dropdown from ".";

export default {
  title: "Controls/Dropdown",
  component: Dropdown,
  argTypes: {
    items: { controls: "array" },
    label: { controls: "text" },
    variant: {
      options: ["info", "danger", "primary", "success", "warning", "secondary"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Click Me ",
  items: [
    {
      label: "Item 2",
      seperated: true,
    },
    { label: "Item 2" },
    { label: "Item 3" },
    { label: "Item 4" },
  ],
  variant: "danger",
};
