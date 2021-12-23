import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "../components/molecules/header";

export default {
  title: "Example/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header
    heading="Your clientele"
    subheading="13 active client"
    buttonText="+ Add new Client"
  />
);

export const HeaderC = Template.bind({});
