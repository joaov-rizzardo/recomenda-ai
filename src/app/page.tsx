import { TypeSelector } from "@/components/type-selector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="w-3xl">
      <h1 className="text-center text-6xl leading-relaxed text-emerald-600 font-light">
        Descubra o que assistir!
      </h1>
      {/* <div className="flex flex-col">
        <Button>🔥 Bombando na última semana 🔥</Button>
        <Button variant={"outline"} className="mt-3">
          Quero algo especifico
        </Button>
      </div> */}
      <div className="flex gap-3 mt-3">
        <Input placeholder="Magia, Medieval..." className="flex-1" />
        <TypeSelector name="🎭 Gêneros" selected={false} />
        {/* <Button variant={"outline"} className="">
          🔍 Buscar
        </Button> */}
      </div>
      <div className="flex justify-between mt-3 gap-12">
        <div className="flex gap-3">
          <TypeSelector name="🎬 Filmes" selected={true} />
          <TypeSelector name="📺 Séries" selected={false} />
        </div>
        <div className="flex gap-3 flex-1">
          {/* <Button variant={"outline"} className="flex" >
            Voltar
          </Button> */}
          <Button variant={"default"} className="flex-1">
          🔍 Buscar
          </Button>
        </div>
      </div>
    </main>
  );
}
