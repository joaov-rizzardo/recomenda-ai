import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-3xl flex justify-center items-center flex-col">
      <h1 className="text-center text-3xl leading-relaxed text-emerald-600 font-light">
      🎬 Descubra sua próxima maratona!
      </h1>
      <p className="text-xl text-gray-200 text-center">Encontre recomendações perfeitas de filmes e séries, personalizadas para o seu gosto. Escolha, filtre e assista sem perder tempo!</p>
      <Button className="bg-amber-400">Iniciar agora</Button>
    </main>
  );
}