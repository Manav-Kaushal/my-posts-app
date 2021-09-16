import React from "react";

import Post from "./Post";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Post",
  component: Post,
};

const Template = () => (
  <Post content="Hey, I'm a very old post." date="3/2/2021" />
);

export const Default = Template.bind({});
