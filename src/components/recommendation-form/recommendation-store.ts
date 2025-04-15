import { PreferencesType } from "@/types/preference-types";
import { useRouter } from "next/navigation";
import { create } from "zustand";

export type MediaType = PreferencesType["mediaType"];

export type RecommendationType = PreferencesType["recommendationType"];

type RecommendationStoreType = {
  mediaType: MediaType;
  recommendationType: RecommendationType;
  step: number;
  categories: Set<number>;
  keywords: Set<string>;
  nextStep: () => void;
  previousStep: () => void;
  changeMediaType: (_: MediaType) => void;
  changeRecommendationType: (_: RecommendationType) => void;
  addCategory: (category: number) => void;
  removeCategory: (category: number) => void;
  clearCategories: () => void;
  addKeyword: (keyword: string) => void;
  removeKeyword: (keyword: string) => void;
  redirect: (router: ReturnType<typeof useRouter>) => void;
  reset: () => void;
};

export const useRecommendationStore = create<RecommendationStoreType>(
  (set, get) => ({
    step: 1,
    mediaType: "movie",
    recommendationType: "custom",
    categories: new Set<number>(),
    keywords: new Set<string>(),
    nextStep: () => set((state) => ({ ...state, step: state.step + 1 })),
    previousStep: () => set((state) => ({ ...state, step: state.step - 1 })),
    changeMediaType: (mediaType: MediaType) =>
      set({ mediaType, categories: new Set<number>() }),
    changeRecommendationType: (recommendationType: RecommendationType) =>
      set({ recommendationType }),
    addCategory: (category: number) =>
      set((state) => {
        const newCategories = new Set(state.categories);
        newCategories.add(category);
        return { categories: newCategories };
      }),
    removeCategory: (category: number) =>
      set((state) => {
        const newCategories = new Set(state.categories);
        newCategories.delete(category);
        return { categories: newCategories };
      }),
    clearCategories: () => set({ categories: new Set<number>() }),
    addKeyword: (keyword: string) =>
      set((state) => {
        const newKeywords = new Set(state.keywords);
        newKeywords.add(keyword);
        return { keywords: newKeywords };
      }),
    removeKeyword: (keyword: string) =>
      set((state) => {
        const newKeywords = new Set(state.keywords);
        newKeywords.delete(keyword);
        return { keywords: newKeywords };
      }),
    redirect: async (router) => {
      const state = get();
      const body: PreferencesType = {
        mediaType: state.mediaType,
        recommendationType: state.recommendationType,
        categories: Array.from(state.categories),
        keywords: Array.from(state.keywords),
      };
      await fetch("/api/save-preferences", {
        method: "POST",
        body: JSON.stringify(body),
      });
      router.push("/resultados");
    },
    reset: () =>
      set({
        categories: new Set(),
        keywords: new Set(),
        mediaType: "movie",
        recommendationType: "custom",
        step: 1,
      }),
  })
);
