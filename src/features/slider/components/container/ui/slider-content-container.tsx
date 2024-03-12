import sliderContentContainer from '../style/slider-content-container.module.scss'
import SliderContent from "@/features/slider/components/content/ui/slider-content";
import { SliderContentTypes } from "@/features/slider/types/sliderContentTypes";

export default function SliderContentContainer({ id, title, content, property }: SliderContentTypes) {
    return (
        <div className={sliderContentContainer.container}>
            <SliderContent id={id} title={title} content={content} property={property}/>
        </div>
    )
}
