import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./toaster";
import { Button } from "./button";
import { ToastAction } from "./toast";
import { toast } from "@/hooks/use-toast";

const meta = {
  title: "UI/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
        <Toaster />
      </div>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast({
          title: "Scheduled",
          description: "Your event has been created.",
        })
      }
    >
      Show toast
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast({
          title: "Token revoked",
          description: "The access token has been revoked.",
          action: <ToastAction altText="Undo">Undo</ToastAction>,
        })
      }
    >
      Show toast with action
    </Button>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Please try again later.",
        })
      }
    >
      Show error toast
    </Button>
  ),
};
