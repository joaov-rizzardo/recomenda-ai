import { create } from "zustand";

export type MediaType = "movie" | "serie";

type RecommendationType = {
  mediaType: MediaType;
  recommendationType: "custom" | "tendencies";
  step: number;
  categories: string[];
  keywords: string[];
  nextStep: () => void;
  previousStep: () => void;
  changeMediaType: (_: MediaType) => void;
};

export const useRecommendationStore = create<RecommendationType>((set) => ({
  step: 1,
  mediaType: "movie",
  recommendationType: "custom",
  categories: [],
  keywords: [],
  nextStep: () => set((state) => ({ ...state, step: state.step + 1 })),
  previousStep: () => set((state) => ({ ...state, step: state.step - 1 })),
  changeMediaType: (mediaType: MediaType) => set({ mediaType }),
}));
