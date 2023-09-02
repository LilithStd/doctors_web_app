'use client'
import slider from '../style/slider.module.scss'
import Image from "next/image";
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'
import SliderContentContainer from "@/features/slider/components/container/ui/slider-content-container";
import {SLIDER_ITEM} from "@/features/slider/const/slider-item";
import {useState} from "react";
import Link from "next/link";

export default function Slider () {
    const [currentSlider,setCurrentSlider] = useState(0)
    const SLIDER_ITEMS = SLIDER_ITEM.slice()
    const sliderContent = SLIDER_ITEMS[currentSlider]
    const redirectSliderItem = (item:string) => {
        const redirectItem = SLIDER_ITEMS.findIndex(
            (index) => index.id === item

        )
       setCurrentSlider(redirectItem)

    }
    const incrementSliderItem = () => {
        const firstSliderItem = currentSlider === 0
        const newIndex = firstSliderItem || currentSlider < SLIDER_ITEM.length - 1 ? currentSlider + 1 : 0
        setCurrentSlider(newIndex)
    }
    const decrementSliderItem = () => {
        const lastSliderItem = currentSlider === SLIDER_ITEM.length - 1
        const newIndex = lastSliderItem || currentSlider > 0 ? currentSlider - 1 : SLIDER_ITEM.length - 1
        setCurrentSlider(newIndex)
    }

    return  (

        <div className={slider.container}>
            <Image src={arrowLeft} alt={'arrow-left'} onClick={decrementSliderItem}/>
                <div className={slider.containerSliderContent}>
                    <SliderContentContainer  props={sliderContent}/>
                    <ul className={slider.pagination} >
                        {SLIDER_ITEMS.map((item) =>
                            <li className={slider.count}
                                key={item.id}
                                onClick={
                                    () => {
                                        redirectSliderItem(item.id)
                                    }
                            }>
                                {item.id}
                            </li>
                        )}
                    </ul>

                </div>
            <Image src={arrowRight} alt={'arrow-right'} onClick={incrementSliderItem}/>
        </div>
    )
}
