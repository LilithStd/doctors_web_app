import SocialMediaList from "@/widgets/footer/components/socialList/socialMediaList";
import footer from '@/widgets/footer/style/footer.module.scss'

export default function Footer () {
    return  (
        <div className={footer.container}>
	        <SocialMediaList/>
        </div>
    )
}
