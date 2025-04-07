"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IconType } from "react-icons/lib";

interface MediaTypeCardProps {
  name: string;
  onSelect: () => void;
  Icon: IconType;
  description: string;
}

export function MediaTypeCard({
  name,
  Icon,
  onSelect,
  description,
}: MediaTypeCardProps) {
  return (
    <Card
      onClick={onSelect}
      className="group bg-neutral-900/80 border-neutral-900 py-5 flex-1 hover:scale-105 transition-all duration-1000 cursor-pointer"
    >
      <CardContent className="flex gap-4 justify-between text-end">
        <div className="bg-neutral-950/30 size-25 flex justify-center items-center rounded-xl">
          <Icon className="size-14 text-purple-500" />
        </div>
        <div className="self-end flex flex-col justify-end gap-2 flex-1">
          <h2 className="text-gray-300 text-2xl font-light">{name}</h2>
          <p className="text-gray-500 text-md">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
