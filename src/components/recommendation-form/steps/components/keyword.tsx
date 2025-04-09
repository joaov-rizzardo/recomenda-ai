"use client";

import { Button } from "@/components/ui/button";
import { BsX } from "react-icons/bs";

interface KeywordProps {
  name: string;
  onDelete: (name: string) => void;
}

export function Keyword({ name, onDelete }: KeywordProps) {
  return (
    <div
      className="group cursor-pointer py-1 px-2 flex gap-3 items-center bg-gradient-to-br from-purple-900 to-purple-600 text-sm text-gray-950 rounded-full font-normal"
      onClick={() => onDelete(name)}
    >
      {name}
      <BsX className="size-5 text-gray-900 hidden group-hover:block font-semibold" />
    </div>
  );
}
