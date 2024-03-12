import {SliderContentTypes} from "@/features/slider/types/sliderContentTypes";

export default function SliderContent ({id,title,content,property}:SliderContentTypes) {

    return  (

        <div className={property}>
	        {id}
	        {title}
	        {content}
	        SliderContent
        </div>
    )
}
