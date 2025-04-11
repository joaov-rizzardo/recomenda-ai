"use client";

import { MovieGenres, SerieGenres } from "@/data/genres";
import { useRecommendationStore } from "../recommendation-store";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { BsArrowLeft } from "react-icons/bs";

export function GenreSelectionStep() {
  const {
    mediaType,
    previousStep,
    nextStep,
    categories,
    addCategory,
    removeCategory,
  } = useRecommendationStore();

  const genres = mediaType === "movie" ? MovieGenres : SerieGenres;

  function toggleCategory(categoryId: number) {
    if (!categories.has(categoryId)) {
      addCategory(categoryId);
    } else {
      removeCategory(categoryId);
    }
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed text-amber-600 text-center font-semilbold font-title">
        Quais gêneros está buscando?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 max-h-[70dvh] overflow-auto py-5 px-3 gap-4 mt-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl">
        {genres.map((genre) => (
          <label
            key={genre.id}
            className="flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-purple-500/20 transition"
          >
            <Checkbox
              id={`genre-${genre.id}`}
              className="border-gray-700"
              checked={categories.has(genre.id)}
              onCheckedChange={() => toggleCategory(genre.id)}
            />
            <span className="text-gray-400 text-sm md:text-md font-normal">{genre.name}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-end gap-3 mt-3">
        <Button variant={"link"} onClick={previousStep}>
          <BsArrowLeft /> Voltar
        </Button>
        <Button disabled={categories.size === 0} onClick={nextStep}>
          Continuar
        </Button>
      </div>
    </div>
  );
}
