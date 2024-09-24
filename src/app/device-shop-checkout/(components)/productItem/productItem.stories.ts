import { ProductItem as Component } from "./productItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "DeviceShopCheckout/productItem",
  component: Component,
  args: {
    productImage: "/device-shop-checkout/gold.png",
    productName: "iPhone 12 Pro",
    productColor: "Golden",
    quantity: 1,
    total: 999,
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof meta>;

export const ProductItem: Story = {};

export default meta;
