import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "email",
        placeholder: "abc",
        required: true,
    },
};
