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
      className="group cursor-pointer py-1 px-2 flex gap-3 items-center bg-emerald-700 text-sm text-gray-900 rounded-full"
      onClick={() => onDelete(name)}
    >
      {name}
      <BsX className="size-5 text-transparent group-hover:text-gray-900 font-semibold" />
    </div>
  );
}
