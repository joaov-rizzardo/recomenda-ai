'use client'

import { Card, CardContent } from "@/components/ui/card";
import { IconType } from "react-icons";

interface MediaTypeCardProps {
  name: string;
  onSelect: () => void;
  Icon: IconType;
}

export function MediaTypeCard({ name, Icon, onSelect }: MediaTypeCardProps) {
  return (
    <Card
      onClick={onSelect}
      className="group bg-gray-900 border-slate-800 py-2 flex-1 cursor-pointer hover:bg-emerald-700 transition-all duration-1000"
    >
      <CardContent className="flex gap-4 justify-between">
        <Icon className="self-start size-20 text-emerald-700 group-hover:text-gray-900 transition-all duration-1000" />
        <h2 className="self-end text-gray-300 text-2xl font-light group-hover:text-gray-900 group-hover:font-semibold transition-all duration-1000">
          {name}
        </h2>
      </CardContent>
    </Card>
  );
}
("");
