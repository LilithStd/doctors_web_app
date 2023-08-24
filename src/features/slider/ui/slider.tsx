import slider from '../style/slider.module.scss'
import Image from "next/image";
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'
import SliderContentContainer from "@/features/slider/components/container/ui/slider-content-container";
export default function Slider () {
    return  (

        <div className={slider.container}>
            <Image src={arrowLeft} alt={'arrow-left'}/>
                <SliderContentContainer/>
            <Image src={arrowRight} alt={'arrow-right'}/>
        </div>
    )
}
