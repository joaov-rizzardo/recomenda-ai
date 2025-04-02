'use client'

import { MediaType, useRecommendationStore } from "../recommendation-store";
import { MediaTypeCard } from "./components/media-type-card";
import { MdMovie, MdTv } from "react-icons/md";

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
        <MediaTypeCard Icon={MdMovie} name="Filmes" onSelect={() => select("movie")} />
        <MediaTypeCard Icon={MdTv} name="Séries" onSelect={() => select("serie")} />
      </div>
    </div>
  );
}
