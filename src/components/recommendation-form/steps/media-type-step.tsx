"use client";

import { MediaType, useRecommendationStore } from "../recommendation-store";
import { MediaTypeCard } from "./components/media-type-card";

export function MediaTypeStep() {
  const { nextStep, changeMediaType } = useRecommendationStore();

  function select(mediaType: MediaType) {
    changeMediaType(mediaType);
    nextStep();
  }

  return (
    <div>
      <h2 className="text-4xl leading-relaxed text-emerald-200 text-center font-thin">
        O que gostaria de assistir hoje?
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-5 mt-5">
        <MediaTypeCard
          emote={"🎬"}
          name="Filmes"
          onSelect={() => select("movie")}
          description="Escolha um filme e mergulhe em aventuras épicas, dramas intensos ou comédias divertidas."
        />
        <MediaTypeCard
          emote={"📺"}
          name="Séries"
          onSelect={() => select("serie")}
          description="Descubra séries viciantes, com tramas envolventes e episódios que vão te prender do início ao fim."
        />
      </div>
    </div>
  );
}
