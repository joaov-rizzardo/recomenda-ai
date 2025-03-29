import { cn } from "@/lib/utils";

interface TypeSelectorProps {
  name: string;
  selected: boolean;
  className?: string;
}

export function TypeSelector({ selected, name, className }: TypeSelectorProps) {
  const variant = selected
    ? "bg-gray-800 text-gray-400 font-semibold"
    : "border border-gray-800 text-gray-400 hover:bg-gray-800 transition-colors duration-500";
  return (
    <div className={cn("cursor-pointer px-3 py-1 rounded-sm", variant, className)}>
      {name}
    </div>
  );
}
