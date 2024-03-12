import { create } from 'zustand'

interface SliderStore {
	currentSliderItem: number
	setElement: (sliderElement: number) => void
}

export const sliderStore = create<SliderStore>()((set) => ({
	currentSliderItem: 0,
	setElement: (sliderElement) => set((state) => ({
		currentSliderItem: state.currentSliderItem = sliderElement
	})),
}))
