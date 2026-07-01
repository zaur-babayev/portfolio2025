import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";

const meta = {
  title: "UI/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="p-16 w-[320px]"><Story /></div>],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i}>
            <div className="flex aspect-square items-center justify-center rounded-md border bg-muted text-4xl font-semibold">
              {i + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, i) => (
          <CarouselItem key={i} className="basis-1/2">
            <div className="flex aspect-square items-center justify-center rounded-md border bg-muted text-2xl font-semibold">
              {i + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

// Mirrors the books/records carousel in src/pages/AboutPage.tsx:
// centered + looping, edge gradient fades, and arrows pulled inward.
export const PortfolioCarousel: Story = {
  decorators: [(Story) => <div className="p-8 w-[320px]"><Story /></div>],
  render: () => (
    <div className="w-full relative px-0">
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
      <Carousel opts={{ align: "center", loop: true }} className="w-full">
        <CarouselContent className="-ml-1 flex items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <CarouselItem
              key={i}
              className="pl-1 basis-[95%] flex items-center justify-center"
            >
              <div className="flex aspect-square w-full items-center justify-center rounded-md border bg-muted text-4xl font-semibold">
                {i + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-2 hover:bg-background/80 hover:text-foreground z-20" />
        <CarouselNext className="absolute -right-2 hover:bg-background/80 hover:text-foreground z-20" />
      </Carousel>
    </div>
  ),
};
