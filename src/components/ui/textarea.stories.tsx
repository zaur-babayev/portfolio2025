import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "Write your message...",
    disabled: false,
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled textarea" },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2 w-80">
      <label htmlFor="message" className="text-sm font-medium">Message</label>
      <Textarea id="message" {...args} />
    </div>
  ),
};
