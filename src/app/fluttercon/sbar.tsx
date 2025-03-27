"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import type React from "react";
import { useContext, useState } from "react";
import { StrokeContext } from "../global";

interface Category {
  name: string;
  count: number;
}

const Sbar: React.FC = () => {
  const strokeContext = useContext(StrokeContext);

  if (!strokeContext) {
    throw new Error("Sbar must be used within a StrokeProvider");
  }

  const {
    strokeWidth,
    setStrokeWidth,
    color,
    setColor,
    iconSize,
    setIconSize,
  } = strokeContext;
  const [absoluteStroke, setAbsoluteStroke] = useState<boolean>(false);
  const [collapsed] = useState<boolean>(false);

  const category: Category[] = [
    { name: "home", count: 29 },
    { name: "Setting", count: 125 },
    { name: "Bell", count: 20 },
    { name: "Message", count: 201 },
    { name: "Camera", count: 21 },
    { name: "Heart", count: 24 },
    { name: "Play", count: 31 },
    { name: "Pause", count: 50 },
    { name: "Trash", count: 82 },
    { name: "Paperclip", count: 32 },
    { name: "Bolt", count: 231 },
    { name: "Clock", count: 153 },
    { name: "Eye", count: 20 },
    { name: "Clipboard", count: 163 },
    { name: "Calender", count: 46 },
    { name: "Bookmark", count: 66 },
    { name: "Star", count: 132 },
    { name: "Cart", count: 45 },
    { name: "Music", count: 130 },
    { name: "Location", count: 25 },
    { name: "Mathematics", count: 68 },
    { name: "Medical", count: 39 },
    { name: "Multimedia", count: 127 },
    { name: "Nature", count: 19 },
    { name: "Navigation", count: 134 },
  ];

  return (
    <SidebarProvider className="bg-black">
      <SidebarTrigger className="z-10" />
      <Sidebar
        // style={{ overflowY: "auto" }}
        className={"overflow-y-auto bg-sidebar p-4"}
      >
        <Link href="/">
          <h1 className="mb-4 font-bold text-lg">Fluttercon</h1>
        </Link>

        <Card className="mb-6 rounded-md bg-[#181818] p-3">
          <h2 className="mb-2 font-semibold text-sm">Customizer</h2>

          <div className="mb-3">
            <label htmlFor="color-picker" className="text-gray-400 text-xs">
              Color
            </label>
            <Input
              id="color-picker"
              type="color"
              className="h-8 w-full cursor-pointer bg-[#252525]"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="stroke-slider" className="text-gray-400 text-xs">
              Stroke width
            </label>
            <Slider
              id="stroke-slider"
              min={1}
              max={5}
              value={[strokeWidth]}
              onValueChange={(value) => setStrokeWidth(value[0])}
              className="relative"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="size-slider" className="text-gray-400 text-xs">
              Size
            </label>
            <Slider
              id="size-slider"
              min={20}
              max={100}
              value={[iconSize]}
              onValueChange={(value) => setIconSize(value[0])}
              className="relative"
            />
          </div>

          <div className="ml-[-2px] flex items-center justify-between text-xs">
            <span>Absolute Stroke width</span>
            <Switch
              checked={absoluteStroke}
              onCheckedChange={setAbsoluteStroke}
              className="bg-white"
            />
          </div>
        </Card>

        <div className="mb-2 flex flex-row text-gray-400 text-xs">
          Include external libs
        </div>
        <label
          htmlFor="Lab"
          className="flex cursor-pointer items-center space-x-2"
        >
          <Switch className="bg-primary" />
          <span>Lab</span>
        </label>

        <h2 className="mt-6 mb-2 font-semibold text-sm">View</h2>
        <p className="mb-2 cursor-pointer text-[hsl(var(--primary))] text-lg">
          All
        </p>

        <h2 className="mb-2 font-semibold text-lg">Categories</h2>
        <ul className="space-y-1 pb-15 text-xs">
          {category.map((cat) => (
            <TooltipProvider key={cat.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <li className="m-3 flex cursor-pointer justify-between hover:text-[hsl(var(--primary))]">
                    <Link
                      href={`/${cat.name.replace(/ /g, "-")}`}
                      className="ml-5 flex w-full justify-between hover:text-primary"
                    >
                      <span>{cat.name}</span>
                      <span className="text-primary">{cat.count}</span>
                    </Link>
                  </li>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right" align="center">
                    {cat.name}
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </ul>
      </Sidebar>
    </SidebarProvider>
  );
};

export default Sbar;
