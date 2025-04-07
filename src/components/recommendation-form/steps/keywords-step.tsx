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
    <div>
      <h2 className="text-4xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-br from-amber-800 to-amber-400 text-center font-semilbold font-title">
        Diga até três palavras chave para nos indicar o que está buscando
      </h2>
      <form
        className="flex gap-5 items-end mt-3"
        onSubmit={handleSubmit(submit)}
      >
        <Input
          placeholder="Magia, mistério, investigação..."
          className="h-12"
          {...register("keyword")}
        />
        <Button size={"lg"} variant={"secondary"} disabled={keywords.size >= 3}>
          <BsPlus className="size-6"/>
        </Button>
      </form>
      <div className="flex gap-4 items-center mt-5">
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
          <Button onClick={() => redirect(router)}>
            {keywords.size === 0 ? "Pular" : "Continuar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
