import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import { cn } from "@/lib/utils";

const meta = {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  decorators: [(Story) => <div className="p-8 min-h-[220px]"><Story /></div>],
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mirrors the real site nav in src/components/layout/NavigationMenu.tsx:
// minimal text links, active item is full-strength, others are muted.
export const PortfolioNav: Story = {
  render: () => {
    const links = [
      { label: "Work", active: true },
      { label: "Research", active: false },
      { label: "About", active: false },
    ];
    return (
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          {links.map(({ label, active }) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuLink
                href="#"
                className={cn(
                  "text-sm font-regular transition-colors px-3 py-2",
                  active ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                )}
              >
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
  },
};

// The shadcn default trigger style, for comparison / reference.
export const DefaultTriggerStyle: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {["Work", "Research", "About"].map((label) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const WithDropdown: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[320px] gap-2 p-4">
              {["Design", "Music", "Code", "Research"].map((item) => (
                <li key={item}>
                  <NavigationMenuLink
                    href="#"
                    className="block rounded-md p-3 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="font-medium">{item}</div>
                    <p className="text-muted-foreground">Explore my {item.toLowerCase()} work.</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
