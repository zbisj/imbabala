import React from "react";
import Notification from ".";

export default {
  title: "Messaging/Notification",
  component: Notification,
  argTypes: {
    heading: { controls: "text" },
    content: { controls: "text" },
    variant: {
      options: ["info", "danger", "primary", "success", "warning", "secondary"],
      control: { type: "select" },
    },
    alignHeading: {
      options: ["center", "left", "right", "justify"],
      control: { type: "select" },
    },
    alignContent: {
      options: ["center", "left", "right", "justify"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Notification {...args} />;

export const Info = Template.bind({});
Info.args = {
  variant: "info",
  heading: "Heading",
  content:
    "Eiusmod adipisicing tempor ipsum adipisicing. Cillum culpa id ut excepteur proident consectetur nostrud Lorem voluptate occaecat. Reprehenderit mollit amet labore exercitation occaecat ipsum reprehenderit nulla esse labore anim.",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  heading: "Heading",
  content:
    "Eiusmod adipisicing tempor ipsum adipisicing. Cillum culpa id ut excepteur proident consectetur nostrud Lorem voluptate occaecat. Reprehenderit mollit amet labore exercitation occaecat ipsum reprehenderit nulla esse labore anim.",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  heading: "Heading",
  content:
    "Laborum dolor consectetur ipsum proident id qui ullamco. Duis aliquip laboris ex sunt Lorem ea sint nisi irure occaecat pariatur cillum. Adipisicing ut reprehenderit duis elit dolor culpa sunt sint pariatur et eu. Sit aute velit magna ea ullamco sunt et proident pariatur laboris Lorem. Qui eiusmod Lorem officia eu nisi laborum veniam in laborum magna reprehenderit voluptate. incididunt laborum exercitation do magna dolore id.",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  heading: "Heading",
  content:
    "Laborum dolor consectetur ipsum proident id qui ullamco. Duis aliquip laboris ex sunt Lorem ea sint nisi irure occaecat pariatur cillum. Adipisicing ut reprehenderit duis elit dolor culpa sunt sint pariatur et eu. Sit aute velit magna ea ullamco sunt et proident pariatur laboris Lorem. Qui eiusmod Lorem officia eu nisi laborum veniam in laborum magna reprehenderit voluptate. incididunt laborum exercitation do magna dolore id.",
};

export const warning = Template.bind({});
warning.args = {
  variant: "warning",
  heading: "Heading",
  content:
    "Reprehenderit aliqua adipisicing nostrud dolor est est. Cillum aute mollit ad non ea qui veniam est. Consequat ex incididunt deserunt velit incididunt. Officia proident commodo consequat quis enim ut enim veniam.",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  heading: "Heading",
  content:
    "Occaecat do enim cillum fugiat ad qui ea occaecat laboris consequat laborum proident. Aute quis aliquip veniam velit eiusmod do. Anim eu reprehenderit est ut eu. In ullamco ad anim in fugiat ad commodo eu et reprehenderit cupidatat in mollit duis. Adipisicing do adipisicing cillum proident minim Lorem. Nostrud anim Lorem ullamco enim nostrud ea veniam aliqua qui enim. Consequat commodo laboris fugiat adipisicing ut excepteur.",
};
