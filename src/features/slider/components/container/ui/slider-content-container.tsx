
import sliderContentContainer from '../style/slider-content-container.module.scss'
import SliderContent from "@/features/slider/components/content/ui/slider-content";
import {SLIDER_ITEM} from "@/features/slider/const/slider-item";

export default function SliderContentContainer () {
    return  (
        <div className={sliderContentContainer.container}>
            {SLIDER_ITEM.map((item) =>
                <SliderContent key={item.id} id={item.id} title={item.title} content={item.content}/>
            )}

        </div>
    )
}
