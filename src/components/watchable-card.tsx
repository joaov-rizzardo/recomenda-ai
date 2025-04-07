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
      <DialogTrigger>
        <Card className="bg-gray-900 border-slate-800 w-[250px]">
          <CardHeader>
            <Image
              src={
                "https://media.themoviedb.org/t/p/w220_and_h330_face/tXGVxrg7l8RAD1MzGcYjuKFo6Mt.jpg"
              }
              alt=""
              width={"220"}
              height={"330"}
            />
          </CardHeader>
          <CardContent className="text-emerald-700 text-xl font-semibold leading-relaxed">
            The bondsman
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent
        className="bg-cover bg-center border-slate-800 p-0 text-white"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/qUc0Hol3eP74dbW4YyqT6oRLYgT.jpg')",
        }}
      >
        <DialogHeader className="bg-emerald-800/15 rounded-md p-4">
          <DialogTitle className="text-emerald-400">Mickey 17</DialogTitle>
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
