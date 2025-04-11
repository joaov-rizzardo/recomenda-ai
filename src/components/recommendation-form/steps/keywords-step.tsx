"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Keyword } from "./components/keyword";
import { BsArrowLeft, BsPlus } from "react-icons/bs";
import { useRecommendationStore } from "../recommendation-store";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  keyword: z.string().min(1),
});

type FormType = z.infer<typeof FormSchema>;

export function KeywordsStep() {
  const router = useRouter();
  const { addKeyword, removeKeyword, previousStep, keywords, redirect } =
    useRecommendationStore();

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const submit = ({ keyword }: FormType) => {
    if (keywords.size >= 3) return;
    addKeyword(keyword);
    reset();
  };

  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl px-6 md:px-12 pt-12 pb-8">
      <h2 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed text-amber-600 text-center font-semilbold font-title">
        Palavras chave
      </h2>
      <p className="mt-2 text-neutral-500 text-xs md:text-md lg:text-lg xl:text-xl">
        Nos diga até três palavras-chave que descrevam o que você quer assistir
        — pode ser um gênero, tema ou até um sentimento, como 'comédia
        romântica', 'futurista', ou 'histórias reais'. Vamos encontrar algo que
        combine com o seu momento! Se preferir, você pode pular essa etapa.
      </p>
      <form
        className="flex gap-5 items-end mt-5"
        onSubmit={handleSubmit(submit)}
      >
        <Input
          placeholder="Magia, mistério, investigação..."
          className="h-9 text-sm lg:text-md"
          {...register("keyword")}
        />
        <Button variant={"secondary"} disabled={keywords.size >= 3}>
          <BsPlus className="size-6" />
        </Button>
      </form>
      <div className="flex flex-col md:flex-row gap-4 items-end md:items-center mt-5">
        <div className="flex flex-1 gap-3 flex-wrap">
          {Array.from(keywords).map((keyword) => (
            <Keyword
              key={keyword}
              name={keyword}
              onDelete={() => removeKeyword(keyword)}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <Button variant={"link"} onClick={previousStep}>
            <BsArrowLeft /> Voltar
          </Button>
          <Button size={"sm"} onClick={() => redirect(router)}>
            {keywords.size === 0 ? "Pular" : "Continuar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
