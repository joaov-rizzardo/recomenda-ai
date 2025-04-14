"use client";

import { WatchableParams } from "@/data/watchable";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { WatchableCard } from "./watchable-card";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ResultListProps {
  results: WatchableParams[];
}

export function ResultList({ results }: ResultListProps) {
  const [startIndex, setStartIndex] = useState<number>(0);
  const router = useRouter();

  const chunkSize = 3;

  const newRecommendation = () => {
    setStartIndex((state) => (state += 3));
  };

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent className="">
          {results
            .slice(startIndex, startIndex + chunkSize)
            .map((watchable) => (
              <CarouselItem
                key={watchable.id}
                className="basis-full md:basis-1/3"
              >
                <WatchableCard watchable={watchable} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="md:hidden border-none text-gray-300 -left-8" />
        <CarouselNext className="md:hidden border-none text-gray-300 -right-8" />
      </Carousel>

      <div className="mt-6 flex justify-end items-center gap-3">
        <Button variant={"outline"} onClick={() => router.push("/")}>
          Recomeçar
        </Button>
        <Button
          disabled={startIndex + chunkSize >= results.length - 1}
          onClick={newRecommendation}
        >
          Indicar outros
        </Button>
      </div>
    </>
  );
}
