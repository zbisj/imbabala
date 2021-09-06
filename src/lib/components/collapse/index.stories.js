import React from "react";
import Collapse from ".";

export default {
  title: "Container/Collapse",
  component: Collapse,
  argTypes: {
    action: { controls: "array" },
    content: { controls: "text" },
  },
};

const Template = (args) => <Collapse {...args} />;

export const Default = Template.bind({});
Default.args = {
  action: { label: "Click Me", variant: "primary" },
  content:
    "Voluptate qui exercitation aute consectetur incididunt fugiat deserunt aliqua consequat. Et id dolore sit proident pariatur non nulla culpa do. Id adipisicing ad id velit incididunt tempor ea. Occaecat commodo tempor adipisicing ad officia cupidatat dolore id ut voluptate. Cupidatat ut elit dolor adipisicing ad ut ad eiusmod. Quis tempor reprehenderit sunt adipisicing incididunt Lorem proident officia laboris. Consectetur officia exercitation occaecat consectetur consequat veniam do Lorem exercitation irure sint ut consequat Lorem.",
};
