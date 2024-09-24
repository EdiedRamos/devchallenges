import { Input as Component } from "./input";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "DeviceShopCheckout/input",
  component: Component,
  args: {
    type: "text",
    placeholder: "Enter first & last name",
    value: "EdiedRamos",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    theme: "secondary",
  },
};

export default meta;
