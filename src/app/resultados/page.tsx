import { ResultList } from "@/components/result-list";
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
      <ResultList results={result.map((r) => r.toPlain())} />
    </div>
  );
}
