import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WatchableCard } from "@/components/watchable-card";
import { PREFERENCES_COOKIE_NAME } from "@/constants/preferences-cookie-name";
import { RecommendationHandler } from "@/lib/recommendation-handler";
import { PreferenceSchema } from "@/types/preference-types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Results() {
  const rawPreferences = (await cookies()).get(PREFERENCES_COOKIE_NAME);
  if (!rawPreferences) redirect("/");
  const { data: preferences, success } = PreferenceSchema.safeParse(
    JSON.parse(rawPreferences.value)
  );
  if (!success) redirect("/");
  const handler = new RecommendationHandler(preferences);
  const result = await handler.getRecommendations();
  return (
    <div className="max-w-5xl mx-5 lg:mx-0 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl px-10 lg:px-20 py-10">
      <h1 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed text-amber-600 text-center font-semilbold font-title">
        Seus resultados
      </h1>
      <p className="text-sm md:text-lg lg:text-xl text-gray-400 mt-2 mb-4 text-center">
        Preparamos indicações fresquinhas e cheias de personalidade para deixar
        sua noite de entretenimento ainda mais divertida, leve e do jeitinho que
        você gosta.
      </p>
      <Carousel className="w-full">
        <CarouselContent className="">
          {/* {result.map((watchable) => ( */}
            <CarouselItem className="basis-full md:basis-1/3">
              <WatchableCard watchable={result[0].toPlain()} />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/3">
              <WatchableCard watchable={result[1].toPlain()} />
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/3">
              <WatchableCard watchable={result[2].toPlain()} />
            </CarouselItem>
          {/* ))} */}
        </CarouselContent>
        <CarouselPrevious className="md:hidden border-none text-gray-300 -left-8" />
        <CarouselNext className="md:hidden border-none text-gray-300 -right-8" />
      </Carousel>

      <div className="mt-6 flex justify-end items-center gap-3">
        <Button variant={"outline"}>Recomeçar</Button>
        <Button>Indicar outros</Button>
      </div>
    </div>
  );
}
