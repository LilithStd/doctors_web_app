'use client'
import slider from '../style/slider.module.scss'
import Image from "next/image";
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'
import SliderContentContainer from "@/features/slider/components/container/ui/slider-content-container";
import { SLIDER_ITEM } from "@/features/slider/const/slider-item";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMatchMedia } from '@/shared/hooks/media_query';
import Pagination from "@/features/slider/components/pagination/ui/pagination";
import {sliderStore} from "@/features/slider/store/sliderStore";

export default function Slider() {
    const [currentSlider, setCurrentSlider] = useState(0)
    // @ts-ignore
    const { isMobile } = useMatchMedia()
    function getRandomInteger(min:number, max:number) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        return result.toString()
    }
    const SLIDER_ITEMS = SLIDER_ITEM.slice()
    const sliderContent = SLIDER_ITEMS[currentSlider]

    const storeSetElement = sliderStore( state => state.setElement)
    const currentSliderElement = sliderStore(state => state.currentSliderItem)
    // const sliderContent = SLIDER_ITEMS[currentSliderElement]



    useEffect(() => {

        console.log(currentSlider)
        const interval = setInterval(() => {
            // if(currentSliderElement < SLIDER_ITEM.length - 1) {
            //     console.log('trigger 1st')
            //     console.log(sliderContent)
            //     storeSetElement(currentSliderElement + 1)
            // }else {
            //     console.log('2nd trigger')
            //     storeSetElement(0)
            // }
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
        console.log(currentSlider)
    }
    const decrementSliderItem = () => {
        const lastSliderItem = currentSlider === SLIDER_ITEM.length - 1
        const newIndex = lastSliderItem || currentSlider > 0 ? currentSlider - 1 : SLIDER_ITEM.length - 1
        setCurrentSlider(newIndex)
    }

    return (

        <div className={slider.container}>
            {isMobile ? '' : <Image src={arrowLeft} alt={'arrow-left'} onClick={decrementSliderItem} />}
            <div className={slider.containerSliderContent}>
                <SliderContentContainer
                    id={sliderContent.id}
                    title={sliderContent.title}
                    content={sliderContent.content} />
                <Pagination
                    sliderItems={SLIDER_ITEMS}
                    currentSliderItem={sliderContent.id}
                    callBack={redirectSliderItem}
                />

            </div>
            {isMobile ? '' : <Image src={arrowRight} alt={'arrow-right'} onClick={incrementSliderItem} />}

        </div>
    )
}
