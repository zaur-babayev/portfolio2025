import type { Meta, StoryObj } from "@storybook/react";
import { Record } from "./record";
import "@/styles/record.css";

const meta = {
  title: "UI/Record",
  component: Record,
  tags: ["autodocs"],
  args: {
    title: "In Rainbows",
    artist: "Radiohead",
    coverUrl: "https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png",
  },
  decorators: [(Story) => <div className="p-12"><Story /></div>],
} satisfies Meta<typeof Record>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLink: Story = {
  args: { link: "https://radiohead.com" },
};
