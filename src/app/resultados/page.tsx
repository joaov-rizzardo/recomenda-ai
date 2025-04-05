import { PREFERENCES_COOKIE_NAME } from "@/constants/preferences-cookie-name";
import { RecommendationHandler } from "@/lib/recommendation-handler";
import { PreferenceSchema } from "@/types/preference-types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Results() {
  const rawPreferences = (await cookies()).get(PREFERENCES_COOKIE_NAME);
  if (!rawPreferences) redirect("/");
  const { data: preferences, success } = PreferenceSchema.safeParse(
    JSON.parse(rawPreferences.value)
  );
  if (!success) redirect("/");
  const handler = new RecommendationHandler(preferences);
  const result = await handler.getRecommendations();
  console.log(result);
  return <h1>Hello world</h1>;
}
