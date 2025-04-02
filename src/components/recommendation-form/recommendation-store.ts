import { create } from "zustand";

export type MediaType = "movie" | "serie";

export type RecommendationType = "custom" | "tendencies"

type RecommendationStoreType = {
  mediaType: MediaType;
  recommendationType: RecommendationType;
  step: number;
  categories: string[];
  keywords: string[];
  nextStep: () => void;
  previousStep: () => void;
  changeMediaType: (_: MediaType) => void;
  changeRecommendationType: (_: RecommendationType) => void;
};

export const useRecommendationStore = create<RecommendationStoreType>((set) => ({
  step: 1,
  mediaType: "movie",
  recommendationType: "custom",
  categories: [],
  keywords: [],
  nextStep: () => set((state) => ({ ...state, step: state.step + 1 })),
  previousStep: () => set((state) => ({ ...state, step: state.step - 1 })),
  changeMediaType: (mediaType: MediaType) => set({ mediaType }),
  changeRecommendationType: (recommendationType: RecommendationType) => set({ recommendationType }),
}));
