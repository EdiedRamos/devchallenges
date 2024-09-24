import { Button as Component } from "./button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "DeviceShopCheckout/button",
  component: Component,
  args: {
    children: "Apply Coupon",
  },
  argTypes: {
    children: {
      description: "Button content, generally text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

export const Button: Story = {};

export default meta;
