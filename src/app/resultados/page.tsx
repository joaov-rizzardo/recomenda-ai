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
    <div>
      <h1 className="text-5xl uppercase font-normal text-center text-white">
        Seus resultados
      </h1>
      <p className="text-xl text-gray-500 mt-2 mb-4 text-center">
        Preparamos indicações fresquinhas para alegrar sua noite de
        entretenimento.
      </p>
      <div className="flex items-center gap-15">
        <Card className="bg-gray-900 border-slate-800 w-[250px]">
          <CardHeader>
            <Image
              src={
                "https://media.themoviedb.org/t/p/w220_and_h330_face/rqMl7ngnuRM4ZltatYQeSArG7gM.jpg"
              }
              alt=""
              width={"220"}
              height={"330"}
            />
          </CardHeader>
          <CardContent className="text-emerald-700 text-xl font-semibold leading-relaxed">
            Mickey 17
          </CardContent>
        </Card>
        <WatchableCard />
        <Card className="bg-gray-900 border-slate-800 w-[250px]">
          <CardHeader>
            <Image
              src={
                "https://media.themoviedb.org/t/p/w220_and_h330_face/75KximV3WhtvlWFneTrf1Pw61cu.jpg"
              }
              alt=""
              width={"220"}
              height={"330"}
            />
          </CardHeader>
          <CardContent className="text-emerald-700 text-xl font-semibold leading-relaxed">
            Devil May Cry
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 flex justify-end items-center gap-3">
        <Button variant={"outline"}>Recomeçar</Button>
        <Button>Indicar outros</Button>
      </div>
    </div>
  );
}
