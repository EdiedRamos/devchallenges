import { Hero as Component } from "./hero";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "DeviceShopCheckout/hero",
  component: Component,
  args: {},
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

export const Hero: Story = {};

export default meta;
