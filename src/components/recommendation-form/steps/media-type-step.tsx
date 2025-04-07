"use client";

import { BiSolidCameraMovie, BiSolidTv } from "react-icons/bi";
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
      <h2 className="text-5xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-br from-amber-800 to-amber-400 text-center font-semilbold font-title">
        O que gostaria de assistir hoje?
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-5 mt-5">
        <MediaTypeCard
          Icon={BiSolidCameraMovie}
          name="Filmes"
          onSelect={() => select("movie")}
          description="Escolha um filme e mergulhe em aventuras épicas, dramas intensos ou comédias divertidas."
        />
        <MediaTypeCard
          Icon={BiSolidTv}
          name="Séries"
          onSelect={() => select("serie")}
          description="Descubra séries viciantes, com tramas envolventes e episódios que vão te prender do início ao fim."
        />
      </div>
    </div>
  );
}
