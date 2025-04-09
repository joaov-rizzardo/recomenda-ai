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
            className="w-full aspect-[1920/800] bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/7dowXHcFccjmxf0YZYxDFkfVq65.jpg')",
            }}
          />
        <DialogHeader className="relative -top-8 bg-gradient-to-b from-neutral-900/5 backdrop-blur-xs to-neutral-950 h-[calc(100%+32px)]">

          <DialogTitle className="text-emerald-400 mt-8">Mickey 17</DialogTitle>
          <DialogDescription className="text-gray-300">
            Mickey faz parte de um programa espacial de colonização e sempre é
            enviado para missões perigosas, quase suicidas. Se morrer, ele é
            clonado e boa parte de suas memórias são recuperadas. Mas, após seis
            mortes, ele começa a entender o porquê de seu cargo nunca ter sido
            ocupado antes.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
