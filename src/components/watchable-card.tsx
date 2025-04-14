"use client";

import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScoreIndicator } from "./score-indicator";
import { WatchableParams } from "@/data/watchable";
import { env } from "@/lib/env";
import { GenreSeparator } from "./genre-separator";
import { Fragment } from "react";

interface WatchableCardProps {
  watchable: WatchableParams;
}

export function WatchableCard({ watchable }: WatchableCardProps) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Card className="bg-transparent border-0">
          <CardHeader>
            <div className="group w-full aspect-[220/330] relative overflow-hidden rounded-xl">
              <Image
                src={`${env.TMDB_MEDIA_URL}w220_and_h330_face/${watchable.banner}`}
                alt=""
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="!max-w-3xl w-full bg-gradient-to-b from-neutral-900 to-neutral-950 backdrop-blur-md border-2 border-neutral-800 p-0 text-white rounded-md">
        <div
          className="w-full aspect-[1920/800] bg-cover bg-no-repeat flex justify-end items-end px-5 py-5"
          style={{
            backgroundImage: `url('${env.TMDB_MEDIA_URL}w1920_and_h800_multi_faces/${watchable.backdrop}')`,
          }}
        ></div>
        <div className="relative -top-8 bg-gradient-to-b from-neutral-900/30 backdrop-blur-xs to-neutral-950 h-[calc(100%+32px)] px-5">
          <div className="flex items-center mt-8">
            <div className="flex flex-col gap-3 flex-1">
              <DialogHeader className="flex justify-between flex-row">
                <DialogTitle className="text-neutral-300 font-title text-lg md:text-xl lg:text-2xl">
                  {watchable.title}
                </DialogTitle>
              </DialogHeader>
              <span className="text-neutral-500 text-xs lg:text-md flex items-center gap-2">
                {watchable.releaseDate.getFullYear()}
                <GenreSeparator />
                {watchable.genres.map((genre, index) => (
                  <Fragment key={genre}>
                    {genre}
                    {index < watchable.genres.length - 1 && <GenreSeparator />}
                  </Fragment>
                ))}
              </span>
            </div>
            <ScoreIndicator
              score={watchable.voteAverage}
              className="text-sm md:text-md lg:text-lg self-start"
            />
          </div>

          <p className="mt-3 text-xs md:text-sm lg:text-md text-neutral-400">
            {watchable.overview}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
