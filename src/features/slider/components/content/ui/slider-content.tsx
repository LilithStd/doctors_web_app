import {SliderContentTypes} from "@/features/slider/types/sliderContentTypes";

export default function SliderContent ({id,title,content}:SliderContentTypes) {

    return  (

        <div>
	        {id}
	        {title}
	        {content}
	        SliderContent

        </div>
    )
}
