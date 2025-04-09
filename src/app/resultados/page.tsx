import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { WatchableCard } from "@/components/watchable-card";
import { PREFERENCES_COOKIE_NAME } from "@/constants/preferences-cookie-name";
import { RecommendationHandler } from "@/lib/recommendation-handler";
import { PreferenceSchema } from "@/types/preference-types";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Results() {
  // const rawPreferences = (await cookies()).get(PREFERENCES_COOKIE_NAME);
  // if (!rawPreferences) redirect("/");
  // const { data: preferences, success } = PreferenceSchema.safeParse(
  //   JSON.parse(rawPreferences.value)
  // );
  // if (!success) redirect("/");
  // const handler = new RecommendationHandler(preferences);
  // const result = await handler.getRecommendations();
  // console.log(result);
  return (
    <div className="w-6xl bg-neutral-900/20 backdrop-blur-md border border-neutral-800 rounded-xl px-20 py-10">
      <h1 className="text-5xl uppercase font-normal text-center text-transparent bg-clip-text bg-gradient-to-br from-amber-800 to-amber-400 font-title">
        Seus resultados
      </h1>
      <p className="text-xl text-gray-300 mt-2 mb-4 text-center">
        Preparamos indicações fresquinhas para alegrar sua noite de
        entretenimento.
      </p>
      <div className="flex items-center gap-5 ">
        <WatchableCard />
        <Card className="flex-1 bg-transparent border-0">
          <CardHeader>
            <div className="group w-full aspect-[220/330] relative overflow-hidden rounded-xl">

            <Image
              src={
                "https://media.themoviedb.org/t/p/w220_and_h330_face/eODcpeaj6jFoVG1kBVpNFyFh45I.jpg"
              }
              alt=""
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            </div>
          </CardHeader>
        </Card>
        <Card className="flex-1 bg-transparent border-0">
          <CardHeader>
            <div className="group w-full aspect-[220/330] relative overflow-hidden rounded-xl">

            <Image
              src={
                "https://media.themoviedb.org/t/p/w220_and_h330_face/hSljn1jfCClIbHNdlz6cWQEjncV.jpg"
              }
              alt=""
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            </div>
          </CardHeader>
        </Card>
        {/* <WatchableCard /> */}

      </div>
      <div className="mt-6 flex justify-end items-center gap-3">
        <Button variant={"outline"}>Recomeçar</Button>
        <Button>Indicar outros</Button>
      </div>
    </div>
  );
}
