'use client'

import { useRecommendationStore } from "./recommendation-store"
import { GenreSelectionStep } from "./steps/genre-selection-step"
import { KeywordsStep } from "./steps/keywords-step"
import { MediaTypeStep } from "./steps/media-type-step"
import { RecommendationTypeStep } from "./steps/recommendation-type-step"

export function RecommendationForm(){
    const { step } = useRecommendationStore()

    return (
        <>
            {step === 1 && <MediaTypeStep />}
            {step === 2 && <RecommendationTypeStep />}
            {step === 3 && <GenreSelectionStep />}
            {step === 4 && <KeywordsStep />}
        </>
    )
}