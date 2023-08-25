import sliderContentContainer from '../style/slider-content-container.module.scss'
import SliderContent from "@/features/slider/components/content/ui/slider-content";
import {SliderContentTypes} from "@/features/slider/types/sliderContentTypes";

export default function SliderContentContainer (props:SliderContentTypes) {
    return  (
        <div className={sliderContentContainer.container}>
            <SliderContent id={props.props.id} title={props.props.title} content={props.props.content}/>
        </div>
    )
}
