import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader, H2, SectionLabel, SectionDescription } from "./typography";

const meta = {
  title: "UI/Typography",
  component: SectionHeader,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullHeader: Story = {
  args: {
    label: "About",
    title: "Designer, developer, and music maker",
    description:
      "I primarily design & make music. I can also code. A little. Here is a longer description to preview wrapping.",
  },
};

export const TitleOnly: Story = {
  args: { title: "Recent books I've read" },
};

export const Pieces: Story = {
  args: { title: "" },
  render: () => (
    <div className="space-y-6">
      <SectionLabel>Section Label</SectionLabel>
      <H2>Heading (H2)</H2>
      <SectionDescription>
        Section description text that sits under a heading and can wrap across
        multiple lines within a max width.
      </SectionDescription>
    </div>
  ),
};
