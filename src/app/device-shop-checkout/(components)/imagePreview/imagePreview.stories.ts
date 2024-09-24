import { ImagePreview as Component } from "./imagePreview";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "DeviceShopCheckout",
  component: Component,
  args: {
    imageSrc: "/device-shop-checkout/gold.png",
    alt: "iPhone 12 Pro image",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

export const ImagePreview: Story = {};

export default meta;
