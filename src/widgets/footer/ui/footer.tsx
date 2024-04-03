import SocialMediaList from "@/widgets/footer/components/socialList/socialMediaList";
import footer from '@/widgets/footer/style/footer.module.scss'
import {useMatchMedia} from "@/shared/hooks/media_query";

export default function Footer () {
    return  (
        <div className={footer.container}>
	        <SocialMediaList/>
        </div>
    )
}
