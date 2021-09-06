import React from "react";
import Example from ".";

export default {
  title: "Example",
  component: Example,
  args: {},
  argTypes: {},
};

const Template = (args) => <Example {...args} />;

export const Example = Template.bind({});
Example.args = {};
