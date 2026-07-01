import type { Meta, StoryObj } from "@storybook/react";
import { Book } from "./book";
import "@/styles/book.css";

const meta = {
  title: "UI/Book",
  component: Book,
  tags: ["autodocs"],
  args: {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
  },
  decorators: [(Story) => <div className="p-12"><Story /></div>],
} satisfies Meta<typeof Book>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLink: Story = {
  args: { link: "https://openlibrary.org" },
};
