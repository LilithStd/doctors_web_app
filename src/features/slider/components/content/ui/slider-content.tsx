import {SliderContentTypes} from "@/features/slider/types/sliderContentTypes";

export default function SliderContent ({id,title,content}:SliderContentTypes) {

	console.log(title)
    return  (

        <div>
	        <h2></h2>
	        {id}
	        {title}
	        {content}
	        SliderContent

        </div>
    )
}
