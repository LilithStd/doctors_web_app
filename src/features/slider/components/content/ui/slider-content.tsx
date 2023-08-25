import {SliderContentTypes} from "@/features/slider/types/sliderContentTypes";

export default function SliderContent ({id,title,content}:SliderContentTypes) {

	console.log()
    return  (

        <div>
	        {id}
	        {title}
	        {content}
	        SliderContent

        </div>
    )
}
