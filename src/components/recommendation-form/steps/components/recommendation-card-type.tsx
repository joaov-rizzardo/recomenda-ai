"use client";

import { Card, CardContent } from "@/components/ui/card";

interface RecommendationTypeCardProps {
  name: string;
  onSelect: () => void;
  emote: string;
  description: string;
}

export function RecommendationTypeCard({
  name,
  emote,
  onSelect,
  description,
}: RecommendationTypeCardProps) {
  return (
    <Card
      onClick={onSelect}
      className="group bg-gray-900 border-slate-800 py-5 flex-1 cursor-pointer hover:bg-emerald-700 transition-all duration-1000"
    >
      <CardContent className="flex gap-4 justify-between text-end">
        <span className="text-6xl self-center">{emote}</span>
        <div className="self-end flex flex-col justify-end gap-2">
          <h2 className="text-gray-300 text-2xl font-light group-hover:text-gray-900 group-hover:font-semibold transition-all duration-1000">
            {name}
          </h2>
          <p className="text-gray-500 group-hover:text-gray-800 transition-all duration-1000">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
("");
