import React from "react";
import Card from ".";

export default {
  title: "Container/Card",
  component: Card,
  argTypes: {
    image: { controls: "text" },
    heading: { controls: "text" },
    content: { controls: "text" },
    controls: { controls: "array" },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://bit.ly/3Au6jS4",
  heading: "Heading",
  content:
    "Irure aliquip qui cupidatat veniam aliquip id deserunt id irure Lorem do minim eiusmod. Mollit irure incididunt anim fugiat cillum deserunt ex commodo enim pariatur. Dolor ut ea aliquip pariatur dolore esse laboris enim laborum do et velit.",
  actions: [
    { label: "Click Me", variant: "primary" },
    { label: "Click Me", variant: "primary" },
    { label: "Click Me", variant: "primary" },
    { label: "Click Me", variant: "primary" },
  ],
};
