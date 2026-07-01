import type { Meta, StoryObj } from "@storybook/react";
import { Play } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./hover-card";
import { Button } from "./button";

const meta = {
  title: "UI/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="p-16"><Story /></div>],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">Hover for details</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Now Playing</h4>
          <p className="text-sm text-muted-foreground">
            Everything in its Right Place - Radiohead
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// Mirrors the music-player hover card in the real nav
// (src/components/layout/NavigationMenu.tsx): align="end", w-80.
export const MusicPlayer: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Play music">
          <Play className="h-4 w-4" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Digital Synth</h4>
          <p className="text-sm text-muted-foreground">
            Play a tune on my custom digital synthesizer
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-xs font-semibold">Audio Engine:</p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Tone.js PolySynth with Triangle8 oscillator</p>
              <p>Dynamic filter envelope & compressor</p>
              <p>Effects: Chorus + Reverb + Filter chain</p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
