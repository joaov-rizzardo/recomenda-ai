import { TypeSelector } from "@/components/type-selector";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col bg-gray-950">
      <h1 className="text-7xl leading-relaxed text-emerald-600 font-semibold">
        Descubra o que assistir
      </h1>
      <Button>🔥 Bombando na última semana 🔥</Button>
      <Button variant={"outline"} className="mt-3">
        Quero algo especifico
      </Button>
      <TypeSelector selected={true} />
    </main>
  );
}
