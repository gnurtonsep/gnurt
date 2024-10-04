import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
    title: "Components/Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        textTrigger: "Open menu",
        lists: [{ value: "abc" }, { value: "cde" }],
    },
};
