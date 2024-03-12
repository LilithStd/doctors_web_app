import {socialList} from "@/widgets/footer/components/socialList/components/socialList";
import socialMedia from '@/widgets/footer/components/socialList/style/socialMedia.module.scss'
import Image from "next/image";

export default function SocialMediaList () {
    const socialMediaIcons = socialList(true)
    return  (
        <div className={socialMedia.container}>
            {socialMediaIcons.map((item) =>
                <Image src={item} alt={''}/>)
            }
        </div>
    )
}
