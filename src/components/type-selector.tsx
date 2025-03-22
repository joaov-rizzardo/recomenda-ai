import { cn } from "@/lib/utils";

export function TypeSelector({ selected }: { selected: boolean }) {
  const variant = selected
    ? "bg-rose-700 text-gray-950"
    : "border border-rose-700 text-rose-700";
  return <div className={cn("cursor-pointer px-3 py-1 rounded-sm", variant)}>Série</div>;
}
