'use client'

import { useRouter } from 'next/navigation'
import { useRecommendationStore } from "../recommendation-store";
import { PreferencesType } from "@/types/preference-types";

export function usePreferences() {
  const router = useRouter();
  const { categories, mediaType, keywords, recommendationType } =
    useRecommendationStore();

  const setCookies = async () => {
    const body: PreferencesType = {
      mediaType,
      recommendationType,
      categories: Array.from(categories),
      keywords: Array.from(keywords),
    };
    await fetch("/api/save-preferences", {
      method: "POST",
      body: JSON.stringify(body),
    });
  };

  const redirect = async () => {
    await setCookies();
    router.push("/resultados");
  };

  return { redirect };
}
