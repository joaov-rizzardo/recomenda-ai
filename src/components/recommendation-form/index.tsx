'use client'

import { useRecommendationStore } from "./recommendation-store"
import { MediaTypeStep } from "./steps/media-type-step"

export function RecommendationForm(){
    const { step } = useRecommendationStore()

    console.log(step)
    return (
        <>
            {step === 1 && <MediaTypeStep />}
            {step === 2 && <h2>hello world</h2>}
        </>
    )
}