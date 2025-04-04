import { PREFERENCES_COOKIE_NAME } from "@/constants/preferences-cookie-name"
import { PreferenceSchema } from "@/types/preference-types"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Results(){
    const rawPreferences = (await cookies()).get(PREFERENCES_COOKIE_NAME)
    console.log({rawPreferences})
    if(!rawPreferences) redirect("/")
    const { data: preferences, success} = PreferenceSchema.safeParse(JSON.parse(rawPreferences.value));
    if(!success) redirect("/")
    return (
        <h1>Hello world</h1>
    )
}