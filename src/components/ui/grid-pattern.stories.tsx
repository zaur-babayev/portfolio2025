import type { Meta, StoryObj } from "@storybook/react";
import { GridPattern } from "./grid-pattern";

const meta = {
  title: "UI/GridPattern",
  component: GridPattern,
  tags: ["autodocs"],
  args: {
    width: 32,
    height: 32,
    strokeDasharray: "0",
  },
  decorators: [
    (Story) => (
      <div className="relative h-64 w-96 overflow-hidden rounded-md border bg-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GridPattern>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dashed: Story = {
  args: { strokeDasharray: "4 2" },
};

export const HighlightedSquares: Story = {
  args: {
    squares: [
      [1, 1],
      [3, 2],
      [5, 4],
      [7, 1],
    ],
  },
};
