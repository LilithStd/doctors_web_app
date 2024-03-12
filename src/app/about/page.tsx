import {Title} from "@/shared/ui/title/title";
import {Text} from "@/shared/ui/text/ui/text";
import {SIZE_TITLE_GLOBAL} from "@/global_utils/titleProps/title_props";
import {ABOUT_US} from "@/app/about/props/props";
import aboutUs from '@/app/about/style/about.module.scss'
export default function AboutUs () {
    return  (

        <div className={aboutUs.container}>
	        <Title
		        size={SIZE_TITLE_GLOBAL.LARGE}
		        content={ABOUT_US.TITLE_CONTEXT}
		        property={aboutUs.title}
	        />
	        <Text
		        content={ABOUT_US.TEXT_CONTENT}
		        full={true}
	        />
        </div>
    )
}
