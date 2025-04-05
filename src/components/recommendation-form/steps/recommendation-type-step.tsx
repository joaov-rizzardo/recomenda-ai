"use client";

import { Button } from "@/components/ui/button";
import { RecommendationTypeCard } from "./components/recommendation-card-type";
import { BsArrowLeft } from "react-icons/bs";
import {
  RecommendationType,
  useRecommendationStore,
} from "../recommendation-store";
import { useRouter } from "next/navigation";

export function RecommendationTypeStep() {
  const router = useRouter()
  const { nextStep, previousStep, changeRecommendationType, redirect } =
    useRecommendationStore();

  function select(recommendationType: RecommendationType) {
    changeRecommendationType(recommendationType);
    if (recommendationType === "custom") {
      nextStep();
      return;
    }
    redirect(router);
  }

  return (
    <div>
      <h2 className="text-4xl leading-relaxed text-emerald-200 text-center font-thin">
        Quer algo popular ou uma seleção personalizada?
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-5 mt-5">
        <RecommendationTypeCard
          emote={"🔥"}
          name="Tendências"
          onSelect={() => select("tendencies")}
          description="Veja os filmes e séries que estão bombando esta semana. Escolha e assista sem perder tempo!"
        />
        <RecommendationTypeCard
          emote={"🎯"}
          name="Personalizado"
          onSelect={() => select("custom")}
          description="Filtre por gêneros e palavras-chave para encontrar exatamente o que combina com seu estilo."
        />
      </div>
      <div className="flex justify-end mt-3">
        <Button variant={"link"} onClick={previousStep}>
          <BsArrowLeft /> Voltar
        </Button>
      </div>
    </div>
  );
}
