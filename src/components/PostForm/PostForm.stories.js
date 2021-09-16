import React from "react";

import PostForm from "./PostForm";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/PostForm",
  component: PostForm,
};

const Template = () => (
  <PostForm content="Hey, I'm a very old post." date="3/2/2021" />
);

export const Default = Template.bind({});
