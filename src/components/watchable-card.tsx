"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScoreCircle } from "./score-circle";

export function WatchableCard() {
  return (
    <Dialog>
      <DialogTrigger className="flex-1">
        <Card className="bg-transparent border-0">
          <CardHeader>
            <div className="group w-full aspect-[220/330] relative overflow-hidden rounded-xl">
              <Image
                src={
                  "https://media.themoviedb.org/t/p/w220_and_h330_face/1Wtfucko1wQBAN4rJbRnqA6kqQQ.jpg"
                }
                alt=""
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent
        style={{ maxWidth: "auto" }}
        className="!max-w-none w-[600px] bg-gradient-to-b from-neutral-900 to-neutral-950 backdrop-blur-md border-2 border-neutral-800 p-0 text-white rounded-md"
      >
        <div
          className="w-full aspect-[1920/800] bg-cover bg-no-repeat flex justify-end items-end px-5 py-5"
          style={{
            backgroundImage:
              "url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/omzeDBazScUAQwe3SiBVwgKr1p8.jpg')",
          }}
        >
        </div>
        <div className="relative -top-8 bg-gradient-to-b from-neutral-900/30 backdrop-blur-xs to-neutral-950 h-[calc(100%+32px)] px-5">
          <div className="flex items-center mt-8">
            <div className="flex flex-col gap-3 flex-1">
              <DialogHeader className="flex justify-between flex-row">
                <DialogTitle className="text-neutral-300 font-title text-2xl">
                  Mickey 17
                </DialogTitle>
              </DialogHeader>
              <span className="text-neutral-500 text-md flex items-center gap-2">
                2024{" "}
                <div className="mx-2 w-1 h-1 bg-gray-400 rounded-full"></div>{" "}
                Terror{" "}
                <div className="mx-2 w-1 h-1 bg-gray-400 rounded-full"></div>{" "}
                Investigação{" "}
                <div className="mx-2 w-1 h-1 bg-gray-400 rounded-full"></div>{" "}
                Policial
              </span>
            </div>
            <ScoreCircle score={8} size={60} />
          </div>

          <p className="mt-3 text-md text-neutral-400">
            Mickey faz parte de um programa espacial de colonização e sempre é
            enviado para missões perigosas, quase suicidas. Se morrer, ele é
            clonado e boa parte de suas memórias são recuperadas. Mas, após seis
            mortes, ele começa a entender o porquê de seu cargo nunca ter sido
            ocupado antes.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
