import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/atoms/button";

export default {
  title: "Example/Header",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button title="This is the Title" type="asdf" />
);

export const ButtonC = Template.bind({});
