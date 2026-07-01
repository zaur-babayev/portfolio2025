import type { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastProvider,
  ToastViewport,
} from "./toast";

const meta = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <ToastProvider>
        <div className="p-8">
          <Story />
        </div>
        <ToastViewport />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toast open className="static">
      <div className="grid gap-1">
        <ToastTitle>Scheduled</ToastTitle>
        <ToastDescription>Your event has been created.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Toast open className="static">
      <div className="grid gap-1">
        <ToastTitle>Copied</ToastTitle>
        <ToastDescription>Token copied to clipboard.</ToastDescription>
      </div>
      <ToastAction altText="Undo">Undo</ToastAction>
      <ToastClose />
    </Toast>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Toast open variant="destructive" className="static">
      <div className="grid gap-1">
        <ToastTitle>Error</ToastTitle>
        <ToastDescription>Something went wrong.</ToastDescription>
      </div>
      <ToastClose />
    </Toast>
  ),
};
