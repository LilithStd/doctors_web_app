'use client'
import slider from '../style/slider.module.scss'
import Image from "next/image";
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'
import SliderContentContainer from "@/features/slider/components/container/ui/slider-content-container";
import { SLIDER_ITEM } from "@/features/slider/const/slider-item";
import { useEffect, useState } from "react";
import Pagination from "@/features/slider/components/pagination/ui/pagination";


export default function Slider() {
    const [currentSlider, setCurrentSlider] = useState(0)
    const SLIDER_ITEMS = SLIDER_ITEM.slice()
    const sliderContent = SLIDER_ITEMS[currentSlider]



    useEffect(() => {
        const interval = setInterval(() => {
            if(currentSlider < SLIDER_ITEM.length - 1) {

                setCurrentSlider( currentSlider + 1)
            }else {
                setCurrentSlider(0)
            }



        }, 10000);
        return () => clearInterval(interval);
    },[currentSlider])

    const redirectSliderItem = (item: string) => {
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

    return (

        <div className={slider.container}>
            <Image
                src={arrowLeft}
                alt={'arrow-left'}
                onClick={decrementSliderItem}
                className={slider.arrowImage}
            />
            <div className={slider.containerSliderContent}>
                <SliderContentContainer
                    id={sliderContent.id}
                    title={sliderContent.title}
                    content={sliderContent.content}
                    property={slider.animation}
                />
                <Pagination
                    sliderItems={SLIDER_ITEMS}
                    currentSliderItem={sliderContent.id}
                    callBack={redirectSliderItem}
                />

            </div>
            <Image
                src={arrowRight}
                alt={'arrow-right'}
                onClick={incrementSliderItem}
                className={slider.arrowImage}
            />

        </div>
    )
}
