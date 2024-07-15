import {SliderContentTypes} from "@/features/slider/types/sliderContentTypes";
import sliderContent from "@/features/slider/components/content/style/slider-content.module.scss"
import {Title} from "@/shared/ui/title/title";
import {SIZE_TITLE_GLOBAL} from "@/global_utils/titleProps/title_props";
import {Text} from "@/shared/ui/text/ui/text";
export default function SliderContent ({title,content,property}:SliderContentTypes) {

    return  (
        <div className={`${sliderContent.container + property ? property : ''}`}>
            <Title
	            size={SIZE_TITLE_GLOBAL.MEDIUM}
	            content={title}
	            property={sliderContent.titleProperty}
            />
	        <Text
		        content={content}
	        />
        </div>
    )
}
