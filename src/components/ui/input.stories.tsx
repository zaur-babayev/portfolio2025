import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Type something...",
    type: "text",
    disabled: false,
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled input" },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2 w-80">
      <label htmlFor="email" className="text-sm font-medium">Email</label>
      <Input id="email" type="email" placeholder="you@example.com" {...args} />
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <Input type="text" placeholder="Text" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="file" />
    </div>
  ),
};
